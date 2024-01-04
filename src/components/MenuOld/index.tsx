export const switchSplitEditor = () => {
  console.log('openSplitEditor')
  const rightSide = document.querySelector('.right-side')
  rightSide.classList.toggle('split-editor')

  const right_column_unfold = document.querySelector('.fold_btn_right.right_column_unfold')
  right_column_unfold.classList.toggle('split-editor')

  const tabs: Element = document.querySelector(
    '#beSetting > div.right-side > div > div > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1)'
  )
  const tabInput: Element = document.querySelector(
    '#beSetting > div.right-side > div > div > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1) > div:nth-child(2)'
  )
  // 克隆元素
  const clonedTabInput = tabInput.cloneNode(true)
  clonedTabInput.textContent = 'SplitCode'

  // 添加选项卡到父元素
  tabs.appendChild(clonedTabInput)

  //   monaco.editor.create(domElement, options, override)
}
