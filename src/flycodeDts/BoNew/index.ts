// declare interface BusinessObject {
//     code: string
// }

// declare interface B extends BusinessObject {
//     code: string
// }

// /**
//  * BO 业务对象。
//  */
// declare class BO {
// /**
//  * 创建业务对象。
//  * @returns 业务对象实例。
//  */
// static new(entityName: EntityName): BusinessObject;
//     static new(entityName: "b"): B;
// }

// type EntityName = "a" | "b" | "c"

// const t1 = BO.new("a")

// const t2 = BO.new("b")


const BoTemplate = `/**
* BO 业务对象
*/
declare class BO {
{{BoNewList}}
}
`

const BoNewTemplate = `
    /**
     * 创建业务对象{@link {{EntityName}}}。
     * @returns 业务对象实例
     */
    static new(entityName: "{{EntityName}}"): {{EntityName}};

`

