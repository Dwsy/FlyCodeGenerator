<template>
  <n-config-provider :theme="theme">
    <n-btn></n-btn>
  </n-config-provider>
  <div v-if="inintStatus">
    <component :is="Generator[ActiveGenerator]"></component>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { darkTheme } from 'naive-ui'
import queryGenerator from './components/queryGenerator/index.vue'
import dataSubmitGenerator from './components/dataSubmitGenerator/index.vue'
import { ref, watchEffect, watch } from 'vue'
import type { GlobalTheme } from 'naive-ui'
import { useFlyStore } from './store/flyStore';
import { ActionType } from './type/actionType'
const Generator = {
  queryGenerator,
  dataSubmitGenerator
}
const ActiveGenerator = ref()
const theme = ref<GlobalTheme | null>(darkTheme)
const flyStore = useFlyStore()
const inintStatus = ref(false)
let previousURL = window.location.href;
onMounted(async () => {
  console.log('vue--mounted');
  await flyStore.init()
  const waitMonaco = setInterval(() => {
    // @ts-ignore
    if (typeof window.monaco !== 'undefined') {
      const button = document.querySelector("#beSetting > div.main-content > div.tab-footer > button.ant-btn.ant-btn-primary");
      if (button != undefined) {
        console.log(new Date(), "FlyCodeGenerator初始化.....")
        const actiontype = flyStore.protocol.actiontype
        if (actiontype == ActionType.ListQuery || actiontype == ActionType.SingleQuery) {
          ActiveGenerator.value = "queryGenerator"
          console.log(`ActiveGenerator.value = "queryGenerator"`);

        } else if (actiontype == ActionType.DataSubmit) {
          ActiveGenerator.value = "dataSubmitGenerator"
          console.log(`ActiveGenerator.value = "dataSubmitGenerator"`);

        }
        inintStatus.value = true
        clearInterval(waitMonaco);
      }
    }
  }, 1000)

  watchEffect(() => {
    console.log("Actiontype：", ActionType[flyStore.protocol.actiontype])
    const actiontype = flyStore.protocol.actiontype
    if (actiontype == ActionType.ListQuery || actiontype == ActionType.SingleQuery) {
      ActiveGenerator.value = "queryGenerator"
      console.log(`ActiveGenerator.value = "queryGenerator"`);

    } else if (actiontype == ActionType.DataSubmit) {
      ActiveGenerator.value = "dataSubmitGenerator"
      console.log(`ActiveGenerator.value = "dataSubmitGenerator"`);

    }
  })
  setInterval(checkURLChange, 1000);
})

// 定义一个函数，用于检测URL是否发生变化
async function checkURLChange() {
  // 获取当前URL
  const currentURL = window.location.href;

  // 检查当前URL与上次的URL是否相同
  if (currentURL !== previousURL && currentURL.indexOf("modeledit") != -1) {
    // URL发生变化，执行您的函数
    console.log("// URL发生变化，执行您的函数",
      "currentURL:", currentURL, "previousURL", previousURL);
    await flyStore.updateProtocol()

    // addGenQueryElement();
    // 更新previousURL以反映新的URL
    previousURL = currentURL;
  } else { previousURL = currentURL; }
}


</script>
