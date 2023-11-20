import { format } from "sql-formatter";

console.log(formatFquery())
const dotToLYL = (sql) => {
    let matches = sql.match(/\{[\s\S]*?\}/g);
    matches.map((matche) => {
        if (matche.indexOf(".") != -1) {
            let newmatche = matche.replace(".", "EMTLYL").replaceAll("\n", '')
            console.log("newmatche      " + newmatche)
            sql = sql.replace(matche, newmatche)
        }
    })
    return sql
}
function formatFquery(): string {
    let sql = `select * from
user
left join source
where name = {IN.name}
#{if}
 and sex = 1
#{ endif }`
    const upperReg = /(\bpaging|\bruleobj|\bnorule\bselect|\bcase|\bfrom|\bwhere|\band|\bor|\border by|\bleft join|\binner join|\bjoin)\b/gi
    sql = sql
        .replace(upperReg, match => {
            console.log(match)
            return match.toUpperCase()
        });
    sql = sql.replace("PAGING", "\n--PAGING")
    sql = sql.replace("RULEOBJ", "\n--RULEOBJ")
    sql = sql.replace("NORULE", "\n--NORULE")
    console.error(1, sql)
    interface IfSqlBlock {
        if?: string;
        endif?: string;
        ifSql?: string;
        delBigPairIfSql?: string;
        ifSqlLineLen?: number;
        range?: {
            left: number
            right: number
        }
    }
    const ifSqlBlockArray: Array<IfSqlBlock> = [];
    let regex = /\{#endif.*\}/g;
    console.log(regex.test(sql))
    let endifseq = 0;
    sql = sql.replace(regex, function (match) {
        // endifArray.push(match);
        console.log("endif11111111", match)
        // ifSqlBlockArray.push({
        //     endif: match,
        //     range: {
        //         left: 0,
        //         right: 0
        //     }
        // });
        return `--split:endif${endifseq++}` + match;
    });
    console.log("-----------")
    console.error(sql)
    let ifSeq = 0;
    regex = /\{#if.*\}/g;
    sql = sql.replace(regex, function (match) {
        // ifArray.push(match);
        console.log("if", match)
        ifSqlBlockArray[ifSeq].if = match;
        return `--split:if${ifSeq++}` + match;
    });
    for (let i = 0; i < ifSeq; i++) {
        let left = sql.indexOf(`split:if${i}` + ifSqlBlockArray[i].if);
        let right = sql.indexOf(`split:endif${i}` + ifSqlBlockArray[i].endif);
        let ifStr = sql.substring(left + ifSqlBlockArray[i].if.length, right);
        console.log(ifStr)
        let s = ifStr.split("\n");
        if (s.length == 3) {
            ifSqlBlockArray[i].ifSqlLineLen = 3;
            let temp = s[1].trim();
            // ifSqlArray.push(temp);
            ifSqlBlockArray[i].ifSql = temp;
            s[1] = '--' + temp;
            sql = sql.replace(ifStr, s.join("\n"));
        }
        else {
            s[1] = '/*' + s[1];
            s[s.length - 2] = s[s.length - 2] + '*/';
            sql = sql.replace(ifStr, s.join("\n"));
        }
    }
    console.log("-----------")
    console.error(sql)
    console.log("-----------")
    ifSqlBlockArray.forEach((item, i) => {
        let left = sql.indexOf(`split:if${i}` + item.if);
        let right = sql.indexOf(`split:endif${i}` + item.endif);
        let ifStr = sql.substring(left + item.if.length, right);
        ifSqlBlockArray[i].range.left = left
        ifSqlBlockArray[i].range.right = right
        console.log("---" + ifStr)
    })
    console.log("-----------")

    throw new Error()
    // console.error(sql)
    let formatSQL = format(sql, {
        language: 'plsql',
        tabWidth: 2,
        keywordCase: 'upper',
        linesBetweenQueries: 2,
        paramTypes: {
            custom: [{ regex: String.raw`\{[\s\S]*?\}` }]
        }
    });

    ifSqlBlockArray.forEach((b, index) => {
        const bif = b.if;
        const bendif = b.endif;
        let l = formatSQL.indexOf(`--split:if${index}` + bif) + bif.length;
        let r = formatSQL.indexOf(`--split:endif${index}` + bendif);

        if (b.ifSqlLineLen == 3) {
            let l = formatSQL.indexOf(`--split:if${index}` + bif);
            let r = formatSQL.indexOf(`--split:endif${index}` + bendif);
            let subSql = formatSQL.substring(l, r);

            let subSqlNew = '  ' + subSql.replace("--" + b.ifSql, b.ifSql.trim());
            formatSQL = formatSQL.replace(subSql, subSqlNew);
            // formatSQL = formatSQL.replace("--" + b.ifSql, b.ifSql);
        } else {
            let ifStr = `--split:if${index}` + bif;
            let l = formatSQL.indexOf(ifStr);
            let r = formatSQL.indexOf(`--split:endif${index}` + bendif);
            let subSql = formatSQL.substring(l + ifStr.length, r);
            let subSqlNew = subSql.replace("/*", "");
            subSqlNew = subSqlNew.replace("*/", "").split("\n").map(line => '  ' + line.trim()).join("\n");
            formatSQL = formatSQL.replace(subSql, subSqlNew);
        }

        formatSQL = formatSQL.split("\n").map(line => {
            if (line.trim() == `--split:if${index}` + bif) {
                return bif;
            } else if (line.trim() == `--split:endif${index}` + bendif) {
                return bendif;
            }
            return line;
        }).join("\n");
    });

    formatSQL = formatSQL.replace("--PAGING", "PAGING")
    formatSQL = formatSQL.replace("--RULEOBJ", "RULEOBJ")
    formatSQL = formatSQL.replace("--NORULE", "NORULE")
    formatSQL = formatSQL.replace("EMTLYL", ".")

    return formatSQL
}