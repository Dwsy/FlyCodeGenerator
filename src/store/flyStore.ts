import { defineStore } from "pinia"
import { computed, nextTick, ref, watch, watchEffect } from "vue"
import { getBizObjectsData, getProtocol } from "../dataRequest"
import { Output, Protocol } from "../type/protocol"
import { ActionType } from "../type/actionType";
import { GeneratorName } from "../components";
import { RefreshExtraLib } from "../flycodeDts";
import { GM_getValue } from "$";
import { monacoInitializedUtil } from "../util/monacoUtil";
import { getPropertyTypeName } from "../type/model/propertyTypeCodeRef";
import { useGenStore } from "./genStore";
import { el, tr } from "date-fns/locale";

export const useFlyStore = defineStore('flyStore', () => {

    const codeGeneratorInitStatus = ref(false)
    const appMounted = ref(false)
    const ActiveGenerator = ref()
    const protocol = ref<Protocol>()
    const tableDatas = ref<tableData[]>()
    const tableDataMap = ref(new Map<string, tableData>);
    const tableNameDataMap = ref(new Map<string, tableData>);
    const dictNameDataMap = ref(new Map<string, tableData>);
    const columnDataMap = ref(new Map<string, columnData>);




    // const addDtsEnable = true
    // const codeGeneratorEnable = false
    const addDtsEnable = GM_getValue("addDtsEnable", false)
    const codeGeneratorEnable = GM_getValue("codeGeneratorEnable", false)


    async function init() {
        tableDatas.value = (await getBizObjectsData())?.resp_data

        // 遍历 tableDatas 数组
        tableDatas.value.forEach((data) => {
            // 将 data 对象添加到 tableDataMap 中
            tableDataMap.value.set(data.objectcode, data);
            tableNameDataMap.value.set(data.tablename, data);
            if (data.tablename == "pl_dictionary") {
                dictNameDataMap.value.set(data.objectmark, data);
            }
            // 遍历 data.properties 数组
            data.properties.forEach((columnData) => {
                // 将 columnData 对象添加到 columnDataMap 中
                // if (columnData.propertycode = '1727161236526862417') {
                //     debugger
                // }
                if (undefined != columnDataMap.value.get(columnData.propertycode)) {
                    if (data.tablename.startsWith("xxw")) {

                        console.log("存在重复columnData.propertycode", columnDataMap.value.get(columnData.propertycode))
                        console.log("存在重复columnData.propertycode", columnData.propertycode, data.tablename, data.objectname, columnData.columnname)

                    }

                }
                columnDataMap.value.set(columnData.propertycode, columnData);
                // if (columnData.propertycode == "1729296870011978034") {

                //     debugger
                // }
            });
        });

        if (document.URL.indexOf("modeledit") != -1 && document.URL.split("/").length == 6) {
            return await updateProtocol(0)
        }
        return 0
    }
    watch(protocol, async () => {
        // debugger
        if (protocol.value == null) {


        } else {
            console.log(` watchcprotocol`, protocol.value, appMounted.value, codeGeneratorInitStatus.value)
            if (appMounted.value) {
                console.log("re codeGeneratorInitStatus.value")
                codeGeneratorInitStatus.value = false
                await nextTick()
                refresh()
                codeGeneratorInitStatus.value = true
            } else {
                refresh()
            }
        }

    })
    function checkSaveProtocol() {
        // 监听元素的点击事件
        const button = document.querySelector('#beSetting > div.main-content > div.tab-footer > button.ant-btn.ant-btn-primary')
        button.addEventListener('click', async () => {
            console.log('updateProtocol')
            await updateProtocol(1)
        })
        // 监听 Ctrl + S 键盘事件
        document.addEventListener('keydown', async (event) => {
            if (event.ctrlKey && event.key === 's') {
                console.log('updateProtocol')
                await updateProtocol(1)
                event.preventDefault()
            }
        })
    }
    async function updateProtocol(Timeout = 1000) {
        const _ = async () => {
            const r = (await getProtocol())
            if (!r) {
                protocol.value = null
                console.log("可能为新增领域 等待下一次保存操作");
                // checkSaveProtocol()
                return false
            }
            protocol.value = r.resp_data

            if (addDtsEnable) {
                const genStore = useGenStore()
                genStore.tempBoNewDtsList = []
                console.log("updateProtocol");
                monacoInitializedUtil.addInitializedCallback(
                    () => RefreshExtraLib()
                )
            }
            return true
        }
        if (Timeout == 0) {

            return _()
        } else {
            setTimeout(_, Timeout);
        }
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
        // debugger
        if (Import && protocol.value.modellogicname.includes("前端导入")) {
            ActiveGenerator.value = GeneratorName.ExcelFrontImport
        }

    }



    return {
        // data
        protocol,
        tableDatas,
        columnDataMap,
        tableDataMap,
        tableNameDataMap,
        dictNameDataMap,
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

