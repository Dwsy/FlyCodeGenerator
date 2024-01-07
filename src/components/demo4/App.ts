import { monacoInitializedUtil } from '../../util/monacoUtil'
import { getRangeForText } from '../MonacoEnhance/sqlProvider'

// let sum = 0
export const provideDocumentSymbol = class {
  async provideDocumentSymbols(editor, token) {
    const uri = editor.uri
    const model = editor
    const JavaScriptWorker = await monaco.languages.typescript.getJavaScriptWorker()

    // {
    //   name: t.name,
    //   detail: t.name || '...',
    //   description: '',

    //   kind: monaco.languages.SymbolKind.Event,
    //   range: t.range,
    //   selectionRange: t.range,
    //   tags: [],
    //   children: t.children?.map((e) => formatResultToTree(e, t.name)),
    //   containerName: i
    // }[]
    const sqlSymbols = getAllSqlSqlSymbol(model)

    const allSqlRange = sqlSymbols.map((d) => d.range)

    if (editor.isDisposed()) return []

    const client = await JavaScriptWorker(monaco.Uri.parse(model.uri))

    const navigationTree = await client.getNavigationTree(uri.toString())

    if (!navigationTree || editor.isDisposed()) return []

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

    // const r = (t, i) => {
    //   // console.log(monaco.languages.SymbolKind[t.kind] || monaco.languages.monaco.languages.SymbolKind.Variable, t.text, t, i)
    //   // sum++
    //   // debugger
    //   const rnage: monaco.IRange = this._textSpanToRange(e, t.spans[0])
    //   for (let index = 0; index < allSqlRange.length; index++) {
    //     const sqlRange = allSqlRange[index]
    //     if (monaco.Range.containsRange(sqlRange, rnage)) {
    //       return null
    //     }
    //   }
    //   const s = {
    //     name: t.text,
    //     detail: t.text || '...',
    //     description: '',
    //     kind: SymbolKind[t.kind] || monaco.languages.SymbolKind.Variable,
    //     range: rnage,
    //     selectionRange: rnage,
    //     tags: [],
    //     children: t.childItems?.map((e) => r(e, t.text)),
    //     containerName: i
    //   }
    //   return s
    // }
    // let arr = []

    // if (n.childItems) {
    //   arr = n.childItems.map((childItem) => {
    //     return r(childItem, '')
    //   })
    // }
    // a.forEach((c) => {
    //   if (c.kind === 'function') {
    //     console.log(c)
    //   }
    // })
    let documentSymbols: monaco.languages.DocumentSymbol[] = []

    const convertSymbolToMonacoRange = (symbolItem, container) => {
      const currentRange: monaco.IRange = this._textSpanToRange(model, symbolItem.spans[0])
      // for (let index = 0; index < allSqlRange.length; index++) {
      //   const sqlRange = allSqlRange[index]
      //   // debugger
      //   if (
      //     monaco.Range.containsRange(
      //       sqlRange,
      //       new monaco.Range(
      //         currentRange.startLineNumber,
      //         currentRange.startColumn,
      //         currentRange.startLineNumber,
      //         currentRange.startColumn + 1
      //       )
      //     )
      //   ) {
      //     return null
      //   }
      // }
      const monacoSymbol = {
        name: symbolItem.text,
        detail: symbolItem.text || '...',
        description: '',
        kind: SymbolKind[symbolItem.kind] || monaco.languages.SymbolKind.Variable,
        range: currentRange,
        selectionRange: currentRange,
        tags: [],
        children: symbolItem.childItems?.map((nestedSymbol) =>
          convertSymbolToMonacoRange(nestedSymbol, symbolItem.text)
        ),
        containerName: container
      }
      return monacoSymbol
    }

    if (navigationTree.childItems) {
      documentSymbols = navigationTree.childItems.map((childItem) => {
        return convertSymbolToMonacoRange(childItem, '')
      })
    }
    documentSymbols = documentSymbols.filter((p) => {
      const currentRange: monaco.IRange = p.range
      for (let index = 0; index < allSqlRange.length; index++) {
        const sqlRange = allSqlRange[index]
        // debugger
        if (
          monaco.Range.containsRange(
            sqlRange,
            new monaco.Range(
              currentRange.startLineNumber,
              currentRange.startColumn,
              currentRange.startLineNumber,
              currentRange.startColumn + 1
            )
          )
        ) {
          return false
        }
      }
      return true
    })
    documentSymbols = documentSymbols.concat(sqlSymbols)
    console.log(documentSymbols)
    return documentSymbols.filter((p) => p)
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

export function getAllSqlSqlSymbol(model: monaco.editor.ITextModel): Array<any> {
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
    // debugger

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
}

function formatResultToTree(t, i): any {
  return {
    name: t.name,
    detail: t.name || '...',
    description: '',

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
      'endif',
      'abstract',
      'any',
      'as',
      'asserts',
      'bigint',
      'boolean',
      'break',
      'case',
      'catch',
      'class',
      'continue',
      'const',
      'constructor',
      '//debugger',
      'declare',
      'default',
      'delete',
      'do',
      'else',
      'enum',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'from',
      'function',
      'get',
      'if',
      'implements',
      'import',
      'in',
      'infer',
      'instanceof',
      'interface',
      'is',
      'keyof',
      'let',
      'module',
      'namespace',
      'never',
      'new',
      'null',
      'number',
      'object',
      'out',
      'package',
      'private',
      'protected',
      'public',
      'override',
      'readonly',
      'require',
      'global',
      'return',
      'satisfies',
      'set',
      'static',
      'string',
      'super',
      'switch',
      'symbol',
      'this',
      'throw',
      'true',
      'try',
      'type',
      'typeof',
      'undefined',
      'unique',
      'unknown',
      'var',
      'void',
      'while',
      'with',
      'yield',
      'async',
      'await',
      'of',
      'ABORT',
      'ABSOLUTE',
      'ACTION',
      'ADA',
      'ADD',
      'AFTER',
      'ALL',
      'ALLOCATE',
      'ALTER',
      'ALWAYS',
      'ANALYZE',
      'AND',
      'ANY',
      'ARE',
      'AS',
      'ASC',
      'ASSERTION',
      'AT',
      'ATTACH',
      'AUTHORIZATION',
      'AUTOINCREMENT',
      'AVG',
      'BACKUP',
      'BEFORE',
      'BEGIN',
      'BETWEEN',
      'BIT',
      'BIT_LENGTH',
      'BOTH',
      'BREAK',
      'BROWSE',
      'BULK',
      'BY',
      'CASCADE',
      'CASCADED',
      'CASE',
      'CAST',
      'CATALOG',
      'CHAR',
      'CHARACTER',
      'CHARACTER_LENGTH',
      'CHAR_LENGTH',
      'CHECK',
      'CHECKPOINT',
      'CLOSE',
      'CLUSTERED',
      'COALESCE',
      'COLLATE',
      'COLLATION',
      'COLUMN',
      'COMMIT',
      'COMPUTE',
      'CONFLICT',
      'CONNECT',
      'CONNECTION',
      'CONSTRAINT',
      'CONSTRAINTS',
      'CONTAINS',
      'CONTAINSTABLE',
      'CONTINUE',
      'CONVERT',
      'CORRESPONDING',
      'COUNT',
      'CREATE',
      'CROSS',
      'CURRENT',
      'CURRENT_DATE',
      'CURRENT_TIME',
      'CURRENT_TIMESTAMP',
      'CURRENT_USER',
      'CURSOR',
      'DATABASE',
      'DATE',
      'DAY',
      'DBCC',
      'DEALLOCATE',
      'DEC',
      'DECIMAL',
      'DECLARE',
      'DEFAULT',
      'DEFERRABLE',
      'DEFERRED',
      'DELETE',
      'DENY',
      'DESC',
      'DESCRIBE',
      'DESCRIPTOR',
      'DETACH',
      'DIAGNOSTICS',
      'DISCONNECT',
      'DISK',
      'DISTINCT',
      'DISTRIBUTED',
      'DO',
      'DOMAIN',
      'DOUBLE',
      'DROP',
      'DUMP',
      'EACH',
      'ELSE',
      'END',
      'END-EXEC',
      'ERRLVL',
      'ESCAPE',
      'EXCEPT',
      'EXCEPTION',
      'EXCLUDE',
      'EXCLUSIVE',
      'EXEC',
      'EXECUTE',
      'EXISTS',
      'EXIT',
      'EXPLAIN',
      'EXTERNAL',
      'EXTRACT',
      'FAIL',
      'FALSE',
      'FETCH',
      'FILE',
      'FILLFACTOR',
      'FILTER',
      'FIRST',
      'FLOAT',
      'FOLLOWING',
      'FOR',
      'FOREIGN',
      'FORTRAN',
      'FOUND',
      'FREETEXT',
      'FREETEXTTABLE',
      'FROM',
      'FULL',
      'FUNCTION',
      'GENERATED',
      'GET',
      'GLOB',
      'GLOBAL',
      'GO',
      'GOTO',
      'GRANT',
      'GROUP',
      'GROUPS',
      'HAVING',
      'HOLDLOCK',
      'HOUR',
      'IDENTITY',
      'IDENTITYCOL',
      'IDENTITY_INSERT',
      'IF',
      'IGNORE',
      'IMMEDIATE',
      'IN',
      'INCLUDE',
      'INDEX',
      'INDEXED',
      'INDICATOR',
      'INITIALLY',
      'INNER',
      'INPUT',
      'INSENSITIVE',
      'INSERT',
      'INSTEAD',
      'INT',
      'INTEGER',
      'INTERSECT',
      'INTERVAL',
      'INTO',
      'IS',
      'ISNULL',
      'ISOLATION',
      'JOIN',
      'KEY',
      'KILL',
      'LANGUAGE',
      'LAST',
      'LEADING',
      'LEFT',
      'LEVEL',
      'LIKE',
      'LIMIT',
      'LINENO',
      'LOAD',
      'LOCAL',
      'LOWER',
      'MATCH',
      'MATERIALIZED',
      'MAX',
      'MERGE',
      'MIN',
      'MINUTE',
      'MODULE',
      'MONTH',
      'NAMES',
      'NATIONAL',
      'NATURAL',
      'NCHAR',
      'NEXT',
      'NO',
      'NOCHECK',
      'NONCLUSTERED',
      'NONE',
      'NOT',
      'NOTHING',
      'NOTNULL',
      'NULL',
      'NULLIF',
      'NULLS',
      'NUMERIC',
      'OCTET_LENGTH',
      'OF',
      'OFF',
      'OFFSET',
      'OFFSETS',
      'ON',
      'ONLY',
      'OPEN',
      'OPENDATASOURCE',
      'OPENQUERY',
      'OPENROWSET',
      'OPENXML',
      'OPTION',
      'OR',
      'ORDER',
      'OTHERS',
      'OUTER',
      'OUTPUT',
      'OVER',
      'OVERLAPS',
      'PAD',
      'PARTIAL',
      'PARTITION',
      'PASCAL',
      'PERCENT',
      'PIVOT',
      'PLAN',
      'POSITION',
      'PRAGMA',
      'PRECEDING',
      'PRECISION',
      'PREPARE',
      'PRESERVE',
      'PRIMARY',
      'PRINT',
      'PRIOR',
      'PRIVILEGES',
      'PROC',
      'PROCEDURE',
      'PUBLIC',
      'QUERY',
      'RAISE',
      'RAISERROR',
      'RANGE',
      'READ',
      'READTEXT',
      'REAL',
      'RECONFIGURE',
      'RECURSIVE',
      'REFERENCES',
      'REGEXP',
      'REINDEX',
      'RELATIVE',
      'RELEASE',
      'RENAME',
      'REPLACE',
      'REPLICATION',
      'RESTORE',
      'RESTRICT',
      'RETURN',
      'RETURNING',
      'REVERT',
      'REVOKE',
      'RIGHT',
      'ROLLBACK',
      'ROW',
      'ROWCOUNT',
      'ROWGUIDCOL',
      'ROWS',
      'RULE',
      'SAVE',
      'SAVEPOINT',
      'SCHEMA',
      'SCROLL',
      'SECOND',
      'SECTION',
      'SECURITYAUDIT',
      'SELECT',
      'PAGING',
      'Dwsy',
      'SEMANTICKEYPHRASETABLE',
      'SEMANTICSIMILARITYDETAILSTABLE',
      'SEMANTICSIMILARITYTABLE',
      'SESSION',
      'SESSION_USER',
      'SET',
      'SETUSER',
      'SHUTDOWN',
      'SIZE',
      'SMALLINT',
      'SOME',
      'SPACE',
      'SQL',
      'SQLCA',
      'SQLCODE',
      'SQLERROR',
      'SQLSTATE',
      'SQLWARNING',
      'STATISTICS',
      'SUBSTRING',
      'SUM',
      'SYSTEM_USER',
      'TABLE',
      'TABLESAMPLE',
      'TEMP',
      'TEMPORARY',
      'TEXTSIZE',
      'THEN',
      'TIES',
      'TIME',
      'TIMESTAMP',
      'TIMEZONE_HOUR',
      'TIMEZONE_MINUTE',
      'TO',
      'TOP',
      'TRAILING',
      'TRAN',
      'TRANSACTION',
      'TRANSLATE',
      'TRANSLATION',
      'TRIGGER',
      'TRIM',
      'TRUE',
      'TRUNCATE',
      'TRY_CONVERT',
      'TSEQUAL',
      'UNBOUNDED',
      'UNION',
      'UNIQUE',
      'UNKNOWN',
      'UNPIVOT',
      'UPDATE',
      'UPDATETEXT',
      'UPPER',
      'USAGE',
      'USE',
      'USER',
      'USING',
      'VACUUM',
      'VALUE',
      'VALUES',
      'VARCHAR',
      'VARYING',
      'VIEW',
      'VIRTUAL',
      'WAITFOR',
      'WHEN',
      'WHENEVER',
      'WHERE',
      'WHILE',
      'WINDOW',
      'WITH',
      'WITHIN GROUP',
      'WITHOUT',
      'WORK',
      'WRITE',
      'WRITETEXT',
      'YEAR',
      'ZONE',
      'abstract',
      'any',
      'as',
      'asserts',
      'bigint',
      'boolean',
      'break',
      'case',
      'catch',
      'class',
      'continue',
      'const',
      'constructor',
      '//debugger',
      'declare',
      'default',
      'delete',
      'do',
      'else',
      'enum',
      'export',
      'extends',
      'false',
      'finally',
      'for',
      'from',
      'function',
      'get',
      'if',
      'implements',
      'import',
      'in',
      'infer',
      'instanceof',
      'interface',
      'is',
      'keyof',
      'let',
      'module',
      'namespace',
      'never',
      'new',
      'null',
      'number',
      'object',
      'out',
      'package',
      'private',
      'protected',
      'public',
      'override',
      'readonly',
      'require',
      'global',
      'return',
      'satisfies',
      'set',
      'static',
      'string',
      'super',
      'switch',
      'symbol',
      'this',
      'throw',
      'true',
      'try',
      'type',
      'typeof',
      'undefined',
      'unique',
      'unknown',
      'var',
      'void',
      'while',
      'with',
      'yield',
      'async',
      'await',
      'of',
      'abort',
      'absolute',
      'action',
      'ada',
      'add',
      'after',
      'all',
      'allocate',
      'alter',
      'always',
      'analyze',
      'and',
      'any',
      'are',
      'as',
      'asc',
      'assertion',
      'at',
      'attach',
      'authorization',
      'autoincrement',
      'avg',
      'backup',
      'before',
      'begin',
      'between',
      'bit',
      'bit_length',
      'both',
      'break',
      'browse',
      'bulk',
      'by',
      'cascade',
      'cascaded',
      'case',
      'cast',
      'catalog',
      'char',
      'character',
      'character_length',
      'char_length',
      'check',
      'checkpoint',
      'close',
      'clustered',
      'coalesce',
      'collate',
      'collation',
      'column',
      'commit',
      'compute',
      'conflict',
      'connect',
      'connection',
      'constraint',
      'constraints',
      'contains',
      'containstable',
      'continue',
      'convert',
      'corresponding',
      'count',
      'create',
      'cross',
      'current',
      'current_date',
      'current_time',
      'current_timestamp',
      'current_user',
      'cursor',
      'database',
      'date',
      'day',
      'dbcc',
      'deallocate',
      'dec',
      'decimal',
      'declare',
      'default',
      'deferrable',
      'deferred',
      'delete',
      'deny',
      'desc',
      'describe',
      'descriptor',
      'detach',
      'diagnostics',
      'disconnect',
      'disk',
      'distinct',
      'distributed',
      'do',
      'domain',
      'double',
      'drop',
      'dump',
      'each',
      'else',
      'end',
      'end-exec',
      'errlvl',
      'escape',
      'except',
      'exception',
      'exclude',
      'exclusive',
      'exec',
      'execute',
      'exists',
      'exit',
      'explain',
      'external',
      'extract',
      'fail',
      'false',
      'fetch',
      'file',
      'fillfactor',
      'filter',
      'first',
      'float',
      'following',
      'for',
      'foreign',
      'fortran',
      'found',
      'freetext',
      'freetexttable',
      'from',
      'full',
      'function',
      'generated',
      'get',
      'glob',
      'global',
      'go',
      'goto',
      'grant',
      'group',
      'groups',
      'having',
      'holdlock',
      'hour',
      'identity',
      'identitycol',
      'identity_insert',
      'if',
      'ignore',
      'immediate',
      'in',
      'include',
      'index',
      'indexed',
      'indicator',
      'initially',
      'inner',
      'input',
      'insensitive',
      'insert',
      'instead',
      'int',
      'integer',
      'intersect',
      'interval',
      'into',
      'is',
      'isnull',
      'isolation',
      'join',
      'key',
      'kill',
      'language',
      'last',
      'leading',
      'left',
      'level',
      'like',
      'limit',
      'lineno',
      'load',
      'local',
      'lower',
      'match',
      'materialized',
      'max',
      'merge',
      'min',
      'minute',
      'module',
      'month',
      'names',
      'national',
      'natural',
      'nchar',
      'next',
      'no',
      'nocheck',
      'nonclustered',
      'none',
      'not',
      'nothing',
      'notnull',
      'null',
      'nullif',
      'nulls',
      'numeric',
      'octet_length',
      'of',
      'off',
      'offset',
      'offsets',
      'on',
      'only',
      'open',
      'opendatasource',
      'openquery',
      'openrowset',
      'openxml',
      'option',
      'or',
      'order',
      'others',
      'outer',
      'output',
      'over',
      'overlaps',
      'pad',
      'partial',
      'partition',
      'pascal',
      'percent',
      'pivot',
      'plan',
      'position',
      'pragma',
      'preceding',
      'precision',
      'prepare',
      'preserve',
      'primary',
      'print',
      'prior',
      'privileges',
      'proc',
      'procedure',
      'public',
      'query',
      'raise',
      'raiserror',
      'range',
      'read',
      'readtext',
      'real',
      'reconfigure',
      'recursive',
      'references',
      'regexp',
      'reindex',
      'relative',
      'release',
      'rename',
      'replace',
      'replication',
      'restore',
      'restrict',
      'return',
      'returning',
      'revert',
      'revoke',
      'right',
      'rollback',
      'row',
      'rowcount',
      'rowguidcol',
      'rows',
      'rule',
      'save',
      'savepoint',
      'schema',
      'scroll',
      'second',
      'section',
      'securityaudit',
      'select',
      'norule',
      'paging',
      'semantickeyphrasetable',
      'semanticsimilaritydetailstable',
      'semanticsimilaritytable',
      'session',
      'session_user',
      'set',
      'setuser',
      'shutdown',
      'size',
      'smallint',
      'some',
      'space',
      'sql',
      'sqlca',
      'sqlcode',
      'sqlerror',
      'sqlstate',
      'sqlwarning',
      'statistics',
      'substring',
      'sum',
      'system_user',
      'table',
      'tablesample',
      'temp',
      'temporary',
      'textsize',
      'then',
      'ties',
      'time',
      'timestamp',
      'timezone_hour',
      'timezone_minute',
      'to',
      'top',
      'trailing',
      'tran',
      'transaction',
      'translate',
      'translation',
      'trigger',
      'trim',
      'true',
      'truncate',
      'try_convert',
      'tsequal',
      'unbounded',
      'union',
      'unique',
      'unknown',
      'unpivot',
      'update',
      'updatetext',
      'upper',
      'usage',
      'use',
      'user',
      'using',
      'vacuum',
      'value',
      'values',
      'varchar',
      'varying',
      'view',
      'virtual',
      'waitfor',
      'when',
      'whenever',
      'where',
      'while',
      'window',
      'with',
      'within group',
      'without',
      'work',
      'write',
      'writetext',
      'year',
      'zone',
      'dwsy'
    ],
    // keywords: [
    //   'break',
    //   'case',
    //   'catch',
    //   'class',
    //   'continue',
    //   'const',
    //   'constructor',
    //   'debugger',
    //   'default',
    //   'delete',
    //   'do',
    //   'else',
    //   'export',
    //   'extends',
    //   'false',
    //   'finally',
    //   'for',
    //   'from',
    //   'function',
    //   'get',
    //   'if',
    //   'import',
    //   'in',
    //   'instanceof',
    //   'let',
    //   'new',
    //   'null',
    //   'return',
    //   'set',
    //   'super',
    //   'switch',
    //   'symbol',
    //   'this',
    //   'throw',
    //   'true',
    //   'try',
    //   'typeof',
    //   'undefined',
    //   'var',
    //   'void',
    //   'while',
    //   'with',
    //   'yield',
    //   'async',
    //   'await',
    //   'of'
    // ],

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

export const languageConfiguration: monaco.languages.LanguageConfiguration = {
  wordPattern: new RegExp(
    '/(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\\'\\"\\,\\.\\<\\>\\/\\?\\s]+)/g'
  ),
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/']
  },
  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ],
  onEnterRules: [
    {
      beforeText: new RegExp('/^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/'),
      afterText: new RegExp('/^\\s*\\*\\/$/'),
      action: {
        indentAction: 2,
        appendText: ' * '
      }
    },
    {
      beforeText: new RegExp('/^\\s*\\/\\*\\*(?!\\/)([^\\*]|\\*(?!\\/))*$/'),
      action: {
        indentAction: 0,
        appendText: ' * '
      }
    },
    {
      beforeText: new RegExp('/^(\\t|(\\ \\ ))*\\ \\*(\\ ([^\\*]|\\*(?!\\/))*)?$/'),
      action: {
        indentAction: 0,
        appendText: '* '
      }
    },
    {
      beforeText: new RegExp('/^(\\t|(\\ \\ ))*\\ \\*\\/\\s*$/'),
      action: {
        indentAction: 0,
        removeText: 1
      }
    }
  ],
  autoClosingPairs: [
    {
      open: '{',
      close: '}'
    },
    {
      open: '[',
      close: ']'
    },
    {
      open: '(',
      close: ')'
    },
    {
      open: '"',
      close: '"',
      notIn: ['string']
    },
    {
      open: "'",
      close: "'",
      notIn: ['string', 'comment']
    },
    {
      open: '`',
      close: '`',
      notIn: ['string', 'comment']
    },
    {
      open: '/**',
      close: ' */',
      notIn: ['string']
    }
  ],
  folding: {
    markers: {
      start: new RegExp('/^\\s*\\/\\/\\s*#?region\\b/'),
      end: new RegExp('/^\\s*\\/\\/\\s*#?endregion\\b/')
    }
  }
}
