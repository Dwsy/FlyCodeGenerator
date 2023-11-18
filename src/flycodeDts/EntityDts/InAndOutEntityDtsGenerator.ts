import { useFlyStore } from "../../store/flyStore"
import { PropertyTypeCode, getPropertyTypeEmoji, getPropertyTypeJavaScriptName, getPropertyTypeName } from "../../type/model/propertyTypeCodeRef"
import { Input, Output, Protocol } from "../../type/protocol"

export type EntityType = "IN" | "OUT" | ""
export interface Entiy {
    EntityName: string,
    Type: EntityType
    EntityComment: string,
    EntiyColumns: EntiyColumn[]
}

export interface EntiyColumn {
    EntiyColumnName: string
    EntiyColumnType: string
    EntiyColumnComment: string
}



const InOutTemplate =
    `/**
* {{TypeComment}}
*/
declare namespace {{Type}} {
{{EntiyNameSpaces}}

{{ArrayEntityTypeDts}}
}`

const EntityNameSpaceDtsTemplate =
    `/**
* {{EntityComment}}
*/
  namespace {{EntityName}} {
{{EntityColumns}}
  }

`
const EntityColumnsTemplate = `    /**
     * {{EntiyColumnComment}}
    */
    var {{EntiyColumnName}}: {{EntiyColumnType}};`


/**
 * 根据实体对象和实体类型生成输入输出类型定义。
 * @param {Entiy} entiy - 实体对象。
 * @param {EntityType} entityType - 实体类型。
 * @returns {string} 输入输出类型定义。
 */
const generateInOutDts = (entiy: Entiy, entityType: EntityType) => {

    let arrayEntityTypeDts = ''
    let isArray = false
    if (entiy.EntityName.startsWith("$")) {
        isArray = true
        arrayEntityTypeDts = `
        /**
        * ${entiy.EntityName} 数组
        */
       const  ${entiy.EntityName.replace("$", "")} : ${entiy.EntityName}[]
       
       `
    }
    let _EntityColumnsTemplate = EntityColumnsTemplate
    if (isArray) {
        _EntityColumnsTemplate = _EntityColumnsTemplate.replace("var", '')
    }


    let entiyColumns = []
    entiy.EntiyColumns.forEach(entiyColumn => {
        entiyColumns.push(
            _EntityColumnsTemplate
                .replace('{{EntiyColumnComment}}', entiyColumn.EntiyColumnComment)
                .replace('{{EntiyColumnName}}', entiyColumn.EntiyColumnName)
                .replace('{{EntiyColumnType}}', entiyColumn.EntiyColumnType)
        )

    })
    let entityNameSpaceDts = EntityNameSpaceDtsTemplate
        .replace('{{EntityComment}}', entiy.EntityComment)
        .replace("{{EntityName}}", entiy.EntityName)
        .replace("{{EntityColumns}}", entiyColumns.join('\n'))
    if (isArray) {
        entityNameSpaceDts = entityNameSpaceDts.replace("namespace", 'interface')
    }
    let dts = InOutTemplate
        .replace('{{Type}}', entityType)
        .replace('{{TypeComment}}', entityType == "IN" ? "输入参数" : "输出参数")
        .replace('{{EntiyNameSpaces}}', entityNameSpaceDts)
        .replace('{{ArrayEntityTypeDts}}', arrayEntityTypeDts)
    return dts


}

/**
 * 生成实体对象列表。
 * @param {Array<Input> | Array<Output>} entities - 输入或输出实体列表。
 * @param {EntityType} entityType - 实体类型。
 * @returns {Array<Entiy>} 实体对象列表。
 */
const generateEntiyObjList = (entiys: Array<Input> | Array<Output>, entityType: EntityType) => {
    const flyStore = useFlyStore()

    return entiys
        .filter((data) => data.properties.length > 0 && data.datatype == "0")
        .map((entity): Entiy => {
            const EntityComment = `${entity.name}(${entity.objectname})`
            const EntiyColumns = entity.properties
                .map((property): EntiyColumn => {
                    const propertyTypeName = getPropertyTypeName(Number(property.propertytypecode))
                    const emojiType = getPropertyTypeEmoji(Number(property.propertytypecode))
                    const EntiyColumnComment = emojiType
                        + `${property.propertyname}(${propertyTypeName})
                    ${flyStore.columnDataMap.get(property.propertycode).propertydescr}`
                    const EntiyColumnName = property.name
                    const EntiyColumnType = "string"
                    return {
                        EntiyColumnComment,
                        EntiyColumnName,
                        EntiyColumnType,
                    }
                });
            const EntityName = entity.datatype == '0' ? entity.name : '$' + entity.name
            return {
                Type: entityType,
                EntityName,
                EntityComment,
                EntiyColumns,
            }
        })
}

/**
 * 根据协议生成输入输出实体的类型定义。
 * @param {Protocol} protocol - 协议对象。
 * @returns {string} 输入输出实体的类型定义。
 */
export const generateInAndOutEntityDtsByProtocol = (protocol: Protocol) => {
    if (protocol == undefined) {
        return undefined
    }
    const inputEntiyList = generateEntiyObjList(protocol.input, "IN")
    const outputEntiyList = generateEntiyObjList(protocol.output, "OUT")
    // debugger
    // 处理自定义入参
    protocol.input.filter((data) => Object.hasOwn(data, 'customcode')).forEach((custimEntity) => {
        console.log(custimEntity)
        //实体
        if (custimEntity.datatype == "0") {
            inputEntiyList.push({
                Type: "IN",
                EntityName: custimEntity.name,
                EntityComment: `${custimEntity.name}(${custimEntity.objectname})`,
                EntiyColumns: custimEntity.properties.map((column) => {
                    let columnData: EntiyColumn = {
                        EntiyColumnComment: `${column.propertyname}(${PropertyTypeCode[column.propertytypecode]})})`,
                        EntiyColumnName: column.name,
                        EntiyColumnType: getPropertyTypeJavaScriptName(column.propertytypecode),
                    }
                    return columnData
                })
            })
        }
        //数组
        else if (custimEntity.datatype == "1") {
            inputEntiyList.push({
                Type: "IN",
                EntityName: "$" + custimEntity.name,
                EntityComment: `${custimEntity.name}(${custimEntity.objectname})`,
                EntiyColumns: custimEntity.properties.map((column) => {
                    let columnData: EntiyColumn = {
                        EntiyColumnComment: `${column.propertyname}(${PropertyTypeCode[column.propertytypecode]})})`,
                        EntiyColumnName: column.name,
                        EntiyColumnType: getPropertyTypeJavaScriptName(column.propertytypecode),
                    }
                    return columnData
                })
            })
        }
    })
    // 处理自定义出参
    protocol.output.filter((data) => Object.hasOwn(data, 'customcode') && data.datatype == "0").forEach((custimEntity) => {
        if (custimEntity.datatype == "0") {
            outputEntiyList.push({
                Type: "OUT",
                EntityName: custimEntity.name,
                EntityComment: `${custimEntity.name}(${custimEntity.objectname})`,
                EntiyColumns: custimEntity.properties.map((column) => {
                    let columnData: EntiyColumn = {
                        EntiyColumnComment: `${column.propertyname}(${PropertyTypeCode[column.propertytypecode]})})`,
                        EntiyColumnName: column.name,
                        EntiyColumnType: getPropertyTypeJavaScriptName(column.propertytypecode),
                    }
                    return columnData
                })
            })
        }
        else if (custimEntity.datatype == "1") {
            outputEntiyList.push({
                Type: "OUT",
                EntityName: "$" + custimEntity.name,
                EntityComment: `${custimEntity.name}(${custimEntity.objectname})`,
                EntiyColumns: custimEntity.properties.map((column) => {
                    let columnData: EntiyColumn = {
                        EntiyColumnComment: `${column.propertyname}(${PropertyTypeCode[column.propertytypecode]})})`,
                        EntiyColumnName: column.name,
                        EntiyColumnType: getPropertyTypeJavaScriptName(column.propertytypecode),
                    }
                    return columnData
                })
            })
        }

    })


    const singleField = protocol.input.filter((data) => {
        return data.properties.length == 0
    }).map(data => {
        return `const ${data.name}:string`
    })

    const singleField2 = protocol.output.filter((data) => {
        return data.properties.length == 0
    }).map(data => {
        return `const ${data.name}:string`
    })


    console.log(singleField)
    console.log(inputEntiyList)
    console.log(outputEntiyList)
    const inEntityDts = inputEntiyList.map((entity) => generateInOutDts(entity, "IN"))
    inEntityDts.push(InOutTemplate.replace("{{Type}}", "IN")
        .replace("{{ArrayEntityTypeDts}}", '')
        .replace("{{EntiyNameSpaces}}", singleField.join('\n'))
        .replace("{{TypeComment}}", "输入参数"))
    const outEntityDts = outputEntiyList.map((entity) => generateInOutDts(entity, "OUT"))
    outEntityDts.push(InOutTemplate.replace("{{Type}}", "OUT")
        .replace("{{ArrayEntityTypeDts}}", '')
        .replace("{{EntiyNameSpaces}}", singleField2.join('\n'))
        .replace("{{TypeComment}}", "输入参数"))
    return inEntityDts.concat(outEntityDts).join("\n")
}

