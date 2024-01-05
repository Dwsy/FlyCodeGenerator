import { getBizObjectsData, getProtocol } from '../dataRequest'
import { Output, Protocol } from '../type/protocol'
import { ActionType } from '../type/actionType'
import { GeneratorName } from '../components/index'
import { RefreshExtraLib } from '../flycodeDts'
import { GM_getValue } from '../util/index'
import { monacoInitializedUtil } from '../util/monacoUtil'
import { getPropertyTypeName } from '../type/model/propertyTypeCodeRef'
import { useGenStore } from './genStore'
import { columnData, tableData } from '../type/interface columnData'

export const useFlyStore = defineStore('flyStore', () => {
  const codeGeneratorInitStatus = ref(false)
  const appMounted = ref(false)
  const waitAppMountedFn = ref<Function[]>()

  const monacoEditorMap = new Map<string, monaco.editor.IStandaloneCodeEditor>()
  const waitMonacoEditorCallbackMap = new Map<string, Function[]>()
  const waitMonacoEditorCallback = (code: string, callback: Function) => {
    if (monacoEditorMap.has(code)) {
      callback(monacoEditorMap.get(code))
    } else {
      if (!waitMonacoEditorCallbackMap.has(code)) {
        waitMonacoEditorCallbackMap.set(code, [])
      }
      waitMonacoEditorCallbackMap.get(code).push(callback)
    }
  }
  const setMonacoEditorMap = (code: string, editor: monaco.editor.IStandaloneCodeEditor) => {
    monacoEditorMap.set(code, editor)
    console.log(code, editor)

    if (waitMonacoEditorCallbackMap.has(code)) {
      waitMonacoEditorCallbackMap.get(code).forEach((callback) => {
        callback(editor)
      })
      waitMonacoEditorCallbackMap.delete(code)
    }
  }

  const ActiveGenerator = ref()
  const protocol = ref<Protocol>()
  const tableDatas = ref<tableData[]>()
  const tableDataMap = ref(new Map<string, tableData>())
  const tableNameDataMap = ref(new Map<string, tableData>())
  const dictNameDataMap = ref(new Map<string, tableData>())
  const columnDataMap = ref(new Map<string, columnData>())

  watch(appMounted, () => {
    if (appMounted.value) {
      if (waitAppMountedFn.value) {
        waitAppMountedFn.value.forEach((fn) => {
          fn()
        })
        waitAppMountedFn.value = null
      }
    }
  })
  function addWaitAppMountedFn(fn: Function) {
    if (appMounted.value) {
      fn()
    } else {
      if (!waitAppMountedFn.value) {
        waitAppMountedFn.value = []
      }
      waitAppMountedFn.value.push(fn)
    }
  }

  // const addDtsEnable = true
  // const codeGeneratorEnable = false
  const addDtsEnable = GM_getValue('addDtsEnable', false)
  const codeGeneratorEnable = GM_getValue('codeGeneratorEnable', false)

  async function init() {
    tableDatas.value = (await getBizObjectsData())?.resp_data

    // 遍历 tableDatas 数组
    tableDatas.value.forEach((data) => {
      // 将 data 对象添加到 tableDataMap 中
      tableDataMap.value.set(data.objectcode, data)
      tableNameDataMap.value.set(data.tablename, data)
      // if (data.tablename == "pl_dictionary") {
      if (data.tablename != data.objectmark) {
        //todo 暂时丢一起了
        dictNameDataMap.value.set(data.objectmark, data)
      }
      // 遍历 data.properties 数组
      data.properties.forEach((columnData) => {
        // 将 columnData 对象添加到 columnDataMap 中
        // if (columnData.propertycode = '1727161236526862417') {
        //     debugger
        // }
        if (undefined != columnDataMap.value.get(columnData.propertycode)) {
          if (data.tablename.startsWith('xxw')) {
            console.log('存在重复columnData.propertycode', columnDataMap.value.get(columnData.propertycode))
            console.log(
              '存在重复columnData.propertycode',
              columnData.propertycode,
              data.tablename,
              data.objectname,
              columnData.columnname
            )
          }
        }
        columnDataMap.value.set(columnData.propertycode, columnData)
        // if (columnData.propertycode == "1729296870011978034") {

        //     debugger
        // }
      })
    })

    if (document.URL.indexOf('modeledit') != -1 && document.URL.split('/').length == 6) {
      return await updateProtocol(100)
    }
    return 0
  }
  watch(protocol, async () => {
    // debugger
    if (protocol.value == null) {
    } else {
      console.log(` watchcprotocol`, protocol.value, appMounted.value, codeGeneratorInitStatus.value)
      if (appMounted.value) {
        console.log('re codeGeneratorInitStatus.value')
        codeGeneratorInitStatus.value = false
        await nextTick()
        refresh()
        codeGeneratorInitStatus.value = true
      } else {
        refresh()
      }
    }
  })

  async function updateProtocol(Timeout = 1000) {
    const _ = async () => {
      const r = await getProtocol()
      if (!r) {
        protocol.value = null
        console.log('可能为新增领域 等待下一次保存操作')
        // checkSaveProtocol()
        return false
      }
      protocol.value = r.resp_data

      if (addDtsEnable) {
        const genStore = useGenStore()
        genStore.tempBoNewDtsList = []
        console.log('updateProtocol')
        monacoInitializedUtil.onInitialized(() => RefreshExtraLib())
      }
      return true
    }
    if (Timeout == 0) {
      return _()
    } else {
      setTimeout(_, Timeout)
    }
  }

  const insertOrUpdateNameArray = ['新增', '修改', '编辑', '创建', '更新', '添加', '保存']
  const deletedDataNameArray = ['删除']
  const refresh = () => {
    const actionType = protocol.value.actiontype
    const actioncategory = protocol.value.actioncategory
    const Import = actionType == ActionType.Import
    const Export = actionType == ActionType.Export
    if (actionType == ActionType.ListQuery || actionType == ActionType.SingleQuery) {
      ActiveGenerator.value = GeneratorName.queryGenerator
    } else if (actionType == ActionType.DataSubmit) {
      const modellogicname = protocol.value.modellogicname
      if (deletedDataNameArray.some((name) => modellogicname.includes(name))) {
        ActiveGenerator.value = GeneratorName.deletedGenerator
      } else if (insertOrUpdateNameArray.some((name) => modellogicname.includes(name))) {
        ActiveGenerator.value = GeneratorName.dataSubmitGenerator
      }
    } else if (actionType == ActionType.BatchSubmit) {
      // todo
    } else if (Import && actioncategory == '1') {
      //Excel导入
      ActiveGenerator.value = GeneratorName.ExcelImport
    } else if (Export && actioncategory == '1') {
      //Excel导出
      ActiveGenerator.value = GeneratorName.ExcelExport
    } else if (Import && actioncategory == '6') {
      //flycode导入
      ActiveGenerator.value = GeneratorName.flycodeImport
    } else if (Export && actioncategory == '7') {
      //flycode导出
      ActiveGenerator.value = GeneratorName.flycodeExport
    }
    // debugger
    if (Import && protocol.value.modellogicname.includes('前端导入')) {
      ActiveGenerator.value = GeneratorName.ExcelFrontImport
    }
    console.log('ActiveGenerator', ActiveGenerator.value)
  }

  return {
    // data
    protocol,
    tableDatas,
    columnDataMap,
    tableDataMap,
    tableNameDataMap,
    dictNameDataMap,
    monacoEditorMap,
    // data

    setMonacoEditorMap,
    waitMonacoEditorCallback,
    // status
    appMounted,
    ActiveGenerator,
    codeGeneratorInitStatus,
    // statis
    waitAppMountedFn,

    // fuc
    init,
    updateProtocol,
    addWaitAppMountedFn,

    // fuc

    //menu
    codeGeneratorEnable,
    addDtsEnable
    //menu
  }
})
