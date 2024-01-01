<template>
  <div class="menu-container">
    <div class="menu-trigger" style="height: 5%; width: 10%">
    </div>

    <div class="menu" style="width:25%;padding: 20px">
      <NText> {{ flyStore.codeGeneratorInitStatus ? '代码生成器已初始化' : '代码生成器未初始化' }}</NText>
      <NList style="background-color: var(--theme-content-background-color)">
        <NListItem>
          <NSpace justify="space-between">
            <span>{{ GeneratorMenuText }}</span>
            <NSwitch @update-value="" :value="codeGeneratorEnable" @update:value="switchCodeGenerator"></NSwitch>
          </NSpace>
        </NListItem>

        <NListItem>
          <NSpace justify="space-between">
            <span> {{ DtsMenuText }}</span>
            <NSwitch @update-value="" :value="addDtsEnable" @update:value="switchAddDts"></NSwitch>
          </NSpace>
        </NListItem>

        <NListItem>
          <NSpace justify="space-between">
            <span>{{ BracketPairColorizationMenuText }}</span>
            <NSwitch
                @update-value=""
                :value="bracketPairColorizationEnable"
                @update:value="switchBracketPairColorization"
            ></NSwitch>
          </NSpace>
        </NListItem>

        <NListItem>
          <NSpace justify="space-between"
          >{{ SzzrxMenuText }}
            <NSwitch @update-value="switchSzzrx" :value="szzrx"></NSwitch>
          </NSpace>
        </NListItem>
        <NListItem>
          <NSpace justify="space-between"
          >{{ MacVideoMenuText }}
            <NSwitch @update-value="switchMacVideo" :value="macVideoEnbale"></NSwitch>
          </NSpace>
        </NListItem>
        <NListItem>
          <NSpace justify="end">
            <NButton @click="useSystemPicute" type="info" size="small">使用MAC工作区壁纸</NButton>
          </NSpace
          >
        </NListItem>
        <NListItem>
          <NGrid cols="12">
            <NGi span="8">代码格式化:开启</NGi>
            <NGi span="2" offset="2">
              <NButton size="small" type="info">
                设置
              </NButton>
            </NGi>
          </NGrid>
        </NListItem>

        <NListItem>
          <NGrid cols="12">
            <NGi span="8">{{ ChangeThemeMenuText }}</NGi>
            <NGi span="2" offset="2">
              <NButton @click="openChangeTheme" type="info" size="small">切换</NButton>
            </NGi>
          </NGrid>
        </NListItem>

      </NList>
    </div>
  </div>
</template>
<script setup lang="tsx">
import {NButton} from 'naive-ui'
import {GM_getValue, GM_setValue} from '../../util'
import {useFlyStore} from '../../store/flyStore'
import {applyCustomFlycode} from '../MonacoEnhance/monaco.languages.conf'

const flyStore = useFlyStore()
const trigger = ref<HTMLElement>()
const codeGeneratorEnable = ref(GM_getValue('codeGeneratorEnable', false))
const switchCodeGenerator = () => {
  codeGeneratorEnable.value = !codeGeneratorEnable.value
  GM_setValue('codeGeneratorEnable', codeGeneratorEnable.value)
  rcGenerate()
  // setTimeout(() => { window.location.reload() }, 100)
}
const GeneratorMenuText = computed(() => {
  return `${codeGeneratorEnable.value ? '✅' : '❌'}代码生成`
})

const addDtsEnable = ref(GM_getValue('addDtsEnable', false))
const switchAddDts = () => {
  addDtsEnable.value = !addDtsEnable.value
  GM_setValue('addDtsEnable', addDtsEnable.value)
  rcGenerate()
  // setTimeout(() => { window.location.reload() }, 100)
}
const DtsMenuText = computed(() => {
  return `${addDtsEnable.value ? '✅' : '❌'}代码提示功能`
})

const bracketPairColorizationEnable = ref(localStorage.getItem('bracketPairColorization') < '0')
const switchBracketPairColorization = () => {
  bracketPairColorizationEnable.value = !bracketPairColorizationEnable.value
  if (bracketPairColorizationEnable.value) {
    localStorage.setItem('bracketPairColorization', '1')
  } else {
    localStorage.setItem('bracketPairColorization', '-1')
  }

  setTimeout(() => {
    window.location.reload()
  }, 100)
}

const BracketPairColorizationMenuText = computed(() => {
  return `${bracketPairColorizationEnable.value ? '✅' : '❌'}彩虹括号`
})

const szzrx = ref(GM_getValue('szzrx', false))
const switchSzzrx = () => {
  szzrx.value = !szzrx.value
  if (szzrx.value) {
    macVideoEnbale.value = false
    GM_setValue('macVideoEnbale', false)
  }
  GM_setValue('szzrx', szzrx.value)
  rcGenerate()
  window.document.body.style.backgroundImage = ''
  // setTimeout(() => { window.location.reload() }, 100)
}
const SzzrxMenuText = computed(() => {
  return `${szzrx.value ? '✅' : '❌'}背景壁纸模式`
})
const openChangeTheme = () => {
  // @ts-ignore
  window.showChangeTheme()
}
const ChangeThemeMenuText = computed(() => {
  return `主题: `
})

const macVideoEnbale = ref(GM_getValue('macVideoEnbale', false))
const switchMacVideo = () => {
  macVideoEnbale.value = !macVideoEnbale.value
  if (macVideoEnbale.value == true) {
    GM_setValue('szzrx', false)
    szzrx.value = false
  }
  GM_setValue('macVideoEnbale', macVideoEnbale.value)
  rcGenerate()
  // setTimeout(() => { window.location.reload() }, 100)
}
const MacVideoMenuText = computed(() => {
  return `${macVideoEnbale.value ? '✅' : '❌'}Mac视频`
})

async function rcGenerate() {
  const flyStore = useFlyStore()
  applyCustomFlycode()
  flyStore.$reset
  flyStore.codeGeneratorInitStatus = false
  await nextTick()
  setTimeout(() => {
    flyStore.codeGeneratorInitStatus = true
  }, 666)
}

const useSystemPicute = async () => {
  try {
    // const response = await fetch('http://localhost:3000/get_desktop_picture_base64')
    // const data = await response.text()
    // // 使用获取到的Base64数据创建一个图片URL
    // const imageUrl = 'data:image/png;base64,' + data
    document.body.style.backgroundImage = `url(http://localhost:3000/get_desktop_picture?${Math.random()})`
    // console.log(imageUrl)
    // 将图片URL设置为body的背景图片
  } catch (error) {
    console.error(error)
  }
}
</script>

<style>
.menu-container {
  z-index: 10000;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-trigger {
  z-index: 898221398989;
  position: fixed;
  bottom: 0px;
  right: 0px;
}

.menu {
  z-index: 898221398989;
  position: absolute;
  bottom: 33px;
  right: 0;
  width: auto;

  background: var(--theme-content-background-color) !important;
  transform: scale(0);
  transition: transform 0.2s linear;
}

.menu-trigger:hover + .menu,
.menu:hover {
  z-index: 898221398989;
  transform: scale(1);
}

.trigger {
  display: none;
}

.trigger:hover {
  display: block;
}

.n-popconfirm {
  z-index: 898221398989;
}
</style>
