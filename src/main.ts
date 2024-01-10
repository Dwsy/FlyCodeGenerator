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
if (window.location.hash.indexOf('uipreview') != -1) {
} else {
  const pinia = createPinia()
  // pinia.use(PiniaDevtools)
  pinia.use(piniaPersist)

  const app: HTMLElement = document.createElement('div')
  app.className = 'queryGenerator'
  document.body.append(app)
  createApp(App).use(naive).use(pinia).mount(app)

  registerMenuCommand()
  var handler = {
    get: function (target, prop, receiver) {
      var propValue = Reflect.get(target, prop, receiver)
      if (typeof propValue !== 'function') {
        console.log(`Get ${prop}`)
        return propValue
      }

      // 对函数做特别处理
      return function (...args) {
        console.log(`Execute ${prop}`)
        return propValue.apply(target, args)
      }
    },
    set: function (target, prop, value) {
      if (prop !== 'length' && typeof value !== 'function') {
        console.log(`Change ${prop} to ${value}`)
      }
      return Reflect.set(target, prop, value)
    }
  }

  // window.sessionStorage = new Proxy(window.sessionStorage, handler)
  //@ts-ignore
  // Object.prototype.replace = function (searchValue, replaceValue) {
  //   // // 确保当前对象是字符串，否则返回原对象
  //   if (typeof this === 'string') {
  //     return this.split(searchValue).join(replaceValue)
  //   }
  //   return this
  // }
}
