<template>
    <p>ei</p>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { addButton } from '../../util';


onMounted(() => {
    addButton(null, "生成Flycode", "ideicon-share", () => {
        console.log("生成Flycode");
    }, 1)
})

</script>

<style></style>