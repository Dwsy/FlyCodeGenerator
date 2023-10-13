/**
 * 表示用于获取用户信息的 System 类。
 * @declare
 */
declare class System {
    /**
     * 获取用户信息。
     * @returns {UserInfoDictionary} - 包含用户信息的字典。
     * 用户信息包括：
     * - accountCode
     * - userinfoName
     * - userinfoID
     * - tenantName
     * - tenantCode
     * - orgName
     * - orgCode
     * - positionID
     * - positionName
     * - mbCode
     * - refpositionID
     * - appCode
     * - appCodes
     * - categoryCode
     * - subpdCodes
     * @example
     * var userInfo = System.user();
     * var appCode = System.user().appCode;
     */
    static user(): UserInfoDictionary;

    /**
     * 获取当前用户登录信息。
     * @returns {UserContextDictionary} - 包含当前用户登录信息的字典。
     * 信息包括：
     * - isOffline (Bool): 当前是否离线
     * - token (String): 当前用户登录的 token
     * - httpAddress (String): HTTP 请求 URL 头
     * - versionName (String): 版本名称
     * - versionCode (String): 版本号
     * @example
     * var token = System.context().token;
     */
    static context(): UserContextDictionary;

    /**
     * 获取一个唯一的 uniqueid。
     * @param {number} count - 要获取的 uniqueid 数量。
     * @returns {String|[String]} - 一个或多个 uniqueid。
     * @example
     * var uniqueid = System.uniqueid();
     */
    static uniqueid(count?: number): String | [String];

    /**
     * 获取服务端当前时间。
     * @returns {Date} - 服务端当前时间的 Date 对象。
     * @example
     * var now = System.date();
     */
    static date(): Date;

    /**
     * 获取功能权限。
     * @returns {Array} - 当前用户的完整功能权限 code 的数组。
     * @example
     * var fc = System.functionCodes();
     */
    static functionCodes(): Array;

    /**
     * 功能权限检测。
     * @param {Array} functionCodes - 要检测的功能点的 code 数组。
     * @returns {Bool} - 如果只有所有权限都有时才返回 true，其他情况都返回 false。
     * @example
     * var r = System.functionCheck(['80998877734324']);
     * if (r == true) {
     *     // 包含被检查的功能点
     * }
     */
    static functionCheck(functionCodes: Array): Bool;

    /**
     * 控制日志输出。
     * @param {String} msg - 要输出的日志消息。
     * @example
     * System.console('request is OK');
     */
    static console(msg: String): void;

    /**
     * 把日志发送到IDE。注意：此方法只有在开发模式下生效。
     * @param {String|Dictionary|Array|Number|Function} p - 日志输出内容，可以是多种类型的数据。
     * @param {String} title - 日志在IDE中显示的标题，可以为空，为空时默认显示“UIFlyCode打印”。
     * @example
     *  没有 title 入参
     * System.ideLog('request is OK');
     * 
     *  有 title 入参
     * System.ideLog('request is OK', '列表请求结果');
     * 
     *  通过回调函数返回日志内容
     * System.ideLog(function() {
     *     return 'request is OK';
     * });
     * 
     * System.ideLog(function() {
     *     return 'request is OK';
     * }, '列表请求结果');
     */
    static ideLog(p: String | Dictionary | Array | Number | Function, title?: String): void;

    /**
     * 根据 key 获取对应的导航目录信息。
     * @param {String} key - 指定的导航目录的 key。
     * @returns {Array} - 对应 key 的目录下所有节点的信息。
     * @example
     * // 调用示例
     * var pagecode = System.navinfo('applist')[0].pagecode;
     */
    static navinfo(key: String): Array;
}

/**
 * 包含用户信息的字典。
 */
type UserInfoDictionary = {
    /**
     * 用户的账户编码。
     */
    accountCode?: string;

    /**
     * 用户的名称。
     */
    userinfoName?: string;

    /**
     * 用户的ID。
     */
    userinfoID?: string;

    /**
     * 企业名称。
     */
    tenantName?: string;

    /**
     * 企业编号。
     */
    tenantCode?: string;

    /**
     * 组织名称。
     */
    orgName?: string;

    /**
     * 组织编号。
     */
    orgCode?: string;

    /**
     * 职位ID。
     */
    positionID?: string;

    /**
     * 职位名称。
     */
    positionName?: string;

    /**
     * mbCode。
     */
    mbCode?: string;

    /**
     * 职位编码。
     */
    refpositionID?: string;

    /**
     * 当前登录的应用编码。
     */
    appCode?: string;

    /**
     * 当前租户的应用列表。
     */
    appCodes?: string[];

    /**
     * 当前的职位类别。
     */
    categoryCode?: string;

    /**
     * 当前租户子产品列表。
     */
    subpdCodes?: string[];
};

/**
 * 包含当前用户登录信息的字典。
 */
type UserContextDictionary = {
    /**
     * 当前是否离线。
     */
    isOffline: boolean;

    /**
     * 当前用户登录的 token。
     */
    token: string;

    /**
     * HTTP 请求 URL 头。
     */
    httpAddress: string;

    /**
     * 版本名称。
     */
    versionName: string;

    /**
     * 版本号。
     */
    versionCode: string;
};



