function formatSQL(sqlQuery) {
    // 将所有关键字转换为大写
    const formattedSQL = sqlQuery.replace(/(\bpaging|\bruleobj\bselect|\bcase|\bend|\bfrom|\bwhere|\band|\bor|\border by|\bleft join|\binner join|\bjoin)\b/gi, match => {
        console.log(match)
        return match.toUpperCase()
    });

    console.log(formattedSQL)

    // 使用换行符分隔每个条件
    let lines = formattedSQL.split('\n');

    console.log(lines)

    // 寻找 SELECT 子句的起始和结束行
    let selectStartIndex = -1;
    let selectEndIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('SELECT')) {
            selectStartIndex = i;
        }
        if (selectStartIndex !== -1 && line.endsWith(',')) {
            selectEndIndex = i;
        } else if (selectStartIndex !== -1 && line.endsWith('FROM')) {
            selectEndIndex = i;
            break;
        }
    }


    // 处理 SELECT 子句中的字段
    if (selectStartIndex !== -1 && selectEndIndex !== -1) {
        // 获取 SELECT 子句中的字段部分
        let selectLines: Array<string> = lines.slice(selectStartIndex, selectEndIndex + 1);

        const splitsSelectLines = selectLines.flatMap((line) => {
            return line.split(',').map((field) => {
                return field.trim()
            })
        }).filter(predicate => predicate !== '').map((line) => {
            if (!/^(SELECT|CASE|END|FROM|WHERE|AND|OR|ORDER BY|LEFT JOIN|INNER JOIN|JOIN)/i.test(line)) {
                return `  ${line}`
            } else {
                return line
            }
        })
        console.error("\n\nsplitsSelectLines\n\n", splitsSelectLines);

        const selectPart = splitsSelectLines.slice(1, splitsSelectLines.length - 1)

        // 对 SELECT 子句中的字段进行处理
        let indentedFields = selectPart.join(',\n');
        indentedFields = 'SELECT\n' + indentedFields + '\nFROM'
        console.error("indentedFields\n\n", indentedFields, "\n")
        // 更新 SELECT 子句行
        lines.splice(selectStartIndex, selectEndIndex - selectStartIndex + 1, `${indentedFields}`);
    }

    console.log("lines", lines, "\n\n")

    // 添加适当的缩进
    const indentedSQL = lines.map((line: string, index) => {
        // console.log("line", line, "\n\n")
        if (!/^(SELECT|CASE|END|FROM|WHERE|AND|OR|ORDER BY|LEFT JOIN|INNER JOIN|JOIN|PAGING|RULEOBJ)/i.test(line.trim())) {
            return `  ${line.trim()}`
        } else {
            console.log(line)
            return line.trim()
        }
    }).join('\n');

    return indentedSQL;
}


// 示例用法
const yourSQLQuery = `SELECT pl_orgstruct.orgstructid as orgid, pl_orgstruct.parentorgstructid as parentorgid, parentorg.orgtypeid as parentorgtypeid,
            org.orgaccountcode as orgaccountcode, pl_orgstruct.orgname as orgname, pl_orgstruct.status,
            pl_orgstruct.orgstructdescr as orgdescr, pl_orgstruct.codepath, pl_orgstruct.orgtypeid, pl_orgstruct.orgstructtypeid,
            pl_orgstruct.fullname, pl_orgstruct.level, pl_orgstruct.seq,
            parentorg.orgname as parentorgname,
            orgtype.orgtypename 
  FROM pl_pmmarea pl_orgstruct 
  left join pl_orgstruct parentorg on parentorg.orgstructid = pl_orgstruct.parentorgstructid 
  inner join pl_orgtype orgtype on orgtype.orgtypeid = pl_orgstruct.orgtypeid and orgtype.orgstructtypeid = pl_orgstruct.orgstructtypeid 
  inner join pl_org org on org.orgid = pl_orgstruct.orgid 
  where 1 = 1 and orgtype.orgtypecategory = 1 
  AND pl_orgstruct.orgstructtypeid = { IN.pl_salearea.orgstructtypeid }

  //名称
  { #if(IN.pl_salearea.orgname != null && IN.pl_salearea.orgname != '' )
    }
    and(pl_orgstruct.orgname like { '%'+IN.pl_salearea.orgname + '%' } 
  or org.orgaccountcode like { '%'+IN.pl_salearea.orgname + '%' }
    )
    { #endif }
    //选择的节点parentorgstructid
    { #if(IN.pl_salearea.isshowchild != null && IN.pl_salearea.isshowchild == '1' && IN.pl_salearea.parentorgstructid != null && IN.pl_salearea.parentorgstructid != '') }
  and pl_orgstruct.codepath like { '%' + IN.pl_salearea.parentorgstructid + '.%' }
    { #endif }
    //选择的节点=orgstructid
    { #if(IN.pl_salearea.isshowchild != null && (IN.pl_salearea.isshowchild == '0' || IN.pl_salearea.isshowchild == '') && IN.pl_salearea.parentorgstructid != null && IN.pl_salearea.parentorgstructid != '') }
  and pl_orgstruct.orgstructid = { IN.pl_salearea.parentorgstructid }
    { #endif }

    //状态
    { #if(IN.pl_salearea.status != null && IN.pl_salearea.status != '') }
  and pl_orgstruct.status = { IN.pl_salearea.status }
    { #endif }
  
   ORDER BY pl_orgstruct.level ASC, pl_orgstruct.seq ASC, pl_orgstruct.orgname ASC paging RULE(onrule)
   `;

const yourSQLQuery2 = `
SELECT
    t1.id, t1.code,
        t1.name, plot.orgname AS marketing_region,
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
LEFT JOIN pl_orgstruct  plot ON t1.marketing_region = plot.orgstructid
LEFT JOIN pl_dictionary td ON t1.type = td.dictionaryid
LEFT JOIN pl_dictionary ctd ON t1.channel_type = ctd.dictionaryid
LEFT JOIN pl_orgstruct member ON t1.manager = member.orgstructid
WHERE 1 = 1
    { #if!String.isBlank(IN.tn_crm_dwy.code) }
 and t1.code like  { '%' + IN.tn_crm_dwy.code + '%' }
    { #endif }
    { #if!String.isBlank(IN.tn_crm_dwy.name) }
 and t1.name like  { '%' + IN.tn_crm_dwy.name + '%' }
    { #endif }
    { #if!String.isBlank(IN.tn_crm_dwy.marketing_region) }
 and t1.marketi˝ng_region = { IN.tn_crm_dwy.marketing_region }
    { #endif }
    { #if!String.isBlank(IN.tn_crm_dwy.channel_type) }
 and t1.channel_type = { IN.tn_crm_dwy.channel_type }
    { #endif }
    { #if!String.isBlank(IN.tn_crm_dwy.type) }
 and t1.type = { IN.tn_crm_dwy.type }
    { #endif }
    { #if!String.isBlank(IN.tn_crm_dwy.level) }
 and t1.level = { IN.tn_crm_dwy.level }
    { #endif }
    { #if!String.isBlank(IN.tn_crm_dwy.manager__orgname) }
 and member.orgname  like  { '%' + IN.tn_crm_dwy.manager__orgname + '%' }
    { #endif }
    { #if!String.isBlank(IN.tn_crm_dwy.manager) }
 and t1.manager = { IN.tn_crm_dwy.manager }
    { #endif }
    { #if start != null && end != null }
 and t1.create_time between { start } and { end }
    { #endif }
ORDER BY create_time DESC
    paging
    RULEOBJ(onrule)
`
const formattedSQL = formatSQL(yourSQLQuery2);
console.log("--")
console.error(formattedSQL);
console.log("--")
