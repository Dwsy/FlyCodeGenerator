import { RowKey } from "naive-ui/es/data-table/src/interface";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode } from "../../type/model/propertyTypeCodeRef";
import { Operator } from "../../type/model/queryModel";
import { Property } from "../../type/protocol";
import { getPrimaryKey, jaroWinkler, levenshteinDistance, toCamelCase } from "../../util";
import { read } from "xlsx";
import { excelExportTemplate } from "../../data/excelExportTemplate";
import { excelImportTemplate } from "../../data/excelImportTemplate";
import { message } from "../../util/message";

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
    const templet = excelImportTemplate
    let code = templet.head;
    const tableName = flyStore.protocol?.input[0]?.name;
    if (!tableName) {
        message.error("请先配置输出协议");
        return;
    }
    code = code.concat(templet.main.replaceAll("{{boName}}", `${tableName}_bo`));



    let dataBind = templet.dataBind.replace(
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
    // debugger
    dataBind = dataBind.replace(
        "{{bindMap}}",
        JSON.stringify(bindMap(), null, 4)
    );
    code = code.concat(dataBind);
    code = code.concat(templet.xlsconf);
    code = code.concat(templet.paramobj);
    code = code.concat(templet.isInsertFunc);
    code = code.concat(templet.createBo
        .replace("{{setValueCode}}", `//todo`)
        .replaceAll("{{tableName}}", tableName));

    const getDictIdByDicvalueArray = [];
    const getBusinessObjectIdByValueArray = [];
    const callGetDictIdByDicvalueArray = [];
    const callGetBusinessObjectIdByValueArray = [];
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
            let getDictIdByDicvalue = templet.getDictIdByDicvalue;
            // if (pair.property.required) {
            //     const requiredDictCode = templet.requiredDictCode;
            //     getDictIdByDicvalue = getDictIdByDicvalue.replace(
            //         "{{required}}",
            //         requiredDictCode
            //     );
            // }
            getDictIdByDicvalue = getDictIdByDicvalue
                .replaceAll("{{CamelColumnName}}", toCamelCase(pair.reverseQueryField))
                .replaceAll("{{dictTableName}}", dictTableName)
                .replaceAll("{{tableName}}", tableName)
                .replaceAll("{{CamelTableName}}", toCamelCase(dictTableName))
                .replaceAll("{{dictTableZhName}}", pair.property.propertyname);
            let callFunc = `${tableName}_bo =\n        get${toCamelCase(dictTableName)}DictIdByDicvalue(IN.${tableName}.${pair.property.name})`
            callGetDictIdByDicvalueArray.push(callFunc)
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
                templet.getBusinessObjectIdByValue;

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
            let callFunc =
                `${flyStore.protocol?.input[0]?.name}_bo =\n        get${toCamelCase(tableName)}IdBy${toCamelCase(pair.reverseQueryField)}(IN.${tableName}.${pair.property.name})`
            callGetBusinessObjectIdByValueArray.push(callFunc)
        });

    const callReverseQueryFuncs = callGetDictIdByDicvalueArray.concat(callGetBusinessObjectIdByValueArray).join("\n    ")

    const callValidationFuncs = []
    const ValidationFuncs = []
    checkMapPair.forEach((pair) => {

        if (pair.property.required) {
            let callValidation = templet.validationFunc
                .replace("{{column}}", toCamelCase(pair.field))
                .replace("{{text}}", pair.property.propertyname)
            switch (PropertyTypeCode[pair.property.propertytypecode]) {
                case PropertyTypeCode.PrimaryKey:
                    break;
                case PropertyTypeCode.Name:
                    break;
                case PropertyTypeCode.Text:
                    break;
                case PropertyTypeCode.Memo:
                    break;
                case PropertyTypeCode.LongText:
                    break;
                case PropertyTypeCode.Integer:
                    break;
                case PropertyTypeCode.LongInteger:
                    break;
                case PropertyTypeCode.Decimal:
                    break;
                case PropertyTypeCode.DateTime:
                    break;
                case PropertyTypeCode.TimeRange:
                    break;
                case PropertyTypeCode.Date:
                    break;
                case PropertyTypeCode.Status:
                    break;
                case PropertyTypeCode.Image:
                    break;
                case PropertyTypeCode.Attachment:
                    break;
                case PropertyTypeCode.Location:
                    break;
                case PropertyTypeCode.OptionSet:
                    break;
                case PropertyTypeCode.RelatedObject:
                    break;
                case PropertyTypeCode.DictionaryObject:
                    break;
                case PropertyTypeCode.BusinessObject:
                    break;
                case PropertyTypeCode.ComplexRelatedObject:
                    break;
                case PropertyTypeCode.ThisObject:
                    break;
                case PropertyTypeCode.CreatedBy:
                    break;
                case PropertyTypeCode.ModifiedBy:
                    break;
                case PropertyTypeCode.CreatedTime:
                    break;
                case PropertyTypeCode.ModifiedTime:
                    break;
                case PropertyTypeCode.Pinyin:
                    break;
                case PropertyTypeCode.IsDefault:
                    break;
                case PropertyTypeCode.PhoneNumber:
                    break;
                case PropertyTypeCode.TelephoneNumber:
                    break;
                case PropertyTypeCode.Email:
                    break;
                case PropertyTypeCode.PostalCode:
                    break;
                case PropertyTypeCode.SortOrder:
                    break;
                default:
                    callValidation = callValidation.replace("{{requiredCode}}", ``)
            }
            callValidation = callValidation.replace("{{requiredCode}}", ``)
            ValidationFuncs.push(callValidation)
            callValidationFuncs.push(`validation${toCamelCase(pair.field)}(IN.${tableName}.${pair.field})`)
        }

    })


    checkMapPair
        .filter((pair) => {
            return (
                Number(pair.property.propertytypecode) ==
                PropertyTypeCode.Location
            );
        })
        .forEach((pair) => {
            const tableName = flyStore.protocol.input[0].name
            templet.transferAddress
                .replace("{{CamelCaseColumnName}}", toCamelCase(pair.reverseQueryField))

        })
    console.log(getDictIdByDicvalueArray);

    console.log(getBusinessObjectIdByValueArray);

    code = code.concat(templet.callValidation
        .replace("{{tableName}}", tableName)
        .replace("{{callFunctions}}", callValidationFuncs.join("\n    ")));


    code = code.concat(templet.callReverseQuery
        .replace("{{tableName}}", tableName)
        .replace("{{callFunctions}}", callReverseQueryFuncs));

    code = code.concat(ValidationFuncs.join("\n"));

    code = code.concat(getDictIdByDicvalueArray.join("\n"));
    code = code.concat(getBusinessObjectIdByValueArray.join("\n"));



    code = code.concat(templet.appendErrmsg);


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
            let tempLeven = jaroWinkler(property.propertyname, name);
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