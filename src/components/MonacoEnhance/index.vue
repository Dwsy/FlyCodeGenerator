<template>
  <div class=""></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMonacoModel, monacoInitializedUtil } from '../../util/monacoUtil'
import { useFlyStore } from '../../store/flyStore'
import { el, it } from 'date-fns/locale'
import { PropertyTypeCode } from '../../type/model/propertyTypeCodeRef'
import { useGenStore } from '../../store/genStore'
import { pushTempBoNewDtsList } from '../../flycodeDts'
import { addAutoAutoAutoAutoAuto, addBoNewAction } from './index'
import { applyCustomFlycode, MonarchTokensProvider, LanguageConfiguration } from './monaco.languages.conf'
import { getUiProtocol } from '../../dataRequest'
import { UiProtocol } from '../../type/formProtocol'
onMounted(() => {
  //@ts-ignore
  window.MonarchTokensProvider = MonarchTokensProvider
  //@ts-ignore
  window.LanguageConfiguration = LanguageConfiguration
  //@ts-ignore
  window.apply = applyCustomFlycode
  // @ts-ignore
  window.getMonacoModel0 = getMonacoModel
  monacoInitializedUtil.addInitializedCallback(async () => {
    monaco.editor.onDidCreateEditor(async (editor) => {
      if (window.location.href.indexOf('modeledit') > -1) {
        addBoNewAction(editor)
        addAutoAutoAutoAutoAuto(editor)
        applyCustomFlycode()
      } else if (window.location.href.indexOf('uiedit') > -1) {
        return
        addAutoAutoAutoAutoAuto(editor)
        applyCustomFlycode()
        const UiProtocolData: UiProtocol = (await getUiProtocol())?.resp_data
        if (!UiProtocolData) {
          return
        }
        type CodeType = {
          code: string
          name: string
          type: string
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

        ctrl_list.forEach((item) => {
          //点击事件
          item.parentElement.addEventListener('click', () => {
            let name = item.innerHTML
            let CodeType = nameCodeTypeMap.get(name)
            const ArrayCtrlNameList = ['editortable', 'infotable']
            const position = editor.getPosition()
            const isArrayCtrl = ArrayCtrlNameList.includes(CodeType.type)
            const gendCode = `const ${isArrayCtrl ? 'table' : 'ctrl'}Rie = Page.get${isArrayCtrl ? 'Array' : ''}Ctrl("${CodeType.name}")`

            editor.executeEdits('source', [
              {
                range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
                text: gendCode.replace('Rie', '')
              }
            ])
            // position.clone().column += gendCode.length - 2
            const editorElement = document.querySelector(
              'div > div.overflow-guard > div.monaco-scrollable-element.editor-scrollable.vs.mac > div.lines-content.monaco-editor-background > div.view-lines.monaco-mouse-cursor-text'
            )
            const _ = (e?) => {
              //   console.log('goto editor lo', e)
              const newPosition = new monaco.Position(position.lineNumber, position.column + `const ${isArrayCtrl ? 'table' : 'ctrl'}`.length)
              editor.setPosition(newPosition)
              //   if (e.type == 'mouseover') {
              //     editorElement.removeEventListener('mouseover', _)
              //     editorElement.removeEventListener('click', _)
              //     editor.focus()
              //   } else if (e.type == 'click') {
              //   }
            }
            // editorElement.addEventListener('click', _)
            //鼠标移过去也触发这个事件然后移除
            // editorElement.addEventListener('mouseover', _)
            // 好像直接    editor.focus()就 ok；1.。
            editor.focus()
            _()
            // const newPosition = new monaco.Position(position.lineNumber, position.column + `const ${isArrayCtrl ? 'table' : 'ctrl'}`.length)
            // editor.setPosition(newPosition)
          })
          // hover 弹出个菜单事
          item.parentElement.addEventListener('mouseover', () => {})
        })
        console.log(UiProtocolData)
        console.log(nameCodeTypeMap)
      }
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
