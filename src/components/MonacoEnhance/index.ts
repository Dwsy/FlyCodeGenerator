import { useMessage } from "naive-ui";
import { pushTempBoNewDtsList } from "../../flycodeDts";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode } from "../../type/model/propertyTypeCodeRef";
import { getTableShortName } from "../../util";
import { getMonacoModel } from "../../util/monacoUtil";
import { GM_setClipboard } from "$";
import { format } from 'sql-formatter';
import { formatFquery } from "../../util/formateFquery";


export const addBoNewAction = (editor: monaco.editor.IStandaloneCodeEditor) => {
    const flyStore = useFlyStore()
    setTimeout(() => {
        console.log("--")
        const linesContent = editor.getModel().getLinesContent()
        linesContent.filter((lineContent) => { lineContent.indexOf("BO.new") > -1 })
            .map((line) => {
                const match = line.match(/BO.new\((.*?)\)/);
                if (!match) {
                    return
                }
                const boName = match[1]
                console.log(boName);

                pushTempBoNewDtsList(boName)
            })


        editor.addAction({
            id: "BoNew",
            label: "BoNewGen",
            keybindings: [
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
            ],
            // A precondition for this action.
            precondition: null,
            // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
            keybindingContext: null,
            contextMenuGroupId: "navigation",
            contextMenuOrder: 1.5,
            // Method that will be executed when the action is triggered.
            // @param editor The editor instance is passed in as a convenience
            run: function (ed) {
                const lineContent = getMonacoModel().getLineContent(ed.getPosition().lineNumber);
                let match = lineContent.match(/BO.new\((.*?)\)/);
                if (!match) {
                    match = lineContent.match(/new\s+(.*)/);
                }
                if (!match) {
                    return
                }
                const boName = match[1]
                let shortName = boName
                if (shortName.length > 15) {
                    shortName = getTableShortName(boName)
                }

                var setLine = flyStore.tableNameDataMap.get(boName).properties.map((item) => {
                    if (item.propertytypecode == PropertyTypeCode.PrimaryKey.toString()) {
                        return `${shortName}.${item.columnname} = FLY.genId()`
                    } else {
                        let temp = `${shortName}.${item.columnname} = foo.${item.columnname}`
                        let len = temp.length
                        for (var i = 0; i < 55 - len; i++) {
                            temp += " "
                        }
                        return `${temp}//${item.propertyname}`
                    }
                })

                setLine.unshift(`var ${shortName} = BO.new("${boName}")`)
                console.log(setLine.join("\n"))
                // 删除当前行
                ed.executeEdits("source", [{
                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
                    text: ""
                }])
                ed.executeEdits("source", [{
                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
                    text: setLine.join("\n") + "\n\n"
                }])
                pushTempBoNewDtsList(boName)
            },
        });
        addFomatSqlAction(editor)
    }, 2000);
}

export const addFomatSqlAction = (editor) => {
    const flyStore = useFlyStore()
    setTimeout(() => {
        editor.addAction({
            id: "FomatFquery",
            label: "FomatFquery",
            keybindings: [
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.F9,
            ],
            // A precondition for this action.
            precondition: null,
            // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
            keybindingContext: null,
            contextMenuGroupId: "navigation",
            contextMenuOrder: 1.5,
            // Method that will be executed when the action is triggered.
            // @param editor The editor instance is passed in as a convenience
            run: function (ed) {
                let lines = formatEditotFqueryFunc()

                ed.executeEdits('name-of-edit', [
                    {
                        range: editor.getModel().getFullModelRange(), // full range
                        text: lines, // target value here
                    },
                ]);

            },
        });
    }, 1);
}


export function formatEditotFqueryFunc() {
    const monacoModel = getMonacoModel()
    let text = monacoModel.getValue()

    // 使用正则表达式进行匹配，忽略大小写
    let regex = /(\w+)\s*=\s*(select|SELECT)[^;]+;/g;
    var matches = text.match(regex);

    const allFQuery: Array<string> = []
    if (matches) {
        matches.forEach(function (match, index) {
            var assignment = match.match(/(\w+)\s*=\s*(select|SELECT)/);
            if (assignment) {
                let variableName = assignment[1];
                let query = match.substring(match.indexOf(variableName)).trim();
                console.log(query)
                const partsIndex = query.indexOf('=');

                // if (parts.length === 2) {
                // const variableName = parts[0].trim();
                const queryString = query.substring(partsIndex + 1).trim();
                // console.log("Variable Name:", variableName);
                // console.log("Query String:", queryString);
                // const sqlStr = "`" + queryString + "`"

                let formattedSQL = formatFquery(queryString.replaceAll("//", "--//"))
                formattedSQL = formattedSQL.replaceAll("--//", "//")
                console.log(formattedSQL)

                text = text.replace(queryString, formattedSQL)
            }
        });
        console.log(text)
        // GM_setClipboard(text, "text")
        // monacoModel.setValue(text)

        return text
    } else {
        console.log("No matching SQL statements found in the text.");
    }
}