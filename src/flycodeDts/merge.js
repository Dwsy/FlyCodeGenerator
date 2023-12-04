import * as fs from "fs";
import * as glob from "glob";

const flycodeDtsFiles = glob.sync("./flycode/*.d.ts");
const uiflycodeDtsFiles = glob.sync("./uiflycode/*.d.ts");
const flycodeDtsContent = flycodeDtsFiles
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");
const uiFlycodeDtsContent = uiflycodeDtsFiles
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

const tsFile = `
import { useFlyStore } from "../store/flyStore";
import { Protocol } from "../type/protocol";
import { BoNewTemplate, BoTemplate, generateBONewDtsByProtocol, generateEntityInterfaceDtsByProtocol } from "./BoNew";
import { generateFullEntityDtsByProtocol } from "./EntityDts/FullEntityDtsGenerator";
import { generateInAndOutEntityDtsByProtocol } from "./EntityDts/InAndOutEntityDtsGenerator";


let entityDts: string
let inOutEntityDts: string
let BONewDts: string
let init = false
let tempBoNewDtsList = []
let tempBoNewEntityInterfaceDtsList = []

export function pushTempBoNewDtsList(boname) {
    const tableNameDataMap = useFlyStore().tableNameDataMap
    tempBoNewDtsList.push(BoNewTemplate.replaceAll("{{EntityName}}", boname))
    console.log("tempBoNewDtsList", tempBoNewDtsList)
    tempBoNewEntityInterfaceDtsList.push(generateEntityInterfaceDtsByProtocol([tableNameDataMap.get(boname)]))
    RefreshExtraLib(false)
}



export function RefreshExtraLib(onlyUIFlycode: boolean = false) {
    const flyStore = useFlyStore()
    const ExtraLibs = []
    if (!flyStore.addDtsEnable) {
        return
    }
    if (!init) {
        init = true
        entityDts = generateFullEntityDtsByProtocol(flyStore.tableDatas)
    } else {
        console.log(flyStore.protocol)
        console.log("protocol")
        if (flyStore.protocol != undefined) {
            inOutEntityDts = generateInAndOutEntityDtsByProtocol(flyStore.protocol)
            BONewDts = generateBONewDtsByProtocol(flyStore.protocol, flyStore.tableDataMap)
            if (!BONewDts) {
                BONewDts = BoTemplate.replace("{{BoNewList}}", "")
            }
        }
    }

    if (onlyUIFlycode || window.location.href.indexOf("uiedit") != -1) {
        ExtraLibs.push({ content: UIFlycodeDts })
    } else {
        if (inOutEntityDts != undefined) {
            ExtraLibs.push({ content: inOutEntityDts })
            ExtraLibs.push({ content: flycodeDts })
            ExtraLibs.push({ content: testDts })
            ExtraLibs.push({ content: entityDts })
            ExtraLibs.push({ content: BONewDts.replaceAll("{{tempDtsList}}", \`\$\{tempBoNewDtsList.join("")}\`) })
            ExtraLibs.push({ content: tempBoNewEntityInterfaceDtsList.join("") })
        }
    }


    // @ts-ignore
    monaco.languages.typescript.javascriptDefaults.setExtraLibs(ExtraLibs)
    console.log("RefreshExtraLib", ExtraLibs)
}


const testDts = \`
var select:Array<string>
var SELECT:Array<string>
\`


const flycodeDts = {{flycodeDts}}
const UIFlycodeDts = {{UIFlycodeDts}}`
  .replace("{{flycodeDts}}", "`" + flycodeDtsContent + "`")
  .replace("{{UIFlycodeDts}}", "`" + uiFlycodeDtsContent + "`");

fs.writeFileSync("index.ts", tsFile);
