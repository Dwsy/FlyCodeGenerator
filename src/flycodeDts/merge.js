import * as fs from "fs";
import * as glob from "glob";

const dtsFiles = glob.sync(["./flycode/*.d.ts", "./uiflycode/*.d.ts"]);
const dtsContent = dtsFiles
  .map((file) => fs.readFileSync(file, "utf8"))
  .join("\n");

console.log(dtsContent);

const tsFile = `export function addTs() {

    // @ts-ignore
    monaco.languages.typescript.javascriptDefaults.addExtraLib(dts);
    console.log("添加DTS")
  
  }
  
  const dts = \`{{dts}}\``.replace("{{dts}}", dtsContent);

fs.writeFileSync("index.ts", tsFile);
