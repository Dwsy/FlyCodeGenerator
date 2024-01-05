import { monacoInitializedUtil } from '../../util/monacoUtil'
import { getRangeForText } from '../MonacoEnhance/sqlProvider'

// let sum = 0
export const provideDocumentSymbol = class {
  async provideDocumentSymbols(e, t) {
    const uri = e.uri
    const model = e
    const i1 = await monaco.languages.typescript.getJavaScriptWorker()

    if (e.isDisposed()) return []

    const client = await i1(monaco.Uri.parse(model.uri))

    const n = await client.getNavigationTree(uri.toString())

    if (!n || e.isDisposed()) return []

    const SymbolKind = {
      module: 1,
      class: 4,
      enum: 9,
      interface: 10,
      method: 5,
      property: 6,
      getter: 6,
      setter: 6,
      var: 12,
      const: 12,
      'local var': 12,
      function: 11,
      'local function': 11
    }

    const r = (t, i) => {
      // console.log(monaco.languages.SymbolKind[t.kind] || monaco.languages.monaco.languages.SymbolKind.Variable, t.text, t, i)
      // sum++
      // debugger
      const s = {
        name: t.text,
        detail: '',
        kind: SymbolKind[t.kind] || monaco.languages.SymbolKind.Variable,
        range: this._textSpanToRange(e, t.spans[0]),
        selectionRange: this._textSpanToRange(e, t.spans[0]),
        tags: [],
        children: t.childItems?.map((e) => r(e, t.text)),
        containerName: i
      }
      return s
    }

    let arr = []
    if (n.childItems) {
      arr = n.childItems.map((childItem) => {
        return r(childItem, '')
      })
    }
    // a.forEach((c) => {
    //   if (c.kind === 'function') {
    //     console.log(c)
    //   }
    // })

    return arr
  }

  _textSpanToRange(e, t) {
    let i = e.getPositionAt(t.start)
    let s = e.getPositionAt(t.start + t.length)
    let { lineNumber: n, column: r } = i
    let { lineNumber: a, column: o } = s
    return {
      startLineNumber: n,
      startColumn: r,
      endLineNumber: a,
      endColumn: o
    }
  }
}

export function getAllSqlRangeSFWFn(model: monaco.editor.ITextModel): Array<any> {
  let text = model.getValue() // 获取 Monaco Editor 的文本内容

  let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g
  let match

  const sqlRangeList: Array<any> = []

  while ((match = regex.exec(text))) {
    let start = match.index // 匹配的起始字符位置
    let end = match.index + match[0].length // 匹配的结束字符位置

    let query_var = match[1]
    const sqlRange = {
      range: getRangeForText(match[0], model)
    }
    debugger

    // 匹配SELECT, FROM, WHERE 关键字
    const subRegex = /(select|from|where)/gi
    let subMatch
    const subRangeList: Array<any> = []
    let sum = 0
    while ((subMatch = subRegex.exec(match[0]))) {
      let subStart = subMatch.index + start

      const subRange = {
        range: getRangeForTextByInSqlNew(text.slice(subStart, subStart + subMatch[0].length), model, sqlRange.range)
      }
      subRangeList.push({ ...subRange, name: subMatch[0] })
    }
    sqlRangeList.push({ ...sqlRange, name: 'Query:' + query_var, children: subRangeList })
  }

  return sqlRangeList.map((r) => formatResultToTree(r, {}))

  function formatResultToTree(t, i): any {
    return {
      name: t.name,
      detail: '',
      kind: monaco.languages.SymbolKind.Event,
      range: t.range,
      selectionRange: t.range,
      tags: [],
      children: t.children?.map((e) => formatResultToTree(e, t.name)),
      containerName: i
    }
  }

  function getRangeForTextByInSql(matchText: string, model: monaco.editor.ITextModel, range): monaco.Range {
    let lineNumber = 1
    let column = 1

    const lines = model.getValue().split('\n')
    for (let i = 0; i < lines.length; i++) {
      const index = lines[i].indexOf(matchText)
      if (index >= 0) {
        lineNumber = i + 1
        column = index + 1
        break
      }
    }

    return new monaco.Range(lineNumber, column, lineNumber, column + matchText.length)
  }
  function getRangeForTextByInSql_(matchText: string, model: monaco.editor.ITextModel, range): monaco.Range {
    const startLine = range.startLineNumber
    const startColumn = range.startColumn

    const lines = model.getValueInRange(range).split('\n')

    for (let i = 0; i < lines.length; i++) {
      const index = lines[i].indexOf(matchText)
      if (index >= 0) {
        const lineNumber = i + startLine
        const column = index + startColumn + 1 // +1 是因为 monaco 的行和列数是从1开始的
        return new monaco.Range(lineNumber, column, lineNumber, column + matchText.length)
      }
    }

    return null // 没找到
  }
  function getRangeForTextByInSqlNew(
    matchText: string,
    model: monaco.editor.ITextModel,
    range: monaco.IRange
  ): monaco.Range {
    // 先定义搜索范围
    const searchScope = range

    // 其他参数的定义
    const isRegex = false // 不是正则表达式
    const matchCase = true // 区分大小写
    const wordSeparators = null // 不需要按单词来匹配
    const captureMatches = false // 不需要捕获匹配

    // 调用 findMatches 方法来获取匹配的结果
    let matches = model.findMatches(matchText, searchScope, isRegex, matchCase, wordSeparators, captureMatches)

    // 如果匹配到了结果，返回第一项的范围
    if (matches.length > 0) {
      return matches[0].range
    }

    // 如果没有匹配到结果，返回一个空的范围
    return null
  }
}

export function getMonacoJavaScriptMonarch(): monaco.languages.IMonarchLanguage {
  // Difficulty: "Moderate"
  // This is the JavaScript tokenizer that is actually used to highlight
  // all code in the syntax definition editor and the documentation!
  //
  // This definition takes special care to highlight regular
  // expressions correctly, which is convenient when writing
  // syntax highlighter specifications.
  return {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: 'invalid',
    tokenPostfix: '.js',

    keywords: [
      'break',
      'case',
      'catch',
      'class',
      'continue',
      'const',
      'constructor',
      'debugger',
      'default',
      'delete',
      'do',
      'else',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'from',
      'function',
      'get',
      'if',
      'import',
      'in',
      'instanceof',
      'let',
      'new',
      'null',
      'return',
      'set',
      'super',
      'switch',
      'symbol',
      'this',
      'throw',
      'true',
      'try',
      'typeof',
      'undefined',
      'var',
      'void',
      'while',
      'with',
      'yield',
      'async',
      'await',
      'of'
    ],

    typeKeywords: ['any', 'boolean', 'number', 'object', 'string', 'undefined'],

    operators: [
      '<=',
      '>=',
      '==',
      '!=',
      '===',
      '!==',
      '=>',
      '+',
      '-',
      '**',
      '*',
      '/',
      '%',
      '++',
      '--',
      '<<',
      '</',
      '>>',
      '>>>',
      '&',
      '|',
      '^',
      '!',
      '~',
      '&&',
      '||',
      '?',
      ':',
      '=',
      '+=',
      '-=',
      '*=',
      '**=',
      '/=',
      '%=',
      '<<=',
      '>>=',
      '>>>=',
      '&=',
      '|=',
      '^=',
      '@'
    ],

    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,

    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,

    // The main tokenizer for our languages
    tokenizer: {
      root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],

      common: [
        // identifiers and keywords
        [
          /[a-z_$][\w$]*/,
          {
            cases: {
              '@typeKeywords': 'keyword',
              '@keywords': 'keyword',
              '@default': 'identifier'
            }
          }
        ],
        [/[A-Z][\w\$]*/, 'type.identifier'], // to show class names nicely
        // [/[A-Z][\w\$]*/, 'identifier'],

        // whitespace
        { include: '@whitespace' },

        // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
        [
          /\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|\/|,|\)|\]|\}|$))/,
          { token: 'regexp', bracket: '@open', next: '@regexp' }
        ],

        // delimiters and operators
        [/[()\[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [
          /@symbols/,
          {
            cases: {
              '@operators': 'delimiter',
              '@default': ''
            }
          }
        ],

        // numbers
        [/(@digits)[eE]([\-+]?(@digits))?/, 'number.float'],
        [/(@digits)\.(@digits)([eE][\-+]?(@digits))?/, 'number.float'],
        [/0[xX](@hexdigits)/, 'number.hex'],
        [/0[oO]?(@octaldigits)/, 'number.octal'],
        [/0[bB](@binarydigits)/, 'number.binary'],
        [/(@digits)/, 'number'],

        // delimiter: after number because of .\d floats
        [/[;,.]/, 'delimiter'],

        // strings
        [/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
        [/'([^'\\]|\\.)*$/, 'string.invalid'], // non-teminated string
        [/"/, 'string', '@string_double'],
        [/'/, 'string', '@string_single'],
        [/`/, 'string', '@string_backtick']
      ],

      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/\/\*\*(?!\/)/, 'comment.doc', '@jsdoc'],
        [/\/\*/, 'comment', '@comment'],
        [/\/\/.*$/, 'comment']
      ],

      comment: [
        [/[^\/*]+/, 'comment'],
        [/\*\//, 'comment', '@pop'],
        [/[\/*]/, 'comment']
      ],

      jsdoc: [
        [/[^\/*]+/, 'comment.doc'],
        [/\*\//, 'comment.doc', '@pop'],
        [/[\/*]/, 'comment.doc']
      ],

      // We match regular expression quite precisely
      regexp: [
        [/(\{)(\d+(?:,\d*)?)(\})/, ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']],
        [
          /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
          ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]
        ],
        [/(\()(\?:|\?=|\?!)/, ['regexp.escape.control', 'regexp.escape.control']],
        [/[()]/, 'regexp.escape.control'],
        [/@regexpctl/, 'regexp.escape.control'],
        [/[^\\\/]/, 'regexp'],
        [/@regexpesc/, 'regexp.escape'],
        [/\\\./, 'regexp.invalid'],
        [/(\/)([gimsuy]*)/, [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']]
      ],

      regexrange: [
        [/-/, 'regexp.escape.control'],
        [/\^/, 'regexp.invalid'],
        [/@regexpesc/, 'regexp.escape'],
        [/[^\]]/, 'regexp'],
        [/\]/, { token: 'regexp.escape.control', next: '@pop', bracket: '@close' }]
      ],

      string_double: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, 'string', '@pop']
      ],

      string_single: [
        [/[^\\']+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/'/, 'string', '@pop']
      ],

      string_backtick: [
        [/\$\{/, { token: 'delimiter.bracket', next: '@bracketCounting' }],
        [/[^\\`$]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/`/, 'string', '@pop']
      ],

      bracketCounting: [
        [/\{/, 'delimiter.bracket', '@bracketCounting'],
        [/\}/, 'delimiter.bracket', '@pop'],
        { include: 'common' }
      ]
    }
  }
}

export let SymbolKindCodiconMap: Record<monaco.languages.SymbolKind, string>

export enum SymbolKind {
  File = 0,
  Module = 1,
  Namespace = 2,
  Package = 3,
  Class = 4,
  Method = 5,
  Property = 6,
  Field = 7,
  Constructor = 8,
  Enum = 9,
  Interface = 10,
  Function = 11,
  Variable = 12,
  Constant = 13,
  String = 14,
  Number = 15,
  Boolean = 16,
  Array = 17,
  Object = 18,
  Key = 19,
  Null = 20,
  EnumMember = 21,
  Struct = 22,
  Event = 23,
  Operator = 24,
  TypeParameter = 25
}
