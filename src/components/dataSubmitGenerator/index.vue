<template>
    <div>
        <div id="code"></div>
        <n-modal v-model:show="showModal" preset="card" title="Flycode生成配置" style="width: 700px" :bordered="false">
            <n-card>
                <n-tabs type="line" animated size="large">
                    <n-tab-pane name="validation" tab="参数校验">
                        <div v-for="input in flyStore.protocol.input">
                            <NList :show-divider="true">
                                <NListItem>
                                    <div>
                                        <NCheckbox v-model:checked="SelectAllProperty" @update-checked="(value, e) => {
                                            SelectAllPropertyFunc(value)
                                        }">
                                            {{ !SelectAllProperty ? "全选" : "全不选" }}
                                        </NCheckbox>
                                        <NCheckbox style="float: right;" v-model:checked="SelectAllrequired"
                                            @update-checked="(value, e) => {
                                                SelectAllrequiredFunc(value)
                                            }">
                                            {{ !SelectAllrequired ? "全选" : "全不选" }}
                                        </NCheckbox>
                                    </div>
                                </NListItem>
                                <div v-for="(property, index) in input.properties">
                                    <NListItem style="padding: 8px 0;">
                                        <div>
                                            <n-switch class="validationSwitch" v-model:value="property.validation"
                                                size="large">
                                                <template #icon>
                                                    {{ property.validation ? getRandomEmoji(index)[1] :
                                                        getRandomEmoji(index)[0]
                                                    }}
                                                </template>
                                            </n-switch>
                                            <span style="margin-left: 8px;">
                                                {{ property.propertyname }} ({{ property.name }})-{{
                                                    getPropertyTypeName(property.propertytypecode) }}
                                                {{ getPropertyTypeEmoji(Number(property.propertytypecode)) }}
                                            </span>
                                            <n-checkbox v-model:checked="property.required" @update-checked="(value, e) => {
                                                requiredCheck(value, property)
                                            }" style="float: right">
                                                必填
                                            </n-checkbox>
                                        </div>
                                    </NListItem>
                                </div>

                            </NList>
                        </div>

                    </n-tab-pane>
                    <n-tab-pane name="validationConfig" tab="校验配置">
                        <div>
                            <NList>
                                <NListItem>
                                    <n-switch class="validationSwitch" v-model:value="enableValidateBusinessObjectId"
                                        size="large">
                                        <template #icon>
                                            {{ getRandomEmojiByUnicode() }}
                                        </template>
                                    </n-switch>
                                    <span style="margin-left: 8px;">
                                        启用业务对象存在校验
                                    </span>
                                </NListItem>
                                <NListItem>
                                    <n-switch class="validationSwitch" v-model:value="enableValidateDictId" size="large">
                                        <template #icon>
                                            {{ getRandomEmojiByUnicode() }}
                                        </template>
                                    </n-switch>
                                    <span style="margin-left: 8px;">
                                        启用字典存在校验
                                    </span>
                                </NListItem>
                            </NList>


                        </div>
                    </n-tab-pane>
                    <n-tab-pane name="L" tab="L">

                    </n-tab-pane>
                </n-tabs>
                <div style="float: right;margin-top: 15px;">

                    <NButton style="margin-right: 15px;" @click="previewCode()" tertiary type="info">预览代码</NButton>

                    <NButton @click="gen()" strong secondary type="primary">生成代码</NButton>
                </div>

            </n-card>
        </n-modal>
        <n-modal v-model:show="showCode" preset="card" title="Flycode" style="width: 700px" :bordered="false">

            <div class="flycode-d">
                <pre id="flyCode" data-lang="javascript" style="height: 690px">{{ flycode }}</pre>
            </div>


        </n-modal>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { addButton, toCamelCase } from "../../util";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode, getPropertyTypeName, ignorePropertyType } from "../../type/model/propertyTypeCodeRef";
import { codeDark, useMessage } from "naive-ui";
import { GM_setClipboard } from '$';
import { updateTemplet } from '../../data/updateFlycodeTemplet'
import { nextTick } from "vue";
import { watch } from "vue";
import { getPropertyTypeEmoji, getRandomEmojiByUnicode, getRandomEmoji } from "../../type/model/propertyTypeCodeRef";
import { Input, Property } from "../../type/protocol";
import { generatorCode } from "./index";
const flyStore = useFlyStore()
const showModal = ref(false)
const showCode = ref(false)
const flycode = ref('')
const message = useMessage()
const enableValidateDictId = ref(false)
const enableValidateBusinessObjectId = ref(false)
const SelectAllProperty = ref(false)
const SelectAllrequired = ref(false)
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






watch(showModal, async () => {

    await nextTick()
    document.querySelectorAll('.validationSwitch').forEach((el: HTMLButtonElement) => {
        el.addEventListener('mouseenter', () => {
            el.click();
        });
    });
});

function CodeGeneratorConfig() {

}

const gen = () => {
    generatorCode(enableValidateDictId.value, enableValidateBusinessObjectId.value)

    message.success("生成成功!" + getRandomEmojiByUnicode())
    showModal.value = false
}

const previewCode = async () => {
    showCode.value = true

    flycode.value = generatorCode()


    await nextTick()
    // @ts-ignore
    monaco.editor.colorizeElement(document.getElementById("flyCode"), {
        theme: "vs-dark",
        lineNumbers: "on",
    });


}

const requiredCheck = (value, property: Property) => {
    if (value && !property.validation) {
        property.validation = true
    }
}

const SelectAllPropertyFunc = (value: boolean) => {
    flyStore.protocol.input.forEach((input) => {
        input.properties.forEach((property) => {
            property.validation = value
        })
    })
}
const SelectAllrequiredFunc = (value: boolean) => {
    flyStore.protocol.input.forEach((input) => {
        input.properties.forEach((property) => {
            if (property.validation) {
                property.required = value
            }
        })
    })
}

</script>

<style>
.n-list-item__divider {
    background-color: #4e4e4e66 !important;
}

.flycode-d {

    height: 70%;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>