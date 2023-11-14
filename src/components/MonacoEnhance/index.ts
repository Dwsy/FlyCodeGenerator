import { pushTempBoNewDtsList } from "../../flycodeDts";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode } from "../../type/model/propertyTypeCodeRef";
import { getMonacoModel } from "../../util/monacoUtil";

export const addBoNewAction = (editor) => {
    const flyStore = useFlyStore()
    setTimeout(() => {
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
                const match = lineContent.match(/BO.new\((.*?)\)/);
                const boName = match[1]
                var b = flyStore.tableNameDataMap.get(boName).properties.map((item) => {
                    if (item.propertytypecode == PropertyTypeCode.PrimaryKey.toString()) {
                        return `${boName}.${item.columnname} = FLY.genId()`
                    } else {
                        let temp = `${boName}.${item.columnname} = ${item.columnname}`
                        let len = temp.length
                        for (var i = 0; i < 55 - len; i++) {
                            temp += " "
                        }
                        return `${temp}//${item.propertyname}`
                    }
                })
                b.unshift(`var ${boName} = BO.new("${boName}")`)
                console.log(b.join("\n"))
                // 删除当前行
                ed.executeEdits("source", [{
                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
                    text: ""
                }])
                ed.executeEdits("source", [{
                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
                    text: b.join("\n") + "\n"
                }])
                pushTempBoNewDtsList(boName)
            },
        });
    }, 2000);
}