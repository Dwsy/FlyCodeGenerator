<template>
  <NModal v-model:show="showModal" preset="card" title="Excel导入" style="width: 1500px" :bordered="false">
    <n-data-table :columns="columns" :data="mapPair" striped :row-key="rowKey" @update:checked-row-keys="handleCheck"
      v-if="showTable" :default-checked-row-keys="allSelect" size="small" style="height: 600px" flex-height />
    <div>
      <div style="float: right; margin-top: 25px" v-if="showTable">
        <NButton style="margin-right: 15px" @click="generateCode(true)" tertiary type="info">预览代码</NButton>

        <NButton @click="generateCode()" strong secondary type="primary">生成代码</NButton>
      </div>

      <div style="float: left; margin-top: 5px; width: 70%; margin-left: 10%">
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

  <n-modal v-model:show="showCode" preset="card" title="Flycode" style="width: 900px" :bordered="false">
    <CodePreview :fly-code="flyCode" :showCode="showCode"></CodePreview>
  </n-modal>
  <SaveProtocolWatch>
  </SaveProtocolWatch>
</template>

<script setup lang="tsx">
import { h, onMounted, ref } from "vue";
import { addButton } from "../../util";
import { read, utils } from "xlsx";
import {
  DataTableColumns,
  DataTableRowKey,
  NInput,
  NSelect,
  NSwitch,
  NText,
  UploadCustomRequestOptions,
  UploadFileInfo,
  useMessage,
} from "naive-ui";
import { watch } from "vue";
import { useFlyStore } from "../../store/flyStore";
import { Property } from "../../type/protocol";
import { Operator } from "../../type/model/queryModel";
import {
  getPropertyTypeEmoji,
  getPropertyTypeName,
  getRandomEmoji,
  getRandomEmojiByUnicode,
} from "../../type/model/propertyTypeCodeRef";
import { message } from "../../util/message";

import CodePreview from "../common/CodePreview.vue";
import { autoMapFunc, generateCodeFunc, readExcelFileFunc,MapPair } from "./index";
import SaveProtocolWatch from "../saveProtocolWatch.vue";
import { copyToClipboard } from '../../util/index';
const flyStore = useFlyStore();
const OperatorSelectOptions = ref([]);

const mapPair = ref<MapPair[]>([]);
const checkedRowKeysRef = ref<DataTableRowKey[]>([]);
const columns = createColumns();
onMounted(() => {
  addButton(
    null,
    "生成Flycode(前端导入)",
    "ideicon-share",
    () => {
      console.log("生成Flycode");
      showModalFunc();
    },
    1
  );
});
const showTable = ref(false);
const allSelect = ref([]);
const fileList = ref<Array<UploadFileInfo>>();
const showModal = ref(false);
const sheetNames = ref([]);
const columnNames = ref([]);
const Sheets = ref();
const selectSheetModal = ref();
const selectSheet = ref();
const fileData = ref<File | null>(null);
const Message = useMessage();
const showCode = ref();
const flyCode = ref();
const sheetLine = ref();
const showModalFunc = () => {
  showModal.value = !showModal.value;
};
function rowKey(row: MapPair) {
  return row.property.propertycode;
}
function handleCheck(checkedRowKeys: DataTableRowKey[]) {
  checkedRowKeysRef.value = checkedRowKeys;
  console.log(checkedRowKeysRef.value);
}
function createColumns(): DataTableColumns<MapPair> {
  getOperatorSelect();
  return [
    {
      type: "selection",
    },
    {
      title: "数据库列名",
      key: "property.name",
      resizable: true,
      width: 150,
      minWidth: 150,
    },
    {
      title: "数据类型",
      key: "property.propertytypecode",
      render(row: MapPair, index: number) {
        return h(
          <span>
            {`${getPropertyTypeName(
              row.property.propertytypecode
            )} ${getPropertyTypeEmoji(Number(row.property.propertytypecode))}`}
          </span>
        );
      },
      width: 150,
    },
    {
      title: "Excel列名",
      key: "column",
      render(row: MapPair, index: number) {
        return h(NInput, {
          value: row.column,
          onUpdateValue(v) {
            mapPair.value[index].column = v;
          },
        });
      },
    },
    {
      title: "校验反查字段(自动)",
      key: "reverseQueryField",
      width: 130,
    },
    {
      title: "校验反查字段(手动)",
      key: "property.required",
      render(row: MapPair, index: number) {
        return h(
          <NSwitch v-model:value={row.reverseQueryMannal} size="large">
          </NSwitch>
        );
      },
      width: 130,
    },

    {
      title: "反查操作符",
      key: "queryOperator",
      render(row: MapPair, index: number) {
        return h(NSelect, {
          value: row.queryOperator,
          options: OperatorSelectOptions.value,
          onUpdateValue(v) {
            mapPair.value[index].queryOperator = v;
          },
        });
      },
      width: 150,
    },
    {
      title: "必填",
      key: "property.required",
      render(row: MapPair, index: number) {
        return h(
          <NSwitch v-model:value={row.property.required} size="large">
            {{
              icon: () => (
                <>
                  {row.property.required
                    ? getRandomEmoji(index)[1]
                    : getRandomEmoji(index)[0]}
                </>
              ),
            }}
          </NSwitch>
        );
      },
      width: 100,
    },
    {
      title: "备注",
      key: "remark",
    },
  ];
}

function getOperatorSelect() {
  for (const op in Operator) {
    OperatorSelectOptions.value.push({
      label: op + ` (${Operator[op]})`,
      value: Operator[op],
    });
  }
}

const generateCode = (previewCode?: boolean) => {
  flyCode.value = generateCodeFunc(mapPair.value, checkedRowKeysRef.value);
  if (!previewCode) {
    console.log(flyCode.value)
    GM_setClipboard(flyCode.value, "text")
    message.success("生成成功!" + getRandomEmojiByUnicode());
    showModal.value = false;
  } else {
    showCode.value = true;
  }
};

watch(selectSheet, async () => {
  console.log(
    "Sheets.value[selectSheet.value]",
    Sheets.value[selectSheet.value]
  );
  const temp = utils.sheet_to_json(Sheets.value[selectSheet.value]);
  sheetLine.value = temp[0];
  const keys = Object.keys(sheetLine.value);
  columnNames.value = [];
  for (const i in keys) {
    columnNames.value.push(keys[i]);
  }
  selectSheetModal.value = false;
  await autoMap(columnNames.value);
});

const autoMap = async (excelColumnName: string[]) => {
  const pair = autoMapFunc(excelColumnName, sheetLine.value);

  allSelect.value = pair.allSelect;
  mapPair.value = pair.tempMapPair;
  checkedRowKeysRef.value = allSelect.value;
  showTable.value = true;
  debugger
};

/**
 * 读取 Excel 文件
 * @param {File} file - 要读取的 Excel 文件
 */
function readExcelFile(file: File) {
  readExcelFileFunc(file).then((data: any) => {
    console.log(data);
    console.log("readExcelFileFunc");
    sheetNames.value = data.sheetNames;
    Sheets.value = data.Sheets;
    Message.success("解析成功");
    selectSheetModal.value = true;
  });
}


function GM_setClipboard(value: any, arg1: string) {
throw new Error("Function not implemented.");
}
</script>

<style></style>
