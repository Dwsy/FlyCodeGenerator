<template>
  <n-message-provider>
    <n-config-provider :theme="theme">
      <div v-if="flyStore.codeGeneratorInitStatus">
        <SaveProtocolWatch></SaveProtocolWatch>
        <component :is="Generator[flyStore.ActiveGenerator]"></component>
      </div>
      <Ftheme></Ftheme>
      <MonacoEnhance></MonacoEnhance>
      <demo></demo>
    </n-config-provider>
  </n-message-provider>
</template>

<script setup lang="tsx">
import demo from './components/demo/index.vue'

import { onMounted, onBeforeUnmount, h } from 'vue'
import { darkTheme, lightTheme, useMessage } from 'naive-ui'
import { Generator } from './components'
import Ftheme from './components/Theme/index.vue'
import MonacoEnhance from './components/MonacoEnhance/index.vue'
import { ref } from 'vue'
import type { GlobalTheme } from 'naive-ui'
import { useFlyStore } from './store/flyStore'

import { nextTick } from 'vue'
import { RefreshExtraLib } from './flycodeDts'
import { getMonacoModel, monacoInitializedUtil } from './util/monacoUtil'
import { GM_getValue } from '$'
import { getFqueryModel } from './flycodeDts/FQuery/test'
import SaveProtocolWatch from './components/common/saveProtocolWatch.vue'
import { randomImg, setIdeTheme } from './util'
import da from 'date-fns/locale/da'
import axios from 'axios'
import { message } from './util/message'
import { render } from 'vue'
import { getUiProtocol } from './dataRequest'
import { UiProtocol } from './type/formProtocol'

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
      // console.log('wait...')
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

onMounted(async () => {
  const szzrx = GM_getValue('szzrx', false)
  if (!szzrx) {
    return
  }
  // @ts-ignore
  window.addBimg = (url, opacity) => {
    var body = document.body
    url =
      url ||
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F0bed5abed95248abf565cf5c09ecfb4d5a8e3a2a.jpg&refer=http%3A%2F%2Fi1.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664353324&t=fb85505eb17535b08da4704cd180ad44'
    body.style.backgroundImage = `url(${url})`
    body.style.backgroundSize = 'cover'
    body.style.opacity = opacity || '0.8'
  }

  setTimeout(async () => {
    var opacity = 0.1
    //@ts-ignore
    var sit = setInterval(() => {
      opacity += 0.2
      //@ts-ignore
      window.addBimg(null, opacity.toString())
      if (opacity >= 0.85) {
        randomImg()
        clearInterval(sit)
      }
    }, 100)
  }, 200)
  let yy = (await axios.post('https://v1.hitokoto.cn/?c=b ')).data
  // debugger
  // const message = useMessage()
  // message.success(yy.hitokoto)
  message.success(
    () => {
      return h(
        <div>
          <div>{yy.hitokoto}</div>
          <div style="float:right">-{yy.from}</div>
        </div>
      )
    },
    { duration: 3010 }
  )
  //添加键盘事件 command + s
  setTimeout(() => {
    document.addEventListener('keydown', async (event) => {
      if (event.ctrlKey && event.key === 'z') {
        // let xxx = (await axios.get('https://api.likepoems.com/ana/dujitang/')).data
        // message.success(xxx)
        let yy = (await axios.get('https://v1.hitokoto.cn/? ')).data
        message.success(
          () => {
            return h(
              <div>
                <div>{yy.hitokoto}</div>
                <div style="float:right">by:{yy.from}</div>
              </div>
            )
          },
          { duration: 3010, showIcon: false }
        )
        randomImg()
        event.preventDefault()
      }
      if (event.ctrlKey && event.key === 'x') {
        //@ts-ignore
        window.addBimg('null', '0.9')
        // randomImg()
        event.preventDefault()
      }
    })
  }, 2000)
})
</script>

<style>
body {
  /* --theme-primary-color: v-bind(themePrimaryColor); */
}
</style>
