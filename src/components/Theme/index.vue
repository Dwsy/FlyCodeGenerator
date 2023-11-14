<template>
    <div class="flycode-theme">
        <n-modal v-model:show="showChangeTheme" preset="card" title="Flycode" style="width: 900px" :bordered="false"
            class="flycode-theme">
            <div class="flycode-theme">
                <n-list hoverable clickable @click="changeTheme()">
                    <n-list-item>
                        <n-tag :bordered="false" type="info" size="small">
                            默认
                        </n-tag>
                    </n-list-item>
                </n-list>
                <n-list hoverable clickable v-for="themeName in themeList" @click="changeTheme(themeName)">
                    <n-list-item>
                        <n-tag :bordered="false" type="info" size="small">
                            {{ themeName }}
                        </n-tag>
                    </n-list-item>
                </n-list>
            </div>
        </n-modal>
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
const showChangeTheme = ref(false)


onMounted(() => {
    // @ts-ignore
    window.showChangeTheme = () => {
        showChangeTheme.value = !showChangeTheme.value
    }
    monacoInitializedUtil
        .addInitializedCallback(async () => {
            const MonacoTheme = GM_getValue("bracketPairColorizationEnable", null)
            console.log(MonacoTheme)
            if (MonacoTheme != null) {
                // @ts-ignore
                monaco.editor.onDidCreateEditor((editor: ICodeEditor) => {
                    // @ts-ignore
                    changeTheme(MonacoTheme)
                    console.log(MonacoTheme)
                    console.log("editor", editor)
                    console.log("  editor.addAction({")
                    var flyStore = useFlyStore()

                })
            }
        })

})
const themeList = [
    'Active4D.json',
    'All Hallows Eve.json',
    'Amy.json',
    'Birds of Paradise.json',
    'Blackboard.json',
    'Brilliance Black.json',
    'Brilliance Dull.json',
    'Chrome DevTools.json',
    'Clouds Midnight.json',
    'Clouds.json',
    'Cobalt.json',
    'Cobalt2.json',
    'Dawn.json',
    'Dominion Day.json',
    'Dracula.json',
    'Dreamweaver.json',
    'Eiffel.json',
    'Espresso Libre.json',
    'GitHub Dark.json',
    'GitHub Light.json',
    'GitHub.json',
    'IDLE.json',
    'idleFingers.json',
    'iPlastic.json',
    'Katzenmilch.json',
    'krTheme.json',
    'Kuroir Theme.json',
    'LAZY.json',
    'MagicWB (Amiga).json',
    'Merbivore Soft.json',
    'Merbivore.json',
    'monoindustrial.json',
    'Monokai Bright.json',
    'Monokai.json',
    'Night Owl.json',
    'Nord.json',
    'Oceanic Next.json',
    'Pastels on Dark.json',
    'Slush and Poppies.json',
    'Solarized-dark.json',
    'Solarized-light.json',
    'SpaceCadet.json',
    'Sunburst.json',
    'Textmate (Mac Classic).json',
    'themelist.json',
    'Tomorrow-Night-Blue.json',
    'Tomorrow-Night-Bright.json',
    'Tomorrow-Night-Eighties.json',
    'Tomorrow-Night.json',
    'Tomorrow.json',
    'Twilight.json',
    'Upstream Sunburst.json',
    'Vibrant Ink.json',
    'Xcode_default.json',
    'Zenburnesque.json'
]

const changeTheme = (name: string = 'default') => {
    if (name == 'default') {
        GM_setValue("bracketPairColorizationEnable", null)
        setTimeout(() => { window.location.reload() }, 100)
    } else {
        fetch('http://xwide.dwsy.link/monaco-themes-master/themes/' + name)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                // data.colors['editor.background'] = "#1E1E1E"
                // // 定义Monarch语法规则

                // 添加规则到语言定义
                // monaco.languages.setMonarchTokensProvider("flycode", {
                //     tokenizer: {
                //         root: [
                //             [/FLY\.log.*/, 'flylog'],
                //         ],
                //     },
                // });
                // debugger
                const rules: Array<any> = data.rules
                rules.push({ token: "flylog", foreground: "27ae60", fontStyle: "underline" })

                // @ts-ignore         "fontStyle": "underline",
                monaco.editor.defineTheme("mytheme", data);
                // @ts-ignore
                monaco.editor.setTheme("mytheme");
            })
        GM_setValue("bracketPairColorizationEnable", name)
        // showChangeTheme.value = !showChangeTheme.value
    }
}
var seq = 0
const nextTheme = () => {
    changeTheme(themeList[seq])
    if (seq++ == themeList.length - 1) {
        seq = 0
    }
}


</script>

<style>
.flycode-theme {

    height: 20%;
    overflow: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>