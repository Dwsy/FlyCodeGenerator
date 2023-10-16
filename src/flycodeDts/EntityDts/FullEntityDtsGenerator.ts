import { getPropertyTypeEmoji, getPropertyTypeName } from "../../type/model/propertyTypeCodeRef"


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
declare namespace {{EntityName}} {
{{EntityColumns}}
  }

`
const EntityColumnsTemplate = `    /**
     * {{EntiyColumnComment}}
    */
    var {{EntiyColumnName}}: {{EntiyColumnType}}`


/**
 * 根据实体对象和实体类型生成类型定义。
 * @param {Entiy} entiy - 实体对象。
 * @param {EntityType} entityType - 实体类型。
 * @returns {string} 输入输出类型定义。
 */
const generateEntityDts = (entiy: Entiy): string => {
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
    return entityNameSpaceDts
}



/**
 * 根据协议生成完整实体的类型定义。
 * @param {tableData} tableData - 协议对象。
 * @returns {string} 输入输出实体的类型定义。
 */
export const generateFullEntityDtsByProtocol = (tableDatas: tableData[]): string => {
    return tableDatas.slice(1, 10).map((entity): Entiy => {
        const EntityName = entity.objectmark
        let EntityComment = `${entity.objectmark}(${entity.objectname})`
        if (entity.tablename != entity.objectmark) {
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
    }).map(generateEntityDts).join("\n")

}