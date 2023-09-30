<template></template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getBizObjectsData, getProtocol } from '../dataRequest/index'
import { genQueryModel, init, updateProtocol } from '../queryGenerator/index';
import { generateSql } from '../type/model/queryModel';
let tableDatas: tableData[]
let protocol: protocol
let previousURL = window.location.href;

onMounted(async () => {
    console.log('vue--mounted');
    // getBizObjectsData
    tableDatas = (await getBizObjectsData()).resp_data
    protocol = (await getProtocol()).resp_data
    //init cache 
    init(tableDatas, protocol)
    const addGenQueryElementInterval = setInterval(() => {
        // @ts-ignore
        if (typeof window.monaco !== 'undefined') {
            addGenQueryElement()
            console.log("addGenQueryElement")
            clearInterval(addGenQueryElementInterval);
        }
    }, 1000)

    setInterval(checkURLChange, 1000);
    checkSaveProtocol()
})


// 定义一个函数，用于检测URL是否发生变化
async function checkURLChange() {
    // 获取当前URL
    const currentURL = window.location.href;

    // 检查当前URL与上次的URL是否相同
    if (currentURL !== previousURL && currentURL.indexOf("modeledit") != -1) {
        // URL发生变化，执行您的函数
        console.log("// URL发生变化，执行您的函数");

        protocol = (await getProtocol()).resp_data
        addGenQueryElement();
        // 更新previousURL以反映新的URL
        previousURL = currentURL;
    }
}
function checkSaveProtocol() {

    // 监听 Ctrl + S 键盘事件
    document.addEventListener("keydown", async (event) => {
        if (event.ctrlKey && event.key === "s") {
            console.log("Ctrl + S pressed");
            // 在这里执行保存操作
            updateProtocol((await getProtocol()).resp_data)
            event.preventDefault();
        }
    });

    // 监听元素的点击事件
    const button = document.querySelector("#beSetting > div.main-content > div.tab-footer > button.ant-btn.ant-btn-primary");
    button.addEventListener("click", async () => {
        updateProtocol((await getProtocol()).resp_data)
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
    const newButtonSpan =  document.createElement('span');
    newButtonSpan.textContent = "生成FQ"
    newButton.appendChild(newButtonIcon)
    newButton.appendChild(newButtonSpan)
    newButton.addEventListener("click", () => {
        // protocol.output.forEach((output) => {

        // });
        const fquery = generateSql(genQueryModel(protocol.output))

        // console.log("生成成功:", fquery);

        // 创建一个临时textarea元素以便执行复制操作
        const textarea = document.createElement("textarea");
        textarea.value = fquery;
        document.body.appendChild(textarea);

        // 选择并执行复制操作
        textarea.select();
        document.execCommand('copy');

        // 移除临时textarea元素
        document.body.removeChild(textarea);

        console.log("文本已成功复制到剪贴板");
    });
    originalButton!.parentNode!.appendChild(newButton);

}

</script>

<style></style>