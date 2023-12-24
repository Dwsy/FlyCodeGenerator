// 引入自定义模块中的 getTableShortName 方法
import { getTableShortName } from "../../util/";
import {
  ColumnModel,
  ConditionGenerator,
  ConditionModel,
  getOperator,
  JoinModel,
  LikeMatchType,
  Operator,
  QueryModel
} from "../../type/model/queryModel"
import { DatePropertyCodes } from "../../type/model/propertyTypeCodeRef";
import { useFlyStore } from "../../store/flyStore";
import { watchEffect } from "vue";
import { Output, Property, Protocol } from "../../type/protocol";
import { message } from "../../util/message";





/**
 * 初始化函数，用于设置和监视flyStore的状态。
 * 
 * 当flyStore的状态发生变化时，会自动更新相关的变量，并在控制台打印modellogicname。
 */
export const init = () => {
  const flyStore = useFlyStore()
  watchEffect(() => {
    console.log("modellogicname:", flyStore.protocol.modellogicname);
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
  const queryArgumentArrayMap = new Map<string, Property[]>();

  // 将 query 对象转换为 Map 对象
  flyStore.protocol.input.forEach((input) => {
    queryArgumentArrayMap.set(input.name, input.properties);
  })

  if (outputArray.length == 0) {
    message.error("未设置输出参数")
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
  // 定义 fquery 变量
  let fquery = "select\n{{selectColumns}}"
  const flyStore = useFlyStore()
  // const mainTableName = flyStore.protocol.input[0].name;
  const mainTableName = output.name;
  const columnModelArray = new Array<ColumnModel>()
  const conditionModelArray = new Array<ConditionModel>()
  const joinModelArray = new Array<JoinModel>()
  const relationTableShortNameMap = new Map<string, string>();
  const relationTableShortNameReverseMapReverse = new Map<string, string>();
  const relationTableColumnMap = new Map<string, string>();
  const needJoinRelationTableMap = new Map<string, tableData>();



  interface DeepJoinKey {
    prefixName: string,
    lastName: string,
    level: number
  }
  const deepJoinRelationTableMap = new Map<DeepJoinKey, tableData>();

  const queryModel: QueryModel = {
    tableName: mainTableName,
    tableShortName: getTableShortName(mainTableName),
    columns: columnModelArray,
    conditions: conditionModelArray,
    joins: joinModelArray
  }


  // 获取 output 对应的表格数据
  const outputTable = flyStore.tableDataMap.get(output.objectcode);
  // 创建 relationTableMap 和 outPropertiesDataMap 两个 Map 对象

  const outPropertiesDataMap = output.properties.map((data) => {
    const columnData = flyStore.columnDataMap.get(data.propertycode);
    if (data.name.indexOf("__") !== -1) {
      const parts = data.name.split("__");
      if (parts.length === 2) {
        relationTableColumnMap.set(data.propertycode, data.name);
        needJoinRelationTableMap.set(parts[0], flyStore.tableDataMap.get(data.objectcode))
        // needJoinColumnTableNameMap.set(data.propertycode, columnData.columnname)
      }
      if (parts.length > 2) {
        const deepJoinKey: DeepJoinKey = {
          prefixName: parts.slice(0, parts.length - 1).join("__"),
          lastName: parts[parts.length - 1],
          level: parts.length - 1
        }
        deepJoinRelationTableMap.set(deepJoinKey, flyStore.tableDataMap.get(data.objectcode))
      }
    }
    return columnData;
  });
  // 获取表格的短名称
  const tableShortName = getTableShortName(outputTable.tablename);
  // 将 outPropertiesDataMap 中的数据添加到 fquery 中
  fquery += `\n  from ${outputTable.tablename} as ${tableShortName}`;


  // 遍历 relationTableMap，将关联表格的数据添加到 fquery 中
  // 需要join的表 1.关联查询字段2.关联查询where筛选
  needJoinRelationTableMap.forEach((relationTable, columnname) => {
    let tableName = relationTable.tablename
    if (tableName === "pl_dictionary" || tableName === "pl_orgstruct" || tableName === "pl_region") {
      tableName = relationTable.objectmark
    }
    let relationTableShortName = getTableShortName(tableName, columnname);

    // 如果短表明重复，则重新生成
    let seq = 1;
    while (relationTableShortNameReverseMapReverse.get(relationTableShortName) != undefined) {
      relationTableShortName = getTableShortName(tableName, columnname, seq);
      seq++
    }
    relationTableShortNameMap.set(columnname, relationTableShortName);
    relationTableShortNameReverseMapReverse.set(relationTableShortName, tableName);
    let idField = {
      pl_dictionary: "dictionaryid",
      pl_orgstruct: "orgstructid",
      pl_region: "regionid",
    }[relationTable.tablename] || true;
    if (idField) {
      for (const columnData of relationTable.properties) {
        if (columnData.propertytypecode == "1") {
          idField = columnData.columnname;
          break;
        }
      }
    }
    const joinModel: JoinModel = {
      tableName: tableShortName,
      tableShortName: tableShortName,
      relationTable: {
        name: relationTable.tablename,
        shortName: relationTableShortName,
        idField: idField,
      },
      columnName: columnname,
    };
    joinModelArray.push(joinModel)
    fquery += `\n  left join ${relationTable.tablename} as ${relationTableShortName} `;
    fquery += `on ${tableShortName}.${columnname} = ${relationTableShortName}.${idField}`;
  });

  // 深度join
  deepJoinRelationTableMap
    .forEach((relationTable, deepJoinKey) => {
      if (deepJoinKey.level == 2) {

      }
      let deepJoinTableName = relationTable.tablename;
      if (deepJoinTableName === "pl_dictionary" || deepJoinTableName === "pl_orgstruct" || deepJoinTableName === "pl_region") {
        deepJoinTableName = relationTable.objectmark;
      }
      let deepJoinTableShortName = getTableShortName(deepJoinTableName, deepJoinKey.lastName);

      // 如果短表明重复，则重新生成
      let seq = 1;
      while (relationTableShortNameReverseMapReverse.get(deepJoinTableShortName) !== undefined) {
        deepJoinTableShortName = getTableShortName(deepJoinTableName, deepJoinKey.lastName, seq);
        seq++;
      }
      relationTableShortNameMap.set(deepJoinKey.prefixName + "__" + deepJoinKey.lastName, deepJoinTableShortName);
      relationTableShortNameReverseMapReverse.set(deepJoinTableShortName, deepJoinTableName);
      let idField = {
        pl_dictionary: "dictionaryid",
        pl_orgstruct: "orgstructid",
        pl_region: "regionid",
      }[deepJoinTableName] || true;
      if (idField) {
        for (const columnData of relationTable.properties) {
          if (columnData.propertytypecode === "1") {
            idField = columnData.columnname;
            break;
          }
        }
      }
      const joinModel: JoinModel = {
        tableName: tableShortName,
        tableShortName: tableShortName,
        relationTable: {
          name: deepJoinTableName,
          shortName: deepJoinTableShortName,
          idField: idField,
        },
        columnName: deepJoinKey.prefixName + "__" + deepJoinKey.lastName,
      };
      joinModelArray.push(joinModel);
      fquery += `\n  left join ${deepJoinTableName} as ${deepJoinTableShortName} `;
      fquery += `on ${deepJoinKey.prefixName}.${deepJoinKey.lastName} = ${deepJoinTableShortName}.${idField}`;
    });


  // console.log(relationTableShortNameReverseMapReverse)
  // 查询列
  let selectColumns = outPropertiesDataMap
    .filter(predicate => predicate != undefined)
    .map((data) => {
      // console.log("data", data)//todo
      // debugger
      const queryname = relationTableColumnMap.get(data.propertycode);
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
          zhColumnName: data.propertyname,
        }
        columnModelArray.push(columnModel)
        return `  ${tableShortName}.${data.columnname}`;
      } else {
        const [relationTableName, relationColumnName] = queryname.split("__");
        // console.log("queryname", queryname)
        const relationTableShortName = relationTableShortNameMap.get(relationTableName);
        const columnModel: ColumnModel = {
          tableShortName: relationTableShortName,
          columnName: relationColumnName,
          zhColumnName: data.propertyname,
          queryName: queryname,
          relationTable: {//todo 
            name: relationTableName,
            shortName: '',
            idField: '',
          }
        }
        columnModelArray.push(columnModel)
        return `  ${relationTableShortName}.${relationColumnName} as ${queryname}`;
      }
    })
    .join(",\n");

  fquery = fquery.replace("{{selectColumns}}", selectColumns);
  // 如果 query 不为 null，则将查询条件添加到 fquery 中
  if (queryArgumentArrayMap?.size > 0) {//todo 自定义处理
    fquery += "\n  where 1=1\n";
  }

  // 定义模板字符串
  const template = `{#if {{if}}}\n and {{condition}}\n{#endif}\n`;
  // 遍历 queryMap，将查询条件添加到 fquery 中
  // debugger
  queryArgumentArrayMap.forEach((properties, tableName) => {
    if (tableName === mainTableName) {
      properties.forEach((property) => {
        // if (property.propertytypecode == "3") return
        // 先完成 = 操作 todo
        const argName = property.name
        const operator = getOperator(property)
        const conditionModel: ConditionModel = {
          tableName: tableName,
          tableShortName: tableShortName,
          columnName: argName,
          zh_columnName: property.propertyname,
          operator: operator,
          value: null,
          secondValue: null,
          like: null
        }
        let condition = `${tableShortName}.${argName} `

        if (operator == Operator.Equal) {
          conditionModelArray.push(conditionModel)
          condition += operator
          condition += ` { IN.${tableName}.${argName} }`;
          const blankJudge = template.replace(
            "{{if}}",
            `!String.isBlank(IN.${tableName}.${argName})`
          ).replace("{{condition}}", condition);
          fquery += blankJudge;
        }
        if (operator == Operator.Like) {
          conditionModel.like = { matchType: LikeMatchType.Contains }//todo config
          conditionModelArray.push(conditionModel)
          condition += operator
          condition += ` { IN.${tableName}.${argName} }`;
          const blankJudge = template.replace(
            "{{if}}",
            `!String.isBlank(IN.${tableName}.${argName})`
          ).replace("{{condition}}", condition);
          fquery += blankJudge;
        }
        if (operator == Operator.Between) {
          conditionModelArray.push(conditionModel)
          // SELECT * FROM my_table WHERE created_at BETWEEN '2021-01-01 00:00:00' AND '2021-01-31 23:59:59';

          if (DatePropertyCodes.indexOf(Number(property.propertytypecode)) != -1) {
            //时间类
            condition += ` ${operator} { bengin } ${Operator.AND} { end }`
            const blankJudge = template.replace(
              "{{if}}",
              `!String.isBlank(begin)&&!String.isBlank(end)`
            ).replace("{{condition}}", condition);
            fquery += blankJudge;
          } else {
            condition += ` ${operator} { value1 } ${Operator.AND} { value2 }`
            const blankJudge = template.replace(
              "{{if}}",
              `!String.isBlank(value1)&&!String.isBlank(value2)`
            ).replace("{{condition}}", condition);
            fquery += blankJudge;
          }


        }

      });
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
        const condition = `${relationTableShortNameMap.get(tableName)}.${argName} = { IN.${tableName}.${argName} }`;
        const q = template.replace(
          "{{if}}",
          `!String.isBlank(IN.${tableName}.${argName})`
        ).replace("{{condition}}", condition);
        fquery += q;
      });
    }
  });

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
  // 生成 SELECT 子句
  let selectClause = `SELECT\n  ${queryModel.columns.map((c, index) => {
    let q
    if (c.queryName == null) {
      q = `${c.tableShortName}.${c.columnName}`
    } else {
      q = `${c.tableShortName}.${c.columnName} as ${c.queryName}`
    }
    let boolean = index == queryModel.columns.length - 1
    let temp = `${c.tableShortName}.${c.columnName}${boolean ? "" : ","}`
    let len = temp.length
    for (var i = 0; i < 35 - len; i++) {
      temp += " "
    }
    return `\n  ${temp}//${c.zhColumnName}`
  }).join("")}`;
  // 生成 FROM 子句
  const fromClause = `FROM\n  ${queryModel.tableName} as ${queryModel.tableShortName}`;

  // 生成 JOIN 子句
  const joinClauses = queryModel.joins.map(getJoinCallbackfn());

  // debugger


  // 生成 WHERE 子句
  const whereClauses = queryModel.conditions.map(getWhereCallback());
  const whereClause = whereClauses.length > 0 ? `WHERE 1=1\n${whereClauses.join("")}` : "";

  // 拼接 SQL 语句
  return `${selectClause}\n${fromClause}\n${joinClauses.join("\n")}\n${whereClause} NORULE;`;
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
      lj = `LEFT JOIN ${j.relationTable.name} as ${j.relationTable.shortName} `
      on = `ON ${j.relationTable.shortName}.${j.relationTable.idField} = ${j.tableShortName}.${j.columnName}`
    } else {
      lj = `LEFT JOIN ${j.relationTable.name} as ${j.relationTable.shortName} `
      on = `ON ${j.relationTable.name}.${j.columnName} = ${j.tableShortName}.${j.columnName}`
    }
    return lj.concat(on)
  };
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
    let whereTemplate = `// {{commit}}\n{#if {{if}}}\n  and {{condition}}\n{#endif}\n`;
    const generator = new ConditionGenerator(c);
    if (c.operator == Operator.Equal) {
      const juede = `!String.isBlank(IN.${c.tableName}.${c.columnName})`
      const condition = generator.generateWhereClause();
      whereTemplate = whereTemplate
        .replace("{{commit}}", `${c.zh_columnName}`)
        .replace("{{if}}", juede)
        .replace("{{condition}}", condition);
    } else if (c.operator === Operator.Like) {
      const juede = `!String.isBlank(IN.${c.tableName}.${c.columnName})`
      let whereClause = generator.generateWhereClause()
      whereTemplate = whereTemplate
        .replace('{{if}}', juede)
        .replace('{{condition}}', whereClause);
    } else if (c.operator === Operator.Between) {
      const isDate = DatePropertyCodes.indexOf(Number(c.propertytypecode)) !== -1
      const [lvalue, rvalue] = isDate ? ["begin", "end"] : ["min", "max"]

      const juede = `!String.isBlank(${lvalue}) && !String.isBlank(${rvalue})`
      let whereClause = generator.generateWhereClause()
      // console.log("c.propertytypecode", c.propertytypecode)
      whereTemplate = whereTemplate
        .replace('{{if}}', juede)
        .replace('{{condition}}', whereClause);
    }
    whereTemplate = whereTemplate
      .replace("{{commit}}", `${c.zh_columnName}`)
    return whereTemplate;
  };
}