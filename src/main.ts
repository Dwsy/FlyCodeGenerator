import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
// import { PiniaDevtools } from '@pinia/devtools'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import naive from 'naive-ui'
import { registerMenuCommand } from './util/handelMonkeyMenu'
import { message } from './util/message'
import { querySelectorPromise } from './components/demo6'
import { getProtocol } from './dataRequest'

const pinia = createPinia()
const app: HTMLElement = document.createElement('div')
app.className = 'queryGenerator'
document.body.append(app)

const Capp = createApp(App).use(naive).use(pinia)
if (
  window.location.href.indexOf('login') == -1 &&
  window.location.href.indexOf('tenant-env-list') == -1 &&
  window.location.href.indexOf('uipreview') == -1
) {
  Capp.mount(app)
  registerMenuCommand()
} else {
  if (window.location.href.indexOf('uipreview') != -1) {
  } else {
    message.warning('当前未登录，请登录后进入IDE刷新页面，插件方可正常加载', {
      duration: 99999999999
    })
  }
}
// const init = async () => {
//   if (window.location.href.indexOf('login') == -1 || window.location.href.indexOf('tenant-env-list') == -1) {
//     await querySelectorPromise('#app > div > div.side-bar-container > div > div.menu-top > nav > div.active', 999999)
//     message.success('FG初始化成功')
//     return
//   }
// }

// init() // Run the code once immediately
