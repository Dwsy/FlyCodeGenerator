import { GM_setValue } from "../../util"
import { monacoXcodeDark } from "./style/moanco-xcode-dark"
export const themeList = [
    // 'Active4D.json',
    // 'All Hallows Eve.json',
    // 'Amy.json',
    // 'Birds of Paradise.json',
    // 'Blackboard.json',
    // 'Brilliance Black.json',
    // 'Brilliance Dull.json',
    'Chrome DevTools.json',
    // 'Clouds Midnight.json',
    // 'Clouds.json',
    'Cobalt.json',
    'Cobalt2.json',
    // 'Dawn.json',
    'Dominion Day.json',
    // 'Dracula.json',
    // 'Dreamweaver.json',
    // 'Eiffel.json',
    // 'Espresso Libre.json',
    'GitHub Dark.json',
    'GitHub Light.json',
    'GitHub.json',
    // 'IDLE.json',
    // 'idleFingers.json',
    // 'iPlastic.json',
    // 'Katzenmilch.json',
    // 'krTheme.json',
    // 'Kuroir Theme.json',
    // 'LAZY.json',
    // 'MagicWB (Amiga).json',
    // 'Merbivore Soft.json',
    // 'Merbivore.json',
    // 'monoindustrial.json',
    // 'Monokai Bright.json',
    // 'Monokai.json',
    // 'Night Owl.json',
    // 'Nord.json',
    // 'Oceanic Next.json',
    // 'Pastels on Dark.json',
    // 'Slush and Poppies.json',
    // 'Solarized-dark.json',
    // 'Solarized-light.json',
    // 'SpaceCadet.json',
    // 'Sunburst.json',
    'Textmate (Mac Classic).json',
    // 'themelist.json',
    // 'Tomorrow-Night-Blue.json',
    // 'Tomorrow-Night-Bright.json',
    // 'Tomorrow-Night-Eighties.json',
    // 'Tomorrow-Night.json',
    // 'Tomorrow.json',
    // 'Twilight.json',
    // 'Upstream Sunburst.json',
    // 'Vibrant Ink.json',
    'Xcode_default.json',
    'Xcode_dark.json'
    // 'Zenburnesque.json'
]
export const changeTheme = (name: string = 'default') => {

    GM_setValue('MonacoTheme', name)
    if (name == 'Xcode_dark.json') {
        customRule(monacoXcodeDark);
    }
    else if (name == 'default') {
        localStorage.setItem("MonacoTheme", name)
        const themeSetting = localStorage.getItem("ide_theme");
        const lightTheme = 'vs'; // 浅色主题
        const darkTheme = 'vs-dark'; // 深色主题
        //@ts-ignore
        monaco.editor.setTheme(themeSetting === 'light' ? lightTheme : darkTheme);
    } else {
        fetch('http://xwide.dwsy.link/monaco-themes-master/themes/' + name)
            .then((data) => data.json())
            .then((data) => {
                console.log('theme:'.concat(data))
                const rules: Array<any> = data.rules
                rules.push({ token: 'flylog', foreground: '27ae60', fontStyle: 'underline' })
                rules.push({ token: 'comment.todo', foreground: 'ecd452', fontStyle: 'bold' })

                rules.push({ token: 'comment.fixme', foreground: 'd83b01', fontStyle: 'bold' })

                rules.push({ token: 'comment.remind', foreground: '00bcf2', fontStyle: 'bold' })

                rules.push({ token: 'flylog', foreground: 'c12c1f', fontStyle: 'underline' })
                rules.push({ token: 'function', foreground: '0070C1', fontStyle: 'bold' })
                // AD3DA4
                // debugger
                // if (name == 'Monokai') {
                //     rules.push({ token: "code.property", foreground: "A2DB2E" })
                //     rules.push({ token: "code.propertypre", foreground: "AD3DA4" })
                // } else {
                //     rules.push({ token: "code.property", foreground: "4B22B0" })
                //     // rules.push({ token: "code.propertypre", foreground: "AD3DA4" })
                // }
                rules.push({ token: 'code.property', foreground: 'AE413D', fontStyle: '' })
                // rules.push({ token: "code.property", foreground: "A2DB2E" })
                rules.push({ token: "code.propertypre", foreground: "AD3DA4", fontStyle: 'Strikethrough' })

                // @ts-ignore         "fontStyle": "underline",
                monaco.editor.defineTheme('mytheme', data)
                // @ts-ignore
                monaco.editor.setTheme('mytheme')
            })
        // GM_setValue('bracketPairColorizationEnable', name)
        // showChangeTheme.value = !showChangeTheme.value
    }
}
export const customRule = (data) => {
    console.log('theme:'.concat(data))
    const rules: Array<any> = data.rules
    rules.push({ token: 'flylog', foreground: '27ae60', fontStyle: 'underline' })
    rules.push({ token: 'comment.todo', foreground: 'ecd452', fontStyle: 'bold' })

    rules.push({ token: 'comment.fixme', foreground: 'd83b01', fontStyle: 'bold' })

    rules.push({ token: 'comment.remind', foreground: '00bcf2', fontStyle: 'bold' })

    rules.push({ token: 'flylog', foreground: 'c12c1f', fontStyle: 'underline' })
    rules.push({ token: 'function', foreground: '0070C1', fontStyle: 'bold' })
    // AD3DA4
    // debugger
    // if (name == 'Monokai') {
    //     rules.push({ token: "code.property", foreground: "A2DB2E" })
    //     rules.push({ token: "code.propertypre", foreground: "AD3DA4" })
    // } else {
    //     rules.push({ token: "code.property", foreground: "4B22B0" })
    //     // rules.push({ token: "code.propertypre", foreground: "AD3DA4" })
    // }
    // rules.push({ token: 'code.property', foreground: '4B22B0' })
    rules.push({ token: 'code.property', foreground: '4c8045' })
    // rules.push({ token: "code.property", foreground: "A2DB2E" })
    rules.push({ token: "code.propertypre", foreground: "AD3DA4" })

    // @ts-ignore         "fontStyle": "underline",
    monaco.editor.defineTheme('mytheme', data)
    // @ts-ignore
    monaco.editor.setTheme('mytheme')
}