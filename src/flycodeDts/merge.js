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

const tsFile = `import { useFlyStore } from "../store/flyStore";
import { Protocol } from "../type/protocol";
import { generateFullEntityDtsByProtocol } from "./EntityDts/FullEntityDtsGenerator";
import { generateInAndOutEntityDtsByProtocol } from "./EntityDts/InAndOutEntityDtsGenerator";


let entityDts: string
let inOutEntityDts: string
let init = false
export function RefreshExtraLib(onlyUIFlycode: boolean = false) {
    const flyStore = useFlyStore()
    const ExtraLibs = []
    if (!flyStore.addDtsEnable) {
        return
    }
    if (!init && !onlyUIFlycode) {
        init = true
        entityDts = generateFullEntityDtsByProtocol(flyStore.tableDatas)
        console.log("push")
    } else {
        inOutEntityDts = generateInAndOutEntityDtsByProtocol(flyStore.protocol)
    }

    if (onlyUIFlycode) {
        ExtraLibs.push({ content: UIFlycodeDts })
    } else {
        ExtraLibs.push({ content: flycodeDts })
        ExtraLibs.push({ content: entityDts })
    }
    if (inOutEntityDts != undefined) {
        ExtraLibs.push({ content: inOutEntityDts })
    }
    // @ts-ignore
    monaco.languages.typescript.javascriptDefaults.setExtraLibs(ExtraLibs)
    console.log("RefreshExtraLib", ExtraLibs)
}




const flycodeDts = {{flycodeDts}}
const UIFlycodeDts = {{UIFlycodeDts}}`
  .replace("{{flycodeDts}}", "`" + flycodeDtsContent + "`")
  .replace("{{UIFlycodeDts}}", "`" + uiFlycodeDtsContent + "`");

fs.writeFileSync("index.ts", tsFile);
