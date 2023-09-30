import { DatePropertyCodes, PropertyTypeCode } from "./propertyTypeCodeRef"

export interface QueryModel {
    tableName: string
    tableShortName: string
    columns: ColumnModel[]
    conditions: ConditionModel[]
    joins: JoinModel[]
}




export interface ColumnModel {
    columnName: string
    tableShortName: string
    queryName?: string,
    relationTable?: RelationTableModel
}


export interface RelationTableModel {
    name: string
    shortName: string
    idField: string | boolean
}

export interface JoinModel {
    tableName: string
    tableShortName: string
    relationTable: {
        name: string
        shortName: string
        idField: string | boolean
    }
    columnName: string
}


export interface ConditionModel {
    tableName: string
    tableShortName: string
    columnName: string
    operator: Operator
    value?: string
    secondValue?: string
    propertytypecode?: string
    like?: {
        matchType: LikeMatchType
    }
}

export enum Operator {
    Equal = "=",
    NotEqual = "<>",
    GreaterThan = ">",
    GreaterThanOrEqual = ">=",
    LessThan = "<",
    LessThanOrEqual = "<=",
    Between = "BETWEEN",
    AND = "AND",
    IN = "IN",
    NotBetween = "NOT BETWEEN",
    Like = "LIKE",
}


export enum LikeMatchType {
    StartsWith = "StartsWith",
    EndsWith = "EndsWith",
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

        whereClause = ` ${Operator.Between} { ${lvalue} } ${Operator.AND} { ${rvalue} }`;

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
            likeValue = `{ ${percent} + {${tableName}.${columnName}} + ${percent} }`;
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

