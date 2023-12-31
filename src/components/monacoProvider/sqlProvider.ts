import { useFlyStore } from '../../store/flyStore'
import { getPropertyTypeEmoji, getPropertyTypeName } from '../../type/model/propertyTypeCodeRef'
import { getTableShortName } from '../../util'
import { formatFquery } from '../../util/formateFquery'
import { message } from '../../util/message'
import { monacoInitializedUtil } from '../../util/monacoUtil'

/**
 * 检查给定位置是否在 SQL 范围内
 * @param model - Monaco 编辑器的文本模型
 * @param position - 要检查的位置
 * @returns 如果位置在 SQL 范围内，则返回 { in: true, sqlRange: monaco.Range }，否则返回 { in: false }
 */
export function checkInSqlRangeFn(
  model: monaco.editor.ITextModel,
  position: monaco.Position
): {
  in: boolean
  sqlRange?: monaco.Range
} {
  let text = model.getValue() // 获取 Monaco Editor 的文本内容
  let lines = text.split('\n') // 将文本按照行切分
  let totalLengthSoFar = 0 // 累计长度

  let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g
  let match

  const sqlRangeList: Array<monaco.Range> = []
  let seq = 0
  while ((match = regex.exec(text))) {
    let start = match.index // 匹配的起始字符位置
    let end = match.index + match[0].length // 匹配的结束字符位置
    const range = {
      startLineNumber: 0,
      endLineNumber: 0,
      startColumn: 0,
      endColumn: 0
    }
    const rangeForText = getRangeForText(match[0], model)
    sqlRangeList.push(
      new monaco.Range(
        rangeForText.startLineNumber,
        rangeForText.startColumn,
        rangeForText.endLineNumber,
        rangeForText.endColumn
      )
    )
  }
  for (let i = 0; i < sqlRangeList.length; i++) {
    let range = sqlRangeList[i]
    if (range.containsPosition(position)) {
      return {
        in: true,
        sqlRange: range
      }
    }
  }
  return {
    in: false
  }
}
// const { Parser } = require('@florajs/sql-parser');
// import { parse, Statement } from 'pgsql-ast-parser';

const tableDataSuggestionsCache = new Map<string, monaco.languages.CompletionItem[]>()
const tableDataSelectAllSuggestionsCache = new Map<string, monaco.languages.CompletionItem>()
let sqlFuncCompletionItem: monaco.languages.CompletionItem[] = []
monacoInitializedUtil.addInitializedCallback(() => {
  sqlFuncCompletionItem = getSqlFuncCompletionItem()
})
/**
 * 预热表数据建议缓存。
 *
 * @param model - 文本模型。
 */
export const warm_upTableDataSuggestionsCache = (model) => {
  tableDataSuggestionsCache.clear()
  tableDataSelectAllSuggestionsCache.clear()
  // 获取模型中的文本内容
  const text = model.getValue()
  let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g
  let match
  while ((match = regex.exec(text))) {
    const sqlText = match[0]
    const partsIndex = sqlText.indexOf('=')
    const queryString = sqlText.substring(partsIndex + 1).trim()
    let formattedSQL = formatFquery(queryString.replaceAll('//', '--//'), '')

    const completionItems = SQL2CompletionItems(formattedSQL)
    completionItems.forEach((item) => {
      tableDataSuggestionsCache.set(item.tableAs, item.CompletionItems)
      const selectAllLine: string[] = []
      item.CompletionItems.forEach((item1) => {
        selectAllLine.push(item1.insertText)
      })
      const selectAllCompletionItem = {
        label: item.tableAs.split('.')[0] + '.' + 'all',
        kind: monaco.languages.CompletionItemKind.Event,
        insertText: selectAllLine.join(''),
        range: null,
        preselect: true,
        detail: 'selectAll'
      }
      // debugger
      tableDataSelectAllSuggestionsCache.set(item.tableAs, selectAllCompletionItem)
    })
  }
}

type TableNameAsAndCompletionItems = {
  tableAs?: string
  CompletionItems?: monaco.languages.CompletionItem[]
}
const SQL2CompletionItems = (formattedSQL: string): TableNameAsAndCompletionItems[] => {
  let sqlQueryTables: SqlQueryTable[]
  try {
    sqlQueryTables = getSqlQueryTables(formattedSQL)
  } catch (e) {
    console.log('sql解析失败')
    throw new Error(e)
  }
  const flyStore = useFlyStore()
  const tableNameAsAndCompletionItems: TableNameAsAndCompletionItems[] = new Array<TableNameAsAndCompletionItems>()
  sqlQueryTables.forEach((item) => {
    let tableData = flyStore.tableNameDataMap.get(item.tableName)
    if (!tableData) {
      tableData = flyStore.dictNameDataMap.get(item.tableName.toLowerCase())
    }
    if (tableData) {
      const completionItems: monaco.languages.CompletionItem[] = tableData.properties.map((property, index) => {
        const label = `${item.alias}.${property.columnname}(${property.propertyname})`
        let pure_insertText = `${item.alias}.${property.columnname} `
        let insertText = pure_insertText + `,//${property.propertyname}\n`

        const typeDesc =
          getPropertyTypeEmoji(Number(property.propertytypecode)) + getPropertyTypeName(property.propertytypecode)
        const completionItem: monaco.languages.CompletionItem = {
          label: label,
          kind: monaco.languages.CompletionItemKind.Field,
          insertText: insertText,
          sortText: String(index),
          filterText: pure_insertText,
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          preselect: true,
          range: null,
          detail: typeDesc + `\n${getPropertyTypeName(property.propertycode)}${property.propertydescr}`
        }
        return completionItem
      })
      tableNameAsAndCompletionItems.push({
        tableAs: item.tableName + '.' + item.alias,
        CompletionItems: completionItems
      })
      // return [item.tableName + item.alias, completionItems]
      // tableDataSuggestionsCache.set(item.tableName + item.alias, completionItems)
    }
  })
  return tableNameAsAndCompletionItems
}

/**
 * 根据提供的参数获取 SQL 自动补全项。
 *
 * @param model - 文本模型。
 * @param position - 文本模型中的位置。
 * @param context - 补全上下文。
 * @param token - 取消令牌。
 * @param range - 文本模型中的范围。
 * @returns 一个解析为 CompletionList 的 Promise。
 */
export function getSqlCompletionItems(
  model: monaco.editor.ITextModel,
  position: monaco.Position,
  context: monaco.languages.CompletionContext,
  token: monaco.CancellationToken,
  range: monaco.Range
): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
  const flyStore = useFlyStore()
  const sqlText = model.getValueInRange(range)
  const partsIndex = sqlText.indexOf('=')
  const queryString = sqlText.substring(partsIndex + 1).trim()
  let formattedSQL = formatFquery(queryString.replaceAll('//', '--//'), '')
  let sqlQueryTables: SqlQueryTable[]
  try {
    // 获取 SQL 查询中的表名和别名。
    sqlQueryTables = getSqlQueryTables(formattedSQL)
  } catch (e) {
    console.log('sql解析失败')
    throw new Error(e)
  }

  console.log(sqlQueryTables)
  //判断当前位置是否在form后
  const textBeforePosition = model.getValueInRange(
    new monaco.Range(range.startLineNumber, range.startColumn, position.lineNumber, position.column)
  )
  const isAfterForm = /from\s+/i.test(textBeforePosition)
  //判断当前位置前后是否有 ( )
  const bracketPairAroundCursor = isBracketPairAroundCursor(position, model, range)

  const selectAllCompletionItems: monaco.languages.CompletionItem[] = []

  let suggestions = sqlQueryTables
    .map((item) => {
      const key = item.tableName + '.' + item.alias

      let tableData = flyStore.tableNameDataMap.get(item.tableName)
      if (!tableData) {
        tableData = flyStore.dictNameDataMap.get(item.tableName.toLowerCase())
      }
      if (!tableData) {
        return []
      }
      const completionItemsCache = tableDataSuggestionsCache.get(key)
      const selectAllcompletionItemsCache = tableDataSelectAllSuggestionsCache.get(key)
      let selectAllLine: string[] = []
      if (completionItemsCache) {
        completionItemsCache.forEach((item) => {
          item.range = null
          if (isAfterForm) {
            if (bracketPairAroundCursor) {
              item.insertText = item.filterText.trim()
            } else {
              //@ts-ignore
              item.insertText = item.filterText
            }
          } else {
            if (bracketPairAroundCursor) {
              item.insertText = item.filterText.trim()
            } else {
              //@ts-ignore
              item.insertText = item.documentation
            }
          }
          // console.log(item.insertText)
        })
        if (!isAfterForm) {
          selectAllCompletionItems.push(selectAllcompletionItemsCache)
        }
        return completionItemsCache
      }

      const completionItems = tableData.properties.map((property, index) => {
        const label = `${item.alias}.${property.columnname}(${property.propertyname})`
        let pure_insertText = `${item.alias}.${property.columnname} `
        let insertText = pure_insertText + `,//${property.propertyname}\n`
        selectAllLine.push(insertText)
        const typeDesc =
          getPropertyTypeEmoji(Number(property.propertytypecode)) + getPropertyTypeName(property.propertytypecode)
        const completionItem: monaco.languages.CompletionItem = {
          label: label,
          kind: monaco.languages.CompletionItemKind.Field,
          insertText: isAfterForm ? pure_insertText : insertText,
          //@ts-ignore
          // insertText_backup: insertText,
          sortText: String(index),
          filterText: pure_insertText,
          documentation: insertText,
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range: new monaco.Range(position.lineNumber, position.column - 1, position.lineNumber, position.column),
          preselect: true,
          detail: typeDesc + `\n${getPropertyTypeName(property.propertycode)}${property.propertydescr}`
        }
        return completionItem
      })
      if (!isAfterForm) {
        const selectAllCompletionItem = {
          label: item.alias + '.' + 'all',
          kind: monaco.languages.CompletionItemKind.Event,
          insertText: selectAllLine.join(''),
          range: null,
          preselect: true,
          detail: 'selectAll'
        }
        // debugger
        selectAllCompletionItems.push(selectAllCompletionItem)
        tableDataSelectAllSuggestionsCache.set(key, selectAllCompletionItem)
      }
      tableDataSuggestionsCache.set(key, completionItems)
    })
    .flat()
  //   if (isAfterForm) {
  if (generalSqlCompletionItems.length == 0) {
    generalSqlCompletionItems = [
      {
        label: 'yyy',
        kind: monaco.languages.CompletionItemKind.Text,
        insertText: '"yyyy-MM-dd hh:mm:ss"',
        preselect: true,
        range: null,
        detail: '格式化日期',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'ifend',
        kind: monaco.languages.CompletionItemKind.Field,
        insertText: '{#if $1} \n\n$2{#endif}',
        range: null,
        preselect: true,
        detail: '{#if} {#endif}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'ifend',
        kind: monaco.languages.CompletionItemKind.Function,
        range: null,
        preselect: true,
        detail: '{#if} {#endif}',
        insertText: '{#if $1} \n\t$2\n{#endif}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'left',
        kind: monaco.languages.CompletionItemKind.Field,
        preselect: true,
        range: null,
        detail: 'left join',
        insertText: 'left join $1 as $2 on $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'LEFT',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        detail: 'LEFT JOIN',
        insertText: 'LEFT JOIN $1 AS $2 ON $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'right',
        kind: monaco.languages.CompletionItemKind.Field,
        preselect: true,
        range: null,
        detail: 'right join',
        insertText: 'right join $1 as $2 on $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'RIGHT',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        detail: 'RIGHT JOIN',
        insertText: 'RIGHT JOIN $1 AS $2 ON $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'inner',
        kind: monaco.languages.CompletionItemKind.Field,
        preselect: true,
        range: null,
        detail: 'inner join',
        insertText: 'inner join $1 as $2 on $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'INNER',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        detail: 'INNER JOIN',
        insertText: 'INNER JOIN $1 AS $2 ON $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'full',
        kind: monaco.languages.CompletionItemKind.Field,
        preselect: true,
        range: null,
        detail: 'full join',
        insertText: 'full join $1 as $2 on $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'FULL',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        detail: 'FULL JOIN',
        insertText: 'FULL JOIN $1 AS $2 ON $3',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'where',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        insertText: 'where $1',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'between',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        insertText: 'between $1 and $2',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'case',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        insertText: 'case when $1 then $2 else $3 end',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'order',
        range: null,
        kind: monaco.languages.CompletionItemKind.Field,
        preselect: true,
        detail: 'order by',
        insertText: 'order by $1',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'norule',
        kind: monaco.languages.CompletionItemKind.Field,
        preselect: true,
        range: null,
        insertText: 'NORULE',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'paging',
        kind: monaco.languages.CompletionItemKind.Field,
        range: null,
        preselect: true,
        insertText: 'PAGING',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      }
    ]
  }
  if (!isAfterForm) {
    suggestions = suggestions.concat(selectAllCompletionItems)
  }
  if (!suggestions[0]) suggestions = []

  suggestions.push(...generalSqlCompletionItems)
  debugger
  suggestions.push(...sqlFuncCompletionItem)

  console.log('suggestions len', suggestions.length)
  return {
    suggestions
  }
}

interface SqlQueryTable {
  tableName: string
  alias: string
}
import { astVisitor, parse, parseFirst, Statement } from 'pgsql-ast-parser'
import { FunctionDefinition, getSqlFuncCompletionItem } from './sqlFuncProvider'

/**
 * 获取 SQL 查询中的表名和别名。
 *
 * @param sqlText SQL 查询文本
 * @returns 包含表名和别名的数组
 */
const getSqlQueryTables = (sqlText: string): Array<SqlQueryTable> => {
  // debugger
  // formattedSQL = formattedSQL.replace(/,\s*(select\s+form\s+form)/i, ' $1')
  //删除formattedSQL where 之后的内容 无需关注
  // 使用正则表达式删除WHERE子句后的内容
  //替换 select 和 form之间的内容为*

  // 替换 SELECT 和 FROM 之间的内容为 *
  sqlText = sqlText.replace(/SELECT([\s\S]*?)FROM/i, 'SELECT * FROM')

  // 删除 WHERE 子句及其后的内容
  sqlText = sqlText.replace(/WHERE([\s\S]*)$/i, '')

  // 删除所有 JOIN ... ON 之间的内容
  const removeOnClause1 = (sqlText: string): string => {
    let lowerCaseSql = sqlText.toLowerCase()
    let splitText = lowerCaseSql.split('join ')
    let newText = []
    for (let i = 0; i < splitText.length; i++) {
      let partBeforeOn = splitText[i].split(' on ')[0]
      //@ts-ignore
      newText.push(partBeforeOn)
    }
    return newText.join('\njoin ')
  }
  const removeOnClause = (sqlText: string): string => {
    let splitText = sqlText.toLowerCase().split('join ')
    return splitText.map((part) => part.split(' on ')[0]).join('\njoin ')
  }
  sqlText = removeOnClause(sqlText)

  const SqlQueryTables = new Array<SqlQueryTable>()

  let joins = 0
  const visitor = astVisitor((map) => ({
    // implement here AST parts you want to hook

    tableRef: (t) =>
      SqlQueryTables.push({
        tableName: t.name,
        alias: t.alias || t.name
      }),
    join: (t) => {
      joins++
      // call the default implementation of 'join'
      // this will ensure that the subtree is also traversed.
      map.super().join(t)
    }
  }))

  // start traversing a statement
  visitor.statement(parseFirst(sqlText))

  // print result
  return SqlQueryTables
}
const getSqlQueryTables0ld = (sqlText: string): Array<SqlQueryTable> => {
  let regex = /\bFROM\s+([^\s]+)(?:\s+AS\s+)?(\w+)?|\bJOIN\s+([^\s]+)(?:\s+AS\s+)?(\w+)?/gim

  let match
  let result: any[] = []

  while ((match = regex.exec(sqlText)) !== null) {
    let tableName
    let alias

    if (match[1]) {
      tableName = match[1]
      alias = match[2] ? match[2] : match[1]
      result.push({ tableName: tableName, alias: alias })
    }

    if (match[3]) {
      tableName = match[3]
      alias = match[4] ? match[4] : match[3]
      result.push({ tableName: tableName, alias: alias })
    }
  }

  return result
}

function getRangeForText(text: string, model: monaco.editor.IModel): monaco.IRange | undefined {
  const matches = model.findMatches(text, false, false, true, null, true)

  // Check if a match was found
  if (matches.length > 0) {
    return matches[0].range
  }

  // If no match was found, return undefined
  return undefined
}

let generalSqlCompletionItems: monaco.languages.CompletionItem[] = []

interface autoAsSqlCompletionRet {
  in: boolean
  tableName?: string
  shortName?: string
}
export function autoAsSqlCompletion(
  model: monaco.editor.ITextModel,
  position: monaco.Position,
  context: monaco.languages.CompletionContext,
  token: monaco.CancellationToken
): autoAsSqlCompletionRet {
  const asArray = ['a', 'A', 'as', 'AS']
  // 获取光标位置的当前行的内容
  const lineContent = model.getValueInRange({
    startLineNumber: position.lineNumber,
    startColumn: 1,
    endLineNumber: position.lineNumber,
    endColumn: position.column
  })

  // 使用正则表达式匹配最后的两个单词
  const match = lineContent.match(/\b(\w+)\s+(\w+)\s*$/)

  if (match == null) {
    return {
      in: false
    }
  }

  // debugger
  const secondLastWord = match[1]
  const lastWord = match[2]
  if (asArray.indexOf(lastWord) != -1) {
    const tableShortName = getTableShortName(secondLastWord)
    return {
      in: true,
      tableName: secondLastWord,
      shortName: tableShortName
    }
  }
  return {
    in: false
  }
}
function isBracketPairAroundCursor(position: monaco.Position, model: monaco.editor.ITextModel, range: monaco.Range) {
  let lineNumber = position.lineNumber
  let decorations = model.getAllDecorations()

  let isBracketHighlighted = decorations.some((deco) => {
    let startLineNumber = deco.range.startLineNumber
    let endLineNumber = deco.range.endLineNumber
    let startColumn = deco.range.startColumn
    let endColumn = deco.range.endColumn
    let inlineClassName = deco.options.inlineClassName
    let rangeMatch =
      startLineNumber <= lineNumber &&
      lineNumber <= endLineNumber &&
      startColumn <= position.column &&
      position.column <= endColumn
    let classMatch = inlineClassName === 'bracket-highlighting-0' || inlineClassName === 'bracket-highlighting-1'
    return rangeMatch && classMatch
  })

  console.log('是否在括号内:', isBracketHighlighted)
  return isBracketHighlighted
}
