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
          :row-class-name="rowClassName"
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
import { copyToClipboard, getPrimaryKey, levenshteinDistance } from '../../util'
import { EntityRowData, EntityRowData2QueryModel } from '.'
import { generateSql } from '../queryGenerator'
import { message } from '../../util/message'
import { getMonacoModel, monacoInitializedUtil } from '../../util/monacoUtil'
import { RowData } from 'naive-ui/es/data-table/src/interface'
import { tableData } from '../../type/interface columnData'

const EntityRowDatas = ref<EntityRowData[]>([])
const rowKey = (row: EntityRowData) => {
  // return row.name + ' ' + row.this.propertycategorycode + ' ' + row.level
  return row.key + '|' + row.this.propertycode + '|' + row.level
}

const checkedRowKeysRef = ref<DataTableRowKey[]>([])
const handleCheck = (row: DataTableRowKey[]) => {
  checkedRowKeysRef.value = row
  console.table(row)
  // if(value.length==0){
  //   EntityRowDatas.value.forEach((row) => {
  //     row.select = false
  //   })
  // }
}
const showModal = ref(false)
const columns = createColumns()
const flyStore = useFlyStore()
const mainTableData = ref<tableData>(null)
const tableName = ref('')
//@ts-ignore
window.customGenSql = (tname: string) => {
  checkedRowKeysRef.value = []
  EntityRowDatas.value = []
  tableName.value = tname
  showModal.value = true
  mainTableData.value = flyStore.tableNameDataMap.get(tableName.value)
  if (!mainTableData) {
    mainTableData.value = flyStore.dictNameDataMap.get(tableName.value)
  }
  if (!mainTableData) {
    message.warning('未找到表或字典')
    return
  }
  mainTableData.value.properties.forEach((property) => {
    const temp = flyStore.tableDataMap.get(property.relationobjectcode)
    const row = {
      key: property.columnname,
      name: `${property.columnname} ${property.propertyname}`,
      type: getPropertyTypeName(property.propertytypecode) + getPropertyTypeEmoji(Number(property.propertytypecode)),
      comment: property.propertydescr,
      relationobj: temp,
      this: property,
      joinField: temp ? getPrimaryKey(temp.objectcode) : '',
      relationQueryFieldNames: [],
      select: false,
      query: false,
      level: 1,
      children: []
    }
    if (Number(row.this.propertytypecode) == PropertyTypeCode.DictionaryObject) {
      row.relationQueryFieldNames.push('dicvalue')
    }
    EntityRowDatas.value.push(row)
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
  // monaco.languages.registerCodeActionProvider('flycode', {
  //   provideCodeActions(, range, context, token)
  // })
  monaco.editor.onDidCreateEditor(async (editor) => {
    nowEditor = editor
    editor.updateOptions({
      fontFamily: 'Cascadia Code PL',
      // fontSize: 14
      // formatOnPaste: true,
      fixedOverflowWidgets: true,
      cursorBlinking: 'smooth',
      mouseWheelZoom: true,
      cursorSmoothCaretAnimation: 'on',

      fontLigatures: true,
      // fontVariations: true,
      smoothScrolling: true,
      wordWrap: 'on',
      wordWrapColumn: 100,
      wrappingIndent: 'indent',
      wrappingStrategy: 'advanced',
      renderValidationDecorations: 'editable',
      suggest: {
        // showStatusBar: true,
        shareSuggestSelections: true,
        preview: true,
        showInlineDetails: true,
        showFunctions: true,
        matchOnWordStartOnly: false
        // showSnippets: true
      },
      inlineSuggest: {
        // enabled: true,
        // showToolbar: 'onHover'
      }
    })
    console.log('nowEditor', nowEditor)
  })
})

// })
const genSql = () => {
  checkedRowKeysRef.value.forEach((key) => {
    // let [column, zhName,level] = key.toString().split(' ')
    let row = findRowByKey(EntityRowDatas.value, key)

    function findRowByKey(rows: EntityRowData[], key: DataTableRowKey) {
      for (let row of rows) {
        if (rowKey(row) === key) {
          return row
        }
        if (row.children) {
          let foundRow = findRowByKey(row.children, key)
          if (foundRow) {
            return foundRow
          }
        }
      }
      return null
    }
    if (row) row.select = true
  })
  const sql = generateSql(EntityRowData2QueryModel(mainTableData.value, EntityRowDatas.value))
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
  // showModal.value = false
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
  if (!mainTableData.value) return ''
  return `SQL生成配置：${mainTableData.value.tablename}`
})

const rowClassName = (row: EntityRowData) => {
  if (row.relationobj) {
    return 'relationobj' + row.level
  }
  // return
}

const autoSelect = ref(false)
function createColumns(): DataTableColumns<EntityRowData> {
  return [
    {
      type: 'selection'
    },
    {
      title: '层级',
      key: 'level',
      width: 80,
      render: (row: EntityRowData) => {
        return `${' '.repeat(row.level - 1)}[${row.level}]`
      }
    },
    {
      title: '字段名',
      key: 'name',
      width: 150
    },
    {
      title: '类型',
      key: 'type',
      width: 70
    },

    {
      title: '关联对象',
      key: 'relationobj',
      width: 100,
      render: (row: EntityRowData) => {
        if (!row.relationobj) return ''
        return row.relationobj.tablename
      }
      // children:[]
    },
    {
      title: '关联对象字段',
      key: 'relationobj',
      width: 100,
      render: (row: EntityRowData) => {
        if (!row.relationobj) return ''
        // let value =getPrimaryKey(row.relationobj)
        const updateOptionsFn = (value) => {
          console.log(value)
          row.joinField = value
        }
        const options = mainTableData.value.properties.map((item) => {
          return {
            label: `${item.columnname} ${item.propertyname}`,
            value: item.columnname
          }
        })
        return h(
          <>
            <NSelect
              value={row.joinField}
              onUpdateValue={updateOptionsFn}
              onVnodeMounted={(vnode) => {}}
              filterable
              placeholder="选择关联字段"
              clearable
              options={options}
            ></NSelect>
          </>
        )
      }
    },

    {
      title: '关联查询字段',
      key: 'relationQueryFieldNames',
      width: 150,
      render: (row: EntityRowData) => {
        const updateOptionsFn = (value: string[]) => {
          row.relationQueryFieldNames = value
          let children =
            row.relationobj?.properties
              .filter((item) => value.includes(item.columnname))
              .map((item) => {
                const temp2 = flyStore.tableDataMap.get(item.relationobjectcode)
                return {
                  key: row.key + '__' + row.this.columnname,
                  name: `${item.columnname} ${item.propertyname}`,
                  type:
                    getPropertyTypeName(item.propertytypecode) + getPropertyTypeEmoji(Number(item.propertytypecode)),
                  comment: item.propertydescr,
                  relationobj: temp2,
                  this: item,
                  relationQueryFieldNames: [],
                  select: false,
                  level: row.level + 1,
                  query: false,
                  children: []
                }
              }) || []
          console.log(children)
          row.children = children
          // if (row.level == 1) {
          //   let children =
          //     row.relationobj?.properties
          //       .filter((item) => value.includes(item.columnname))
          //       .map((item) => {
          //         const temp2 = flyStore.tableDataMap.get(item.relationobjectcode)
          //         return {
          //           key: row.key + '__' + row.this.columnname,
          //           name: `${item.columnname} ${item.propertyname}`,
          //           type:
          //             getPropertyTypeName(item.propertytypecode) + getPropertyTypeEmoji(Number(item.propertytypecode)),
          //           comment: item.propertydescr,
          //           relationobj: temp2,
          //           this: item,
          //           relationQueryFieldNames: [],
          //           select: false,
          //           level: 2,
          //           query: false,
          //           children: []
          //         }
          //       }) || []
          //   console.log(children)
          //   row.children = children
          // } else if ((row.level = 2)) {
          //   let children =
          //     row.relationobj?.properties
          //       .filter((item) => value.includes(item.columnname))
          //       .map((item) => {
          //         const temp3 = flyStore.tableDataMap.get(item.relationobjectcode)
          //         return {
          //           key: row.key + '__' + row.this.columnname,
          //           name: `${item.columnname} ${item.propertyname}`,
          //           type:
          //             getPropertyTypeName(item.propertytypecode) + getPropertyTypeEmoji(Number(item.propertytypecode)),
          //           comment: item.propertydescr,
          //           relationobj: temp3,
          //           this: item,
          //           relationQueryFieldNames: [],
          //           select: false,
          //           level: 3,
          //           query: false,
          //           children: []
          //         }
          //       }) || []
          //   row.children = children
          // }

          console.log(row.relationQueryFieldNames)
        }
        if (!row.relationobj) return ''
        row.relationQueryFieldNames = row.relationQueryFieldNames || []

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
            onUpdateValue={updateOptionsFn}
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
      title: '注释',
      key: 'comment',
      width: 100
    }
  ]
}
</script>

<style scoped>
:deep(.relationobj1 td) {
  /* color: rgba(255, 0, 0, 0.75) !important; */
  /* background-color: rgba(255, 89, 89, 0.4) !important; */
  font: bold;
}
:deep(.relationobj2 td) {
  /* color: rgba(255, 0, 0, 0.75) !important; */
  /* background-color: rgba(117, 255, 86, 0.2) !important; */
  font: bold;
}
:deep(.relationobj3 td) {
  /* color: rgba(255, 0, 0, 0.75) !important; */
  /* background-color: rgba(54, 185, 255, 0.4) !important; */
  font: bold;
}
:deep(.relationobj) {
  color: rgba(0, 128, 0, 0.75) !important;
}
:deep(.too-old .age) {
  color: rgba(0, 0, 128, 0.75) !important;
}
</style>
