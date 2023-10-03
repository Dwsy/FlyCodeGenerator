const head = `var errMsg = "";
var validateFail = false;
var s = select * from user;
var tableName = '';

`

const main = `(function main() {
    validation()
    if (validateFail) {
        throw new ERROR(errMsg);
    }

    if (isadd) {
        insert()
    } else {
        update()
    }


})()

`

const insert = `function insert(data) {
    var id = FLY.genId();
    DB.insert(tn_crm_dwy);
}

`

const update = `function update(data) {
    DB.update(tn_crm_dwy);
}

`

const validation = `function validation(data) {
  {{callFunctions}}
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


export const updateTemplet = {
    head,
    main,
    insert,
    update,
    validation,
    validateDictidExistFunc,
    validateBusinessObjectExistTemplet
}

interface UpdateTemplet {
    head: string
    main: string
    insert: string
    update: string
    validation: string
    validateDictidExistFunc: string
    validateBusinessObjectExistTemplet: string
}