<template>
    <div>

        <n-modal v-model:show="showModal" preset="card" title="Flycode生成配置" style="width: 700px" :bordered="false">
            <n-card>
                <n-tabs type="line" animated size="large">
                    <n-tab-pane name="xslcolBind" tab="数据绑定">


                    </n-tab-pane>
                    <n-tab-pane name="validationConfig" tab="校验配置">
                        <div>



                        </div>
                    </n-tab-pane>
                    <n-tab-pane name="L" tab="L">

                    </n-tab-pane>
                </n-tabs>
                <div style="float: right;margin-top: 15px;">

                    <NButton style="margin-right: 15px;" @click="" tertiary type="info">预览代码</NButton>

                    <NButton @click="" strong secondary type="primary">生成代码</NButton>
                </div>

            </n-card>
        </n-modal>

    </div>
</template>

<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { addButton } from '../../util';
import { useFlyStore } from '../../store/flyStore';
import { render } from 'vue';
import p from 'naive-ui/es/typography/src/p';
import { FunctionalComponent } from 'vue';
const showModal = ref(false)
const flyStore = useFlyStore()

onMounted(() => {
    addButton(null, "生成Flycode", "ideicon-share", () => {
        console.log("生成Flycode");
    }, 1)
})

</script>

<style></style>