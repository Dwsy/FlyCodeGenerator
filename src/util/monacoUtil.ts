

export function getMonacoModel() {
    const dataUri = document.querySelector("#beSetting > div.main-content > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.bm-flycode-monaco-editor-wrap > div").getAttribute('data-uri');
    const uriSplit = dataUri.split("/")
    // @ts-ignore
    const Models = monaco.editor.getModels()

    return Models.filter((model) => model.id === `$model${uriSplit[uriSplit.length - 1]}`)[0]
}

export function showMonacoInlineDetails() {


    // var editor = monaco.editor.create(document.getElementById("container"), {
    //     value: "// First line\nfunction hello() {\n\talert('Hello world!');\n}\n// Last line",
    //     language: "javascript",

    //     lineNumbers: "off",
    //     roundedSelection: false,
    //     scrollBeyondLastLine: false,
    //     readOnly: false,
    //     theme: "vs-dark",
    // });

    // setTimeout(function () {
    //     editor.updateOptions({
    //         suggest: {
    //             preview: true
    //         },
    //         inlineSuggest: {
    //             enabled: true
    //         }
    //     });
    // }, 2000);


    // const monacoModel = getMonacoModel()
    // monacoModel.updateOptions({

    // });
    // monacoModel.updateOptions({
    //     // lineNumbers: "on",
    // });
}

function MonacoInitialized() {
    // @ts-ignore
    return typeof monaco !== 'undefined'
}

interface MonacoInitializedUtil {
    isInitialized(): boolean;
    addInitializedCallback(callback: () => void): void;
}

function createMonacoInitializedUtil(): MonacoInitializedUtil {
    const callbacks: (() => void)[] = [];
    let initialized = false;
    function checkInitialized() {
        if (!initialized) {
            const isInitialized = MonacoInitialized();
            if (isInitialized) {
                initialized = true;
                callbacks.forEach(callback => callback());
            }
        }
    }
    setInterval(checkInitialized, 700);
    return {
        isInitialized: () => initialized,
        addInitializedCallback: (callback) => {
            if (initialized) {
                callback();
            } else {
                callbacks.push(callback);
            }
        }
    };
}


export const monacoInitializedUtil = createMonacoInitializedUtil();