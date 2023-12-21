import { NButton, NCard, NInput, NModal, NSpace } from 'naive-ui'
import { getUiProtocol } from '../../dataRequest'
import { UiProtocol } from '../../type/formProtocol'
import CodePreviewVue from '../common/CodePreview.vue'
import { copyToClipboard } from '../../util'
import { defineComponent, FunctionalComponent } from 'vue'
import { message } from '../../util/message'
export const generateTemporaryCode: FunctionalComponent<{ showModel: boolean }> = (props, ctx) => {
  {
    const submitcode1 = ref('')
    const showCode = ref(false)
    const code = ref('')
    const showModel = props.showModel

    const genTemporaryCode = async (submitcode: string) => {
      submitcode = submitcode || submitcode1.value
      const Obj = {}
      const UiProtocolData: UiProtocol = (await getUiProtocol())?.resp_data
      if (!UiProtocolData) {
        return
      }
      const genCode = await genCodeInit()
      genCode.load(UiProtocolData)

      const PageGetArrayCtrlTemplae = `const table = Page.getArrayCtrl({{tablename}})`
      // console.log(genCode.codeTypeMap)
      let submit: any
      submit = genCode.codeTypeMap.get(submitcode)
      submit.actions[0].getter.forEach((item) => {
        item.properties.forEach((property) => {
          const ctrl = genCode.codeTypeMap.get(property.ctrl.code)
          if (ctrl && Object.hasOwn(ctrl, 'name')) {
            Obj[property.name] = `$%table.getCtrl('${ctrl.name}').value$%`
          }
        })
      })

      const codeStr = JSON.stringify(Obj, null, 4).replaceAll(`"$%`, '').replaceAll(`$%"`, '')

      code.value = codeStr
      showCode.value = true
      copyToClipboard(codeStr)
      console.log(codeStr)
      message.info('生成成功')
    }
    //@ts-ignore
    window.genTemporaryCode = genTemporaryCode
    return (
      <>
        <NModal show={showModel} title={'gen'} style={{ width: '300px' }} closable closeOnEsc>
          <NCard>
            <NInput
              v-model={submitcode1}
              onUpdate:value={(val) => (submitcode1.value = val)}
              placeholder="请输入要生成的提交事件代码"
            />
            <NSpace justify="end">
              <NButton
                onClick={() => {
                  genTemporaryCode(null)
                }}
              >
                genCode
              </NButton>
            </NSpace>
          </NCard>
        </NModal>

        <NModal show={showCode.value} title={'gen'}>
          <CodePreviewVue flyCode={code.value}></CodePreviewVue>
        </NModal>
      </>
    )
  }
}

// test()
export const genCodeInit = async () => {
  type CodeType = {
    code: string
    name: string
    type: string
  }
  const nameTypeMap = new Map<string, CodeType>()
  const codeTypeMap = new Map<string, CodeType>()
  const nameObjMap = new Map<string, string>()
  var load = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object') {
        load(obj[key])
      } else {
        nameObjMap.set(obj[key], obj)
        if (key == 'name') {
          codeTypeMap.set(obj.code, obj)
          nameTypeMap.set(obj[key], {
            code: obj.code || '',
            name: obj.name || '',
            type: obj.type || ''
          })
        }
      }
    })
  }

  return {
    nameObjMap: nameObjMap,
    codeTypeMap: codeTypeMap,
    nameTypeMap: nameTypeMap,
    load: load
  }
}
