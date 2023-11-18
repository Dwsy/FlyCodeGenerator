import { format } from 'sql-formatter';

let sql = `select t1.id,t1.code, t1.name,
plot.orgname AS marketing_region,
plot.fullname AS marketing_region__fullname,
ctd.dicvalue AS channel_type,
CASE
WHEN t1."level" = 1 THEN
    '黄金' 
WHEN t1."level" = 2 THEN
    '白金' 
WHEN t1."level" = 3 THEN
    '钻石' ELSE'未知' 
END AS level,
CASE
    WHEN t1.approval_status = 1 THEN '待审核'
    WHEN t1.approval_status = 2 THEN '审核中'
    WHEN t1.approval_status = 3 THEN '审核通过'
    WHEN t1.approval_status = 4 THEN '审核不通过'
    WHEN t1.approval_status = 5 THEN '退回'
    ELSE '未知'
END as approval_status,
t1.contact_name,
t1.telephone_number,
t1.detailed_addresses,
pl_region.regionname AS administrative_region,
pl_region.namepath AS administrative_region__namepath,
member.orgname AS manager,
t1.head_photo,
t1.create_time,
t1.update_time,
t1.created_user,
td.dicvalue AS type
FROM
tn_crm_dwy t1
LEFT JOIN pl_region ON t1.administrative_region = pl_region.regionid
LEFT JOIN pl_orgstruct  plot ON t1.marketing_region = plot.orgstructid LEFT JOIN pl_dictionary td ON t1.type = td.dictionaryid
LEFT JOIN pl_dictionary ctd ON t1.channel_type = ctd.dictionaryid
LEFT JOIN pl_orgstruct member ON t1.manager = member.orgstructid
WHERE 1=1
{#if !String.isBlank(IN.tn_crm_dwy.code)}
  and t1.code like  { '%' + IN.tn_crm_dwy.code + '%' }
  and t1.code like  { '%' + IN.tn_crm_dwy.code + '%' }
{#endif}

{#if start != null && end != null}
  and t1.create_time between { start } and { end }
     and t1.create_time between { start } and { end }
  and t1.create_time between { start } and { end }
  and t1.create_time between { start } and { end }
{#endif}
ORDER BY create_time DESC
paging
RULEOBJ(onrule)
//123`
sql = sql.replace(/(\bpaging|\bruleobj\bselect|\bcase|\bfrom|\bwhere|\band|\bor|\border by|\bleft join|\binner join|\bjoin)\b/gi, match => {
    console.log(match)
    return match.toUpperCase()
});
sql = sql.replaceAll("//", "--//")

let ifArray: Array<string> = [];
let endifArray: Array<string> = [];
let ifSqlArray: Array<string> = [];
let delBigPairIfSqlArray: Array<string> = [];

interface IfSqlBlock {
    if?: string;
    endif?: string;
    ifSql?: string;
    delBigPairIfSql?: string;
    ifSqlLineLen?: number;
}

const ifSqlBlockArray: Array<IfSqlBlock> = [];

let regex = /\{#endif.*\}/g;
let endifseq = 0;

sql = sql.replace(regex, function (match) {
    endifArray.push(match);
    ifSqlBlockArray.push({
        endif: match
    });
    return `--split:endif${endifseq++}` + match;
});

let ifSeq = 0;
regex = /\{#if.*\}/g;
sql = sql.replace(regex, function (match) {
    ifArray.push(match);
    ifSqlBlockArray[ifSeq].if = match;
    return `--split:if${ifSeq++}` + match;
});

if (ifArray.length != endifArray.length) {
    throw new Error("if endif not match");
}

const splitSql = sql.split("\n");

for (let i = 0; i < ifSeq; i++) {
    let left = sql.indexOf(`split:if${i}` + ifArray[i]);
    let right = sql.indexOf(`split:endif${i}` + endifArray[i]);
    let ifStr = sql.substring(left + ifArray[i].length, right);

    let s = ifStr.split("\n");

    if (s.length == 3) {
        ifSqlBlockArray[i].ifSqlLineLen = 3;
        let temp = s[1];
        ifSqlArray.push(temp);
        ifSqlBlockArray[i].ifSql = temp;
        s[1] = '--' + temp;
        sql = sql.replace(ifStr, s.join("\n"));
    }
    else {
        ifSqlBlockArray[i].ifSqlLineLen = s.length;
        let temp = s.slice(1, s.length - 1).join(" ");
        ifSqlArray.push(s.slice(1, s.length - 1).join("\n"));
        ifSqlBlockArray[i].ifSql = temp;

        for (let j = 1; j < s.length - 1; j++) {
            let delBigPairIfSql = s[j].replace(/{|}/g, " ");
            delBigPairIfSqlArray.push(delBigPairIfSql);
        }

        s[1] = '/*' + s[1];
        s[s.length - 2] = s[s.length - 2] + '*/';

        sql = sql.replace(ifStr, s.join("\n"));
    }
}

let formatSQL = format(sql, {
    language: 'plsql',
    tabWidth: 2,
    keywordCase: 'preserve',
    linesBetweenQueries: 2,
});

ifSqlBlockArray.forEach((b, index) => {
    const bif = b.if;
    const bendif = b.endif;

    if (b.ifSqlLineLen == 3) {
        let l = formatSQL.indexOf(`--split:if${index}` + bif);
        let r = formatSQL.indexOf(`--split:endif${index}` + bendif);
        let subSql = formatSQL.substring(l, r);
        let subSqlNew = subSql.replace("--" + b.ifSql, b.ifSql);
        formatSQL = formatSQL.replace(subSql, subSqlNew);
        formatSQL = formatSQL.replace("--" + b.ifSql, b.ifSql);
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
formatSQL = formatSQL.replaceAll("--//", "//")
console.error(formatSQL);