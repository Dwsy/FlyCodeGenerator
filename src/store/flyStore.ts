import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { getBizObjectsData, getProtocol } from "../dataRequest"
import { Protocol } from "../type/protocol"
export const useFlyStore = defineStore('flyStore', () => {
    const tableDatas = ref<tableData[]>()
    const protocol = ref<Protocol>()
    const tableDataMap = ref(new Map<string, tableData>);
    const columnDataMap = ref(new Map<string, columnData>);
    async function init() {
        tableDatas.value = (await getBizObjectsData()).resp_data
        protocol.value = (await getProtocol()).resp_data
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

    async function updateProtocol(Timeout = 1000) {
        setTimeout(async () => {
            protocol.value = (await getProtocol()).resp_data
        }, Timeout);
    }

    return {
        tableDatas,
        protocol, tableDataMap, columnDataMap,
        init,
        updateProtocol
    }
})

