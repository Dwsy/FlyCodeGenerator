<template>
  <div>
    <NModal v-model:show="showModal" preset="card" :title="title" style="width: 90%" :bordered="false">
      <NCard>
        <NDataTable
          :columns="columns"
          :data="EntityRowDatas"
          @update:checked-row-keys="handleCheck"
          :row-key="rowKey"
          size="small"
          style="height: 600px"
          striped
          flex-height
        >
        </NDataTable>
        <NButton @click="genSql"> 生成Sql </NButton>
      </NCard>
    </NModal>
  </div>
</template>

<script setup lang="tsx">
import { DataTableColumns, DataTableRowKey } from 'naive-ui/es/data-table'
import { useFlyStore } from '../../store/flyStore'
import { PropertyTypeCode, getPropertyTypeEmoji, getPropertyTypeName } from '../../type/model/propertyTypeCodeRef'
import { NSelect, NSwitch, logDark } from 'naive-ui'
import { copyToClipboard, levenshteinDistance } from '../../util'
import { EntityRowData, EntityRowData2QueryModel } from '.'
import { generateSql } from '../queryGenerator'
import { message } from '../../util/message'
import { getMonacoModel, monacoInitializedUtil } from '../../util/monacoUtil'
import { RowData } from 'naive-ui/es/data-table/src/interface'

const EntityRowDatas = ref<EntityRowData[]>([])
const rowKey = (row: RowData) => row.name

const checkedRowKeysRef = ref<DataTableRowKey[]>([])
const handleCheck = (value: DataTableRowKey[]) => {
  checkedRowKeysRef.value = value
}
const showModal = ref(false)
const columns = createColumns()
const flyStore = useFlyStore()
const tableData = ref<tableData>(null)
const tableName = ref('')
//@ts-ignore
window.customGenSql = (tname: string) => {
  checkedRowKeysRef.value = []
  EntityRowDatas.value = []
  tableName.value = tname
  showModal.value = true
  tableData.value = flyStore.tableNameDataMap.get(tableName.value)
  if (!tableData) {
    tableData.value = flyStore.dictNameDataMap.get(tableName.value)
  }
  if (!tableData) {
    message.warning('未找到表或字典')
    return
  }
  tableData.value.properties.forEach((property) => {
    EntityRowDatas.value.push({
      name: `${property.columnname} ${property.propertyname}`,
      type: getPropertyTypeName(property.propertytypecode) + getPropertyTypeEmoji(Number(property.propertytypecode)),
      comment: property.propertydescr,
      relationobj: flyStore.tableDataMap.get(property.relationobjectcode),
      this: property,
      relationQueryFieldNames: [],
      select: false
    })
  })
}

let nowEditor: monaco.editor.ICodeEditor
// onMounted(async () => {
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
    editor.updateOptions({
      fontFamily: 'Cascadia Code',
      // fontSize: 14
      formatOnPaste: true,
      fixedOverflowWidgets: true
    })
    console.log('nowEditor', nowEditor)
  })
})
// })
const genSql = () => {
  checkedRowKeysRef.value.forEach((key) => {
    const row = EntityRowDatas.value.filter((row) => row.name == key)[0]
    row.select = true
  })
  const sql = generateSql(EntityRowData2QueryModel(tableData.value, EntityRowDatas.value))
  console.log(sql)
  // copyToClipboard(sql)
  message.success('生成成功')
  const editor = nowEditor
  const position = editor.getPosition()

  editor.executeEdits('source', [
    {
      range: new monaco.Range(position.lineNumber, 1, position.lineNumber + 1, 1),
      text: ''
    }
  ])
  editor.executeEdits('source', [
    {
      range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column),
      text: sql
    }
  ])
  showModal.value = false
  const newPosition = new monaco.Position(position.lineNumber, 0)
  editor.setPosition(newPosition)
  editor.focus()
  // const _ = (e?) => {
  //   //   console.log('goto editor lo', e)
  //   const newPosition = new monaco.Position(position.lineNumber, position.column + `const ${isArrayCtrl ? 'table' : 'ctrl'}`.length)
  //   editor.setPosition(newPosition)

  // }
  // _()
}

const title = computed(() => {
  if (!tableData.value) return ''
  return `SQL生成配置：${tableData.value.tablename}`
})

function createColumns(): DataTableColumns<EntityRowData> {
  return [
    {
      type: 'selection'
    },
    {
      title: '字段名',
      key: 'name',
      width: 200
    },

    {
      title: '关联对象',
      key: 'relationobj',
      width: 100,
      render: (row) => {
        if (!row.relationobj) return ''
        return row.relationobj.tablename
      }
    },

    {
      title: '关联对象字段',
      key: 'relationQueryFieldNames',
      width: 150,
      render: (row: EntityRowData) => {
        if (!row.relationobj) return ''
        row.relationQueryFieldNames = row.relationQueryFieldNames || []

        if (Number(row.this.propertytypecode) == PropertyTypeCode.DictionaryObject) {
          // row.relationobj.properties.filter((property) => property.columnname == 'dicvalue')[0].propertycode
          row.relationQueryFieldNames.push('dicvalue')
        }
        const options = row.relationobj.properties
          .map((property) => {
            return {
              label: `${property.columnname} ${property.propertyname}`,
              value: property.columnname
            }
          })
          .sort((a, b) => {
            const aDistance = levenshteinDistance(a.value, row.this.columnname)
            const bDistance = levenshteinDistance(b.value, row.this.columnname)
            return aDistance - bDistance // 按照相似度排序，最相似的在上面
          })
        const relationQueryTypeCodes = [
          PropertyTypeCode.ThisObject.toString(),
          PropertyTypeCode.BusinessObject.toString(),
          PropertyTypeCode.DictionaryObject.toString()
          // PropertyTypeCode.LongInteger.toString()
        ]

        // if (relationQueryTypeCodes.includes(row.this.propertytypecode)) {
        // }
        // if(row.relationobj.obj)

        return h(
          <NSelect
            value={row.relationQueryFieldNames}
            multiple
            onUpdateValue={(value) => {
              row.relationQueryFieldNames = value
              console.log(row.relationQueryFieldNames)
            }}
            onVnodeMounted={(vnode) => {}}
            filterable
            placeholder="选择关联字段"
            clearable
            options={options}
          ></NSelect>
        )
      }
    },
    {
      title: '是否为查询字段',
      key: 'query',
      width: 100,
      render: (row: EntityRowData) => {
        return h(
          <>
            <NSwitch v-model:value={row.query}></NSwitch>
          </>
        )
      }
    },
    {
      title: '类型',
      key: 'type',
      width: 100
    },

    {
      title: '注释',
      key: 'comment',
      width: 100
    }
  ]
}
</script>
