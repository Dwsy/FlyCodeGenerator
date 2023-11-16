import { useMessage } from "naive-ui";
import { pushTempBoNewDtsList } from "../../flycodeDts";
import { useFlyStore } from "../../store/flyStore";
import { PropertyTypeCode } from "../../type/model/propertyTypeCodeRef";
import { getTableShortName } from "../../util";
import { getMonacoModel } from "../../util/monacoUtil";
import { GM_setClipboard } from "$";

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

                var b = flyStore.tableNameDataMap.get(boName).properties.map((item) => {
                    if (item.propertytypecode == PropertyTypeCode.PrimaryKey.toString()) {
                        return `${shortName}.${item.columnname} = FLY.genId()`
                    } else {
                        let temp = `${shortName}.${item.columnname} = ${item.columnname}`
                        let len = temp.length
                        for (var i = 0; i < 55 - len; i++) {
                            temp += " "
                        }
                        return `${temp}//${item.propertyname}`
                    }
                })

                b.unshift(`var ${shortName} = BO.new("${boName}")`)
                console.log(b.join("\n"))
                // 删除当前行
                ed.executeEdits("source", [{
                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber + 1, 1),
                    text: ""
                }])
                ed.executeEdits("source", [{
                    range: new monaco.Range(ed.getPosition().lineNumber, 1, ed.getPosition().lineNumber, 1),
                    text: b.join("\n") + "\n\n"
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
            id: "FomatSql",
            label: "FomatSql",
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
                const str = getMonacoModel().getValueInRange(getMonacoModel().getFullModelRange())
                console.log(str)
                // const str = getMonacoModel().getLineContent(ed.getPosition().lineNumber);
                if (str.includes("批量插入语句:INSERT INTO")) {
                    let a = "批量插入语句:"
                    let aa = str.indexOf(a)
                    console.log(str.indexOf(a))
                    let b = ";批量插入参数:"
                    let bb = str.indexOf(b)
                    console.log(str.indexOf(b))

                    let sql = str.substring(aa + a.length, bb)

                    let values = str.substring(bb + b.length)


                    let vmap = JSON.parse(values)[0]
                    console.log(vmap)
                    let vmapKey = Object.keys(vmap)
                    vmapKey.forEach((d) => {
                        sql = sql.replace(`:${d},`, `${vmap[d]},`)
                        console.log(d, vmap[d])
                    })
                    sql = sql.replace(":platstatus", vmap['platstatus'])
                    useMessage().success("拼接插入语句成功，已复制到剪切板")
                    GM_setClipboard(sql, "text")
                    return
                }

                if (str.includes("批量插入语句:INSERT INTO")) {
                    let str = `2023-11-16 17:00:48【租户：1113041 登录名：15626299988 用户账号：1674251419546423296】批量插入语句:INSERT INTO yk_cost_item
                    (materialname, flat, price, quantities, subtotal, total, id, foreign_id, platcreatetime, platupdatetime, platcreateop, platupdateop, platstatus)
                   VALUES (:materialname, :flat, :price, :quantities, :subtotal, :total, :id, :foreign_id, :platcreatetime, :platupdatetime, :platcreateop, :platupdateop, :platstatus);批量插入参数:[{"__metaname":"yk_cost_item","materialname":"洼地","flat":"箱","price":"11","quantities":"1111","subtotal":"12221.00","total":null,"id":"1725076439642017792","foreign_id":null,"platcreatetime":1700125248251,"platupdatetime":1700125248251,"platcreateop":1674252555728850944,"platupdateop":1674252555728850944,"platstatus":1}]`
                    let a = "批量插入语句:"
                    let aa = str.indexOf(a)
                    console.log(str.indexOf(a))
                    let b = ";批量插入参数:"
                    let bb = str.indexOf(b)
                    console.log(str.indexOf(b))

                    let sql = str.substring(aa + a.length, bb)

                    let values = str.substring(bb + b.length)


                    let vmap = JSON.parse(values)[0]
                    console.log(vmap)
                    let vmapKey = Object.keys(vmap)
                    vmapKey.forEach((d) => {
                        sql = sql.replace(`:${d},`, `${vmap[d]},`)
                        console.log(d, vmap[d])
                    })
                    sql = sql.replace(":platstatus", vmap['platstatus'])
                    useMessage().success("拼接插入语句成功，已复制到剪切板")
                    GM_setClipboard(sql, "text")
                }

            },
        });
    }, 1);
}