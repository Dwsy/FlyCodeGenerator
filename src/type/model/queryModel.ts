import { Property } from "../protocol"
import { DatePropertyCodes, PropertyTypeCode } from "./propertyTypeCodeRef"

/**
 * 查询模型
 * @interface
 */
export interface QueryModel {
    /**
     * 表名
     */
    tableName: string;
    /**
     * 表别名
     */
    tableShortName: string;
    /**
     * 列列表
     */
    columns: ColumnModel[];
    /**
     * 条件列表
     */
    conditions: ConditionModel[];
    /**
     * 连接列表
     */
    joins: JoinModel[];
}

/**
 * 列模型
 * @interface
 */
export interface ColumnModel {
    /**
     * 列名
     */
    columnName: string;
    /**
     * 表别名
     */
    tableShortName: string;
    /**
     * 查询名
     */
    queryName?: string;
    /**
     * 关联表
     */
    relationTable?: RelationTableModel;
}

/**
 * 关联表模型
 * @interface
 */
export interface RelationTableModel {
    /**
     * 表名
     */
    name: string;
    /**
     * 表别名
     */
    shortName: string;
    /**
     * ID 字段(主键)
     */
    idField: string | boolean;
}

/**
 * 连接模型
 * @interface
 */
export interface JoinModel {
    /**
     * 表名
     */
    tableName: string;
    /**
     * 表别名
     */
    tableShortName: string;
    /**
     * 关联表
     */
    relationTable: {
        /**
         * 表名
         */
        name: string;
        /**
         * 表别名
         */
        shortName: string;
        /**
         * ID 字段
         */
        idField: string | boolean;
    };
    /**
     * 列名
     */
    columnName: string;
}

/**
 * 条件模型
 * @interface
 */
export interface ConditionModel {
    /**
     * 表名
     */
    tableName: string;
    /**
     * 表别名
     */
    tableShortName: string;
    /**
     * 列名
     */
    columnName: string;
    /**
     * 操作符
     */
    operator: Operator;
    /**
     * 值
     */
    value?: string;
    /**
     * 第二个值
     */
    secondValue?: string;
    /**
     * 属性类型代码
     */
    propertytypecode?: string;
    /**
     * 模糊匹配
     */
    like?: {
        /**
         * 匹配类型
         */
        matchType: LikeMatchType;
    };
}

/**
 * 操作符枚举
 * @enum
 */
export enum Operator {
    /**
     * 等于
     */
    Equal = "=",
    /**
     * 不等于
     */
    NotEqual = "<>",
    /**
     * 大于
     */
    GreaterThan = ">",
    /**
     * 大于等于
     */
    GreaterThanOrEqual = ">=",
    /**
     * 小于
     */
    LessThan = "<",
    /**
     * 小于等于
     */
    LessThanOrEqual = "<=",
    /**
     * 介于
     */
    Between = "BETWEEN",
    /**
     * 与
     */
    AND = "AND",
    /**
     * 包含
     */
    IN = "IN",
    /**
     * 不介于
     */
    NotBetween = "NOT BETWEEN",
    /**
     * 模糊匹配
     */
    Like = "LIKE",
}

/**
 * 模糊匹配类型枚举
 * @enum
 */
export enum LikeMatchType {
    /**
     * 以某个字符串开始
     */
    StartsWith = "StartsWith",
    /**
     * 以某个字符串结束
     */
    EndsWith = "EndsWith",
    /**
     * 包含某个字符串
     */
    Contains = "Contains",
}

export function getOperator(property: Property) {
    const propertytypecode = Number(property.propertytypecode)
    if (propertytypecode == PropertyTypeCode.PrimaryKey) {
        return Operator.Equal
    }

    if (propertytypecode == PropertyTypeCode.Name) {
        return Operator.Like
    }

    if (propertytypecode == PropertyTypeCode.Text) {
        return Operator.Like
    }
    if (propertytypecode == PropertyTypeCode.DateTime) {
        return Operator.Between
    }
    if (propertytypecode == PropertyTypeCode.CreatedBy) {
        return Operator.Equal
    }
    if (propertytypecode == PropertyTypeCode.DateTime) {
        return Operator.Between
    }
    if (propertytypecode == PropertyTypeCode.CreatedTime) {
        return Operator.Between
    }
    if (propertytypecode == PropertyTypeCode.ModifiedTime) {
        return Operator.Between
    }
    return Operator.Equal

}
export class ConditionGenerator {
    private condition: ConditionModel;

    constructor(condition: ConditionModel) {
        this.condition = condition;
    }

    public generateEqualClause(): string {
        return `${this.condition.tableShortName}.${this.condition.columnName} = {IN.${this.condition.tableName}.${this.condition.columnName}}`;
    }

    public generateNotEqualClause(): string {
        return `${this.condition.tableShortName}.${this.condition.columnName} <> {IN.${this.condition.tableName}.${this.condition.columnName}}`;
    }

    public generateGreaterThanClause(): string {
        return `${this.condition.tableShortName}.${this.condition.columnName} > {IN.${this.condition.tableName}.${this.condition.columnName}}`;
    }

    public generateGreaterThanOrEqualClause(): string {
        return `${this.condition.tableShortName}.${this.condition.columnName} >= {IN.${this.condition.tableName}.${this.condition.columnName}}`;
    }

    public generateLessThanClause(): string {
        return `${this.condition.tableShortName}.${this.condition.columnName} < {IN.${this.condition.tableName}.${this.condition.columnName}}`;
    }

    public generateLessThanOrEqualClause(): string {
        return `${this.condition.tableShortName}.${this.condition.columnName} <= {IN.${this.condition.tableName}.${this.condition.columnName}}`;
    }

    public generateBetweenClause(): string {

        let whereClause = `IN.${this.condition.tableName}.${this.condition.columnName}`
        const isDate = DatePropertyCodes.indexOf(Number(this.condition.propertytypecode)) !== -1
        const [lvalue, rvalue] = isDate ? ["begin", "end"] : ["min", "max"]

        whereClause = whereClause + ` ${Operator.Between} { ${lvalue} } ${Operator.AND} { ${rvalue} }`;

        return whereClause
    }

    public generateNotBetweenClause(): string {
        return `${this.condition.tableShortName}.${this.condition.columnName} NOT BETWEEN ${this.condition.value} AND ${this.condition.secondValue}`;
    }

    public generateLikeClause(): string {
        // { #if!String.isBlank(IN.tn_crm_dwy.manager__orgname) }
        // and member.orgname  like  { '%' + IN.tn_crm_dwy.manager__orgname + '%' }
        // { #endif }
        const value = this.condition.value;
        const matchType = this.condition.like.matchType;
        let likeValue: string
        const { tableName, columnName } = this.condition;
        const percent = "'%'"
        if (matchType === LikeMatchType.Contains) {
            likeValue = `{ ${percent} + {IN.${tableName}.${columnName}} + ${percent} }`;
        } else if (matchType === LikeMatchType.StartsWith) {
            likeValue = `{ ${percent} + {${tableName}.${columnName}} }`;
        } else if (matchType === LikeMatchType.EndsWith) {
            likeValue = `{ ${tableName}.${columnName}} + ${percent} }`;
        }
        return `${this.condition.tableShortName}.${this.condition.columnName} ${Operator.Like} ${likeValue}`;
    }

    public generateWhereClause(): string {
        let clause = "";
        switch (this.condition.operator) {
            case Operator.Equal:
                clause = this.generateEqualClause();
                break;
            case Operator.NotEqual:
                clause = this.generateNotEqualClause();
                break;
            case Operator.GreaterThan:
                clause = this.generateGreaterThanClause();
                break;
            case Operator.GreaterThanOrEqual:
                clause = this.generateGreaterThanOrEqualClause();
                break;
            case Operator.LessThan:
                clause = this.generateLessThanClause();
                break;
            case Operator.LessThanOrEqual:
                clause = this.generateLessThanOrEqualClause();
                break;
            case Operator.Between:
                clause = this.generateBetweenClause();
                break;
            case Operator.NotBetween:
                clause = this.generateNotBetweenClause();
                break;
            case Operator.Like:
                clause = this.generateLikeClause();
                break
            default:
                break;
        }
        return clause;
    }
}

