import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { getBizObjectsData, getProtocol } from "../dataRequest"

export const useFlyStore = defineStore('flyStore', () => {
    const tableDatas = ref<tableData[]>()
    const protocol = ref<protocol>()

    async function init() {
        tableDatas.value = (await getBizObjectsData()).resp_data
        protocol.value = (await getProtocol()).resp_data
    }

    return { tableDatas, protocol, init }
})

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value++
    }

    return { count, doubleCount, increment }
})
