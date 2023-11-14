<template>
  <n-message-provider>
    <n-config-provider :theme="theme">

      <div v-if="flyStore.codeGeneratorInitStatus">
        <component :is="Generator[flyStore.ActiveGenerator]"></component>
      </div>
      <Ftheme></Ftheme>

    </n-config-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui'
import { Generator } from './components'
import Ftheme from './components/Theme/index.vue'
import { ref } from 'vue'
import type { GlobalTheme } from 'naive-ui'
import { useFlyStore } from './store/flyStore';

import { nextTick } from 'vue';
import { RefreshExtraLib } from './flycodeDts'
import { getMonacoModel, monacoInitializedUtil } from './util/monacoUtil'
import { GM_getValue } from '$';


const theme = ref<GlobalTheme | null>(darkTheme)
const flyStore = useFlyStore()


let previousURL = window.location.href;
onMounted(async () => {
  await flyStore.init()
  monacoInitializedUtil
    .addInitializedCallback(async () => {
      if (flyStore.addDtsEnable) {
        RefreshExtraLib()
      }
      if (flyStore.addDtsEnable || flyStore.codeGeneratorEnable) {
        checkURLChangeThenUpdateProtocol()
      }
      const c = setInterval(async () => {
        const button = document.querySelector("#beSetting > div.main-content > div.tab-operation > button:nth-child(2) > i")
        if (button != null) {
          if (flyStore.codeGeneratorEnable) {
            flyStore.codeGeneratorInitStatus = true
            await nextTick()
            flyStore.appMounted = true
            checkURLChangeThenUpdateProtocol()
            console.log("FlyCodeGenerator初始化.....", new Date())

          }
          // addButton(null, "Test", "ideicon-share", () => {
          //   console.log("test");
          //   getFqueryModel()
          // }, 1)
          // @ts-ignore
          window.getMonacoModel = getMonacoModel
          clearInterval(c)
        } else {
          console.log("wait...");
        }
      }, 1000)


    })




  // addButton(null, "生成API文档", "ideicon-share", () => {
  //   console.log("生成API文档");
  // }, 2)
})



// 定义一个函数，用于检测URL是否发生变化然后更新协议
function checkURLChangeThenUpdateProtocol() {
  const urlInterval = setInterval(() => {
    _()
  }, 1000)


  const _ = async () => {
    // 获取当前URL
    const currentURL = window.location.href;

    // 检查当前URL与上次的URL是否相同
    if (currentURL !== previousURL) {
      // URL发生变化，执行您的函数

      if (currentURL.indexOf("modeledit") != -1) {
        console.log("// URL发生变化，执行您的函数",
          "currentURL:", currentURL, "previousURL", previousURL);
        const temp = previousURL.split("/")
        const temp1 = currentURL.split("/")
        if (currentURL.indexOf("modeledit") != -1) {
          if (temp.length == temp1.length) {
            await flyStore.updateProtocol(500)
          } else {
            await flyStore.updateProtocol(100)
          }
        }
      }

      if (currentURL.indexOf("uiedit") != -1) {
        if (flyStore.addDtsEnable) {
          console.log("update uiflycode dts");
          monacoInitializedUtil.addInitializedCallback(
            () => RefreshExtraLib(true)
          )
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
