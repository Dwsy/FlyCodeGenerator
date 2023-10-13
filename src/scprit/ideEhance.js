// ==UserScript==
// @name        New script - 127.0.0.1
// @namespace   Violentmonkey Scripts
// @match       http://localhost:3000/
// @grant       none
// @version     1.0
// @author      -
// @description 2023/9/26 13:59:39
// ==/UserScript==
window.global = window;

setInterval(fc1, 5000);
function fc1() {
  // console.log("鼠标右键事件");
  // 监听 e1 鼠标右键事件
  const elements = document.querySelectorAll(
    "#beSetting > div.right-side > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.param_show > div.content.params_tree_container > ul > li > span.ant-tree-node-content-wrapper > span > span > span > span"
  );
  elements.forEach((element) => {
    element.addEventListener("contextmenu", (event) => {
      console.log("E1");
      event.preventDefault();
      const text = element.innerText.match(/\((.*?)\)/)[1];
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    });
  });
  // 监听 e3 点击事件
  const e3 = document.querySelectorAll(
    "#beSetting > div.right-side > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.param_show > div.content.params_tree_container > ul > li > span.ant-tree-switcher"
  )[0];
  e3.addEventListener("click", (event) => {
    console.log("E3");
    const elements = document.querySelectorAll(
      "#beSetting > div.right-side > div > div > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content > div > div.param_show > div.content.params_tree_container > ul > li > ul > li > span.ant-tree-node-content-wrapper.ant-tree-node-content-wrapper-normal > span > span > span > span"
    );
    elements.forEach((element) => {
      element.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        const text = element.innerText.match(/\((.*?)\)/)[1];
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text);
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
      });
    });
  });
}

let dbTsd = `// 3.1.2. DB 数据库操作
declare namespace DB {
    /**
     * 将业务对象或数组添加到业务数据库。如果业务对象类型为数组，则会批量操作。
     * @param obj 业务对象或数组
     */
    function insert(obj: any | any[]): void;

    /**
     * 将业务对象或数组更新到业务数据库。如果业务对象类型为数组，则会批量操作。
     * @param obj 业务对象或数组
     */
    function update(obj: any | any[]): void;

    /**
     * 根据传入的字段作为条件更新业务对象。如果业务对象类型为数组，则会批量操作。
     * 使用“:”分割加入时间格式表达式来格式化时间条件字段。
     * @param obj 业务对象或数组
     * @param fieldsAndConditions 字段和条件的键值对，例如："业务对象.字段A" 或 "业务对象.字段B:yyyy-MM-dd"
     */
    function update(obj: any | any[], ...fieldsAndConditions: string[]): void;

    /**
     * 根据业务对象的ID，从业务数据库中移除数据（逻辑删除）。
     * 如果业务对象类型为数组，则会批量操作。
     * @param obj 业务对象或数组
     */
    function delete(obj: any | any[]): void;

    /**
     * 根据ID唯一性规则自动识别业务对象的新增和更新到业务数据库，不做批量处理。
     * 由于save的内部机制需要查询后判断插入还是更新，若做批量可能影响性能，将批量交由外部处理。
     * @param obj 业务对象
     * @param fieldsAndConditions 字段和条件的键值对，例如："业务对象.字段A" 或 "业务对象.字段B:yyyy-MM-dd"
     */
    function save(obj: any, ...fieldsAndConditions: string[]): void;

    /**
     * 根据删除条件对象进行物理删除，然后插入业务对象/数组。
     * 该操作是物理删除，建议只使用在关联表上。
     * @param obj 业务对象或数组
     * @param deleteCondition 删除条件对象
     */
    function replace(obj: any | any[], deleteCondition: any): void;

    /**
     * 根据传入的业务对象去寻找依赖它的对象。
     * 返回值格式：{"result": 布尔值, "refBy": "对象英文名", "refName": "对象中文名"}
     * @param obj 业务对象
     */
    function findObjectRef(obj: any): { result: boolean, refBy: string, refName: string };
}

`;
let userDts = `// 3.1.2. 登录会话信息

/**
 * SESSION 对象为 flycode 内置对象，可获取到当前登录人的一些信息。
 */
declare namespace SESSION {
    /**
     * 组织编码
     */
    const orgcode: string;

    /**
     * 用户编码
     */
    const usercode: string;

    /**
     * 岗位编码
     */
    const pscode: string;

    /**
     * 成员编码
     */
    const mbcode: string;

    /**
     * 账号编码
     */
    const accode: string;

    /**
     * 客户端类型编码 (1-web管理端、2-iPhone端、3-Android)
     */
    const ctcode: string;

    /**
     * 职位编码 (模板岗位编码)
     */
    const rpscode: string;

    /**
     * 组织维度Id
     */
    const orgdim: string;

    /**
     * code 编码
     */
    const codepath: string;

    /**
     * 判断当前登录人是否是组织架构叶子节点的
     */
    const isleaforg: boolean;

    /**
     * 当前应用编码 (sales, distribution, promotion)
     */
    const appcode: string;

    /**
     * 当前用户可用应用编码列表
     */
    const appcodes: string[];

    /**
     * 岗位类别
     */
    const categorycode: string;

    /**
     * 子产品编码
     */
    const subpdcodes: string[];
}

// 以下是 System 对象的补充信息
declare namespace System {
    /**
     * 获取用户信息
     */
    function user(): {
        accountCode: string;
        userinfoName: string;
        userinfoID: string;
        tenantName: string;
        tenantCode: string;
        orgName: string;
        orgCode: string;
        positionID: string;
        positionName: string;
        mbCode: string;
        refpositionID: string;
        appCode: string;
        appCodes: string[];
        categoryCode: string;
        subpdCodes: string[];
    };

    /**
     * 获取当前用户登录信息
     */
    function context(): {
        isOffline: boolean;
        token: string;
        httpAddress: string;
        versionName: string;
        versionCode: string;
    };

    /**
     * 获取一个的 uniqueid
     */
    function uniqueid(): string;

    /**
     * 获取服务端当前时间
     */
    function date(): Date;

    /**
     * 获取功能权限
     */
    function functionCodes(): string[];

    /**
     * 功能权限检测
     * @param codes 功能权限编码列表
     */
    function functionCheck(codes: string[]): boolean;

    /**
     * 控制日志输出
     * @param message 日志消息
     */
    function consloe(message: string): void;
}

`;

let dateDtes = `// 3.1.4. 日期时间

/**
 * 3.1.4.1. 当前日期
 * 获取当前时间字符串 (返回 UTC 时区的时间字符串)
 * @returns 当前时间，精确到毫秒 yyyy-MM-dd HH:mm:ss.fff
 */
declare function getCurrentTime(): string;

/**
 * 获取当前日期字符串 (返回 UTC 时区的日期字符串)
 * @returns 当前日期，精确到天 yyyy-MM-dd
 */
declare function getCurrentDate(): string;

/**
 * 3.1.4.2. 日期格式化
 * 日期格式化
 * @param dateObj Date 对象
 * @param format 表达式 yyyy-MM-dd HH:mm:ss
 * @returns 格式化后的日期字符串
 */
declare function formatDate(dateObj: Date, format: string): string;

/**
 * 3.1.4.3. 日期常用API
 * 时间的转换
 */

/**
 * 时间戳 --> Date
 * @param timestamp 时间戳
 * @returns 转换后的 Date 对象
 */
declare function parseTimestampToDate(timestamp: number): Date;

/**
 * Date --> 时间戳
 * @param dateObj Date 对象
 * @returns 时间戳
 */
declare function convertDateToTimestamp(dateObj: Date): number;

/**
 * 时间字符串 --> Date
 * @param dateString 时间字符串
 * @returns 转换后的 Date 对象
 */
declare function parseStringToDate(dateString: string): Date;

/**
 * Date --> 时间字符串
 * @param dateObj Date 对象
 * @param format 时间格式，如 "yyyy-MM-dd HH:mm:ss"
 * @returns 格式化后的时间字符串
 */
declare function formatDateToString(dateObj: Date, format: string): string;

/**
 * 获取时间格式为 "yyyy-MM-dd HH:mm:ss" 的时间字符串
 * @param dateObj Date 对象
 * @returns 时间字符串
 */
declare function getTimeString(dateObj: Date): string;

/**
 * 获取时间格式为 "yyyy-MM-dd" 的时间字符串
 * @param dateObj Date 对象
 * @returns 日期字符串
 */
declare function getDateString(dateObj: Date): string;

/**
 * 时间段的获取
 */

/**
 * 获取今日开始时间
 * @param dateObj Date 对象
 * @returns 今日开始时间
 */
declare function getDayBegin(dateObj: Date): Date;

/**
 * 获取今日结束时间
 * @param dateObj Date 对象
 * @returns 今日结束时间
 */
declare function getDayEnd(dateObj: Date): Date;

/**
 * 获取昨日开始时间
 * @param dateObj Date 对象
 * @returns 昨日开始时间
 */
declare function getLastDayBegin(dateObj: Date): Date;

/**
 * 获取昨日结束时间
 * @param dateObj Date 对象
 * @returns 昨日结束时间
 */
declare function getLastDayEnd(dateObj: Date): Date;

/**
 * 获取本周开始时间
 * @param dateObj Date 对象
 * @returns 本周开始时间
 */
declare function getWeekBegin(dateObj: Date): Date;

/**
 * 获取本周结束时间
 * @param dateObj Date 对象
 * @returns 本周结束时间
 */
declare function getWeekEnd(dateObj: Date): Date;

/**
 * 获取上周开始时间
 * @param dateObj Date 对象
 * @returns 上周开始时间
 */
declare function getLastWeekBegin(dateObj: Date): Date;

/**
 * 获取上周结束时间
 * @param dateObj Date 对象
 * @returns 上周结束时间
 */
declare function getLastWeekEnd(dateObj: Date): Date;

/**
 * 获取本月开始时间
 * @param dateObj Date 对象
 * @returns 本月开始时间
 */
declare function getMonthBegin(dateObj: Date): Date;

/**
 * 获取本月结束时间
 * @param dateObj Date 对象
 * @returns 本月结束时间
 */
declare function getMonthEnd(dateObj: Date): Date;

/**
 * 获取上月开始时间
 * @param dateObj Date 对象
 * @returns 上月开始时间
 */
declare function getLastMonthBegin(dateObj: Date): Date;

/**
 * 获取上月结束时间
 * @param dateObj Date 对象
 * @returns 上月结束时间
 */
declare function getLastMonthEnd(dateObj: Date): Date;

/**
 * 获取今年开始时间
 * @param dateObj Date 对象
 * @returns 今年开始时间
 */
declare function getYearBegin(dateObj: Date): Date;

/**
 * 获取今年结束时间
 * @param dateObj Date 对象
 * @returns 今年结束时间
 */
declare function getYearEnd(dateObj: Date): Date;

/**
 * 获取去年开始时间
 * @param dateObj Date 对象
 * @returns 去年开始时间
 */
declare function getLastYearBegin(dateObj: Date): Date;

/**
 * 获取去年结束时间
 * @param dateObj Date 对象
 * @returns 去年结束时间
 */
declare function getLastYearEnd(dateObj: Date): Date;

/**
 * 获取本季度开始时间
 * @param dateObj Date 对象
 * @returns 本季度开始时间
 */
declare function getQuarterBegin(dateObj: Date): Date;

/**
 * 获取本季度结束时间
 * @param dateObj Date 对象
 * @returns 本季度结束时间
 */
declare function getQuarterEnd(dateObj: Date): Date;

`;
let utilDts = `// 3.1.5. 工具库

/**
 * 3.1.5.1. 打印日志
 * 打印日志仅用于 IDE 调试 Flycode 使用，可在 IDE 输出调试日志。
 * @param message 日志信息
 */
declare namespace FLY {
  function log(message: string): void;
}

/**
 * 3.1.5.2. 分布式ID生成
 * 业务对象的ID为全局唯一ID，所有新建的业务对象的ID，都应该使用该API生成。
 * @returns 全局唯一的长整数数值
 */
declare namespace FLY {
  function genId(): number;
}

/**
 * 3.1.5.3. 自增序列
 * 有些业务编码，需要为其创建自增序列，使用该API生成，每个自增序列必须有一个全局唯一KEY。
 * @param key 自增序列的全局唯一键
 * @returns 自增序列的最后一个值
 */
declare namespace FLY {
  function nextval(key: string): number;
}

/**
 * 3.1.5.4. 地址转经纬度（高德地图）
 * 注意：此接口已被废弃，如需地图相关服务，请参考拓展库：高德地图服务
 * 可以把地址，比如“广州市天河区维多利亚广场” 转换成经纬度（高德地图）。
 * @param address 地址字符串
 * @returns 地址转换结果对象，包括状态、描述和经纬度
 */
declare namespace FLY {
  function geocode(address: string): { state: string; des: string; location: string };
}

/**
 * 3.1.5.4. js对象去除属性左右两端空格
 * 去除对象中属性值的左右空格
 * @param obj 待去除属性左右空格的对象
 * @returns 去除空格后的对象
 */
declare namespace FLY {
  function trimObjAttrValue(obj: Record<string, string>): Record<string, string>;
}

/**
 * 3.1.5.5. 字符串处理
 * 根据某字符截取字符串
 * @param str 原始字符串
 * @param separator 分隔符
 * @param fromEnd 从后面第几个开始截取
 * @returns 截取后的字符串
 */
declare namespace FLY {
  function substringLastAt(str: string, separator: string, fromEnd: number): string;
}

/**
 * 判断字符串是否为空
 * @param str 字符串
 * @returns 是否为空
 */
declare namespace FLY {
  function isBlank(str: string): boolean;
}

/**
 * 3.1.5.6. 数值转换
 * 保留小数(四舍五入)
 * @param num 数值
 * @param precision 保留几位小数
 * @returns 保留小数后的数值
 */
declare namespace FLY {
  function toRoundDecimal(num: number, precision: number): number;
}

/**
 * 保留小数(全部舍掉)
 * @param num 数值
 * @param precision 保留几位小数
 * @returns 保留小数后的数值
 */
declare namespace FLY {
  function toFloorDecimal(num: number, precision: number): number;
}

/**
 * 3.1.5.7. 字典Key查询
 * 根据字典编码获取字典Key
 * @param objectName 对象名称
 * @param code 字典编码
 * @returns 字典Key
 */
declare namespace FLY {
  function getDicKeyByCode(objectName: string, code: string): string;
}

/**
 * 3.1.5.8. 记录操作日志
 * 记录用户操作行为日志
 * @param moduleName 模块名称
 * @param operationType 操作类型
 * @param logMessage 操作日志信息
 */
declare namespace LOG {
  function recordLog(moduleName: string, operationType: string, logMessage: string): void;
}

`;
let addSuccess = false;
//添加代码提示
let addDef = setInterval(() => {
  if (typeof monaco != "undefined") {
    console.log("//添加代码提示");
    addTs(dbTsd + userDts + dateDtes + utilDts);
    addSuccess = true;
    clearInterval(addDef);
  } else {
    console.log("等待monaco加载");
  }
}, 1000);

function addTs(libSource) {
  console.log("//添加代码提示");
  monaco.languages.typescript.javascriptDefaults.addExtraLib(libSource);
  // monaco.editor.createModel(libSource, "typescript");
}

let BizObjects = {};
async function fetchGetBizObjectsData() {
  try {
    // 获取用户 Token 从 sessionStorage 中
    const userToken = sessionStorage.getItem("userToken");

    if (!userToken) {
      console.error("User token not found in sessionStorage");
      return;
    }

    // 构建请求头对象，包括重命名 Token 为 "Idetoken"
    const headers = new Headers({
      Idetoken: userToken,
      "Content-Type": "application/json", // 设置请求头的 Content-Type
    });

    // 构建请求体数据（如果需要的话）
    const requestBody = {
      // 在这里添加请求体的数据
    };

    // 发起 POST 请求
    const response = await fetch(
      "http://121.37.206.131:18001/bizserv/biz/getBizObjects",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody), // 如果有请求体数据的话，将其转换为 JSON 字符串
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json(); // 解析响应数据为 JSON
    BizObjects = data;
    // 处理响应数据
    console.log("BizObjects", data);
  } catch (error) {
    // 处理错误
    console.error("Fetch error:", error);
  }
}

// 调用异步函数
fetchGetBizObjectsData();
