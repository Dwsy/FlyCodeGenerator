import { RowKey } from "naive-ui/es/data-table/src/interface";
import { excelImportTemplet } from "../../data/excelImportTemplet";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode } from "../../type/model/propertyTypeCodeRef";
import { Operator } from "../../type/model/queryModel";
import { Property } from "../../type/protocol";
import { getPrimaryKey, levenshteinDistance, toCamelCase } from "../../util";
import { read } from "xlsx";

type MapPair = {
    field: string;
    column: string;
    property: Property;
    remark: string;
    reverseQueryField?: string;
    queryOperator?: Operator;
};
export const generateCodeFunc = (mapPair: MapPair[], checkedRowKeys: RowKey[]) => {
    const flyStore = useFlyStore()
    let code = excelImportTemplet.head;

    code = code.concat(excelImportTemplet.main);
    code = code.concat(excelImportTemplet.xlsconf);
    code = code.concat(excelImportTemplet.paramobj);
    let dataBind = excelImportTemplet.dataBind.replace(
        "{{tableName}}",
        flyStore.protocol.input[0].name
    );
    const bindMap = () => {
        let temp = {};
        mapPair.forEach((mapPair) => {
            temp[`${mapPair.property.name}`] = mapPair.column;
        });
        return temp;
    };
    dataBind = dataBind.replace(
        "{{bindMap}}",
        JSON.stringify(bindMap(), null, 4)
    );

    const getDictIdByDicvalueArray = [];
    const getBusinessObjectIdByValueArray = [];
    const checkMapPair = mapPair
        .filter((pair) => {
            return pair.column != "---";
        })
        .filter((pair) => {
            return checkedRowKeys.includes(pair.property.propertycode);
        });
    checkMapPair
        .filter((pair) => {
            return (
                //todo 二次校验类型
                Number(pair.property.propertytypecode) ==
                PropertyTypeCode.DictionaryObject
            );
        })
        .forEach((pair) => {
            const dictTableName = flyStore.tableDataMap.get(
                flyStore.columnDataMap.get(pair.property.propertycode)
                    .relationobjectcode
            ).objectmark;
            let getDictIdByDicvalue = excelImportTemplet.getDictIdByDicvalue;
            if (pair.property.required) {
                const requiredDictCode = excelImportTemplet.requiredDictCode;
                getDictIdByDicvalue = getDictIdByDicvalue.replace(
                    "{{required}}",
                    requiredDictCode
                );
            }
            getDictIdByDicvalue = getDictIdByDicvalue
                .replaceAll("{{CamelColumnName}}", toCamelCase(pair.reverseQueryField))
                .replaceAll("{{dictTableName}}", dictTableName)
                .replaceAll("{{CamelTableName}}", toCamelCase(dictTableName))
                .replaceAll("{{dictTableZhName}}", pair.property.propertyname);

            getDictIdByDicvalueArray.push(getDictIdByDicvalue);
        });

    checkMapPair
        .filter((pair) => {
            return (
                Number(pair.property.propertytypecode) ==
                PropertyTypeCode.BusinessObject
            );
        })
        .forEach((pair) => {
            const columnData = flyStore.columnDataMap.get(pair.property.propertycode);
            const primaryKey = getPrimaryKey(columnData.relationobjectcode);
            const tableName = flyStore.tableDataMap.get(
                flyStore.columnDataMap.get(pair.property.propertycode)
                    .relationobjectcode
            ).objectmark;

            let getBusinessObjectIdByValue =
                excelImportTemplet.getBusinessObjectIdByValue;
            if (pair.property.required) {
                const requiredCode = excelImportTemplet.requiredBusinessObjectValueCode;
                getBusinessObjectIdByValue = getBusinessObjectIdByValue.replace(
                    "{{required}}",
                    requiredCode
                );
            }
            getBusinessObjectIdByValue = getBusinessObjectIdByValue
                .replaceAll("{{CamelTableName}}", toCamelCase(tableName))
                .replaceAll("{{CamelColumnName}}", toCamelCase(pair.reverseQueryField))
                .replaceAll("{{columnName}}", pair.reverseQueryField)
                .replaceAll("{{primaryKey}}", primaryKey)
                .replaceAll("{{tableName}}", tableName)
                .replaceAll(
                    "{{BusinessObjectTableZhName}}",
                    pair.property.propertyname
                );
            getBusinessObjectIdByValueArray.push(getBusinessObjectIdByValue);
        });
    console.log(getDictIdByDicvalueArray);

    console.log(getBusinessObjectIdByValueArray);

    code = code.concat(excelImportTemplet.callValidation);
    code = code.concat(getDictIdByDicvalueArray.join("\n"));
    code = code.concat(getBusinessObjectIdByValueArray.join("\n"));
    code = code.concat(excelImportTemplet.isInsertFunc);
    code = code.concat(excelImportTemplet.appendErrmsg);



    return code
};

export const autoMapFunc = (excelColumnName: string[], sheetLine: []) => {
    const flyStore = useFlyStore()
    const tempMapPair: MapPair[] = [];
    const temp = flyStore.protocol.input[0].properties;
    temp.forEach((property) => {
        if (property.propertycode == "") {
            return;
        }
        let minLeven = 9999999;
        const levenMap = new Map<number, string>();
        excelColumnName.forEach((name) => {
            let tempLeven = levenshteinDistance(property.propertyname, name);
            minLeven = Math.min(tempLeven, minLeven);
            levenMap.set(tempLeven, name);
        });
        let reverseQueryField = "---";
        let queryOperator = Operator.Equal;
        const columnData = flyStore.columnDataMap.get(property.propertycode);
        const relationobjectcode = columnData?.relationobjectcode;
        if (relationobjectcode && relationobjectcode != "") {
            const relationobject = flyStore.tableDataMap.get(relationobjectcode);
            // todo 自动反向查询 Reverse query field

            const tablename = relationobject.tablename;
            if (tablename == "pl_region") {
                reverseQueryField = "regionname";
            } else if (tablename == "pl_dictionary") {
                reverseQueryField = "dicvalue";
            } else if (tablename == "pl_orgstruct") {
                reverseQueryField = "orgname";
            } else {
                const getNameField = (relationObject) => {
                    const property = relationObject.properties.find((property) => {
                        return Number(property.propertytypecode) == PropertyTypeCode.Name;
                    });
                    if (property) {
                        return property.columnname;
                    } else {
                        return "没找到！！！";
                    }
                };
                getNameField(relationobject);
            }
        }
        // if (property.name.indexOf("__") !== -1) {
        //     const parts = property.name.split("__");
        //     if (parts.length === 2) {

        //     }
        // } else {

        // }

        const column = levenMap.get(minLeven);
        const remark = sheetLine[column];
        // 必填 todo
        if (remark.indexOf("必填") != -1 && remark.indexOf("非必填") == -1) {
            property.required = true;
        }
        tempMapPair.push({
            field: property.name,
            column,
            property,
            remark,
            reverseQueryField,
            queryOperator,
        });
    });

    const allSelect = tempMapPair.map((row) => row.property.propertycode);
    return {
        allSelect,
        tempMapPair
    }
    const SystemTable = ["pl_region", "pl_dictionary", "pl_orgstruct"];
    const input = flyStore.protocol.input[0];
    // input.properties.forEach((property: Property) => {

    // })
    // mapPair.value.forEach((mapPair) => {

    // })
};


/**
* 读取 Excel 文件
* @param {File} file - 要读取的 Excel 文件
*/
export function readExcelFileFunc(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event: any) => {
            const data = new Uint8Array(event.target.result);
            const workbook = read(data, { type: "array" });
            const sheetNames = workbook.SheetNames.map((sheetName) => {
                return { label: sheetName, value: sheetName };
            });
            resolve({
                sheetNames,
                Sheets: workbook.Sheets,

            })
            //   fileList.value = [];
            //todo 重复上传
        };

        reader.onerror = (event) => {
            reject(event.target.error);
        };

        reader.readAsArrayBuffer(file);
    });
}