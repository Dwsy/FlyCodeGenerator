export function getMonacoModel() {
  if (window.location.hash.indexOf('uiedit') != -1) {
    const dataUri = document
      .querySelector(
        'div > div.overflow-guard > div.monaco-scrollable-element.editor-scrollable.vs.mac > div.lines-content.monaco-editor-background > div.view-lines.monaco-mouse-cursor-text'
      )
      .parentElement.parentElement.parentElement.parentElement.getAttribute('data-uri')
    const uriSplit = dataUri.split('/')
    // @ts-ignore
    const Models = monaco.editor.getModels()

    return Models.filter((model) => model.id === `$model${uriSplit[uriSplit.length - 1]}`)[0]
  } else if (window.location.hash.indexOf('modeledit') != -1) {
    const dataUri = document
      .querySelector(
        '#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.bm-flycode-monaco-editor-wrap > div'
      )
      .getAttribute('data-uri')
    const uriSplit = dataUri.split('/')
    // @ts-ignore
    const Models = monaco.editor.getModels()

    return Models.filter((model) => model.id === `$model${uriSplit[uriSplit.length - 1]}`)[0]
  }
}

function MonacoInitialized() {
  // @ts-ignore
  return typeof monaco !== 'undefined'
}

interface MonacoInitializedUtil {
  isInitialized(): boolean
  onInitialized(callback: () => void): void
}

/**
 * 创建一个Monaco初始化工具对象。
 * 这个工具对象提供了一个方法来检查Monaco是否已经初始化，
 * 并且允许你添加一个回调函数，当Monaco初始化完成时，这个回调函数会被调用。
 *
 * @returns {MonacoInitializedUtil} 返回一个包含两个方法的对象：
 * - `isInitialized`：返回一个布尔值，表示Monaco是否已经初始化。
 * - `addInitializedCallback`：接受一个回调函数，当Monaco初始化完成时，这个回调函数会被调用。
 */
function createMonacoInitializedUtil(): MonacoInitializedUtil {
  const callbacks: (() => void)[] = []
  let initialized = false
  function checkInitialized() {
    if (!initialized) {
      const isInitialized = MonacoInitialized()
      if (isInitialized) {
        initialized = true
        callbacks.forEach((callback) => callback())
      }
    }
  }
  setInterval(checkInitialized, 700)
  return {
    isInitialized: () => initialized,
    onInitialized: (callback) => {
      if (initialized) {
        callback()
      } else {
        callbacks.push(callback)
      }
    }
  }
}

export const monacoInitializedUtil = createMonacoInitializedUtil()
