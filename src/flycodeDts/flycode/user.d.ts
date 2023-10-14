// 3.1.2. 登录会话信息

/**
 * SESSION 对象为 flycode 内置对象，可获取到当前登录人的一些信息。
 */
declare class SESSION {
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

// // 以下是 System 对象的补充信息 前后端flycode会混
// declare class System {
//     // /**
//     //  * 获取用户信息
//     //  */
//     // static user(): {
//     //     accountCode: string;
//     //     userinfoName: string;
//     //     userinfoID: string;
//     //     tenantName: string;
//     //     tenantCode: string;
//     //     orgName: string;
//     //     orgCode: string;
//     //     positionID: string;
//     //     positionName: string;
//     //     mbCode: string;
//     //     refpositionID: string;
//     //     appCode: string;
//     //     appCodes: string[];
//     //     categoryCode: string;
//     //     subpdCodes: string[];
//     // };

//     // /**
//     //  * 获取当前用户登录信息
//     //  */
//     // static context(): {
//     //     isOffline: boolean;
//     //     token: string;
//     //     httpAddress: string;
//     //     versionName: string;
//     //     versionCode: string;
//     // };

//     /**
//      * 获取一个的 uniqueid
//      */
//     static uniqueid(): string;

//     /**
//      * 获取服务端当前时间
//      */
//     static date(): Date;

//     /**
//      * 获取功能权限
//      */
//     static staticCodes(): string[];

//     /**
//      * 功能权限检测
//      * @param codes 功能权限编码列表
//      */
//     static staticCheck(codes: string[]): boolean;

//     /**
//      * 控制日志输出
//      * @param message 日志消息
//      */
//     static consloe(message: string): void;
// }

