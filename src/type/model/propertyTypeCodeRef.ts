
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
    BusinessObject = 100000000000,
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
    [PropertyTypeCode.BusinessObject]: '业务对象',
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
    return PropertyTypeName[Number(code)] || '';
}

export function getPropertyTypeJavaScriptName(code: PropertyTypeCode | string): string {
    if (code === PropertyTypeCode.Integer) {
        return "number"
    }
    if (code === PropertyTypeCode.LongInteger) {
        return "number"
    }
    if (code === PropertyTypeCode.Status) {
        return "number"
    }
    if (code === PropertyTypeCode.SortOrder) {
        return "number"
    }
    return "string"
}


export const test = () => {

}

export function isNameOrText(code: PropertyTypeCode): boolean {
    return (code === PropertyTypeCode.Name || code === PropertyTypeCode.Text)
}

export const ignorePropertyType = [
    PropertyTypeCode.PrimaryKey,
    PropertyTypeCode.Location,
    PropertyTypeCode.SortOrder,
    PropertyTypeCode.LongText,
    PropertyTypeCode.Image,
]


export function getPropertyTypeEmoji(propertyTypeCode: PropertyTypeCode): string {
    switch (propertyTypeCode) {
        case PropertyTypeCode.PrimaryKey:
            return '🔑';
        case PropertyTypeCode.Name:
            return '📛';
        case PropertyTypeCode.Text:
            return '📝';
        case PropertyTypeCode.Memo:
            return '📝📝';
        case PropertyTypeCode.LongText:
            return '📝📝📝';
        case PropertyTypeCode.Integer:
            return '🔢';
        case PropertyTypeCode.LongInteger:
            return '🔢🔢';
        case PropertyTypeCode.Decimal:
            return '💰';
        case PropertyTypeCode.DateTime:
            return '📅🕰️';
        case PropertyTypeCode.TimeRange:
            return '🕰️🕰️';
        case PropertyTypeCode.Date:
            return '📅';
        case PropertyTypeCode.Status:
            return '🟢🔴';
        case PropertyTypeCode.Image:
            return '🖼️';
        case PropertyTypeCode.Attachment:
            return '📎';
        case PropertyTypeCode.Location:
            return '🌐';
        case PropertyTypeCode.OptionSet:
            return '🔘';
        case PropertyTypeCode.RelatedObject:
            return '🔗';
        case PropertyTypeCode.DictionaryObject:
            return '📖';
        case PropertyTypeCode.BusinessObject:
            return '🔗';
        case PropertyTypeCode.ComplexRelatedObject:
            return '🔗🔗';
        case PropertyTypeCode.ThisObject:
            return '👈';
        case PropertyTypeCode.CreatedBy:
            return '🤷';
        case PropertyTypeCode.ModifiedBy:
            return '🤷';
        case PropertyTypeCode.CreatedTime:
            return '🤷🕰️';
        case PropertyTypeCode.ModifiedTime:
            return '🤷🕰️';
        case PropertyTypeCode.Pinyin:
            return '🔤';
        case PropertyTypeCode.IsDefault:
            return '🌟';
        case PropertyTypeCode.PhoneNumber:
            return '📱';
        case PropertyTypeCode.TelephoneNumber:
            return '📞';
        case PropertyTypeCode.Email:
            return '📮';
        case PropertyTypeCode.PostalCode:
            return '📭';
        case PropertyTypeCode.SortOrder:
            return '🔢';
        default:
            return '';
    }
}


export function getRandomEmoji(index) {
    const emojis: string[][] = [
        ['😆', '🤔'],
        ['😀', '😁'],
        ['😂', '🤣'],
        ['😃', '😄'],
        ['😅', '😆'],
        ['😉', '😊'],
        ['😋', '😌'],
        ['😍', '😘'],
        ['😎', '🕶️'],
        ['😏', '😒'],
        ['😓', '😔'],
        ['😖', '😞'],
        ['😟', '😠'],
        ['😡', '🤬'],
        ['😢', '😥'],
        ['🙇', '🙇'],
        ['😭', '😮‍💨'],
        ['😯', '😰'],
        ['😱', '🥵'],
        ['🥶', '😲'],
        ['😳', '🤯'],
        ['🥴', '🤢'],
        ['🤮', '🤧'],
        ['🥺', '🥱'],
        ['🤫', '🤐'],
        ['🤗', '🤔'],
        ['🙄', '😬'],
        ['🤥', '🤫'],
        ['🤡', '👻'],
        ['💩', '👽'],
        ['😀', '🤪'],
        ['😂', '😆'],
        ['😎', '🤓'],
        ['😜', '😝'],
        ['😘', '😗'],
        ['😴', '🥱'],
        ['😷', '🤕'],
        ['🤖', '👾'],
        ['👻', '💀'],
        ['🤠', '🤡'],
    ];
    const randomIndex = Math.floor(index % emojis.length);
    return emojis[randomIndex];
}

export function getRandomEmojiByUnicode(): string {
    const ranges = [
        [0x1f600, 0x1f64f], // 常用的 emoji
        [0x1f300, 0x1f5ff], // 符号和杂项符号
        [0x1f680, 0x1f6ff], // 交通和地图符号
        [0x1f900, 0x1f9ff], // 表情符号
        [0x2600, 0x26ff], // 杂项符号
    ];

    const usedEmojis: string[] = [];
    let randomCodePoint: number;
    let emoji: string;

    do {
        const randomRange = ranges[Math.floor(Math.random() * ranges.length)];
        const [start, end] = randomRange;
        const codePointRange = end - start + 1;
        randomCodePoint = start + Math.floor(Math.random() * codePointRange);
        emoji = String.fromCodePoint(randomCodePoint);
    } while (usedEmojis.includes(emoji));

    usedEmojis.push(emoji);
    return emoji;
}