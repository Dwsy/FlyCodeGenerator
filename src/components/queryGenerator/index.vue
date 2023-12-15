<template>
  <n-modal v-model:show="showCode" preset="card" title="Flycode" style="width: 900px" :bordered="false">
    <div class="flycode-d">
      <pre id="flyCode" data-lang="sql" style="height: 690px">{{ fquery }}</pre>
    </div>
  </n-modal>
</template>

<script setup lang="tsx">
import { h, nextTick, onMounted, ref } from 'vue'
import { genQueryModel, generateSql, init } from './index'
import { useFlyStore } from '../../store/flyStore'
import { copyToClipboard } from '../../util'
import { NButton, useMessage } from 'naive-ui'
import { render } from 'naive-ui/es/_utils'
import { getRandomEmojiByUnicode } from '../../type/model/propertyTypeCodeRef'
import { onUnmounted } from 'vue'
import { GM_getValue } from '$'

const message = useMessage()
const flyStore = useFlyStore()

onMounted(async () => {
  console.log('queryGenerator mounted')

  init()
  addGenQueryElement()
})

const fquery = ref('')
const showCode = ref(false)
//@ts-ignore
window.fly_d_showCode = showCode

function addGenQueryElement() {
  if (document.querySelector('#beSetting > div.main-content > div.tab-operation > button:nth-child(3)') != null) {
    return
  }
  const originalButton: HTMLButtonElement = document.querySelector('#beSetting > div.main-content > div.tab-operation > button:nth-child(2)')
  const originalButtonIcon = originalButton.querySelector('i')
  const newButton = originalButton!.cloneNode(false)
  const newButtonIcon = originalButtonIcon!.cloneNode(true) as HTMLElement
  newButtonIcon.classList.replace('ideicon-protocol', 'ideicon-db_flycode')
  const newButtonSpan = document.createElement('span')
  newButtonSpan.textContent = '生成SQL'
  newButton.appendChild(newButtonIcon)
  newButton.appendChild(newButtonSpan)
  newButton.addEventListener('click', () => {
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
              await nextTick(() => {
                // @ts-ignore
                monaco.editor.colorizeElement(document.getElementById('flyCode'), {
                  theme: GM_getValue('bracketPairColorizationEnable', null) ? 'mytheme' : ''
                })
              })
            }}
          >
            预览代码
          </NButton>
        </>
      )
    })
  })
  originalButton!.parentNode!.appendChild(newButton)
}
onUnmounted(() => {
  //@ts-ignore
  window.fly_d_showCode.value = false
  console.log('queryGenerator unmounted')
  const originalButton: HTMLButtonElement = document.querySelector('#beSetting > div.main-content > div.tab-operation > button:nth-child(3)')
  if (originalButton != null) {
    originalButton.remove()
  }
})
</script>

<style></style>
