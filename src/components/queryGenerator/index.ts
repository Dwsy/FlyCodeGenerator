// 引入自定义模块中的 getTableShortName 方法
import { getTableShortName } from '../../util/'
import {
  ColumnModel,
  ConditionGenerator,
  ConditionModel,
  getOperator,
  JoinModel,
  LikeMatchType,
  Operator,
  QueryModel
} from '../../type/model/queryModel'
import { DatePropertyCodes } from '../../type/model/propertyTypeCodeRef'
import { useFlyStore } from '../../store/flyStore'
import { watchEffect } from 'vue'
import { Output, Property, Protocol } from '../../type/protocol'
import { message } from '../../util/message'
import { tableData } from '../../type/interface columnData'

/**
 * 初始化函数，用于设置和监视flyStore的状态。
 *
 * 当flyStore的状态发生变化时，会自动更新相关的变量，并在控制台打印modellogicname。
 */
export const init = () => {
  const flyStore = useFlyStore()
  watchEffect(() => {
    console.log('modellogicname:', flyStore.protocol.modellogicname)
  })
}

/**
 * 生成查询模型
 *
 * @param outputArray - 输出数组
 * @returns 返回查询模型
 *
 * 此函数首先将 query 对象转换为 Map 对象，然后检查输出数组的长度。
 * 如果输出数组的长度为 0，则显示错误消息并返回。
 * 否则，使用输出数组的第一个元素和转换后的 Map 对象生成查询模型。
 */
export function genQueryModel(outputArray: Output[]): QueryModel {
  const flyStore = useFlyStore()
  const queryArgumentArrayMap = new Map<string, Property[]>()

  // 将 query 对象转换为 Map 对象
  flyStore.protocol.input.forEach((input) => {
    queryArgumentArrayMap.set(input.name, input.properties)
  })

  if (outputArray.length == 0) {
    // message.error('未设置输出参数')
    return
  }
  return genQueryModel_(outputArray[0], queryArgumentArrayMap)
}

/**
 * 生成查询模型并构建查询语句。
 *
 * @param {Output} output - 输出对象，包含了需要查询的表格和字段信息。
 * @param {Map<string, Property[]>} queryArgumentArrayMap - 查询参数映射，键是表名，值是属性数组。
 *
 * @returns {QueryModel} 返回构建好的查询模型。
 *
 * @example
 *
 * const output = {
 *   objectcode: 'table1',
 *   properties: [
 *     { propertycode: 'column1', name: 'column1' },
 *     { propertycode: 'column2', name: 'column2' }
 *   ]
 * };
 *
 * const queryArgumentArrayMap = new Map();
 * queryArgumentArrayMap.set('table1', [
 *   { propertycode: 'column1', name: 'column1' },
 *   { propertycode: 'column2', name: 'column2' }
 * ]);
 *
 * const queryModel = gen(output, queryArgumentArrayMap);
 */
export function genQueryModel_(output: Output, queryArgumentArrayMap: Map<string, Property[]>): QueryModel {
  const flyStore = useFlyStore()
  // const mainTableName = flyStore.protocol.input[0].name;
  const mainTableName = output.name
  const columnModelArray = new Array<ColumnModel>()
  const conditionModelArray = new Array<ConditionModel>()
  const joinModelArray = new Array<JoinModel>()
  const relationTableShortNameMap = new Map<string, string>()
  const relationTableShortNameReverseMapReverse = new Map<string, string>()
  const relationTableColumnMap = new Map<string, string>()
  const needJoinRelationTableMap = new Map<string, tableData>()

  interface DeepJoinKey {
    prefixName: string
    lastName: string
    level: number
  }
  const deepJoinRelationTableMap = new Map<DeepJoinKey, tableData>()

  const queryModel: QueryModel = {
    tableName: mainTableName,
    tableShortName: getTableShortName(mainTableName),
    columns: columnModelArray,
    conditions: conditionModelArray,
    joins: joinModelArray
  }

  // 获取 output 对应的表格数据
  const outputTable = flyStore.tableDataMap.get(output.objectcode)
  // 创建 relationTableMap 和 outPropertiesDataMap 两个 Map 对象

  console.table(output.properties.map((data) => data.name))
  const outPropertiesDataMap = output.properties.map((data) => {
    const columnData = flyStore.columnDataMap.get(data.propertycode)
    if (data.name.indexOf('__') !== -1) {
      const parts = data.name.split('__')
      if (parts.length === 2) {
        relationTableColumnMap.set(data.propertycode, data.name)
        needJoinRelationTableMap.set(parts[0], flyStore.tableDataMap.get(data.objectcode))
        // needJoinColumnTableNameMap.set(data.propertycode, columnData.columnname)
      }
      if (parts.length > 2) {
        const deepJoinKey: DeepJoinKey = {
          prefixName: parts.slice(0, parts.length - 1).join('__'),
          lastName: parts[parts.length - 1],
          level: parts.length - 1
        }
        deepJoinRelationTableMap.set(deepJoinKey, flyStore.tableDataMap.get(data.objectcode))
      }
    }
    return columnData
  })
  //0
  queryArgumentArrayMap.forEach((properties, tableName) => {
    if (tableName == mainTableName) {
      properties.map((data) => {
        const columnData = flyStore.columnDataMap.get(data.propertycode)
        if (data.name.indexOf('__') !== -1) {
          const parts = data.name.split('__')
          if (parts.length === 2) {
            relationTableColumnMap.set(data.propertycode, data.name)
            needJoinRelationTableMap.set(parts[0], flyStore.tableDataMap.get(data.objectcode))
            // needJoinColumnTableNameMap.set(data.propertycode, columnData.columnname)
          }
          if (parts.length > 2) {
            const deepJoinKey: DeepJoinKey = {
              prefixName: parts.slice(0, parts.length - 1).join('__'),
              lastName: parts[parts.length - 1],
              level: parts.length - 1
            }
            deepJoinRelationTableMap.set(deepJoinKey, flyStore.tableDataMap.get(data.objectcode))
          }
        }
        return columnData
      })
    }
  })
  //1

  // 获取表格的短名称
  if (!outputTable.tablename) {
    message.error('未设置输出表')
    return
  }
  const tableShortName = getTableShortName(outputTable.tablename)
  // 将 outPropertiesDataMap 中的数据添加到 fquery 中

  // 遍历 relationTableMap，将关联表格的数据添加到 fquery 中
  // 需要join的表 1.关联查询字段2.关联查询where筛选
  needJoinRelationTableMap.forEach((relationTable, columnname) => {
    let tableName = relationTable.tablename
    if (tableName === 'pl_dictionary' || tableName === 'pl_orgstruct' || tableName === 'pl_region') {
      tableName = relationTable.objectmark
    }
    let relationTableShortName = getTableShortName(tableName, columnname)

    // 如果短表明重复，则重新生成
    let seq = 1
    while (relationTableShortNameReverseMapReverse.get(relationTableShortName) != undefined) {
      relationTableShortName = getTableShortName(tableName, columnname, seq)
      seq++
    }
    relationTableShortNameMap.set(columnname, relationTableShortName)
    relationTableShortNameReverseMapReverse.set(relationTableShortName, tableName)
    let idField =
      {
        pl_dictionary: 'dictionaryid',
        pl_orgstruct: 'orgstructid',
        pl_region: 'regionid'
      }[relationTable.tablename] || true
    if (idField) {
      for (const columnData of relationTable.properties) {
        if (columnData.propertytypecode == '1') {
          idField = columnData.columnname
          break
        }
      }
    }
    const joinModel: JoinModel = {
      tableName: tableShortName,
      tableShortName: tableShortName,
      relationTable: {
        name: relationTable.tablename,
        shortName: relationTableShortName,
        idField: idField
      },
      columnName: columnname
    }
    joinModelArray.push(joinModel)
  })

  console.log(deepJoinRelationTableMap)
  // 深度join
  // 查询列
  outPropertiesDataMap
    .filter((predicate) => predicate != undefined)
    .map((data) => {
      // console.log("data", data)//todo
      // debugger
      const queryname = relationTableColumnMap.get(data.propertycode)
      if (data.columnname == 'shelfdisplay') {
        return
        // ??
      }
      // console.log("relationTableShortNameMap", relationTableShortNameMap.get(queryname))
      relationTableShortNameMap.get(queryname)
      // debugger
      if (queryname === undefined) {
        const columnModel: ColumnModel = {
          tableShortName: tableShortName,
          columnName: data.columnname,
          zhColumnName: data.propertyname
        }
        columnModelArray.push(columnModel)
      } else {
        const [relationTableName, relationColumnName] = queryname.split('__')
        // console.log("queryname", queryname)
        const relationTableShortName = relationTableShortNameMap.get(relationTableName)
        const columnModel: ColumnModel = {
          tableShortName: relationTableShortName,
          columnName: relationColumnName,
          zhColumnName: data.propertyname,
          queryName: queryname,
          relationTable: {
            //todo
            name: relationTableName,
            shortName: '',
            idField: ''
          }
        }
        columnModelArray.push(columnModel)
      }
    })

  if (queryArgumentArrayMap?.size > 0) {
    //todo 自定义处理
  }

  // debugger
  queryArgumentArrayMap.forEach((properties, tableName) => {
    if (tableName === mainTableName) {
      properties.forEach((property) => {
        let conditionModel: ConditionModel
        const argName = property.name
        const operator = getOperator(property)
        if (property.name.split('__').length == 2) {
          const [relationTableName, relationColumnName] = property.name.split('__')
          const relationTableShortName = relationTableShortNameMap.get(relationTableName)
          conditionModel = {
            tableName: relationTableName,
            tableShortName: relationTableShortName,
            columnName: relationColumnName,
            zh_columnName: property.propertyname,
            operator: operator,
            value: null,
            secondValue: null,
            like: null,
            rightClause: `IN.${mainTableName}.${property.name}`
          }
        } else {
          conditionModel = {
            tableName: tableName,
            tableShortName: tableShortName,
            columnName: argName,
            zh_columnName: property.propertyname,
            operator: operator,
            value: null,
            secondValue: null,
            like: null,
            rightClause: `IN.${mainTableName}.${property.name}`
          }
        }

        if (operator == Operator.Equal) {
          conditionModelArray.push(conditionModel)
        }
        if (operator == Operator.Like) {
          conditionModel.like = { matchType: LikeMatchType.Contains } //todo config
          conditionModelArray.push(conditionModel)
        }
        if (operator == Operator.Between) {
          conditionModelArray.push(conditionModel)
          // SELECT * FROM my_table WHERE created_at BETWEEN '2021-01-01 00:00:00' AND '2021-01-31 23:59:59';

          if (DatePropertyCodes.indexOf(Number(property.propertytypecode)) != -1) {
            //时间类
          } else {
          }
        }
      })
    } else {
      properties.forEach((property) => {
        const argName = property.name
        const conditionModel: ConditionModel = {
          tableName: tableName,
          tableShortName: relationTableShortNameMap.get(tableName),
          columnName: argName,
          zh_columnName: property.propertyname,
          operator: Operator.Equal,
          value: null,
          secondValue: null,
          like: null
        }
        conditionModelArray.push(conditionModel)
      })
    }
  })

  queryModel.columns = columnModelArray
  queryModel.joins = joinModelArray
  // debugger
  queryModel.conditions = conditionModelArray
  // console.log(fquery)
  return queryModel
}

/**
 * 生成 SQL 查询语句。
 *
 * @param {QueryModel} queryModel - 查询模型对象，包含了生成 SQL 语句所需的所有信息。
 *
 * @returns {string} 返回生成的 SQL 查询语句。
 *
 * @example
 *
 * const queryModel = {
 *   columns: [
 *     {tableShortName: 't', columnName: 'name', queryName: 'username'},
 *     {tableShortName: 't', columnName: 'age'}
 *   ],
 *   tableName: 'users',
 *   tableShortName: 't',
 *   joins: [],
 *   conditions: []
 * };
 *
 * const sql = generateSql(queryModel);
 * console.log(sql); // SELECT t.name as username, t.age FROM users as t;
 */
export function generateSql(queryModel: QueryModel): string {
  // debugger
  if (!queryModel) {
    message.warning('未设置输出')
    throw new Error('未设置输出')
  }
  // 生成 SELECT 子句
  let selectClause = `SELECT  ${queryModel?.columns
    .map((c, index) => {
      let q
      if (!c.queryName) {
        q = `${c.tableShortName}.${c.columnName}`
      } else {
        q = `${c.tableShortName}.${c.columnName} AS ${c.queryName}`
      }
      let boolean = index == queryModel.columns.length - 1
      let temp = `${q}${boolean ? '' : ','}`
      let len = temp.length
      for (var i = 0; i < Math.min(45 - len, 80); i++) {
        temp += ' '
      }
      return `\n  ${temp}//${c.zhColumnName}`
    })
    .join('')}`
  // 生成 FROM 子句
  const fromClause = `FROM\n  ${queryModel.tableName} AS ${queryModel.tableShortName}`

  // 生成 JOIN 子句
  const joinClauses = queryModel.joins.map(getJoinCallbackfn())

  // debugger

  // 生成 WHERE 子句
  const whereClauses = queryModel.conditions.map(getWhereCallback())
  const whereClause = whereClauses.length > 0 ? `WHERE 1=1\n${whereClauses.join('')}` : ''

  // 拼接 SQL 语句
  return `${selectClause}\n${fromClause}\n${joinClauses.join('\n')}\n${whereClause} NORULE;`
}

/**
 * 根据提供的关联表信息生成SQL JOIN子句。
 *
 * @returns 一个回调函数，该函数接收一个对象，该对象包含关联表的信息，并返回一个字符串，该字符串是SQL JOIN子句。
 *
 * @example
 * const joinCallback = getJoinCallbackfn();
 * const joinClause = joinCallback({
 *   relationTable: {
 *     name: 'orders',
 *     shortName: 'o',
 *     idField: 'id'
 *   },
 *   tableShortName: 'u',
 *   columnName: 'orderId'
 * });
 * console.log(joinClause); // "LEFT JOIN orders as o ON o.id = u.orderId"
 */
function getJoinCallbackfn() {
  return (j: JoinModel) => {
    let lj: string
    let on: string
    if (j.relationTable.name != null || j.relationTable.name != undefined) {
      lj = `LEFT JOIN ${j.relationTable.name} AS ${j.relationTable.shortName} `
      on = `ON ${j.relationTable.shortName}.${j.relationTable.idField} = ${j.tableShortName}.${j.columnName}`
    } else {
      lj = `LEFT JOIN ${j.relationTable.name} AS ${j.relationTable.shortName} `
      on = `ON ${j.relationTable.name}.${j.columnName} = ${j.tableShortName}.${j.columnName}`
    }
    return lj.concat(on)
  }
}

/**
 * 生成一个回调函数，该函数根据给定的条件模型生成一个 WHERE 子句模板。
 *
 * @returns {(c: ConditionModel) => string} 返回一个函数，该函数接收一个条件模型作为参数，返回一个 WHERE 子句模板。
 *
 * @example
 * const callback = getWhereCallback();
 * const conditionModel = new ConditionModel();
 * const whereClauseTemplate = callback(conditionModel);
 */
function getWhereCallback(): (c: ConditionModel) => string {
  return (c: ConditionModel) => {
    // 定义模板字符串
    let whereTemplate = `// {{commit}}\n{#if {{if}}}\n  and {{condition}}\n{#endif}\n`
    const generator = new ConditionGenerator(c)

    // 定义一个映射，存储每种操作符对应的处理函数
    const operatorHandlers = {
      // 对于等于操作符，判断条件是列的值不为空
      [Operator.Equal]: () => `!String.isBlank(IN.${c.tableName}.${c.columnName})`,
      // 对于类似操作符，判断条件是列的值不为空
      [Operator.Like]: () => `!String.isBlank(IN.${c.tableName}.${c.columnName})`,
      // 对于区间操作符，判断条件是开始和结束的值都不为空
      [Operator.Between]: () => {
        const isDate = DatePropertyCodes.indexOf(Number(c.propertytypecode)) !== -1
        const [lvalue, rvalue] = isDate ? ['begin', 'end'] : ['min', 'max']
        return `!String.isBlank(${lvalue}) && !String.isBlank(${rvalue})`
      }
    }

    // 根据操作符获取对应的判断条件
    const juede = operatorHandlers[c.operator]()
    // 生成 WHERE 子句
    const condition = generator.generateWhereClause()

    // 将模板字符串中的占位符替换为实际的值
    whereTemplate = whereTemplate
      .replace('{{commit}}', `${c.zh_columnName}`)
      .replace('{{if}}', juede)
      .replace('{{condition}}', condition)

    return whereTemplate
  }
}

// /**
//  * 生成一个回调函数，该函数根据给定的条件模型生成一个 WHERE 子句模板。
//  *
//  * @returns {(c: ConditionModel) => string} 返回一个函数，该函数接收一个条件模型作为参数，返回一个 WHERE 子句模板。
//  *
//  * @example
//  * const callback = getWhereCallback();
//  * const conditionModel = new ConditionModel();
//  * const whereClauseTemplate = callback(conditionModel);
//  */
// function getWhereCallback(): (c: ConditionModel) => string {
//   return (c: ConditionModel) => {
//     // 定义模板字符串
//     let whereTemplate = `// {{commit}}\n{#if {{if}}}\n  and {{condition}}\n{#endif}\n`
//     const generator = new ConditionGenerator(c)
//     if (c.operator == Operator.Equal) {
//       const juede = `!String.isBlank(IN.${c.tableName}.${c.columnName})`
//       const condition = generator.generateWhereClause()
//       whereTemplate = whereTemplate
//         .replace('{{commit}}', `${c.zh_columnName}`)
//         .replace('{{if}}', juede)
//         .replace('{{condition}}', condition)
//     } else if (c.operator === Operator.Like) {
//       const juede = `!String.isBlank(IN.${c.tableName}.${c.columnName})`
//       let whereClause = generator.generateWhereClause()
//       whereTemplate = whereTemplate.replace('{{if}}', juede).replace('{{condition}}', whereClause)
//     } else if (c.operator === Operator.Between) {
//       const isDate = DatePropertyCodes.indexOf(Number(c.propertytypecode)) !== -1
//       const [lvalue, rvalue] = isDate ? ['begin', 'end'] : ['min', 'max']

//       const juede = `!String.isBlank(${lvalue}) && !String.isBlank(${rvalue})`
//       let whereClause = generator.generateWhereClause()
//       // console.log("c.propertytypecode", c.propertytypecode)
//       whereTemplate = whereTemplate.replace('{{if}}', juede).replace('{{condition}}', whereClause)
//     }
//     whereTemplate = whereTemplate.replace('{{commit}}', `${c.zh_columnName}`)
//     return whereTemplate
//   }
// }
