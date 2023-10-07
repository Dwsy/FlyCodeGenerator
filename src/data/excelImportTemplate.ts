const head = `load('amap');//加载高德地图API
loadex("MapUtils");

var errMsg = "";

var validateFail = false;

`
const main = `(function main() {
    var bo = createBO()
    validation()
    reverseQuery(bo)

    var isInsert = isInsertFunc()



    if (isInsert) {
        insert()
    } else {
        update()
    }


})()

`

const xlsconf = `var _xlsconf = {
    //指定将从sheet页的第N行开始导入。注意：第0行为列名行
    "startindex": "1",
    // true表示顺序导入， false表示不顺序导入（默认）
    "isOrderExtract": "true"
};
`

const paramobj = `var _paramobj = {
    "_dupstrategy": "1" //重复行导入策略： 1：覆盖；2：追加；3：忽略
};
`

const dataBind = `var _bind_{{tableName}} = {{bindMap}}
`

const createBo = `
function createBO(isInsert){
    var {{tableName}} = BO.new("{{tableName}}")
    if (isInsert)
    {{setValueCode}}
    return BO
}`


const validationFunc = `function validation{{column}}(data) {
    if (String.isBlank(data)) {
        appendErrmsg("({{text}})：不能为空")
    }
    {{requiredCode}}
    if (validateFail) {
        throw new ERROR(errMsg);
    }
}

`

const callValidation = `function validation({{tableName}}_bo) {
    {{callFunctions}}
    if (validateFail) {
        throw new ERROR(errMsg);
    }
}

`


const callReverseQuery = `function reverseQuery({{tableName}}_bo) {
    {{callFunctions}}
    if (validateFail) {
        throw new ERROR(errMsg);
    }
}

`

const getDictIdByDicvalue = `/**
* 根据字典值获取 {{dictTableName}} 的 dictionaryid
* @param {string} dicvalue - 字典值
* @returns {number} {{dictTableName}} 的 dictionaryid
*/
function get{{CamelTableName}}DictIdByDicvalue(dicvalue,{{tableName}}_bo) {
    var temp = select dictionaryid from {{dictTableName}} where dicvalue = { dicvalue } NORULE;
    if (temp.length != 0) {
        return temp[0].dictionaryid
    }else{
        appendErrmsg("字典值({{dictTableZhName}})：" + dictivalue + "不存在；")
    }
}

`

const requiredCode = `if (String.isBlank(dicvalue)) {
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
    var isInsert = false
    if (String.isBlank(IN.{{tableName}}.{{primaryKey}})) {
        isInsert = true
    }
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


export const excelImportTemplet = {
    head,
    main,
    xlsconf,
    paramobj,
    dataBind,
    validationFunc,
    callReverseQuery,
    getBusinessObjectIdByValue,
    getDictIdByDicvalue,
    callValidation,
    appendErrmsg,
    isInsertFunc,
    requiredCode,
    transferAddress,

}
