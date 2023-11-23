const head = `var errMsg = "";
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

const insert = `/**
* 插入函数
*/
function insert() {
    var id = FLY.genId();
    IN.{{tableName}}.{{primaryKey}} = id;
    {{CustomInsertCode}}
    DB.insert(IN.{{tableName}});
}

`

const update = `/**
* 更新验函数
*/
function update() {
    var temp = select * from {{tableName}} where {{primaryKey}} = { IN.{{tableName}}.{{primaryKey}} } NORULE;
    if (temp.length == 0){
        throw new ERROR("待更新数据不存在")
    }
    {{renameInTable}}
    var {{tableName}} = temp[0]
    {{CustomUpdateCode}}
    DB.update({{tableName}});
}

`

const validation = `/**
* 统一校验函数
*/
function validation() {
    {{renameInTable}}
    {{callFunctions}}
    if (validateFail) {
        throw new ERROR(errMsg);
    }
}

`

const validateDictidExistFunc = `/**
* 验证字典是否存在
* @param {number} dictionaryid - 字典 ID
* @param {string} dictName - 字典名称
* @returns {void}
*/
function validateDictidExist(dictionaryid, dictName) {
    var temp = select count(*) from pl_dictionary where dictionaryid = { dictionaryid } NORULE;
    if (temp[0].count == 0) {
        appendErrmsg("字典" + dictName + "不存在；")
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


export const updateTemplate = {
    head,
    main,
    insert,
    update,
    validation,
    isInsertFunc,
    appendErrmsg,
    validateDictidExistFunc,
    validateBusinessObjectExistTemplet
}
