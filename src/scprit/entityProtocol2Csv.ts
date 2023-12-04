import { PropertyTypeCode } from "../type/model/propertyTypeCodeRef"


let protocol = {
    "objectcode": "1730400843984932883",
    "objectname": "促销活动变动类促销（搭赠）",
    "tablename": "xxw_promotion_giveaways",
    "objectmark": "xxw_promotion_giveaways",
    "objecttypecode": "1",
    "objectdescr": "",
    "status": 1,
    "directorytypecode": "1727995518044475491",
    "publishstatus": 1,
    "marktype": "2",
    "objecttemplatecode": "",
    "objectcatgory": "2",
    "parentobjectcode": "",
    "properties": [
        {
            "propertycode": "1730400843984932882",
            "propertyname": "id",
            "columnname": "id",
            "propertycategorycode": "1",
            "propertytypecode": "1",
            "seq": 1,
            "status": "1",
            "idxtype": "2",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932881",
            "propertyname": "促销活动ID",
            "columnname": "promotion_main_id",
            "propertycategorycode": "4",
            "propertytypecode": "100000000000",
            "seq": 1,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1727995518044475490",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932880",
            "propertyname": "序号",
            "columnname": "serial_number",
            "propertycategorycode": "1",
            "propertytypecode": "5",
            "seq": 2,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932878",
            "propertyname": "营销组织",
            "columnname": "salearea_id",
            "propertycategorycode": "4",
            "propertytypecode": "100000000000",
            "seq": 4,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "800000000000000000",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641315",
            "propertyname": "TPM客户id",
            "columnname": "customer_id",
            "propertycategorycode": "4",
            "propertytypecode": "100000000000",
            "seq": 1,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1716626739553243233",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932877",
            "propertyname": "售达方ID",
            "columnname": "channel_id",
            "propertycategorycode": "4",
            "propertytypecode": "100000000000",
            "seq": 5,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1716626739553243221",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641314",
            "propertyname": "送达方id",
            "columnname": "store_id",
            "propertycategorycode": "4",
            "propertytypecode": "100000000000",
            "seq": 2,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1714587791171653687",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641313",
            "propertyname": "剔除送达方id",
            "columnname": "no_store_id",
            "propertycategorycode": "4",
            "propertytypecode": "100000000000",
            "seq": 3,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1714587791171653687",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641311",
            "propertyname": "兑付方式",
            "columnname": "payment_method",
            "propertycategorycode": "1",
            "propertytypecode": "4",
            "seq": 5,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "字典（兑付方式）多选",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932876",
            "propertyname": "产品范围",
            "columnname": "product_range",
            "propertycategorycode": "3",
            "propertytypecode": "10000000000",
            "seq": 6,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1729378892764024931",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641310",
            "propertyname": "活动产品id",
            "columnname": "activity_product_id",
            "propertycategorycode": "1",
            "propertytypecode": "6",
            "seq": 6,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932875",
            "propertyname": "活动产品物料编码",
            "columnname": "activity_product_code",
            "propertycategorycode": "1",
            "propertytypecode": "3",
            "seq": 7,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641309",
            "propertyname": "赠品id",
            "columnname": "gift_rpoduct_id",
            "propertycategorycode": "1",
            "propertytypecode": "6",
            "seq": 7,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932874",
            "propertyname": "赠品物料编码",
            "columnname": "gift_rpoduct_code",
            "propertycategorycode": "1",
            "propertytypecode": "2",
            "seq": 8,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932873",
            "propertyname": "活动期间",
            "columnname": "activity_period",
            "propertycategorycode": "1",
            "propertytypecode": "30",
            "seq": 9,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641308",
            "propertyname": "活动开始时间",
            "columnname": "start_date",
            "propertycategorycode": "1",
            "propertytypecode": "29",
            "seq": 8,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641307",
            "propertyname": "活动结束时间",
            "columnname": "end_date",
            "propertycategorycode": "1",
            "propertytypecode": "29",
            "seq": 9,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932872",
            "propertyname": "搭赠规则",
            "columnname": "complimentary_rule",
            "propertycategorycode": "3",
            "propertytypecode": "10000000000",
            "seq": 10,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "953217120081154137",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932871",
            "propertyname": "产品组ID（固定组合）",
            "columnname": "product_group_id",
            "propertycategorycode": "4",
            "propertytypecode": "100000000000",
            "seq": 11,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1729040315245006947",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641306",
            "propertyname": "产品组名称",
            "columnname": "product_group_name",
            "propertycategorycode": "1",
            "propertytypecode": "3",
            "seq": 10,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730455805045641305",
            "propertyname": "搭赠方式",
            "columnname": "complimentary_type",
            "propertycategorycode": "1",
            "propertytypecode": "18",
            "seq": 11,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932870",
            "propertyname": "是否按达成目标终止搭赠",
            "columnname": "achieve_target_terminate_complimentary",
            "propertycategorycode": "1",
            "propertytypecode": "18",
            "seq": 13,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932869",
            "propertyname": "赠送条件≥X件起送（最小值）",
            "columnname": "min_quantity_for_gift",
            "propertycategorycode": "1",
            "propertytypecode": "5",
            "seq": 14,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932868",
            "propertyname": "赠送条件≥X件起送（最大值）",
            "columnname": "max_quantity_for_gift",
            "propertycategorycode": "1",
            "propertytypecode": "5",
            "seq": 15,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932867",
            "propertyname": "本品数量",
            "columnname": "product_quantity",
            "propertycategorycode": "1",
            "propertytypecode": "5",
            "seq": 16,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932866",
            "propertyname": "产品单位",
            "columnname": "product_unit",
            "propertycategorycode": "3",
            "propertytypecode": "10000000000",
            "seq": 17,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1727919589909729280",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932865",
            "propertyname": "赠品数量",
            "columnname": "gift_quantity",
            "propertycategorycode": "1",
            "propertytypecode": "5",
            "seq": 18,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730400843984932864",
            "propertyname": "赠品单位",
            "columnname": "gift_unit",
            "propertycategorycode": "3",
            "propertytypecode": "10000000000",
            "seq": 19,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "1727919589909729280",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900238",
            "propertyname": "是否与合同返利互斥",
            "columnname": "mutually_exclusive_with_contract_rebate",
            "propertycategorycode": "1",
            "propertytypecode": "5",
            "seq": 20,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900237",
            "propertyname": "本期收入目标折后（元）",
            "columnname": "revenue_target",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 21,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900236",
            "propertyname": "同期收入达成折后（元）",
            "columnname": "achieve_same_period",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 22,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900235",
            "propertyname": "公司折扣率",
            "columnname": "company_discount_rate",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 23,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900234",
            "propertyname": "收入同比增长",
            "columnname": "revenue_yoy_growth",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 24,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900233",
            "propertyname": "本期销量目标",
            "columnname": "current_sales_target",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 25,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900232",
            "propertyname": "同期销量达成",
            "columnname": "same_period_sales_achievement",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 26,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900231",
            "propertyname": "销量同比增长",
            "columnname": "sales_volume_yoy_growth",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 27,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900230",
            "propertyname": "预计赠品总数",
            "columnname": "estimated_total_gifts",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 28,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900229",
            "propertyname": "本期折扣费用金额（元）",
            "columnname": "current_discount_expense_in_cny",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 29,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900228",
            "propertyname": "公司费用率",
            "columnname": "company_expense_ratio",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 30,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900227",
            "propertyname": "毛利率",
            "columnname": "gross_margin_ratio",
            "propertycategorycode": "1",
            "propertytypecode": "10",
            "seq": 31,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900226",
            "propertyname": "创建时间",
            "columnname": "createtime",
            "propertycategorycode": "1",
            "propertytypecode": "11",
            "seq": 32,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900225",
            "propertyname": "创建人",
            "columnname": "createop",
            "propertycategorycode": "4",
            "propertytypecode": "8",
            "seq": 33,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900224",
            "propertyname": "更新时间",
            "columnname": "updatetime",
            "propertycategorycode": "1",
            "propertytypecode": "12",
            "seq": 34,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        },
        {
            "propertycode": "1730155088279900223",
            "propertyname": "更新人",
            "columnname": "updateop",
            "propertycategorycode": "4",
            "propertytypecode": "9",
            "seq": 35,
            "status": "1",
            "idxtype": "1",
            "publishstatus": "1",
            "marktype": "2",
            "propertydescr": "",
            "relationobjectcode": "",
            "ismaster": "",
            "candelete": true
        }
    ],
    "diclayer": 0,
    "seq": 1,
    "datapattern": "1",
    "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-01 13:42\"}",
    "confsource": 1
}
const properties = protocol.properties
let ret = []
properties.forEach((Property) => {
    ret.push(`${Property.propertyname}	${Property.columnname}	${propertytypecode2DatabaseType(Property.propertytypecode)}	${propertytypecode2Desc(Property.propertytypecode)}	${Property.propertydescr}`)
})
//@ts-ignore
const fs = require('fs');
fs.writeFile('./demo/EntiyCsv.txt', ret.join("\n"), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('success')
    }
})


function propertytypecode2DatabaseType(typecode: string) {
    let typecodeNumber = Number(typecode)
    if (PropertyTypeCode.PrimaryKey == typecodeNumber) {
        return "bigint"
    }
    if (PropertyTypeCode.Integer == typecodeNumber) {
        return "int4"
    }
    if (PropertyTypeCode.LongInteger == typecodeNumber) {
        return "bigint"
    }
    if (PropertyTypeCode.BusinessObject == typecodeNumber) {
        return "bigint"
    }
    if (PropertyTypeCode.DictionaryObject == typecodeNumber) {
        return "bigint"
    }
    if (PropertyTypeCode.Decimal == typecodeNumber) {
        return "numeric"
    }
    if (PropertyTypeCode.DateTime == typecodeNumber) {
        return "timestamp"
    }
    if (PropertyTypeCode.Text == typecodeNumber) {
        return "varchar"
    }
    if (PropertyTypeCode.Location == typecodeNumber) {
        return "varchar"
    }
    return ''
}

function propertytypecode2Desc(typecode: string) {
    let typecodeNumber = Number(typecode)
    if (PropertyTypeCode.PrimaryKey == typecodeNumber) {
        return "主键"
    }
    if (PropertyTypeCode.Integer == typecodeNumber) {
        return "整数型"
    }
    if (PropertyTypeCode.LongInteger == typecodeNumber) {
        return "长整型"
    }
    if (PropertyTypeCode.BusinessObject == typecodeNumber) {
        return "业务对象"
    }
    if (PropertyTypeCode.DictionaryObject == typecodeNumber) {
        return "字典"
    }
    if (PropertyTypeCode.Decimal == typecodeNumber) {
        return "数字"
    }
    if (PropertyTypeCode.Text == typecodeNumber) {
        return "文本"
    }
    if (PropertyTypeCode.Location == typecodeNumber) {
        return "长文本"
    }
    return ''
}