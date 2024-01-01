<template></template>
<script setup lang="ts">
import { switchVideo } from '../Otaku'

onMounted(() => {
  // alert('macVideo')
  setTimeout(() => {
    //@ts-ignore
    document.querySelector('.xw-aPaas').style.opacity = '0.8'
    //添加style标签
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = `
.logic-edit-container > .left-side {
  background-color: #ffffff00 !important;
}

/* todo switch */
.logic-edit-container > .right-side {
  background-color: #ffffff00 !important;
}

#beSetting
> div.main-content
> div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line
> div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content
> div.ant-tabs-tabpane.ant-tabs-tabpane-active {
  padding: 0px !important;
}

#myVideo {
  font-family: system-ui, 'PingFang SC', STHeiti, sans-serif;
  font-size: 75%;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
  opacity: 0.5;
  /* opacity: 0.9!important; */
  z-index: -1;
}

#videoBox {
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

.xw-aPaas {
  /* opacity: 0.8; */
  z-index: 2;
}

.xw-aPaas {
  /*  position: absolute !important; */
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 2 !important;
}

.app-container {
  background-color: rgba(0, 0, 0, 0.76) !important;
}

.app-container .side-bar {
  border-right: 1px solid var(--theme-primary-background-weight) !important;
}
div > div.ant-tabs-bar.ant-tabs-top-bar.ant-tabs-card-bar{
width: calc(100% - 1px)!important;
}

    `
    //light
    const light = document.createElement('style')
    light.type = 'text/css'
    light.innerHTML = `
    .ant-tabs-nav-scroll{
    background-color: var(--theme-bg-nav)
    }`
    setTimeout(() => {
      if (localStorage.getItem('ide_theme') === 'light') {
        document.getElementsByTagName('HEAD').item(0)?.appendChild(light)
      }
    }, 200)
    document.getElementsByTagName('HEAD').item(0)?.appendChild(style)
    switchVideo()
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'z') {
        switchVideo()
      }
    })
  }, 666)
})
</script>

<style></style>
