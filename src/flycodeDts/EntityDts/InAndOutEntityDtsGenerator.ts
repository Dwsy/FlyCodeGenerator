import { getPropertyTypeEmoji, getPropertyTypeName } from "../../type/model/propertyTypeCodeRef"
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
    return entiys
        .map((entity): Entiy => {
            const EntityComment = `${entity.name}(${entity.objectname})`
            const EntiyColumns = entity.properties
                .map((property): EntiyColumn => {
                    const propertyTypeName = getPropertyTypeName(Number(property.propertytypecode))
                    const emojiType = getPropertyTypeEmoji(Number(property.propertytypecode))
                    const EntiyColumnComment = emojiType + `${property.propertyname}(${propertyTypeName})`
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
    const inputEntiyList = generateEntiyObjList(protocol.input, "IN")
    const outputEntiyList = generateEntiyObjList(protocol.output, "OUT")
    console.log(inputEntiyList)
    console.log(outputEntiyList)
    const inEntityDts = inputEntiyList.map((entity) => generateInOutDts(entity, "IN"))
    const outEntityDts = outputEntiyList.map((entity) => generateInOutDts(entity, "OUT"))
    return inEntityDts.concat(outEntityDts).join("\n")
}

