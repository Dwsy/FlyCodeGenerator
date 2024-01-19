let str = `
CAMPAIGN	RAW	16	0	通用项目计划: 外部 R/3 系统的 GUID		0050568A5FAE1EDDB6BF3A16C324F3A0		
CMPGN_EXTID	CHAR	24	0	活动(外部标识)		T-00125682		
CREBTEID	CHAR	10	0	CRM返利申请单号		4000025564		
CREBTEGUID	RAW	16	0	CRM返利单GUID		0050568A5FAE1EEE9EAC4C0514AAB643		
CREBATEITEM	CHAR	10	0	CRM返利单项目号		10		
CREBITEMGUID	RAW	16	0	CRM返利单项目GUID		0050568A5FAE1EEE9EAC66E627229684		
SEQNO	CHAR	18	0	序列号 		268437		
PASSFLAG	CHAR	1	0	单一字符标识		S	S代表成功，E代表失败，重复推送，出参无数据。				
`

export let protocol = {
  objs: [
    {
      objectcode: '1747456136497467407',
      objectname: 'EX_RETUN',
      tablename: 'sap_middle_ex_retun',
      objectmark: 'sap_middle_ex_retun',
      objecttypecode: '1',
      objectdescr: '',
      status: 1,
      directorytypecode: '1715173109138591840',
      publishstatus: 2,
      marktype: '2',
      objecttemplatecode: '',
      objectcatgory: '2',
      parentobjectcode: '',
      properties: [
        {
          propertycode: '1747456136497467406',
          propertyname: '主键',
          columnname: 'id',
          propertycategorycode: '1',
          propertytypecode: '1',
          seq: 1,
          status: '1',
          idxtype: '2',
          publishstatus: '2',
          marktype: '2',
          propertydescr: '',
          relationobjectcode: '',
          ismaster: '',
          candelete: true
        }
      ],
      diclayer: 0,
      seq: 1,
      datapattern: '1',
      message: '{"committype":"saverecord","committypetext":"保存记录","msgbody":"2024-01-17 15:01"}',
      confsource: 1
    }
  ],
  offlines: []
}
export let seq = '31100'

const lines = str.split('\n')

const FieldDatas = lines
  .filter((f) => f)
  .map((line) => {
    const split = line.split('\t')
    let temp = {
      fieldName: split[0],
      fieldType: split[1],
      length: Number(split[2]),
      decimalPlaces: Number(split[3]),
      description: split[4],
      needCheck: split[5] == 'Y',
      exampleData: split[6],
      note: split[7],
      crmComment: split[8]
    }
    return temp
    console.log(temp)
  })

let preEntiy = protocol
protocol.objs[0].publishstatus = 2

let one = BigInt('1')

let start_code = BigInt(preEntiy.objs[0].properties[0].propertycode.toString()) + BigInt(seq)

let seq1 = 1

const Properties = []
FieldDatas.map((field) => {
  start_code += one
  const Property = {
    propertycode: start_code.toString(),
    propertyname: field.description,
    columnname: field.fieldName.toLowerCase(),
    propertycategorycode: '1',
    propertytypecode: '3',
    seq: seq1++,
    status: '1',
    idxtype: '1',
    publishstatus: '2',
    marktype: '1',
    propertydescr: `${field?.note}\n${field?.crmComment}\nexample:${field?.exampleData}`,
    relationobjectcode: '',
    ismaster: '',
    candelete: false
  }
  Properties.push(Property)
})
// console.log(Properties)

preEntiy.objs[0].properties = [preEntiy.objs[0].properties[0]]
//@ts-ignore
preEntiy.objs[0].properties[0].publishstatus = '2'
//@ts-ignore
preEntiy.objs[0].properties.push(...Properties)
//nodejs 写入Properties到当前目录下的Properties.json文件
//@ts-ignore
const fs = require('fs')
fs.writeFile('./demo/CEntiy.json', JSON.stringify(preEntiy), (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('success')
  }
})

function getRelationobjectcode(coldef): string {
  if (coldef[1] == 'promotion_guide_id') return '1727127470760661091'
  if (coldef[1] == 'salearea_id') return '800000000000000000'
  if (coldef[1] == 'sales_target_id') return '1716626739553243221'
  return ''
}
