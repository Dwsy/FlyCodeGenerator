interface String {
    static myStaticMethod(): void;
}

String.myStaticMethod = function () {
    console.log('Calling static method');
}

String.myStaticMethod(); // Calling static method
// 3.1.5. 工具库
declare class FLY {
    /**
     * 3.1.5.1. 打印日志
     * 打印日志仅用于 IDE 调试 Flycode 使用，可在 IDE 输出调试日志。
     * @param message 日志信息
     */

    static log(message: string): void;


    /**
     * 3.1.5.2. 分布式ID生成
     * 业务对象的ID为全局唯一ID，所有新建的业务对象的ID，都应该使用该API生成。
     * @returns 全局唯一的长整数数值
     */

    static genId(): number;


    /**
     * 3.1.5.3. 自增序列
     * 有些业务编码，需要为其创建自增序列，使用该API生成，每个自增序列必须有一个全局唯一KEY。
     * @param key 自增序列的全局唯一键
     * @returns 自增序列的最后一个值
     */

    static nextval(key: string): number;


    /**
     * 3.1.5.4. 地址转经纬度（高德地图）
     * 注意：此接口已被废弃，如需地图相关服务，请参考拓展库：高德地图服务
     * 可以把地址，比如“广州市天河区维多利亚广场” 转换成经纬度（高德地图）。
     * @param address 地址字符串
     * @returns 地址转换结果对象，包括状态、描述和经纬度
     */

    static geocode(address: string): { state: string; des: string; location: string };


    /**
     * 3.1.5.4. js对象去除属性左右两端空格
     * 去除对象中属性值的左右空格
     * @param obj 待去除属性左右空格的对象
     * @returns 去除空格后的对象
     */

    static trimObjAttrValue(obj: Record<string, string>): Record<string, string>;


    /**
     * 3.1.5.5. 字符串处理
     * 根据某字符截取字符串
     * @param str 原始字符串
     * @param separator 分隔符
     * @param fromEnd 从后面第几个开始截取
     * @returns 截取后的字符串
     */

    static substringLastAt(str: string, separator: string, fromEnd: number): string;






    /**
     * 3.1.5.6. 数值转换
     * 保留小数(四舍五入)
     * @param num 数值
     * @param precision 保留几位小数
     * @returns 保留小数后的数值
     */

    static toRoundDecimal(num: number, precision: number): number;


    /**
     * 保留小数(全部舍掉)
     * @param num 数值
     * @param precision 保留几位小数
     * @returns 保留小数后的数值
     */

    static toFloorDecimal(num: number, precision: number): number;


    /**
     * 3.1.5.7. 字典Key查询
     * 根据字典编码获取字典Key
     * @param objectName 对象名称
     * @param code 字典编码
     * @returns 字典Key
     */

    static getDicKeyByCode(objectName: string, code: string): string;
}

/**
 * 3.1.5.8. 记录操作日志
 * 记录用户操作行为日志
 * @param moduleName 模块名称
 * @param operationType 操作类型
 * @param logMessage 操作日志信息
 */
declare class LOG {
    static recordLog(moduleName: string, operationType: string, logMessage: string): void;

}
