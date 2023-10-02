<template>
    <n-modal v-model:show="showModal" preset="card" title="Flycode生成配置" style="width: 700px" :bordered="false">
        <n-card>
            <n-tabs type="line" animated size="large">
                <n-tab-pane name="oasis" tab="Oasis">
                    Wonderwall
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
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { addButton, toCamelCase } from "../../util";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode } from "../../type/model/propertyTypeCodeRef";
const flyStore = useFlyStore()
const showModal = ref(false)
onMounted(() => {
    console.log("updateGenerator");
    addButton(null, "生成Flycode", "ideicon-share", () => {
        // showModal.value = false
        // showModal.value = true
        test()
        console.log("生成Flycode");
    }, 1)
})

// const validateTemplet =
//     `function validate{{propertyName}}({{inputArg}}) {
//     if ({{inputArg}} == null || {{inputArg}} == "") {
//     appendErrmsg("{{propertyName}}不能为空；")
//     return
//     }
//     {{validateLogic}}
//     appendErrmsg("{{errMsg}}；")
// }`

class ValidateBuilder {
    private propertyZhName: string;
    private propertyName: string;
    private inputArg: string;
    private validateLogic: string;
    private errMsg: string;

    constructor(propertyName?: string) {
        if (propertyName != undefined) {
            this.propertyName = propertyName;
        }
    }

    setPropertyZhName(propertyZhName: string): ValidateBuilder {
        this.propertyZhName = propertyZhName;
        return this;
    }

    setPropertyName(propertyName: string): ValidateBuilder {
        this.propertyName = propertyName;
        return this;
    }


    setValidateLogic(validateLogic: string = `  /* ValidateLogicCode */`): ValidateBuilder {
        this.validateLogic = validateLogic
        return this;
    }

    setErrMsg(errMsg: string = `errMsg`): ValidateBuilder {
        this.errMsg = errMsg
        return this;
    }

    build(): string {
        return `function validate${toCamelCase(this.propertyName)}(${this.propertyName}){
    var validationFailed = false
    if(!String.isBlank(${this.propertyName})){
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


function test() {
    const input = flyStore.protocol.input
    const tableName = flyStore.protocol.input[0].name
    let validateFunctions: string[] = new Array()
    const validateLogic = new ValidateBuilder()
    input.forEach((item) => {
        item.properties.forEach((property) => {
            // console.log(flyStore.columnDataMap.get(property.propertycode));
            let validateFunction: string
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
                console.log(validateFunction);
            }

        })

    })
}
</script>