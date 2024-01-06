import { TreeOption } from 'naive-ui'
import { provideDocumentSymbol } from './App'

export const provideDocumentSymbols = async (model, token) => {
  const _ = new provideDocumentSymbol()
  let symbols: any[] = await _.provideDocumentSymbols(model, token)

  //   console.log(symbols)
  symbols.sort((a, b) => {
    return a.range.startLineNumber - b.range.startLineNumber
  })
  console.log(symbols)
  const TreeOptionArray = convertSymbolArrayToTreeOptionArray(symbols)
  // console.log(TreeOptionArray)

  return TreeOptionArray
}
function convertSymbolArrayToTreeOptionArray(documentSymbols: monaco.languages.DocumentSymbol[]): TreeOption[] {
  return documentSymbols.map(convertSymbolToTreeOption).filter((predicate) => predicate)
}
function convertSymbolToTreeOption(documentSymbol: monaco.languages.DocumentSymbol): TreeOption {
  if (!documentSymbol) return
  // debugger
  return {
    key: documentSymbol.name + documentSymbol.range.startLineNumber + documentSymbol.range.startColumn,
    label: documentSymbol.name,
    disabled: false,
    this: documentSymbol,
    children: documentSymbol.children?.map(convertSymbolToTreeOption),
    prefix: () => {
      return h('span', {
        class: 'codicon ' + `codicon-symbol-${monaco.languages.SymbolKind[documentSymbol.kind].toLocaleLowerCase()}`
      })
    },
    suffix: () => {
      return h('span', {}, documentSymbol.range.startLineNumber)
    }

    // suffix: () => documentSymbol.detail
  }
}
