<script setup lang="tsx">
import { generateTemporaryCode } from './'
const showModel = ref(false)
onMounted(async () => {
  //@ts-ignore
  window.generateTemporaryCode = () => {
    showModel.value = !showModel.value
  }
})
</script>

<template>
  <generateTemporaryCode :showModel="showModel"></generateTemporaryCode>
</template>
