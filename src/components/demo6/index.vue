<script setup lang="tsx">
import { set } from '@vueuse/core'
import { switchSplitEditor } from '.'
import { useFlyStore } from '../../store/flyStore'
import { getPageCode } from '../../util'
import { monacoInitializedUtil } from '../../util/monacoUtil'
const flyStore = useFlyStore()
const alreadyStartSwitchSplitEditorCodeSet = new Set<string>()
onMounted(() => {
  console.log('mounted')
  // flyStore.waitMonacoEditorCallback(getPageCode(), switchSplitEditor)
  monacoInitializedUtil.onInitialized(async () => {
    monaco.editor.onDidCreateEditor(async (editor) => {
      // if (alreadyStartSwitchSplitEditorCodeSet.has(getPageCode())) {
      //   return
      // }
      alreadyStartSwitchSplitEditorCodeSet.add(getPageCode())
      debugger
      if (editor.getContainerDomNode().getAttribute('id') == 'SplitCode') {
        return
      }

      // @ts-ignore
      // window.noweditor = editor
      if (window.location.href.indexOf('modeledit') > -1) {
        setTimeout(() => {
          switchSplitEditor(editor)
        }, 200)
      } else if (window.location.href.indexOf('uiedit') > -1) {
      }
    })
  })
})
</script>

<template></template>
<style>
.split-editor {
  width: 50% !important;
  /* background-size: cover !important; */
}
.split-editor-third {
  width: 33% !important;
  /* background-size: cover !important; */
}

.logic-edit-container > .right-side .ant-tabs-nav .ant-tabs-tab {
  width: 33% !important;
  margin: 0;
  text-align: center;
}
.split-editor_unfold {
  display: none !important;
  background-size: cover !important;
  right: 50% !important;
}
#beSetting
  > div.right-side.split-editor
  > div
  > div
  > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content.show-split-editor {
  margin-left: -200% !important;
}
.logic-edit-container .right_column_unfold {
  background-size: auto !important;
}

.sc-resizable {
  resize: horizontal;
  overflow: auto;
}
</style>
