import { useMessage } from "naive-ui";
import { updateTemplate } from "../../data/updateFlycodeTemplet";
import { PropertyTypeCode, getRandomEmojiByUnicode } from "../../type/model/propertyTypeCodeRef";
import { getPrimaryKey, getTableShortName, toCamelCase } from "../../util";
import { useFlyStore } from "../../store/flyStore";
import { Input } from "../../type/protocol";
import { GM_setClipboard } from "$";
import { MessageApiInjection } from "naive-ui/es/message/src/MessageProvider";
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



export function generatorCode
    (enableValidateDictId = false, enableValidateBusinessObjectId = false) {
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
