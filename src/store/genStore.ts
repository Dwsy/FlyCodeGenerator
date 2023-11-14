import { defineStore } from "pinia";
import { ref, watch } from "vue";


export const useGenStore = defineStore('genStore', () => {
    const tempBoNewDtsList = ref<Array<string>>()
    const pushTempBoNewDtsList = (boname) => {
        tempBoNewDtsList.value.push(boname)
    }
    const cleartempBoNewDtsList = () => {
        tempBoNewDtsList.value = []
    }
    watch(tempBoNewDtsList.value, () => {
        console.log(tempBoNewDtsList.value, "pushTempBoNewDtsList")
    })
    return {
        tempBoNewDtsList,
        pushTempBoNewDtsList,
        cleartempBoNewDtsList
    }
});