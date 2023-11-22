export let protocol =
    { "objs": [{ "objectcode": "1727161236526862420", "objectname": "变动类促销（叠加预警）", "tablename": "xxw_dynamic_category_promotion_overlay_alert", "objectmark": "xxw_dynamic_category_promotion_overlay_alert", "objecttypecode": "1", "objectdescr": "", "status": 1, "directorytypecode": "1727161236526862421", "publishstatus": 2, "marktype": "2", "objecttemplatecode": "", "objectcatgory": "2", "parentobjectcode": "", "properties": [{ "propertycode": "1727161236526862419", "propertyname": "id", "columnname": "id", "propertycategorycode": "1", "propertytypecode": "1", "seq": 1, "status": "1", "idxtype": "2", "publishstatus": "2", "marktype": "2", "propertydescr": "", "relationobjectcode": "", "ismaster": "", "candelete": true }], "diclayer": 0, "seq": 1, "datapattern": "1", "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-22 13:34\"}", "confsource": 1 }], "offlines": [] }
export const cxzy = `
主键	id	bigint	
促销指引ID	promotion_guide_id	bigint	对象：促销指引
产品范围	product_range	bigint	字典
活动产品编码	activity_product_code	bigint	对象：物料
搭赠-是否允许叠加	complimentary_allow_stackable	int	整数型状态
搭赠-业务活动类型	complimentary_business_activity_type		
搭赠-活动期间	complimentary_activity_period	date-range	时间范围
特价-是否允许叠加	special_price_allow_stackable	int	整数型状态
特价-业务活动类型	special_price_business_activity_type		
特价-活动期间	special_price_activity_period	date-range	时间范围
满减-是否允许叠加	discount_allow_stackable	int	整数型状态
满减-业务活动类型	discount_business_activity_type		
满减-活动期间	discount_activity_period	date-range	时间范围
创建时间	createtime	timestamp	时间戳
创建人	createop	bigint	对象：人员
更新时间	updatetime	timestamp	时间戳
更新人	updateop	bigint	对象：人员
`