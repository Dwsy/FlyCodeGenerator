

import { Protocol } from "../../type/protocol"


import { getPropertyTypeEmoji, getPropertyTypeName } from "../../type/model/propertyTypeCodeRef"
import { internalSelectMenuDark } from "naive-ui"


export interface Entiy {
    EntityName: string,

    EntityComment: string,
    EntiyColumns: EntiyColumn[]
}

export interface EntiyColumn {
    EntiyColumnName: string
    EntiyColumnType: string
    EntiyColumnComment: string
}





const EntityNameSpaceDtsTemplate =
    `/**
* {{EntityComment}}
*/
declare interface {{EntityName}} {
{{EntityColumns}}
  }

`
const EntityColumnsTemplate = `    /**
     * {{EntiyColumnComment}}
    */
    {{EntiyColumnName}}: {{EntiyColumnType}}`


/**
 * 根据实体对象和实体类型生成类型定义。
 * @param {Entiy} entiy - 实体对象。
 * @param {EntityType} entityType - 实体类型。
 * @returns {string} 输入输出类型定义。
 */
const generateEntityDts = (entiy: Entiy): string => {
    if (!entiy) return
    let entiyColumns = []
    entiy.EntiyColumns.forEach(entiyColumn => {
        entiyColumns.push(
            EntityColumnsTemplate
                .replace('{{EntiyColumnComment}}', entiyColumn.EntiyColumnComment)
                .replace('{{EntiyColumnName}}', entiyColumn.EntiyColumnName)
                .replace('{{EntiyColumnType}}', entiyColumn.EntiyColumnType)
        )

    })
    let entityNameSpaceDts = EntityNameSpaceDtsTemplate
        .replace('{{EntityComment}}', entiy.EntityComment)
        .replace("{{EntityName}}", entiy.EntityName)
        .replace("{{EntityColumns}}", entiyColumns.join('\n'))
    // console.log(entityNameSpaceDts)
    return entityNameSpaceDts
}



/**
 * 根据协议生成完整实体的类型定义。
 * @param {tableData} tableData - 协议对象。
 * @returns {string} 输入输出实体的类型定义。
 */
export const generateEntityInterfaceDtsByProtocol = (tableDatas: tableData[]): string => {
    // 筛选tableDatas 的objectmark 在 inoutNameArray 中的数据

    return tableDatas
        .map(generateFullEntityInterfaceDtsFunc).map(generateEntityDts).join("\n")

}

export const generateFullEntityInterfaceDtsFunc = (entity: tableData): Entiy => {
    if (!entity)
        return
    let EntityName
    if (entity && typeof entity.objectmark !== 'undefined') {
        EntityName = entity.objectmark
    } else {
        EntityName = entity.tablename
    }
    let EntityComment = `${entity}(${entity.objectname})`
    if (entity.tablename != EntityName) {
        EntityComment += `-衍生于(${entity.tablename})`
    }
    const EntiyColumns = entity.properties
        .map((property): EntiyColumn => {
            const emojiType = getPropertyTypeEmoji(Number(property.propertytypecode))
            const propertyTypeName = getPropertyTypeName(Number(property.propertytypecode))
            const EntiyColumnComment = emojiType
                + `${property.propertyname}(${propertyTypeName})\n` + property.propertydescr
            const EntiyColumnName = property.columnname
            const EntiyColumnType = "string"
            return {
                EntiyColumnComment,
                EntiyColumnName,
                EntiyColumnType,
            }
        });
    return {
        EntityName,
        EntityComment,
        EntiyColumns,
    }
}


export const BoTemplate = `/**
* BO 业务对象
*/
declare class BO {
{{BoNewList}}
{{tempDtsList}}
}
`

export const BoNewTemplate = `
    /**
     * 创建业务对象{@link {{EntityName}}}。
     * @returns 业务对象实例
     */
    static new(entityName: "{{EntityName}}"): {{EntityName}};
`

export function generateBONewDtsByProtocol(protocol: Protocol, tableDataMap: Map<string, tableData>) {
    if (undefined == tableDataMap) {
        return undefined
    }
    let inoutArray = []
    if (protocol.input.length != 0) {
        inoutArray.push(...protocol.input.filter((data) => !Object.hasOwn(data, 'customcode')))//entity
    }
    if (protocol.output.length != 0) {
        inoutArray.push(...protocol.output.filter((data) => !Object.hasOwn(data, 'customcode')))//entity
    }
    if (inoutArray.length == 0) {
        return undefined
    }
    const inoutNameArray = inoutArray.map((inout) => inout.name)
    const inoutRableDataArray = inoutArray.map((inout) => tableDataMap.get(inout.objectcode))



    const FullEntityInterfaceDts = generateEntityInterfaceDtsByProtocol(inoutRableDataArray)
    const boNewTemplateArray = inoutNameArray
        .map((name) => { return BoNewTemplate.replaceAll("{{EntityName}}", name) })
        .join("\n")
    const newBODts = BoTemplate.replace("{{BoNewList}}", boNewTemplateArray)

    return FullEntityInterfaceDts.concat(newBODts)

}