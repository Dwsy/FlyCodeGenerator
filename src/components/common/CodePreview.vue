<template>
  <div class="flycode-d">
    <pre id="flyCode" data-lang="javascript" style="height: 690px">{{ props.flyCode }}</pre>
  </div>
</template>

<script setup lang="ts">
import { GM_getValue } from '$'
import { nextTick, onMounted, ref, onUnmounted } from 'vue'
type Props = {
  flyCode: string
}
const props = defineProps<Props>()

onMounted(async () => {
  await nextTick(() => {
    // @ts-ignore
    monaco.editor.colorizeElement(document.getElementById('flyCode'), {
      theme: GM_getValue('bracketPairColorizationEnable', null) ? 'mytheme' : ''
    })
  })
  // @ts-ignore
})
</script>
