<template></template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFlyStore } from '../../store/flyStore';
import { addButton } from '../../util';


const flyStore = useFlyStore()
onMounted(() => {
    addButton(null, "生成API文档", "ideicon-share", () => {
        console.log("生成API文档");
    }, 2)
    console.log('mounted')
})


</script>

<style></style>