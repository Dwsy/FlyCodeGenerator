import { useFlyStore } from "../../store/flyStore";
import { getPropertyTypeEmoji, getPropertyTypeName } from "../../type/model/propertyTypeCodeRef";
import { formatFquery } from "../../util/formateFquery";

export const registerProviders = () => {


  monaco.languages.registerCompletionItemProvider('flycode', {
    //@ts-ignore
    provideCompletionItems: function (model, position, context, token) {

      const checkInSqlRange = checkInSqlRangeFn(model, position)
      debugger

      if (checkInSqlRange.in) {
        const items = getSqlCompletionItemsWithCache(model, position, context, token, checkInSqlRange.sqlRange)
        // debugger

        return items
      }
      const range = {
        startLineNumber: position.lineNumber,
        startColumn: position.column,
        endLineNumber: position.lineNumber,
        endColumn: position.column
      }
      console.log(arguments)
      return {
        suggestions: [
          {
            label: 'fun',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'function $1($2){$3\t\n\n}',
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'i',
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'if ($1) {\n\t$2\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

          }, {
            label: "ie",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: "if ($1) {\n\t$2\n} else {\n\t$3\n}",
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: 'fo',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'for (var $1 = 0; $2 < $3; $4++) {\n\t$5\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

          },
          {
            label: 'foi',
            kind: monaco.languages.CompletionItemKind.Event,
            insertText: 'for (var i = 0; i < $1.length; i++) {\n\t$2\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: 'foof',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'for (var $1 of $2) {\n\t$3\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

          }, {
            label: 'foin',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'for (var $1 in $2) {\n\t$3\n}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

          }, {
            label: "log",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "FLY.log($1)",
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

          }, {
            label: "sel",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "select\n $1 \nfrom $2;",
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

          }, {
            label: "thr",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "throw new Error($1)",
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          }, {
            label: "tr",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "try {\n\t$1\n} catch (error) {\n\t$2\n}",
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "yyy",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "yyyy-MM-dd hh:mm:ss",
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "BO.",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: 'BO.new("$1")',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "ifend",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: '{#if $1} \n\n$2{#endif}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,

          },
          {
            label: "ifend",
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: '{#if $1} \n\t$2\n{#endif}',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "left",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'left join $1 as $2 on $3',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "LEFT",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'LEFT JOIN $1 AS $2 ON $3',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          }, {
            label: "between",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'between $1 and $2',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          }, {
            label: "case",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'case when $1 then $2 else $3 end',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "order",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'order by $1',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "norule",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'NORULE',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "paging",
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'PAGING',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: "D",
            kind: monaco.languages.CompletionItemKind.Class,
            insertText: 'Dwsy',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          }
          //  {

          // }

        ]
      };
    }
  });
}


export function checkInSqlRangeFn(model: monaco.editor.ITextModel, position: monaco.Position): {
  in: boolean,
  sqlRange?: monaco.Range
} {

  let text = model.getValue(); // 获取 Monaco Editor 的文本内容
  let lines = text.split('\n'); // 将文本按照行切分
  let totalLengthSoFar = 0; // 累计长度

  let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g;
  let match;

  const sqlRangeList: Array<monaco.Range> = []
  let seq = 0
  while ((match = regex.exec(text))) {
    let start = match.index; // 匹配的起始字符位置
    let end = match.index + match[0].length; // 匹配的结束字符位置
    const range = {
      startLineNumber: 0,
      endLineNumber: 0,
      startColumn: 0,
      endColumn: 0
    }
    const rangeForText = getRangeForText(match[0], model)
    sqlRangeList.push(new monaco.Range(rangeForText.startLineNumber, rangeForText.startColumn, rangeForText.endLineNumber, rangeForText.endColumn))
  }
  for (let i = 0; i < sqlRangeList.length; i++) {
    let range = sqlRangeList[i];
    if (range.containsPosition(position)) {
      return {
        in: true,
        sqlRange: range
      }
    }
  }
  return {
    in: false,
  }
}
// const { Parser } = require('@florajs/sql-parser');
// import { parse, Statement } from 'pgsql-ast-parser';

function getSqlCompletionItems(model: monaco.editor.ITextModel, position: monaco.Position, context: monaco.languages.CompletionContext, token: monaco.CancellationToken, range: monaco.Range): monaco.languages.ProviderResult<monaco.languages.CompletionList> {
  const flyStore = useFlyStore()
  const sqlText = model.getValueInRange(range)
  const partsIndex = sqlText.indexOf('=');
  const queryString = sqlText.substring(partsIndex + 1).trim();
  let formattedSQL = formatFquery(queryString.replaceAll("//", "--//"), '')
  const sqlQueryTables = getSqlQueryTables(formattedSQL)
  console.log(JSON.stringify(sqlQueryTables))
  const suggestions = sqlQueryTables.map((item) => {
    let tableData = flyStore.tableNameDataMap.get(item.tableName)
    if (!tableData) {
      tableData = flyStore.dictNameDataMap.get(item.tableName.toLowerCase())
    }
    if (!tableData) {
      return []
    }
    // console.log(tableData)
    const completionItems = tableData.properties.map((property) => {
      const text = `${item.alias}.${property.columnname}(${property.propertyname})`
      const typeDesc = getPropertyTypeEmoji(Number(property.propertytypecode)) + getPropertyTypeName(property.propertycategorycode)
      const completionItem: monaco.languages.CompletionItem = {
        label: text,
        kind: monaco.languages.CompletionItemKind.Field,
        insertText: text,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        range: null,
        preselect: true,
        detail: typeDesc + `${getPropertyTypeName(property.propertycode)}${property.propertydescr}`,
      }
      return completionItem
    })
    return completionItems
  }).flat()
  debugger
  return {
    suggestions
  }
}
function withCache_getSqlCompletionItems(getSqlCompletionItems) {
  let cache = {
    time: 0,
    tableName: "",
    result: undefined as monaco.languages.ProviderResult<monaco.languages.CompletionList> | undefined,
  };

  return function (...args) {
    const model: monaco.editor.ITextModel = args[0]
    const range: monaco.Range = args[4]
    const sqlText = model.getValueInRange(range)
    const partsIndex = sqlText.indexOf('=');
    const queryString = sqlText.substring(partsIndex + 1).trim();
    let formattedSQL = formatFquery(queryString.replaceAll("//", "--//"), '')
    const sqlQueryTables = getSqlQueryTables(formattedSQL)
    const tableName = sqlQueryTables[0]?.tableName; // assuming the first table name is the primary one.
    if (Date.now() - cache.time < 25000 && cache.tableName === tableName) {
      return cache.result;
    }
    const result = getSqlCompletionItems(...args);
    cache = { time: Date.now(), tableName: tableName, result: result };
    return result;
  };
}

const getSqlCompletionItemsWithCache = withCache_getSqlCompletionItems(getSqlCompletionItems);
interface SqlQueryTable {
  tableName: string;
  alias: string;
}
const getSqlQueryTables = (sqlText: string): Array<SqlQueryTable> => {

  let regex = /\bFROM\s+([^\s]+)(?:\s+AS)?\s+(\w+)?|\bJOIN\s+([^\s]+)(?:\s+AS)?\s+(\w+)?/gmi;

  let match: any[];
  let result = [];

  while ((match = regex.exec(sqlText)) !== null) {

    let tableName;
    let alias;

    if (match[1]) {
      tableName = match[1];
      alias = (match[2]) ? match[2] : match[1];
      result.push({ tableName: tableName, alias: alias });
    }

    if (match[3]) {
      tableName = match[3];
      alias = (match[4]) ? match[4] : match[3];
      result.push({ tableName: tableName, alias: alias });
    }
  }

  return result;
};
const getSqlQueryTables0ld = (sqlText: string): Array<SqlQueryTable> => {
  // 使用正则找出表名与别名
  let regex = /\bFROM\s+([^\s]+)(?:\s+AS\s+)?(\w+)?|\bJOIN\s+([^\s]+)(?:\s+AS\s+)?(\w+)?/gmi;

  let match: any[];
  let result = [];

  while ((match = regex.exec(sqlText)) !== null) {
    // 如果第二个括号(AS后面的别名)存在，表示表名和别名都有
    // 否则只存在表名
    if (match[2]) {
      result.push({ tableName: match[1], alias: match[2] });
    } else if (match[1]) {
      result.push({ tableName: match[1], alias: match[1] });
    }

    // 匹配JOIN后的表名和别名
    if (match[4]) {
      result.push({ tableName: match[3], alias: match[4] });
    } else if (match[3]) {
      result.push({ tableName: match[3], alias: match[3] });
    }
  }

  return result;
};


function getRangeForText(text: string, model: monaco.editor.IModel): monaco.IRange | undefined {
  const matches = model.findMatches(text, false, false, true, null, true);

  // Check if a match was found
  if (matches.length > 0) {
    return matches[0].range;
  }

  // If no match was found, return undefined
  return undefined;
}
