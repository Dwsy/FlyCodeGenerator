<template>
  <div class="flycode-theme">
    <n-modal
      v-model:show="showChangeTheme"
      preset="card"
      title="Flycode"
      style="width: 900px"
      :bordered="false"
      class="flycode-theme"
    >
      当前主题: {{ MonacoTheme }}
      <div class="flycode-theme">
        <n-list
          hoverable
          clickable
          @click="
            () => {
              //@ts-ignore
              showChangeTheme = false
              changeTheme('default')
            }
          "
        >
          <n-list-item>
            <n-tag :bordered="false" type="info" size="small"> 默认 </n-tag>
          </n-list-item>
        </n-list>
        <n-list
          hoverable
          clickable
          v-for="themeName in themeList"
          @click="
            () => {
              showChangeTheme = false
              changeTheme(themeName)
            }
          "
        >
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
import { GM_getValue, GM_setValue } from '../../util/index'
import { monacoInitializedUtil } from '../../util/monacoUtil'
import { changeTheme, themeList } from './index'

const showChangeTheme = ref(false)
const MonacoTheme = GM_getValue('MonacoTheme', 'default')
// changeTheme(MonacoTheme)
onMounted(() => {
  // @ts-ignore
  window.showChangeTheme = () => {
    showChangeTheme.value = !showChangeTheme.value
  }
  monacoInitializedUtil.onInitialized(async () => {
    console.log(MonacoTheme)
    if (MonacoTheme != null) {
      // @ts-ignore
      monaco.editor.onDidCreateEditor((editor: ICodeEditor) => {
        changeTheme(MonacoTheme)
      })
      // setTimeout(() => {
      //   changeTheme(MonacoTheme)
      // }, 666)
    }
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

.view-line {
  /* font-family: 'Cascadia Mono PL', Courier, monospace; */
  /* font-size: medium; */
  font-weight: normal;
}
</style>
