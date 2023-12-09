<template>
  <NModal v-model:show="showModal" preset="card" title="Excel前端导入" style="width: 1500px" :bordered="false">
    <n-data-table
      :columns="columns"
      :data="mapPair"
      striped
      :row-key="rowKey"
      @update:checked-row-keys="handleCheck"
      v-if="showTable"
      :default-checked-row-keys="allSelect"
      size="small"
      style="height: 600px"
      flex-height
    />
    <div>
      <div style="float: right; margin-top: 25px" v-if="showTable">
        <NButton style="margin-right: 15px" @click="generateCode(true)" tertiary type="info">预览代码</NButton>

        <NButton @click="generateCode()" strong secondary type="primary">生成代码</NButton>
      </div>

      <div style="float: left; margin-top: 5px; width: 70%; margin-left: 10%">
        <n-upload
          :file-list="fileList"
          title="点击或者拖动文件到该区域来上传"
          :custom-request="(options: UploadCustomRequestOptions) => {
          readExcelFile(options.file.file)
        }"
          accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        >
          <n-upload-dragger>
            <n-text style="font-size: 16px"> 点击或者拖动Excel模版文件到该区域来上传 </n-text>
          </n-upload-dragger>
        </n-upload>
      </div>
    </div>
  </NModal>

  <NModal v-model:show="selectSheetModal" preset="card" title="选择表" style="width: 400px">
    <n-select v-model:value="selectSheet" placeholder="SelectSheet" :options="sheetNames" />
  </NModal>

  <n-modal v-model:show="showCode" preset="card" title="Flycode" style="width: 900px" :bordered="false">
    <CodePreview :fly-code="flyCode" :showCode="showCode"></CodePreview>
  </n-modal>

  <NModal v-model:show="showSelectRefEntity" style="width: 550px" :bordered="false">
    <NCard>
      <NForm label-placement="left">
        <NFormItem label="">
          <NSelect
            v-model:value="selectRefEntity"
            placeholder="选择关联实体"
            filterable
            :on-update-value="
              (v) => {
                selectRefEntity = v
                // showSelectRefEntity = false
              }
            "
            :options="
              flyStore.tableDatas.map((item) => {
                return {
                  label: item.objectname + '(' + item.tablename + ')',
                  value: item.objectcode
                }
              })
            "
          />
        </NFormItem>
      </NForm>
      <NSpace justify="end">
        <NButton
          style="margin-right: 15px"
          @click="
            () => {
              showSelectRefEntity = false
              setRefEntity(selectRefEntity)
            }
          "
          type="info"
        >
          确定
        </NButton>
      </NSpace>
    </NCard>
  </NModal>
  <SaveProtocolWatch> </SaveProtocolWatch>
</template>

<script setup lang="tsx">
import { PropType, h, onMounted, ref } from 'vue'
import { addButton, levenshteinDistance } from '../../util'
import { read, utils } from 'xlsx'
import {
  DataTableColumns,
  DataTableRowKey,
  NButton,
  NInput,
  NSelect,
  NSwitch,
  NText,
  UploadCustomRequestOptions,
  UploadFileInfo,
  useMessage
} from 'naive-ui'
import { watch } from 'vue'
import { useFlyStore } from '../../store/flyStore'
import { Property } from '../../type/protocol'
import { Operator } from '../../type/model/queryModel'
import {
  PropertyTypeCode,
  getPropertyTypeEmoji,
  getPropertyTypeName,
  getRandomEmoji,
  getRandomEmojiByUnicode
} from '../../type/model/propertyTypeCodeRef'
import { message } from '../../util/message'

import CodePreview from '../common/CodePreview.vue'
import { autoMapFunc, generateCodeFunc, readExcelFileFunc, MapPair } from './index'
import SaveProtocolWatch from '../saveProtocolWatch.vue'
import { copyToClipboard } from '../../util/index'
import { GM_setClipboard } from '$'
import { FormValidationStatus } from 'naive-ui/es/form/src/interface'
// 使用FlyStore的实例
const flyStore = useFlyStore()

// 操作员选择选项的引用
const OperatorSelectOptions = ref([])

// 显示选择引用实体的引用
const showSelectRefEntity = ref(false)

// 设置引用实体的函数
let setRefEntity: Function = null

// 选择引用实体的引用
const selectRefEntity = ref()

// 映射对的引用
const mapPair = ref<MapPair[]>([])

// 已选行键的引用
const checkedRowKeysRef = ref<DataTableRowKey[]>([])

// 创建列
const columns = createColumns()

// 备注映射
let remarkMap = new Map<string, string>()

// 挂载后的钩子函数
onMounted(() => {
  // 添加按钮
  addButton(
    null,
    '生成Flycode(前端导入)',
    'ideicon-share',
    () => {
      console.log('生成Flycode')
      showModalFunc()
    },
    1
  )
})

// 显示表格的引用
const showTable = ref(false)

// 所有选择的引用
const allSelect = ref([])

// 文件列表的引用
const fileList = ref<Array<UploadFileInfo>>()

// 显示模态的引用
const showModal = ref(false)

// 工作表名称的引用
const sheetNames = ref([])

// 列名称的引用
const columnNames = ref([])

// 工作表的引用
const Sheets = ref()

// 选择工作表模态的引用
const selectSheetModal = ref()

// 选择工作表的引用
const selectSheet = ref()

// 文件数据的引用
const fileData = ref<File | null>(null)

// 使用消息的实例
const Message = useMessage()

// 显示代码的引用
const showCode = ref()

// FlyCode的引用
const flyCode = ref()

// 工作表行的引用
const sheetLine = ref()
const showModalFunc = () => {
  showModal.value = !showModal.value
}
function rowKey(row: MapPair) {
  return row.property.propertycode
}
function handleCheck(checkedRowKeys: DataTableRowKey[]) {
  checkedRowKeysRef.value = checkedRowKeys
  console.log(checkedRowKeysRef.value)
}
function createColumns(): DataTableColumns<MapPair> {
  getOperatorSelect()
  return [
    {
      type: 'selection'
    },
    {
      title: '映射名称',
      key: 'field',
      resizable: true,
      width: 160,
      minWidth: 200,
      render(row: MapPair, index: number) {
        return (
          <NInput
            value={row.field}
            onUpdateValue={(v) => {
              console.log(v)
              mapPair.value[index].field = v
            }}
            status={
              row.field == '' || row.field == null
                ? 'error'
                : mapPair.value.filter((item) => item.field === row.field).length > 1
                  ? 'error'
                  : 'success'
            }
          />
        )
      }
    },
    {
      title: '数据类型及列名',
      key: 'property.propertytypecode',
      render(row: MapPair, index: number) {
        return h(
          <div>
            <b>{`${row.property.propertyname}`}</b>
            <br></br>
            {`${getPropertyTypeName(row.property.propertytypecode)}
            ${getPropertyTypeEmoji(Number(row.property.propertytypecode))}`}
            {/* <br style={}></br> */}
            {flyStore.tableDataMap.get(flyStore.columnDataMap.get(mapPair.value[index]?.property?.propertycode)?.relationobjectcode)?.objectname}
          </div>
        )
      },
      width: 170
    },
    // {
    //   title: 'Excel列名',
    //   key: 'column',
    //   render(row: MapPair, index: number) {
    //     return h(NInput, {
    //       value: row.column,
    //       onUpdateValue(v) {
    //         mapPair.value[index].column = v
    //       }
    //     })
    //   }
    // },
    {
      title: 'Excel列名',
      key: 'column',
      render(row: MapPair, index: number) {
        return h(
          <NSelect
            value={row.column == '' ? null : row.column}
            onUpdateValue={(v) => {
              mapPair.value[index].column = v
              mapPair.value[index].remark = remarkMap.get(v)
              columnNames.value = columnNames.value.filter(() => true)
            }}
            options={columnNames.value
              .map((item) => {
                return {
                  label: item,
                  value: item,
                  disabled: mapPair.value.some((item2) => {
                    return item2.column == item
                  })
                }
              })
              .sort((a, b) => {
                // 如果 a 是非禁止的，而 b 是禁止的，那么 a 应该排在前面，返回 -1
                if (!a.disabled && b.disabled) return -1
                // 如果 a 是禁止的，而 b 是非禁止的，那么 b 应该排在前面，返回 1
                if (a.disabled && !b.disabled) return 1
                // 如果 a 和 b 都是禁止的，或者都是非禁止的，那么它们的顺序不变，返回 0
                return 0
              })}
            clearable
            filterable
            placeholder="手动选择"
          ></NSelect>
        )
      }
    },
    {
      title: '校验反查字段选择',
      key: 'reverseQueryField',
      width: 260,
      resizable: true,
      render(row: MapPair, index: number) {
        return h(
          <NSelect
            value={row.reverseQueryField}
            onUpdateValue={(v) => {
              mapPair.value[index].field = v
              mapPair.value[index].reverseQueryField = v
            }}
            status={
              (row.property.propertytypecode == PropertyTypeCode.ThisObject.toString() ||
                row.property.propertytypecode == PropertyTypeCode.BusinessObject.toString() ||
                row.property.propertytypecode == PropertyTypeCode.DictionaryObject.toString() ||
                row.property.propertytypecode == PropertyTypeCode.LongInteger.toString()) &&
              row.reverseQueryField == '---'
                ? 'error'
                : 'success'
            }
            filterable
            clearable
            disabled={
              !(
                row.property.propertytypecode == PropertyTypeCode.ThisObject.toString() ||
                row.property.propertytypecode == PropertyTypeCode.BusinessObject.toString() ||
                row.property.propertytypecode == PropertyTypeCode.DictionaryObject.toString() ||
                row.property.propertytypecode == PropertyTypeCode.LongInteger.toString()
              )
            }
            options={flyStore.tableDataMap
              .get(flyStore.columnDataMap.get(mapPair.value[index].property.propertycode).relationobjectcode)
              ?.properties?.map((item) => {
                if (item.propertyname == row.column) {
                  //自动选择
                  row.field = item.columnname
                  row.reverseQueryField = item.columnname
                }
                return {
                  label: item.propertyname + `\n(${item.columnname})`,
                  value: item.columnname,
                  class: item.propertyname
                }
              })
              .sort((a, b) => {
                const aDistance = levenshteinDistance(a.class, row.column)
                const bDistance = levenshteinDistance(b.class, row.column)
                return aDistance - bDistance // 按照相似度排序，最相似的在上面
              })}
          ></NSelect>
        )
      }
    },
    {
      title: '手动选择关联实体',
      key: 'manual',
      render(row: MapPair, index: number) {
        return h(
          <NButton
            type={row.property.propertytypecode == PropertyTypeCode.LongInteger.toString() ? 'primary' : 'default'}
            onClick={() => {
              selectRefEntity.value = null
              setRefEntity = (objectcode: string) => {
                const propertycode = mapPair.value[index].property.propertycode
                const column = flyStore.columnDataMap.get(propertycode)
                column.relationobjectcode = objectcode
                row.reverseQueryMannal = true
                row.reverseQueryField = `重新手动关联✋🏻`
              }
              showSelectRefEntity.value = true
            }}
            disabled={!(row.property.propertytypecode == PropertyTypeCode.LongInteger.toString())}
          >
            选择关联实体{}
          </NButton>
        )
      }
    },
    // {
    //   title: '校验反查字段名称',
    //   key: 'property.reverseQueryField',
    //   render(row: MapPair, index: number) {
    //     return h(<NText>{row.reverseQueryField}</NText>)
    //   },
    //   width: 160
    // },

    {
      title: '反查操作符',
      key: 'queryOperator',
      render(row: MapPair, index: number) {
        return h(NSelect, {
          value: row.queryOperator,
          options: OperatorSelectOptions.value,
          onUpdateValue(v) {
            mapPair.value[index].queryOperator = v
          },
          filterable: true
        })
      },
      width: 150
    },
    {
      title: '必填',
      key: 'property.required',
      render(row: MapPair, index: number) {
        return h(
          <NSwitch v-model:value={row.property.required} size="large">
            {{
              icon: () => <>{row.property.required ? getRandomEmoji(index)[1] : getRandomEmoji(index)[0]}</>
            }}
          </NSwitch>
        )
      },
      width: 100
    },
    {
      title: '备注',
      key: 'remark',
      render(row: MapPair, index: number) {
        return h(
          <div>
            {row.property.required ? (
              <span style="color: red; font-weight: bold;">{row.remark}</span>
            ) : row.remark == '未匹配列' ? (
              <span style="color: #ba79b1; font-weight: bold;">{row.remark}</span>
            ) : (
              row.remark
            )}
          </div>
        )
      }
    }
  ]
}

function getOperatorSelect() {
  for (const op in Operator) {
    OperatorSelectOptions.value.push({
      label: op + ` (${Operator[op]})`,
      value: Operator[op]
    })
  }
}

const generateCode = (previewCode?: boolean) => {
  flyCode.value = generateCodeFunc(mapPair.value, checkedRowKeysRef.value)
  if (!previewCode) {
    console.log(flyCode.value)
    GM_setClipboard(flyCode.value, 'text')
    message.success('生成成功!' + getRandomEmojiByUnicode())
    showModal.value = false
  } else {
    showCode.value = true
  }
}

/**
 * 监听 selectSheet 的变化，当其变化时，执行以下操作：
 * 1. 打印当前选中的表格
 * 2. 将选中的表格转换为 JSON 格式
 * 3. 获取表格的第一行数据，并将其作为列名
 * 4. 将列名存储在 columnNames 中
 * 5. 关闭选择表格的模态框
 * 6. 自动映射列名
 */
watch(selectSheet, async () => {
  console.log('Sheets.value[selectSheet.value]', Sheets.value[selectSheet.value])
  const temp = utils.sheet_to_json(Sheets.value[selectSheet.value])
  sheetLine.value = temp[0]
  const keys = Object.keys(sheetLine.value)
  columnNames.value = []
  for (const i in keys) {
    columnNames.value.push(keys[i])
  }
  selectSheetModal.value = false
  await autoMap(columnNames.value)
})

/**
 * 自动映射函数
 * @param {string[]} excelColumnName - Excel 列名数组
 * 该函数会根据传入的列名数组，自动映射并设置相关的值
 */
const autoMap = async (excelColumnName: string[]) => {
  const pair = autoMapFunc(excelColumnName, sheetLine.value)
  remarkMap = pair.remarkMap
  allSelect.value = pair.allSelect
  mapPair.value = pair.tempMapPair
  checkedRowKeysRef.value = allSelect.value
  showTable.value = true
  // debugger
}

/**
 * 读取 Excel 文件函数
 * @param {File} file - 要读取的 Excel 文件
 * 该函数会读取传入的 Excel 文件，并将其解析为可用的数据格式
 */
function readExcelFile(file: File) {
  readExcelFileFunc(file).then((data: any) => {
    console.log(data)
    console.log('readExcelFileFunc')
    sheetNames.value = data.sheetNames
    Sheets.value = data.Sheets
    Message.success('解析成功')
    selectSheetModal.value = true
  })
}
</script>

<style></style>
