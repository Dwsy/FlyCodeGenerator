export function addTs() {

    // @ts-ignore
    monaco.languages.typescript.javascriptDefaults.addExtraLib(dts);


}

const dts = `// 3.1.5. 工具库
declare namespace FLY {
    /**
     * 3.1.5.1. 打印日志
     * 打印日志仅用于 IDE 调试 Flycode 使用，可在 IDE 输出调试日志。
     * @param message 日志信息
     */

    function log(message: string): void;


    /**
     * 3.1.5.2. 分布式ID生成
     * 业务对象的ID为全局唯一ID，所有新建的业务对象的ID，都应该使用该API生成。
     * @returns 全局唯一的长整数数值
     */

    function genId(): number;


    /**
     * 3.1.5.3. 自增序列
     * 有些业务编码，需要为其创建自增序列，使用该API生成，每个自增序列必须有一个全局唯一KEY。
     * @param key 自增序列的全局唯一键
     * @returns 自增序列的最后一个值
     */

    function nextval(key: string): number;


    /**
     * 3.1.5.4. 地址转经纬度（高德地图）
     * 注意：此接口已被废弃，如需地图相关服务，请参考拓展库：高德地图服务
     * 可以把地址，比如“广州市天河区维多利亚广场” 转换成经纬度（高德地图）。
     * @param address 地址字符串
     * @returns 地址转换结果对象，包括状态、描述和经纬度
     */

    function geocode(address: string): { state: string; des: string; location: string };


    /**
     * 3.1.5.4. js对象去除属性左右两端空格
     * 去除对象中属性值的左右空格
     * @param obj 待去除属性左右空格的对象
     * @returns 去除空格后的对象
     */

    function trimObjAttrValue(obj: Record<string, string>): Record<string, string>;


    /**
     * 3.1.5.5. 字符串处理
     * 根据某字符截取字符串
     * @param str 原始字符串
     * @param separator 分隔符
     * @param fromEnd 从后面第几个开始截取
     * @returns 截取后的字符串
     */

    function substringLastAt(str: string, separator: string, fromEnd: number): string;


    /**
     * 判断字符串是否为空
     * @param str 字符串
     * @returns 是否为空
     */

    function isBlank(str: string): boolean;


    /**
     * 3.1.5.6. 数值转换
     * 保留小数(四舍五入)
     * @param num 数值
     * @param precision 保留几位小数
     * @returns 保留小数后的数值
     */

    function toRoundDecimal(num: number, precision: number): number;


    /**
     * 保留小数(全部舍掉)
     * @param num 数值
     * @param precision 保留几位小数
     * @returns 保留小数后的数值
     */

    function toFloorDecimal(num: number, precision: number): number;


    /**
     * 3.1.5.7. 字典Key查询
     * 根据字典编码获取字典Key
     * @param objectName 对象名称
     * @param code 字典编码
     * @returns 字典Key
     */

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

// 3.1.2. 登录会话信息

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


// 3.1.2. DB 数据库操作
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
    function delete1(obj: any | any[]): void;

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

declare class Date {
    /**
     * 格式化日期
     * @param formatStr 日期格式字符串
     * @returns 格式化后的日期字符串
     */
    Format(formatStr: string): string;

    /**
     * 获取时间戳
     * @returns 时间戳
     */
    getTime(): number;

    /**
     * 获取时间格式为“yyyy-MM-dd HH:mm:ss”的时间字符串
     * @returns 时间字符串
     */
    time(): string;

    /**
     * 获取时间格式为“yyyy-MM-dd”的时间字符串
     * @returns 时间字符串
     */
    date(): string;

    /**
     * 获取当天开始时间
     * @returns 当天开始时间
     */
    getDayBegin(): Date;

    /**
     * 获取当天结束时间
     * @returns 当天结束时间
     */
    getDayEnd(): Date;

    /**
     * 获取昨天开始时间
     * @returns 昨天开始时间
     */
    getLastDayBegin(): Date;

    /**
     * 获取昨天结束时间
     * @returns 昨天结束时间
     */
    getLastDayEnd(): Date;

    /**
     * 获取本周开始时间
     * @returns 本周开始时间
     */
    getWeekBegin(): Date;

    /**
     * 获取本周结束时间
     * @returns 本周结束时间
     */
    getWeekEnd(): Date;

    /**
     * 获取上周开始时间
     * @returns 上周开始时间
     */
    getLastWeekBegin(): Date;

    /**
     * 获取上周结束时间
     * @returns 上周结束时间
     */
    getLastWeekEnd(): Date;

    /**
     * 获取本月开始时间
     * @returns 本月开始时间
     */
    getMonthBegin(): Date;

    /**
     * 获取本月结束时间
     * @returns 本月结束时间
     */
    getMonthEnd(): Date;

    /**
     * 获取上月开始时间
     * @returns 上月开始时间
     */
    getLastMonthBegin(): Date;

    /**
     * 获取上月结束时间
     * @returns 上月结束时间
     */
    getLastMonthEnd(): Date;

    /**
     * 获取本年开始时间
     * @returns 本年开始时间
     */
    getYearBegin(): Date;

    /**
     * 获取本年结束时间
     * @returns 本年结束时间
     */
    getYearEnd(): Date;

    /**
     * 获取上年开始时间
     * @returns 上年开始时间
     */
    getLastYearBegin(): Date;

    /**
     * 获取上年结束时间
     * @returns 上年结束时间
     */
    getLastYearEnd(): Date;

    /**
     * 获取本季度开始时间
     * @returns 本季度开始时间
     */
    getQuarterBegin(): Date;

    /**
     * 获取本季度结束时间
     * @returns 本季度结束时间
     */
    getQuarterEnd(): Date;

    /**
     * 将时间戳转换为Date对象
     * @param timestamp 时间戳
     * @returns Date对象
     */
    static parseDate(timestamp: number): Date;

    /**
     * 将时间字符串转换为Date对象
     * @param dateString 时间字符串
     * @returns Date对象
     */
    constructor(dateString: string);
}`