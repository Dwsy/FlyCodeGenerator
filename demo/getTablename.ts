interface SqlQueryTable {
  tableName: string
  alias: string
}

const getSqlQueryTables = (sqlText: string): Array<SqlQueryTable> => {
  let regex = /(?:FROM|JOIN)\s+(\S+)(?:\s+(\S+))?/gim
  let match
  let result: Array<SqlQueryTable> = []

  while ((match = regex.exec(sqlText)) !== null) {
    let tableName, alias

    if (match[1]) {
      tableName = match[1]
      alias = match[2] ? match[2] : match[1]
      result.push({ tableName: tableName, alias: alias })
    }
  }

  return result
}

console.log(
  getSqlQueryTables(
    `
    SELECT FROM xxw_promotion_giveaways xpg
    NORULE;`
  )
)
// 测试用例:1
console.log(
  getSqlQueryTables(`
  SELECT 
  
  FROM xxw_promotion_giveaways xpg
  NORULE;`)
)

// 测试用例:
console.log(getSqlQueryTables('SELECT * FROM table1 AS t1 JOIN table2'))
// 输出: [ { tableName: 'table1', alias: 't1' }, { tableName: 'table2', alias: 'table2' } ]

console.log(
  getSqlQueryTables(`
SELECT * FROM table1 JOIN table2
`)
)

// 测试用例 1: 带有别名的表
console.log(getSqlQueryTables('SELECT * FROM table1 AS t1 JOIN table2 AS t2'))
// 预期输出: [ { tableName: 'table1', alias: 't1' }, { tableName: 'table2', alias: 't2' } ]

// 测试用例 2: 不带有别名的表
console.log(getSqlQueryTables('SELECT * FROM table1 JOIN table2'))
// 预期输出: [ { tableName: 'table1', alias: 'table1' }, { tableName: 'table2', alias: 'table2' } ]

// 测试用例 3: 带有一个别名和一个不带别名的表
console.log(getSqlQueryTables('SELECT * FROM table1 AS t1 JOIN table2'))
// 预期输出: [ { tableName: 'table1', alias: 't1' }, { tableName: 'table2', alias: 'table2' } ]

// 测试用例 4: 仅有一张表，没有别名
console.log(getSqlQueryTables('SELECT * FROM table1'))
// 预期输出: [ { tableName: 'table1', alias: 'table1' } ]

// 测试用例 5: 仅有一张表，但有别名
console.log(getSqlQueryTables('SELECT * FROM table1 AS t1'))
// 预期输出: [ { tableName: 'table1', alias: 't1' } ]

// 测试用例 6: 多个 JOIN
console.log(getSqlQueryTables('SELECT * FROM table1 AS t1 JOIN table2 AS t2 JOIN table3'))
// 预期输出: [ { tableName: 'table1', alias: 't1' }, { tableName: 'table2', alias: 't2' }, { tableName: 'table3', alias: 'table3' } ]

console.log(
  getSqlQueryTables(`
select * from (
    select * from user 
    left join info
)`)
)
// 测试用例 7: 带有非关联子查询的表
console.log(getSqlQueryTables('SELECT * FROM (SELECT * FROM table1) AS t1'))
// 预期输出: [ { tableName: 'table1', alias: 't1' } ]

// 测试用例 8: 带有关联子查询的表
console.log(getSqlQueryTables('SELECT * FROM table2 AS t2 WHERE EXISTS (SELECT * FROM table1 WHERE t1.id = t2.id)'))
// 预期输出: [ { tableName: 'table2', alias: 't2' }, { tableName: 'table1', alias: 'table1' } ]

// 测试用例 9: 带有多级关联子查询的表
console.log(
  getSqlQueryTables(
    'SELECT * FROM table3 AS t3 WHERE EXISTS (SELECT * FROM table2 WHERE EXISTS (SELECT * FROM table1 WHERE t1.id = t2.id AND t2.id = t3.id))'
  )
)
// 预期输出: [ { tableName: 'table3', alias: 't3' }, { tableName: 'table2', alias: 'table2' }, { tableName: 'table1', alias: 'table1' } ]

console.log(
  getSqlQueryTables(`
SELECT 

FROM xxw_promotion_giveaways as xpg
NORULE;`)
)
