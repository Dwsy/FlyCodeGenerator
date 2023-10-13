// 3.1.2. DB 数据库操作
declare class DB {
    /**
     * 将业务对象或数组添加到业务数据库。如果业务对象类型为数组，则会批量操作。
     * @param obj 业务对象或数组
     */
    static insert(obj: any | any[]): void;

    /**
     * 将业务对象或数组更新到业务数据库。如果业务对象类型为数组，则会批量操作。
     * @param obj 业务对象或数组
     */
    static update(obj: any | any[]): void;

    /**
     * 根据传入的字段作为条件更新业务对象。如果业务对象类型为数组，则会批量操作。
     * 使用“:”分割加入时间格式表达式来格式化时间条件字段。
     * @param obj 业务对象或数组
     * @param fieldsAndConditions 字段和条件的键值对，例如："业务对象.字段A" 或 "业务对象.字段B:yyyy-MM-dd"
     */
    static update(obj: any | any[], ...fieldsAndConditions: string[]): void;

    /**
     * 根据业务对象的ID，从业务数据库中移除数据（逻辑删除）。
     * 如果业务对象类型为数组，则会批量操作。
     * @param obj 业务对象或数组
     */
    static delete(obj: any | any[]): void;

    /**
     * 根据ID唯一性规则自动识别业务对象的新增和更新到业务数据库，不做批量处理。
     * 由于save的内部机制需要查询后判断插入还是更新，若做批量可能影响性能，将批量交由外部处理。
     * @param obj 业务对象
     * @param fieldsAndConditions 字段和条件的键值对，例如："业务对象.字段A" 或 "业务对象.字段B:yyyy-MM-dd"
     */
    static save(obj: any, ...fieldsAndConditions: string[]): void;

    /**
     * 根据删除条件对象进行物理删除，然后插入业务对象/数组。
     * 该操作是物理删除，建议只使用在关联表上。
     * @param obj 业务对象或数组
     * @param deleteCondition 删除条件对象
     */
    static replace(obj: any | any[], deleteCondition: any): void;

    /**
     * 根据传入的业务对象去寻找依赖它的对象。
     * 返回值格式：{"result": 布尔值, "refBy": "对象英文名", "refName": "对象中文名"}
     * @param obj 业务对象
     */
    static findObjectRef(obj: any): { result: boolean, refBy: string, refName: string };
}
