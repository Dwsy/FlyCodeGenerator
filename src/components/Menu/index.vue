<template>
  <div class="menu-container">
    <div class="menu-trigger" style="height: 33px; width: 33px">
      <NButton ref="trigger" class="trigger" icon="menu">+</NButton>
    </div>

    <NCard class="menu">
      {{ flyStore.codeGeneratorInitStatus ? '代码生成器已初始化' : '代码生成器未初始化' }}
      <NList>
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
            <!-- <n-popconfirm @positive-click="" @negative-click="" style="z-index: 888888">
              <template #trigger>
                <NSwitch @update-value="" :value="szzrx"></NSwitch>
              </template>
              一切都将一去杳然，任何人都无法将其捕获。
            </n-popconfirm> -->
            <NSwitch @update-value="switchSzzrx" :value="szzrx"></NSwitch>
          </NSpace>
        </NListItem>

        <NListItem>
          <NSpace justify="space-between"
            ><span> {{ ChangeThemeMenuText }}</span>
            <NButton @click="openChangeTheme" type="info" size="small">切换</NButton></NSpace
          >
        </NListItem>
      </NList>
    </NCard>
  </div>
</template>
<script setup lang="tsx">
import { NButton } from 'naive-ui'
import { GM_getValue, GM_setValue } from '../../util'
import { useFlyStore } from '../../store/flyStore'
import { changeTheme } from '../Theme'
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
  return `${codeGeneratorEnable.value ? '✅' : '❌'}代码生成（Beta Version）`
})

const addDtsEnable = ref(GM_getValue('addDtsEnable', false))
const switchAddDts = () => {
  addDtsEnable.value = !addDtsEnable.value
  GM_setValue('addDtsEnable', addDtsEnable.value)
  rcGenerate()
  // setTimeout(() => { window.location.reload() }, 100)
}
const DtsMenuText = computed(() => {
  return `${addDtsEnable.value ? '✅' : '❌'}代码提示功能（Beta Version）`
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
  GM_setValue('szzrx', szzrx.value)
  rcGenerate()
  window.document.body.style.backgroundImage = ''
  // setTimeout(() => { window.location.reload() }, 100)
}
const SzzrxMenuText = computed(() => {
  return `${szzrx.value ? '关闭' : '开启'}私斋蒸鹅心模式❤`
})
const openChangeTheme = () => {
  // @ts-ignore
  window.showChangeTheme()
}
const ChangeThemeMenuText = computed(() => {
  return `切换主题（Beta Version）`
})

async function rcGenerate() {
  const flyStore = useFlyStore()
  flyStore.$reset
  flyStore.codeGeneratorInitStatus = false
  await nextTick()
  setTimeout(() => {
    flyStore.codeGeneratorInitStatus = true
  }, 666)
}
</script>

<style>
.menu-container {
  z-index: 10000;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-trigger {
  position: fixed;
  bottom: 0px;
  right: 0px;
}

.menu {
  position: absolute;
  bottom: 33px;
  right: 0;
  width: auto;
  /* border-radius: 100px; */
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: scale(0);
  transition: transform 0.2s ease;
}

.menu-trigger:hover + .menu,
.menu:hover {
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
