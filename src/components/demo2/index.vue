<template>
  <div>
    <helloTsx></helloTsx>
  </div>
</template>

<script setup lang="tsx">
import { helloTsx } from './'
onMounted(async () => {
  console.log('demo2 mounted')
  document.addEventListener('click', (e) => {
    const target: Element = e.target as Element
    console.log(target)
    const match = target.matches('div.left-side > div > div.tree-container > ul > li::after')
    console.log('match', match)
  })
  // if()
  // const elementJSPath = getElementJSPath(e.target)
  // if (elementJSPath.includes('#beSetting > div.left-side > div.object-tree-container > div.tree-container > ul.ant-tree.ant-tree-icon-hide > li')) {
  //   console.log('elementJSPath', elementJSPath)
  // }
})

// 获取元素的 JavaScript 路径
function getElementJSPath(element) {
  if (!(element instanceof Element)) return

  var path = []
  while (element.nodeType === Node.ELEMENT_NODE) {
    var selector = element.nodeName.toLowerCase()
    if (element.id) selector += '#' + element.id
    else if (element.className) selector += '.' + element.className.replace(/\s+/g, '.')
    path.unshift(selector)
    element = element.parentNode
  }
  return path.join(' > ')
}

// 获取元素的 XPath
function getElementXPath(element) {
  if (!(element instanceof Element)) return

  var xpath = ''
  for (; element && element.nodeType === Node.ELEMENT_NODE; element = element.parentNode) {
    var id: string = String(Array.from(element.parentNode.children).indexOf(element) + 1)
    id = '[' + id + ']'
    xpath = '/' + element.nodeName.toLowerCase() + id + xpath
  }
  return xpath
}
</script>

<style>
div.left-side > div > div.tree-container > ul > li {
}
div.left-side > div > div.tree-container > ul > li::after {
  content: 'gen';
  float: right;
  margin-right: 10%;
  border: 1px solid green;
  cursor: pointer;
}

div.left-side > div > div.tree-container > ul > li::after:hover {
  background-color: yellow;
}

div.left-side > div > div.tree-container > ul > li::after:active {
  background-color: orange;
}

div.left-side > div > div.tree-container > ul > li::after:focus {
  outline: none;
}

div.left-side > div > div.tree-container > ul > li::after::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
  margin-right: 5px;
}

div.left-side > div > div.tree-container > ul > li::after::after {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: blue;
  margin-left: 5px;
}
</style>
