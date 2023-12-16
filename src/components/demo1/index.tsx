import { QueryModel } from '../../type/model/queryModel'
import { Input, Output, Property, Protocol } from '../../type/protocol'
import { genQueryModel_ } from '../queryGenerator'

export interface EntityRowData {
  name: string
  type?: string
  comment?: string
  relationobj?: tableData
  relationQueryFieldCodes?: string[]
  relationQueryFieldNames?: string[]
  query?: boolean
  this: columnData
  select: boolean
}

export const EntityRowData2QueryModel = (tableData: tableData, EntityRowDatas: EntityRowData[]): QueryModel => {
  const queryArgumentArrayMap = new Map<string, Property[]>()
  const { inputProperty, outputProperty } = genInOutProtocol(tableData, EntityRowDatas)

  queryArgumentArrayMap.set(tableData.objectmark, inputProperty)
  const output: Output = {
    customcode: tableData.objectcode,
    name: tableData.objectmark,
    objectcode: tableData.objectcode,
    objectname: tableData.objectname,
    datatype: '0',
    marktype: '0',
    properties: outputProperty
  }

  return genQueryModel_(output, queryArgumentArrayMap)
}

type InOutProtocol = {
  inputProperty: Property[]
  outputProperty: Property[]
}
function genInOutProtocol(tableData: tableData, EntityRowDatas: EntityRowData[]): InOutProtocol {
  const inOutProtocol = {
    inputProperty: [] as Property[],
    outputProperty: [] as Property[]
  }
  EntityRowDatas.filter((predicate) => predicate.select).forEach((item) => {
    if (item.query) {
      inOutProtocol.inputProperty.push({
        name: item.this.columnname,
        propertyname: item.this.propertyname,
        propertytypecode: item.this.propertytypecode,
        objectcode: tableData.objectcode,
        propertycode: item.this.propertycode,
        marktype: '2'
      })
    }
    inOutProtocol.outputProperty.push({
      name: item.this.columnname,
      propertyname: item.this.columnname,
      propertytypecode: item.this.propertytypecode,
      objectcode: tableData.objectcode,
      propertycode: item.this.propertycode,
      marktype: '2'
    })
    if (item.relationobj) {
      item.relationQueryFieldNames.forEach((name) => {
        inOutProtocol.outputProperty.push({
          name: item.this.columnname + '__' + name,
          propertycode: item.relationobj.properties.filter((property) => property.columnname === name)[0].propertycode,
          propertyname: name,
          objectcode: tableData.objectcode
        })
      })
    }
  })

  return inOutProtocol
}
