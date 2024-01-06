<template>
  <div v-if="goToSymbolResults">
    <Teleport to=".tree-container">
      <div class="fly-outline">
        <div class="outline1"><span class="outline2">大纲</span></div>

        <!-- <NText style="margin-left: 1%" class="title">大纲</NText> -->
        <n-input-group>
          <n-popselect v-model:value="selectFilter" :options="selectFilterOptions" trigger="hover">
            <NButton size="small">
              <n-icon :component="FlashOutline" v-show="!selectFilter" />
              <!-- @vue-ignore -->
              <span
                v-if="selectFilter"
                class="codicon"
                :class="`codicon-symbol-${SymbolKind[selectFilter].toLocaleLowerCase()}`"
              >
              </span>
            </NButton>
          </n-popselect>
          <n-input v-model:value="pattern" placeholder="搜索" :style="{ width: '75%' }" size="small">
            <template #prefix></template
          ></n-input>
          <!-- @vue-skip -->
          <NButton size="small">
            <NIcon :component="Refresh" @click="RefreshOutline" style="transition: transform 1s"> </NIcon>
          </NButton>
        </n-input-group>

        <div class="fly-outline-tree">
          <n-tree
            block-line
            style="height: 40%"
            :show-line="true"
            :scrollbar-props="{ size: 'small', trigger: 'hover' }"
            :data="treeDataSearch"
            :pattern="pattern"
            :show-irrelevant-nodes="showIrrelevantNodes"
            :node-props="nodeProps"
            update
          >
            <template #empty>...</template></n-tree
          >
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { FlashOutline, Refresh } from '@vicons/ionicons5'
import { TreeOption, useMessage } from 'naive-ui'
import { monacoInitializedUtil } from '../../util/monacoUtil'
import { SymbolKindCodiconMap, getMonacoJavaScriptMonarch, provideDocumentSymbol, SymbolKind } from './App'
import { querySelectorPromise } from '../demo6'
import { getAllSqlRangeFn } from '../MonacoEnhance/sqlProvider'
import { useFlyStore } from '../../store/flyStore'
import { getPageCode } from '../../util'
import { provideDocumentSymbols } from '.'
import { HTMLAttributes } from 'vue'
const props = withDefaults(
  defineProps<{
    pagecode: string
  }>(),
  {
    pagecode: null
  }
)

const selectFilter = ref('')

const selectFilterOptions = reactive([
  { key: 'all', value: '', label: '全部' },
  { key: 'sql', value: 23, label: 'Query' },
  { key: 'function', value: 11, label: '函数' },
  { key: 'var', value: 12, label: '变量' },
  { key: 'method', value: 5, label: '方法' },
  { key: 'property', value: 6, label: '属性' }
])
const showIrrelevantNodes = ref(false)
const treeData = ref<TreeOption[]>()
const treeDataSearch = ref<TreeOption[]>()
const pattern = ref('')
// PropType<(pattern: string, node: TreeOption) => boolean>;
// const filter = (pattern: string, node: TreeOption) => {
//   //@ts-ignore
//   // return node.this.kind == selectFilter.value
//   if (selectFilter.value == '') {
//     return true
//   }
//   //@ts-ignore
//   return node.this.kind == selectFilter.value && node.this.name.indexOf(pattern) > -1
// }
const flyStore = useFlyStore()
watch(
  selectFilter,
  (v) => {
    console.log('selectFilter', v)
    if (v) {
      treeDataSearch.value = treeData.value.filter((item) => {
        //@ts-ignore
        return item.this.kind == v
      })
    } else {
    }
  },
  {
    // immediate: true
  }
)

const defaultExpandedKeys = ref([])
const goToSymbolResults = ref<Boolean | Element>(false)
const r = ref(false)
const message = useMessage()
const IEditor = ref<monaco.editor.IEditor>(null)
const nodeProps = ({ option }: { option: TreeOption }) => {
  const nodeProps = {
    onClick() {
      //@ts-ignore
      // message.info('[Click] ' + option.this.name)
      // debugger

      //@ts-ignore
      const position = new monaco.Position(option.this.range.startLineNumber, option.this.range.startColumn)
      // IEditor.value.setPosition(position)
      const editor = toRaw(IEditor.value)
      //@ts-ignore
      // const editor = noweditor
      // const editor = flyStore.monacoEditorMap.get(getPageCode())
      debugger
      editor.focus()
      editor.setPosition(position)
      //@ts-ignore
      const revealPosition = new monaco.Position(option.this.range.startLineNumber, option.this.range.startColumn)
      editor.revealPositionInCenterIfOutsideViewport(revealPosition)
    }
    // onContextmenu (e: MouseEvent): void {
    //   optionsRef.value = [option]
    //   showDropdownRef.value = true
    //   xRef.value = e.clientX
    //   yRef.value = e.clientY
    //   console.log(e.clientX, e.clientY)
    //   e.preventDefault()
    // }
  }
  return nodeProps
}
onUnmounted(() => {
  console.log('onUnmounted goToSymbolResults')

  if (goToSymbolResults.value) {
    //@ts-ignore
    goToSymbolResults.value.remove()
  }
})
let enableOutline: Function = () => {}
let RefreshOutline: Function = () => {}
monacoInitializedUtil.onInitialized(() => {
  enableOutline = (e) => {
    setTimeout(() => {
      querySelectorPromise('.tree-container', 5000, 500).then((Element) => {
        console.log('goToSymbolResults', Element)
        //@ts-ignore
        goToSymbolResults.value = Element
      })
    }, 50)
    debugger
    IEditor.value = e
    RefreshOutline = async () => {
      treeData.value = await provideDocumentSymbols(e.getModel(), null)
      treeDataSearch.value = treeData.value
      console.log('RefreshOutline')
    }
    RefreshOutline()
    // monaco.languages.registerDocumentSymbolProvider('javascript', {
    //   provideDocumentSymbols
    // })
  }
})
onMounted(async () => {
  console.log('goToSymbolResults onMounted')
  await nextTick()
  const pageCode = props.pagecode
  flyStore.waitMonacoEditorCallback(pageCode, (e) => {
    debugger
    IEditor.value = e
    enableOutline(e)
  })
})
// watchEffect(async () => {
//   if (flyStore.codeGeneratorInitStatus) {
//     setTimeout(async () => {
//       goToSymbolResults.value = false
//       await nextTick()
//       const pageCode = getPageCode()
//       flyStore.waitMonacoEditorCallback(pageCode, (e) => {
//         debugger
//         IEditor.value = e
//         enableOutline(e)
//       })
//     }, 1)
//     //todo
//   }
// })
</script>
<style>
#beSetting > div.left-side > div > div.tree-container > ul {
  height: 35vh !important;
  overflow-y: auto;
}
.fly-outline {
  height: 100%;
  /* max-height: 50% !important; */
}
.fly-outline-tree {
  max-height: 45vh !important;
  overflow-y: auto;
  overflow-x: hidden;
}
.object-tree-container .tree-container {
  height: 100%;
  overflow: hidden !important;
}

.outline1 {
  box-sizing: border-box;
  padding-left: 12px;
  font-weight: 500;
  line-height: 38px;
  margin: 0px 4px;
  border-bottom: 1px solid #3f4042;
  color: #969799;
}

.outline2 {
  box-sizing: border-box;
}

.monaco-editor .codicon.codicon-symbol-array,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-array {
  color: var(--vscode-symbolIcon-arrayForeground);
}

.monaco-editor .codicon.codicon-symbol-boolean,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-boolean {
  color: var(--vscode-symbolIcon-booleanForeground);
}

.monaco-editor .codicon.codicon-symbol-class,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-class {
  color: var(--vscode-symbolIcon-classForeground);
}

.monaco-editor .codicon.codicon-symbol-method,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-method {
  color: var(--vscode-symbolIcon-methodForeground);
}

.monaco-editor .codicon.codicon-symbol-color,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-color {
  color: var(--vscode-symbolIcon-colorForeground);
}

.monaco-editor .codicon.codicon-symbol-constant,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-constant {
  color: var(--vscode-symbolIcon-constantForeground);
}

.monaco-editor .codicon.codicon-symbol-constructor,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-constructor {
  color: var(--vscode-symbolIcon-constructorForeground);
}

.monaco-editor .codicon.codicon-symbol-enum,
.monaco-editor .codicon.codicon-symbol-value,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-enum,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-value {
  color: var(--vscode-symbolIcon-enumeratorForeground);
}

.monaco-editor .codicon.codicon-symbol-enum-member,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-enum-member {
  color: var(--vscode-symbolIcon-enumeratorMemberForeground);
}

.monaco-editor .codicon.codicon-symbol-event,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-event {
  color: var(--vscode-symbolIcon-eventForeground);
}

.monaco-editor .codicon.codicon-symbol-field,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-field {
  color: var(--vscode-symbolIcon-fieldForeground);
}

.monaco-editor .codicon.codicon-symbol-file,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-file {
  color: var(--vscode-symbolIcon-fileForeground);
}

.monaco-editor .codicon.codicon-symbol-folder,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-folder {
  color: var(--vscode-symbolIcon-folderForeground);
}

.monaco-editor .codicon.codicon-symbol-function,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-function {
  color: var(--vscode-symbolIcon-functionForeground);
}

.monaco-editor .codicon.codicon-symbol-interface,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-interface {
  color: var(--vscode-symbolIcon-interfaceForeground);
}

.monaco-editor .codicon.codicon-symbol-key,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-key {
  color: var(--vscode-symbolIcon-keyForeground);
}

.monaco-editor .codicon.codicon-symbol-keyword,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-keyword {
  color: var(--vscode-symbolIcon-keywordForeground);
}

.monaco-editor .codicon.codicon-symbol-module,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-module {
  color: var(--vscode-symbolIcon-moduleForeground);
}

.monaco-editor .codicon.codicon-symbol-namespace,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-namespace {
  color: var(--vscode-symbolIcon-namespaceForeground);
}

.monaco-editor .codicon.codicon-symbol-null,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-null {
  color: var(--vscode-symbolIcon-nullForeground);
}

.monaco-editor .codicon.codicon-symbol-number,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-number {
  color: var(--vscode-symbolIcon-numberForeground);
}

.monaco-editor .codicon.codicon-symbol-object,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-object {
  color: var(--vscode-symbolIcon-objectForeground);
}

.monaco-editor .codicon.codicon-symbol-operator,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-operator {
  color: var(--vscode-symbolIcon-operatorForeground);
}

.monaco-editor .codicon.codicon-symbol-package,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-package {
  color: var(--vscode-symbolIcon-packageForeground);
}

.monaco-editor .codicon.codicon-symbol-property,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-property {
  color: var(--vscode-symbolIcon-propertyForeground);
}

.monaco-editor .codicon.codicon-symbol-reference,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-reference {
  color: var(--vscode-symbolIcon-referenceForeground);
}

.monaco-editor .codicon.codicon-symbol-snippet,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-snippet {
  color: var(--vscode-symbolIcon-snippetForeground);
}

.monaco-editor .codicon.codicon-symbol-string,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-string {
  color: var(--vscode-symbolIcon-stringForeground);
}

.monaco-editor .codicon.codicon-symbol-struct,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-struct {
  color: var(--vscode-symbolIcon-structForeground);
}

.monaco-editor .codicon.codicon-symbol-text,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-text {
  color: var(--vscode-symbolIcon-textForeground);
}

.monaco-editor .codicon.codicon-symbol-type-parameter,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-type-parameter {
  color: var(--vscode-symbolIcon-typeParameterForeground);
}

div > span.n-tree-node-content > div.n-tree-node-content__prefix > span {
  color: red;
}
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-variable {
  color: chocolate;
}
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span .codicon.codicon-symbol-type-variable {
  color: red;
}
span.n-tree-node-content > div.n-tree-node-content__prefix > span .codicon-symbol-type-variable {
  color: red;
  /* 你可以把 red 替换成你想要的任何颜色值 */
}
.monaco-editor .codicon.codicon-symbol-unit,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-unit {
  color: var(--vscode-symbolIcon-unitForeground);
}

.monaco-editor .codicon.codicon-symbol-variable,
div > span.n-tree-node-content > div.n-tree-node-content__prefix > span.codicon.codicon-symbol-variable {
  color: var(--vscode-symbolIcon-variableForeground);
}

body {
  --vscode-symbolIcon-arrayForeground: #cccccc;
  --vscode-symbolIcon-booleanForeground: #cccccc;
  --vscode-symbolIcon-classForeground: #ee9d28;
  --vscode-symbolIcon-colorForeground: #cccccc;
  --vscode-symbolIcon-constantForeground: #cccccc;
  --vscode-symbolIcon-constructorForeground: #b180d7;
  --vscode-symbolIcon-enumeratorForeground: #ee9d28;
  --vscode-symbolIcon-enumeratorMemberForeground: #75beff;
  --vscode-symbolIcon-eventForeground: #ee9d28;
  --vscode-symbolIcon-fieldForeground: #75beff;
  --vscode-symbolIcon-fileForeground: #cccccc;
  --vscode-symbolIcon-folderForeground: #cccccc;
  --vscode-symbolIcon-functionForeground: #b180d7;
  --vscode-symbolIcon-interfaceForeground: #75beff;
  --vscode-symbolIcon-keyForeground: #cccccc;
  --vscode-symbolIcon-keywordForeground: #cccccc;
  --vscode-symbolIcon-methodForeground: #b180d7;
  --vscode-symbolIcon-moduleForeground: #cccccc;
  --vscode-symbolIcon-namespaceForeground: #cccccc;
  --vscode-symbolIcon-nullForeground: #cccccc;
  --vscode-symbolIcon-numberForeground: #cccccc;
  --vscode-symbolIcon-objectForeground: #cccccc;
  --vscode-symbolIcon-operatorForeground: #cccccc;
  --vscode-symbolIcon-packageForeground: #cccccc;
  --vscode-symbolIcon-propertyForeground: #cccccc;
  --vscode-symbolIcon-referenceForeground: #cccccc;
  --vscode-symbolIcon-snippetForeground: #cccccc;
  --vscode-symbolIcon-stringForeground: #cccccc;
  --vscode-symbolIcon-structForeground: #cccccc;
  --vscode-symbolIcon-textForeground: #cccccc;
  --vscode-symbolIcon-typeParameterForeground: #cccccc;
  --vscode-symbolIcon-unitForeground: #cccccc;
  --vscode-symbolIcon-variableForeground: #75beff;
}
</style>
