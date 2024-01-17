import { addTempDts, pushTempBoNewDtsList } from '../../flycodeDts'
import { useFlyStore } from '../../store/flyStore'
import { PropertyTypeCode } from '../../type/model/propertyTypeCodeRef'
import { GM_setClipboard, getPageCode, getPrimaryKey, getTableShortName } from '../../util'
import { getMonacoModel } from '../../util/monacoUtil'
import { formatFquery } from '../../util/formateFquery'
import { message } from '../../util/message'
import { MessageRenderMessage, NAlert, useMessage } from 'naive-ui'
import { useGenStore } from '../../store/genStore'
import { checkInSqlRangeFn, getAllSqlRangeFn } from './sqlProvider'
import { openSplitCodeFnMap } from '../demo6'

/**
 * 添加格式化SQL操作到编辑器
 *
 * @param editor - monaco编辑器的实例
 *
 * 此函数会在编辑器中添加一个新的操作，该操作会在触发时格式化当前的Fquery。
 * 操作的快捷键是CtrlCmd + F9，且会在上下文菜单中以1.5的顺序显示。
 *
 * 在操作被触发时，它会获取格式化后的Fquery，然后在编辑器中替换当前的全文。
 */
export const addFomatSqlAction = (editor: monaco.editor.IStandaloneCodeEditor) => {
  const flyStore = useFlyStore()

  setTimeout(() => {
    editor.addAction({
      id: 'FomatFquery',
      label: '格式化全文sql',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F9],
      // A precondition for this action.
      precondition: null,
      // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 2,
      // Method that will be executed when the action is triggered.
      // @param editor The editor instance is passed in as a convenience
      run: function (ed) {
        let lines = formatEditotFqueryFuncNew(ed.getModel())
        if (lines) {
          ed.executeEdits('name-of-edit', [
            {
              range: editor.getModel().getFullModelRange(), // full range
              text: lines // target value here
            }
          ])
        }
      }
    })
  }, 1)
}

export const addFomatCursorPositionSqlAction = (editor: monaco.editor.IStandaloneCodeEditor) => {
  const flyStore = useFlyStore()
  setTimeout(() => {
    editor.addAction({
      id: 'FomatCursorPositionSqlAction',
      label: '格式化当前位置sql',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Digit9],
      // A precondition for this action.
      precondition: null,
      // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 2,
      // Method that will be executed when the action is triggered.
      // @param editor The editor instance is passed in as a convenience
      run: function (ed) {
        let r = formatCursorPositionFqueryFunc(ed)
        if (r) {
          ed.executeEdits('name-of-edit', [
            {
              range: r.sqlRange, // full range
              text: r.formattedSQL // target value here
            }
          ])
        }
      }
    })
  }, 1)
}

export const addCodeRun = (editor: monaco.editor.IStandaloneCodeEditor) => {
  setTimeout(() => {
    editor.addAction({
      id: 'codeRun',
      label: 'codeRun',
      keybindings: [monaco.KeyCode.F5],
      precondition: null,
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 0,
      run: function (ed) {
        const e1: HTMLButtonElement = document.querySelector(
          '#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1) > div:nth-child(3)'
        )
        e1.click()
        setTimeout(() => {
          const e0: HTMLButtonElement = document.querySelector(
            '#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.testcase-container > div > div > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1) > div:nth-child(1)'
          )
          e0.click()
          setTimeout(() => {
            const e2: HTMLButtonElement = document.querySelector(
              '#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.testcase-container > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.betest-tab-content.test-case > div.ant-table-wrapper > div > div > div > div > div > table > tbody > tr > td:nth-child(4) > div > a:nth-child(1)'
            )
            e2.click()
            setTimeout(() => {
              const e = document.querySelector(
                '#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1) > div:nth-child(4)'
              )
              //@ts-ignore
              e.click()
            }, 200)
          }, 200)
        }, 700)
      }
    })
  }, 2000)
}

export const addSplitCodeAction = (editor: monaco.editor.IStandaloneCodeEditor, open: Function) => {
  setTimeout(() => {
    editor.addAction({
      id: 'splitCode',
      label: '开启侧边代码',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.Backslash],
      precondition: null,
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 2,
      run: function (ed) {
        // openSplitCodeFnMap.get(getPageCode())(2)
        const openSplitCode: HTMLButtonElement = document.querySelector(
          '#beSetting > div.right-side > div > div > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1) > div:nth-child(3)'
        )
        openSplitCode.click()
      }
    })
  }, 1000)
}

export const switchCodeCheck = (editor: monaco.editor.IStandaloneCodeEditor) => {
  // noSyntaxValidation: 关闭语法检测
  // noSemanticValidation: 关闭语义检测
  editor.addAction({
    id: 'switchCodeCheck',
    label: 'switchCodeCheck',
    keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F8],
    precondition: null,
    keybindingContext: null,
    contextMenuGroupId: 'navigation',
    contextMenuOrder: 2,
    run: function (ed) {
      ed.updateOptions({
        //@ts-ignore
        noSyntaxValidation: !ed.getRawOptions().noSyntaxValidation,
        //@ts-ignore
        noSemanticValidation: !ed.getRawOptions().noSemanticValidation
      })
    }
  })
}

export function copyToVscode() {
  return (editor: monaco.editor.IStandaloneCodeEditor) => {
    // noSyntaxValidation: 关闭语法检测
    // noSemanticValidation: 关闭语义检测
    editor.addAction({
      id: 'copyToVscode',
      label: 'copyToVscode',
      keybindings: [],
      precondition: null,
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 2,
      run: function (ed) {
        const monacoModel = getMonacoModel()
        let text = monacoModel.getValue()
        // 使用正则表达式进行匹配，忽略大小写
        let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g
        var matches = text.match(regex)
        const allFQuery: Array<string> = []
        if (matches) {
          const genStore = useGenStore()
          matches.forEach(function (match, index) {
            // var assignment =
            var assignment = match.match(/([\w\s]+)=\s*(select[\w\s]+)\s+/i)

            if (assignment) {
              let variableName = assignment[1]
              let query = match.substring(match.indexOf(variableName)).trim()
              console.log(query)
              const partsIndex = query.indexOf('=')
              const queryString = query.substring(partsIndex + 1).trim()
              let formattedSQL = '`' + queryString + '`'
              text = text.replace(queryString, formattedSQL)
            }
          })
          console.log(text)
          GM_setClipboard(text, 'text')
        } else {
          console.log('No matching SQL statements found in the text.')
        }
      }
    })
  }
}
export function pasteToMonaco() {}

export function formatCursorPositionFqueryFunc(ed: monaco.editor.ICodeEditor, useText: string = undefined) {
  const model = ed.getModel()
  const allText = model.getValue()
  const position = ed.getPosition()
  const checkInSqlRangeRet = checkInSqlRangeFn(model, position)
  debugger
  if (checkInSqlRangeRet.in) {
    const sqlRange = checkInSqlRangeRet.sqlRange
    const formattedSQL = formatRangeSql(ed.getModel(), sqlRange)
    // let formattedSQL = formatFquery(sql.replaceAll('//', '--//'), '')
    // formattedSQL = formattedSQL.replaceAll('--//', '//')
    // // const newallText = allText.replace(sql, formattedSQL)
    // debugger
    // formattedSQL = formattedSQL
    //   .split('\n')
    //   .map((item, index) => {
    //     if (index == 0) {
    //       return item
    //     } else {
    //       return ' '.repeat(sqlRange.startColumn - 3) + item
    //     }
    //   })
    //   .join('\n')
    return {
      formattedSQL: formattedSQL,
      sqlRange: sqlRange
    }
  }
  return false
  // let text = useText || ed.
}

export function formatRangeSql(model: monaco.editor.ITextModel, sqlRange: monaco.Range) {
  const sql = model.getValueInRange(sqlRange)

  let formattedSQL = formatFquery(sql.replaceAll('//', '--//'), '')
  formattedSQL = formattedSQL.replaceAll('--//', '//')
  // const newallText = allText.replace(sql, formattedSQL)
  debugger
  formattedSQL = formattedSQL
    .split('\n')
    .map((item, index) => {
      if (index == 0) {
        return item
      } else {
        return ' '.repeat(sqlRange.startColumn - 3) + item
      }
    })
    .join('\n')
  return formattedSQL
}

export function formatEditotFqueryFuncNew(model: monaco.editor.ITextModel, useText: string = undefined) {
  const allSqlRange = getAllSqlRangeFn(model)
  let allText = model.getValue()
  allSqlRange.forEach((range) => {
    const formattedSQL = formatRangeSql(model, range)
    allText = allText.replace(model.getValueInRange(range), formattedSQL)
  })
  return allText
}
export function formatEditotFqueryFunc(useText: string = undefined) {
  const monacoModel = getMonacoModel()
  let text = useText || monacoModel.getValue()

  // 使用正则表达式进行匹配，忽略大小写
  let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g
  var matches = text.match(regex)

  const allFQuery: Array<string> = []
  if (matches) {
    const genStore = useGenStore()
    matches.forEach(function (match, index) {
      // var assignment = match.match(/([\w\s]+)=\s*(select[\w\s]+)\s+/i)
      var assignment = true
      if (assignment) {
        let variableName = assignment[1]
        let query = match.substring(match.indexOf(variableName)).trim()
        console.log(query)

        const regex = /SELECT([\s\S]*)FROM/i
        let col = query.match(regex)
        let colStr = ''
        let template = `declare interface selectColDeclare$${index} {
                    {{define}}
                }`
        // if (col) {
        //     colStr = col[1].trim()

        //     const define = colStr.split("\n").map(
        //         item => {
        //             let [queryCol, commit] = item.split("//")
        //             if (!commit) {
        //                 return
        //             }
        //             if (queryCol.indexOf(" as") != -1) {
        //                 queryCol = queryCol.split(" as")[1].trim()
        //             } else {
        //                 queryCol = queryCol.split(".")[1].trim()
        //             }
        //             queryCol = queryCol.replace(",", "")
        //             console.log(queryCol)
        //             let line = `
        //             /**
        //              * ${commit}
        //             */
        //             ${queryCol}: string
        //             `
        //             console.log(line)
        //             return line
        //         }
        //     ).join("\n")
        //     debugger
        //     template = template.replace("{{define}}", define)
        //     addTempDts(template)
        //     console.log(template)
        // }

        const partsIndex = query.indexOf('=')

        // if (parts.length === 2) {
        const queryString = query.substring(partsIndex + 1).trim()
        // const variableName = parts[0].trim();
        // console.log("Variable Name:", variableName);
        // console.log("Query String:", queryString);
        // const sqlStr = "`" + queryString + "`"

        let formattedSQL: string
        try {
          formattedSQL = formatFquery(queryString.replaceAll('//', '--//'), '')
        } catch (e) {
          message.error(String(e), {
            render: renderMessage,
            closable: true,
            keepAliveOnHover: true,
            duration: 3000
          })
          throw new Error(e)
        }

        formattedSQL = formattedSQL.replaceAll('--//', '//')
        console.log('formattedSQL\n' + formattedSQL)
        // mo
        // formattedSQL = formattedSQL
        // .split('\n')
        // .map((item, index) => {
        //   if (index == 0) {
        //     return item
        //   } else {
        //     return ' '.repeat(sqlRange.startColumn - 3) + item
        //   }
        // })
        // .join('\n')
        text = text.replace(queryString, formattedSQL)
      }
    })
    console.log(text)
    // GM_setClipboard(text, "text")
    // monacoModel.setValue(text)

    return text
  } else {
    console.log('No matching SQL statements found in the text.')
    return ''
  }
}
const renderMessage: MessageRenderMessage = (props) => {
  const { type } = props
  const style = {
    maxWidth: 'calc(100vw - 32px)',
    width: '480px',
    boxShadow: 'var(--n-box-shadow)',
    backgroundColor: 'var(--theme-tools-button-background-color)'
  }
  const style2 = {
    marginLeft: '0px!important'
  }

  return h(
    <>
      <NAlert
        style={style}
        closable={props.closable}
        onClose={props.onClose}
        title="格式化失败请检查代码"
        type="warning"
      >
        <pre style={style2}>{props.content}</pre>
      </NAlert>
    </>
  )
}

/**
 * 添加自动代码生成器到 Monaco 编辑器
 *
 * @param {monaco.editor.IStandaloneCodeEditor} editor - Monaco 编辑器实例
 *
 * 此函数会在编辑器中添加一个新的动作，该动作的标签为 "🥰AutoGen"，并且可以通过 CtrlCmd + F6 快捷键触发。
 * 当动作被触发时，它会获取当前光标所在行的内容，并尝试匹配 "for" 循环语句。
 * 如果匹配成功，它会提取出 "for" 循环语句中的变量名，并生成一个标准的 "for" 循环模板，然后将当前行的内容替换为这个模板。
 * 如果匹配失败，它会在控制台中打印 "for匹配失败"。
 */
export const addAutoAutoAutoAutoAuto = (editor: monaco.editor.IStandaloneCodeEditor) => {
  const flyStore = useFlyStore()
  setTimeout(() => {
    editor.addAction({
      id: '🥰AutoGen',
      label: '智能生成代码🥰AutoGen',
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.F6, monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyB],
      precondition: null,
      keybindingContext: null,
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 1.5,
      run: function (ed) {
        const lineContent = getMonacoModel().getLineContent(ed.getPosition().lineNumber)
        autoGen(lineContent, ed)
        console.timeEnd('autoGen')
      }
    })
  }, 1)
}

type AutoAutoAutoType = 'fori' | 'while' | 'NewBO' | 'select' | 'selectc' | 'suffixLog' | 'suffixSLog'

function autoGen(lineContent: string, ed: monaco.editor.ICodeEditor) {
  const regexFor = /for\s+.*/
  const regexSelect = /(sel|select|sl)\s+.*/
  const regexSelectc = /(selc|selectc|sc)\s+.*/

  const regexSuffixLog = /^(.*)\.(log|l)$/
  const regexSuffixSLog = /^(.*)\.(slog|sl)$/

  const matchResultFor = lineContent.match(regexFor)
  const matchResultSelect = lineContent.match(regexSelect)
  const matchResultSelectc = lineContent.match(regexSelectc)
  const matchResultBoNew = lineContent.match(/BO.new\((.*?)\)/) || lineContent.match(/new\s+(.*)/)
  const matchResultSuffixLog = lineContent.match(regexSuffixLog)
  const matchResultSuffixSLog = lineContent.match(regexSuffixSLog)

  if (matchResultFor) {
    message.success('gen for')
    return getAutoFn('fori', matchResultFor[0].split(' ')[1], ed)
  }
  if (matchResultSelect) {
    message.success('gen select')
    return getAutoFn('select', matchResultSelect[0].split(' ')[1], ed)
  }
  if (matchResultBoNew) {
    message.success('gen new')
    return getAutoFn('NewBO', matchResultBoNew[1], ed)
  }
  if (matchResultSelectc) {
    message.success('gen selectc')
    return getAutoFn('selectc', matchResultSelectc[0].split(' ')[1], ed)
  }
  if (matchResultSuffixLog) {
    message.success('gen suffixLog')
    return getAutoFn('suffixLog', matchResultSuffixLog[1], ed)
  }
  if (matchResultSuffixSLog) {
    message.success('gen suffixSLog')
    return getAutoFn('suffixSLog', matchResultSuffixSLog[1], ed)
  }
}
function getAutoFn(type: AutoAutoAutoType, matchResult: string, ed: monaco.editor.ICodeEditor): Function {
  return {
    select: selectFn,
    //@ts-ignore
    selectc: window.customGenSql,
    fori: forFn,
    NewBO: newBoFn,
    suffixLog: suffixLogFn,
    suffixSLog: suffixSLogFn
  }[type](matchResult, ed)
}

function selectFn(matchResult: string, ed: monaco.editor.ICodeEditor) {
  const flyStore = useFlyStore()
  let tableData = flyStore.tableNameDataMap.get(matchResult)
  if (!tableData) {
    tableData = flyStore.dictNameDataMap.get(matchResult)
  }
  if (!tableData) {
    message.warning('未找到表或字典')
    return
  }
  const primaryKey = getPrimaryKey(tableData.objectcode)
  const shortName = getTableShortName(matchResult)
  const columns = tableData.properties.map((item) => {
    let temp = `${shortName}.${item.columnname},`
    let len = temp.length
    for (var i = 0; i < 35 - len; i++) {
      temp += ' '
    }
    return `\n  ${temp}// ${item.propertyname}`
    // return `\n  ${shortName}.${item.columnname},  // ${item.propertyname}`
  })
  columns[columns.length - 1] = columns[columns.length - 1].replace(',', ' ')

  const sql = `var ${shortName}_list = SELECT ${columns.join(
    ''
  )}\nFROM ${matchResult} ${shortName}\nWHERE 1 = 1\n AND ${shortName}.${primaryKey} = \nNORULE;`
  console.log(sql)
  debugger
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
      text: ''
    }
  ])
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
      text: sql + '\n'
    }
  ])
}

function forFn(matchResult: string, ed: monaco.editor.ICodeEditor) {
  if (matchResult) {
    let template = `for(var i = 0; i < ${matchResult}.length; i++) {
    var element = ${matchResult}[i];
    

}`
    console.log('for匹配成功:', matchResult)
    const position = ed.getPosition()
    // 删除当前行
    ed.executeEdits('source', [
      {
        range: new monaco.Range(position.lineNumber, 1, position.lineNumber + 1, 1),
        text: ''
      }
    ])
    ed.executeEdits('source', [
      {
        range: new monaco.Range(position.lineNumber, 1, position.lineNumber, 1),
        text: template + '\n'
      }
    ])

    ed.setPosition(new monaco.Position(position.lineNumber + 2, 4 + 1))
  } else {
    console.log('for匹配失败')
  }
}

function newBoFn(matchResult: string, ed: monaco.editor.ICodeEditor) {
  const flyStore = useFlyStore()
  const lineContent = getMonacoModel().getLineContent(ed.getPosition().lineNumber)

  let shortName = matchResult
  let boName = matchResult
  if (shortName.length > 15) {
    shortName = getTableShortName(boName)
  }

  var setLine = flyStore.tableNameDataMap.get(boName).properties.map((item) => {
    // debugger
    if (item.propertytypecode == PropertyTypeCode.PrimaryKey.toString()) {
      return `${shortName}.${item.columnname} = FLY.genId()`
    } else if (item.propertytypecode == PropertyTypeCode.CreatedBy.toString()) {
      return `${shortName}.${item.columnname} = SESSION.mbcode`
    } else if (item.propertytypecode == PropertyTypeCode.CreatedTime.toString()) {
      return `${shortName}.${item.columnname} = NOW.time()`
    } else if (item.propertytypecode == PropertyTypeCode.ModifiedBy.toString()) {
      return `${shortName}.${item.columnname} = SESSION.mbcode`
    } else if (item.propertytypecode == PropertyTypeCode.ModifiedTime.toString()) {
      return `${shortName}.${item.columnname} = NOW.time()`
    } else {
      let temp = `${shortName}.${item.columnname} = foo.${item.columnname}`
      let len = temp.length
      for (var i = 0; i < 55 - len; i++) {
        temp += ' '
      }
      return `${temp}//${item.propertyname}`
    }
  })

  setLine.unshift(`var ${shortName} = BO.new("${boName}")`)
  console.log(setLine.join('\n'))
  // 删除当前行
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
      text: ''
    }
  ])
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
      text: setLine.join('\n') + '\n\n'
    }
  ])
  pushTempBoNewDtsList(boName)
}

function suffixLogFn(matchResult: string, ed: monaco.editor.ICodeEditor) {
  const leadingSpaces = matchResult.match(/^\s*/)[0]
  const codeLine = `${leadingSpaces}FLY.log("${matchResult.trim()}" + ${matchResult.trim()})\n`
  // 删除当前行
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
      text: ''
    }
  ])
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
      text: codeLine
    }
  ])
}
function suffixSLogFn(matchResult: string, ed: monaco.editor.ICodeEditor) {
  const leadingSpaces = matchResult.match(/^\s*/)[0]
  // JSON.stringify(fixedCombination,null,4)

  const codeLine = `${leadingSpaces}FLY.log('${matchResult.trim()}' + JSON.stringify(${matchResult.trim()},null,4))\n`
  // 删除当前行
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
      text: ''
    }
  ])
  ed.executeEdits('source', [
    {
      range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
      text: codeLine
    }
  ])
}

function AutoAutoAuto(type: AutoAutoAutoType, matchResult): Function {
  if (type == 'fori') {
    return (ed) => {
      if (matchResult) {
        let extractedText = matchResult[0].split(' ')[1]
        let template = `for(var i = 0; i < ${extractedText}.length; i++) {
                    var element = ${extractedText}[i];
                    
                }`
        console.log('for匹配成功:', extractedText)
        // 删除当前行
        ed.executeEdits('source', [
          {
            range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
            text: ''
          }
        ])
        ed.executeEdits('source', [
          {
            range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
            text: template + '\n'
          }
        ])
      } else {
        console.log('for匹配失败')
      }
    }
  }
  return () => {}
}

// export const addBoNewAction = (editor: monaco.editor.IStandaloneCodeEditor) => {
/**
 * 添加一个新的编辑器动作，用于处理特定的代码模式（BO.new）。
 * 当用户在编辑器中触发这个动作时，它会解析当前行的内容，找到匹配的模式，并生成相应的代码。
 *
 * @param editor - 一个monaco.editor.IStandaloneCodeEditor实例，表示要添加动作的编辑器。
 */
// export const addBoNewAction = (editor: monaco.editor.IStandaloneCodeEditor) => {
//     const flyStore = useFlyStore()
//     setTimeout(() => {
//         console.log("--", editor)
//         const linesContent = getMonacoModel().getLinesContent()
//         // console.log(linesContent)
//         linesContent.filter((lineContent) => { lineContent.indexOf("BO.new") > -1 })
//             .map((line) => {
//                 const match = line.match(/BO.new\((.*?)\)/);
//                 if (!match) {
//                     return
//                 }
//                 const boName = match[1]
//                 console.log("boName", boName);
//
//                 pushTempBoNewDtsList(boName)
//             })
//
//
//         editor.addAction({
//             id: "BoNew",
//             label: "BoNewGen",
//             keybindings: [
//                 monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
//             ],
//             // A precondition for this action.
//             precondition: null,
//             // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
//             keybindingContext: null,
//             contextMenuGroupId: "navigation",
//             contextMenuOrder: 1.5,
//             // Method that will be executed when the action is triggered.
//             // @param editor The editor instance is passed in as a convenience
//             run: function (ed) {
//
//                 const lineContent = getMonacoModel().getLineContent(ed.getPosition().lineNumber);
//                 let match = lineContent.match(/BO.new\((.*?)\)/);
//                 if (!match) {
//                     match = lineContent.match(/new\s+(.*)/);
//                 }
//                 if (!match) {
//                     return
//                 }
//                 const boName = match[1]
//                 let shortName = boName
//                 if (shortName.length > 15) {
//                     shortName = getTableShortName(boName)
//                 }
//
//                 var setLine = flyStore.tableNameDataMap.get(boName).properties.map((item) => {
//                     // debugger
//                     if (item.propertytypecode == PropertyTypeCode.PrimaryKey.toString()) {
//                         return `${shortName}.${item.columnname} = FLY.genId()`
//                     }
//                     else if (item.propertytypecode == PropertyTypeCode.CreatedBy.toString()) {
//
//                         return `${shortName}.${item.columnname} = SESSION.mbcode`
//                     }
//                     else if (item.propertytypecode == PropertyTypeCode.CreatedTime.toString()) {
//                         return `${shortName}.${item.columnname} = NOW.time()`
//                     }
//                     else if (item.propertytypecode == PropertyTypeCode.ModifiedBy.toString()) {
//                         return `${shortName}.${item.columnname} = SESSION.mbcode`
//                     }
//                     else if (item.propertytypecode == PropertyTypeCode.ModifiedTime.toString()) {
//                         return `${shortName}.${item.columnname} = NOW.time()`
//                     }
//                     else {
//                         let temp = `${shortName}.${item.columnname} = foo.${item.columnname}`
//                         let len = temp.length
//                         for (var i = 0; i < 55 - len; i++) {
//                             temp += " "
//                         }
//                         return `${temp}//${item.propertyname}`
//                     }
//                 })
//
//                 setLine.unshift(`var ${shortName} = BO.new("${boName}")`)
//                 console.log(setLine.join("\n"))
//                 // 删除当前行
//                 ed.executeEdits("source", [{
//                     range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
//                     text: ""
//                 }])
//                 ed.executeEdits("source", [{
//                     range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
//                     text: setLine.join("\n") + "\n\n"
//                 }])
//                 pushTempBoNewDtsList(boName)
//             },
//         });
//         addFomatSqlAction(editor)
//     }, 1500);
// }
