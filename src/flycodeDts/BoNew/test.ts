/**
* crm_dic_follow_type(跟进类型)-衍生于(pl_dictionary)
*/
declare interface crm_dic_follow_type {
    /**
     * 🔢🔢字典(长整型)
字典
    */
    dictionaryid: string
    /**
     * 👈父字典(本对象)
父字典
    */
    parentdictionaryid: string
    /**
     * 🔢🔢字典标识编码(长整型)
字典标识编码，与领域模型字典表对应
    */
    dictionarycode: string
    /**
     * 🔑字典key(主键)
字典key编码
    */
    dickey: string
    /**
     * 📝编码(文本)
对接字典编码
    */
    code: string
    /**
     * 📝对接字典编码(文本)
对接字典编码
    */
    dickeycode: string
    /**
     * 📝字典值(文本)
字典值
    */
    dicvalue: string
    /**
     * 字典值2()
字典值，英文
    */
    dicvalue2: string
    /**
     * 字典值3()
字典值，繁体
    */
    dicvalue3: string
    /**
     * 字典值4()
字典值，其他语言
    */
    dicvalue4: string
    /**
     * 拼音查找()
拼音字段，方便查找数据
    */
    lookup: string
    /**
     * 🔢🔢关联父字典key(长整型)
关联父字典key
    */
    parentdickey: string
    /**
     * 📝📝📝key路径值(长文本)
路径值，由字典key组成
    */
    keypath: string
    /**
     * 📝📝📝name路径值(长文本)
name路径值，由字典dicvalue组成
    */
    namepath: string
    /**
     * 🔢层级(整数)
层级
    */
    level: string
    /**
     * 📝📝📝备注(长文本)
备注
    */
    remark: string
    /**
     * 🔢顺序(排序)
顺序
    */
    seq: string
    /**
     * 🟢🔴状态(状态)
状态 1.启用 2.停用
    */
    status: string
}


/**
* BO 业务对象
*/
declare class BO {

    /**
     * 创建业务对象{@link crm_dic_follow_type}。
     * @returns 业务对象实例
     */
    static new(entityName: "crm_dic_follow_type"): crm_dic_follow_type;


}



