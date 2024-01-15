import { QueryModel } from '../../type/model/queryModel'
import { Input, Output, Property, Protocol } from '../../type/protocol'

export interface RelationLFieldAndRField {
  lfield: string
  rfield: string
}
export interface EntityRowData {
  key: string
  name: string
  type?: string
  comment?: string
  relationobj?: tableData
  relationQueryFieldCodes?: string[]
  // relationQueryFieldNames?: Map<string, RelationLFieldAndRField>[]
  relationQueryFieldNames?: string[]
  joinField?: string
  query?: boolean
  this: columnData
  select: boolean
  children?: EntityRowData[]
  level?: number
}

export const EntityRowData2QueryModel = (tableData: tableData, EntityRowDatas: EntityRowData[]): QueryModel => {
  debugger
  const queryArgumentArrayMap = new Map<string, Property[]>()
  const { inputProperty, outputProperty } = genInOutProtocol(tableData, EntityRowDatas)

  console.log(inputProperty)
  console.log(outputProperty)
  queryArgumentArrayMap.set(tableData.objectmark, inputProperty)
  const output: Output = {
    customcode: tableData.objectcode,
    name: tableData.objectmark,
    objectcode: tableData.objectcode,
    objectname: tableData.objectname,
    datatype: '0',
    marktype: '0',
    properties: outputProperty
  }

  return genQueryModel_(output, queryArgumentArrayMap)
}

type InOutProtocol = {
  inputProperty: Property[]
  outputProperty: Property[]
}
function genInOutProtocol(tableData: tableData, EntityRowDatas: EntityRowData[]): InOutProtocol {
  const inOutProtocol = {
    inputProperty: [] as Property[],
    outputProperty: [] as Property[]
  }
  // .filter((predicate) => predicate.select)
  EntityRowDatas.forEach((item) => {
    let temp = {
      name: item.this.columnname,
      propertyname: item.this.propertyname,
      propertytypecode: item.this.propertytypecode,
      objectcode: tableData.objectcode,
      propertycode: item.this.propertycode,
      marktype: '2',
      level: item.level,
      joinField: item.joinField,
      key: item.key
    }
    if (item.query) {
      inOutProtocol.inputProperty.push(temp)
    }
    if (item.select) {
      // debugger
      inOutProtocol.outputProperty.push(temp)
    }

    // debugger
    //--
    // [].
    item?.children.forEach((child2) => {
      let temp = {
        name: item.this.columnname + '__' + child2.this.columnname,
        propertyname: child2.this.propertyname,
        propertytypecode: child2.this.propertytypecode,
        objectcode: child2?.relationobj?.objectcode,
        propertycode: child2.this.propertycode,
        marktype: '2',
        level: child2.level,
        joinField: child2.joinField
        // key: this.columnName=child2.key
      }
      if (child2.query) {
        // debugger
        inOutProtocol.inputProperty.push(temp)
      }
      if (child2.select) {
        inOutProtocol.outputProperty.push(temp)
      }

      // if (child2.children.length === 0) return
      child2?.children.forEach((child3) => {
        // if (child3.children.length === 0) return
        const temp = {
          name: item.this.columnname + '__' + child2.this.columnname + '__' + child3.this.columnname,
          propertyname: child3.this.propertyname,
          propertytypecode: child3.this.propertytypecode,
          objectcode: child3?.relationobj?.objectcode,
          propertycode: child3.this.propertycode,
          marktype: '2',
          level: child3.level,
          joinField: child3.joinField,
          key: child3.key
        }
        if (child3.query) {
          inOutProtocol.inputProperty.push(temp)
        }
        if (child3.select) {
          inOutProtocol.outputProperty.push(temp)
        }
      })
    })
  })

  //EntityRowDatas 递归筛选 select的
  console.log(JSON.stringify(EntityRowDatas, null, 4))
  return inOutProtocol
}

// 引入自定义模块中的 getTableShortName 方法
import { getTableShortName } from '../../util/'
import {
  ColumnModel,
  ConditionGenerator,
  ConditionModel,
  getOperator,
  JoinModel,
  LikeMatchType,
  Operator
} from '../../type/model/queryModel'
import { DatePropertyCodes } from '../../type/model/propertyTypeCodeRef'
import { useFlyStore } from '../../store/flyStore'
import { watchEffect } from 'vue'
import { message } from '../../util/message'
import { columnData, tableData } from '../../type/interface columnData'

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
    message.error('未设置输出参数')
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
function genQueryModel_(output: Output, queryArgumentArrayMap: Map<string, Property[]>): QueryModel {
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
  //--
  const customJoinFieldMap = new Map<string, string>()
  //--

  const outPropertiesDataMap = output.properties.map((data) => {
    // const [asName, propertycode, level] = data.key.split('|')
    const columnData = flyStore.columnDataMap.get(data.propertycode)
    columnData.inoutProperty = data
    const parts = data.name.split('__')
    if (data.name.indexOf('__') !== -1) {
      customJoinFieldMap.set(data.key, data.joinField)
      if (parts.length === 2) {
        relationTableColumnMap.set(data.propertycode, data.name)
        needJoinRelationTableMap.set(parts[0], flyStore.tableDataMap.get(data.objectcode))
        // needJoinColumnTableNameMap.set(data.propertycode, columnData.columnname)
      }
      if (parts.length > 2) {
        const deepJoinKey: DeepJoinKey = {
          prefixName: parts.slice(0, parts.length - 1).join('__'),
          lastName: parts[parts.length - 1],
          level: parts.length
        }
        deepJoinRelationTableMap.set(deepJoinKey, flyStore.tableDataMap.get(data.objectcode))
      }
    }
    return columnData
  })
  // 获取表格的短名称
  const tableShortName = getTableShortName(outputTable.tablename)

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
      tableName: tableName,
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

  deepJoinRelationTableMap.forEach((relationTable: tableData, deepJoinKey: DeepJoinKey) => {
    let joinModel: JoinModel
    if (deepJoinKey.level == 3) {
      joinModelArray.forEach((item) => {
        if (item.columnName == deepJoinKey.prefixName.split('__')[0]) {
          let tableName = relationTable.tablename
          let columnname = deepJoinKey.prefixName
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
          joinModel = {
            tableName: item.tableName,
            tableShortName: item.tableShortName,
            relationTable: {
              name: relationTable.tablename,
              shortName: relationTableShortName,
              idField: customJoinFieldMap.get(deepJoinKey.prefixName + '__' + deepJoinKey.lastName)
            },
            columnName: deepJoinKey.lastName
          }
          joinModelArray.push(joinModel)
        }
      })
    }
  })

  console.log(deepJoinRelationTableMap)

  // 查询列
  outPropertiesDataMap
    .filter((predicate) => predicate != undefined)
    .forEach((data) => {
      // console.log("data", data)//todo
      // debugger
      // data.inoutProperty.key
      const queryname = data?.inoutProperty?.key || relationTableColumnMap.get(data.propertycode)
      // console.log("relationTableShortNameMap", relationTableShortNameMap.get(queryname))
      relationTableShortNameMap.get(queryname)
      // debugger
      if (queryname.indexOf('__') == -1) {
        const columnModel: ColumnModel = {
          tableShortName: tableShortName,
          columnName: data.columnname,
          zhColumnName: data.propertyname
        }
        columnModelArray.push(columnModel)
        return `  ${tableShortName}.${data.columnname}`
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

  // 定义模板字符串
  // debugger
  queryArgumentArrayMap.forEach((properties, tableName) => {
    if (tableName === mainTableName) {
      properties.forEach((property) => {
        let conditionModel: ConditionModel
        const argName = property.name
        const operator = getOperator(property)
        if (property.name.split('__').length > 1) {
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
          like: null,
          rightClause: `IN.${mainTableName}.${property.name}`
        }
        conditionModelArray.push(conditionModel)
      })
    }
  })
  debugger
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
  // 生成 SELECT 子句
  let selectClause = `SELECT  ${queryModel.columns
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
    const whereClause = generator.generateWhereClause()
    if (c.operator == Operator.Equal) {
      const juede = `!String.isBlank(IN.${c.tableName}.${c.columnName})`

      whereTemplate = whereTemplate
        .replace('{{commit}}', `${c.zh_columnName}`)
        .replace('{{if}}', juede)
        .replace('{{condition}}', whereClause)
    } else if (c.operator === Operator.Like) {
      const juede = `!String.isBlank(IN.${c.tableName}.${c.columnName})`
      whereTemplate = whereTemplate.replace('{{if}}', juede).replace('{{condition}}', whereClause)
    } else if (c.operator === Operator.Between) {
      const isDate = DatePropertyCodes.indexOf(Number(c.propertytypecode)) !== -1
      const [lvalue, rvalue] = isDate ? ['begin', 'end'] : ['min', 'max']
      const juede = `!String.isBlank(${lvalue}) && !String.isBlank(${rvalue})`
      whereTemplate = whereTemplate.replace('{{if}}', juede).replace('{{condition}}', whereClause)
    }
    whereTemplate = whereTemplate.replace('{{commit}}', `${c.zh_columnName}`)
    return whereTemplate
  }
}
