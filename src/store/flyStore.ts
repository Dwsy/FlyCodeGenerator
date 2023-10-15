import { defineStore } from "pinia"
import { computed, nextTick, ref, watch, watchEffect } from "vue"
import { getBizObjectsData, getProtocol } from "../dataRequest"
import { Protocol } from "../type/protocol"
import { ActionType } from "../type/actionType";
import { GeneratorName } from "../components";
import { RefreshExtraLib } from "../flycodeDts";
import { GM_getValue } from "$";
import { monacoInitializedUtil } from "../util/monacoUtil";

export const useFlyStore = defineStore('flyStore', () => {

    const codeGeneratorInitStatus = ref(false)
    const appMounted = ref(false)
    const ActiveGenerator = ref()
    const protocol = ref<Protocol>()
    const tableDatas = ref<tableData[]>()
    const tableDataMap = ref(new Map<string, tableData>);
    const columnDataMap = ref(new Map<string, columnData>);




    const addDtsEnable = GM_getValue("addDtsEnable", false)
    const codeGeneratorEnable = GM_getValue("codeGeneratorEnable", false)


    async function init() {
        tableDatas.value = (await getBizObjectsData())?.resp_data
        if (document.URL.indexOf("modeledit") != -1 && document.URL.split("/").length == 6) {
            await updateProtocol(0)
        }

        // 遍历 tableDatas 数组
        tableDatas.value.forEach((data) => {
            // 将 data 对象添加到 tableDataMap 中
            tableDataMap.value.set(data.objectcode, data);
            // 遍历 data.properties 数组
            data.properties.forEach((columnData) => {
                // 将 columnData 对象添加到 columnDataMap 中
                columnDataMap.value.set(columnData.propertycode, columnData);
            });
        });


    }
    watch(protocol, async () => {
        console.log(` watchcprotocol`, protocol.value, appMounted.value, codeGeneratorInitStatus.value)
        if (appMounted.value) {
            console.log("if (appMounted.value) {")
            codeGeneratorInitStatus.value = false
            await nextTick()
            refresh()
            codeGeneratorInitStatus.value = true
        } else {
            refresh()
        }
    })
    async function updateProtocol(Timeout = 1000) {
        setTimeout(async () => {
            protocol.value = (await getProtocol()).resp_data
            if (addDtsEnable) {
                console.log("updateProtocol");
                monacoInitializedUtil.addInitializedCallback(
                    () => RefreshExtraLib()
                )
            }

        }, Timeout);
    }


    const insertOrUpdateNameArray = ["新增", "修改", "编辑", "创建", "更新", "添加", "保存"]
    const deletedDataNameArray = ["删除"]
    const refresh = () => {

        const actionType = protocol.value.actiontype
        const actioncategory = protocol.value.actioncategory
        const Import = actionType == ActionType.Import
        const Export = actionType == ActionType.Export
        if (actionType == ActionType.ListQuery || actionType == ActionType.SingleQuery) {
            ActiveGenerator.value = GeneratorName.queryGenerator
            console.log(`ActiveGenerator.value = "queryGenerator"`);

        } else if (actionType == ActionType.DataSubmit) {
            const modellogicname = protocol.value.modellogicname
            if (deletedDataNameArray.some((name) => modellogicname.includes(name))) {
                ActiveGenerator.value = GeneratorName.deletedGenerator

            } else if (insertOrUpdateNameArray.some((name) => modellogicname.includes(name))) {
                ActiveGenerator.value = GeneratorName.dataSubmitGenerator

            }

        } else if (actionType == ActionType.BatchSubmit) {
            // todo
        } else if (Import && actioncategory == "1") {//Excel导入
            ActiveGenerator.value = GeneratorName.ExcelImport
        } else if (Export && actioncategory == "1") {//Excel导出
            ActiveGenerator.value = GeneratorName.ExcelExport
        } else if (Import && actioncategory == "6") {//flycode导入
            ActiveGenerator.value = GeneratorName.flycodeImport
        } else if (Export && actioncategory == "7") {//flycode导出
            ActiveGenerator.value = GeneratorName.flycodeExport
        }
    }



    return {
        // data
        protocol,
        tableDatas,
        columnDataMap,
        tableDataMap,
        // data

        // status
        appMounted,
        ActiveGenerator,
        codeGeneratorInitStatus,
        // statis


        // fuc
        init,
        updateProtocol,

        // fuc

        //menu
        codeGeneratorEnable, addDtsEnable
        //menu
    }
})

