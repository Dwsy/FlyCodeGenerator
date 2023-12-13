<template></template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useFlyStore } from '../../store/flyStore'
import { onUnmounted } from 'vue'
const flyStore = useFlyStore()
onMounted(() => {
  checkSaveProtocol()
})
function checkSaveProtocol() {
  // 监听元素的点击事件
  const button = document.querySelector('#beSetting > div.main-content > div.tab-footer > button.ant-btn.ant-btn-primary')
  button.addEventListener('click', handleClick)
  // 监听 Ctrl + S 键盘事件
  document.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })
}

function unCheckSaveProtocol() {
  // 监听元素的点击事件
  const button = document.querySelector('#beSetting > div.main-content > div.tab-footer > button.ant-btn.ant-btn-primary')
  button.removeEventListener('click', handleClick)

  // 监听 Ctrl + S 键盘事件
  document.removeEventListener('keydown', handleKeyDown)
  console.log('unCheckSaveProtocol')
}
onUnmounted(() => {
  unCheckSaveProtocol()
})
function handleClick() {
  console.log('updateProtocol')
  flyStore.updateProtocol()
}

function handleKeyDown(event) {
  if (event.ctrlKey && event.key === 's') {
    console.log('updateProtocol')
    flyStore.updateProtocol()
    event.preventDefault()
  }
}
</script>
