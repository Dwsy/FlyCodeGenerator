export const registerProviders = () => {
  // function
  window.monaco.languages.registerCompletionItemProvider('flycode', {
    //@ts-ignore
    provideCompletionItems: function (model, position, context, token) {
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: position.column,
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
            label: "ife",
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
