<template>
    <div>
        <n-modal v-model:show="showModal" preset="card" title="Flycode生成配置" style="width: 700px" :bordered="false">
            <n-card>
                <n-tabs type="line" animated size="large">
                    <n-tab-pane name="validation" tab="参数校验">
                        <div v-for="input in flyStore.protocol.input">
                            <NList v-for="property in input.properties" :show-divider="true">
                                <NListItem style="padding: 8px 0;">
                                    <n-switch v-model:value="property.validation" size="large">
                                        <template #icon>
                                            {{ property.validation ? "😆" : "🤔" }}
                                        </template>
                                    </n-switch>
                                    <span style="margin-left: 8px;">
                                        {{ property.propertyname }} ({{ property.name }})-{{
                                            getPropertyTypeName(property.propertytypecode) }}
                                        {{ Number(property.propertytypecode) == PropertyTypeCode.PhoneNumber ? "📱" : "" }}
                                    </span>
                                </NListItem>
                            </NList>
                        </div>

                    </n-tab-pane>
                    <n-tab-pane name="the beatles" tab="the Beatles">
                        Hey Jude
                    </n-tab-pane>
                    <n-tab-pane name="jay chou" tab="周杰伦">
                        七里香
                    </n-tab-pane>
                </n-tabs>
                <div style="float: right;">
                    <NButton style="margin-right: 15px;">确定</NButton>
                    <NButton style="margin-right: 15px;" @click="test()">Test</NButton>
                    <NButton>取消</NButton>
                </div>

            </n-card>
        </n-modal>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { addButton, toCamelCase } from "../../util";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode, getPropertyTypeName, ignorePropertyType } from "../../type/model/propertyTypeCodeRef";
import { useMessage } from "naive-ui";
import { GM_setClipboard } from '$';
import { updateTemplet } from '../../data/updateFlycodeTemplet'
const flyStore = useFlyStore()
const showModal = ref(false)
const message = useMessage()
onMounted(() => {
    console.log("updateGenerator");
    console.log(updateTemplet.head)

    flyStore.protocol.input.forEach((input) => {
        input.properties.forEach((property) => {
            if (ignorePropertyType.indexOf(Number(property.propertytypecode)) == -1) {
                property.validation = true
            }

        })
    })
    addButton(null, "生成Flycode", "ideicon-share", () => {
        showModal.value = true
        console.log("生成Flycode");
    }, 1)
})

class ValidateBuilder {
    private propertyZhName: string;
    private propertyName: string;
    private validateLogic: string;
    private errMsg: string;

    constructor(propertyName?: string) {
        if (propertyName != undefined) {
            this.propertyName = propertyName;
        }
    }

    setPropertyZhName(propertyZhName: string) {
        this.propertyZhName = propertyZhName;
        return this;
    }

    setPropertyName(propertyName: string) {
        this.propertyName = propertyName;
        return this;
    }


    setValidateLogic(validateLogic: string = `    /* ValidateLogicCode */`) {
        this.validateLogic = validateLogic
        return this;
    }

    setErrMsg(errMsg: string = `errMsg`) {
        this.errMsg = errMsg
        return this;
    }

    getCallFunctionName(tableName) {
        return `validate${toCamelCase(this.propertyName)}(IN.${tableName}${this.propertyName})`
    }

    build(): string {
        return `function validate${toCamelCase(this.propertyName)}(${this.propertyName}) {
    var validationFailed = false
    if (!String.isBlank(${this.propertyName})){
      appendErrmsg("${this.propertyZhName}不能为空；")
    }
${this.validateLogic}
    if (validationFailed){
        appendErrmsg("${this.errMsg}；");
    }
}
`
    }
}



const validatePhoneSnippet = `  var phoneReg = /^1[3456789]\d{9}$/;
  if (!phoneReg.test(phoneNumber)) { //联系电话正则校验
    validationFailed = true
  }`


function CodeGeneratorConfig() {

}

function test() {
    const input = flyStore.protocol.input
    let validateFunctions: string[] = new Array()
    let validateFunctionNames: string[] = new Array()
    const validateLogic = new ValidateBuilder()
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
                        .setValidateLogic()
                        .setErrMsg()
                        .build();
                    validateFunctions.push(validateFunction)
                    validateFunctionNames.push(validateLogic.getCallFunctionName(item.name))
                    console.log(validateFunction);
                }
            }
        })
    })
    const callValidationFunctions = updateTemplet.validation.replace("{{callFunctions}}", validateFunctionNames.join("\n  "))
    const code = updateTemplet.head
        .concat(updateTemplet.main)
        .concat(updateTemplet.insert)
        .concat(updateTemplet.update)
        .concat(callValidationFunctions)
        .concat(validateFunctions.join("\n"))

    GM_setClipboard(code, "text")
    message.success("生成成功!")
}
</script>

<style>
.n-list-item__divider {
    background-color: #4e4e4e66 !important;
}
</style>