import { useMessage } from "naive-ui";
import { updateTemplet } from "../../data/updateFlycodeTemplet";
import { PropertyTypeCode } from "../../type/model/propertyTypeCodeRef";
import { toCamelCase } from "../../util";
import { useFlyStore } from "../../store/flyStore";
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
    private message

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

    setErrMsg(errMsg: string = `errMsg`) {
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


    getCallFunctionName(tableName) {
        return `validate${toCamelCase(this.propertyName)}(IN.${tableName}.${this.propertyName})`
    }

    build(): string {
        let code = `function validate${toCamelCase(this.propertyName)}(${this.propertyName}) {
    var validationFailed = false
    {{RequiredVerification}}
    {{ValidateDictidExist}}
    {{ValidateBusinessObjectExist}}
${this.validateLogic}
    if (validationFailed) {
        appendErrmsg("${this.errMsg}；");
    }
}
`



        if (this.required) {
            code = code.replace("{{RequiredVerification}}", `if (!String.isBlank(${this.propertyName})) {
        appendErrmsg("${this.propertyZhName}不能为空；")
        validationFailed = true
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
                return ""
            }
            const validateBusinessObjectExistCode =
                updateTemplet.validateBusinessObjectExistTemplet
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