
export enum PropertyTypeCode {
    PrimaryKey = 1,
    Name = 2,
    Text = 3,
    Memo = 996007000,
    LongText = 4,
    Integer = 5,
    LongInteger = 6,
    Decimal = 10,
    DateTime = 7,
    TimeRange = 30,
    Date = 29,
    Status = 18,
    Image = 16,
    Attachment = 26,
    Location = 17,
    OptionSet = 19,
    RelatedObject = 200000000000,
    DictionaryObject = 10000000000,
    ComplexRelatedObject = 300000000000,
    ThisObject = 1000000000,
    CreatedBy = 8,
    ModifiedBy = 9,
    CreatedTime = 11,
    ModifiedTime = 12,
    Pinyin = 31,
    IsDefault = 100,
    PhoneNumber = 13,
    TelephoneNumber = 15,
    Email = 14,
    PostalCode = 27,
    SortOrder = 20
}

export const PropertyTypeName = {
    [PropertyTypeCode.PrimaryKey]: '主键',
    [PropertyTypeCode.Name]: '名称',
    [PropertyTypeCode.Text]: '文本',
    [PropertyTypeCode.Memo]: '备注文本',
    [PropertyTypeCode.LongText]: '长文本',
    [PropertyTypeCode.Integer]: '整数',
    [PropertyTypeCode.LongInteger]: '长整型',
    [PropertyTypeCode.Decimal]: '数字',
    [PropertyTypeCode.DateTime]: '日期时间',
    [PropertyTypeCode.TimeRange]: '时间范围',
    [PropertyTypeCode.Date]: '年月日',
    [PropertyTypeCode.Status]: '状态',
    [PropertyTypeCode.Image]: '图片',
    [PropertyTypeCode.Attachment]: '附件',
    [PropertyTypeCode.Location]: '定位',
    [PropertyTypeCode.OptionSet]: '选项集',
    [PropertyTypeCode.RelatedObject]: '关联对象',
    [PropertyTypeCode.DictionaryObject]: '字典对象',
    [PropertyTypeCode.ComplexRelatedObject]: '复杂关联对象',
    [PropertyTypeCode.ThisObject]: '本对象',
    [PropertyTypeCode.CreatedBy]: '创建人',
    [PropertyTypeCode.ModifiedBy]: '修改人',
    [PropertyTypeCode.CreatedTime]: '创建时间',
    [PropertyTypeCode.ModifiedTime]: '修改时间',
    [PropertyTypeCode.Pinyin]: '拼音',
    [PropertyTypeCode.IsDefault]: '是否默认',
    [PropertyTypeCode.PhoneNumber]: '手机号',
    [PropertyTypeCode.TelephoneNumber]: '固定电话',
    [PropertyTypeCode.Email]: '邮箱',
    [PropertyTypeCode.PostalCode]: '邮编',
    [PropertyTypeCode.SortOrder]: '排序'
};

export const DatePropertyCodes =
    [
        PropertyTypeCode.Date,
        PropertyTypeCode.DateTime,
        PropertyTypeCode.TimeRange,
        PropertyTypeCode.CreatedTime,
        PropertyTypeCode.ModifiedTime
    ]

export function getPropertyTypeName(code: PropertyTypeCode | string): string {
    return PropertyTypeName[code] || '';
}


export const test = () => {

}

export function isNameOrText(code: PropertyTypeCode): boolean {
    return (code === PropertyTypeCode.Name || code === PropertyTypeCode.Text)
}