const head = `load('amap');//加载高德地图API
loadex("MapUtils");

var errMsg = "";

var validateFail = false;

`
const main = `(function main() {
    validation()

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

const validation = `function validation() {
    {{callFunctions}}
    if (validateFail) {
        throw new ERROR(errMsg);
    }
}

`

const validateDictValueExistFunc = `/**
* 根据字典值查询字典ID
* @param {number} dicvalue - 字典值
* @param {string} dictName - 字典名称
* @returns {void}
*/
function validateDictidExist(dicvalue, dictName) {
    var temp = select count(*) from pl_dictionary where dictionaryid = { dictionaryid } NORULE;
    if (temp[0].count == 0) {
        appendErrmsg(dictName + "字典值：" + dictivalue + "不存在；")
    }
}

`

const validateBusinessObjectExistTemplet = `\n    var temp = select count(*) from {{tableName}} where {{primaryKey}} = {{{businessObjectId}}} NORULE;;
    if (temp[0].count == 0) {
        appendErrmsg("业务对象" + {{objectZhName}} + "不存在；")
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


export const excelImportTemplet = {
    head,
    main,
    xlsconf,
    paramobj,
    dataBind,
    validation,
    validateDictidExistFunc,
    validateBusinessObjectExistTemplet,
    appendErrmsg,
    isInsertFunc
}
