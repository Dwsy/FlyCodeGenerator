import { message } from '../../util/message'
import './standalone'
import './bable'
import './estree'
// 格式化逻辑
async function spliceSemiAndDoubleQoute(code: string) {
    // 使用模板字符串包裹 flycode中的sql
    let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g;
    var matches = code.match(regex);
    if (matches) {
        matches.forEach((query) => {
            const partsIndex = query.indexOf('=');
            const queryString = query.substring(partsIndex + 1).trim();
            const formattedSQL = '`' + queryString + '`';
            code = code.replace(queryString, formattedSQL)
        })
    }

    code = code.replace(regex, function (match, p1, p2) {
        return `${p1} = \`${p2}\``
    })
    try {
        //@ts-ignore
        const formatCode = await prettier.format(code, {
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
            // arrowParens: 'avoid'
            //@ts-ignore
            plugins: prettierPlugins
        })
        message.success('格式化成功')

        return formatCode
    } catch {
        message.error('格式化失败')
    }

}

export const formatProvider: monaco.languages.DocumentFormattingEditProvider = {
    displayName: 'prettier-flycode',
    async provideDocumentFormattingEdits(model: monaco.editor.ITextModel, options: monaco.languages.FormattingOptions, token: monaco.CancellationToken): Promise<monaco.languages.TextEdit[]> {
        let text = removeStringWrapping(await spliceSemiAndDoubleQoute(model.getValue()))

        const modelRange = model.getFullModelRange()
        const range = {
            startLineNumber: modelRange.startLineNumber,
            endLineNumber: modelRange.endLineNumber,
            startColumn: 1,
            endColumn: model.getLineMaxColumn(modelRange.endLineNumber)
        }

        const edit: monaco.languages.TextEdit = {
            range,
            text
        }
        return [edit]
    }
}





function removeStringWrapping(code) {


    return code.replace(/`/g, '');
}
