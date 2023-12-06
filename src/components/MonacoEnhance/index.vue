<template>
    <div class="">
    </div>
</template>

<script setup lang="ts">
import { GM_getValue, GM_setValue } from '$';
import { ref, onMounted } from 'vue';
import { getMonacoModel, monacoInitializedUtil } from '../../util/monacoUtil';
import { useFlyStore } from '../../store/flyStore';
import { el, it } from 'date-fns/locale';
import { PropertyTypeCode } from '../../type/model/propertyTypeCodeRef';
import { useGenStore } from '../../store/genStore';
import { pushTempBoNewDtsList } from '../../flycodeDts';
import { addAutoAutoAutoAutoAuto, addBoNewAction } from './index'
import { applyCustomFlycode, MonarchTokensProvider, LanguageConfiguration } from "./monaco.languages.conf";
onMounted(() => {
    //@ts-ignore
    window.MonarchTokensProvider = MonarchTokensProvider
    //@ts-ignore
    window.LanguageConfiguration = LanguageConfiguration
    //@ts-ignore
    window.apply = applyCustomFlycode
    // @ts-ignore
    window.getMonacoModel0 = getMonacoModel
    monacoInitializedUtil
        .addInitializedCallback(async () => {

            monaco.editor.onDidCreateEditor((editor) => {
                addBoNewAction(editor)
                addAutoAutoAutoAutoAuto(editor)
                applyCustomFlycode()
            })
        })

})



</script>

<style>
.flycode-theme {

    height: 20%;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>