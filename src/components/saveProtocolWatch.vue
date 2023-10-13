<template></template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useFlyStore } from '../store/flyStore';
const flyStore = useFlyStore()
onMounted(() => {
    checkSaveProtocol()
})

function checkSaveProtocol() {
    // 监听元素的点击事件
    const button = document.querySelector("#beSetting > div.main-content > div.tab-footer > button.ant-btn.ant-btn-primary");
    button.addEventListener("click", async () => {
        console.log("updateProtocol")
        await flyStore.updateProtocol()
    });
    // 监听 Ctrl + S 键盘事件
    document.addEventListener("keydown", async (event) => {
        if (event.ctrlKey && event.key === "s") {
            console.log("updateProtocol")
            await flyStore.updateProtocol()
            event.preventDefault();
        }
    });
}

</script>