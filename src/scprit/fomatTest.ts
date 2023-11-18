import { format } from 'sql-formatter';
let sql = ``
let ifArray: Array<string> = [];
let endifArray: Array<string> = []
let ifSqlArray: Array<string> = []
let delBigPairIfSqlArray: Array<string> = []

interface IfSqlBlock {
    if?: string,
    endif?: string,
    ifSql?: string,
    delBigPairIfSql?: string,
    ifSqlLineLen?: number
}
const ifSqlBlockArray: Array<IfSqlBlock> = new Array<IfSqlBlock>()

var regex = /\{#endif.*\}/g;;
let endifseq = 0
sql = sql.replace(regex, function (match) {
    endifArray.push(match)
    // ifSqlBlockArray[endifseq].endif = match
    ifSqlBlockArray.push({
        endif: match
    })
    return `--split:endif${endifseq++}` + match;
});
let ifSeq = 0
regex = /\{#if.*\}/g;
sql = sql.replace(regex, function (match) {

    ifArray.push(match)
    ifSqlBlockArray[ifSeq].if = match
    return `--split:if${ifSeq++}` + match;
})
if (ifArray.length != endifArray.length) {
    throw new Error("if endif not match")
}

const splitSql = sql.split("\n")
console.error(sql)
for (let i = 0; i < ifSeq; i++) {
    let left = sql.indexOf(`split:if${i}` + ifArray[i])
    console.error(`split:if${i}` + ifArray[i]);

    console.log("left", left, ifArray[i])
    let right = sql.indexOf(`split:endif${i}` + endifArray[i])
    console.log("right", right, endifArray[i])
    let ifStr = sql.substring(left + ifArray[i].length, right)

    console.error("ifStr", ifStr)


    let s = ifStr.split("\n")
    console.log("length", s.length);

    if (s.length == 3) {
        ifSqlBlockArray[i].ifSqlLineLen = 3
        let temp = s[1]
        ifSqlArray.push(temp)
        ifSqlBlockArray[i].ifSql = temp
        s[1] = '--' + temp
        // let delBigPairIfSql = temp.replace(/{|}/g, "")
        // delBigPairIfSqlArray.push(delBigPairIfSql)
        // ifSqlBlockArray[i].delBigPairIfSql = delBigPairIfSql
        // s.splice(1, 0, delBigPairIfSql);
        sql = sql.replace(ifStr, s.join("\n"))
    }
    else {
        ifSqlBlockArray[i].ifSqlLineLen = s.length
        let temp = s.slice(1, s.length - 1).join(" ")
        ifSqlArray.push(s.slice(1, s.length - 1).join("\n"))
        ifSqlBlockArray[i].ifSql = temp
        for (let j = 1; j < s.length - 1; j++) {
            // s[j] = '/*\n' + s[j]
            let delBigPairIfSql = s[j].replace(/{|}/g, " ")
            delBigPairIfSqlArray.push(delBigPairIfSql)
        }
        s[1] = '/*' + s[1]
        s[s.length - 2] = s[s.length - 2] + '*/'

        // let delBigPairIfSql = temp.replace(/{|}/g, "")
        // delBigPairIfSqlArray.push(delBigPairIfSql)
        // ifSqlBlockArray[i].delBigPairIfSql = delBigPairIfSql
        // s.splice(1, 0, delBigPairIfSql);
        sql = sql.replace(ifStr, s.join("\n"))
    }
}

console.log("::::::")
console.log(sql)
console.log("::::::")
// throw new Error("stop")
let formatSQL = format(sql, {
    language: 'plsql',
    tabWidth: 2,
    keywordCase: 'upper',
    linesBetweenQueries: 2,
})

// ifArray.forEach((i, index) => {
//     formatSQL = formatSQL.replace(`--split:if${index}` + i, i)
// })
// endifArray.forEach((i, index) => {
//     formatSQL = formatSQL.replace(`--split:endif${index}` + i, i)
// })
ifSqlBlockArray.forEach((b, index) => {
    const bif = b.if
    const bendif = b.endif
    if (b.ifSqlLineLen == 3) {
        console.log("b.ifSql", b.ifSql)
        let l = formatSQL.indexOf(`--split:if${index}` + bif)
        let r = formatSQL.indexOf(`--split:endif${index}` + bendif)
        let subSql = formatSQL.substring(l, r)
        console.log("subSql", subSql)
        let subSqlNew = subSql.replace("--" + b.ifSql, b.ifSql)
        // subSqlNew = removeLine(subSqlNew, b.delBigPairIfSql)
        formatSQL = formatSQL.replace(subSql, subSqlNew)

        formatSQL = formatSQL.replace("--" + b.ifSql, b.ifSql)
    } else {
        console.log("b.ifSql", b.ifSql)
        let ifStr = `--split:if${index}` + bif
        let l = formatSQL.indexOf(ifStr)
        let r = formatSQL.indexOf(`--split:endif${index}` + bendif)
        let subSql = formatSQL.substring(l + ifStr.length, r)
        console.log("subSql", subSql)
        let subSqlNew = subSql.replace("/*", "")
        subSqlNew = subSqlNew.replace("*/", "").split("\n").map(line => '  ' + line.trim()).join("\n")
        // b.delBigPairIfSql.split("")
        // subSqlNew.split("\n").filter(predicate => predicate !== '')
        //     .map((i) => { })
        // subSql = subSql.replace(b.delBigPairIfSql, "")
        formatSQL = formatSQL.replace(subSql, subSqlNew)
    }
    formatSQL = formatSQL.split("\n")
        .map(line => {

            if (line.trim() == `--split:if${index}` + bif) {
                return bif
            } else if (line.trim() == `--split:endif${index}` + bendif) {
                return bendif
            }
            return line
        }).join("\n")

    // formatSQL = formatSQL.replace(`--split:if${index}` + bif, bif)
    // formatSQL = formatSQL.replace(`--split:endif${index}` + bendif, bendif)


})



console.error(formatSQL)



