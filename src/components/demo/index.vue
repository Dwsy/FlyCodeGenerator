<script setup lang="tsx">
import { Ref, Teleport, nextTick } from 'vue'
import { onMounted, onBeforeUnmount, h, ref } from 'vue'
import { message } from '../../util/message'
import { DropdownMixedOption } from 'naive-ui/es/dropdown/src/interface'
import { getUiProtocol } from '../../dataRequest'
import { UiProtocol } from '../../type/formProtocol'
import { monacoInitializedUtil } from '../../util/monacoUtil'
import { addAutoAutoAutoAutoAuto } from '../MonacoEnhance'
import { applyCustomFlycode } from '../MonacoEnhance/monaco.languages.conf'
import set from 'date-fns/set'
import { watch } from 'vue'

const open = ref(false)
const x = ref(0)
const y = ref(0)

type CodeType = {
  code: string
  name: string
  type: string
}
const nowSelectCodeType: Ref<CodeType> = ref({
  code: '',
  name: '',
  type: ''
})
let nowEditor: monaco.editor.ICodeEditor
/**
 * 初始化monaco编辑器，并添加回调函数
 */
monacoInitializedUtil.addInitializedCallback(async () => {
  /**
   * 当创建编辑器时触发回调函数
   * @param {monaco.editor.IStandaloneCodeEditor} editor - 当前创建的编辑器实例
   */
  monaco.editor.onDidCreateEditor(async (editor) => {
    nowEditor = editor
    if (window.location.href.indexOf('uiedit') > -1) {
      addAutoAutoAutoAutoAuto(editor)
      applyCustomFlycode()
      const UiProtocolData: UiProtocol = (await getUiProtocol())?.resp_data
      if (!UiProtocolData) {
        return
      }

      const nameCodeTypeMap = new Map<string, CodeType>()
      var _ = (obj: any) => {
        Object.keys(obj).forEach((key) => {
          if (typeof obj[key] === 'object') {
            _(obj[key])
          } else {
            if (key == 'name') {
              nameCodeTypeMap.set(obj[key], {
                code: obj.code || '',
                name: obj.name || '',
                type: obj.type || ''
              })
            }
          }
        })
      }
      _(UiProtocolData.view)
      let ctrl_list = document.querySelectorAll(
        'div:nth-child(2) > div > div.ant-drawer-content-wrapper > div > div > div.ant-drawer-body > div > div.uiflycode > div.list > div.ctrl-list > div >span'
      )

      //监控 search input 的text值变化
      let input = document.querySelector(
        'div > div.ant-drawer-content-wrapper > div > div > div.ant-drawer-body > div > div.uiflycode > div.list-search > input'
      )

      if (input) {
        /**
         * 监听输入框的值变化
         * @param {Event} event - 输入框变化事件
         */
        input.addEventListener('input', handleInputChange)
      }

      let changedTimeout: ReturnType<typeof setTimeout> | null = null
      /**
       * 处理输入框值变化的回调函数
       * @param {Event} event - 输入框变化事件
       */
      function handleInputChange(event) {
        const newValue = event.target.value
        if (changedTimeout) {
          clearTimeout(changedTimeout)
        }
        let ctrl_list = document.querySelectorAll(
          'div:nth-child(2) > div > div.ant-drawer-content-wrapper > div > div > div.ant-drawer-body > div > div.uiflycode > div.list > div.ctrl-list > div >span'
        )
        changedTimeout = setTimeout(() => {
          console.log('handelCtrlList changed:', newValue)
          ctrl_list.forEach((item) => handelCtrlList(item, nameCodeTypeMap))
        }, 500)
        // Handle the new value here
      }

      ctrl_list.forEach((item) => handelCtrlList(item, nameCodeTypeMap))
      console.log(UiProtocolData)
      console.log(nameCodeTypeMap)
    }
  })
})

function getCtrFunc(editor: monaco.editor.ICodeEditor) {
  debugger
  const ArrayCtrlNameList = ['editortable', 'infotable']
  const position = editor.getPosition()
  const isArrayCtrl = ArrayCtrlNameList.includes(nowSelectCodeType.value.type)
  const gendCode = `const ${isArrayCtrl ? 'table' : 'ctrl'}Rie = Page.get${isArrayCtrl ? 'Array' : ''}Ctrl("${nowSelectCodeType.value.name}")`

  editor.executeEdits('source', [
    {
      range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
      text: gendCode.replace('Rie', '')
    }
  ])

  const _ = (e?) => {
    //   console.log('goto editor lo', e)
    const newPosition = new monaco.Position(position.lineNumber, position.column + `const ${isArrayCtrl ? 'table' : 'ctrl'}`.length)
    editor.setPosition(newPosition)
    editor.focus()
  }
  _()
}

let isFirstShowMenu = true
function debounce(func: Function, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return function () {
    const context = this
    const args = arguments

    if (isFirstShowMenu) {
      // func.apply(context, args)
      isFirstShowMenu = false
      delay = 100
      // return
    }

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
    delay = 200
  }
}

function showMenu(e: MouseEvent, codeType?: CodeType) {
  console.log('showMenu', e)
  //获取鼠标的x y
  // x.value = e.screenX + 'px'
  // y.value = e.screenY + 'px'
  // x.value = e.clientX + document.body.scrollLeft - document.body.clientLeft - 20
  // y.value = e.clientY + document.body.scrollTop - document.body.clientTop - 30
  //@ts-ignore
  let element: Element = e.toElement
  if (element.tagName == 'span'.toUpperCase()) {
    element = element.parentElement
  }
  let xy = getElementRightUpperXY(element)
  x.value = xy.x
  y.value = xy.y
  open.value = true
  nowSelectCodeType.value = codeType
  // Show the multi-level menu
}

function hideMenu() {
  // Hide the multi-level menu
}
watch(nowSelectCodeType, (newVal) => {
  console.log('nowSelectCodeType', newVal)

  options[2].label = newVal.name
  options[2].key = newVal.code
})

const options: DropdownMixedOption[] = [
  {
    label: 'getCtrl',
    key: 'getCtrl'
  },
  {
    label: '杰·盖茨比',
    key: 'jay gatsby'
  },
  {
    label: nowSelectCodeType.value.name,
    key: nowSelectCodeType.value.code,
    children: [
      {
        label: '乔丹·贝克',
        key: 'jordan baker'
      },
      {
        label: '其他',
        key: 'others2',
        children: [
          {
            label: '鸡肉',
            key: 'chicken'
          }
        ]
      }
    ]
  }
]

function handleSelect(key: string | number) {
  isFirstShowMenu = true
  open.value = false
  message.info(String(key))
  if (key === 'getCtrl') {
    getCtrFunc(nowEditor)
  }
}
function handleContextMenu(e: MouseEvent) {
  e.preventDefault()
  open.value = false
  nextTick().then(() => {
    open.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}
function onClickoutside() {
  isFirstShowMenu = true
  message.info('clickoutside')
  open.value = false
}

function handelCtrlList(item, nameCodeTypeMap) {
  {
    let name = item.innerHTML
    let editor = nowEditor
    const nowSelectCodeTypeInner = nameCodeTypeMap.get(name)
    //点击事件
    item.parentElement.addEventListener('click', (e) => {
      getCtrFunc(editor)
    })
    // hover 弹出个菜单
    //     element.addEventListener('contextmenu', function(e) {
    //   e.preventDefault();
    // });
    item.parentElement.addEventListener('contextmenu', (e) => {
      open.value = false
      const func = debounce(showMenu, 200)
      func.apply(this, [e, nowSelectCodeTypeInner])
      e.preventDefault()
    })
  }
}

function getElementRightUpperXY(element) {
  const { left, top, width, height } = element.getBoundingClientRect()

  // 元素右上角x坐标
  const x = left + width

  // 元素右上角y坐标
  const y = top

  return { x, y }
}
</script>

<template>
  <!-- <button @click="open = true">Open Modal</button> -->

  <Teleport to="body">
    <div class="modal" v-show="open">
      <!-- <p>Hello from the modal!</p>
      <button @click="open = false">Close</button> -->
      <n-dropdown
        class="Ddropdown"
        placement="bottom-start"
        trigger="manual"
        :x="x"
        :y="y"
        :options="options"
        :show="open"
        :on-clickoutside="onClickoutside"
        @select="handleSelect"
      />
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  /* 添加transform x y改变时的动画 */
  transition: transform 0.3s;
  transform-origin: 0 0;
}
</style>
