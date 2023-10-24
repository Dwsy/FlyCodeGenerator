<template>
  <n-message-provider>
    <n-config-provider :theme="theme">

      <div v-if="flyStore.codeGeneratorInitStatus">
        <component :is="Generator[flyStore.ActiveGenerator]"></component>
      </div>

    </n-config-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { darkTheme, lightTheme } from 'naive-ui'
import { Generator } from './components'

import { ref } from 'vue'
import type { GlobalTheme } from 'naive-ui'
import { useFlyStore } from './store/flyStore';

import { nextTick } from 'vue';
import { RefreshExtraLib } from './flycodeDts'
import { monacoInitializedUtil } from './util/monacoUtil'


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
          clearInterval(c)
        } else {
          console.log("wait...");
        }
      }, 1000)


    })


  addLightTheme()


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

function addLightTheme() {
  let lightThemeInit = false
  // @ts-ignore
  window.lightTheme = (lightThemeInit: boolean) => {
    document.querySelectorAll(".secondary-tab-card-special.dark-image .main-content > .tab-content > .ant-tabs-bar .ant-tabs-tab")?.forEach((e: HTMLElement) => {
      e.style.background = "#E1E1E1"
    })
    document.querySelectorAll("#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div> div")?.forEach((e: HTMLElement) => {
      e.style.background = "#E1E1E1"
    })
    // @ts-ignore
    monaco.editor.setTheme("light");
    if (!lightThemeInit) {
      document.body.style.cssText = `--theme-primary-color: #288EFF!important; --theme-bg-nav: #F5F5F5!important; --theme-bg-card: #FFFFFF!important; --theme-bg-page: #F5F5F5!important; --theme-bg-header: #FFFFFF!important; --theme-bg-list-striped: #F5F5F5!important; --theme-table-background: #FFFFFF!important; --theme-bg-list-header: #F5F5F5!important; --theme-bg-list-activated: #E0E0E0!important; --theme-bg-content: #FFFFFF!important; --theme-icon-color: #818181!important; --theme-primary-divider-color: #E0E0E0!important; --theme-grand-menu-bgcolor: #F5F5F5!important; --theme-pagination-total-color: #BCBCBC!important; --theme-other-tool-bgcolor: #F5F5F5!important; --theme-tag-border-color: #64676B!important; --theme-tag-background-color: #F5F5F5!important; --theme-tag-color: #969799!important; --theme-check-border-color: #969799!important; --theme-check-background-color: #F5F5F5!important; --theme-check-disabled-background: #E0E0E0!important; --theme-login-background-color: #F5F5F5!important; --theme-login-return-btn-color: #969799!important; --theme-login-search-background-color: #FFFFFF!important; --theme-login-search-border-color: #E0E0E0!important; --theme-login-search-color: #333333!important; --theme-login-user-color: #333333!important; --theme-login-tenant-background-color: #FFFFFF!important; --theme-login-tenant-icon-color: #333333!important; --theme-login-tenant-version-color: #969799!important; --theme-login-tenant-background-color--hover: #F5F5F5!important; --theme-login-tenant-box-shadow--hover: 0px 4px 10px 2px rgba(224, 224, 224, 0.5)!important; --theme-login-user-background-color--hover: #E0E0E0!important; --theme-background-color-base: #FFFFFF!important; --theme-divider-border-color: #E0E0E0!important; --theme-content-background-color: #F5F5F5!important; --theme-content-background-color--hover: #E0E0E0!important; --theme-card-item-background-color: #FFFFFF!important; --theme-card-item-border-color: #E0E0E0!important; --theme-card-item-header-color: #333333!important; --theme-card-tab-header-color: #FFFFFF!important; --theme-card-text-color: #333333!important; --theme-card-text-background-color--hover: #E0E0E0!important; --theme-card-header-text-color: #333333!important; --theme-envi-hover-bg: #F5F5F5!important; --theme-primary-linear-color: linear-gradient(to right, #419CFF, #76CBFF)!important; --theme-primary-linear-hover-color: linear-gradient(to right, #4583F8, #70C0FE)!important; --theme-primary-radial-color: linear-gradient(to right, #419CFF, #76CBFF)!important; --theme-primary-login-background: #FFFFFF!important; --theme-primary-login-main-background: #F5F5F5!important; --theme-item-background-color: #FFFFFF!important; --theme-primary-color-btn-hover: #288EFF!important; --theme-primary-color-selected-hover: #333333!important; --theme-font-color-version: rgba(0, 0, 0, 0.64)!important; --theme-font-color-high: rgba(0, 0, 0, 1)!important; --theme-font-color-middle: #333333!important; --theme-font-color-low: rgba(0, 0, 0, 0.24)!important; --theme-font-color-light: #808080!important; --theme-font-color-active: #429CFF!important; --theme-font-color-subtitle: #333333!important; --theme-icon-color-active: rgba(0, 0, 0, 1)!important; --theme-primary-background-weight: #F5F5F5!important; --theme-primary-background-middle: #FFFFFF!important; --theme-primary-background-ligth: #F5F5F5!important; --theme-primary-background-base: rgba(255, 255, 255, 0.6)!important; --theme-shell-menu-background: #F5F5F5!important; --theme-shell-menu-font-color: rgba(0, 0, 0, 0.87)!important; --theme-shell-menu-font-color-active: #288EFF!important; --theme-primary-font-color-reverse: #333333!important; --theme-form-item-border: #E0E0E0!important; --theme-form-input-background: rgba(0, 0, 0, 0.05)!important; --theme-form-input-border: #FFFFFF!important; --theme-form-item-border-error: #ff4d4f!important; --theme-form-item-disabled-border: rgba(224, 224, 224, .36)!important; --theme-form-item-background: #FFFFFF!important; --theme-form-item-disabled-background: rgba(245, 245, 245, .36)!important; --theme-card-item-background: #FFFFFF!important; --theme-list-item-background: #FFFFFF!important; --theme-list-item-child-background: #288EFF!important; --theme-list-item-child-background-hover: #70C0FE!important; --theme-table-thead-background: #FFFFFF!important; --theme-table-background-even-row: rgba(0, 0, 0, 0.1)!important; --theme-table-row-hover: rgba(0, 0, 0, 0.05)!important; --theme-table-row-active: rgba(0, 0, 0, 0.05)!important; --theme-item-hover: rgba(0, 0, 0, 0.05)!important; --theme-shell-funcmenu-background: #F5F5F5!important; --theme-shell-funcmenu-background-active: rgba(0, 0, 0, 0.2)!important; --theme-select-menu-background: #FFFFFF!important; --theme-select-menu-background-disabled: #F5F5F5!important; --theme-tools-button-color: #333333!important; --theme-tools-button-background-color: #FFFFFF!important; --theme-tools-button-border-color: #E0E0E0!important; --theme-tools-button-color--disabled: #E0E0E0!important; --theme-tools-button-background-color--disabled: #F5F5F5!important; --theme-tools-button-border-color--disabled: #E0E0E0!important; --theme-scrollbar-thumb: #E0E0E0!important; --theme-scrollbar-track: #F5F5F5!important; --theme-status-unpublished: #666666!important; --theme-btn-default-border-hover: #588CF1!important; --theme-btn-primary-border-hover: #588CF1!important; --theme-btn-primary-bg-hover: #588CF1!important; --theme-btn-text-color-hover: #FFFFFF!important; --theme-btn-text-bg-hover: #288EFF!important; --theme-nav-bg-hover: #E0E0E0!important; --theme-primary-background-layer: rgba(255, 255, 255, 0.5)!important; --theme-font-size-max: 28px!important; --theme-font-size-mid: 14px!important; --theme-font-size-min: 13px!important; --theme-table-tr-background: #FFFFFF!important; --theme-table-tr-even-background: #F5F5F5!important; --theme-table-tr-hover-background: #E0E0E0!important; --theme-table-placeholder-background: #F5F5F5!important; --theme-table-placeholder-color: #666666!important; --theme-shell-menu-font-background-active: #F5F5F5!important; --theme-right-menu-background-active: #E0E0E0!important; --theme-modal-alert-background: #FFFFFF!important; --theme-modal-alert-color: rgba(0, 0, 0, 0.65)!important; --theme-tooltip-background: #333!important; --theme-tooltip-color: #FFFFFF!important; --button-space: 10px!important; --auxiliary-text-color: #969799!important;`
    }
  }
  const span = document.createElement("span")
  span.textContent = "L"
  span.addEventListener("click", () => {
    theme.value = lightTheme
    // @ts-ignore

    window.lightTheme(lightThemeInit)
  })
  setTimeout(() => { document.querySelector("#app > div > div.content > div.envi-style").append(span) }, 2000)

}


</script>
