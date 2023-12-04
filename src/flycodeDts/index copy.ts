// import { useFlyStore } from "../store/flyStore";
// import { Protocol } from "../type/protocol";
// import { BoNewTemplate, BoTemplate, generateBONewDtsByProtocol, generateEntityInterfaceDtsByProtocol } from "./BoNew";
// import { generateFullEntityDtsByProtocol } from "./EntityDts/FullEntityDtsGenerator";
// import { generateInAndOutEntityDtsByProtocol } from "./EntityDts/InAndOutEntityDtsGenerator";


// let entityDts: string
// let inOutEntityDts: string
// let BONewDts: string
// let init = false
// let tempBoNewDtsList = []
// let tempBoNewEntityInterfaceDtsList = []

// export function pushTempBoNewDtsList(boname) {
//     const tableNameDataMap = useFlyStore().tableNameDataMap
//     tempBoNewDtsList.push(BoNewTemplate.replaceAll("{{EntityName}}", boname))
//     console.log("tempBoNewDtsList", tempBoNewDtsList)
//     tempBoNewEntityInterfaceDtsList.push(generateEntityInterfaceDtsByProtocol([tableNameDataMap.get(boname)]))
//     RefreshExtraLib(false)
// }



// export function RefreshExtraLib(onlyUIFlycode: boolean = false) {
//     const flyStore = useFlyStore()
//     const ExtraLibs = []
//     if (!flyStore.addDtsEnable) {
//         return
//     }
//     if (!init) {
//         init = true
//         entityDts = generateFullEntityDtsByProtocol(flyStore.tableDatas)
//     } else {
//         console.log(flyStore.protocol)
//         console.log("protocol")
//         if (flyStore.protocol != undefined) {
//             inOutEntityDts = generateInAndOutEntityDtsByProtocol(flyStore.protocol)
//             BONewDts = generateBONewDtsByProtocol(flyStore.protocol, flyStore.tableDataMap)
//             if (!BONewDts) {
//                 BONewDts = BoTemplate.replace("{{BoNewList}}", "")
//             }
//         }
//     }

//     if (onlyUIFlycode || window.location.href.indexOf("uiedit") != -1) {
//         ExtraLibs.push({ content: UIFlycodeDts })
//     } else {
//         if (inOutEntityDts != undefined) {
//             ExtraLibs.push({ content: inOutEntityDts })
//             ExtraLibs.push({ content: flycodeDts })
//             ExtraLibs.push({ content: testDts })
//             ExtraLibs.push({ content: entityDts })
//             ExtraLibs.push({ content: BONewDts.replaceAll("{{tempDtsList}}", `\n${tempBoNewDtsList.join("\n")}`) })
//             ExtraLibs.push({ content: tempBoNewEntityInterfaceDtsList.join("\n") })
//         }
//     }


//     // @ts-ignore
//     monaco.languages.typescript.javascriptDefaults.setExtraLibs(ExtraLibs)
//     console.log("RefreshExtraLib", ExtraLibs)
// }


// const testDts = `
// var select:Array<string>
// var SELECT:Array<string>
// `

// const flycodeDts = `
// declare global {
//     interface String {
//         /**
//          * 判断字符串是否为空
//          * @param str 字符串
//          * @returns 是否为空
//          */

//         static isBlank(str: string): boolean;
//     }
// }
// // 3.1.5. 工具库
// declare class FLY {
//     /**
//      * 3.1.5.1. 打印日志
//      * 打印日志仅用于 IDE 调试 Flycode 使用，可在 IDE 输出调试日志。
//      * @param message 日志信息
//      */

//     static log(message: string): void;


//     /**
//      * 3.1.5.2. 分布式ID生成
//      * 业务对象的ID为全局唯一ID，所有新建的业务对象的ID，都应该使用该API生成。
//      * @returns 全局唯一的长整数数值
//      */

//     static genId(): number;


//     /**
//      * 3.1.5.3. 自增序列
//      * 有些业务编码，需要为其创建自增序列，使用该API生成，每个自增序列必须有一个全局唯一KEY。
//      * @param key 自增序列的全局唯一键
//      * @returns 自增序列的最后一个值
//      */

//     static nextval(key: string): number;


//     /**
//      * 3.1.5.4. 地址转经纬度（高德地图）
//      * 注意：此接口已被废弃，如需地图相关服务，请参考拓展库：高德地图服务
//      * 可以把地址，比如“广州市天河区维多利亚广场” 转换成经纬度（高德地图）。
//      * @param address 地址字符串
//      * @returns 地址转换结果对象，包括状态、描述和经纬度
//      */

//     static geocode(address: string): { state: string; des: string; location: string };


//     /**
//      * 3.1.5.4. js对象去除属性左右两端空格
//      * 去除对象中属性值的左右空格
//      * @param obj 待去除属性左右空格的对象
//      * @returns 去除空格后的对象
//      */

//     static trimObjAttrValue(obj: Record<string, string>): Record<string, string>;


//     /**
//      * 3.1.5.5. 字符串处理
//      * 根据某字符截取字符串
//      * @param str 原始字符串
//      * @param separator 分隔符
//      * @param fromEnd 从后面第几个开始截取
//      * @returns 截取后的字符串
//      */

//     static substringLastAt(str: string, separator: string, fromEnd: number): string;


//     /**
//      * 判断字符串是否为空
//      * @param str 字符串
//      * @returns 是否为空
//      */

//     static isBlank(str: string): boolean;


//     /**
//      * 3.1.5.6. 数值转换
//      * 保留小数(四舍五入)
//      * @param num 数值
//      * @param precision 保留几位小数
//      * @returns 保留小数后的数值
//      */

//     static toRoundDecimal(num: number, precision: number): number;


//     /**
//      * 保留小数(全部舍掉)
//      * @param num 数值
//      * @param precision 保留几位小数
//      * @returns 保留小数后的数值
//      */

//     static toFloorDecimal(num: number, precision: number): number;


//     /**
//      * 3.1.5.7. 字典Key查询
//      * 根据字典编码获取字典Key
//      * @param objectName 对象名称
//      * @param code 字典编码
//      * @returns 字典Key
//      */

//     static getDicKeyByCode(objectName: string, code: string): string;
// }

// /**
//  * 3.1.5.8. 记录操作日志
//  * 记录用户操作行为日志
//  * @param moduleName 模块名称
//  * @param operationType 操作类型
//  * @param logMessage 操作日志信息
//  */
// declare class LOG {
//     static recordLog(moduleName: string, operationType: string, logMessage: string): void;

// }

// // 3.1.2. 登录会话信息

// /**
//  * SESSION 对象为 flycode 内置对象，可获取到当前登录人的一些信息。
//  */
// declare class SESSION {
//     /**
//      * 组织编码
//      */
//     static const orgcode: string;

//     /**
//      * 用户编码
//      */
//     static const usercode: string;

//     /**
//      * 岗位编码
//      */
//     static const pscode: string;

//     /**
//      * 成员编码
//      */
//     static const mbcode: string;

//     /**
//      * 账号编码
//      */
//     static const accode: string;

//     /**
//      * 客户端类型编码 (1-web管理端、2-iPhone端、3-Android)
//      */
//     static const ctcode: string;

//     /**
//      * 职位编码 (模板岗位编码)
//      */
//     static const rpscode: string;

//     /**
//      * 组织维度Id
//      */
//     static const orgdim: string;

//     /**
//      * code 编码
//      */
//     static const codepath: string;

//     /**
//      * 判断当前登录人是否是组织架构叶子节点的
//      */
//     static  const isleaforg: boolean;

//     /**
//      * 当前应用编码 (sales, distribution, promotion)
//      */
//     static const appcode: string;

//     /**
//      * 当前用户可用应用编码列表
//      */
//     static  const appcodes: string[];

//     /**
//      * 岗位类别
//      */
//     static const categorycode: string;

//     /**
//      * 子产品编码
//      */
//     static  const subpdcodes: string[];
// }

// // // 以下是 System 对象的补充信息 前后端flycode会混
// // declare class System {
// //     // /**
// //     //  * 获取用户信息
// //     //  */
// //     // static user(): {
// //     //     accountCode: string;
// //     //     userinfoName: string;
// //     //     userinfoID: string;
// //     //     tenantName: string;
// //     //     tenantCode: string;
// //     //     orgName: string;
// //     //     orgCode: string;
// //     //     positionID: string;
// //     //     positionName: string;
// //     //     mbCode: string;
// //     //     refpositionID: string;
// //     //     appCode: string;
// //     //     appCodes: string[];
// //     //     categoryCode: string;
// //     //     subpdCodes: string[];
// //     // };

// //     // /**
// //     //  * 获取当前用户登录信息
// //     //  */
// //     // static context(): {
// //     //     isOffline: boolean;
// //     //     token: string;
// //     //     httpAddress: string;
// //     //     versionName: string;
// //     //     versionCode: string;
// //     // };

// //     /**
// //      * 获取一个的 uniqueid
// //      */
// //     static uniqueid(): string;

// //     /**
// //      * 获取服务端当前时间
// //      */
// //     static date(): Date;

// //     /**
// //      * 获取功能权限
// //      */
// //     static staticCodes(): string[];

// //     /**
// //      * 功能权限检测
// //      * @param codes 功能权限编码列表
// //      */
// //     static staticCheck(codes: string[]): boolean;

// //     /**
// //      * 控制日志输出
// //      * @param message 日志消息
// //      */
// //     static consloe(message: string): void;
// // }


// /**
//  * DB 数据库操作
//  */
// declare class DB {
//     /**
//      * 将业务对象或数组添加到业务数据库。如果业务对象类型为数组，则会批量操作。
//      * @param BusinessObject 业务对象或数组
//      */
//     static insert(BusinessObject: BusinessObject | BusinessObject[]): void;

//     /**
//      * 将业务对象或数组更新到业务数据库。如果业务对象类型为数组，则会批量操作。
//      * @param BusinessObject 业务对象或数组
//      */
//     static update(BusinessObject: BusinessObject | BusinessObject[]): void;

//     /**
//      * 根据传入的字段作为条件更新业务对象。如果业务对象类型为数组，则会批量操作。
//      * 使用“:”分割加入时间格式表达式来格式化时间条件字段。
//      * @param BusinessObject 业务对象或数组
//      * @param fieldsAndConditions 字段和条件的键值对，例如："业务对象.字段A" 或 "业务对象.字段B:yyyy-MM-dd"
//      */
//     static update(BusinessObject: BusinessObject | BusinessObject[], ...fieldsAndConditions: string[]): void;

//     /**
//      * 根据业务对象的ID，从业务数据库中移除数据（逻辑删除）。
//      * 如果业务对象类型为数组，则会批量操作。
//      * @param BusinessObject 业务对象或数组
//      */
//     static delete(BusinessObject: BusinessObject | BusinessObject[]): void;


//     /**
//      * 根据ID唯一性规则自动识别业务对象的新增和更新到业务数据库，不做批量处理。
//      * 由于save的内部机制需要查询后判断插入还是更新，若做批量可能影响性能，将批量交由外部处理。
//      * @param BusinessObject 业务对象
//      * @param fieldsAndConditions 字段和条件的键值对，例如："业务对象.字段A" 或 "业务对象.字段B:yyyy-MM-dd"
//      */
//     static save(BusinessObject: BusinessObject, ...fieldsAndConditions: string[]): void;

//     /**
//      * 根据删除条件对象进行物理删除，然后插入业务对象/数组。
//      * 该操作是物理删除，建议只使用在关联表上。
//      * @param BusinessObject 业务对象或数组
//      * @param deleteCondition 删除条件对象
//      */
//     static replace(BusinessObject: BusinessObject | BusinessObject[], deleteCondition: BusinessObject): void;

//     /**
//      * 根据传入的业务对象去寻找依赖它的对象。
//      * 返回值格式：{"result": 布尔值, "refBy": "对象英文名", "refName": "对象中文名"}
//      * @param BusinessObject 业务对象
//      */
//     static findBusinessObjectectRef(BusinessObject: BusinessObject): { result: boolean, refBy: string, refName: string };
// }
// declare class Date {
//     /**
//      * 格式化日期
//      * @param formatStr 日期格式字符串
//      * @returns 格式化后的日期字符串
//      */
//     Format(formatStr: string): string;

//     /**
//      * 获取时间戳
//      * @returns 时间戳
//      */
//     getTime(): number;

//     /**
//      * 获取时间格式为“yyyy-MM-dd HH:mm:ss”的时间字符串
//      * @returns 时间字符串
//      */
//     time(): string;

//     /**
//      * 获取时间格式为“yyyy-MM-dd”的时间字符串
//      * @returns 时间字符串
//      */
//     date(): string;

//     /**
//      * 获取当天开始时间
//      * @returns 当天开始时间
//      */
//     getDayBegin(): Date;

//     /**
//      * 获取当天结束时间
//      * @returns 当天结束时间
//      */
//     getDayEnd(): Date;

//     /**
//      * 获取昨天开始时间
//      * @returns 昨天开始时间
//      */
//     getLastDayBegin(): Date;

//     /**
//      * 获取昨天结束时间
//      * @returns 昨天结束时间
//      */
//     getLastDayEnd(): Date;

//     /**
//      * 获取本周开始时间
//      * @returns 本周开始时间
//      */
//     getWeekBegin(): Date;

//     /**
//      * 获取本周结束时间
//      * @returns 本周结束时间
//      */
//     getWeekEnd(): Date;

//     /**
//      * 获取上周开始时间
//      * @returns 上周开始时间
//      */
//     getLastWeekBegin(): Date;

//     /**
//      * 获取上周结束时间
//      * @returns 上周结束时间
//      */
//     getLastWeekEnd(): Date;

//     /**
//      * 获取本月开始时间
//      * @returns 本月开始时间
//      */
//     getMonthBegin(): Date;

//     /**
//      * 获取本月结束时间
//      * @returns 本月结束时间
//      */
//     getMonthEnd(): Date;

//     /**
//      * 获取上月开始时间
//      * @returns 上月开始时间
//      */
//     getLastMonthBegin(): Date;

//     /**
//      * 获取上月结束时间
//      * @returns 上月结束时间
//      */
//     getLastMonthEnd(): Date;

//     /**
//      * 获取本年开始时间
//      * @returns 本年开始时间
//      */
//     getYearBegin(): Date;

//     /**
//      * 获取本年结束时间
//      * @returns 本年结束时间
//      */
//     getYearEnd(): Date;

//     /**
//      * 获取上年开始时间
//      * @returns 上年开始时间
//      */
//     getLastYearBegin(): Date;

//     /**
//      * 获取上年结束时间
//      * @returns 上年结束时间
//      */
//     getLastYearEnd(): Date;

//     /**
//      * 获取本季度开始时间
//      * @returns 本季度开始时间
//      */
//     getQuarterBegin(): Date;

//     /**
//      * 获取本季度结束时间
//      * @returns 本季度结束时间
//      */
//     getQuarterEnd(): Date;

//     /**
//      * 将时间戳转换为Date对象
//      * @param timestamp 时间戳
//      * @returns Date对象
//      */
//     static parseDate(timestamp: number): Date;

//     /**
//      * 将时间字符串转换为Date对象
//      * @param dateString 时间字符串
//      * @returns Date对象
//      */
//     constructor(dateString: string);
// }`
// const UIFlycodeDts = `/**
//  * 表示用于获取用户信息的 System 类。
//  * @declare
//  */
// declare class System {
//     /**
//      * 获取用户信息。
//      * @returns {UserInfoDictionary} - 包含用户信息的字典。
//      * 用户信息包括：
//      * - accountCode
//      * - userinfoName
//      * - userinfoID
//      * - tenantName
//      * - tenantCode
//      * - orgName
//      * - orgCode
//      * - positionID
//      * - positionName
//      * - mbCode
//      * - refpositionID
//      * - appCode
//      * - appCodes
//      * - categoryCode
//      * - subpdCodes
//      * @example
//      * var userInfo = System.user();
//      * var appCode = System.user().appCode;
//      */
//     static user(): UserInfoDictionary;

//     /**
//      * 获取当前用户登录信息。
//      * @returns {UserContextDictionary} - 包含当前用户登录信息的字典。
//      * 信息包括：
//      * - isOffline (Bool): 当前是否离线
//      * - token (String): 当前用户登录的 token
//      * - httpAddress (String): HTTP 请求 URL 头
//      * - versionName (String): 版本名称
//      * - versionCode (String): 版本号
//      * @example
//      * var token = System.context().token;
//      */
//     static context(): UserContextDictionary;

//     /**
//      * 获取一个唯一的 uniqueid。
//      * @param {number} count - 要获取的 uniqueid 数量。
//      * @returns {String|[String]} - 一个或多个 uniqueid。
//      * @example
//      * var uniqueid = System.uniqueid();
//      */
//     static uniqueid(count?: number): String | [String];

//     /**
//      * 获取服务端当前时间。
//      * @returns {Date} - 服务端当前时间的 Date 对象。
//      * @example
//      * var now = System.date();
//      */
//     static date(): Date;

//     /**
//      * 获取功能权限。
//      * @returns {Array} - 当前用户的完整功能权限 code 的数组。
//      * @example
//      * var fc = System.functionCodes();
//      */
//     static functionCodes(): Array;

//     /**
//      * 功能权限检测。
//      * @param {Array} functionCodes - 要检测的功能点的 code 数组。
//      * @returns {Bool} - 如果只有所有权限都有时才返回 true，其他情况都返回 false。
//      * @example
//      * var r = System.functionCheck(['80998877734324']);
//      * if (r == true) {
//      *     // 包含被检查的功能点
//      * }
//      */
//     static functionCheck(functionCodes: Array): Bool;

//     /**
//      * 控制日志输出。
//      * @param {String} msg - 要输出的日志消息。
//      * @example
//      * System.console('request is OK');
//      */
//     static console(msg: String): void;

//     /**
//      * 把日志发送到IDE。注意：此方法只有在开发模式下生效。
//      * @param {String|Dictionary|Array|Number|Function} p - 日志输出内容，可以是多种类型的数据。
//      * @param {String} title - 日志在IDE中显示的标题，可以为空，为空时默认显示“UIFlyCode打印”。
//      * @example
//      *  没有 title 入参
//      * System.ideLog('request is OK');
//      * 
//      *  有 title 入参
//      * System.ideLog('request is OK', '列表请求结果');
//      * 
//      *  通过回调函数返回日志内容
//      * System.ideLog(function() {
//      *     return 'request is OK';
//      * });
//      * 
//      * System.ideLog(function() {
//      *     return 'request is OK';
//      * }, '列表请求结果');
//      */
//     static ideLog(p: String | Dictionary | Array | Number | Function, title?: String): void;

//     /**
//      * 根据 key 获取对应的导航目录信息。
//      * @param {String} key - 指定的导航目录的 key。
//      * @returns {Array} - 对应 key 的目录下所有节点的信息。
//      * @example
//      * // 调用示例
//      * var pagecode = System.navinfo('applist')[0].pagecode;
//      */
//     static navinfo(key: String): Array;
// }

// /**
//  * 包含用户信息的字典。
//  */
// type UserInfoDictionary = {
//     /**
//      * 用户的账户编码。
//      */
//     accountCode?: string;

//     /**
//      * 用户的名称。
//      */
//     userinfoName?: string;

//     /**
//      * 用户的ID。
//      */
//     userinfoID?: string;

//     /**
//      * 企业名称。
//      */
//     tenantName?: string;

//     /**
//      * 企业编号。
//      */
//     tenantCode?: string;

//     /**
//      * 组织名称。
//      */
//     orgName?: string;

//     /**
//      * 组织编号。
//      */
//     orgCode?: string;

//     /**
//      * 职位ID。
//      */
//     positionID?: string;

//     /**
//      * 职位名称。
//      */
//     positionName?: string;

//     /**
//      * mbCode。
//      */
//     mbCode?: string;

//     /**
//      * 职位编码。
//      */
//     refpositionID?: string;

//     /**
//      * 当前登录的应用编码。
//      */
//     appCode?: string;

//     /**
//      * 当前租户的应用列表。
//      */
//     appCodes?: string[];

//     /**
//      * 当前的职位类别。
//      */
//     categoryCode?: string;

//     /**
//      * 当前租户子产品列表。
//      */
//     subpdCodes?: string[];
// };

// /**
//  * 包含当前用户登录信息的字典。
//  */
// type UserContextDictionary = {
//     /**
//      * 当前是否离线。
//      */
//     isOffline: boolean;

//     /**
//      * 当前用户登录的 token。
//      */
//     token: string;

//     /**
//      * HTTP 请求 URL 头。
//      */
//     httpAddress: string;

//     /**
//      * 版本名称。
//      */
//     versionName: string;

//     /**
//      * 版本号。
//      */
//     versionCode: string;
// };




// /**
//  * 表示用于表单操作和控制的 Page 对象。
//  */
// declare class Page {
//     /**
//      * 检查当前表单状态。
//      * @param status - 要检查的状态（可能的值：“new”、“edit”、“view”）。
//      * @returns 如果表单状态与提供的状态匹配，则为 true。
//      */
//     static statusIs(status: "new" | "edit" | "view"): boolean;

//     /**
//      * 设置表单标题。
//      * @param title - 要设置的标题。
//      */
//     static setTitle(title: string): void;

//     /**
//      * 获取传递给表单的参数。
//      * @param param - 要检索的参数的名称。
//      * @returns 包含参数值的对象。
//      */
//     static getLinkParams(param: string): Record<string, any>;

//     /**
//      * 刷新表单布局。
//      */
//     static applyLayout(): void;

//     /**
//      * 获取单个表单内存字段的值。
//      * @param key - 内存字段的名称。
//      * @returns 内存字段的值。
//      */
//     static getValue(key: string): any;

//     /**
//      * 获取多个表单内存字段的值。
//      * @param keys - 内存字段名称的数组。
//      * @returns 包含内存字段值的对象。
//      */
//     static getValues(keys: string[]): Record<string, any>;

//     /**
//      * 设置单个表单内存字段的值。
//      * @param key - 内存字段的名称。
//      * @param value - 要设置的值。
//      */
//     static setValue(key: string, value: any): void;

//     /**
//      * 设置多个表单内存字段的值。
//      * @param data - 包含字段名称和值的对象。
//      */
//     static setValues(data: Record<string, any>): void;

//     /**
//      * 通过名称获取特定的表单控件。
//      * @param ctrlName - 控件的名称。
//      * @returns 表单控件。
//      */
//     static getCtrl(ctrlName: string): Ctrl;

//     /**
//      * 通过名称获取特定的选择器控件。
//      * @param ctrlName - 选择器控件的名称。
//      * @returns 选择器控件。
//      */
//     static getPickerCtrl(ctrlName: string): PickerCtrl;

//     /**
//      * 通过名称获取特定的数组控件。
//      * @param ctrlName - 数组控件的名称。
//      * @returns 数组控件。
//      */
//     static getArrayCtrl(ctrlName: string): ArrayCtrl;

//     /**
//      * 调用广播事件。
//      * @param eventName - 事件的名称。
//      */
//     static callEvent(eventName: string): void;

//     /**
//      * 调用表单事件。
//      * @param eventLabel - 表单事件的标签。
//      */
//     static runEvent(eventLabel: string): void;

//     /**
//      * 检查表单合法性。
//      * @param formName - 表单的名称。
//      * @returns 如果表单合法则返回 true，否则返回 false。
//      */
//     static constraintCheck(formName: string): boolean;

//     /**
//      * 显示进度框。
//      * @param message - 进度框中的消息。
//      */
//     static openProgress(message: string): void;

//     /**
//      * 关闭进度框。
//      */
//     static closeProgress(): void;

//     /**
//      * 弹出对话框。
//      * @param type - 对话框类型（info 或 error）。
//      * @param message - 对话框中的消息。
//      */
//     static alert(type: AlertType, message: string): void;

//     /**
//      * 链接到指定表单（名称）。
//      * @param formName - 表单的名称。
//      * @param params - 传递的参数对象。
//      */
//     static linkToPage(formName: string, params: Record<string, any>): void;

//     /**
//      * 链接到指定表单（code）。
//      * @param formCode - 表单的 code。
//      * @param params - 传递的参数对象。
//      */
//     static linkToPageCode(formCode: string, params: Record<string, any>): void;

//     /**
//      * 返回到指定层级的表单。
//      * @param level - 表单的层级。
//      */
//     static returnToPageCount(level: string): void;

//     /**
//      * 链接到指定表单（code）。
//      * @param formCode - 表单的 code。
//      * @param params - 传递的参数对象。
//      */
//     static link(formCode: string, params: Record<string, any>): void;

//     /**
//      * 返回到上一级表单。
//      */
//     static return(): void;
// }


// /**
//  * 表单事件操作的接口。
//  * @interface
//  */
// declare class Page {
//     /**
//      * 调用广播事件。
//      * @param eventName - 事件的名称。
//      */
//     static callEvent(eventName: string): void;

//     /**
//      * 调用表单事件。
//      * @param eventLabel - 表单事件的标签。
//      */
//     static runEvent(eventLabel: string): void;

//     /**
//      * 检查表单合法性。
//      * @param formName - 表单的名称。
//      * @returns 如果表单合法则返回 true，否则返回 false。
//      */
//     static constraintCheck(formName: string): boolean;

//     /**
//      * 显示进度框。
//      * @param message - 进度框中的消息。
//      */
//     static openProgress(message: string): void;

//     /**
//      * 关闭进度框。
//      */
//     static closeProgress(): void;

//     /**
//      * 弹出对话框。
//      * @param type - 对话框类型（info 或 error）。
//      * @param message - 对话框中的消息。
//      */
//     static alert(type: AlertType, message: string): void;

//     /**
//      * 链接到指定表单（名称）。
//      * @param formName - 表单的名称。
//      * @param params - 传递的参数对象。
//      */
//     static linkToPage(formName: string, params: Record<string, any>): void;

//     /**
//      * 链接到指定表单（code）。
//      * @param formCode - 表单的 code。
//      * @param params - 传递的参数对象。
//      */
//     static linkToPageCode(formCode: string, params: Record<string, any>): void;

//     /**
//      * 返回到指定层级的表单。
//      * @param level - 表单的层级。
//      */
//     static returnToPageCount(level: string): void;

//     /**
//      * 链接到指定表单（code）。
//      * @param formCode - 表单的 code。
//      * @param params - 传递的参数对象。
//      */
//     static link(formCode: string, params: Record<string, any>): void;

//     /**
//      * 返回到上一级表单。
//      */
//     static return(): void;
// }

// /**
//  * 表示对话框的类型。
//  * @enum
//  */
// declare enum AlertType {
//     /**
//      * 信息对话框。
//      */
//     info,

//     /**
//      * 错误对话框。
//      */
//     error,
// }



// declare class Ctrl {
//     /**
//      * 控件编码，只读。
//      */
//     code: string;

//     /**
//      * 控件值，可以是基础数据类型、字典或数组，具体类型取决于控件的种类。
//      */
//     value: string | Dictionary | any[];

//     /**
//      * 获取数值型控件的数字值，便于直接用于计算或比较。
//      */
//     floatValue: number;

//     /**
//      * 控件的显示或隐藏状态
//      */
//     hidden: boolean;

//     /**
//      * 控件的只读状态，设置后，控件会自动更新显示状态。
//      */
//     readonly: boolean;

//     /**
//      * 控件的必填状态，设置后，控件会自动更新显示状态。
//      */
//     required: boolean;

//     /**
//      * 控件的前景色，用于设置或获取控件的前景颜色。
//      */
//     color: string;

//     /**
//      * 控件的背景色，用于设置或获取控件的背景颜色。
//      */
//     bgcolor: string;

//     /**
//      * 设置控件中某一属性的值。
//      *
//      * @param propertyName - 控件属性的名字
//      * @param newValue - 属性对应的值
//      * @param groupIndex - 指定属性所在分组的序号（仅适用于分组型控件）
//      * @example
//      *  设置文本控件前景色为内置颜色 red
//      * textCtrl.setProperty('color', Color.red);
//      *
//      *  设置文本控件文字的排版属性
//      * textCtrl.setProperty('textAlign', 'center');
//      */
//     setProperty(propertyName: string, newValue: any, groupIndex?: number): void;

//     /**
//      * 获取控件中某一属性的值。
//      *
//      * @param propertyName - 控件属性的名字
//      * @param groupIndex - 属性所在分组的序号
//      * @returns 属性的值
//      * @example
//      *  获取文本控件的前景色
//      * var color = textCtrl.getProperty('color');
//      */
//     getProperty(propertyName: string, groupIndex?: number): any;

//     /**
//      * 设置控件的值。
//      *
//      * @param value - 控件的值
//      * @param setter - 控件值设置规则
//      * @example
//      *  设置定位控件 address 属性的值
//      * var address = '广州天河';
//      * var location1Ctrl = Page.getCtrl('定位控件1');
//      * var setter = CtrlValueSetter('address');
//      * location1Ctrl.setValue(address, setter);
//      *
//      *  直接把 value 赋给控件，由控件自行处理
//      * var position = {'lat': 23.242342, 'lng': 133.556.433231, 'address': '中国'};
//      * var location2Ctrl = Page.getCtrl('定位控件2');
//      * location2Ctrl.setValue(position);
//      */
//     setValue(value: any, setter?: CtrlValueSetter): void;

//     /**
//      * 获取控件的值。
//      *
//      * @param getter - 控件值获取规则
//      * @returns 控件的值
//      * @example
//      *  获取定位控件 address 属性的值
//      * var location1Ctrl = Page.getCtrl('定位控件1');
//      * var getter = CtrlValueGetter('address');
//      * var address = location1Ctrl.getValue(getter);
//      *
//      *  不指定取值规则，返回值由控件决定
//      * var location2Ctrl = Page.getCtrl('定位控件2');
//      * var position = location2Ctrl.getValue();
//      */
//     getValue(getter?: Getter): any;

//     /**
//      * 用于校验规则很复杂时，将错误提示信息提供给控件显示。
//      *
//      * @param msg - 控件上展现的校验结果提示语
//      * @example
//      * var ctrl = Page.getCtrl('控件');
//      *  复杂校验
//      * var result = ComplexValidateValue(ctrl.value);
//      *  反馈校验结果
//      * if (!result.isLegal) {
//      *     ctrl.setErrorMsg(result.errMsg);
//      * }
//      */
//     setErrorMsg(msg: string): void;

//     /**
//      * 清除控件的错误信息。
//      * @example
//      * var ctrl = Page.getCtrl('控件');
//      *  复杂校验
//      * var result = ComplexValidateValue(ctrl.value);
//      *  反馈校验结果
//      * if (result.isLegal) {
//      *     ctrl.clearErrorMsg();
//      * }
//      */
//     clearErrorMsg(): void;

//     /**
//      * 控件校验，返回控件校验结果。
//      *
//      * @returns 控件校验结果
//      * @example
//      * var ctrl = Page.getCtrl('控件');
//      *  触发控件的校验
//      * var isLegal = ctrl.validate();
//      */
//     validate(): boolean;

//     /**
//      * 触发控件EventTrigger所绑定的事件。
//      *
//      * @param triggerName - 控件的EventTrigger
//      * @example
//      *  触发列表配置协议中的 onload 事件
//      * Page.getCtrl('列表').triggerEvent('onload');
//      */
//     triggerEvent(triggerName: string): void;

//     /**
//      * 修改控件标题字体颜色。
//      *
//      * @param color - 控件标题字体颜色
//      * @example
//      *  改变文本控件标题字体颜色（编辑状态/查看状态/只读状态）
//      * var color = Page.getCtrl('文本控件').setTitleColor('#FFFFFF');
//      */
//     setTitleColor(color: string): void;
// }

// /**
//  * 表示数组型控件，像 List、Table 之类的由数组型数据驱动显示的控件。
//  */
// declare class ArrayCtrl {
//     /**
//      * 获取数组型控件勾选的数量。
//      */
//     checkedNumber: number;

//     /**
//      * 获取数组型控件的当前分页索引。
//      */
//     pageIndex: number;

//     /**
//      * 获取数组型控件的数据总行数。
//      */
//     rowNumber: number;


//     /**
//      * 获取数组型控件的总分组数。注意，若分组型控件不支持分组，该属性永远返回1。
//      */
//     sectionNumber: number;

//     /**
//      * 控件编码
//      */
//     // 
//     readonly code: string;

//     /**
//      *  控件值
//      */
//     value: string | Dictionary | Array;

//     /**
//      *  隐藏
//      */
//     hidden: boolean;

//     /**
//      *  只读
//      */
//     readonly: boolean;
//     /**
//      *  必填
//      */
//     required: boolean;

//     /**
//      *  前景色
//      */
//     color: Color;

//     /**
//      *  背景色
//      */
//     bgcolor: Color;

//     /**
//      * 重新设置全部数据。
//      * @param {Array<any>} data - 新的数据数组。
//      * @param {Function} setter - 数据设置函数。
//      */
//     reloadData(data: any[], setter: Function): void;

//     /**
//      * 插入多条数据到指定的 indexPath。
//      * @param {Array<any>} data - 要插入的数据数组。
//      * @param {Function} setter - 数据设置函数。
//      * @param {number[]} indexPaths - 插入的位置的数组索引。
//      */
//     insertData(data: any[], setter: Function, indexPaths: number[]): void;

//     /**
//      * 更新多条数据到指定的 indexPath。
//      * @param {Array<any>} data - 要更新的数据数组。
//      * @param {Function} setter - 数据设置函数。
//      * @param {number[]} indexPaths - 更新的位置的数组索引。
//      */
//     updateData(data: any[], setter: Function, indexPaths: number[]): void;

//     /**
//      * 删除指定位置的行。
//      * @param {number[]} indexes - 要删除的行的索引数组。
//      */
//     delete(indexes: number[]): void;

//     /**
//      * 删除指定范围内的数据。
//      * @param {string} scope - 删除的范围，可选值包括 'all', 'checked', 'focus', 'modified'.
//      */
//     deleteInScope(scope: 'all' | 'checked' | 'focus' | 'modified'): void;

//     /**
//      * 删除指定范围外的数据。
//      * @param {string} scope - 保留的范围，可选值包括 'all', 'checked', 'focus', 'modified'.
//      */
//     deleteInScopeReverse(scope: 'all' | 'checked' | 'focus' | 'modified'): void;

//     /**
//      * 手动设置控件的加载状态。
//      * @param {string} statusType - 加载状态的类型。
//      */
//     setLoadStatus(statusType: string): void;

//     /**
//      * 获取数组型控件中某一行的行控件。
//      * @param {IndexPath} indexPath - 数组型控件行索引对象，类型参看 IndexPath 说明。
//      * @returns {ArrayRowCtrl | null} - 返回数组型控件指定的行控件，若 indexPath 指定的行索引超出控件范围时，返回 null。
//      */
//     getRowAtIndexPath(indexPath: IndexPath): ArrayRowCtrl | null;

//     /**
//      * 获取数组型控件中所有的行控件。
//      * @returns {Array<ArrayRowCtrl> | null} - 返回数组型控件中的所有行控件，若控件为空，返回 null。
//      */
//     getAllRows(): Array<ArrayRowCtrl> | null;

//     /**
//      * 获取数组型控件中所有被勾选的行控件。
//      * @returns {Array<ArrayRowCtrl> | null} - 返回数组型控件中勾选的行控件，若没有勾选，返回 null。
//      */
//     getCheckedRows(): Array<ArrayRowCtrl> | null;

//     /**
//      * 获取列表型控件所有选中行的 indexPath。
//      * @returns {Array<IndexPath> | null} - 返回数组型控件中勾选的行的 indexPath，若没有勾选，返回 null。
//      */
//     getCheckedRowsIndexPath(): Array<IndexPath> | null;

//     /**
//      * 获取数组型控件的焦点所在的行索引，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回 null.
//      * @returns {IndexPath | null} - 返回数组型控件的行索引，当焦点不存在时，返回 null.
//      */
//     getFocusRowIndexPath(): IndexPath | null;

//     /**
//      * 获取数组型控件的焦点行控件，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回 null.
//      * @returns {ArrayRowCtrl | null} - 返回数组型控件的行控件，当焦点不存在时，返回 null.
//      */
//     getFocusRow(): ArrayRowCtrl | null;

//     /**
//      * 获取数组型控件中所有分组的所有数据。
//      * @param {ArrayCtrlGetter | null} arrayCtrlGetter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，该子控件不区分是在行控件还是分组头控件中，Dictionary 形如。
//      * @returns {Array<Dictionary> | null} - 返回数组型控件中的所有数据，Array 形如 [Dictionary]，详见数组型控件数据格式。
//      */
//     getData(arrayCtrlGetter: ArrayCtrlGetter | null): Array<Dictionary> | null;

//     /**
//      * 获取指定多行的数据，indexes 是一个 int 数组，表示要获取的行。
//      * @param {number[] | number} indexes - 要获取数据的行索引，为正整数数组或正整数，如 1 或 [0, 2, 3].
//      * @param {ArrayCtrlGetter | null} getter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary 形如。
//      * @param {boolean} isExhaustive - 当为 true 时，表示只取指定的数据；为 false 时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为 false.
//      * @returns {Array<Dictionary> | null} - 返回数组型控件中的指定行数据，Array 形如 [Dictionary]，详见数组型控件数据格式.
//      */
//     getInIndexes(indexes: number[] | number, getter: ArrayCtrlGetter | null, isExhaustive: boolean): Array<Dictionary> | null;

//     /**
//      * 获取指定范围内的数据，getter 可以为空，此时 isExhaustive 也无效，必须为空。
//      * @param {string} scope - scope 的取值有以下几种取值: 'all' 全部数据; 'checked' 勾选数据; 'modified' 已修改数据; 'focused' 已修改数据.
//      * @param {ArrayCtrlGetter | null} getter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary 形如。
//     * @param {boolean} isExhaustive - 当为 true 时，表示只取指定的数据；为 false 时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为 false.
//     * @returns {Array<Dictionary> | null} - 返回数组型控件中的指定范围内的数据，Array 形如 [Dictionary]，详见数组型控件数据格式.
//     */
//     getInScope(scope: string, getter: ArrayCtrlGetter | null, isExhaustive: boolean): Array<Dictionary> | null;

//     /**
//      * 获取指定范围外的数据，与 getInScope 相反，getter 可以为空，此时 isExhaustive 也无效，必须为空。
//      * @param {string} scope - scope 的取值有以下几种取值: 'all' 全部数据; 'checked' 勾选数据; 'modified' 已修改数据; 'focused' 已修改数据.
//      * @param {ArrayCtrlGetter | null} getter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary 形如。
//      * @param {boolean} isExhaustive - 当为 true 时，表示只取指定的数据；为 false 时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为 false.
//      * @returns {Array<Dictionary> | null} - 返回数组型控件中的指定范围外的数据，Array 形如 [Dictionary]，详见数组型控件数据格式.
//      */
//     getInScopeReverse(scope: string, getter: ArrayCtrlGetter | null, isExhaustive: boolean): Array<Dictionary> | null;

//     /**
//      * 获取指定位置的行控件 ArrayRowCtrl。indexes 支持 int 数组或者 int 值，当是数组时，返回数组；当是 int 时，返回单对象。
//      * @param {number[] | number} indexes - 要获取数据的行索引，为正整数或正整数数组，如 1 或 [0, 2, 3].
//      * @returns {ArrayRowCtrl | Array<ArrayRowCtrl>} - 返回数组型控件中的行控件，返回 Array 时形如 [ArrayRowCtrl]，返回单对象时为 ArrayRowCtrl.
//      */
//     getRowAtIndexes(indexes: number[] | number): ArrayRowCtrl | Array<ArrayRowCtrl>;

//     /**
//      * 获取指定名字的列对象 ArrayColCtrl。目前暂未实现 ArrayColCtrl。
//      * @param {string} name - 要获取的列控件的名称.
//      * @returns {ArrayColCtrl | null} - 返回单对象 ArrayColCtrl，若列对象不存在，返回 null.
//      */
//     getColByName(name: string): ArrayColCtrl | null;

//     /**
//      * 获取指定范围的行的 indexes。
//      * @param {string} scope - scope 的取值有以下几种取值: 'all' 全部数据; 'checked' 勾选数据; 'modified' 已修改数据; 'focused' 已修改数据.
//      * @returns {number[] | null} - 获取指定范围的行的 indexes，为正整数数组，形如 [0, 2, 3].
//      */
//     getIndexesInScope(scope: string): number[] | null;

//     /**
//      * 针对用户添加数据时可能会选中已有的数据，造成不必要的困惑，设计出以下方案，避免重复数据的选择。
//      * 新增一个同步数据接口，用于进行数据相似性校验。
//      * @param {Dictionary[]} checkData - 用于检测重复的数据，接收一个对象数组.
//      * @param {string[]} keys - 用于校验的字段，和 rule 搭配使用，keys 为空但 rule 不为空时，keys 就取 checkData 中的所有字段.
//      * @param {string} rule - 内置校验规则，取值有 and，or，custom，可以为空，空值表示 custom，即使用 checkFunction 校验.
//      * @param {Function} checkFunction - 接受一个自定义函数，该函数返回一个 Bool 值，用来判断是否是重复数据，可以为空，参看下方说明.
//      * @returns {Object} - 返回一个对象，该对象有三个属性：sameData，sameIndexes，otherData。
//      */
//     sameCheck(checkData: Dictionary[], keys: string[], rule: string, checkFunction: Function): {
//         sameData: Dictionary[];
//         sameIndexes: number[];
//         otherData: Dictionary[];
//     };

//     /**
//      * 获取所有头部栏按钮的 Ctrl。
//      * @returns {Array<Ctrl> | null} - 返回数组型控件所有头部栏按钮的 Ctrl，若控件为空，返回 null.
//      */
//     getHeaderButtons(): Array<Ctrl> | null;

//     /**
//      * 获取该列的控
 
//  件。
//      * @returns {Ctrl} - 返回列的控件。
//      */
//     getColumnCtrl(): Ctrl;

//     /**
//      * 获取单选数据所在的行控件 ArrayRowCtrl，只返回单选的行，即单选为 true 的行。
//      * @returns {ArrayRowCtrl | null} - 返回数组型控件中单选的行控件，若没有单选行，返回 null.
//      */
//     getCheckedRow(): ArrayRowCtrl | null;

//     /**
//      * 获取单选数据所在行的数据。
//      * @returns {Dictionary | null} - 返回数组型控件中单选的行的数据，若没有单选行，返回 null.
//      */
//     getCheckedRowData(): Dictionary | null;

//     /**
//      * 获取某数据对应的行控件 ArrayRowCtrl，只返回一行，即数据中的数组只有一个值。
//      * @param {Dictionary} data - 要获取的数据对象。
//      * @returns {ArrayRowCtrl | null} - 返回数组型控件中数据对应的行控件，若数据不存在或有多条匹配行时，返回 null.
//      */
//     getRowByData(data: Dictionary): ArrayRowCtrl | null;

//     /**
//      * 获取某数据对应的行的行索引，只返回一行，即数据中的数组只有一个值。
//      * @param {Dictionary} data - 要获取的数据对象。
//      * @returns {IndexPath | null} - 返回数组型控件中数据对应的行的行索引，若数据不存在或有多条匹配行时，返回 null.
//      */
//     getRowIndexByData(data: Dictionary): IndexPath | null;

//     /**
//      * 获取数据对应的行控件，多选下一个焦点使用。
//      * @param {Dictionary} data - 要获取的数据对象.
//      * @returns {ArrayRowCtrl | null} - 返回数组型控件中数据对应的行控件，若数据不存在或有多条匹配行时，返回 null.
//      */
//     getRowForFocus(data: Dictionary): ArrayRowCtrl | null;

//     /**
//      * 设置数组型控件的行编辑状态，即当数组型控件进入行编辑状态，所有行都会进入行编辑状态，除非该行为只读状态。
//      * @param {boolean} enable - 为 true 时表示开启行编辑状态，为 false 时表示关闭行编辑状态.
//      */
//     setRowEdit(enable: boolean): void;

//     /**
//      * 停止单元格编辑。
//      * @returns {boolean} - 无返回值。
//      */
//     stopCellEdit(): void;

//     /**
//      * 启用行复制功能。
//      * @param {number} count - 启用行复制功能，有两个参数，参数一为要复制的行数，参数二为对复制后行数据进行编辑的函数，必须要有。
//      */
//     copyRows(count: number, func: Function): void;
// }

// declare class ArrayRowCtrl {
//     // 获取该列的控件
//     getCtrl(): Ctrl;

//     /**
//      * 获取数组型控件行控件的数据。
//      * @returns {Dictionary | null} - 返回数组型控件行控件的数据，当数据不存在时，返回 null.
//      */
//     getData(): Dictionary | null;

//     /**
//      * 获取数组型控件行控件的选中状态。
//      * @returns {boolean} - 返回数组型控件行控件的选中状态，为 true 时表示选中，为 false 时表示未选中.
//      */
//     getChecked(): boolean;

//     /**
//      * 获取数组型控件行控件的已编辑状态。
//      * @returns {boolean} - 返回数组型控件行控件的已编辑状态，为 true 时表示已编辑，为 false 时表示未编辑.
//      */
//     getModified(): boolean;

//     /**
//      * 获取数组型控件行控件的焦点状态。
//      * @returns {boolean} - 返回数组型控件行控件的焦点状态，为 true 时表示有焦点，为 false 时表示无焦点.
//      */
//     getFocus(): boolean;

//     /**
//      * 获取数组型控件行控件的单选状态。
//      * @returns {boolean} - 返回数组型控件行控件的单选状态，为 true 时表示单选，为 false 时表示非单选.
//      */
//     getSingleCheck(): boolean;

//     /**
//      * 设置数组型控件行控件的选中状态。
//      * @param {boolean} checked - 为 true 时表示选中，为 false 时表示未选中.
//      */
//     setChecked(checked: boolean): void;

//     /**
//      * 设置数组型控件行控件的已编辑状态。
//      * @param {boolean} modified - 为 true 时表示已编辑，为 false 时表示未编辑.
//      */
//     setModified(modified: boolean): void;

//     /**
//      * 设置数组型控件行控件的焦点状态。
//      * @param {boolean} focus - 为 true 时表示有焦点，为 false 时表示无焦点.
//      */
//     setFocus(focus: boolean): void;

//     /**
//      * 设置数组型控件行控件的单选状态。
//      * @param {boolean} singleCheck - 为 true 时表示单选，为 false 时表示非单选.
//      */
//     setSingleCheck(singleCheck: boolean): void;

//     /**
//      * 通过名称获取特定的选择器控件。
//      * @param ctrlName - 选择器控件的名称。
//      * @returns 选择器控件。
//      */
//     getPickerCtrl(ctrlName: string): PickerCtrl;
// }

// declare class ArrayColCtrl {

//     /**
//      *  隐藏
//      */
//     hidden: boolean;

//     /**
//      *  只读
//      */
//     readonly: boolean;
//     /**
//      *  必填
//      */
//     required: boolean;

//     // 获取该列的控件
//     getCtrl(): Ctrl;

//     // 获取该列的选择控件
//     getPickerCtrl(): PickerCtrl;


// }

// declare type ArrayCtrlGetter = {
//     name: string;
//     action: string;
// };




// `