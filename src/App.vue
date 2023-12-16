<template>
  <n-message-provider>
    <n-config-provider :theme="theme">
      <div v-if="flyStore.codeGeneratorInitStatus">
        <SaveProtocolWatch></SaveProtocolWatch>
        <component :is="Generator[flyStore.ActiveGenerator]"></component>
      </div>
      <Theme></Theme>
      <MonacoEnhance></MonacoEnhance>
      <demo1></demo1>
      <!-- <demo2></demo2> -->
      <Otaku v-if="GM_getValue('szzrx', false)"></Otaku>
    </n-config-provider>
  </n-message-provider>
</template>

<script setup lang="tsx">
import { darkTheme, lightTheme, useMessage } from 'naive-ui'
import { Generator } from './components/index'
import type { GlobalTheme } from 'naive-ui'
import { useFlyStore } from './store/flyStore'
import { RefreshExtraLib } from './flycodeDts'
import { getMonacoModel, monacoInitializedUtil } from './util/monacoUtil'
import { getFqueryModel } from './flycodeDts/FQuery/test'
import { GM_getValue } from '$'

const theme = ref<GlobalTheme | null>(darkTheme)
const flyStore = useFlyStore()

let previousURL = window.location.href
let urlInterval: number | null = null

const themePrimaryColor = ref('#288eff')
themePrimaryColor.value = '#446a37'

onMounted(async () => {
  //@ts-ignore
  window.getFqueryModel = getFqueryModel
  localStorage.getItem('ide_theme') === 'light' ? (theme.value = lightTheme) : (theme.value = darkTheme)
  const r = await flyStore.init()
  // debugger
  monacoInitializedUtil.addInitializedCallback(init)
})

onBeforeUnmount(() => {
  if (urlInterval) {
    clearInterval(urlInterval)
  }
})

const init = async () => {
  if (flyStore.addDtsEnable) {
    RefreshExtraLib()
  }
  if (flyStore.addDtsEnable || flyStore.codeGeneratorEnable) {
    checkURLChangeThenUpdateProtocol()
  }
  // @ts-ignore
  window.getMonacoModel = getMonacoModel
  const c = setInterval(async () => {
    const button = document.querySelector('#beSetting > div.main-content > div.tab-operation > button:nth-child(2) > i')
    if (button != null) {
      if (flyStore.codeGeneratorEnable) {
        flyStore.codeGeneratorInitStatus = true
        await nextTick()
        flyStore.appMounted = true
        checkURLChangeThenUpdateProtocol()
        console.log('FlyCodeGenerator初始化.....', new Date())
      }

      clearInterval(c)
    } else {
      console.log('wait...')
    }
  }, 1000)
}
onMounted(async () => {})
function checkURLChangeThenUpdateProtocol() {
  // debugger
  if (urlInterval) {
    clearInterval(urlInterval)
  }
  urlInterval = setInterval(() => {
    _()
  }, 1000)

  const _ = async () => {
    // 获取当前URL
    const currentURL = window.location.href

    // 检查当前URL与上次的URL是否相同
    if (currentURL !== previousURL) {
      // URL发生变化，执行您的函数

      if (currentURL.indexOf('modeledit') != -1) {
        console.log('// URL发生变化，执行您的函数', 'currentURL:', currentURL, 'previousURL', previousURL)
        const temp = previousURL.split('/')
        const temp1 = currentURL.split('/')
        if (currentURL.indexOf('modeledit') != -1) {
          if (temp.length == temp1.length) {
            await flyStore.updateProtocol(500)
          } else {
            await flyStore.updateProtocol(100)
          }
        }
      }

      if (currentURL.indexOf('uiedit') != -1) {
        if (flyStore.addDtsEnable) {
          console.log('update uiflycode dts')
          monacoInitializedUtil.addInitializedCallback(() => RefreshExtraLib(true))
        }
      }
      // addGenQueryElement();
      // 更新previousURL以反映新的URL
      previousURL = currentURL
    } else {
      previousURL = currentURL
    }
  }
}
</script>

<style>
@keyframes fade {
  0% {
    opacity: 0.92;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}

body {
  animation: fade 2s;
}
</style>
