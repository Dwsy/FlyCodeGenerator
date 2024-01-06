import { getTableShortName } from '../../util'
import { message } from '../../util/message'
import { autoAsSqlCompletion, checkInSqlRangeFn, getSqlCompletionItems } from './sqlProvider'

export const registerProviders = () => {
  monaco.languages.registerCompletionItemProvider('javascript', {
    //@ts-ignore
    provideCompletionItems: function (
      model: monaco.editor.ITextModel,
      position: monaco.Position,
      context: monaco.languages.CompletionContext,
      token: monaco.CancellationToken
    ) {
      const checkInSqlRange = checkInSqlRangeFn(model, position)
      // debugger

      if (checkInSqlRange.in) {
        const autoAsSqlCompletionRet = autoAsSqlCompletion(model, position, context, token)
        debugger
        if (autoAsSqlCompletionRet.in) {
          return {
            suggestions: [
              {
                label: 'as',
                filterText: 'as',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: `as ${autoAsSqlCompletionRet.shortName}`,
                preselect: true,
                sortText: 'as1',
                detail: `as ${autoAsSqlCompletionRet.shortName}`,
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: null
              },
              {
                label: 'AS',
                filterText: 'AS',
                kind: monaco.languages.CompletionItemKind.Method,
                insertText: `AS ${autoAsSqlCompletionRet.shortName}`,
                preselect: true,
                detail: 'AS',
                sortText: 'AS1',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: null
              }
            ]
          }
        }
        const items = getSqlCompletionItems(model, position, context, token, checkInSqlRange.sqlRange)
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
            preselect: true,
            detail: '函数',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'i',
            kind: monaco.languages.CompletionItemKind.Field,
            preselect: true,
            insertText: 'if ($1) {\n\t$2\n}',
            detail: 'if语句',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'ie',
            kind: monaco.languages.CompletionItemKind.Field,
            insertText: 'if ($1) {\n\t$2\n} else {\n\t$3\n}',
            preselect: true,
            detail: 'if-else语句',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'fo',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'for (var $1 = 0; $2 < $3; $4++) {\n\t$5\n}',
            preselect: true,
            detail: 'for语句',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'foi',
            kind: monaco.languages.CompletionItemKind.Event,
            insertText: 'for (var i = 0; i < $1.length; i++) {\n\t$2\n}',
            preselect: true,
            detail: 'for-in语句',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'foof',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'for (var $1 of $2) {\n\t$3\n}',
            preselect: true,
            detail: 'for-of语句',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'foin',
            kind: monaco.languages.CompletionItemKind.Function,
            insertText: 'for (var $1 in $2) {\n\t$3\n}',
            preselect: true,
            detail: 'for-in语句',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'log',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'FLY.log($1)',
            preselect: true,
            detail: '日志',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'sel',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'select\n $1 \nfrom $2;',
            preselect: true,
            detail: '查询 输入sel + tablename 然后 ctrl + b 生成',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'thr',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'throw new Error($1)',
            preselect: true,
            detail: '抛出异常',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'tr',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'try {\n\t$1\n} catch (error) {\n\t$2\n}',
            preselect: true,
            detail: 'try-catch语句',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
          {
            label: 'D',
            kind: monaco.languages.CompletionItemKind.Class,
            preselect: true,
            insertText: 'Dwsy',
            detail: 'Author',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          },
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
            range: null,
            label: 'BO.',
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: 'BO.new("$1")',
            preselect: true,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
          }
          //  {

          // }
        ]
      }
    }
  })
}
function gptTest(
  model: monaco.editor.ITextModel,
  position: monaco.Position,
  context: monaco.languages.CompletionContext,
  token: monaco.CancellationToken
) {
  const word = model.getWordUntilPosition(position)
  const range = {
    startLineNumber: position.lineNumber,
    startColumn: word.startColumn,
    endLineNumber: position.lineNumber,
    endColumn: word.endColumn
  }
  const textUntilPosition = model.getValueInRange(range)
  for (let index = 0; index < 10000; index++) {
    console.log(index)
  }
  return textUntilPosition === 'gpt'
}
