import { PropertyTypeCode } from "../type/model/propertyTypeCodeRef";

type Property = {
    propertycode?: string;
    propertyname?: string;
    columnname?: string;
    propertycategorycode?: string;
    propertytypecode?: string;
    seq?: number;
    status?: string;
    idxtype?: string;
    publishstatus?: string;
    marktype?: string;
    propertydescr?: string;
    relationobjectcode?: string;
    ismaster?: string;
    candelete?: boolean;
}

type Properties = {
    property?: Array<Property>;
}

const cxzy = `
主键	id	bigint
促销指引类型	promotion_guide_type	bigint
指引编码	guide_code	varchar
指引名称	guide_name	varchar
开始日期	start_date	date
结束日期	end_date	date
渠道	channel	bigint
投放范围	placement_scope	bigint
业务活动类型	business_activity_type	bigint
指引状态	guide_status	int
发布状态	publication_status	int
审核记录	audit_records	
已关联的促销活动数	associated_promotions	int
浏览记录-已阅人数	view_viewed	int
浏览记录-接收人数	view_received	int
预算收入目标	budgeted_revenue_target	numeric
全面预算预测收入目标	comprehensive_budgeted_forecasted_revenue_target	numeric
本期收入目标	current_period_revenue_target	numeric
附件	attachment	attachment
提交人	submitter	bigint
提交部门	submitting_department	bigint
提交时间	submission_time	timestamp
创建时间	createtime	timestamp
创建人	createop	bigint
更新时间	updatetime	timestamp
更新人	updateop	bigint`

let preEntiy = {
    "objs": [
        {
            "objectcode": "1726771491065958494",
            "objectname": "促销指引",
            "tablename": "promotion_guide",
            "objectmark": "promotion_guide",
            "objecttypecode": "1",
            "objectdescr": "",
            "status": 1,
            "directorytypecode": "1726771491065958499",
            "publishstatus": 2,
            "marktype": "2",
            "objecttemplatecode": "",
            "objectcatgory": "2",
            "parentobjectcode": "",
            "properties": [
                {
                    "propertycode": "1726771491065958493",
                    "propertyname": "id",
                    "columnname": "id",
                    "propertycategorycode": "1",
                    "propertytypecode": "1",
                    "seq": 1,
                    "status": "1",
                    "idxtype": "2",
                    "publishstatus": "2",
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
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-21 14:12\"}",
            "confsource": 1
        }
    ],
    "offlines": []
}
type Coldef = [
    zh_name: string,
    en_name: string,
    type: string
]
let temp = cxzy.split("\n")
let one = BigInt("1")
let start_code = BigInt(preEntiy.objs[0].properties[0].propertycode.toString()) + one + one

let seq = 1
const typeName2typecode = (name, type) => {
    let ret = PropertyTypeCode.LongInteger
    if (type == 'bigint') {
        ret = PropertyTypeCode.LongInteger
    }
    if (type == 'int') {
        ret = PropertyTypeCode.Integer
    }
    if (type == 'char') {
        ret = PropertyTypeCode.Text
    }
    if (type == 'date-range') {
        ret = PropertyTypeCode.TimeRange
    }
    if (type == 'numeric') {
        ret = PropertyTypeCode.Decimal
    }
    if (type == 'timestamp') {
        ret = PropertyTypeCode.DateTime
    }
    if (name == 'createtime') {
        ret = PropertyTypeCode.CreatedTime
    }
    if (name == 'createop') {
        ret = PropertyTypeCode.CreatedBy
    }
    if (name == 'updatetime') {
        ret = PropertyTypeCode.ModifiedTime
    }
    if (name == 'updateop') {
        ret = PropertyTypeCode.ModifiedBy
    }
    if (type == 'attachment') {
        ret = PropertyTypeCode.Attachment
    }
    return ret.toString()
}
const Properties: Property[] = []
temp.map((line) => {
    let coldef: Coldef = line.split("\t") as Coldef
    if (coldef[1] == undefined) return
    if (coldef[1] == 'id') return
    start_code += one
    const Property: Property = {
        "propertycode": start_code.toString(),
        "propertyname": coldef[0],
        "columnname": coldef[1],
        "propertycategorycode": "1",
        "propertytypecode": typeName2typecode(coldef[1], coldef[2]),
        "seq": seq++,
        "status": "1",
        "idxtype": "1",
        "publishstatus": "2",
        "marktype": "1",
        "propertydescr": "",
        "relationobjectcode": "",
        "ismaster": "",
        "candelete": false
    }
    Properties.push(Property)

})
// console.log(Properties)


//@ts-ignore
preEntiy.objs[0].properties.push(...Properties)
//nodejs 写入Properties到当前目录下的Properties.json文件
//@ts-ignore
const fs = require('fs');
fs.writeFile('./demo/Entiy.json', JSON.stringify(preEntiy), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('success')
    }
})