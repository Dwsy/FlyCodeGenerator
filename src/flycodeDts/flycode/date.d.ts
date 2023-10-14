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
}