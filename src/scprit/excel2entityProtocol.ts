export let protocol =
    { "objs": [{ "objectcode": "1730396736310087775", "objectname": "按售达方设置目标 ", "tablename": "xxw_set_targets_by_sales_partner", "objectmark": "xxw_set_targets_by_sales_partner", "objecttypecode": "1", "objectdescr": "", "status": 1, "directorytypecode": "1726771491065958499", "publishstatus": 2, "marktype": "2", "objecttemplatecode": "", "objectcatgory": "2", "parentobjectcode": "", "properties": [{ "propertycode": "1730396736310087774", "propertyname": "id", "columnname": "id", "propertycategorycode": "1", "propertytypecode": "1", "seq": 1, "status": "1", "idxtype": "2", "publishstatus": "2", "marktype": "2", "propertydescr": "", "relationobjectcode": "", "ismaster": "", "candelete": true }], "diclayer": 0, "seq": 1, "datapattern": "1", "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-01 09:22\"}", "confsource": 1 }], "offlines": [] }







export let seq = "25000"


export const cxzy = `
主键	id	bigint	
促销指引ID	promotion_guide_id	bigint	对象：促销指引
序号	serial_number	int	整数型
渠道	channel_id	bigint	字典
营销组织	salearea_id	bigint	对象：营销组织
售达方ID	sales_target_id	bigint	对象：售达方
业务负责人	business_owner		
本期收入目标折后（元）	current_revenue_target	numeric	数字
同期收入达成折后（元）	achieve_same_period	numeric	数字
收入同比增长	revenue_growth_rate	numeric	数字
创建时间	createtime	timestamp	时间戳
创建人	createop	bigint	对象：人员
更新时间	updatetime	timestamp	时间戳
更新人	updateop	bigint	对象：人员
`;
