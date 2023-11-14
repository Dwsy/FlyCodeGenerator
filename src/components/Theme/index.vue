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
                    setTimeout(() => {
                        editor.addAction({
                            // An unique identifier of the contributed action.
                            id: "my-unique-id",

                            // A label of the action that will be presented to the user.
                            label: "My Label!!!",

                            // An optional array of keybindings for the action.
                            keybindings: [
                                monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
                            ],

                            // A precondition for this action.
                            precondition: null,

                            // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
                            keybindingContext: null,

                            contextMenuGroupId: "navigation",

                            contextMenuOrder: 1.5,

                            // Method that will be executed when the action is triggered.
                            // @param editor The editor instance is passed in as a convenience
                            run: function (ed) {
                                console.log(ed)
                                const lineContent = getMonacoModel().getLineContent(ed.getPosition().lineNumber);
                                const match = lineContent.match(/BO.new\((.*?)\)/);
                                const boName = match[1]
                                console.log(boName)
                                var b = flyStore.tableNameDataMap.get(boName).properties.map((item) => {
                                    if (item.propertytypecode == PropertyTypeCode.PrimaryKey.toString()) {
                                        return `${boName}.${item.columnname} = FLY.genId()`
                                    } else {
                                        let temp = `${boName}.${item.columnname} = ${item.columnname}`
                                        let sum = 0
                                        let len = temp.length
                                        for (var i = 0; i < 50 - len; i++) {
                                            temp += " "
                                            sum++
                                        }
                                        // debugger
                                        return `${temp}//${item.propertyname}`
                                    }
                                })
                                b.unshift(`var ${boName} = BO.new("${boName}")`)
                                console.log(b.join("\n"))
                                // 删除当前行
                                ed.executeEdits("my-source", [{
                                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
                                    text: ""
                                }])
                                ed.executeEdits("my-source", [{
                                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
                                    text: b.join("\n") + "\n"
                                }])
                                var genStore = useGenStore()
                                pushTempBoNewDtsList(boName)
                            },
                        });
                    }, 1000);

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