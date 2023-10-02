<template>
  <n-message-provider>
    <n-config-provider :theme="theme">
      <div v-if="flyStore.initStatus">
        <component :is="Generator[flyStore.ActiveGenerator]"></component>
      </div>
    </n-config-provider>
  </n-message-provider>
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
const theme = ref<GlobalTheme | null>(darkTheme)
const flyStore = useFlyStore()

let previousURL = window.location.href;
onMounted(async () => {
  console.log('vue--mounted');
  await flyStore.init()
  const waitMonaco = setInterval(async () => {
    // @ts-ignore
    if (typeof window.monaco !== 'undefined') {
      const button = document.querySelector("#beSetting > div.main-content > div.tab-operation > button:nth-child(2) > i")
      if (button != null) {
        console.log(new Date(), "FlyCodeGenerator初始化.....")
        flyStore.initStatus = true
        flyStore.appMounted = true
        checkURLChangeThenUpdateProtocol()
        clearInterval(waitMonaco);
      }
    } else {
      console.log("等待。。。");

    }
  }, 1000)



})

// 定义一个函数，用于检测URL是否发生变化然后更新协议
function checkURLChangeThenUpdateProtocol() {
  const urlInterval = setInterval(() => {
    _()
  }, 1000)
  // document.querySelector("#app > div > div.content > div:nth-child(2) > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div > div:nth-child(1) > div > div > div").addEventListener("click", () => {
  //   console.log("click tab1")
  // })
  // document.querySelector("#app > div > div.content > div:nth-child(2) > div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar > div > div > div > div").addEventListener("click", () => {
  //   _()
  //   console.log("click tabe")
  // })

  const _ = async () => {
    // 获取当前URL
    const currentURL = window.location.href;

    // 检查当前URL与上次的URL是否相同
    if (currentURL !== previousURL && currentURL.indexOf("modeledit") != -1) {
      // URL发生变化，执行您的函数

      console.log("// URL发生变化，执行您的函数",
        "currentURL:", currentURL, "previousURL", previousURL);
      const temp = previousURL.split("/")
      const temp1 = currentURL.split("/")
      if (temp.indexOf("modeledit") != -1) {
        if (temp.length == temp1.length) {
          await flyStore.updateProtocol(0)
        } else {
          await flyStore.updateProtocol(0)
        }
      }


      // addGenQueryElement();
      // 更新previousURL以反映新的URL
      previousURL = currentURL;
    } else {
      previousURL = currentURL;
    }
  }
}


</script>
