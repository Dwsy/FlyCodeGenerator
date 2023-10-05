<template>
    <div class="flycode-d">
        <pre id="flyCode" data-lang="javascript" style="height: 690px">{{ props.flyCode }}</pre>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, onUnmounted } from 'vue'
type Props = {
    flyCode: string
}
const props = defineProps<Props>()

onMounted(async () => {
    await nextTick(() => {
        monaco.editor.colorizeElement(document.getElementById("flyCode"), {
            theme: "vs-dark",
            lineNumbers: "on",
        });
    })
    // @ts-ignore

})
</script>