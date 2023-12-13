import { GM_getValue, GM_registerMenuCommand, GM_setValue } from "$";



/**
 * 注册菜单命令。
 * 
 * 这个函数会注册几个菜单命令，包括：
 * - 代码生成（Beta Version）：这个命令会切换代码生成器的启用/禁用状态。
 * - 代码提示功能（Beta Version）：这个命令会切换代码提示功能的启用/禁用状态。
 * - 彩虹括号：这个命令会切换彩虹括号的启用/禁用状态。
 * - 切换主题（Beta Version）：这个命令会显示主题切换界面。
 * 
 * 每次切换状态后，都会重新加载页面以应用新的设置。
 */
export const registerMenuCommand = () => {
    // GM_registerMenuCommand("🌞日间主题（仅本次）", () => {
    //     // @ts-ignore
    //     window.lightTheme(false);
    // });


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
    const bracketPairColorizationEnable = localStorage.getItem("bracketPairColorization") == "1"
    GM_registerMenuCommand(`${bracketPairColorizationEnable ? '✅' : '❌'}彩虹括号`, () => {
        GM_setValue("bracketPairColorizationEnable", !bracketPairColorizationEnable)
        if (bracketPairColorizationEnable) {
            localStorage.setItem("bracketPairColorization", "1")
        } else {
            localStorage.setItem("bracketPairColorization", "-1")
        }

        setTimeout(() => { window.location.reload() }, 100)
    });


    GM_registerMenuCommand(`切换主题（Beta Version）`, () => {
        // @ts-ignore
        window.showChangeTheme()

        // setTimeout(() => { window.location.reload() }, 100)
    });
    GM_registerMenuCommand(`${GM_getValue("szzrx", false) ? "关闭" : "开启"}私斋蒸鹅心模式❤`, () => {
        // @ts-ignore

        GM_setValue("szzrx", GM_getValue("szzrx", false))

        // setTimeout(() => { window.location.reload() }, 100)
    });

}