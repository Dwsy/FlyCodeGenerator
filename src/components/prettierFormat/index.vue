<script setup lang="ts">
import { onMounted } from 'vue'
import { formatProvider, SWC_formatProvider } from './index'
import { getMonacoModel, monacoInitializedUtil } from '../../util//monacoUtil'
import { GM_getValue } from '../../util'
import initSwc, { transformSync } from '@swc/wasm-web'
onMounted(() => {
  console.log('prettierFormat')
  monacoInitializedUtil.onInitialized(() => {
    console.log('prettierFormat onInitialized')
    // monaco.languages.registerDocumentFormattingEditProvider('flycode', formatProvider)

    // if (GM_getValue('swc_format', true)) {
    // async function importAndRunSwcOnMount() {
    // await initSwc()
    // }
    // importAndRunSwcOnMount()
    // }
    monaco.languages.registerDocumentFormattingEditProvider('javascript', formatProvider)
  })
})
</script>

<template></template>
