<template>
  <div>
    <n-modal v-model:show="showModal" preset="card" title="Flycode生成配置" style="width: 800px" :bordered="false">
      <n-card>
        <n-tabs type="line" animated size="large">
          <n-tab-pane name="xslcolBind" tab="数据绑定">
            <n-data-table
              :columns="columns"
              :data="rowData"
              striped
              :row-key="rowKey"
              @update:checked-row-keys="handleCheck"
              style="height: 500px"
              flex-height
            />
          </n-tab-pane>
          <n-tab-pane name="validationConfig" tab="校验配置">
            <div></div>
          </n-tab-pane>
          <n-tab-pane name="L" tab="L"> </n-tab-pane>
        </n-tabs>
        <div style="float: right; margin-top: 15px">
          <NButton style="margin-right: 15px" @click="previewCode" tertiary type="info">预览代码</NButton>

          <NButton @click="codeGenerator()" strong secondary type="primary">生成代码</NButton>
        </div>
      </n-card>
    </n-modal>
    <n-modal v-model:show="showCode" preset="card" title="Flycode" style="width: 900px" :bordered="false">
      <CodePreview :fly-code="flyCode" :showCode="showCode"></CodePreview>
    </n-modal>
    <SaveProtocolWatch> </SaveProtocolWatch>
  </div>
</template>

<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import { addButton } from '../../util'
import { useFlyStore } from '../../store/flyStore'
import { Input, Property } from '../../type/protocol'
import { Bind, excelExportTemplate } from '../../data/excelExportTemplate'
import CodePreview from '../common/CodePreview.vue'
import { DataTableColumns, DataTableRowKey, NButton, NInput } from 'naive-ui'
import { format as prettyFormat } from 'pretty-format' // ES2015 modules
import { genQueryModel, generateSql, init } from '../queryGenerator'
import { GM_setClipboard } from '$'
import { message } from '../../util/message'
import { getRandomEmojiByUnicode } from '../../type/model/propertyTypeCodeRef'
import SaveProtocolWatch from '../saveProtocolWatch.vue'
const showModal = ref()
const showCode = ref()
const flyCode = ref('')
const flyStore = useFlyStore()
const checkedRowKeysRef = ref<DataTableRowKey[]>([])
const rowData = ref<Bind[]>()
const columns = createColumns({
  play(row) {
    console.log(row)
  }
})

onMounted(() => {
  addButton(
    null,
    '生成Flycode',
    'ideicon-share',
    () => {
      console.log('生成Flycode')
      showModalFunc()
    },
    1
  )

  rowData.value = flyStore.protocol.output[0].properties.map((property: Property) => {
    return {
      field: property.name,
      column: property.propertyname,
      propertycode: property.propertycode
    } as Bind
  })
})

const showModalFunc = () => {
  showModal.value = !showModal.value
}
function rowKey(row: Bind) {
  return row.propertycode
}
function handleCheck(checkedRowKeys: DataTableRowKey[]) {
  checkedRowKeysRef.value = checkedRowKeys
}
function createColumns({ play }: { play: (row: Bind) => void }): DataTableColumns<Bind> {
  return [
    {
      type: 'selection'
    },
    {
      title: 'field',
      key: 'field',
      resizable: true
    },
    {
      title: 'column',
      key: 'column',
      render(row: { column: any }, index: string | number) {
        return h(NInput, {
          value: row.column,
          onUpdateValue(v) {
            rowData.value[index].column = v
          }
        })
      }
    }
  ]
}

/**
 * 代码生成器函数
 *
 * @param {boolean} preview - 可选参数，如果为true，则只预览生成的代码，不会复制到剪贴板
 *
 * 这个函数首先会从rowData中筛选出被选中的行，然后生成一个包含这些行的数组。
 * 然后，它会初始化一些变量，并生成一个SQL查询语句。
 * 最后，它会将生成的代码复制到剪贴板，并显示一个成功消息。
 * 如果preview参数为true，则只会返回生成的代码，不会复制到剪贴板。
 *
 * @returns {string} 生成的代码
 */
const codeGenerator = (preview?: boolean): string => {
  console.log(checkedRowKeysRef.value)
  const bindDataArray = rowData.value.filter((data) => checkedRowKeysRef.value.includes(data.propertycode))

  let code = `var _xlscolBind = ${JSON.stringify(bindDataArray, null, 4)}\n`
  init()
  const fquery = generateSql(genQueryModel(flyStore.protocol.output))
  code = code.concat(`var temp = ${fquery}`)
  code = code.concat(`\nOUT.xlsdata = temp`)
  // excelExportTemplet.xlscolBind =checkedRowKeysRef.value
  console.log(code)
  if (!preview) {
    GM_setClipboard(code, 'text')
    message.success('代码生成成功' + getRandomEmojiByUnicode())
    showModal.value = !showModal.value
  }
  //todo 字典以及系统对象自动获取关联查询值
  return code
}

const previewCode = () => {
  showCode.value = true
  flyCode.value = codeGenerator(true)
}
</script>

<style></style>
