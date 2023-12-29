import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
// import { PiniaDevtools } from '@pinia/devtools'
// 通用字体
import "vfonts/Lato.css";
// 等宽字体
import "vfonts/FiraCode.css";
import naive from "naive-ui";
import { registerMenuCommand } from "./util/handelMonkeyMenu";

const pinia = createPinia();
// pinia.use(PiniaDevtools)

const app: HTMLElement = document.createElement("div");
app.className = "queryGenerator";
document.body.append(app);
createApp(App).use(naive).use(pinia).mount(app);

registerMenuCommand()

