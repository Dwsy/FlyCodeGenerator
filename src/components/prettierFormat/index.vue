<script setup lang="ts">
import { onMounted } from 'vue'
import { formatProvider } from './index'
import { getMonacoModel, monacoInitializedUtil } from '../../util//monacoUtil'
onMounted(() => {
  console.log('prettierFormat')
  monacoInitializedUtil.addInitializedCallback(() => {
    monaco.languages.registerDocumentFormattingEditProvider('flycode', formatProvider)
  })
})
</script>

<template></template>
