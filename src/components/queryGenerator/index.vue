<template>
    <p>queryGenerator</p>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { genQueryModel, generateSql, init } from './index';
import { useFlyStore } from '../../store/flyStore'
import { copyToClipboard } from '../../util';
// let tableDatas: tableData[]
// let protocol: protocol
let previousURL = window.location.href;
const flyStore = useFlyStore()
onMounted(async () => {
    console.log("queryGenerator mounted");
    
    init()
    addGenQueryElement()
    checkSaveProtocol()
})


function checkSaveProtocol() {
    // 监听元素的点击事件
    const button = document.querySelector("#beSetting > div.main-content > div.tab-footer > button.ant-btn.ant-btn-primary");
    button.addEventListener("click", async () => {
        console.log("click")
        await flyStore.updateProtocol()
    });
    // 监听 Ctrl + S 键盘事件
    document.addEventListener("keydown", async (event) => {
        if (event.ctrlKey && event.key === "s") {
            await flyStore.updateProtocol()
            event.preventDefault();
        }
    });


}

function addGenQueryElement() {
    if (document.querySelector("#beSetting > div.main-content > div.tab-operation > button:nth-child(3)") != null) {
        return
    }
    const originalButton: HTMLButtonElement = document.querySelector("#beSetting > div.main-content > div.tab-operation > button:nth-child(2)");
    const originalButtonIcon = originalButton.querySelector("i")
    const newButton = originalButton!.cloneNode(false);
    const newButtonIcon = originalButtonIcon!.cloneNode(true) as HTMLElement;
    newButtonIcon.classList.replace('ideicon-protocol', 'ideicon-db_flycode');
    const newButtonSpan = document.createElement('span');
    newButtonSpan.textContent = "生成FQ"
    newButton.appendChild(newButtonIcon)
    newButton.appendChild(newButtonSpan)
    newButton.addEventListener("click", () => {
        const fquery = generateSql(genQueryModel(flyStore.protocol.output))
        copyToClipboard(fquery)
        console.log("文本已成功复制到剪贴板");
    });
    originalButton!.parentNode!.appendChild(newButton);

}

</script>

<style></style>