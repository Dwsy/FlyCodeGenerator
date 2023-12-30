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
const sql = `

SELECT * FROM
xxw_promotion_giveaways AS xpg
LEFT JOIN xxw_main_promotion AS xmp_pro ON xmp_pro.id = xpg.promotion_main_id
LEFT JOIN pl_orgstruct AS ps_sal ON ps_sal.orgstructid = xpg.salearea_id
LEFT JOIN xxw_customer AS xc_cus ON xc_cus.id = xpg.customer_id
LEFT JOIN xxw_channelcustomers AS xc_cha ON xc_cha.id = xpg.channel_id
LEFT JOIN xxw_finished_material xfm ON xfm.id = xpg.activity_product_id
LEFT JOIN xxw_finished_material xfm1 ON xfm1.id = xpg.gift_product_id
LEFT JOIN xxw_store AS xs_sto ON xs_sto.id = xpg.store_id
LEFT JOIN pl_dictionary AS xpr_pro 1231


`
const removeOnClause = (sqlText: string): string => {
  let splitText = sqlText.split(' ')

  for (let i = 0; i < splitText.length; i++) {
    if (splitText[i].toUpperCase() === 'ON') {
      splitText = splitText.slice(0, i)
      break
    }
  }
  return splitText.join(' ')
}
console.log(sql)
// start traversing a statement
visitor.statement(parseFirst(removeOnClause(sql)))

// print result
console.log(SqlQueryTables)
