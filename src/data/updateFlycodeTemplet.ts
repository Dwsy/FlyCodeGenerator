const head = `var errMsg = "";
var validateFail = false;

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

export const updateTemplet: UpdateTemplet = {
    head,
    main,
    insert,
    update,
    validation
}

interface UpdateTemplet {
    head: string;
    main: string;
    insert: string;
    update: string;
    validation: string;
}