import { useMessage } from "naive-ui";
import { updateTemplate } from "../../data/updateFlycodeTemplet";
import { PropertyTypeCode, getRandomEmojiByUnicode } from "../../type/model/propertyTypeCodeRef";
import { getPrimaryKey, getTableShortName, toCamelCase } from "../../util";
import { useFlyStore } from "../../store/flyStore";
import { Input } from "../../type/protocol";
import { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";



/**
 * ValidateBuilder 类用于构建验证逻辑。
 * 
 * @property {string} propertyZhName - 属性的中文名称。
 * @property {string} propertyName - 属性的名称。
 * @property {string} propertyTypeCode - 属性的类型代码。
 * @property {string} propertyCode - 属性的代码。
 * @property {string} validateLogic - 验证逻辑。
 * @property {string} errMsg - 错误消息。
 * @property {boolean} required - 属性是否必需。
 * @property {boolean} validateBusinessObjectExist - 是否验证业务对象存在。
 * @property {boolean} validateDictidExist - 是否验证字典ID存在。
 * @property {string[]} businessPropertyTypeCodes - 业务属性类型代码数组。
 * @property {string} primaryKey - 主键。
 * @property {string} tableName - 表名。
 * @property {MessageApiInjection} message - 消息API注入。
 */
export class ValidateBuilder {
    private propertyZhName: string;
    private propertyName: string;
    private propertyTypeCode: string;
    private propertyCode: string;
    private validateLogic: string;
    private errMsg: string;
    private required: boolean
    private validateBusinessObjectExist: boolean
    private validateDictidExist: boolean
    public businessPropertyTypeCodes = [PropertyTypeCode.BusinessObject, PropertyTypeCode.CreatedBy, PropertyTypeCode.ModifiedBy]
    private primaryKey: string;
    private tableName: string;
    private message: MessageApiInjection;

    constructor(propertyName?: string) {
        if (propertyName != undefined) {
            this.propertyName = propertyName;
        }
        this.message = useMessage()
    }

    setPropertyZhName(propertyZhName: string) {
        this.propertyZhName = propertyZhName;
        return this;
    }

    setPropertyName(propertyName: string) {
        this.propertyName = propertyName;
        return this;
    }
    setPropertyTypeCode(propertyTypeCode: string) {
        this.propertyTypeCode = propertyTypeCode;
        return this;
    }
    setPropertyCode(propertyCode: string) {
        this.propertyCode = propertyCode;
        return this;
    }


    setValidateLogic(validateLogic: string = `\n    /* Write your ValidateLogicCode */\n`) {
        this.validateLogic = validateLogic
        return this;
    }

    setErrMsg(errMsg: string) {
        this.errMsg = errMsg
        return this;
    }

    setRequired(required: boolean = false) {
        this.required = required
        return this
    }
    setDictidExistValidate(validateDictidExist: boolean = false) {
        this.validateDictidExist = validateDictidExist
        return this
    }
    setBusinessObjectExistValidate(validateBusinessObjectExist: boolean = false) {
        this.validateBusinessObjectExist = validateBusinessObjectExist
        return this
    }

    setPrimaryKey(primaryKey: string) {
        this.primaryKey = primaryKey
        return this
    }

    setTableName(tableName: string) {
        this.tableName = tableName
        return this
    }

    private setPrimaryKeyAndTableName() {
        const flyStore = useFlyStore()
        const columnData = flyStore.columnDataMap.get(this.propertyCode)
        if (!columnData.relationobjectcode) {
            this.message.error(`未设置${this.propertyZhName}的关联对象`)
        }
        const tableData = flyStore.tableDataMap.get(columnData.relationobjectcode)

        this.tableName = tableData.tablename
        this.primaryKey = {
            pl_dictionary: "dictionaryid",
            pl_orgstruct: "orgstructid",
            pl_region: "regionid",
        }[tableData.tablename]
        if (!this.primaryKey) {
            for (const columnData of tableData.properties) {
                if (columnData.propertytypecode == "1") {
                    this.primaryKey = columnData.columnname;
                    break;
                }
            }
        }
    }


    getCallFunctionName(tableName: string, tableShortName: string) {
        return `validate${toCamelCase(this.propertyName)}(${tableShortName}.${this.propertyName})`
    }

    build(): string {
        let jsdoc = `/**
* 校验${this.propertyZhName}函数
*/
`
        let code = jsdoc + `function validate${toCamelCase(this.propertyName)}(${this.propertyName}) {
    var validationFailed = false
    var validateErrMsg = ${this.errMsg ? this.errMsg : `"校验${this.propertyZhName}失败"`}
    {{RequiredVerification}}
    {{ValidateDictidExist}}
    {{ValidateBusinessObjectExist}}
${this.validateLogic}
    if (validationFailed) {
        appendErrmsg(validateErrMsg);
    }
}
`



        if (this.required) {
            code = code.replace("{{RequiredVerification}}", `if (String.isBlank(${this.propertyName})) {
        appendErrmsg("${this.propertyZhName}不能为空；")
    }
`)
        } else {
            code = code.replace(/{{RequiredVerification}}\n?/, ``)

        }

        if (this.validateDictidExist && Number(this.propertyTypeCode) == PropertyTypeCode.DictionaryObject) {
            code = code.replace("{{ValidateDictidExist}}", `validateDictidExist(${this.propertyName},"${this.propertyZhName}")`)
        } else {
            code = code.replace(/\s*{{ValidateDictidExist}}\n?/, ``)
        }

        if (this.validateBusinessObjectExist && this.businessPropertyTypeCodes.indexOf(Number(this.propertyTypeCode)) != -1) {

            this.setPrimaryKeyAndTableName()
            if (!this.primaryKey) {
                this.message.error("未设置主键")
                return ``
            }
            const validateBusinessObjectExistCode =
                updateTemplate.validateBusinessObjectExistTemplet
                    .replace("{{tableName}}", this.tableName)
                    .replace("{{primaryKey}}", this.primaryKey)
                    .replace("{{businessObjectId}}", this.propertyName)
                    .replace("{{objectZhName}}", `"${this.propertyZhName}:" + ${this.propertyName}`)

            code = code.replace("{{ValidateBusinessObjectExist}}", validateBusinessObjectExistCode)

        } else {
            code = code.replace(/\s*{{ValidateBusinessObjectExist}}\n?/, ``);
        }
        return code
    }
}



/**
 * 生成代码的函数
 * @param {boolean} enableValidateDictId - 是否启用字典ID验证，默认为false
 * @param {boolean} enableValidateBusinessObjectId - 是否启用业务对象ID验证，默认为false
 * @returns {string} 返回生成的代码
 * 
 * 此函数主要用于生成代码，包括插入和更新功能。它首先从flyStore获取输入，然后根据输入的属性生成验证函数。
 * 如果属性有验证逻辑，它会根据属性类型生成相应的验证函数，并将其添加到验证函数列表中。
 * 然后，它会生成调用验证函数的代码，并替换模板中的占位符。
 * 最后，它会生成插入和更新函数的代码，并替换模板中的占位符。
 * 最后，它将所有生成的代码片段连接在一起，返回最终的代码。
 */
export function generatorCode(enableValidateDictId: boolean = false, enableValidateBusinessObjectId: boolean = false): string {
    const flyStore = useFlyStore()
    const input: Input[] = flyStore.protocol.input
    let validateFunctions: string[] = new Array()
    let validateFunctionNames: string[] = new Array()
    const validateLogic = new ValidateBuilder()
    const tableName = input[0].name
    const INTableShort = getTableShortName(tableName)
    input.forEach((item) => {
        item.properties.forEach((property) => {
            // console.log(flyStore.columnDataMap.get(property.propertycode));
            let validateFunction: string
            if (property.validation) {
                if (Number(property.propertytypecode) === PropertyTypeCode.PhoneNumber) {
                    validateFunction = validateLogic
                        .setPropertyName(property.name)
                        .setPropertyZhName(property.propertyname)
                        .setValidateLogic(validatePhoneSnippet)
                        .setErrMsg(`联系电话格式有误`)
                        .build();
                    validateFunctions.push(validateFunction)
                    console.log(validateFunction);
                } else {
                    validateFunction = validateLogic
                        .setPropertyName(property.name)
                        .setPropertyZhName(property.propertyname)
                        .setPropertyTypeCode(property.propertytypecode)
                        .setDictidExistValidate(enableValidateDictId)
                        .setBusinessObjectExistValidate(enableValidateBusinessObjectId)
                        .setPropertyCode(property.propertycode)
                        .setRequired(property.required)
                        .setValidateLogic()
                        .setErrMsg(null)
                        .build();
                    validateFunctions.push(validateFunction)
                    const callFunctionJsDoc = `// 校验${property.propertyname}\n    `
                    validateFunctionNames.push(callFunctionJsDoc + validateLogic.getCallFunctionName(item.name, INTableShort))
                    console.log(validateFunction);
                }
            }
        })
    })


    const callValidationFunctions = updateTemplate.validation
        .replace("{{renameInTable}}", `var ${INTableShort} = IN.${input[0].name}`)
        .replace("{{callFunctions}}", validateFunctionNames.join("\n    "))


    let insertFunc = updateTemplate.insert
    let updateFunc = updateTemplate.update

    const PrimaryKey = getPrimaryKey(input[0].objectcode)
    const CustomInsertCode = () => {

        return ''
    }
    insertFunc = insertFunc
        .replaceAll("{{tableName}}", tableName)
        .replaceAll("{{primaryKey}}", PrimaryKey)
        .replace("{{CustomInsertCode}}", CustomInsertCode())


    const CustomUpdateCode = () => {
        // const callFunctionJsDoc = `// ${property.propertyname}-${property.name}\n    `
        let replaceValueTemplet = `${tableName}.{{propertyName}} = ${INTableShort}.{{propertyName}}`
        const codeLens = new Array<string>()
        input[0].properties.forEach((property) => {
            const callFunctionJsDoc = `// ${property.propertyname}\n    `
            codeLens.push(callFunctionJsDoc + replaceValueTemplet.replaceAll("{{propertyName}}", property.name))
        })
        return codeLens.join(`\n    `)
    }

    updateFunc = updateFunc
        .replaceAll("{{renameInTable}}", `var ${INTableShort} = IN.${tableName}`)
        .replaceAll("{{tableName}}", tableName)
        .replaceAll("{{primaryKey}}", PrimaryKey)
        .replace("{{CustomUpdateCode}}", CustomUpdateCode())

    const code = updateTemplate.head
        .concat(updateTemplate.main)
        .concat(updateTemplate.isInsertFunc
            .replace("{{tableName}}", tableName)
            .replace("{{primaryKey}}", PrimaryKey))
        .concat(insertFunc)
        .concat(updateFunc)
        .concat(callValidationFunctions)
        .concat(validateFunctions.join("\n"))
        .concat(updateTemplate.appendErrmsg)
        .concat(updateTemplate.validateDictidExistFunc)




    return code

}


const validatePhoneSnippet = `  var phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(phoneNumber)) { //联系电话正则校验
    validationFailed = true
  }`
