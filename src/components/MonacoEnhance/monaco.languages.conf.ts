import { GM_getValue } from '../../util'
import { getMonacoJavaScriptMonarch } from '../demo4/App'
import { getAllSqlRangeFn } from './sqlProvider'

export const applyCustomFlycode = () => {
  const monacoJavaScriptMonarch = getMonacoJavaScriptMonarch()
  const PropertyRegexPre = /\w+(?=\.)/
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\/\/\s*TODO\b/i, 'comment.fixme'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\/\/\s*FIXME\b/i, 'comment.fixme'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\/\/\s*NOTE\b/i, 'comment.fixme'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\/\/\s*todo\b/i, 'comment.todo'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\/\/\s*fixme\b/i, 'comment.fixme'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\/\/\s*remind\b/i, 'comment.remind'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\.[a-zA-Z_]\w*/, 'code.property'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([PropertyRegexPre, 'code.propertypre'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/FLY\.log/, 'flylog'])
  monacoJavaScriptMonarch.tokenizer.root.unshift([/\b(\w+)\(/, 'function'])
  monaco.languages.setMonarchTokensProvider('javascript', monacoJavaScriptMonarch)
  // monaco.languages.registerFoldingRangeProvider('javascript', {
  //   provideFoldingRanges: function (
  //     model: monaco.editor.ITextModel,
  //     context: monaco.languages.FoldingContext,
  //     token: monaco.CancellationToken
  //   ): monaco.languages.FoldingRange[] {
  //     const allSqlRange = getAllSqlRangeFn(model)

  //     return allSqlRange.map((range): monaco.languages.FoldingRange => {
  //       return {
  //         start: range.startLineNumber,
  //         end: range.endLineNumber,
  //         kind: monaco.languages.FoldingRangeKind.Region
  //       }
  //     })
  //   }
  // })

  return
  if (GM_getValue('MonacoTheme', null) == 'default') return
  console.log('apply MonarchTokensProvider and setLanguageConfiguration')
  // monaco.languages.setMonarchTokensProvider('flycode', monarchTokensProvider)
  // monaco.languages.setLanguageConfiguration('flycode', languageConfiguration)
  // monaco.editor.FontInfo
  // monaco.editor.re
}

export const enableJavaScriptDiagnostics = (enable: boolean) => {
  console.log('enableJavaScriptDiagnostics', enable)
  if (enable) {
    const diagnosticCodesToIgnore = []
    diagnosticCodesToIgnore.push(8016)
    diagnosticCodesToIgnore.push(1434)
    diagnosticCodesToIgnore.push(1005)
    diagnosticCodesToIgnore.push(1435)
    diagnosticCodesToIgnore.push(8013)
    diagnosticCodesToIgnore.push(1109)
    diagnosticCodesToIgnore.push(2568)
    diagnosticCodesToIgnore.push(1135)
    diagnosticCodesToIgnore.push(1128)
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      // diagnosticCodesToIgnore,
      noSuggestionDiagnostics: true,
      noSemanticValidation: true,
      noSyntaxValidation: true
      // onlyVisible: true
    })
  } else {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      diagnosticCodesToIgnore: [],
      noSuggestionDiagnostics: false,
      noSemanticValidation: false,
      noSyntaxValidation: false
    })
  }
}
