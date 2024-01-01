<template>
  <n-message-provider>
    <n-config-provider :theme="theme">
      <div v-if="flyStore.codeGeneratorInitStatus">
        <SaveProtocolWatch></SaveProtocolWatch>
        <component :is="Generator[flyStore.ActiveGenerator]"></component>
      </div>
      <Theme></Theme>
      <MonacoEnhance></MonacoEnhance>
      <MonacoProvider></MonacoProvider>

      <demo1></demo1>
      <demo3></demo3>
      <!-- <demo2></demo2> -->
      <Menu></Menu>
      <MacVideo v-if="macVideoEnbale"></MacVideo>
      <Otaku v-if="GM_getValue('szzrx', false)"></Otaku>

      <div v-if="!isBrowserMode">
        <Demo5></Demo5>
        <PrettierFormat></PrettierFormat>
      </div>
      {{ templateModules }}
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
import { GM_getValue } from './util'
import { applyCustomFlycode } from './components/MonacoEnhance/monaco.languages.conf'
import { useOptionsStore } from './store/OptionsStore'
const theme = ref<GlobalTheme | null>(darkTheme)
const flyStore = useFlyStore()
const optionsStore = useOptionsStore()

const templateModules = useSessionStorage('templateModules', null, {
  serializer: {
    read: (v) => {
      return JSON.parse(v)
    },
    write: (v) => {
      return JSON.stringify(v)
    }
  }
})

watch(templateModules.value, () => {
  console.log('templateModules', templateModules.value)
})
const macVideoEnbale = ref(false)
const isBrowserMode = ref(true)

let previousURL = window.location.href
let urlInterval: number | null = null

const themePrimaryColor = ref('#288eff')
themePrimaryColor.value = '#446a37'

onMounted(async () => {
  isBrowserMode.value = GM_getValue('isBrowserMode', false)
  macVideoEnbale.value = GM_getValue('macVideoEnbale', false)
  //@ts-ignore
  window.getFqueryModel = getFqueryModel
  localStorage.getItem('ide_theme') === 'light' ? (theme.value = lightTheme) : (theme.value = darkTheme)
  const r = await flyStore.init()
  // debugger
  monacoInitializedUtil.onInitialized(init)
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
  setTimeout(() => {
    applyCustomFlycode()
  }, 666)
  // @ts-ignore
  window.getMonacoModel = getMonacoModel
  //@ts-ignore
  window.cr = function () {
    applyCustomFlycode()
    flyStore.codeGeneratorInitStatus = false
    flyStore.codeGeneratorInitStatus = true
  }
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
          monacoInitializedUtil.onInitialized(() => RefreshExtraLib(true))
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
body {
  transition: opacity 0.5s ease-in-out;
}

.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}
</style>
