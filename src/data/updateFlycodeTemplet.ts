const head = `var errMsg = "";
var validateFail = false;
var s = select * from user;
var tableName = '';

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

const insert = `function insert() {
    var id = FLY.genId();
    var {{tableName}} = BO.new('{{tableName}}');
    tableName.{{primaryKey}} = id;
    {{CustomInsertCode}}
    DB.insert({{tableName}});
}

`

const update = `function update() {
    var temp = select * from {{tableName}} where {{primaryKey}} = { IN.{{tableName}}.{{primaryKey}} }
    if (temp.length == 0){
        throw new ERROR("待更新数据不存在")
    }
    var {{tableName}} = temp[0]
    {{CustomUpdateCode}}
    DB.update({{tableName}});
}

`

const validation = `function validation() {
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
    var temp = select count(*)
    from pl_dictionary where dictionaryid = { dictionaryid };
    if (temp[0].count == 1) {
        appenErrmsg("字典" + dictName + "不存在；")
    }
}

`

const validateBusinessObjectExistTemplet = `\n    var temp = select count(*) from {{tableName}} where {{primaryKey}} = {{businessObjectId}};
    if (temp[0].count == 1) {
        appenErrmsg("业务对象" + {{objectZhName}} + "不存在；")
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
    if (!String.isBlank(IN.{{tableName}}.{{primaryKey}})) {
        isInsert = true
    }
    return isInsert
}
`


export const updateTemplet = {
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
