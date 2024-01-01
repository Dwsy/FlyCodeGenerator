import { getTableShortName } from '../../util'
import { message } from '../../util/message'
import { monacoInitializedUtil } from '../../util/monacoUtil'
import { autoAsSqlCompletion, checkInSqlRangeFn, getSqlCompletionItems } from './sqlProvider'

export const registerProviders = () => {
  monaco.languages.registerCompletionItemProvider('flycode', {
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
        // debugger
        if (autoAsSqlCompletionRet.in) {
          // console.log(autoAsSqlCompletionRet.suggestions)
          return {
            suggestions: autoAsSqlCompletionRet.suggestions
          }
        }
        const items = getSqlCompletionItems(model, position, context, token, checkInSqlRange.sqlRange)
        // debugger
        // console.log(items)
        return items
      }
      // console.log(generalSuggestions)
      generalSuggestions.forEach((item) => (item.range = null))
      return {
        suggestions: generalSuggestions
      }
    }
  })
  monacoInitializedUtil.onInitialized(() => {
    generalSuggestions = [
      {
        label: 'fun',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'function $1($2){$3\t\n\n}',
        preselect: true,
        range: null,
        detail: '函数',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'i',
        kind: monaco.languages.CompletionItemKind.Field,
        preselect: true,
        insertText: 'if ($1) {\n\t$2\n}',
        range: null,
        detail: 'if语句',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'ie',
        kind: monaco.languages.CompletionItemKind.Field,
        insertText: 'if ($1) {\n\t$2\n} else {\n\t$3\n}',
        range: null,
        preselect: true,
        detail: 'if-else语句',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'fo',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'for (var $1 = 0; $1 < $2; $1++) {\n\t$3\n}',
        preselect: true,
        range: null,
        detail: 'for语句',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'foi',
        kind: monaco.languages.CompletionItemKind.Event,
        insertText: 'for (var i = 0; i < $1.length; i++) {\n\t$2\n}',
        range: null,
        preselect: true,
        detail: 'for-in语句',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'foof',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'for (var $1 of $2) {\n\t$3\n}',
        range: null,
        preselect: true,
        detail: 'for-of语句',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'foin',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'for (var $1 in $2) {\n\t$3\n}',
        range: null,
        preselect: true,
        detail: 'for-in语句',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'log',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'FLY.log($1)',
        preselect: true,
        range: null,
        detail: '日志',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'fly.log',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'FLY.log($1)',
        preselect: true,
        range: null,
        detail: '日志',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'jsf',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'JSON.stringify($1)',
        preselect: true,
        range: null,
        detail: 'JSON.stringify',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'jp',
        kind: monaco.languages.CompletionItemKind.Function,
        insertText: 'JSON.parse($1)',
        preselect: true,
        range: null,
        detail: 'JSON.parse',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'select',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'select\n $1 \nfrom $2;',
        range: null,
        preselect: true,
        detail: '查询 输入sel + tablename 然后 ctrl + b 生成',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'throw',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'throw new Error($1)',
        preselect: true,
        range: null,
        detail: '抛出异常',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'tr',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'try {\n\t$1\n} catch (error) {\n\t$2\n}',
        range: null,
        preselect: true,
        detail: 'try-catch语句',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      },
      {
        label: 'D',
        kind: monaco.languages.CompletionItemKind.Class,
        preselect: true,
        insertText: 'Dwsy',
        range: null,
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
        kind: monaco.languages.CompletionItemKind.Method,
        insertText: 'BO.new("$1")',
        preselect: true,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      }
      //  {

      // }
    ]
  })
}
let generalSuggestions: monaco.languages.CompletionItem[] = []

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
