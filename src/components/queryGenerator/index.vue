<template>
  <n-modal v-model:show="showCode" preset="card" title="Flycode" style="width: 900px" :bordered="false">
    <!-- <div class="flycode-d">
      <pre id="flyCode" data-lang="sql" style="height: 690px">{{ fquery }}</pre>
    </div> -->
    <code-preview :fly-code="fquery"></code-preview>
  </n-modal>
</template>

<script setup lang="tsx">
import { h, nextTick, onMounted, ref } from 'vue'
import { genQueryModel, generateSql, init } from './index'
import { useFlyStore } from '../../store/flyStore'
import { addButton, copyToClipboard } from '../../util'
import { NButton, useMessage } from 'naive-ui'
import { render } from 'naive-ui/es/_utils'
import { getRandomEmojiByUnicode } from '../../type/model/propertyTypeCodeRef'
import { onUnmounted } from 'vue'
import { GM_getValue } from '../../util'

const message = useMessage()
const flyStore = useFlyStore()

const btn = ref<Element>()
onMounted(async () => {
  console.log('queryGenerator mounted')

  init()
  btn.value = addButton(null, '生成FlyQuery', 'ideicon-protocol', genFunc, 1)
})
onUnmounted(() => {
  console.log('queryGenerator unmounted')
  if (btn.value) {
    btn.value.removeEventListener('click', genFunc)
    btn.value.remove()
    btn.value = null
  }
})

const fquery = ref('')
const showCode = ref(false)
//@ts-ignore
window.fly_d_showCode = showCode
const genFunc = () => {
  // debugger
  fquery.value = generateSql(genQueryModel(flyStore.protocol.output))
  console.log(fquery.value)

  copyToClipboard(fquery.value)
  message.success(() => {
    return h(
      <>
        <span>{`FlyQuery生成成功已复制到剪切板。${getRandomEmojiByUnicode()} `}</span>
        {/* {() => {
            console.log(fquery.value)
          }} */}
        <NButton
          type="success"
          onClick={async () => {
            //@ts-ignore
            window.fly_d_showCode.value = !window.fly_d_showCode.value
            {
              /* await nextTick(() => {
              // @ts-ignore
              monaco.editor.colorizeElement(document.getElementById('flyCode'), {
                theme: GM_getValue('MonacoTheme', null) ? 'mytheme' : ''
              })
            }) */
            }
          }}
        >
          预览代码
        </NButton>
      </>
    )
  })
}

onUnmounted(() => {
  //@ts-ignore
  window.fly_d_showCode.value = false
  console.log('queryGenerator unmounted')
  const originalButton: HTMLButtonElement = document.querySelector(
    '#beSetting > div.main-content > div.tab-operation > button:nth-child(3)'
  )
  if (originalButton != null) {
    originalButton.remove()
  }
})
</script>

<style></style>
