<template>
  <div class=""></div>
</template>

<script setup lang="ts">
import { monacoInitializedUtil } from '../../util/monacoUtil'
import { registerProviders } from './provider'
import { warm_upTableDataSuggestionsCache } from './sqlProvider'

onMounted(() => {
  monacoInitializedUtil.addInitializedCallback(() => {
    registerProviders()
    monaco.editor.onDidCreateEditor((model) => {
      setTimeout(() => {
        warm_upTableDataSuggestionsCache(model)
      }, 1688)
    })
  })
})
</script>
