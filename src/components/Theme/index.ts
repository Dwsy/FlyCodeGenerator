import { GM_setValue } from '../../util'
import { monacoXcodeDark } from './style/moanco-xcode-dark'
export const themeList = [
  // 'Active4D.json',
  // 'All Hallows Eve.json',
  // 'Amy.json',
  // 'Birds of Paradise.json',
  // 'Blackboard.json',
  // 'Brilliance Black.json',
  'default 添加属性高亮以及TODO功能',
  'Xcode_default.json|推荐',
  'GitHub Light.json|推荐',
  'Monokai.json|推荐',
  'Chrome DevTools.json|推荐',
  'GitHub Dark.json',
  // 'Clouds Midnight.json',
  // 'Clouds.json',
  // 'Cobalt.json',
  // 'Cobalt2.json',
  // 'Dawn.json',
  // 'Dominion Day.json',
  // 'Dracula.json',
  // 'Dreamweaver.json',
  // 'Eiffel.json',
  // 'Espresso Libre.json',

  'GitHub.json',
  // 'IDLE.json',
  'idleFingers.json',
  'iPlastic.json',
  // 'Katzenmilch.json',
  'krTheme.json',
  // 'Kuroir Theme.json',
  'LAZY.json',
  // 'MagicWB (Amiga).json',
  'Merbivore Soft.json',
  // 'Merbivore.json',
  'monoindustrial.json',
  'Monokai Bright.json',
  'Monokai.json',
  'Night Owl.json',
  'Nord.json',
  'Oceanic Next.json',
  // 'Pastels on Dark.json',
  'Slush and Poppies.json',
  'Solarized-dark.json',
  // 'Solarized-light.json',
  'SpaceCadet.json',
  // 'Sunburst.json',
  'Textmate (Mac Classic).json',
  // 'themelist.json',
  // 'Tomorrow-Night-Blue.json',
  // 'Tomorrow-Night-Bright.json',
  // 'Tomorrow-Night-Eighties.json',
  'Tomorrow-Night.json',
  // 'Tomorrow.json',
  'Twilight.json',
  // 'Upstream Sunburst.json',
  // 'Vibrant Ink.json',
  'Xcode_dark.json'
  // 'Zenburnesque.json'
]
export const changeTheme = (name: string = 'default') => {
  GM_setValue('MonacoTheme', name)
  if (name == 'Xcode_dark.json') {
    customRule(monacoXcodeDark)
  } else if (name == 'default') {
    localStorage.setItem('MonacoTheme', name)
    const themeSetting = localStorage.getItem('ide_theme')
    const lightTheme = 'vs' // 浅色主题
    const darkTheme = 'vs-dark' // 深色主题
    //@ts-ignore
    monaco.editor.setTheme(themeSetting === 'light' ? lightTheme : darkTheme)
  } else if (name == 'default 添加属性高亮以及TODO功能') {
    localStorage.setItem('MonacoTheme', name)
    const themeSetting = localStorage.getItem('ide_theme')
    const lightTheme = 'vs' // 浅色主题
    const darkTheme = 'vs-dark' // 深色主题
    const light = themeSetting === 'light'
    const customDefaultTheme: monaco.editor.IStandaloneThemeData = {
      base: light ? lightTheme : darkTheme,
      inherit: true,
      rules: [],
      colors: {}
    }

    customDefaultTheme.rules.push({ token: 'comment.todo', foreground: 'ecd452', fontStyle: 'bold' })
    customDefaultTheme.rules.push({ token: 'comment.fixme', foreground: 'd83b01', fontStyle: 'bold' })
    customDefaultTheme.rules.push({ token: 'comment.remind', foreground: '00bcf2', fontStyle: 'bold' })
    if (light) {
      customDefaultTheme.rules.push({ token: 'flylog', foreground: '27ae60', fontStyle: 'underline' })
      customDefaultTheme.rules.push({ token: 'function', foreground: '795E27', fontStyle: '' })
      customDefaultTheme.rules.push({ token: 'code.property', foreground: '001080', fontStyle: '' })
      customDefaultTheme.rules.push({ token: 'code.propertypre', foreground: '800000', fontStyle: '' })
    } else {
      customDefaultTheme.rules.push({ token: 'flylog', foreground: 'F92572', fontStyle: 'underline' })
      customDefaultTheme.rules.push({ token: 'function', foreground: '65D9EF', fontStyle: '' })
      customDefaultTheme.rules.push({ token: 'code.property', foreground: 'DCDCAA', fontStyle: '' })
      customDefaultTheme.rules.push({ token: 'code.propertypre', foreground: '9CDCFE', fontStyle: '' })
    }
    // @ts-ignore         "fontStyle": "underline",
    monaco.editor.defineTheme('customDefaultTheme', customDefaultTheme)
    // @ts-ignore
    monaco.editor.setTheme('customDefaultTheme')
    //@ts-ignore

    // monaco.editor.setTheme(themeSetting === 'light' ? lightTheme : darkTheme);
  } else {
    fetch('http://xwide.dwsy.link/monaco-themes-master/themes/' + name)
      .then((data) => data.json())
      .then((data) => {
        console.log('theme:'.concat(data))
        const rules: Array<any> = data.rules

        rules.push({ token: 'comment.todo', foreground: 'ecd452', fontStyle: 'bold' })
        rules.push({ token: 'comment.fixme', foreground: 'd83b01', fontStyle: 'bold' })
        rules.push({ token: 'comment.remind', foreground: '00bcf2', fontStyle: 'bold' })
        if (name.indexOf('Monokai') != -1 || name.indexOf('GitHub Dark') != -1) {
          rules.push({ token: 'flylog', foreground: 'F92572', fontStyle: 'underline' })
          rules.push({ token: 'function', foreground: '65D9EF', fontStyle: '' })
          rules.push({ token: 'code.property', foreground: 'A2E57B', fontStyle: '' })
          rules.push({ token: 'code.propertypre', foreground: 'F8F8F3', fontStyle: '' })
          data.colors = {
            // "editor.foreground": "#0001110",
            // "editor.background": "#0001110",
            // "editor.selectionBackground": "#49483E",
            // "editor.lineHighlightBackground": "#3E3D32",
            // "editorCursor.foreground": "#F8F8F0",
            // "editorWhitespace.foreground": "#3B3A32",
            // "editorIndentGuide.activeBackground": "#9D550FB0",
            // "editor.selectionHighlightBorder": "#222218"
          }
        } else {
          rules.push({ token: 'flylog', foreground: '27ae60', fontStyle: 'underline' })
          rules.push({ token: 'function', foreground: '0070C1', fontStyle: '' })
          rules.push({ token: 'code.property', foreground: 'E36208', fontStyle: '' })
          rules.push({ token: 'code.propertypre', foreground: 'AD3DA4', fontStyle: '' })
        }

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
  rules.push({ token: 'code.propertypre', foreground: 'AD3DA4' })

  // @ts-ignore         "fontStyle": "underline",
  monaco.editor.defineTheme('mytheme', data)
  // @ts-ignore
  monaco.editor.setTheme('mytheme')
}
