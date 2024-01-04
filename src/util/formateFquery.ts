import { FormatOptionsWithLanguage, format } from 'sql-formatter'
import { monacoInitializedUtil } from './monacoUtil'

let sqlFormatterOptions: FormatOptionsWithLanguage = {
  language: 'plsql',
  tabWidth: 2,
  // keywordCase: 'upper',
  linesBetweenQueries: 2,
  tabulateAlias: false,
  commaPosition: 'before', //TODO可配置项目
  /*
  a.replace(/(SELECT[\s\S]*?FROM)/g, function(match){
return match.replace(/\n\s*\n/g, '\n');
});
  */
  paramTypes: {
    custom: [{ regex: String.raw`\{[\s\S]*?\}` }]
  }
}

const tempFunc = (sql: string, onlyReturnSql: boolean = false) => {
  let matches = sql.match(/\{[\s\S]*?\}/g)
  matches.map((matche) => {
    if (matche.indexOf('.') != -1) {
      let newmatche = matche.replace('.', 'EMTLYL').replaceAll('\n', '')
      console.log('newmatche      ' + newmatche)
      sql = sql.replace(matche, newmatche)
    }
  })
  return sql
}
export function formatFquery(sql: string, start: string, onlyReturnSql: boolean = false): string {
  sql = sql.replace(
    /\b(paging|as|ruleobj|norule|select|case|from|where|and|or|order\sby|left\sjoin|inner\sjoin|join)\b/gi,
    (match) => {
      console.log(match)
      return match.toUpperCase()
    }
  )
  debugger
  sql = sql
    .split('\n')
    .map((line) => line.trim())
    .join('\n')
  let ifArray: Array<string> = []
  let endifArray: Array<string> = []
  let ifSqlArray: Array<string> = []
  let delBigPairIfSqlArray: Array<string> = []

  interface IfSqlBlock {
    if?: string
    endif?: string
    ifSql?: string
    delBigPairIfSql?: string
    ifSqlLineLen?: number
  }

  const ifSqlBlockArray: Array<IfSqlBlock> = []

  let regex = /\{\s*#endif\s*.*\}/g
  let endifseq = 0

  sql = sql.replace(regex, function (match) {
    endifArray.push(match)
    ifSqlBlockArray.push({
      endif: match
    })
    return `--split:endif${endifseq++}` + match
  })
  sql = sql.replace('PAGING', '\n--PAGING')
  sql = sql.replace('RULEOBJ', '\n--RULEOBJ')
  sql = sql.replace('NORULE', '\n--NORULE')
  let ifSeq = 0
  regex = /\{\s*#if\s*.*\}/g
  sql = sql.replace(regex, function (match) {
    ifArray.push(match)
    ifSqlBlockArray[ifSeq].if = match
    return `--split:if${ifSeq++}` + match
  })

  if (ifArray.length != endifArray.length) {
    throw new Error('if endif not match')
  }

  const splitSql = sql.split('\n')

  for (let i = 0; i < ifSeq; i++) {
    let left = sql.indexOf(`split:if${i}` + ifArray[i])
    let right = sql.indexOf(`split:endif${i}` + endifArray[i])
    let ifStr = sql.substring(left + ifArray[i].length, right)

    let s = ifStr.split('\n')

    if (s.length == 3) {
      ifSqlBlockArray[i].ifSqlLineLen = 3
      let temp = s[1]
      ifSqlArray.push(temp)
      ifSqlBlockArray[i].ifSql = temp
      s[1] = '--' + temp
      sql = sql.replace(ifStr, s.join('\n'))
    } else {
      ifSqlBlockArray[i].ifSqlLineLen = s.length
      let temp = s.slice(1, s.length - 1).join(' ')
      ifSqlArray.push(s.slice(1, s.length - 1).join('\n'))
      ifSqlBlockArray[i].ifSql = temp

      for (let j = 1; j < s.length - 1; j++) {
        let delBigPairIfSql = s[j].replace(/{|}/g, ' ')
        delBigPairIfSqlArray.push(delBigPairIfSql)
      }

      s[1] = '/*' + s[1]
      s[s.length - 2] = s[s.length - 2] + '*/'

      sql = sql.replace(ifStr, s.join('\n'))
    }
  }
  if (onlyReturnSql) {
    return sql
  }
  let formatSQL = format(sql, sqlFormatterOptions)

  // debugger
  ifSqlBlockArray.forEach((b, index) => {
    const bif = b.if
    const bendif = b.endif
    if (b.ifSqlLineLen == 3) {
      let l = formatSQL.indexOf(`--split:if${index}` + bif)
      let r = formatSQL.indexOf(`--split:endif${index}` + bendif)
      let subSql = formatSQL.substring(l, r)
      let subSqlNew = subSql.replace('--' + b.ifSql, b.ifSql)
      formatSQL = formatSQL.replace(subSql, subSqlNew)
      formatSQL = formatSQL.replace('--' + b.ifSql, b.ifSql.trim())
    } else {
      let ifStr = `--split:if${index}` + bif
      let l = formatSQL.indexOf(ifStr)
      let r = formatSQL.indexOf(`--split:endif${index}` + bendif)
      let subSql = formatSQL.substring(l + ifStr.length, r)
      let subSqlNew = subSql.replace('/*', '')
      subSqlNew = subSqlNew
        .replace('*/', '')
        .split('\n')
        .map((line) => '  ' + line.trim())
        .join('\n')
      formatSQL = formatSQL.replace(subSql, subSqlNew)
    }

    formatSQL = formatSQL
      .split('\n')
      .map((line) => {
        if (line.trim() == `--split:if${index}` + bif) {
          return bif
        } else if (line.trim() == `--split:endif${index}` + bendif) {
          return bendif
        }
        return line
      })
      .join('\n')
  })
  formatSQL = formatSQL.replace('--PAGING', 'PAGING')
  formatSQL = formatSQL.replace('--RULEOBJ', 'RULEOBJ')
  formatSQL = formatSQL.replace('--NORULE', 'NORULE')
  formatSQL = formatSQL.replace('EMTLYL', '.')
  //FIX 替换大写MEMBER 为小写member
  // formatSQL = formatSQL.replace(/\bMEMBER\b/g, 'member')
  // formatSQL = formatSQL.replace(/\bLEVEL\b/g, 'level')
  // formatSQL = formatSQL.replace(/\bNUMBER\b/g, 'number')
  formatSQL = formatSQL
    .split('\n')
    .map((line) => start + line)
    .join('\n')
  console.log(formatSQL)
  return formatSQL
}
