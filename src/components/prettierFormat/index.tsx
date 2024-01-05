import { message } from '../../util/message'
import './standalone'
import './bable'
import './estree'
import './bable.min'
import { Options } from 'prettier'
// import {transform} from '@babel/standalone'
import { GM_getValue } from '../../util'
import { formatEditotFqueryFunc, formatEditotFqueryFuncNew } from '../MonacoEnhance'
import { TransformOptions } from './type.d'
import { MessageRenderMessage, NAlert, NCard } from 'naive-ui'

let sqlCount = 0
// 格式化逻辑
async function spliceSemiAndDoubleQoute(code: string) {
  sqlCount = 0
  const config: Options = {
    parser: 'babel',
    //不保留行尾分号去掉，开发规范统一
    semi: false,
    //字符串用单引号包,裹，开发规范统一
    singleQuote: true,
    // 代码每行宇符数
    printWidth: 500,
    //jsx中'＞'保持在一行
    bracketSameLine: true,
    //对象空格
    bracketSpacing: true,
    //行尾逗号
    trailingComma: 'none',
    // (x) => {}
    arrowParens: 'avoid',
    tabWidth: 2,
    /** 对象的 key 仅在必要时用引号 */
    quoteProps: 'as-needed',
    //@ts-ignore
    plugins: prettierPlugins
  }

  // 使用模板字符串包裹 flycode中的sql
  let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g
  var matches = code.match(regex)
  if (matches) {
    matches.forEach((query) => {
      const partsIndex = query.indexOf('=')
      const queryString = query.substring(partsIndex + 1).trim()
      //FIXME 暂时处理 相同sql的问题 select => select r
      const formattedSQL = '{}; /**5213' + queryString.replace(/(select|SELECT)/, 'select * from rie') + '5213**/'
      code = code.replaceAll(queryString, formattedSQL)
    })
  }
  code = code.replaceAll('select * from rie', 'select')

  // code = code.replace(regex, function (match, p1, p2) {
  //     return `${p1} = \`${p2}\``
  // })
  try {
    if (GM_getValue('es6toes5', true)) {
      const babelTransformOptions: TransformOptions = {
        presets: ['es2015'],
        // plugins: ['transform-es2015-modules-umd'],
        retainLines: true, // 通过设置retainLines选项来保留原始代码中的空格
        ast: false
      }
      // @ts-ignore
      code = Babel.transform(code, babelTransformOptions).code
    }
    //@ts-ignore
    const formatCode = await prettier.format(code, config)

    message.success('格式化成功')

    return formatCode
  } catch (e) {
    message.error(String(e), {
      render: renderMessage,
      closable: true,
      keepAliveOnHover: true,
      duration: 3000
    })
    throw new Error(e)
  }
}

const renderMessage: MessageRenderMessage = (props) => {
  const { type } = props
  const style = {
    maxWidth: 'calc(100vw - 32px)',
    width: '480px',
    boxShadow: 'var(--n-box-shadow)',
    color: 'var(--theme-shell-menu-font-color)!important',
    backgroundColor: 'var(--theme-tools-button-background-color)'
  }
  const style2 = {
    marginLeft: '0px!important',
    color: 'var(--theme-shell-menu-font-color)'
  }

  return h(
    <>
      <NAlert
        style={style}
        closable={props.closable}
        onClose={props.onClose}
        title="格式化失败请检查代码"
        type="warning"
      >
        <pre style={style2}>{props.content}</pre>
      </NAlert>
    </>
  )
}

export const formatProvider: monaco.languages.DocumentFormattingEditProvider = {
  displayName: 'prettier-flycode',
  async provideDocumentFormattingEdits(
    model: monaco.editor.ITextModel,
    options: monaco.languages.FormattingOptions,
    token: monaco.CancellationToken
  ): Promise<monaco.languages.TextEdit[]> {
    let code = await spliceSemiAndDoubleQoute(model.getValue())
    code = removeStringWrapping(code, model)

    const modelRange = model.getFullModelRange()
    const range = {
      startLineNumber: modelRange.startLineNumber,
      endLineNumber: modelRange.endLineNumber,
      startColumn: 1,
      endColumn: model.getLineMaxColumn(modelRange.endLineNumber)
    }
    const edit: monaco.languages.TextEdit = {
      range,
      text: code
    }
    return [edit]
  }
}

function removeStringWrapping(code: string, model: monaco.editor.ITextModel) {
  code = code.replace("'use strict'", '')
  code = code.replaceAll('{} /**5213', '')
  code = code.replaceAll('5213**/', '')
  // code = code.replaceAll('norule', 'NORULE')
  // code = code.replaceAll('paging', 'PAGING')
  code = code.replace(/console.log/g, 'FLY.log')
  if (GM_getValue('formatCodeAndFormatSQL', true)) {
    // setTimeout(() => {

    // @ts-ignore
    // noweditor.getAction('FomatFquery').run()

    // }, 1);
    debugger
    code = formatEditotFqueryFuncNew(model, '') || code
  }

  return code
}
