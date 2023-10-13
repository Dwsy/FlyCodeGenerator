import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
import naive from "naive-ui";
import { GM_getValue, GM_registerMenuCommand, GM_setValue } from "$";

const pinia = createPinia();
const app: HTMLElement = document.createElement("div");
app.className = "queryGenerator";
document.body.append(app);
createApp(App).use(naive).use(pinia).mount(app);

GM_registerMenuCommand("🌞日间主题（仅本次）", () => {
  // @ts-ignore
  window.lightTheme(false);
});


const codeGeneratorEnable = GM_getValue("codeGeneratorEnable", false)
GM_registerMenuCommand(`${codeGeneratorEnable ? '✅' : '❌'}代码生成（Beta Version）`, () => {
  GM_setValue("codeGeneratorEnable", !codeGeneratorEnable)
  setTimeout(() => { window.location.reload() }, 100)
});
const addDtsEnable = GM_getValue("addDtsEnable", false)
GM_registerMenuCommand(`${addDtsEnable ? '✅' : '❌'}代码提示功能（Beta Version）`, () => {
  GM_setValue("addDtsEnable", !addDtsEnable)
  setTimeout(() => { window.location.reload() }, 100)
});