

export function getMonacoModel() {
    const dataUri = document.querySelector("#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.bm-flycode-monaco-editor-wrap > div").getAttribute('data-uri');
    const uriSplit = dataUri.split("/")
    // @ts-ignore
    const Models = monaco.editor.getModels()
    return Models.filter((model) => model.id === `$model${uriSplit[uriSplit.length - 1]}`)
}


export function getMonacoInit() {
    // @ts-ignore
    const Models = monaco?.editor?.getModels()
    return !!Models
}



