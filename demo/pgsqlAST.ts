import { astVisitor, parse, parseFirst, Statement } from 'pgsql-ast-parser'
interface SqlQueryTable {
  tableName: string
  alias: string
}

const SqlQueryTables = new Array<SqlQueryTable>()
let joins = 0
const visitor = astVisitor((map) => ({
  // implement here AST parts you want to hook

  tableRef: (t) =>
    SqlQueryTables.push({
      tableName: t.name,
      alias: t.alias || t.name
    }),
  join: (t) => {
    joins++
    // call the default implementation of 'join'
    // this will ensure that the subtree is also traversed.
    map.super().join(t)
  }
}))
var sql = `

SELECT * FROM
 kx_sales_target as kst 
left join kx_sales_target_detail detail on detail.targetid = kst.id
left join kx_kq_store store on store.id = detail.storeid
left join pmmmember pmm on pmm.orgstructid = kst.memberid 
left join pl_orgstruct pos on pos.orgstructid = pmm.parentorgstructid
left join pl_orgstruct org on org.orgstructid = pos.parentorgstructid
left join pl_userinfo usr on usr.userinfoid = pmm.userinfoid
left join ka_kq_channelcustomers kkc on kkc.id = usr.distrbutorid
left join pl_orgstruct lead on lead.orgstructid = pmm.parentmemberid
left join pl_orgstruct pos1 on pos1.orgstructid = lead.parentorgstructid
left join pl_dictionary dic1 on dic1.dictionaryid = usr.guidetype
where 1=1


`
const removeOnClause = (sqlText: string): string => {
  let lowerCaseSql = sqlText.toLowerCase()
  let splitText = lowerCaseSql.split('join ')
  let newText = []
  for (let i = 0; i < splitText.length; i++) {
    let partBeforeOn = splitText[i].split(' on ')[0]
    //@ts-ignore
    newText.push(partBeforeOn)
  }
  return newText.join('\njoin ')
}
sql = removeOnClause(sql)
console.log(sql)
// start traversing a statement
visitor.statement(parseFirst(sql))

// print result
console.log(SqlQueryTables)
