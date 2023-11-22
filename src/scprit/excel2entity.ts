import { PropertyTypeCode } from "../type/model/propertyTypeCodeRef";
import { protocol, cxzy } from './excel2entityProtocol'
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



let preEntiy =
    protocol


type Coldef = [
    zh_name: string,
    en_name: string,
    type: string,
    desc: string
]
let temp = cxzy.split("\n")
let one = BigInt("1")
let start_code = BigInt(preEntiy.objs[0].properties[0].propertycode.toString()) + BigInt('20')

let seq = 1
const typeName2typecode = (name, type, desc) => {
    let ret = PropertyTypeCode.LongInteger
    if (type == 'bigint') {
        ret = PropertyTypeCode.LongInteger
    }
    if (type == 'int') {
        ret = PropertyTypeCode.Integer
    }
    if (type == 'varchar') {
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

    if (type == 'attachment') {
        ret = PropertyTypeCode.Attachment
    }
    if (desc.includes('附件')) {
        ret = PropertyTypeCode.Attachment
    }
    if (desc.includes('字典')) {
        ret = PropertyTypeCode.DictionaryObject
    }
    if (desc.includes('选项集')) {
        ret = PropertyTypeCode.OptionSet
    }
    if (desc.includes('对象')) {
        ret = PropertyTypeCode.BusinessObject
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
        "propertytypecode": typeName2typecode(coldef[1], coldef[2], coldef[3]),
        "seq": seq++,
        "status": "1",
        "idxtype": "1",
        "publishstatus": "2",
        "marktype": "1",
        "propertydescr": "",
        "relationobjectcode": getRelationobjectcode(coldef),
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

function getRelationobjectcode(coldef: Coldef): string {
    if (coldef[1] == 'promotion_guide_id') return '1727127470760661091'
    if (coldef[1] == 'salearea_id') return '800000000000000000'
    if (coldef[1] == 'sales_target_id') return '1716626739553243221'
    return ''
}
