var errMsg = "";
var validateFail = false;

var tableName = '';

(function main() {
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


function insert(data) {
    var id = FLY.genId();
    DB.insert(tn_crm_dwy);
}

function update(data) {
    DB.update(tn_crm_dwy);
}

function validation(data) {

}



function validatePhoneNumber(phoneNumber) {
    var phoneReg = /^1[3456789]\d{9}$/;
    if (!phoneReg.test(phoneNumber)) { //联系电话正则校验
        appendErrmsg("联系电话格式有误；")
    }
}

/**
 * 将错误信息添加到全局错误消息中。
 * @param {string} message - 要添加的错误消息。
 */
function appendErrmsg(message) {
    errMsg += message
    validateFail = true
}


/**
 * 将字符串的首字母大写。
 * @param {string} str - 要转换的字符串。
 * @returns {string} 转换后的字符串。
 */
function capitalize(str) {
    if (!str) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// 对象属性判空
function move_nullkey(obj) {
    for (var key in obj) {
        if (obj[key] == null) {
            delete obj[key];
        }
    }
    return obj;
}