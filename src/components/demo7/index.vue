<template>
  <template v-for="pagecode in PageList" :key="pagecode">
    <Demo4 :pagecode="pagecode"></Demo4>
  </template>
</template>

<script setup lang="tsx">
import { useFlyStore } from '../../store/flyStore'
import { getPageCode } from '../../util'
import { getTemplateModules } from '../../util/templateModules'

const PageList = ref([])

const flyStore = useFlyStore()

watchEffect(async () => {
  if (flyStore.codeGeneratorInitStatus) {
    const pageCode = getPageCode()
    if (PageList.value.indexOf(pageCode) == -1) {
      PageList.value.push(pageCode)
    }
  }
})

onMounted(async () => {})
//@ts-ignore
window.fn = fn
function fn() {
  const templateModules = getTemplateModules()
  const model = templateModules.filter((d) => d.module == 'model')[0]
  const nowPageCode = model.tabValue.split('_')[0]
  let delPageCodeArray = []
  debugger
  model.tabs.forEach((tab) => {
    const split = tab.url.split('/')
    delPageCodeArray = []
    if (split.length == 3) {
      const pageCode = split[2]
      if (PageList.value.indexOf(pageCode) == -1) {
        delPageCodeArray.push(pageCode)
      }
    }
  })
  PageList.value = PageList.value.filter((d) => delPageCodeArray.indexOf(d) != -1)
}
</script>
