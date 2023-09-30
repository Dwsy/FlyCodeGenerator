// 引入自定义模块中的 getTableShortName 方法
import { getTableShortName } from "../util/";
import { QueryModel, ColumnModel, RelationTableModel, JoinModel, ConditionModel, Operator, LikeMatchType, ConditionGenerator, generateSql }
  from "../type/model/queryModel"


let protocol: protocol
let tableDatas: tableData[];


const tableDataMap = new Map<string, tableData>();
const columnDataMap = new Map<string, columnData>();





// 定义 fquery 变量
let fquery = "select\n{{selectColumns}}"

export const init = (inTableDatas: tableData[], inProtocol: protocol) => {
  tableDatas = inTableDatas
  protocol = inProtocol

  console.log("tableDatas", tableDatas)
  console.log("functionname:", protocol.functionname);
  // 遍历 tableDatas 数组
  tableDatas.forEach((data) => {
    // 将 data 对象添加到 tableDataMap 中
    tableDataMap.set(data.objectcode, data);
    // 遍历 data.properties 数组
    data.properties.forEach((columnData) => {
      // 将 columnData 对象添加到 columnDataMap 中
      columnDataMap.set(columnData.propertycode, columnData);
    });
  });
}

export const updateProtocol = (newProtocol: protocol) => {
  protocol = newProtocol
}
export function genQueryModel(outputArray: Output[]): QueryModel {
  const queryArgumentArrayMap = new Map<string, string[]>();
  // 将 query 对象转换为 Map 对象
  protocol.input.forEach((input) => {
    const arg = input.properties.map(p => p.name)
    queryArgumentArrayMap.set(input.name, arg);
  })

  return gen(outputArray[0], queryArgumentArrayMap)
}


function gen(output: Output, queryArgumentArrayMap: Map<string, string[]>): QueryModel {
  const mainTableName = protocol.input[0].name;
  const columnModelArray = new Array<ColumnModel>()
  const conditionModelArray = new Array<ConditionModel>()
  const joinModelArray = new Array<JoinModel>()

  const queryModel: QueryModel = {
    tableName: mainTableName,
    tableShortName: getTableShortName(mainTableName),
    columns: columnModelArray,
    conditions: conditionModelArray,
    joins: joinModelArray
  }

  const relationTableShortNameMap = new Map<string, string>();
  const relationTableShortNameReverseMapReverse = new Map<string, string>();
  const relationTableColumnMap = new Map<string, string>();
  const needJoinRelationTableMap = new Map<string, tableData>();

  // 获取 output 对应的表格数据
  const outputTable = tableDataMap.get(output.objectcode);
  // 创建 relationTableMap 和 outPropertiesDataMap 两个 Map 对象

  // const outColumnNameArray = output.properties.map((data) => data.name)
  const outPropertiesDataMap = output.properties.map((data) => {
    const columnData = columnDataMap.get(data.propertycode);

    if (data.name.indexOf("__") !== -1) {
      const parts = data.name.split("__");
      if (parts.length === 2) {
        relationTableColumnMap.set(data.propertycode, data.name);
        needJoinRelationTableMap.set(parts[0], tableDataMap.get(data.objectcode))
        // needJoinColumnTableNameMap.set(data.propertycode, columnData.columnname)
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
    // console.log("relationTable", relationTable)
    // console.log("columnname", columnname)
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
    // 遍历 relationTable.properties 数组
    if (idField) {
      for (const columnData of relationTable.properties) {
        if (columnData.propertytypecode == "1") {
          idField = columnData.columnname;
          break; // 找到后提前结束循环
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


  // console.log("relationTableShortNameMap----", relationTableShortNameMap)
  // relationTableShortNameMap.forEach((relationTableShortName, columnname) => {

  // })
  console.log(relationTableShortNameReverseMapReverse)
  // 查询列
  let selectColumns = outPropertiesDataMap
    .map((data) => {
      // console.log("data", data)//todo
      const queryname = relationTableColumnMap.get(data.propertycode);
      // console.log("relationTableShortNameMap", relationTableShortNameMap.get(queryname))
      relationTableShortNameMap.get(queryname)
      if (queryname === undefined) {
        const columnModel: ColumnModel = {
          tableShortName: tableShortName,
          columnName: data.columnname,
        }
        columnModelArray.push(columnModel)
        return `  ${tableShortName}.${data.columnname}`;
      } else {
        const [relationTableName, relationColumnName] = queryname.split("__");
        console.log("queryname", queryname)
        const relationTableShortName = relationTableShortNameMap.get(relationTableName);
        const columnModel: ColumnModel = {
          tableShortName: relationTableShortName,
          columnName: relationColumnName,
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
  if (queryArgumentArrayMap?.size > 0) {
    fquery += "\n  where 1=1\n";
  }

  // 定义模板字符串
  const template = `{#if {{if}}}\n and {{condition}}\n{#endif}\n`;
  // 遍历 queryMap，将查询条件添加到 fquery 中
  queryArgumentArrayMap.forEach((queryArgNameArry, tableName) => {
    if (tableName === mainTableName) {
      queryArgNameArry.forEach((argName) => {
        // 先完成 = 操作
        const conditionModel: ConditionModel = {
          tableName: tableName,
          tableShortName: tableShortName,
          columnName: argName,
          operator: Operator.Equal,
          value: null,
          secondValue: null,
          like: null
        }
        conditionModelArray.push(conditionModel)
        const condition = `${tableShortName}.${argName} = { IN.${tableName}.${argName} }`;
        const q = template.replace(
          "{{if}}",
          `!String.isBlank(IN.${tableName}.${argName})`
        ).replace("{{condition}}", condition);
        fquery += q;
      });
    } else {
      queryArgNameArry.forEach((argName) => {
        const conditionModel: ConditionModel = {
          tableName: tableName,
          tableShortName: relationTableShortNameMap.get(tableName),
          columnName: argName,
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
  queryModel.conditions = conditionModelArray
  return queryModel
}