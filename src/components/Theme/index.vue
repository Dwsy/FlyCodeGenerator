<template>
  <n-modal
    v-model:show="showChangeTheme"
    preset="card"
    title="选择主题"
    style="width: 80%; height: 60%"
    :bordered="false"
    class=""
  >
    当前主题: {{ MonacoTheme }}
    <NGrid cols="24">
      <NGi span="16">
        <div class="theme_preview" style="height: 560px; width: 100%"></div>
      </NGi>
      <NGi span="8">
        <div class="flycode-themelist">
          <n-list
            hoverable
            clickable
            @click="
              () => {
                //@ts-ignore
                // showChangeTheme = false
                MonacoTheme = 'default'
                changeTheme('default')
                //@ts-ignore
              }
            "
          >
            <n-list-item>
              <n-tag :bordered="false" type="info" size="small"> 默认</n-tag>
            </n-list-item>
          </n-list>
          <n-list
            hoverable
            clickable
            v-for="themeName in themeList"
            @click="
              () => {
                // showChangeTheme = false
                MonacoTheme = themeName
                changeTheme(themeName)
              }
            "
          >
            <n-list-item>
              <n-tag :bordered="false" type="info" size="small">
                {{ themeName }}
              </n-tag>
            </n-list-item>
          </n-list>
        </div>
      </NGi>
    </NGrid>
    <NSpace justify="end">
      <NButton @click="showChangeTheme = false" type="info" size="small">确定</NButton>
      <NButton @click="showChangeTheme = false" type="info" size="small">关闭</NButton>
    </NSpace>
  </n-modal>
</template>

<script setup lang="ts">
import { GM_getValue } from '../../util/index'
import { monacoInitializedUtil } from '../../util/monacoUtil'
import { changeTheme, themeList } from './index'

const showChangeTheme = ref(false)
const MonacoTheme = ref(GM_getValue('MonacoTheme', 'default'))
// changeTheme(MonacoTheme)
onMounted(() => {
  // @ts-ignore
  window.showChangeTheme = () => {
    showChangeTheme.value = !showChangeTheme.value
    nextTick(() => {
      setTimeout(() => {
        const preview: HTMLElement = document.querySelector('.theme_preview')
        if (preview != null) {
          debugger
          monaco.editor.create(document.querySelector('.theme_preview'), {
            value: `

FLY.log(123)


for (var i = 0; i < 10; i++) {

}

//TODO : xxx
//NOTE : xxx
//remind : xxx
//FIXME :xxx

var temp = SELECT
  po.orgid,                          // 组织
  po.orgaccountcode,                 // 组织编码
  po.orgname,                        // 组织名称
  po.status,                         // 状态
  po.orgdescr,                       // 备注
  po.createtime,                     // 创建时间
  po.updatetime,                     // 修改时间
  po.createop,                       // 创建人
  po.updateop,                       // 修改人
  po.ext_1,                          // 备用字段1
  po.ext_2,                          // 备用字段2
  po.ext_3,                          // 备用字段3
  po.ext_4,                          // 备用字段4
  po.ext_5,                          // 备用字段5
  po.ext_6                           // 备用字段6
FROM pl_org po
WHERE po.orgid =
NORULE;


`,
            language: 'flycode',
            theme: MonacoTheme.value
          })
        }
      }, 100)
    })
  }
  monacoInitializedUtil.onInitialized(async () => {
    console.log(MonacoTheme.value)
    if (MonacoTheme.value != null) {
      // @ts-ignore
      monaco.editor.onDidCreateEditor((editor: ICodeEditor) => {
        changeTheme(MonacoTheme.value)
      })
      // setTimeout(() => {
      //   changeTheme(MonacoTheme)
      // }, 666)
    }
  })
})
</script>

<style>
.flycode-themelist {
  height: 50vh;
  overflow: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
