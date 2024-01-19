export let protocol =
{"objs":[{"objectcode":"1747456136497467411","objectname":"IN_ZTSD00010","tablename":"sap_middle_in_ztsd","objectmark":"sap_middle_in_ztsd","objecttypecode":"1","objectdescr":"","status":1,"directorytypecode":"1715173109138591840","publishstatus":2,"marktype":"2","objecttemplatecode":"","objectcatgory":"2","parentobjectcode":"","properties":[{"propertycode":"1747456136497467410","propertyname":"主键","columnname":"id","propertycategorycode":"1","propertytypecode":"1","seq":1,"status":"1","idxtype":"2","publishstatus":"2","marktype":"2","propertydescr":"","relationobjectcode":"","ismaster":"","candelete":true}],"diclayer":0,"seq":1,"datapattern":"1","message":"{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2024-01-17 14:51\"}","confsource":1}],"offlines":[]}
export let seq = "11100"


export const cxzy = `
id	id	bigint	主键
促销活动ID	promotion_main_id	bigint	业务对象
营销组织	salearea_id	bigint	业务对象
客户	customer_id	bigint	业务对象
售达方	channel_id	bigint	业务对象
送达方	store_id	bigint	业务对象
兑付方式	payment_method	bigint	字典
产品范围	product_range	bigint	字典：产品范围
活动产品id	activity_product_id	bigint	业务对象
活动产品编码	activity_product_code	varchar	文本
业务活动类型	business_activity_type	bigint	业务对象
计算口径	calculation_basis	bigint	字典
支持力度(%)	support_level_percentage	numeric	数字
预估费用（元）	estimated_cost_in_cny	numeric	数字
公司承担费用（元）	company_borne_cost_in_cny	numeric	数字
经销商承担费用（元）	distributor_borne_cost_in_cny	numeric	数字
活动期间收入目标(元)	revenue_target_during_activity	numeric	数字
活动形式说明	activity_form_description	varchar	长文本
是否与合同返利互斥	exclusive_with_contract_rebate	int4	整数型
同期收入达成（元）	same_period_revenue_achievement	numeric	数字
收入同比增长(%)	revenue_yoy_growth_percentage	numeric	数字
环比收入达成（元）	mom_revenue_achievement_in_cny	numeric	数字
环比同比增长(%)	mom_yoy_growth_percentage	numeric	数字
公司费用率(%)	company_expense_ratio_percentage	numeric	数字
毛利率	gross_margin_ratio	numeric	数字
创建时间	createtime	timestamp	时间戳
创建人	createop	bigint	对象：人员
更新时间	updatetime	timestamp	时间戳
更新人	updateop	bigint	对象：人员
`;



const demo = () => {
    const csv = `业务活动类型	business_activity_type	bigint	字典类型，选项集	"1买赠
2变价促销（可多选）
3满减
4优惠卷"
指引状态	guide_status	int	整数型状态	"1草稿
2审批中
3待开始
4进行中
5审批不通过
6退回
7已结束
8已关闭"`;

    // 将CSV字符串分割为每行
    const rows = csv.split("\n");

    // // 解析结果
    const result = [];

    rows.forEach(row => {

        // 用","或者"\n"作为分隔符进行分割
        const fields = row.split("\t");
        console.log(fields.length)
        if (fields.length == 5) {
            result.push(fields);
        } else {
            console.log(result[result.length - 1])
            result[result.length - 1][4] += "\n" + row
        }

        // 去除字段中引号
        // fields[4] = fields[4].replace(/"/g, '');

        // 将一行数据添加到结果中

    });

    console.log(result);

}