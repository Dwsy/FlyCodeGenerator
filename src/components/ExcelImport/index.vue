<template>
    <NModal v-model:show="showModal" preset="card" title="Excel导入" style="width: 1200px" :bordered="false">
        <n-data-table :columns="columns" :data="mapPair" striped :row-key="rowKey" @update:checked-row-keys="handleCheck"
            style="height: 700px" flex-height />
        <div>
            <div style="float: right;margin-top: 25px;">

                <NButton style="margin-right: 15px;" @click="generateCode(true)" tertiary type="info">预览代码</NButton>

                <NButton @click="generateCode()" strong secondary type="primary">生成代码</NButton>
            </div>

            <div style="float: left; margin-top: 5px;width: 70%; margin-left: 10%;">
                <n-upload :file-list="fileList" title="点击或者拖动文件到该区域来上传" :custom-request="(options: UploadCustomRequestOptions) => {
                    readExcelFile(options.file.file)
                }" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                    <n-upload-dragger>

                        <n-text style="font-size: 16px">
                            点击或者拖动Excel模版文件到该区域来上传
                        </n-text>


                    </n-upload-dragger>
                </n-upload>

            </div>
        </div>
    </NModal>

    <NModal v-model:show="selectSheetModal" preset="card" title="选择表" style="width: 400px">
        <n-select v-model:value="selectSheet" placeholder="SelectSheet" :options="sheetNames" />
    </NModal>

    <n-modal v-model:show="showCode" preset="card" title="Flycode" style="width: 700px" :bordered="false">
        <CodePreview :fly-code="flyCode" :showCode="showCode"></CodePreview>
    </n-modal>
</template>

<script setup lang="ts">
import { h, onMounted, ref } from 'vue';
import { addButton, getPrimaryKey, levenshteinDistance } from '../../util';
import { read, utils } from 'xlsx';
import { DataTableColumns, DataTableRowKey, NInput, NSelect, UploadCustomRequestOptions, UploadFileInfo, useMessage } from 'naive-ui';
import { watch } from 'vue';
import clear from 'naive-ui/es/_internal/clear';
import { useFlyStore } from '../../store/flyStore';
import { Property } from '../../type/protocol';
import { Bind, excelExportTemplet } from '../../data/excelExportTemplet';
import { Operator } from '../../type/model/queryModel';
import { PropertyTypeCode, getRandomEmojiByUnicode } from '../../type/model/propertyTypeCodeRef';
import { SelectBaseOption } from 'naive-ui/es/select/src/interface';
import { message } from '../../util/message';
import { GM, GM_setClipboard } from '$';
import { excelImportTemplet } from '../../data/excelImportTemplet';
import CodePreview from '../common/CodePreview.vue'
const flyStore = useFlyStore()
const OperatorSelectOptions = ref([])
type MapPair = {
    field: string,
    column: string,
    property: Property,
    reverseQueryField?: string,
    queryOperator?: Operator
}
const mapPair = ref<MapPair[]>([])
const checkedRowKeysRef = ref<DataTableRowKey[]>([])
const columns = createColumns({
    play(row) {
        console.log(row)
    }
})
onMounted(() => {
    addButton(null, "生成Flycode", "ideicon-share", () => {
        console.log("生成Flycode");
        showModal.value = !showModal.value


    }, 1)
})
const fileList = ref<Array<UploadFileInfo>>()
const showModal = ref(false)
const sheetNames = ref([])
const columnNames = ref([])
const Sheets = ref()
const selectSheetModal = ref()
const selectSheet = ref()
const fileData = ref<File | null>(null);
const Message = useMessage()
const showCode = ref()
const flyCode = ref()

function rowKey(row: MapPair) {
    return row.property.propertycode
}
function handleCheck(checkedRowKeys: DataTableRowKey[]) {
    checkedRowKeysRef.value = checkedRowKeys
}
function createColumns({ play }: { play: (row: MapPair) => void }): DataTableColumns<MapPair> {
    getOperatorSelect()
    return [
        {
            type: 'selection',

        },
        {
            title: '数据库列名',
            key: 'property.name',
            resizable: true,
            render(row, index) {
                return h(NInput, {
                    value: row.field,
                    onUpdateValue(v) {
                        mapPair.value[index].field = v
                    }
                })
            }
        },
        {
            title: 'Excel列名',
            key: 'column',
            render(row, index) {
                return h(NInput, {
                    value: row.column,
                    onUpdateValue(v) {
                        mapPair.value[index].column = v
                    }
                })
            }
        },
        {
            title: '校验反查字段',
            key: 'reverseQueryField',
        },
        {
            title: '反查操作符',
            key: 'queryOperator',
            render(row, index) {
                return h(NSelect, {
                    value: row.queryOperator,
                    options: OperatorSelectOptions.value,
                    onUpdateValue(v) {
                        mapPair.value[index].queryOperator = v
                    }
                })
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

    let code = excelImportTemplet.head

    code = code.concat(excelImportTemplet.main)
    code = code.concat(excelImportTemplet.xlsconf)
    code = code.concat(excelImportTemplet.paramobj)
    let dataBind = excelImportTemplet.dataBind.replace("{{tableName}}", flyStore.protocol.input[0].name)
    const bindMap = () => {
        let temp = {}
        mapPair.value.forEach((mapPair) => {
            temp[`${mapPair.property.name}`] = mapPair.column
        })
        return temp
    }
    dataBind = dataBind.replace("{{bindMap}}", JSON.stringify(bindMap(), null, 4))

    code = code.concat(excelImportTemplet.validation)

    code = code.concat(excelImportTemplet.isInsertFunc)
    code = code.concat(excelImportTemplet.appendErrmsg)




    flyCode.value = code

    if (!previewCode) {
        message.success("生成成功!" + getRandomEmojiByUnicode())
        GM_setClipboard(flyCode.value, "text")
        showModal.value = false
    } else {
        showCode.value = true
    }
}

watch(selectSheet, () => {
    const temp = utils.sheet_to_json(Sheets.value[selectSheet.value])
    const keys = Object.keys(temp[0])
    columnNames.value = []
    for (const i in keys) {
        columnNames.value.push((keys[i]))
    }
    selectSheetModal.value = false
    autoMap(columnNames.value)
})

const autoMap = (excelColumnName: string[]) => {
    const temp = flyStore.protocol.input[0].properties
    temp.forEach((property) => {
        if (property.propertycode == '') {
            return
        }
        let minLeven = 9999999
        const levenMap = new Map<number, string>()
        excelColumnName.forEach((name) => {
            let tempLeven = levenshteinDistance(property.propertyname, name)
            minLeven = Math.min(tempLeven, minLeven)
            levenMap.set(tempLeven, name)
        })
        let reverseQueryField = ''
        let queryOperator = Operator.Equal
        const columnData = flyStore.columnDataMap.get(property.propertycode)
        const relationobjectcode = columnData?.relationobjectcode
        if (relationobjectcode && relationobjectcode != '') {

            const relationobject = flyStore.tableDataMap.get(relationobjectcode)
            // todo 自动反向查询 Reverse query field

            const tablename = relationobject.tablename
            if (tablename == "pl_region") {
                reverseQueryField = "regionname"
            } else if (tablename == "pl_dictionary") {
                reverseQueryField = "dicvalue"
            } else if (tablename == "pl_orgstruct") {
                reverseQueryField = "orgname"
            } else {
                const getNameField = (relationObject) => {
                    const property = relationObject.properties.find((property) => {
                        return Number(property.propertytypecode) == PropertyTypeCode.Name
                    })
                    if (property) {
                        return property.columnname
                    } else {
                        return '没找到！！！'
                    }
                }
                getNameField(relationobject)

            }
        }
        // if (property.name.indexOf("__") !== -1) {
        //     const parts = property.name.split("__");
        //     if (parts.length === 2) {

        //     }
        // } else {

        // }
        mapPair.value.push({
            field: property.name,
            column: levenMap.get(minLeven),
            property: property,
            reverseQueryField,
            queryOperator
        })
    })
    const SystemTable = [
        "pl_region",
        "pl_dictionary",
        "pl_orgstruct"
    ]
    const input = flyStore.protocol.input[0]
    // input.properties.forEach((property: Property) => {


    // })
    // mapPair.value.forEach((mapPair) => {

    // })

}

/**
 * 读取 Excel 文件
 * @param {File} file - 要读取的 Excel 文件
 */
function readExcelFile(file: File) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event: any) => {
            const data = new Uint8Array(event.target.result);
            const workbook = read(data, { type: 'array' });
            sheetNames.value = workbook.SheetNames.map((sheetName) => {
                return { label: sheetName, value: sheetName }
            })
            Sheets.value = workbook.Sheets
            Message.success('解析成功')
            selectSheetModal.value = true
        };

        reader.onerror = (event) => {
            Message.error('解析失败')
            reject(event.target.error);
        };

        reader.readAsArrayBuffer(file);
    });
}

</script>

<style></style>