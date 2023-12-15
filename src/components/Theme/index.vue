<template>
  <div class="flycode-theme">
    <n-modal v-model:show="showChangeTheme" preset="card" title="Flycode" style="width: 900px" :bordered="false" class="flycode-theme">
      <div class="flycode-theme">
        <n-list hoverable clickable @click="changeTheme()">
          <n-list-item>
            <n-tag :bordered="false" type="info" size="small"> 默认 </n-tag>
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
import { GM_getValue, GM_setValue } from '$'
import { getMonacoModel, monacoInitializedUtil } from '../../util/monacoUtil'
import { useFlyStore } from '../../store/flyStore'
import { themeList } from '.'
const showChangeTheme = ref(false)
const MonacoTheme = GM_getValue('bracketPairColorizationEnable', null)
onMounted(() => {
  // @ts-ignore
  window.showChangeTheme = () => {
    showChangeTheme.value = !showChangeTheme.value
  }
  monacoInitializedUtil.addInitializedCallback(async () => {
    console.log(MonacoTheme)
    if (MonacoTheme != null) {
      // @ts-ignore
      monaco.editor.onDidCreateEditor((editor: ICodeEditor) => {
        // @ts-ignore
        changeTheme(MonacoTheme)
      })
      setTimeout(() => {
        changeTheme(MonacoTheme)
      }, 666)
    }
  })
})

const changeTheme = (name: string = 'default') => {
  if (name == 'default') {
    GM_setValue('bracketPairColorizationEnable', null)
    setTimeout(() => {
      window.location.reload()
    }, 100)
  } else {
    fetch('http://xwide.dwsy.link/monaco-themes-master/themes/' + name)
      .then((data) => data.json())
      .then((data) => {
        if (showChangeTheme.value) {
          showChangeTheme.value = false
        }
        console.log('theme:'.concat(data))
        const rules: Array<any> = data.rules
        rules.push({ token: 'flylog', foreground: '27ae60', fontStyle: 'underline' })
        rules.push({ token: 'comment.todo', foreground: 'ecd452', fontStyle: 'bold' })

        rules.push({ token: 'comment.fixme', foreground: 'd83b01', fontStyle: 'bold' })

        rules.push({ token: 'comment.remind', foreground: '00bcf2', fontStyle: 'bold' })

        rules.push({ token: 'flylog', foreground: 'c12c1f', fontStyle: 'underline' })
        rules.push({ token: 'function', foreground: '0070C1', fontStyle: 'bold' })
        // AD3DA4
        // debugger
        // if (name == 'Monokai') {
        //     rules.push({ token: "code.property", foreground: "A2DB2E" })
        //     rules.push({ token: "code.propertypre", foreground: "AD3DA4" })
        // } else {
        //     rules.push({ token: "code.property", foreground: "4B22B0" })
        //     // rules.push({ token: "code.propertypre", foreground: "AD3DA4" })
        // }
        rules.push({ token: 'code.property', foreground: '4B22B0' })
        // rules.push({ token: "code.property", foreground: "A2DB2E" })
        // rules.push({ token: "code.propertypre", foreground: "AD3DA4" })

        // @ts-ignore         "fontStyle": "underline",
        monaco.editor.defineTheme('mytheme', data)
        // @ts-ignore
        monaco.editor.setTheme('mytheme')
      })
    GM_setValue('bracketPairColorizationEnable', name)
    // showChangeTheme.value = !showChangeTheme.value
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

.view-line {
  /* font-family: 'Cascadia Mono PL', Courier, monospace; */
  /* font-size: medium; */
  font-weight: normal;
}
</style>
