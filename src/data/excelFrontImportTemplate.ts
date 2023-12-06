const head = `load('amap');//加载高德地图API
loadex("MapUtils");
load("importutils");

var errMsg = "";

var validateFail = false;

var excelDataList = []
var outDataList = [];
`


const main = `
excelImpSettingAndExecuteFunc()
for (var index = 0; index < excelDataList.length; index++) {
    // 行数据是否校验切 反查成功
    var rowDataFail = false
    var rowData = excelDataList[index];
    validation(rowData,index)
    reverseQuery(rowData,index)
    if (!rowDataFail){
        outDataList.push(rowData)
    }else{

    }
}

FLY.info("共" + excelDataList.length + "行" +"成功导入" + outDataList.length + "行")

OUT.{{boName}} = outDataList
OUT.errMsg = errMsg


`



export const ExcelImpSettingFunc = `function excelImpSettingAndExecuteFunc (){
    //标题列映射定义
    var titleMappings = {{titleMappings}}
    //设置标题映射
    EXCELIMP.setTitleMapping(titleMappings);
    //设置为前端导入模式
    EXCELIMP.setFrontImp(true);
    //批次号获取
    var dynamicid = EXCELIMP.dynamicid;
    EXCELIMP.setExcelRowDataHandle(excelRowDataHandle)
    //execute
    EXCELIMP.execute()
}

`

export const excelRowDataHandle = `function excelRowDataHandle (exceldata, customdata){
    //读取exceldata
    excelDataList.push(exceldata)
}

`



const validationFunc = `
/**
 * 校验 {{column}}-{{text}}
*/
function validation{{column}}(data,index) {
    if (String.isBlank(data)) {
        appendErrmsg("({{text}})：不能为空")
    }
    {{requiredCode}}
    if (validateFail) {
        throw new ERROR(errMsg);
    }
}

`

const callValidation = `
/**
 * 统一校验函数
 * @param {Object} rowData - {{rowDataDesc}}
 {{paramDocArray}}
*/
function validation(rowData,index) {
    {{callFunctions}}
    // if (validateFail) {
    //     throw new ERROR(errMsg);
    // }
}

`
export const paramDocTempalte = ` * @param {string} rowData.{{paramName}} - {{paramDesc}}`


const callReverseQuery = `
/**
 * 统一反查函数
 * @param {Object} rowData - {{rowDataDesc}}
 {{paramDocArray}}
*/
function reverseQuery(rowData,index) {
    {{callFunctions}}
    // if (validateFail) {
    //     throw new ERROR(errMsg);
    // }
}

`

const getDictIdByDicvalue = `/**
 * 根据字典值获取 {{dictTableName}} 的 dictionaryid
 * @param {string} dicvalue - 字典值
 * @returns {number} {{dictTableName}} 的 dictionaryid
*/
function get{{CamelTableName}}DictIdByDicvalue(dicvalue) {
    var temp = select dictionaryid from {{dictTableName}} where dicvalue = { dicvalue } NORULE;
    if (temp.length != 0) {
        return temp[0].dictionaryid
    }else{
        return dicvalue
        appendErrmsg("字典值({{dictTableZhName}})：" + dictivalue + "不存在；")
    }
}

`

const requiredCode = `if (String.isBlank({{data}})) {
        appendErrmsg("({{text}})：不能为空")
    }`


const getBusinessObjectIdByValue = `/**
 * 根据 {{columnName}} 获取 {{tableName}} 的 {{primaryKey}}
 * @param {string} - {{tableName}} 的 {{columnName}} 的值
 * @returns {number} {{tableName}} 的 {{primaryKey}}
*/
function get{{CamelTableName}}IdBy{{CamelColumnName}}({{columnName}},{{tableName}}_bo) {
    {{required}}
    var temp = select {{primaryKey}} from {{tableName}} where {{columnName}} = { {{columnName}} } NORULE;
    if (temp.length != 0) {
        return temp[0].dictionaryid
    }else{
        return {{columnName}}
        appendErrmsg("业务对象({{BusinessObjectTableZhName}})：" + value  + "不存在；")
    }
}

`

const getBusinessObjectIdByValueManual = `/**
 * 反查业务对象ID
*/
function getIdBy (columnName) {
    {{required}}
    var temp = select 


    if (temp.length != 0) {
        return temp[0].dictionaryid
    }else{
        return {{columnName}}
        appendErrmsg("业务对象({{BusinessObjectTableZhName}})：" + value  + "不存在；")
    }
}

`

const appendErrmsg = `
/**
* 将错误信息添加到全局错误消息中。
* @param {string} message - 要添加的错误消息。
*/
function appendErrmsg(message) {
    errMsg += message
    validateFail = true
}
`

const isInsertFunc = `
/**
 * 判断是否为插入操作
 * @returns {boolean}
 */
function isInsertFunc() {
    var isInsert = true
    // 自己写 嘿嘿
    return isInsert
}
`

const transferAddress = `
function transferAddressBy{{CamelCaseColumnName}}(addr,fieldName) {
    if (String.isBlank(addr)) {
        appendErrmsg(fieldName + "不为空")
    }
    var transferAddress = MAPUTIL.transferAddress(addr, true)
    if (transferAddress.latitude == null) {
        appendErrmsg("地址转换失败请重新输入")
    } else {
        return JSON.stringify(transferAddress);
    }
}
`




export const excelFrontImportTemplate = {
    head,
    main,
    ExcelImpSettingFunc,
    excelRowDataHandle,
    // xlsconf,
    // paramobj,
    // dataBind,
    validationFunc,
    callReverseQuery,
    getBusinessObjectIdByValue,
    getBusinessObjectIdByValueManual,
    getDictIdByDicvalue,
    callValidation,
    appendErrmsg,
    isInsertFunc,
    requiredCode,
    transferAddress,
    // createBo,
    // insert,
    // update

}
