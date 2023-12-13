<script setup lang="tsx">
import { Ref, Teleport, nextTick } from 'vue'
import { onMounted, onBeforeUnmount, h, ref } from 'vue'
import { message } from '../../util/message'

const open = ref(false)
let btn: Node
const x = ref(0)
const y = ref(0)

onMounted(() => {
  setTimeout(() => {
    console.log('hello world')

    btn = document.querySelector('#app > div > div.side-bar-container > div > div.menu-top > nav > div:nth-child(3)') as Element
    btn.addEventListener('mouseover', showMenuDebounced)
  }, 3000)
})

let timeoutId: ReturnType<typeof setTimeout> | null = null
const showMenuDebounced = debounce(showMenu, 300)

function debounce(func: Function, delay: number) {
  return function () {
    const context = this
    const args = arguments

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

function showMenu(e: MouseEvent) {
  console.log('showMenu', e)
  //获取鼠标的x y
  // x.value = e.screenX + 'px'
  // y.value = e.screenY + 'px'
  x.value = e.clientX + document.body.scrollLeft - document.body.clientLeft - 20
  y.value = e.clientY + document.body.scrollTop - document.body.clientTop - 30
  open.value = true
  // Show the multi-level menu
}

function hideMenu() {
  // Hide the multi-level menu
}

const options = [
  {
    label: '杰·盖茨比',
    key: 'jay gatsby'
  },
  {
    label: '黛西·布坎南',
    key: 'daisy buchanan'
  },
  {
    type: 'divider',
    key: 'd1'
  },
  {
    label: '尼克·卡拉威',
    key: 'nick carraway'
  },
  {
    label: '其他',
    key: 'others1',
    children: [
      {
        label: '乔丹·贝克',
        key: 'jordan baker'
      },
      {
        label: '汤姆·布坎南',
        key: 'tom buchanan'
      },
      {
        label: '其他',
        key: 'others2',
        children: [
          {
            label: '鸡肉',
            key: 'chicken'
          },
          {
            label: '牛肉',
            key: 'beef'
          }
        ]
      }
    ]
  }
]

function handleSelect(key: string | number) {
  open.value = false
  message.info(String(key))
}
function handleContextMenu(e: MouseEvent) {
  e.preventDefault()
  open.value = false
  nextTick().then(() => {
    open.value = true
    x.value = e.clientX
    y.value = e.clientY
  })
}
function onClickoutside() {
  message.info('clickoutside')
  open.value = false
}
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="body">
    <!-- <div v-if="open" class="modal"> -->
    <!-- <p>Hello from the modal!</p>
      <button @click="open = false">Close</button> -->
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="x"
      :y="y"
      :options="options"
      :show="open"
      :on-clickoutside="onClickoutside"
      @select="handleSelect"
    />
    <!-- </div> -->
  </Teleport>
</template>

<style scoped>
/* .modal {
  border: 1px solid #ccc;
  position: fixed;
  z-index: 999;
  top: v-bind(y);
  left: v-bind(x);
  width: 300px;
  margin-left: -150px;
} */
</style>
