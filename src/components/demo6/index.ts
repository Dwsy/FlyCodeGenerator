import { getMonacoModel } from '../../util/monacoUtil'

export const switchSplitEditor = async () => {
  console.log('openSplitEditor')
  const querySelectorPromise = (querySelector): Promise<Element> =>
    new Promise((resolve) => {
      const intervalId = setInterval(() => {
        const element = document.querySelector(querySelector)
        if (element !== null) {
          clearInterval(intervalId)
          resolve(element)
        }
      }, 100)
    })

  const rightSide = await querySelectorPromise('.right-side')
  // rightSide.classList.add('split-editor')
  // right_column_unfold.classList.add('split-editor')

  const right_column_unfold = await querySelectorPromise('.fold_btn_right.right_column_unfold')
  // rightSide.classList.toggle('split-editor')
  // right_column_unfold.classList.toggle('split-editor')

  let tabInput = await querySelectorPromise(
    '#beSetting > div.right-side > div > div > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1) > div:nth-child(2)'
  )
  let tab = await querySelectorPromise(
    '#beSetting > div.right-side > div > div > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div:nth-child(1)'
  )
  let tabs = document.querySelectorAll(
    '#beSetting > div.right-side > div > div > div.ant-tabs-bar.ant-tabs-top-bar > div > div > div > div > div'
  )
  debugger
  if (tabs.length >= 3) {
    return
  }
  let clonedTabInput = document.createElement('div')
  clonedTabInput.setAttribute('role', 'tab')
  clonedTabInput.setAttribute('aria-disabled', 'false')
  clonedTabInput.setAttribute('aria-selected', 'false')
  clonedTabInput.classList.add('ant-tabs-tab')
  clonedTabInput.classList.add('ant-tabs-tab-inactive')
  clonedTabInput.textContent = 'SplitCode'

  tab.appendChild(clonedTabInput)
  clonedTabInput.addEventListener('click', (e) => {
    // openSplitCodeDiv()
    console.log("  clonedTabInput.addEventListener('click', (e) => {")
    const target = e.target as unknown as Element
    target.parentElement.childNodes.forEach((element: Element, index) => {
      if (element !== target) {
        element.classList.replace('ant-tabs-tab-active', 'ant-tabs-tab-inactive')

        element.setAttribute('aria-selected', 'false')
        element.addEventListener('click', () => {
          target.classList.replace('ant-tabs-tab-active', 'ant-tabs-tab-inactive')
          openPlan(index)
        })
      } else {
      }
    })
    target.setAttribute('aria-selected', 'true')
    // target.setAttribute('aria-hidden', 'false')
    if (target.classList.contains('ant-tabs-tab-inactive')) {
      target.classList.replace('ant-tabs-tab-inactive', 'ant-tabs-tab-active')
    }
    openPlan(2)
    debugger
  })

  //plan
  const tabsContentElement: Element = await querySelectorPromise(
    '#beSetting > div.right-side > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content'
  )
  const plans = document.querySelectorAll(
    '#beSetting > div.right-side > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div'
  )
  if (plans.length === 3) {
    return
  }
  async function openPlan(index: number) {
    if (index == 2) {
      rightSide.classList.toggle('split-editor', true)
      right_column_unfold.classList.toggle('split-editor', true)
    } else {
      rightSide.classList.toggle('split-editor', false)
      right_column_unfold.classList.toggle('split-editor', false)
    }
    const plans = document.querySelectorAll(
      '#beSetting > div.right-side > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div'
    )
    plans.forEach((plan) => {
      plan.classList.replace('ant-tabs-tabpane-active', 'ant-tabs-tabpane-inactive')
    })
    if (plans[index].classList.contains('ant-tabs-tabpane-inactive')) {
      plans[index].classList.replace('ant-tabs-tabpane-inactive', 'ant-tabs-tabpane-active')
    }
    const content: HTMLElement = document.querySelector(
      '#beSetting > div.right-side.split-editor > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content'
    )
    if (index === 2) {
      if (!SplitCodeDiv.hasChildNodes()) {
        const editor = monaco.editor.create(SplitCodeDiv, {
          model: getMonacoModel()
        })
      }
      content.classList.add('show-split-editor')
      // content.style.setProperty('margin-left:', '-200%')
    } else {
      content.classList.remove('show-split-editor')
    }
    //  else if (plans[index].classList.contains('ant-tabs-tabpane-active')) {
    //   plans[index].classList.replace('ant-tabs-tabpane-active', 'ant-tabs-tabpane-inactive')
    // }
  }

  const SplitCodeDiv = document.createElement('div')
  SplitCodeDiv.classList.add('ant-tabs-tabpane')
  SplitCodeDiv.classList.add('ant-tabs-tabpane-inactive')
  SplitCodeDiv.setAttribute('role', 'tabpanel')
  SplitCodeDiv.setAttribute('aria-hidden', 'false')
  SplitCodeDiv.setAttribute('id', 'SplitCode')

  const openSplitCodeDiv = () => {
    if (SplitCodeDiv.classList.contains('ant-tabs-tabpane-inactive')) {
      SplitCodeDiv.classList.replace('ant-tabs-tabpane-inactive', 'ant-tabs-tabpane-active')
    } else if (SplitCodeDiv.classList.contains('ant-tabs-tabpane-active')) {
      SplitCodeDiv.classList.replace('ant-tabs-tabpane-active', 'ant-tabs-tabpane-inactive')
    } else {
      SplitCodeDiv.classList.add('ant-tabs-tabpane-inactive')
    }
  }
  tabsContentElement.appendChild(SplitCodeDiv)
  // tabsContentElement.insertBefore(SplitCodeDiv, tabsContentElement.firstChild)
  //plan
}
//@ts-ignore
window.switchSplitEditor = switchSplitEditor
