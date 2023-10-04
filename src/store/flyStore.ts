import { defineStore } from "pinia"
import { computed, nextTick, ref, watch, watchEffect } from "vue"
import { getBizObjectsData, getProtocol } from "../dataRequest"
import { Protocol } from "../type/protocol"
import { ActionType } from "../type/actionType";

export const useFlyStore = defineStore('flyStore', () => {
    const tableDatas = ref<tableData[]>()
    const protocol = ref<Protocol>()
    const tableDataMap = ref(new Map<string, tableData>);
    const columnDataMap = ref(new Map<string, columnData>);
    const initStatus = ref(false)
    const appMounted = ref(false)
    const ActiveGenerator = ref()

    async function init() {
        tableDatas.value = (await getBizObjectsData())?.resp_data
        if (document.URL.indexOf("modeledit") != -1 && document.URL.split("/").length == 6) {
            protocol.value = (await getProtocol()).resp_data
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
        console.log(` watch(protocol, () => {`, protocol.value, appMounted.value, initStatus.value)
        if (appMounted.value) {
            console.log("if (appMounted.value) {")
            initStatus.value = false
            await nextTick()
            refresh()
            initStatus.value = true
        } else {
            refresh()
        }
    })
    async function updateProtocol(Timeout = 1000) {
        setTimeout(async () => {
            protocol.value = (await getProtocol()).resp_data
        }, Timeout);
    }



    const refresh = () => {
        const actionType = protocol.value.actiontype
        if (actionType == ActionType.ListQuery || actionType == ActionType.SingleQuery) {
            ActiveGenerator.value = "queryGenerator"
            console.log(`ActiveGenerator.value = "queryGenerator"`);

        } else if (actionType == ActionType.DataSubmit) {
            ActiveGenerator.value = "dataSubmitGenerator"
            console.log(`ActiveGenerator.value = "dataSubmitGenerator"`);
        }
    }


    return {
        tableDatas, appMounted, ActiveGenerator,
        protocol, tableDataMap, columnDataMap,
        init,
        updateProtocol,
        initStatus,
    }
})

