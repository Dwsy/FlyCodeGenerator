import { Property } from './protocol'

/**
 * 列数据
 * @interface
 */
export interface columnData {
  /**
   * 属性名称
   */
  propertyname: string
  /**
   * 关联对象代码
   */
  relationobjectcode: string
  /**
   * 默认值
   */
  defaultvalue: string
  /**
   * 列名称
   */
  columnname: string
  /**
   * 属性描述
   */
  propertydescr: string
  /**
   * 索引类型
   */
  idxtype: number
  /**
   * 属性类型代码
   */
  propertytypecode: string
  /**
   * 标记类型
   */
  marktype: number
  /**
   * 发布状态
   */
  publishstatus: number
  /**
   * 属性代码
   */
  propertycode: string
  /**
   * 属性类别代码
   */
  propertycategorycode: string
  /**
   * 序号
   */
  seq: number
  /**
   * 关联属性代码
   */
  relationpropertycode: string
  /**
   * 状态
   */
  status: number

  inoutProperty?: Property
}

/**
 * 表数据
 * @interface
 */
export interface tableData {
  /**
   * 对象名称（中文）
   */
  objectname: string
  /**
   * 目录类型代码
   */
  directorytypecode: string
  /**
   * 父对象代码
   */
  parentobjectcode: string
  /**
   * 对象代码
   */
  objectcode: string
  /**
   * 标记类型
   */
  marktype: number
  /**
   * 对象类别
   */
  objectcatgory: number
  /**
   * 对象类型代码
   */
  objecttypecode: number
  /**
   * 发布状态
   */
  publishstatus: number
  /**
   * 对象模板代码
   */
  objecttemplatecode: string
  /**
   * 表名称（真实名称如pl_dictionary）
   */
  tablename: string
  /**
   * 衍生表名称（如字典）
   */
  objectmark: string
  /**
   * 对象描述
   */
  objectdescr: string
  /**
   * 序号
   */
  seq: string
  /**
   * 字典层级
   */
  diclayer: string
  /**
   * 列数据列表
   */
  properties: columnData[]
  /**
   * 状态
   */
  status: number
}

/**
 * 数据
 * @interface
 */
interface Data {
  /**
   * 表数据列表
   */
  resp_data: tableData[]
}
