interface Pageinfo {
    clientcategorycode: string;
    pagetemplatecode: string;
    type: string;
    title: string;
    pagedescr: string;
    directorytypecode: string;
    marktype: string;
    versionnum: string;
    status: string;
    ref: string;
    code: string;
    reportdesclist: any[];
    ctrltitlewidth: string;
    ctrllayout: string;
    remark: string;
}

interface Parent {
    flexdirection: string;
}

interface Content {
    type: string;
    code: string;
    titlewidth: string;
    title: string;
    value: string;
    flex: string;
    name: string;
    eventlist: any[];
}

interface Content {
    type: string;
    code: string;
    title: string;
    display: string;
    flexdirection: string;
    flex: string;
    shape: string;
    bordercolor: string;
    bordersides: string;
    overflowy: string;
    content: Content;
    eventlist: any[];
}

interface Content {
    type: string;
    code: string;
    title: string;
    display: string;
    flexdirection: string;
    flex: string;
    shape: string;
    bordercolor: string;
    bordersides: string;
    overflowy: string;
    flexwrap: string;
    content: Content;
    eventlist: any[];
}

interface Cards {
    title: string;
    hidden: string;
    flexdirection: string;
    overflow: string;
    content: Content;
}

interface Content {
    type: string;
    code: string;
    name: string;
    title: string;
    hidden: string;
    flexdirection: string;
    parent: Parent;
    overflow: string;
    flex: string;
    cards: Cards;
    eventlist: any[];
}

interface Body {
    title: string;
    type: string;
    display: string;
    flexdirection: string;
    flex: string;
    shape: string;
    bordercolor: string;
    bordersides: string;
    overflowy: string;
    code: string;
    content: Content;
    eventlist: any[];
}

interface Options {
    key: string;
    text: string;
    isselected: string;
}

interface Basic {
    type: string;
    code: string;
    titlewidth: string;
    titleflex: string;
    title: string;
    placeholder: string;
    name: string;
    hiddenclearbtn: string;
    searchable: string;
    options: Options;
    hidden: string;
    eventlist: any[];
}

interface Searchcondition {
    advanced: any[];
    basic: Basic;
}

interface Sortcondition {
    advanced: any[];
    basic: any[];
}

interface Floatposition {
    bottom: string;
}

interface Eventlist {
    trigger: string;
    handler: string;
}

interface Content {
    type: string;
    code: string;
    title: string;
    display: string;
    flexdirection: string;
    flex: string;
    shape: string;
    overflowy: string;
    content: any;
    searchcondition: Searchcondition;
    sortcondition: Sortcondition;
    flexwrap: string;
    floatposition: Floatposition;
    name: string;
    eventlist: any[];
}

interface Eventlist {
    trigger: string;
    handler: string;
}

interface Subviews {
    type: string;
    title: string;
    flexdirection: string;
    needconfirm: string;
    confirmtitle: string;
    resetwhenopen: string;
    content: Content;
    code: string;
    eventlist: Eventlist;
}

interface View {
    body: Body;
    subviews: Subviews;
}

interface Ctrl {
    code: string;
    component: string;
}

interface Properties {
    name: string;
    paramtype: string;
    value: string;
    ctrl: Ctrl;
}

interface Param {
    name: string;
    datatype: string;
    ctrlcode: string;
    properties: Properties;
}

interface Actions {
    code: string;
    type: string;
    desc: string;
    condition: string;
    param: Param;
}

interface Initial {
    code: string;
    desc: string;
    name: string;
    successhint: string;
    notice: string;
    key: string;
    condition: string;
    remark: string;
    _rel_export_info: string;
    actions: Actions;
}

interface Ctrl {
    code: string;
    scope: string;
}

interface Ctrl {
    code: string;
    component: string;
}

interface Properties {
    name: string;
    value: string;
    ctrl: Ctrl;
}

interface Getter {
    name: string;
    datatype: string;
    ctrl: Ctrl;
    properties: Properties;
}

interface Ctrl {
    code: string;
    component: string;
}

interface Properties {
    name: string;
    value: string;
    ctrl: Ctrl;
}

interface Setter {
    name: string;
    datatype: string;
    ctrlcode: string;
    properties: Properties;
}

interface Actions {
    code: string;
    type: string;
    desc: string;
    condition: string;
    binddic: string;
    logiccode: string;
    mode: string;
    queue: string;
    _type_spe: string;
    bind: string;
    getter: Getter;
    setter: Setter;
}

interface Handlers {
    code: string;
    desc: string;
    name: string;
    successhint: string;
    notice: string;
    key: string;
    condition: string;
    remark: string;
    _rel_export_info: string;
    actions: Actions;
}

interface Presenter {
    initial: Initial;
    interface: any[];
    handlers: Handlers;
}

interface Properties {
    objectcode: string;
    propertyname: string;
    propertytypecode: string;
    name: string;
    marktype: string;
    propertycode: string;
}

interface Output {
    objectcode: string;
    datatype: string;
    name: string;
    objectname: string;
    marktype: string;
    properties: Properties;
}

interface Properties {
    objectcode: string;
    propertyname: string;
    propertytypecode: string;
    name: string;
    marktype: string;
    propertycode: string;
}

interface Input {
    objectcode: string;
    datatype: string;
    name: string;
    objectname: string;
    marktype: string;
    properties: Properties;
}

interface Businessmodel {
    actiontype: string;
    tenantdbtype: string;
    modellogiccode: string;
    message: string;
    modellogicname: string;
    output: Output;
    input: Input;
    tenantdbname: string;
    execmode: string;
    functionname: string;
    actioncategory: string;
    tenantdbcode: string;
    modelcode: string;
    marktype: string;
    usedatarule: string;
    status: number;
}

interface FormProtocol {
    pageinfo: Pageinfo;
    view: View;
    presenter: Presenter;
    businessmodel: Businessmodel;
    message: string;
}



let protocol: FormProtocol = {
    "pageinfo": {
        "clientcategorycode": "1",
        "pagetemplatecode": "200",
        "type": "200",
        "title": "促销活动-现代渠道",
        "pagedescr": "web-促销活动-现代渠道",
        "directorytypecode": "1721338722475184210",
        "marktype": "2",
        "versionnum": "2.0",
        "status": "1",
        "ref": "",
        "code": "1731541837803556952",
        "reportdesclist": [],
        "ctrltitlewidth": "",
        "ctrllayout": "",
        "remark": ""
    },
    "view": {
        "body": {
            "title": "布局",
            "type": "layout",
            "display": "flex",
            "flexdirection": "vertical",
            "flex": "1",
            "shape": "rect",
            "bordercolor": "lightgray",
            "bordersides": "",
            "overflowy": "",
            "code": "1721355938146947131",
            "content": [
                {
                    "type": "tabboard",
                    "code": "1721355938146947130",
                    "name": "costrule",
                    "title": "变动类促销",
                    "hidden": "0",
                    "flexdirection": "vertical",
                    "parent": {
                        "flexdirection": "vertical"
                    },
                    "overflow": "",
                    "flex": "1",
                    "cards": [
                        {
                            "title": "基本信息",
                            "hidden": "0",
                            "flexdirection": "vertical",
                            "overflow": "",
                            "content": [
                                {
                                    "type": "layout",
                                    "code": "1721355938146947129",
                                    "title": "布局",
                                    "display": "flex",
                                    "flexdirection": "vertical",
                                    "flex": "",
                                    "shape": "rect",
                                    "bordercolor": "lightgray",
                                    "bordersides": "",
                                    "overflowy": "",
                                    "flexwrap": "wrap",
                                    "content": [
                                        {
                                            "type": "layout",
                                            "code": "1729411162908528735",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "vertical",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "switch",
                                                    "code": "1729411162908528734",
                                                    "titlewidth": "110",
                                                    "title": "关联促销指引",
                                                    "value": "1",
                                                    "flex": "1",
                                                    "name": "JB-关联促销指引",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "textinput",
                                                    "code": "1729757554390732866",
                                                    "titlewidth": "110",
                                                    "titleflex": "",
                                                    "title": "关联指引id",
                                                    "placeholder": "",
                                                    "name": "JB-关联指引id",
                                                    "verificationrule": "",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "textinput",
                                                    "code": "1729757554390732850",
                                                    "titlewidth": "110",
                                                    "titleflex": "",
                                                    "title": "活动申请主键",
                                                    "placeholder": "",
                                                    "name": "JB-活动申请主键",
                                                    "verificationrule": "",
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "layout",
                                            "code": "1729411162908528733",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "horizontal",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "textbutton",
                                                    "code": "1729411162908528731",
                                                    "name": "JB-关联指引名称",
                                                    "title": "关联指引名称",
                                                    "placeholder": "关联指引名称",
                                                    "flex": "",
                                                    "width": "65%",
                                                    "marginright": "5%",
                                                    "eventlist": [
                                                        {
                                                            "trigger": "onclicked",
                                                            "handler": "1729757554390732878"
                                                        },
                                                        {
                                                            "trigger": "onvaluechange",
                                                            "handler": "1729757554390732860"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "textinput",
                                                    "code": "1729411162908528732",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "指引业务活动类型",
                                                    "placeholder": "指引业务活动类型",
                                                    "name": "JB-指引业务活动类型",
                                                    "verificationrule": "",
                                                    "flex": "",
                                                    "width": "30%",
                                                    "readonly": "1",
                                                    "marginleft": "",
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "layout",
                                            "code": "1729411162908528730",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "horizontal",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "textinput",
                                                    "code": "1721355938146947126",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "促销活动名称",
                                                    "placeholder": "促销活动名称",
                                                    "name": "JB-促销活动名称",
                                                    "verificationrule": "",
                                                    "width": "65%",
                                                    "flex": "",
                                                    "marginright": "5%",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "dropdownbox",
                                                    "code": "1729411162908528729",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "渠道",
                                                    "placeholder": "渠道",
                                                    "name": "JB-渠道",
                                                    "hiddenclearbtn": "0",
                                                    "searchable": "1",
                                                    "multiselectable": "1",
                                                    "flex": "",
                                                    "width": "30%",
                                                    "eventlist": [
                                                        {
                                                            "trigger": "onload",
                                                            "handler": "1721373985633079365"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "layout",
                                            "code": "1729411162908528728",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "horizontal",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "daterange",
                                                    "code": "1729757554390732853",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "活动时间",
                                                    "placeholder": "活动时间",
                                                    "name": "JB-活动时间",
                                                    "unit": "day",
                                                    "value": "",
                                                    "maxdiff": "",
                                                    "mindiff": "",
                                                    "hiddenclearbtn": "0",
                                                    "defranges": [],
                                                    "format": "yyyy-MM-dd",
                                                    "width": "65%",
                                                    "marginright": "5%",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "dropdownbox",
                                                    "code": "1729411162908528727",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "投放范围",
                                                    "placeholder": "投放范围",
                                                    "name": "JB-投放范围",
                                                    "hiddenclearbtn": "0",
                                                    "searchable": "0",
                                                    "width": "30%",
                                                    "options": [
                                                        {
                                                            "key": "1",
                                                            "text": "按营销组织投放",
                                                            "isselected": "0"
                                                        },
                                                        {
                                                            "key": "2",
                                                            "text": "按售达方投放",
                                                            "isselected": "0"
                                                        }
                                                    ],
                                                    "flex": "",
                                                    "eventlist": [
                                                        {
                                                            "trigger": "onvaluechange",
                                                            "handler": "1729673766046404663"
                                                        }
                                                    ]
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "layout",
                                            "code": "1729411162908528726",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "vertical",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "picktree",
                                                    "code": "1729411162908528725",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "业务活动类型",
                                                    "placeholder": "业务活动类型",
                                                    "name": "JB-业务活动类型",
                                                    "displaystyle": "input",
                                                    "searchable": "1",
                                                    "multiselectable": "1",
                                                    "hiddenclearbtn": "0",
                                                    "expandmodel": "allexpand",
                                                    "intermediateselectmode": "disable",
                                                    "flex": "",
                                                    "eventlist": [
                                                        {
                                                            "trigger": "onload",
                                                            "handler": "1729757554390732857"
                                                        }
                                                    ]
                                                },
                                                {
                                                    "type": "textinputarea",
                                                    "code": "1729411162908528724",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "申请说明",
                                                    "placeholder": "",
                                                    "name": "JB-申请说明",
                                                    "minvisiblelinenumber": "",
                                                    "flex": "",
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "layout",
                                            "code": "1729411162908528723",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "horizontal",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "dropdownbox",
                                                    "code": "1729411162908528721",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "指引超标",
                                                    "placeholder": "指引超标",
                                                    "name": "JB-指引超标",
                                                    "hiddenclearbtn": "0",
                                                    "searchable": "1",
                                                    "width": "30%",
                                                    "flex": "",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "link",
                                                    "code": "1729673766046404707",
                                                    "value": "查看",
                                                    "title": "指引超标-查看",
                                                    "underline": "0",
                                                    "textalign": "left",
                                                    "width": "5%",
                                                    "flex": "",
                                                    "name": "JB-指引超标-查看",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "dropdownbox",
                                                    "code": "1729411162908528722",
                                                    "titlewidth": "",
                                                    "titleflex": "",
                                                    "title": "预算超标",
                                                    "placeholder": "预算超标",
                                                    "name": "JB-预算超标",
                                                    "hiddenclearbtn": "0",
                                                    "searchable": "1",
                                                    "width": "30%",
                                                    "flex": "",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "link",
                                                    "code": "1729673766046404706",
                                                    "value": "查看",
                                                    "title": "预算超标-查看",
                                                    "underline": "0",
                                                    "textalign": "left",
                                                    "width": "5%",
                                                    "flex": "",
                                                    "name": "JB-预算超标-查看",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "text",
                                                    "code": "1729673766046404699",
                                                    "title": "",
                                                    "linenumber": "",
                                                    "name": "",
                                                    "value": "是否授权费用",
                                                    "width": "100",
                                                    "textalign": "right",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "checkbutton",
                                                    "code": "1729411162908528719",
                                                    "titlewidth": "",
                                                    "title": "",
                                                    "text": "",
                                                    "textalign": "left",
                                                    "checkvalue": "1",
                                                    "width": "20",
                                                    "uncheckvalue": "2",
                                                    "flex": "",
                                                    "name": "JB-是否授权费用",
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "layout",
                                            "code": "1729673766046404704",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "horizontal",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "textinput",
                                                    "code": "1721355938146947109",
                                                    "titlewidth": "110",
                                                    "titleflex": "",
                                                    "title": "申请人",
                                                    "placeholder": "申请人",
                                                    "name": "JB-申请人",
                                                    "verificationrule": "",
                                                    "width": "30%",
                                                    "marginright": "5%",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "textinput",
                                                    "code": "1721355938146947108",
                                                    "titlewidth": "110",
                                                    "titleflex": "",
                                                    "title": "申请人所属部门",
                                                    "placeholder": "申请人所属部门",
                                                    "name": "JB-申请人所属部门",
                                                    "verificationrule": "",
                                                    "width": "30%",
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "layout",
                                            "code": "1729673766046404703",
                                            "title": "布局",
                                            "display": "flex",
                                            "flexdirection": "vertical",
                                            "flex": "",
                                            "shape": "rect",
                                            "bordercolor": "lightgray",
                                            "bordersides": "",
                                            "overflowy": "",
                                            "content": [
                                                {
                                                    "type": "attachment",
                                                    "code": "1721355938146947107",
                                                    "titlewidth": "110",
                                                    "titleflex": "",
                                                    "title": "附件上传",
                                                    "placeholder": "",
                                                    "name": "JB-附件上传",
                                                    "maxnumber": "",
                                                    "accept": "",
                                                    "maxsize": "",
                                                    "width": "100%",
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        }
                                    ],
                                    "eventlist": []
                                },
                                {
                                    "type": "layout",
                                    "code": "1729673766046404702",
                                    "title": "布局",
                                    "display": "flex",
                                    "flexdirection": "horizontal",
                                    "flex": "",
                                    "shape": "roundrect",
                                    "bordercolor": "lightgray",
                                    "bordersides": "",
                                    "overflowy": "",
                                    "margintop": "",
                                    "marginbottom": "",
                                    "justifycontent": "spacebetween",
                                    "content": [
                                        {
                                            "type": "button",
                                            "code": "1729673766046404701",
                                            "title": "按钮-生成测算信息",
                                            "name": "JB-按钮-生成测算信息",
                                            "text": "生成测算信息",
                                            "displaytype": "default",
                                            "bordervisible": "0",
                                            "bgcolor": "orange",
                                            "width": "30%",
                                            "marginleft": "15",
                                            "color": "white",
                                            "fontweight": "bold",
                                            "margintop": "10",
                                            "marginbottom": "5",
                                            "eventlist": []
                                        }
                                    ],
                                    "eventlist": []
                                },
                                {
                                    "type": "layout",
                                    "code": "1721355938146947099",
                                    "title": "布局",
                                    "display": "flex",
                                    "flexdirection": "vertical",
                                    "flex": "",
                                    "shape": "rect",
                                    "bordercolor": "lightgray",
                                    "bordersides": "",
                                    "overflowy": "",
                                    "content": [
                                        {
                                            "type": "panel",
                                            "code": "1729673766046404698",
                                            "name": "JB-表格-测算信息",
                                            "title": "表格-测算信息",
                                            "foldstatus": "",
                                            "mode": "",
                                            "flexdirection": "vertical",
                                            "content": [
                                                {
                                                    "type": "link",
                                                    "code": "1729673766046404664",
                                                    "value": "查看：售达方所有活动的毛利及贡献率报表",
                                                    "title": "售达方毛利及贡献率报表",
                                                    "underline": "1",
                                                    "textalign": "right",
                                                    "fontweight": "normal",
                                                    "fontsize": "",
                                                    "name": "JB-售达方毛利及贡献率报表",
                                                    "eventlist": []
                                                },
                                                {
                                                    "type": "infotable",
                                                    "code": "1721355938146947096",
                                                    "title": "",
                                                    "checkable": "0",
                                                    "ispage": "1",
                                                    "isradio": "0",
                                                    "rowsize": "small",
                                                    "hasheaderbar": "0",
                                                    "datastructure": {
                                                        "id": "id"
                                                    },
                                                    "stripe": "0",
                                                    "dynamiccols": [],
                                                    "guidecols": {
                                                        "frozen": "1",
                                                        "merged": "0",
                                                        "cols": []
                                                    },
                                                    "groupcols": [
                                                        {
                                                            "title": "费用",
                                                            "cols": [
                                                                "1721355938146947081",
                                                                "1721355938146947082",
                                                                "1721355938146947083"
                                                            ]
                                                        },
                                                        {
                                                            "title": "收入",
                                                            "cols": [
                                                                "1721355938146947084",
                                                                "1721355938146947085",
                                                                "1721355938146947086"
                                                            ]
                                                        },
                                                        {
                                                            "title": "费用率",
                                                            "cols": [
                                                                "1721355938146947087",
                                                                "1721355938146947088",
                                                                "1721355938146947089"
                                                            ]
                                                        }
                                                    ],
                                                    "operations": [],
                                                    "rowoperations": [],
                                                    "defpagesize": "20",
                                                    "cols": [
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947078",
                                                            "title": "售达方名称",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-售达方名称",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947079",
                                                            "title": "售达方编号",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-售达方编号",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947080",
                                                            "title": "业务活动类型",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-业务活动类型",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947081",
                                                            "title": "本期预估费用（元）",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-本期预估费用（元）",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947082",
                                                            "title": "同期费用（元）",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-同期费用（元）",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947083",
                                                            "title": "环比费用（元）",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-环比费用（元）",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947084",
                                                            "title": "本期收入目标（元）",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-本期收入目标（元）",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947085",
                                                            "title": "同期收入目标（元）",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-同期收入目标（元）",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947086",
                                                            "title": "环比收入目标（元）",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-环比收入目标（元）",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947087",
                                                            "title": "本期费用率",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-本期费用率",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947088",
                                                            "title": "同期费用率",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-同期费用率",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1721355938146947089",
                                                            "title": "环比费用率",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "JB-CSB-环比费用率",
                                                            "eventlist": []
                                                        }
                                                    ],
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        }
                                    ],
                                    "eventlist": []
                                }
                            ]
                        },
                        {
                            "title": "投放范围",
                            "hidden": "0",
                            "flexdirection": "vertical",
                            "overflow": "",
                            "content": [
                                {
                                    "type": "layout",
                                    "code": "1729673766046404695",
                                    "title": "布局",
                                    "display": "flex",
                                    "flexdirection": "vertical",
                                    "flex": "1",
                                    "shape": "rect",
                                    "bordercolor": "lightgray",
                                    "bordersides": "",
                                    "overflowy": "",
                                    "content": [
                                        {
                                            "type": "text",
                                            "code": "1729673766046404661",
                                            "title": "提示",
                                            "linenumber": "",
                                            "name": "TF-提示",
                                            "value": "基本信息未选择投放范围！请回到基本信息页签进行维护！",
                                            "textalign": "center",
                                            "fontweight": "bold",
                                            "hidden": "",
                                            "color": "red",
                                            "flex": "",
                                            "height": "650",
                                            "width": "",
                                            "fontsize": "500XP",
                                            "eventlist": []
                                        },
                                        {
                                            "type": "panel",
                                            "code": "1729673766046404696",
                                            "name": "TF-组织投放",
                                            "title": "按营销组织投放：",
                                            "foldstatus": "",
                                            "mode": "",
                                            "flexdirection": "vertical",
                                            "hidden": "1",
                                            "height": "500",
                                            "flex": "",
                                            "content": [
                                                {
                                                    "type": "infotable",
                                                    "code": "1729673766046404692",
                                                    "title": "",
                                                    "checkable": "1",
                                                    "ispage": "1",
                                                    "isradio": "0",
                                                    "rowsize": "small",
                                                    "hasheaderbar": "1",
                                                    "datastructure": {
                                                        "id": ""
                                                    },
                                                    "stripe": "0",
                                                    "dynamiccols": [],
                                                    "guidecols": {
                                                        "frozen": "1",
                                                        "merged": "0",
                                                        "cols": []
                                                    },
                                                    "groupcols": [],
                                                    "operations": [
                                                        {
                                                            "text": "新增",
                                                            "icon": "add-circle",
                                                            "disabled": "",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404687"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "text": "删除",
                                                            "icon": "del",
                                                            "disabled": "le:{checkednumber} == 0",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404686"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "rowoperations": [],
                                                    "defpagesize": "20",
                                                    "name": "TF-参与组织",
                                                    "height": "",
                                                    "flex": "1",
                                                    "cols": [
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729704190114140246",
                                                            "title": "组织id",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与组织-组织id",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404691",
                                                            "title": "营销组织编码",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与组织-营销组织编码",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404690",
                                                            "title": "营销组织名称",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与组织-营销组织名称",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729704190114140243",
                                                            "title": "客户组id",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与组织-客户组id",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404689",
                                                            "title": "客户组编码",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与组织-客户组编码",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404688",
                                                            "title": "客户组名称",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与组织-客户组名称",
                                                            "eventlist": []
                                                        }
                                                    ],
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "panel",
                                            "code": "1729673766046404694",
                                            "name": "TF-不参与",
                                            "title": "不参与投放的售达方名单：",
                                            "foldstatus": "",
                                            "mode": "",
                                            "flexdirection": "vertical",
                                            "hidden": "1",
                                            "flex": "",
                                            "height": "500",
                                            "content": [
                                                {
                                                    "type": "infotable",
                                                    "code": "1729673766046404685",
                                                    "title": "",
                                                    "checkable": "1",
                                                    "ispage": "1",
                                                    "isradio": "0",
                                                    "rowsize": "small",
                                                    "hasheaderbar": "1",
                                                    "datastructure": {
                                                        "id": ""
                                                    },
                                                    "stripe": "0",
                                                    "dynamiccols": [],
                                                    "guidecols": {
                                                        "frozen": "1",
                                                        "merged": "0",
                                                        "cols": []
                                                    },
                                                    "groupcols": [],
                                                    "operations": [
                                                        {
                                                            "text": "新增",
                                                            "icon": "add-circle",
                                                            "disabled": "",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404677"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "text": "删除",
                                                            "icon": "del",
                                                            "disabled": "le:{checkednumber} == 0",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404676"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "text": "导入",
                                                            "icon": "import",
                                                            "disabled": "",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404675"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "rowoperations": [],
                                                    "defpagesize": "20",
                                                    "name": "TF-不参与售达方",
                                                    "flex": "1",
                                                    "cols": [
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404684",
                                                            "title": "渠道",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-渠道",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404681",
                                                            "title": "客户编码",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-客户编码",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404680",
                                                            "title": "客户名称",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-客户名称",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1730025035474800735",
                                                            "title": "售达方id",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-售达方id",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404683",
                                                            "title": "售达方编码",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-售达方编码",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404679",
                                                            "title": "售达方名称",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-售达方名称",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404682",
                                                            "title": "所属营销组织",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-所属营销组织",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404678",
                                                            "title": "价格组编码",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "不参与售达方-价格组编码",
                                                            "eventlist": []
                                                        }
                                                    ],
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        },
                                        {
                                            "type": "panel",
                                            "code": "1729673766046404693",
                                            "name": "TF-参与",
                                            "title": "按售达方投放：",
                                            "foldstatus": "",
                                            "mode": "",
                                            "flexdirection": "vertical",
                                            "hidden": "1",
                                            "flex": "",
                                            "height": "500",
                                            "content": [
                                                {
                                                    "type": "infotable",
                                                    "code": "1729673766046404674",
                                                    "title": "",
                                                    "checkable": "1",
                                                    "ispage": "1",
                                                    "isradio": "0",
                                                    "rowsize": "small",
                                                    "hasheaderbar": "1",
                                                    "datastructure": {
                                                        "id": ""
                                                    },
                                                    "stripe": "0",
                                                    "dynamiccols": [],
                                                    "guidecols": {
                                                        "frozen": "1",
                                                        "merged": "0",
                                                        "cols": []
                                                    },
                                                    "groupcols": [],
                                                    "operations": [
                                                        {
                                                            "text": "新增",
                                                            "icon": "add-circle",
                                                            "disabled": "",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404667"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "text": "删除",
                                                            "icon": "del",
                                                            "disabled": "le:{checkednumber} == 0",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404666"
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "text": "导入",
                                                            "icon": "import",
                                                            "disabled": "",
                                                            "functioncode": "",
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onclicked",
                                                                    "handler": "1729673766046404665"
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "rowoperations": [],
                                                    "defpagesize": "20",
                                                    "name": "TF-参与售达方",
                                                    "flex": "1",
                                                    "cols": [
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404671",
                                                            "title": "渠道",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与售达方-渠道",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404673",
                                                            "title": "客户编码",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与售达方-客户编码",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404672",
                                                            "title": "客户名称",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与售达方-客户名称",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1730052880691499105",
                                                            "title": "售达方id",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与售达方-售达方id",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404670",
                                                            "title": "售达方编码",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与售达方-售达方编码",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404669",
                                                            "title": "售达方名称",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与售达方-售达方名称",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "tablecell",
                                                            "code": "1729673766046404668",
                                                            "title": "所属营销组织",
                                                            "style": "text",
                                                            "watermarkstyle": "clear",
                                                            "watermarkcomposite": "blended",
                                                            "visiblesize": "",
                                                            "options": [],
                                                            "sort": "0",
                                                            "value": "",
                                                            "iswrap": "0",
                                                            "name": "参与售达方-所属营销组织",
                                                            "eventlist": []
                                                        }
                                                    ],
                                                    "eventlist": []
                                                }
                                            ],
                                            "eventlist": []
                                        }
                                    ],
                                    "eventlist": []
                                }
                            ]
                        },
                        {
                            "title": "固定类促销",
                            "hidden": "0",
                            "flexdirection": "vertical",
                            "overflow": "",
                            "content": [
                                {
                                    "type": "layout",
                                    "code": "1721373985633079377",
                                    "title": "布局",
                                    "display": "flex",
                                    "flexdirection": "vertical",
                                    "flex": "1",
                                    "shape": "rect",
                                    "bordercolor": "lightgray",
                                    "bordersides": "",
                                    "overflowy": "",
                                    "content": [
                                        {
                                            "type": "tabboard",
                                            "code": "1730155088279900256",
                                            "name": "固定类促销-tabboard",
                                            "title": "通用",
                                            "hidden": "0",
                                            "flexdirection": "vertical",
                                            "parent": {
                                                "flexdirection": "vertical"
                                            },
                                            "overflow": "",
                                            "cards": [
                                                {
                                                    "title": "通用",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": [
                                                        {
                                                            "type": "editortable",
                                                            "code": "1730155088279900255",
                                                            "title": "",
                                                            "roweditable": "0",
                                                            "readonly": "",
                                                            "required": "",
                                                            "dynamiccols": [],
                                                            "guidecols": {
                                                                "frozen": "1",
                                                                "merged": "0",
                                                                "cols": []
                                                            },
                                                            "stripe": "0",
                                                            "groupcols": [],
                                                            "total": [],
                                                            "hasheaderbar": "1",
                                                            "checkable": "1",
                                                            "appendrowbyobjs": {
                                                                "objctrl": "",
                                                                "objunique": ""
                                                            },
                                                            "operations": [
                                                                {
                                                                    "text": "新增行",
                                                                    "icon": "add-circle",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1730155088279900254"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "复制行",
                                                                    "icon": "copy",
                                                                    "disabled": "le:{checkednumber} != 1",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": ""
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "删除行",
                                                                    "icon": "del",
                                                                    "disabled": "le:{checkednumber} == 0",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1730455805045641290"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "导入",
                                                                    "icon": "import",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": ""
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "name": "GD-TY-表格",
                                                            "cols": [
                                                                {
                                                                    "type": "picktree",
                                                                    "code": "1730155088279900247",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "营销组织",
                                                                    "placeholder": "",
                                                                    "name": "GD-TY-表格营销组织",
                                                                    "displaystyle": "input",
                                                                    "searchable": "1",
                                                                    "multiselectable": "0",
                                                                    "hiddenclearbtn": "0",
                                                                    "expandmodel": "allexpand",
                                                                    "intermediateselectmode": "disable",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onload",
                                                                            "handler": "1730455805045641297"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730155088279900242",
                                                                    "title": "客户",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "请选择",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格客户",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731474374386651230"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730455805045641301",
                                                                    "title": "客户id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格客户id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730155088279900241",
                                                                    "title": "售达方",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格售达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730455805045641300",
                                                                    "title": "售达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格售达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730155088279900240",
                                                                    "title": "送达方",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格送达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730455805045641299",
                                                                    "title": "送达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格送达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932962",
                                                                    "title": "兑付方式",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格兑付方式",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932963",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "业务活动类型",
                                                                    "placeholder": "",
                                                                    "name": "GD-TY-表格业务活动类型",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932961",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "产品范围",
                                                                    "placeholder": "",
                                                                    "name": "GD-TY-表格产品范围",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932960",
                                                                    "title": "活动产品",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格活动产品",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730455805045641298",
                                                                    "title": "活动产品fullvalue",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格活动产品fullvalue",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932959",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "内部订单",
                                                                    "placeholder": "请选择",
                                                                    "name": "GD-TY-表格内部订单",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932958",
                                                                    "title": "预估费用（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格预估费用（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1730400843984932957",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "公司承担费用（元）",
                                                                    "placeholder": "",
                                                                    "name": "GD-TY-表格公司承担费用（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1730400843984932956",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "经销商承担费用（元）",
                                                                    "placeholder": "",
                                                                    "name": "GD-TY-表格经销商承担费用（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1730400843984932954",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动期间收入  目标（元）",
                                                                    "placeholder": "",
                                                                    "name": "GD-TY-表格活动期间收入  目标（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinputarea",
                                                                    "code": "1730400843984932953",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动形式说明",
                                                                    "placeholder": "",
                                                                    "name": "GD-TY-表格活动形式说明",
                                                                    "minvisiblelinenumber": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932952",
                                                                    "title": "同期收入达成  （元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格同期收入达成  （元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932951",
                                                                    "title": "收入同比增长（%）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格收入同比增长（%）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932950",
                                                                    "title": "环比收入达成  （元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格收入同比增长（%）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932949",
                                                                    "title": "环比同比增长（%）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格环比同比增长（%）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932948",
                                                                    "title": "公司费用率（%）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "GD-TY-表格公司费用率（%）",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "height": "550",
                                                            "eventlist": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "陈列",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": []
                                                },
                                                {
                                                    "title": "促销员",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": []
                                                },
                                                {
                                                    "title": "物料",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": []
                                                }
                                            ],
                                            "flex": "1",
                                            "eventlist": []
                                        }
                                    ],
                                    "eventlist": []
                                }
                            ]
                        },
                        {
                            "title": "变动类促销",
                            "hidden": "0",
                            "flexdirection": "vertical",
                            "overflow": "",
                            "content": [
                                {
                                    "type": "layout",
                                    "code": "1730400843984932947",
                                    "title": "布局",
                                    "display": "flex",
                                    "flexdirection": "vertical",
                                    "flex": "1",
                                    "shape": "rect",
                                    "bordercolor": "lightgray",
                                    "bordersides": "",
                                    "overflowy": "",
                                    "content": [
                                        {
                                            "type": "tabboard",
                                            "code": "1730400843984932946",
                                            "name": "变动类促销-tabboard",
                                            "title": "搭赠/买赠",
                                            "hidden": "0",
                                            "flexdirection": "vertical",
                                            "parent": {
                                                "flexdirection": "vertical"
                                            },
                                            "overflow": "",
                                            "flex": "1",
                                            "cards": [
                                                {
                                                    "title": "搭赠/买赠",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": [
                                                        {
                                                            "type": "layout",
                                                            "code": "1730455805045641302",
                                                            "title": "布局",
                                                            "display": "flex",
                                                            "flexdirection": "horizontal",
                                                            "flex": "",
                                                            "shape": "rect",
                                                            "bordercolor": "lightgray",
                                                            "bordersides": "",
                                                            "overflowy": "",
                                                            "content": [
                                                                {
                                                                    "type": "button",
                                                                    "code": "1731867426980761699",
                                                                    "title": "save",
                                                                    "name": "",
                                                                    "text": "save",
                                                                    "displaytype": "",
                                                                    "bordervisible": "1",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731867426980761698"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "switch",
                                                                    "code": "1730400843984932888",
                                                                    "titlewidth": "",
                                                                    "titleflex": "60%",
                                                                    "title": "是否与合同返利互斥：",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-是否与合同返利互斥",
                                                                    "displaystyle": "",
                                                                    "value": "1",
                                                                    "ontext": "",
                                                                    "offtext": "",
                                                                    "flex": "",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "justifycontent": "flexend",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "editortable",
                                                            "code": "1730400843984932944",
                                                            "title": "",
                                                            "roweditable": "0",
                                                            "readonly": "",
                                                            "required": "",
                                                            "dynamiccols": [],
                                                            "guidecols": {
                                                                "frozen": "1",
                                                                "merged": "1",
                                                                "cols": [
                                                                    "1730400843984932913"
                                                                ]
                                                            },
                                                            "stripe": "0",
                                                            "groupcols": [],
                                                            "total": [],
                                                            "hasheaderbar": "1",
                                                            "checkable": "1",
                                                            "appendrowbyobjs": {
                                                                "objctrl": "",
                                                                "objunique": ""
                                                            },
                                                            "operations": [
                                                                {
                                                                    "text": "新增行",
                                                                    "icon": "add-circle",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731568728241475664"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "复制行",
                                                                    "icon": "copy",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731568728241475663"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "删除行",
                                                                    "icon": "del",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731572161694535779"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "导入",
                                                                    "icon": "import",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1730400843984932886"
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "name": "BD-DZ-表格",
                                                            "flex": "",
                                                            "height": "550",
                                                            "cols": [
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731867426980761696",
                                                                    "title": "id",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择客户",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "number",
                                                                    "code": "1730400843984932913",
                                                                    "titlewidth": "110",
                                                                    "title": "序号",
                                                                    "decimaldigits": "0",
                                                                    "addcount": "1",
                                                                    "thousandsseparators": "0",
                                                                    "minus": "0",
                                                                    "name": "BD-DZ-B序号",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onblur",
                                                                            "handler": "1731841014668333137"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "picktree",
                                                                    "code": "1730400843984932912",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "营销组织",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B营销组织",
                                                                    "displaystyle": "input",
                                                                    "searchable": "1",
                                                                    "multiselectable": "0",
                                                                    "hiddenclearbtn": "0",
                                                                    "expandmodel": "allexpand",
                                                                    "intermediateselectmode": "disable",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932911",
                                                                    "title": "客户",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择客户",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B客户",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731568728241475683",
                                                                    "title": "客户id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B客户id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932910",
                                                                    "title": "售达方",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择售达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B售达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731568728241475682",
                                                                    "title": "售达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B售达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932909",
                                                                    "title": "送达方",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择送达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B送达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731568728241475681",
                                                                    "title": "送达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B送达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932908",
                                                                    "title": "剔除送达方",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择剔除售达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B剔除送达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731568728241475680",
                                                                    "title": "剔除送达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B剔除送达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731585629294301242",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "送达方数量  (家)",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B送达方数量  (家)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731568728241475675",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动执行周期（变价周期）",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B活动执行周期（变价周期）",
                                                                    "unit": "day",
                                                                    "value": "",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731568728241475674",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "终端执行周期（市场检核）",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B终端执行周期（市场检核）",
                                                                    "unit": "day",
                                                                    "value": "",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731568728241475672",
                                                                    "titlewidth": "160",
                                                                    "titleflex": "",
                                                                    "title": "业务活动类型-C端活动说明",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B业务活动类型-C端活动说明",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932906",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "兑付方式",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B兑付方式",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932905",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "产品范围",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B产品范围",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932904",
                                                                    "title": "活动产品",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B活动产品",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932903",
                                                                    "title": "赠品名称",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B赠品名称",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1730400843984932936",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动期间",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B活动期间",
                                                                    "unit": "day",
                                                                    "value": "day(-1,1)",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932902",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "搭赠规则",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B搭赠规则",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730455805045641303",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "搭赠方式",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B搭赠方式",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "随单计算",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "活动期间累计",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932901",
                                                                    "titlewidth": "150",
                                                                    "titleflex": "",
                                                                    "title": "是否按达成目标终止搭赠",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B是否按达成目标终止搭赠",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "否",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "是",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "required": "",
                                                                    "value": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "numberinputrange",
                                                                    "code": "1731568728241475670",
                                                                    "titlewidth": "110",
                                                                    "title": "指引赠送条件≥X件起送",
                                                                    "thousandsseparators": "1",
                                                                    "decimaldigits": "2",
                                                                    "minus": "1",
                                                                    "name": "BD-DZ-B指引赠送条件≥X件起送",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1730400843984932899",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "指引主品数量(件）",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B指引主品数量(件)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731568728241475671",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "指引赠品数量(件)",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B指引赠品数量(件)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "numberinputrange",
                                                                    "code": "1730400843984932900",
                                                                    "titlewidth": "110",
                                                                    "title": "赠送条件≥X件起送",
                                                                    "thousandsseparators": "1",
                                                                    "decimaldigits": "2",
                                                                    "minus": "1",
                                                                    "name": "BD-DZ-B赠送条件≥X件起送",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731568728241475669",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "主品数量(件)",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B主品数量(件)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731568728241475668",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "产品单位",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B产品单位",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932898",
                                                                    "titlewidth": "130",
                                                                    "titleflex": "",
                                                                    "title": "指引赠送条件≥X件起送",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B产品单位",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "否",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "是",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1730400843984932929",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "赠品数量",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B赠品数量",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932928",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "赠品单位",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B赠品单位",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1730400843984932927",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否与合同返利互斥",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-DZ-B是否与合同返利互斥",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "否",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "是",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932926",
                                                                    "title": "公司折扣率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B公司折扣率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731568728241475666",
                                                                    "title": "卖场原前台毛利",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B卖场原前台毛利",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731568728241475667",
                                                                    "title": "卖场活动前台毛利",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-卖场活动前台毛利",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731568728241475665",
                                                                    "title": "本期折前收入（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-本期折前收入（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1730400843984932925",
                                                                    "titlewidth": "150",
                                                                    "titleflex": "",
                                                                    "title": "本期收入目标  折后（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B本期收入目标  折后（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onvaluechange",
                                                                            "handler": "1730123032493690971"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932897",
                                                                    "title": "同期收入达成  折后（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B同期收入达成  折后（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932896",
                                                                    "title": "收入同比增长",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B收入同比增长",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1730400843984932922",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "本期销量目标(件)",
                                                                    "placeholder": "",
                                                                    "name": "BD-DZ-B本期销量目标(件)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932895",
                                                                    "title": "同期销量达成",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B同期销量达成",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932894",
                                                                    "title": "销量同比增长",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B销量同比增长",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932893",
                                                                    "title": "预计赠品总数",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B预计赠品总数",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932892",
                                                                    "title": "本期折扣费用金额（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B本期折扣费用金额（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932891",
                                                                    "title": "公司费用率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B公司费用率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1730400843984932890",
                                                                    "title": "毛利率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-DZ-B毛利率",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onload",
                                                                    "handler": "1731585629294301229"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "特价",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": [
                                                        {
                                                            "type": "layout",
                                                            "code": "1731573689746591796",
                                                            "title": "布局",
                                                            "display": "flex",
                                                            "flexdirection": "vertical",
                                                            "flex": "",
                                                            "shape": "rect",
                                                            "bordercolor": "lightgray",
                                                            "bordersides": "",
                                                            "overflowy": "",
                                                            "content": [
                                                                {
                                                                    "type": "switch",
                                                                    "code": "1730400843984932887",
                                                                    "titlewidth": "180",
                                                                    "titleflex": "",
                                                                    "title": "是否与合同返利互斥：",
                                                                    "placeholder": "",
                                                                    "name": "",
                                                                    "displaystyle": "",
                                                                    "value": "",
                                                                    "ontext": "",
                                                                    "offtext": "",
                                                                    "width": "50%",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "justifycontent": "flexend",
                                                            "alignitems": "flexend",
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "editortable",
                                                            "code": "1731573689746591843",
                                                            "title": "",
                                                            "roweditable": "0",
                                                            "readonly": "",
                                                            "required": "",
                                                            "dynamiccols": [],
                                                            "guidecols": {
                                                                "frozen": "1",
                                                                "merged": "1",
                                                                "cols": [
                                                                    "1730400843984932913"
                                                                ]
                                                            },
                                                            "stripe": "0",
                                                            "groupcols": [],
                                                            "total": [],
                                                            "hasheaderbar": "1",
                                                            "checkable": "1",
                                                            "appendrowbyobjs": {
                                                                "objctrl": "",
                                                                "objunique": ""
                                                            },
                                                            "operations": [
                                                                {
                                                                    "text": "新增行",
                                                                    "icon": "add-circle",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301241"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "复制行",
                                                                    "icon": "copy",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301240"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "删除行",
                                                                    "icon": "del",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301239"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "导入",
                                                                    "icon": "import",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301238"
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "name": "BD-TJ-表格",
                                                            "flex": "",
                                                            "height": "550",
                                                            "cols": [
                                                                {
                                                                    "type": "number",
                                                                    "code": "1731573689746591842",
                                                                    "titlewidth": "110",
                                                                    "title": "序号",
                                                                    "decimaldigits": "0",
                                                                    "addcount": "1",
                                                                    "thousandsseparators": "0",
                                                                    "minus": "0",
                                                                    "name": "BD-TJ-B序号",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "picktree",
                                                                    "code": "1731573689746591841",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "营销组织",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B营销组织",
                                                                    "displaystyle": "input",
                                                                    "searchable": "1",
                                                                    "multiselectable": "0",
                                                                    "hiddenclearbtn": "0",
                                                                    "expandmodel": "allexpand",
                                                                    "intermediateselectmode": "disable",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591840",
                                                                    "title": "客户",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择客户",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B客户",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591839",
                                                                    "title": "客户id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B客户id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591838",
                                                                    "title": "售达方",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择售达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B售达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591837",
                                                                    "title": "售达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B售达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591836",
                                                                    "title": "送达方",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择送达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B送达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591835",
                                                                    "title": "送达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B送达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591834",
                                                                    "title": "剔除送达方",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择剔除售达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B剔除送达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591833",
                                                                    "title": "剔除送达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B剔除送达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591832",
                                                                    "title": "送达方数量  (家)",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B送达方数量  (家)",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731573689746591831",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动执行周期（变价周期）",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B活动执行周期（变价周期）",
                                                                    "unit": "day",
                                                                    "value": "",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731573689746591830",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "终端执行周期（市场检核）",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B终端执行周期（市场检核）",
                                                                    "unit": "day",
                                                                    "value": "",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591829",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "业务活动类型-C端活动说明",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B业务活动类型-C端活动说明",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591828",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "兑付方式",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TJ-B兑付方式",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591827",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "产品范围",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TJ-B产品范围",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591826",
                                                                    "title": "活动产品",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B活动产品",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591795",
                                                                    "title": "活动产品id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B活动产品id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591825",
                                                                    "title": "赠品名称",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B赠品名称",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591794",
                                                                    "title": "赠品id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B赠品id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591793",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "执行方式",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TJ-B执行方式",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "numberinputrange",
                                                                    "code": "1731573689746591820",
                                                                    "titlewidth": "110",
                                                                    "title": "特价赠送条件≥X件起送",
                                                                    "thousandsseparators": "1",
                                                                    "decimaldigits": "2",
                                                                    "minus": "1",
                                                                    "name": "BD-TJ-B指引赠送条件≥X件起送",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591789",
                                                                    "title": "原供价",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B原供价",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591788",
                                                                    "title": "指引供价",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B指引供价",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591790",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动供价（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B活动供价（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591787",
                                                                    "title": "原售价",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B原售价",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591786",
                                                                    "title": "指引售价",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B指引售价",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591785",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动售价（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B活动售价（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591784",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "销售单位",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TJ-B销售单位",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591821",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否按达成目标终止搭赠",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TJ-B是否按达成目标终止搭赠",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "否",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "是",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591811",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否与合同返利互斥",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TJ-B是否与合同返利互斥",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "否",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "是",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591810",
                                                                    "title": "公司折扣率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B公司折扣率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591809",
                                                                    "title": "卖场原前台毛利",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B卖场原前台毛利",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591808",
                                                                    "title": "卖场活动前台毛利",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-卖场活动前台毛利",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591807",
                                                                    "title": "本期折前收入（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-本期折前收入（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591806",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "本期收入目标  折后（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B本期收入目标  折后（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onvaluechange",
                                                                            "handler": "1730123032493690971"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591805",
                                                                    "title": "同期收入达成  折后（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B同期收入达成  折后（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591804",
                                                                    "title": "收入同比增长率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B收入同比增长率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591803",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "本期销量目标(件)",
                                                                    "placeholder": "",
                                                                    "name": "BD-TJ-B本期销量目标(件)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591802",
                                                                    "title": "同期销量达成(件)",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B同期销量达成(件)",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591801",
                                                                    "title": "销量同比增长率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B销量同比增长率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591799",
                                                                    "title": "本期折扣费用金额（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B本期折扣费用金额（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591797",
                                                                    "title": "毛利率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TJ-B毛利率",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onload",
                                                                    "handler": "1731585629294301223"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "满减",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": [
                                                        {
                                                            "type": "editortable",
                                                            "code": "1731573689746591783",
                                                            "title": "",
                                                            "roweditable": "0",
                                                            "readonly": "",
                                                            "required": "",
                                                            "dynamiccols": [],
                                                            "guidecols": {
                                                                "frozen": "1",
                                                                "merged": "1",
                                                                "cols": [
                                                                    "1730400843984932913"
                                                                ]
                                                            },
                                                            "stripe": "0",
                                                            "groupcols": [],
                                                            "total": [],
                                                            "hasheaderbar": "1",
                                                            "checkable": "1",
                                                            "appendrowbyobjs": {
                                                                "objctrl": "",
                                                                "objunique": ""
                                                            },
                                                            "operations": [
                                                                {
                                                                    "text": "新增行",
                                                                    "icon": "add-circle",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301237"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "复制行",
                                                                    "icon": "copy",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301236"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "删除行",
                                                                    "icon": "del",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301235"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "导入",
                                                                    "icon": "import",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301234"
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "name": "BD-MJ-表格",
                                                            "flex": "",
                                                            "height": "550",
                                                            "cols": [
                                                                {
                                                                    "type": "picktree",
                                                                    "code": "1731573689746591781",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "营销组织",
                                                                    "placeholder": "",
                                                                    "name": "BD-MJ-B营销组织",
                                                                    "displaystyle": "input",
                                                                    "searchable": "1",
                                                                    "multiselectable": "0",
                                                                    "hiddenclearbtn": "0",
                                                                    "expandmodel": "allexpand",
                                                                    "intermediateselectmode": "disable",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591780",
                                                                    "title": "客户",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择客户",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B客户",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591779",
                                                                    "title": "客户id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B客户id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591778",
                                                                    "title": "售达方",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择售达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B售达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591777",
                                                                    "title": "售达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B售达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591776",
                                                                    "title": "送达方",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择送达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B送达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591775",
                                                                    "title": "送达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B送达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591769",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "业务活动类型-C端活动说明",
                                                                    "placeholder": "",
                                                                    "name": "BD-MJ-B业务活动类型-C端活动说明",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591768",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "兑付方式",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-MJ-B兑付方式",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591767",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "产品范围",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-MJ-B产品范围",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591766",
                                                                    "title": "活动产品",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B活动产品",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591765",
                                                                    "title": "活动产品id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B活动产品id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591760",
                                                                    "title": "指引 买满（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B指引 买满（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591759",
                                                                    "title": "指引 减（元",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B指引 减（元",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591758",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "买满（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-MJ-B买满（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731581000590430305",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "减（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-MJ-B减（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591754",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "单位",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-MJ-B单位",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731573689746591752",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否与合同返利互斥",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-MJ-B是否与合同返利互斥",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "否",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "是",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591757",
                                                                    "title": "本期折扣费用金额（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B本期折扣费用金额（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591756",
                                                                    "title": "公司折扣率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B公司折扣率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731581000590430304",
                                                                    "title": "公司费用率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B公司费用率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591750",
                                                                    "title": "卖场原前台毛利",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B卖场原前台毛利",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591749",
                                                                    "title": "卖场活动前台毛利",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-卖场活动前台毛利",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591747",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "本期收入目标  折后（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-MJ-B本期收入目标  折后（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onvaluechange",
                                                                            "handler": "1730123032493690971"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591746",
                                                                    "title": "同期收入达成  折后（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B同期收入达成  折后（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573689746591745",
                                                                    "title": "收入同比增长率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B收入同比增长率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731573689746591744",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "本期销量目标(件)",
                                                                    "placeholder": "",
                                                                    "name": "BD-MJ-B本期销量目标(件)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573635992391758",
                                                                    "title": "同期销量达成(件)",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B同期销量达成(件)",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573635992391757",
                                                                    "title": "销量同比增长率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B销量同比增长率",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731581000590430303",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "有效期",
                                                                    "placeholder": "",
                                                                    "name": "BD-MJ-有效期",
                                                                    "unit": "minute",
                                                                    "value": "day(-1,1)",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731573635992391755",
                                                                    "title": "毛利率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-MJ-B毛利率",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onload",
                                                                    "handler": "1731585629294301215"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "返利",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": []
                                                },
                                                {
                                                    "title": "通用",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": [
                                                        {
                                                            "type": "editortable",
                                                            "code": "1731585595291078755",
                                                            "title": "",
                                                            "roweditable": "0",
                                                            "readonly": "",
                                                            "required": "",
                                                            "dynamiccols": [],
                                                            "guidecols": {
                                                                "frozen": "1",
                                                                "merged": "1",
                                                                "cols": [
                                                                    "1730400843984932913"
                                                                ]
                                                            },
                                                            "stripe": "0",
                                                            "groupcols": [],
                                                            "total": [],
                                                            "hasheaderbar": "1",
                                                            "checkable": "1",
                                                            "appendrowbyobjs": {
                                                                "objctrl": "",
                                                                "objunique": ""
                                                            },
                                                            "operations": [
                                                                {
                                                                    "text": "新增行",
                                                                    "icon": "add-circle",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301233"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "复制行",
                                                                    "icon": "copy",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301232"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "删除行",
                                                                    "icon": "del",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301231"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "text": "导入",
                                                                    "icon": "import",
                                                                    "disabled": "",
                                                                    "functioncode": "",
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onclicked",
                                                                            "handler": "1731585629294301230"
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                            "name": "BD-TY-表格",
                                                            "flex": "",
                                                            "height": "550",
                                                            "cols": [
                                                                {
                                                                    "type": "picktree",
                                                                    "code": "1731585595291078754",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "营销组织",
                                                                    "placeholder": "",
                                                                    "name": "BD-TY-B营销组织",
                                                                    "displaystyle": "input",
                                                                    "searchable": "1",
                                                                    "multiselectable": "0",
                                                                    "hiddenclearbtn": "0",
                                                                    "expandmodel": "allexpand",
                                                                    "intermediateselectmode": "disable",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078753",
                                                                    "title": "客户",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择客户",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B客户",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078752",
                                                                    "title": "客户id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B客户id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078751",
                                                                    "title": "售达方",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择售达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B售达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078750",
                                                                    "title": "售达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B售达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078749",
                                                                    "title": "送达方",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择送达方",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B送达方",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078748",
                                                                    "title": "送达方id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B送达方id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585595291078746",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "兑付方式",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TY-B兑付方式",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585595291078745",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "产品范围",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TY-B产品范围",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078744",
                                                                    "title": "活动产品",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "点击选择活动产品",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B活动产品",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078743",
                                                                    "title": "活动产品id",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B活动产品id",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301283",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "业务活动类型",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TY-B业务活动类型",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301282",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "计算口径",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TY-B计算口径",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078742",
                                                                    "title": "支持力度(%)",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B支持力度(%)",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078741",
                                                                    "title": "预估费用（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B预估费用（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731585595291078740",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "公司承担费用（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-TY-B公司承担费用（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731585629294301281",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "经销商承担费用（元）",
                                                                    "placeholder": "",
                                                                    "name": "BD-TY-B经销商承担费用（元）",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731585629294301280",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动期间收入  目标(元)",
                                                                    "placeholder": "",
                                                                    "name": "BD-TY-B活动期间收入  目标(元)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731585595291078739",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动期间收入目标(元)",
                                                                    "placeholder": "",
                                                                    "name": "BD-TY-B活动期间收入目标(元)",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731585595291078728",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活动形式说明",
                                                                    "placeholder": "",
                                                                    "name": "BD-TY-B活动形式说明",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585595291078737",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否与合同返利互斥",
                                                                    "placeholder": "请选择",
                                                                    "name": "BD-TY-B是否与合同返利互斥",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "options": [
                                                                        {
                                                                            "key": "0",
                                                                            "text": "否",
                                                                            "isselected": "0"
                                                                        },
                                                                        {
                                                                            "key": "1",
                                                                            "text": "是",
                                                                            "isselected": "0"
                                                                        }
                                                                    ],
                                                                    "eventlist": [
                                                                        {
                                                                            "trigger": "onload",
                                                                            "handler": "1731585629294301211"
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078730",
                                                                    "title": "同期收入达成  折后（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B同期收入达成  折后（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078729",
                                                                    "title": "收入同比增长（%）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B收入同比增长（%）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301279",
                                                                    "title": "环比收入达成（元）",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B环比收入达成（元）",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301278",
                                                                    "title": "环比同比增长(%)",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B环比同比增长(%)",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078726",
                                                                    "title": "公司费用率(%)",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B公司费用率(%)",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585595291078724",
                                                                    "title": "毛利率",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "BD-TY-B毛利率",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "eventlist": [
                                                                {
                                                                    "trigger": "onload",
                                                                    "handler": "1731585629294301210"
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "title": "叠加预警",
                                                    "hidden": "0",
                                                    "flexdirection": "vertical",
                                                    "overflow": "",
                                                    "content": [
                                                        {
                                                            "type": "layout",
                                                            "code": "1731585629294301255",
                                                            "title": "布局",
                                                            "display": "flex",
                                                            "flexdirection": "horizontal",
                                                            "flex": "",
                                                            "shape": "rect",
                                                            "bordercolor": "lightgray",
                                                            "bordersides": "",
                                                            "overflowy": "",
                                                            "flexwrap": "nowrap",
                                                            "alignitems": "",
                                                            "justifycontent": "",
                                                            "content": [
                                                                {
                                                                    "type": "button",
                                                                    "code": "1731585629294301254",
                                                                    "title": "导出",
                                                                    "name": "",
                                                                    "text": "导出",
                                                                    "displaytype": "",
                                                                    "bordervisible": "1",
                                                                    "customicon": "export",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301253",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否允许叠加",
                                                                    "placeholder": "请选择",
                                                                    "name": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "required": "0",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301252",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "产品大类",
                                                                    "placeholder": "请选择",
                                                                    "name": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "required": "0",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "textinput",
                                                                    "code": "1731585629294301251",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "活产品名称",
                                                                    "placeholder": "",
                                                                    "name": "",
                                                                    "verificationrule": "",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301250",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "业务活动类型",
                                                                    "placeholder": "请选择",
                                                                    "name": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "required": "0",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "button",
                                                                    "code": "1731585629294301249",
                                                                    "title": "搜索",
                                                                    "name": "",
                                                                    "text": "按钮",
                                                                    "displaytype": "",
                                                                    "bordervisible": "1",
                                                                    "color": "white",
                                                                    "bgcolor": "orange",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "eventlist": []
                                                        },
                                                        {
                                                            "type": "editortable",
                                                            "code": "1731585629294301277",
                                                            "title": "",
                                                            "roweditable": "0",
                                                            "readonly": "",
                                                            "required": "",
                                                            "dynamiccols": [],
                                                            "guidecols": {
                                                                "frozen": "1",
                                                                "merged": "0",
                                                                "cols": []
                                                            },
                                                            "stripe": "0",
                                                            "groupcols": [],
                                                            "total": [],
                                                            "hasheaderbar": "0",
                                                            "checkable": "1",
                                                            "appendrowbyobjs": {
                                                                "objctrl": "",
                                                                "objunique": ""
                                                            },
                                                            "operations": [],
                                                            "cols": [
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301276",
                                                                    "title": "产品范围",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ产品范围",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301275",
                                                                    "title": "产品活动名称",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ产品活动名称",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301274",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否允许叠加",
                                                                    "placeholder": "请选择",
                                                                    "name": "B-DJ是否允许叠加",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "required": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301273",
                                                                    "title": "业务活动类型",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ业务活动类型",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731585629294301272",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "搭赠-活动区间",
                                                                    "placeholder": "",
                                                                    "name": "B-DJ搭赠-活动区间",
                                                                    "unit": "minute",
                                                                    "value": "day(-1,1)",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301271",
                                                                    "title": "查看明细",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ查看明细",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301270",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否允许叠加",
                                                                    "placeholder": "请选择",
                                                                    "name": "B-DJ是否允许叠加",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "required": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301269",
                                                                    "title": "业务活动类型",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ业务活动类型",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731585629294301268",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "特价-活动区间",
                                                                    "placeholder": "",
                                                                    "name": "B-DJ特价-活动区间",
                                                                    "unit": "minute",
                                                                    "value": "day(-1,1)",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301267",
                                                                    "title": "查看明细",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ查看明细",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "dropdownbox",
                                                                    "code": "1731585629294301266",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "是否允许叠加",
                                                                    "placeholder": "请选择",
                                                                    "name": "B-DJ是否允许叠加",
                                                                    "hiddenclearbtn": "0",
                                                                    "searchable": "1",
                                                                    "required": "1",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301265",
                                                                    "title": "业务活动类型",
                                                                    "style": "text",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ业务活动类型",
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "daterange",
                                                                    "code": "1731585629294301264",
                                                                    "titlewidth": "110",
                                                                    "titleflex": "",
                                                                    "title": "特价-活动区间",
                                                                    "placeholder": "",
                                                                    "name": "B-DJ特价-活动区间",
                                                                    "unit": "minute",
                                                                    "value": "day(-1,1)",
                                                                    "maxdiff": "",
                                                                    "mindiff": "",
                                                                    "hiddenclearbtn": "0",
                                                                    "defranges": [],
                                                                    "eventlist": []
                                                                },
                                                                {
                                                                    "type": "tablecell",
                                                                    "code": "1731585629294301263",
                                                                    "title": "查看明细",
                                                                    "style": "link",
                                                                    "watermarkstyle": "clear",
                                                                    "watermarkcomposite": "blended",
                                                                    "visiblesize": "",
                                                                    "options": [],
                                                                    "sort": "0",
                                                                    "value": "",
                                                                    "iswrap": "0",
                                                                    "name": "B-DJ查看明细",
                                                                    "eventlist": []
                                                                }
                                                            ],
                                                            "name": "B-DJ-editortable",
                                                            "eventlist": []
                                                        }
                                                    ]
                                                }
                                            ],
                                            "eventlist": []
                                        }
                                    ],
                                    "eventlist": []
                                }
                            ]
                        },
                        {
                            "title": "费用分摊",
                            "hidden": "0",
                            "flexdirection": "vertical",
                            "overflow": "",
                            "content": []
                        },
                        {
                            "title": "重合活动预警",
                            "hidden": "0",
                            "flexdirection": "vertical",
                            "overflow": "",
                            "content": []
                        }
                    ],
                    "eventlist": []
                },
                {
                    "type": "layout",
                    "code": "1721373985633079358",
                    "title": "布局",
                    "display": "flex",
                    "flexdirection": "horizontal",
                    "flex": "",
                    "shape": "rect",
                    "bordercolor": "lightgray",
                    "bordersides": "",
                    "overflowy": "",
                    "flexwrap": "wrap",
                    "justifycontent": "flexend",
                    "content": [
                        {
                            "type": "button",
                            "code": "1721373985633079357",
                            "title": "取消",
                            "name": "",
                            "text": "取消",
                            "displaytype": "",
                            "bordervisible": "1",
                            "width": "10%",
                            "bgcolor": "white",
                            "eventlist": []
                        },
                        {
                            "type": "button",
                            "code": "1721373985633079356",
                            "title": "保存草稿",
                            "name": "",
                            "text": "保存草稿",
                            "displaytype": "",
                            "bordervisible": "1",
                            "width": "10%",
                            "marginleft": "10",
                            "color": "white",
                            "bgcolor": "orange",
                            "eventlist": []
                        },
                        {
                            "type": "button",
                            "code": "1721373985633079355",
                            "title": "保存并提交",
                            "name": "",
                            "text": "保存并提交",
                            "displaytype": "",
                            "bordervisible": "1",
                            "width": "10%",
                            "marginright": "10",
                            "marginleft": "10",
                            "bgcolor": "orange",
                            "color": "white",
                            "eventlist": []
                        }
                    ],
                    "eventlist": []
                }
            ],
            "eventlist": []
        },
        "subviews": [
            {
                "type": "popview",
                "title": "基础信息-指引弹窗",
                "flexdirection": "vertical",
                "needconfirm": "0",
                "confirmtitle": "确定",
                "resetwhenopen": "1",
                "content": [
                    {
                        "type": "filter",
                        "code": "1729757554390732876",
                        "title": "搜索栏",
                        "display": "flex",
                        "flexdirection": "",
                        "flex": "0",
                        "shape": "rect",
                        "overflowy": "",
                        "content": [],
                        "searchcondition": {
                            "advanced": [],
                            "basic": [
                                {
                                    "type": "dropdownbox",
                                    "code": "1729757554390732874",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-指引类型",
                                    "placeholder": "指引类型",
                                    "name": "TCZY-查询-指引类型",
                                    "hiddenclearbtn": "0",
                                    "searchable": "1",
                                    "options": [
                                        {
                                            "key": "1",
                                            "text": "经销商渠道指引",
                                            "isselected": "1"
                                        },
                                        {
                                            "key": "2",
                                            "text": "现代渠道指引",
                                            "isselected": "0"
                                        },
                                        {
                                            "key": "3",
                                            "text": "专项活动指引",
                                            "isselected": "0"
                                        }
                                    ],
                                    "hidden": "1",
                                    "eventlist": []
                                },
                                {
                                    "type": "filtertextinput",
                                    "code": "1729757554390732873",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-指引名称/编码",
                                    "placeholder": "指引名称/编码",
                                    "name": "TCZY-查询-指引名称/编码",
                                    "verificationrule": "",
                                    "eventlist": []
                                }
                            ]
                        },
                        "sortcondition": {
                            "advanced": [],
                            "basic": []
                        },
                        "flexwrap": "wrap",
                        "floatposition": {
                            "bottom": "30"
                        },
                        "name": "",
                        "eventlist": [
                            {
                                "trigger": "onvaluechange",
                                "handler": "1729757554390732865"
                            }
                        ]
                    },
                    {
                        "type": "infotable",
                        "code": "1729757554390732875",
                        "title": "",
                        "checkable": "1",
                        "ispage": "1",
                        "isradio": "0",
                        "rowsize": "small",
                        "hasheaderbar": "1",
                        "datastructure": {
                            "id": ""
                        },
                        "cols": [
                            {
                                "type": "tablecell",
                                "code": "1729757554390732872",
                                "title": "指引id",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZY指引id",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729757554390732871",
                                "title": "指引编码",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZY指引编码",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729757554390732870",
                                "title": "指引名称",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZY指引名称",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729757554390732858",
                                "title": "业务活动类型",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZY业务活动类型",
                                "eventlist": []
                            }
                        ],
                        "stripe": "0",
                        "dynamiccols": [],
                        "guidecols": {
                            "frozen": "1",
                            "merged": "0",
                            "cols": []
                        },
                        "groupcols": [],
                        "operations": [
                            {
                                "text": "确认选择",
                                "icon": "check-circle",
                                "disabled": "le:{checkednumber} != 1",
                                "functioncode": "",
                                "eventlist": [
                                    {
                                        "trigger": "onclicked",
                                        "handler": "1729757554390732869"
                                    }
                                ]
                            }
                        ],
                        "rowoperations": [],
                        "defpagesize": "20",
                        "name": "TCZY-指引列表",
                        "height": "500",
                        "eventlist": [
                            {
                                "trigger": "onrefresh",
                                "handler": "1729757554390732865"
                            },
                            {
                                "trigger": "onloadmore",
                                "handler": "1729757554390732865"
                            }
                        ]
                    }
                ],
                "code": "1729757554390732877",
                "eventlist": [
                    {
                        "trigger": "onopen",
                        "handler": "1729757554390732865"
                    }
                ]
            },
            {
                "type": "popview",
                "title": "投放范围-组织弹窗",
                "flexdirection": "vertical",
                "needconfirm": "0",
                "confirmtitle": "确定",
                "resetwhenopen": "1",
                "code": "1729704190114140258",
                "content": [
                    {
                        "type": "filter",
                        "code": "1729704190114140256",
                        "title": "搜索栏",
                        "display": "flex",
                        "flexdirection": "",
                        "flex": "",
                        "shape": "rect",
                        "overflowy": "",
                        "content": [],
                        "searchcondition": {
                            "basic": [
                                {
                                    "type": "picktree",
                                    "code": "1729704190114140255",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-营销组织",
                                    "placeholder": "营销组织",
                                    "name": "TCZ-查询-营销组织",
                                    "displaystyle": "input",
                                    "searchable": "1",
                                    "multiselectable": "0",
                                    "hiddenclearbtn": "0",
                                    "expandmodel": "allexpand",
                                    "intermediateselectmode": "disable",
                                    "eventlist": []
                                }
                            ],
                            "advanced": []
                        },
                        "sortcondition": {
                            "advanced": [],
                            "basic": []
                        },
                        "flexwrap": "wrap",
                        "floatposition": {
                            "bottom": "30"
                        },
                        "eventlist": [
                            {
                                "trigger": "onvaluechange",
                                "handler": "1729704190114140241"
                            }
                        ]
                    },
                    {
                        "type": "infotable",
                        "code": "1729704190114140254",
                        "title": "",
                        "checkable": "1",
                        "ispage": "1",
                        "isradio": "0",
                        "rowsize": "small",
                        "hasheaderbar": "1",
                        "datastructure": {
                            "id": ""
                        },
                        "stripe": "0",
                        "dynamiccols": [],
                        "guidecols": {
                            "frozen": "1",
                            "merged": "0",
                            "cols": []
                        },
                        "groupcols": [],
                        "operations": [
                            {
                                "text": "确认选择",
                                "icon": "check-circle",
                                "disabled": "le:{checkednumber} == 0",
                                "functioncode": "",
                                "eventlist": [
                                    {
                                        "trigger": "onclicked",
                                        "handler": "1729704190114140249"
                                    }
                                ]
                            }
                        ],
                        "rowoperations": [],
                        "defpagesize": "20",
                        "name": "TCZ-组织列表",
                        "flex": "",
                        "height": "500",
                        "cols": [
                            {
                                "type": "tablecell",
                                "code": "1729704190114140245",
                                "title": "组织id",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZ-组织id",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729704190114140253",
                                "title": "营销组织编码",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZ-营销组织编码",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729704190114140252",
                                "title": "营销组织名称",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZ-营销组织名称",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729704190114140244",
                                "title": "客户组id",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZ-客户组id",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729704190114140251",
                                "title": "客户组编码",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZ-客户组编码",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1729704190114140250",
                                "title": "客户组名称",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCZ-客户组名称",
                                "eventlist": []
                            }
                        ],
                        "eventlist": [
                            {
                                "trigger": "onrefresh",
                                "handler": "1729704190114140241"
                            },
                            {
                                "trigger": "onloadmore",
                                "handler": "1729704190114140241"
                            }
                        ]
                    }
                ],
                "eventlist": [
                    {
                        "trigger": "onopen",
                        "handler": "1729704190114140241"
                    }
                ]
            },
            {
                "type": "popview",
                "title": "投放范围-售达方弹窗",
                "flexdirection": "vertical",
                "needconfirm": "0",
                "confirmtitle": "确定",
                "resetwhenopen": "1",
                "content": [
                    {
                        "type": "filter",
                        "code": "1730025035474800737",
                        "title": "搜索栏",
                        "display": "flex",
                        "flexdirection": "",
                        "flex": "0",
                        "shape": "rect",
                        "overflowy": "",
                        "content": [],
                        "searchcondition": {
                            "advanced": [],
                            "basic": [
                                {
                                    "type": "filtertextinput",
                                    "code": "1730025035474800725",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-售达方编码/名称",
                                    "placeholder": "售达方编码/名称",
                                    "name": "TCS-查询-售达方编码/名称",
                                    "verificationrule": "",
                                    "eventlist": []
                                }
                            ]
                        },
                        "sortcondition": {
                            "advanced": [],
                            "basic": []
                        },
                        "flexwrap": "wrap",
                        "floatposition": {
                            "bottom": "30"
                        },
                        "eventlist": [
                            {
                                "trigger": "onvaluechange",
                                "handler": "1730025035474800724"
                            }
                        ]
                    },
                    {
                        "type": "infotable",
                        "code": "1730025035474800736",
                        "title": "",
                        "checkable": "1",
                        "ispage": "1",
                        "isradio": "0",
                        "rowsize": "small",
                        "hasheaderbar": "1",
                        "datastructure": {
                            "id": ""
                        },
                        "cols": [
                            {
                                "type": "tablecell",
                                "code": "1730025035474800734",
                                "title": "售达方id",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-售达方id",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1730025035474800733",
                                "title": "渠道",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-渠道",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1730025035474800732",
                                "title": "客户名称",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-客户名称",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1730025035474800731",
                                "title": "客户编码",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-客户编码",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1730025035474800730",
                                "title": "售达方名称",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-售达方名称",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1730025035474800729",
                                "title": "售达方编码",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-售达方编码",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1730025035474800728",
                                "title": "所属营销组织",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-所属营销组织",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1730025035474800727",
                                "title": "价格组编码",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCS-价格组编码",
                                "eventlist": []
                            }
                        ],
                        "stripe": "0",
                        "dynamiccols": [],
                        "guidecols": {
                            "frozen": "1",
                            "merged": "0",
                            "cols": []
                        },
                        "groupcols": [],
                        "operations": [
                            {
                                "text": "确认选择",
                                "icon": "check-circle",
                                "disabled": "le:{checkednumber} == 0",
                                "functioncode": "",
                                "eventlist": [
                                    {
                                        "trigger": "onclicked",
                                        "handler": "1730025035474800719"
                                    }
                                ]
                            }
                        ],
                        "rowoperations": [],
                        "defpagesize": "20",
                        "name": "TCS-售达方列表",
                        "height": "500",
                        "eventlist": [
                            {
                                "trigger": "onrefresh",
                                "handler": "1730025035474800724"
                            },
                            {
                                "trigger": "onloadmore",
                                "handler": "1730025035474800724"
                            }
                        ]
                    }
                ],
                "code": "1730025035474800738",
                "eventlist": [
                    {
                        "trigger": "onopen",
                        "handler": "1730025035474800724"
                    }
                ]
            },
            {
                "type": "popview",
                "title": "选择客户弹窗",
                "flexdirection": "vertical",
                "needconfirm": "0",
                "confirmtitle": "确定",
                "resetwhenopen": "1",
                "content": [
                    {
                        "type": "filter",
                        "code": "1731474374386651227",
                        "title": "搜索栏",
                        "display": "flex",
                        "flexdirection": "",
                        "flex": "0",
                        "shape": "rect",
                        "overflowy": "",
                        "content": [],
                        "searchcondition": {
                            "advanced": [],
                            "basic": [
                                {
                                    "type": "filtertextinput",
                                    "code": "1731545945360961629",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-加载类型",
                                    "placeholder": "",
                                    "name": "TCK-查询-加载类型",
                                    "verificationrule": "",
                                    "eventlist": []
                                },
                                {
                                    "type": "dropdownbox",
                                    "code": "1731474374386651225",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-渠道",
                                    "placeholder": "渠道",
                                    "name": "TCK-查询-渠道",
                                    "hiddenclearbtn": "0",
                                    "searchable": "1",
                                    "eventlist": []
                                },
                                {
                                    "type": "picktree",
                                    "code": "1731474374386651224",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-营销组织",
                                    "placeholder": "营销组织",
                                    "name": "TCK-查询-营销组织",
                                    "displaystyle": "input",
                                    "searchable": "1",
                                    "multiselectable": "0",
                                    "hiddenclearbtn": "0",
                                    "expandmodel": "allexpand",
                                    "intermediateselectmode": "disable",
                                    "eventlist": []
                                },
                                {
                                    "type": "filtertextinput",
                                    "code": "1731474374386651223",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-客户名称/编码",
                                    "placeholder": "客户名称/编码",
                                    "name": "TCK-查询-客户名称/编码",
                                    "verificationrule": "",
                                    "eventlist": []
                                },
                                {
                                    "type": "filtertextinput",
                                    "code": "1731513899985014870",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-客户画像",
                                    "placeholder": "客户画像",
                                    "name": "TCK-查询-客户画像",
                                    "verificationrule": "",
                                    "eventlist": []
                                },
                                {
                                    "type": "filtertextinput",
                                    "code": "1731513899985014869",
                                    "titlewidth": "110",
                                    "titleflex": "",
                                    "title": "查询-客户标签",
                                    "placeholder": "客户标签",
                                    "name": "TCK-查询-客户标签",
                                    "verificationrule": "",
                                    "eventlist": []
                                }
                            ]
                        },
                        "sortcondition": {
                            "advanced": [],
                            "basic": []
                        },
                        "flexwrap": "wrap",
                        "floatposition": {
                            "bottom": "30"
                        },
                        "eventlist": []
                    },
                    {
                        "type": "infotable",
                        "code": "1731474374386651226",
                        "title": "",
                        "checkable": "1",
                        "ispage": "1",
                        "isradio": "0",
                        "rowsize": "small",
                        "hasheaderbar": "1",
                        "datastructure": {
                            "id": ""
                        },
                        "cols": [
                            {
                                "type": "tablecell",
                                "code": "1731513899985014868",
                                "title": "id",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCK-客户列表-id",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1731513899985014867",
                                "title": "渠道",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCK-客户列表-渠道",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1731513899985014866",
                                "title": "所属营销组织",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCK-客户列表-所属营销组织",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1731513899985014865",
                                "title": "客户编码",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCK-客户列表-客户编码",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1731513899985014863",
                                "title": "客户名称",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCK-客户列表-客户名称",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1731545945360961635",
                                "title": "客户画像",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCK-客户列表-客户画像",
                                "eventlist": []
                            },
                            {
                                "type": "tablecell",
                                "code": "1731545945360961634",
                                "title": "客户标签",
                                "style": "text",
                                "watermarkstyle": "clear",
                                "watermarkcomposite": "blended",
                                "visiblesize": "",
                                "options": [],
                                "sort": "0",
                                "value": "",
                                "iswrap": "0",
                                "name": "TCK-客户列表-客户标签",
                                "eventlist": []
                            }
                        ],
                        "stripe": "0",
                        "dynamiccols": [],
                        "guidecols": {
                            "frozen": "1",
                            "merged": "0",
                            "cols": []
                        },
                        "groupcols": [],
                        "operations": [
                            {
                                "text": "添加",
                                "icon": "add-circle",
                                "disabled": "le:{checkednumber} == 0",
                                "functioncode": "",
                                "eventlist": [
                                    {
                                        "trigger": "onclicked",
                                        "handler": "1731545945360961628"
                                    }
                                ]
                            }
                        ],
                        "rowoperations": [],
                        "defpagesize": "20",
                        "name": "TCK-客户列表",
                        "eventlist": [
                            {
                                "trigger": "onrefresh",
                                "handler": "1731545945360961633"
                            },
                            {
                                "trigger": "onloadmore",
                                "handler": "1731545945360961633"
                            }
                        ]
                    }
                ],
                "code": "1731474374386651228",
                "eventlist": [
                    {
                        "trigger": "onopen",
                        "handler": "1731545945360961633"
                    }
                ]
            }
        ]
    },
    "presenter": {
        "initial": [
            {
                "code": "1729757554390732849",
                "desc": "参数接受",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732848",
                        "type": "receivelink",
                        "desc": "接收参数",
                        "condition": "",
                        "param": {
                            "name": "__linkparam",
                            "datatype": "0",
                            "ctrlcode": "",
                            "properties": [
                                {
                                    "name": "__pagestatus",
                                    "paramtype": "1",
                                    "value": "",
                                    "ctrl": {
                                        "code": "",
                                        "component": ""
                                    }
                                },
                                {
                                    "name": "id",
                                    "value": "",
                                    "paramtype": "3",
                                    "ctrl": {
                                        "code": "1729757554390732850",
                                        "component": ""
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        ],
        "interface": [],
        "handlers": [
            {
                "code": "1721373985633079365",
                "desc": "JB-渠道加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1721373985633079364",
                        "type": "datarequest",
                        "desc": "数据字典绑定",
                        "condition": "",
                        "binddic": "893269583996260404",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "893269583996260404",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "1",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "kx_channeltype",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1729411162908528729",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1721373985633079350",
                "desc": "是否授权费用-值改变时",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1721373985633079349",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "var passcost = Page.getCtrl('passcost').value;\r\nconsole.log('passcost',passcost)\r\nvar costrule = Page.getCtrl('costrule');\r\nif(passcost == 1){\r\n    console.log('1')\r\n    costrule.setProperty('hidden', false, 2);\r\n}else{\r\n    console.log('0')\r\n    costrule.setProperty('hidden', true, 2);\r\n}"
                    }
                ]
            },
            {
                "code": "1729673766046404687",
                "desc": "TF-参与组织新增",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729704190114140242",
                        "type": "popsubview",
                        "desc": "打开popview",
                        "condition": "",
                        "viewcode": "1729704190114140258",
                        "viewwidth": "1000",
                        "viewheight": "600",
                        "viewtitle": "组织选择"
                    }
                ]
            },
            {
                "code": "1729673766046404686",
                "desc": "TF-参与组织删除",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732881",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "var result = Page.getArrayCtrl('TF-参与组织').deleteInScope('checked')\nif(result == true) {\n    Page.runEvent('营销组织选项全局设置')\n    Page.alert('info','清除成功')\n}"
                    }
                ]
            },
            {
                "code": "1729673766046404677",
                "desc": "TF-不参与售达方新增",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730025035474800739",
                        "type": "popsubview",
                        "desc": "打开popview",
                        "condition": "",
                        "viewcode": "1730025035474800738",
                        "viewwidth": "1000",
                        "viewheight": "600",
                        "viewtitle": "售达方选择"
                    }
                ]
            },
            {
                "code": "1729673766046404676",
                "desc": "TF-不参与售达方删除",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732880",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "var result = Page.getArrayCtrl('TF-不参与售达方').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
                    }
                ]
            },
            {
                "code": "1729673766046404675",
                "desc": "TF-不参与售达方导入",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730094572291362915",
                        "type": "dataimport",
                        "desc": "导入行为",
                        "condition": "",
                        "logiccode": "1730069977010147427",
                        "mode": "1",
                        "servicetype": "forground",
                        "microclass": "",
                        "template": "促销活动申请-投放范围售达方导入模版",
                        "templatename": "售达方",
                        "extraparam": [
                            {
                                "title": "当数据重复时如何处理",
                                "paramkey": "_dataaddmode",
                                "requesturl": "",
                                "options": []
                            }
                        ],
                        "getter": [
                            {
                                "name": "xxw_channelcustomers",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "sheetnames",
                                        "propertyname": "即将导入的excel的sheet页名",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "fileurl",
                                        "propertyname": "待导入的excel下载路径",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "_dupstrategy",
                                        "propertyname": "重复行处理策略",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "filename",
                                        "propertyname": "文件名",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "placement_scope",
                                        "propertyname": "投放范围",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729411162908528727",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "check_xxw_channelcustomers",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1729673766046404685",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "id",
                                        "propertyname": "主键",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800735",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "cy_pl_salearea",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1729673766046404692",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "orgstructid",
                                        "propertyname": "主键",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140246",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "xxw_channelcustomers",
                                "datatype": "1",
                                "ctrlcode": "1729673766046404685",
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800735",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "saleareaid",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channelcode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404683",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channelname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404679",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "pricegroupname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404678",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customercode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404681",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customername",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404680",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel_text",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404684",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "salearea_name",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404682",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "onsuccess": ""
                    }
                ]
            },
            {
                "code": "1729673766046404667",
                "desc": "TF-参与售达方新增",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730025035474800720",
                        "type": "popsubview",
                        "desc": "打开popview",
                        "condition": "",
                        "viewcode": "1730025035474800738",
                        "viewwidth": "1000",
                        "viewheight": "600",
                        "viewtitle": "售达方选择"
                    }
                ]
            },
            {
                "code": "1729673766046404666",
                "desc": "TF-参与售达方删除",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732879",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "var result = Page.getArrayCtrl('TF-参与售达方').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
                    }
                ]
            },
            {
                "code": "1729673766046404665",
                "desc": "TF-参与售达方导入",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730129571614953571",
                        "type": "dataimport",
                        "desc": "导入行为",
                        "condition": "",
                        "logiccode": "1730069977010147427",
                        "mode": "1",
                        "servicetype": "forground",
                        "microclass": "",
                        "template": "促销活动申请-投放范围售达方导入模版",
                        "templatename": "售达方",
                        "extraparam": [
                            {
                                "title": "当数据重复时如何处理",
                                "paramkey": "_dataaddmode",
                                "requesturl": "",
                                "options": [
                                    {
                                        "text": "覆盖",
                                        "key": "1",
                                        "isselected": ""
                                    },
                                    {
                                        "text": "追加",
                                        "key": "2",
                                        "isselected": ""
                                    },
                                    {
                                        "text": "放弃",
                                        "key": "3",
                                        "isselected": ""
                                    }
                                ]
                            }
                        ],
                        "getter": [
                            {
                                "name": "xxw_channelcustomers",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "sheetnames",
                                        "alias": "",
                                        "propertyname": "即将导入的excel的sheet页名",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "fileurl",
                                        "alias": "",
                                        "propertyname": "待导入的excel下载路径",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "_dupstrategy",
                                        "alias": "",
                                        "propertyname": "重复行处理策略",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "filename",
                                        "alias": "",
                                        "propertyname": "文件名",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "placement_scope",
                                        "alias": "",
                                        "propertyname": "投放范围",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729411162908528727",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "check_xxw_channelcustomers",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1729673766046404674",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "propertyname": "主键",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730052880691499105",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "cy_pl_salearea",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "orgstructid",
                                        "alias": "",
                                        "propertyname": "主键",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "xxw_channelcustomers",
                                "datatype": "1",
                                "ctrlcode": "1729673766046404674",
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730052880691499105",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "saleareaid",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channelcode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404670",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channelname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404669",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "pricegroupname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customercode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404673",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customername",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404672",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel_text",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404671",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "salearea_name",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729673766046404668",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "onsuccess": ""
                    }
                ]
            },
            {
                "code": "1729673766046404663",
                "desc": "JB-投放范围-值改变时",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729673766046404662",
                        "type": "flycode",
                        "desc": "控制投放范围页签内容",
                        "condition": "",
                        "script": "debugger\nvar launch = Page.getCtrl('JB-投放范围').value\n\n//如果投放范围已维护数据，投放范围变动时弹窗提示\n\nvar salearea = Page.getArrayCtrl('TF-参与组织').getAllRows()\nvar noJoin = Page.getArrayCtrl('TF-不参与售达方').getAllRows()\nvar join = Page.getArrayCtrl('TF-参与售达方').getAllRows()\n\nvar launch_zz = function(){\n    var actions = AlertChoice()\n    actions.append('确定',function(){\n        //清空参与售达方表格\n        var result = Page.getArrayCtrl('TF-参与售达方').deleteInScope('all')\n        if(result == true) {\n            Page.alert('info','清除成功')\n        }\n    })\n    \n    actions.append('取消',function(){\n        Page.getCtrl('JB-投放范围').value = '2'\n    })\n    var alert_message = '【按售达方投放】已维护了相关信息，是否清除数据？';\n\n    //弹出错误提示，用户按‘确定’后关闭提示框\n    // var actions = AlertChoice()\n    // actions.append('确定')\n    Page.alert(AlertType.warning, alert_message, actions)\n}\n\n\nvar launch_sdf = function(){\n    var actions = AlertChoice()\n    actions.append('确定',function(){\n        //清空组织和不参与售达方表格\n        var result1 = Page.getArrayCtrl('TF-参与组织').deleteInScope('all')\n        var result2 = Page.getArrayCtrl('TF-不参与售达方').deleteInScope('all')\n        if(result1 == true && result2) {\n            Page.alert('info','清除成功')\n        }\n    })\n        \n    actions.append('取消',function(){\n        Page.getCtrl('JB-投放范围').value = '1'\n    })\n    var alert_message = '【按营销组织投放】已维护了相关信息，是否清除？';\n\n    //弹出错误提示，用户按‘确定’后关闭提示框\n    // var actions = AlertChoice()\n    // actions.append('确定')\n    Page.alert(AlertType.warning, alert_message, actions)\n}\n\n//1营销组织投放2售达方投放\nif(launch == '1'){\n    Page.getCtrl('TF-组织投放').hidden = false\n    Page.getCtrl('TF-不参与').hidden = false\n    Page.getCtrl('TF-参与').hidden = true\n    Page.getCtrl('TF-提示').hidden = true\n    if(join.length != 0){\n        launch_zz()\n    }\n}else if(launch == '2'){\n    Page.getCtrl('TF-组织投放').hidden = true\n    Page.getCtrl('TF-不参与').hidden = true\n    Page.getCtrl('TF-参与').hidden = false\n    Page.getCtrl('TF-提示').hidden = true\n    if(salearea.length != 0 || noJoin.length != 0){\n        launch_sdf()\n    }\n}else{\n    Page.getCtrl('TF-组织投放').hidden = true\n    Page.getCtrl('TF-不参与').hidden = true\n    Page.getCtrl('TF-参与').hidden = true\n    Page.getCtrl('TF-提示').hidden = false\n    if(join.length != 0){\n        launch_zz()\n    }\n    if(salearea.length != 0 || noJoin.length != 0){\n        launch_sdf()\n    }\n}\n\n\n\n\n"
                    }
                ]
            },
            {
                "code": "1729704190114140249",
                "desc": "TCZ-组织列表确认选择",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729704190114140248",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "//讲选择的数据进行拼接处理\ndebugger\n//客户列表\nvar temp = Page.getArrayCtrl('TF-参与组织').getAllRows();\n\nvar temp1 = Page.getArrayCtrl('TCZ-组织列表').getCheckedRows();\n\nvar customer_setter = ArrayCtrlSetter();\ncustomer_setter.append('参与组织-组织id','参与组织-组织id');\ncustomer_setter.append('参与组织-营销组织编码','参与组织-营销组织编码');\ncustomer_setter.append('参与组织-营销组织名称','参与组织-营销组织名称');\ncustomer_setter.append('参与组织-客户组编码','参与组织-客户组编码');\ncustomer_setter.append('参与组织-客户组名称','参与组织-客户组名称');\ncustomer_setter.append('参与组织-客户组id','参与组织-客户组id');\n\nvar tempAll = [];\nfor(var j = 0; j < temp.length; j ++){\n    tempAll.push(temp[j].getCtrl('参与组织-组织id').value);\n}\n\nvar customer_hasArray = [];\nvar tempLen = temp1.length;\n\nfor(var i = 0; i < tempLen; i++){\n    var data = {\n        '参与组织-组织id': temp1[i].getCtrl('TCZ-组织id').value,\n        '参与组织-营销组织编码': temp1[i].getCtrl('TCZ-营销组织编码').value,\n        '参与组织-营销组织名称': temp1[i].getCtrl('TCZ-营销组织名称').value,\n        '参与组织-客户组编码': temp1[i].getCtrl('TCZ-客户组编码').value,\n        '参与组织-客户组名称': temp1[i].getCtrl('TCZ-客户组名称').value,\n        '参与组织-客户组id': temp1[i].getCtrl('TCZ-客户组id').value\n    }\n    if(tempAll.indexOf(temp1[i].getCtrl('TCZ-组织id').value) == -1){\n        customer_hasArray.push(data);\n    }\n}\n\n//'head' 头部; 'tail' 尾部\nPage.getArrayCtrl('TF-参与组织').append(customer_hasArray, 'tail', customer_setter);\n\nPage.runEvent('营销组织选项全局设置')"
                    },
                    {
                        "code": "1729704190114140247",
                        "type": "closesubview",
                        "desc": "关闭popview",
                        "condition": ""
                    }
                ]
            },
            {
                "code": "1729704190114140241",
                "desc": "TCZ-组织列表-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729704190114140240",
                        "type": "datarequest",
                        "desc": "数据请求",
                        "condition": "",
                        "logiccode": "1729704190114140239",
                        "mode": "1",
                        "queue": "0",
                        "pagesize": "",
                        "pagesource": "",
                        "hasextraparams": "",
                        "sorter": "",
                        "lazyload": "",
                        "getter": [
                            {
                                "name": "pl_salearea",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1729673766046404692",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "orgstructid",
                                        "propertyname": "营销组织",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140246",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "pl_org",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "orgaccountcode",
                                        "alias": "",
                                        "propertyname": "组织编码",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140255",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_salearea",
                                "datatype": "1",
                                "ctrlcode": "1729704190114140254",
                                "properties": [
                                    {
                                        "name": "orgstructid",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140245",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "orgname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140252",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "orgid",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "orgid__orgaccountcode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140253",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "groupid",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140244",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customergroupcode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140251",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customergroupname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140250",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1729757554390732878",
                "desc": "JB-关联指引名称-鼠标单击时",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732861",
                        "type": "popsubview",
                        "desc": "打开popview",
                        "condition": "",
                        "viewcode": "1729757554390732877",
                        "viewwidth": "1000",
                        "viewheight": "600",
                        "viewtitle": ""
                    }
                ]
            },
            {
                "code": "1729757554390732869",
                "desc": "TCZY-指引列表确认选择",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732868",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "debugger\n//获取选中的数据\n\nvar temp = Page.getArrayCtrl('TCZY-指引列表').getCheckedRows()\n\nPage.getCtrl('JB-关联指引id').value = temp[0].getCtrl('TCZY指引id').value\nPage.getCtrl('JB-关联指引名称').value = temp[0].getCtrl('TCZY指引名称').value\nPage.getCtrl('JB-指引业务活动类型').value = temp[0].getCtrl('TCZY业务活动类型').value"
                    },
                    {
                        "code": "1729757554390732867",
                        "type": "closesubview",
                        "desc": "关闭popview",
                        "condition": ""
                    }
                ]
            },
            {
                "code": "1729757554390732865",
                "desc": "TCZY-指引列表-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732864",
                        "type": "datarequest",
                        "desc": "数据请求",
                        "condition": "",
                        "logiccode": "1729757554390732863",
                        "mode": "1",
                        "queue": "0",
                        "pagesize": "",
                        "pagesource": "",
                        "hasextraparams": "",
                        "sorter": "",
                        "lazyload": "",
                        "getter": [
                            {
                                "name": "xxw_promotion_guide",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "id",
                                        "propertyname": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732866",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "promotion_guide_name",
                                        "propertyname": "促销指引名称",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732873",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "guide_type",
                                        "propertyname": "指引类型",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732874",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "xxw_promotion_guide",
                                "datatype": "1",
                                "ctrlcode": "1729757554390732875",
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732872",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "promotion_guide_name",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732870",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "guide_code",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732871",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1729757554390732860",
                "desc": "JB-关联指引名称-值改变时",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732859",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "//获取控件值\nvar temp = Page.getCtrl('JB-关联指引名称').value;\n\nif(temp == ''){\n    //清空相关数据\n    Page.getCtrl('JB-关联指引id').value = '';\n    Page.getCtrl('JB-指引业务活动类型').value = '';\n}"
                    }
                ]
            },
            {
                "code": "1729757554390732857",
                "desc": "JB-业务活动类型-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732856",
                        "type": "datarequest",
                        "desc": "数据字典绑定",
                        "condition": "",
                        "binddic": "1727962511191445602",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1727962511191445602",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "1",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_business_activity_type",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1729411162908528725",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1729757554390732852",
                "desc": "经销商渠道活动详情加载",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1729757554390732851",
                        "type": "datarequest",
                        "desc": "数据请求",
                        "condition": "",
                        "logiccode": "1729742655606362208",
                        "mode": "1",
                        "queue": "0",
                        "pagesize": "",
                        "pagesource": "",
                        "hasextraparams": "",
                        "sorter": "",
                        "lazyload": "",
                        "getter": [
                            {
                                "name": "xxw_main_promotion",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "id",
                                        "propertyname": "主键",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732850",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "xxw_main_promotion",
                                "datatype": "0",
                                "ctrlcode": "",
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732850",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "relevance_type",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729411162908528734",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "guide_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729757554390732866",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "guide_name",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729411162908528731",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "guide_type",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_name",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "start_date",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "end_date",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "placement_scope",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "business_activity_type",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "apply_amount",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "make_amends",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "guide_exceed",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "budget_exceed",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "authorize",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "submitter",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "submitting_salearea",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "submission_time",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "attachment",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "active_state",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "confirm_state",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "createtime",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "createop",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "updatetime",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "updateop",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_code",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1730025035474800724",
                "desc": "TCS-售达方列表-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730025035474800723",
                        "type": "datarequest",
                        "desc": "数据请求",
                        "condition": "",
                        "logiccode": "1730025035474800722",
                        "mode": "1",
                        "queue": "0",
                        "pagesize": "",
                        "pagesource": "",
                        "hasextraparams": "",
                        "sorter": "",
                        "lazyload": "",
                        "getter": [
                            {
                                "name": "pl_salearea",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1729673766046404692",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "orgstructid",
                                        "propertyname": "营销组织",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729704190114140246",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "xxw_main_promotion",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "placement_scope",
                                        "propertyname": "投放范围",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1729411162908528727",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channelcode",
                                        "propertyname": "售达方编码",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800725",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "cy_xxw_channelcustomers",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1729673766046404674",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "propertyname": "主键",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730052880691499105",
                                            "component": ""
                                        }
                                    }
                                ]
                            },
                            {
                                "name": "bcy_xxw_channelcustomers",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1729673766046404685",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "propertyname": "主键",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800735",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "xxw_channelcustomers",
                                "datatype": "1",
                                "ctrlcode": "1730025035474800736",
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800734",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "saleareaid",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channelcode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800729",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channelname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800730",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "pricegroupname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800727",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customercode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800731",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customername",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800732",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel_text",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800733",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "salearea_name",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730025035474800728",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1730025035474800719",
                "desc": "TCS-售达方列表确认选择",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730052880691499107",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "//讲选择的数据进行拼接处理\ndebugger\n//客户列表\n//获取投放范围\nvar range = Page.getCtrl('JB-投放范围').value;\n\nvar customer = Page.getArrayCtrl('TCS-售达方列表').getCheckedRows();\n\nif(range == '1'){\n    //组织投放写入不参与客户列表\n    var customerIsCheck = Page.getArrayCtrl('TF-不参与售达方').getAllRows();\n    var customer_setter = ArrayCtrlSetter();\n    customer_setter.append('不参与售达方-渠道','不参与售达方-渠道');\n    customer_setter.append('不参与售达方-客户编码','不参与售达方-客户编码');\n    customer_setter.append('不参与售达方-客户名称','不参与售达方-客户名称');\n    customer_setter.append('不参与售达方-售达方id','不参与售达方-售达方id');\n    customer_setter.append('不参与售达方-售达方编码','不参与售达方-售达方编码');\n    customer_setter.append('不参与售达方-售达方名称','不参与售达方-售达方名称');\n    customer_setter.append('不参与售达方-所属营销组织','不参与售达方-所属营销组织');\n    customer_setter.append('不参与售达方-价格组编码','不参与售达方-价格组编码');\n\n    var customerAll = [];\n    for(var j = 0; j < customerIsCheck.length; j ++){\n        customerAll.push(customerIsCheck[j].getCtrl('不参与售达方-售达方id').value);\n    }\n\n    var customer_hasArray = [];\n    var customerLen = customer.length;\n\n    for(var i = 0; i < customerLen; i++){\n        var data1 = {\n            '不参与售达方-渠道': customer[i].getCtrl('TCS-渠道').value,\n            '不参与售达方-客户编码': customer[i].getCtrl('TCS-客户编码').value,\n            '不参与售达方-客户名称': customer[i].getCtrl('TCS-客户名称').value,\n            '不参与售达方-售达方id': customer[i].getCtrl('TCS-售达方id').value,\n            '不参与售达方-售达方编码': customer[i].getCtrl('TCS-售达方编码').value,\n            '不参与售达方-售达方名称': customer[i].getCtrl('TCS-售达方名称').value,\n            '不参与售达方-所属营销组织': customer[i].getCtrl('TCS-所属营销组织').value,\n            '不参与售达方-价格组编码': customer[i].getCtrl('TCS-价格组编码').value\n        }\n        if(customerAll.indexOf(customer[i].getCtrl('TCS-售达方id').value) == -1){\n            customer_hasArray.push(data1);\n        }\n    }\n    //'head' 头部; 'tail' 尾部\n    Page.getArrayCtrl('TF-不参与售达方').append(customer_hasArray, 'tail', customer_setter);\n}\nif(range == '2'){\n    //售达方投放写入参与客户列表\n    var customerIsCheck = Page.getArrayCtrl('TF-参与售达方').getAllRows();\n    var customer_setter = ArrayCtrlSetter();\n    customer_setter.append('参与售达方-渠道','参与售达方-渠道');\n    customer_setter.append('参与售达方-客户编码','参与售达方-客户编码');\n    customer_setter.append('参与售达方-客户名称','参与售达方-客户名称');\n    customer_setter.append('参与售达方-售达方id','参与售达方-售达方id');\n    customer_setter.append('参与售达方-售达方编码','参与售达方-售达方编码');\n    customer_setter.append('参与售达方-售达方名称','参与售达方-售达方名称');\n    customer_setter.append('参与售达方-所属营销组织','参与售达方-所属营销组织');\n\n    var customerAll = [];\n    for(var j = 0; j < customerIsCheck.length; j ++){\n        customerAll.push(customerIsCheck[j].getCtrl('参与售达方-售达方id').value);\n    }\n\n    var customer_hasArray = [];\n    var customerLen = customer.length;\n\n    for(var i = 0; i < customerLen; i++){\n        var data2 = {\n            '参与售达方-渠道': customer[i].getCtrl('TCS-渠道').value,\n            '参与售达方-客户编码': customer[i].getCtrl('TCS-客户编码').value,\n            '参与售达方-客户名称': customer[i].getCtrl('TCS-客户名称').value,\n            '参与售达方-售达方id': customer[i].getCtrl('TCS-售达方id').value,\n            '参与售达方-售达方编码': customer[i].getCtrl('TCS-售达方编码').value,\n            '参与售达方-售达方名称': customer[i].getCtrl('TCS-售达方名称').value,\n            '参与售达方-所属营销组织': customer[i].getCtrl('TCS-所属营销组织').value\n        }\n        if(customerAll.indexOf(customer[i].getCtrl('TCS-售达方id').value) == -1){\n            customer_hasArray.push(data2);\n        }\n    }\n    //'head' 头部; 'tail' 尾部\n    Page.getArrayCtrl('TF-参与售达方').append(customer_hasArray, 'tail', customer_setter);\n}\n"
                    },
                    {
                        "code": "1730052880691499106",
                        "type": "closesubview",
                        "desc": "关闭popview",
                        "condition": ""
                    }
                ]
            },
            {
                "code": "1730155088279900254",
                "desc": "GD-TY-表格新增行",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730155088279900253",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "//在最后面插入数据\ndebugger\nvar salearea_range = Page.getCtrl('JB-投放范围').value\nvar saleareasData = Page.getValue(\"saleareasData\")\nvar array = Page.getArrayCtrl('GD-TY-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n \nif(salearea_range == '1'){\n    //构建setter\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    //设置选项数据\n    if(saleareasData){\n        // Page.getPickerCtrl('客户类型').setOption(data, setter);\n        var result = Page.getArrayCtrl('GD-TY-表格').append([{}], 'tail', null)\n        if(result == true) {\n            //插入成功\n            var indexes = [num];\n            var rows = Page.getArrayCtrl('GD-TY-表格').getRowAtIndexes([num]);\n            if (rows != null) {\n                for(var i = 0; i < rows.length; i++) {\n                    var row = rows[i];\n                    //做一些操作，如设置row的下拉选项\n                    row.getPickerCtrl('GD-TY-表格营销组织').setOption(saleareasData, setter);\n                }\n            }\n            Page.alert('info','插入成功')\n        }\n    }else{\n        Page.alert('info','【投放范围】投放区域未设置')\n    }\n\n}else if(salearea_range == '2'){\n    var textInput = Page.getArrayCtrl('GD-TY-表格').getColByName('GD-TY-表格营销组织')\n    if (textInput != null) {\n        textInput.readonly = true;\n    }\n    var result = Page.getArrayCtrl('GD-TY-表格').append([{}], 'tail', null)\n    if(result == true) {\n        //插入成功\n        // array[num].getCtrl('GD-TY-表格营销组织').readonly = true\n        \n        Page.alert('info','插入成功')\n    }\n}else{\n    Page.alert('info','【基本信息】投放区域未设置')\n}\n"
                    }
                ]
            },
            {
                "code": "1730400843984932886",
                "desc": "BD-DZ-表格导入",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730455805045641304",
                        "type": "dataimport",
                        "desc": "导入行为",
                        "condition": "",
                        "logiccode": "1730400843984932885",
                        "mode": "1",
                        "servicetype": "forground",
                        "microclass": "",
                        "template": "",
                        "templatename": "",
                        "extraparam": [
                            {
                                "title": "当数据重复时如何处理",
                                "paramkey": "_dataaddmode",
                                "requesturl": "",
                                "options": [
                                    {
                                        "text": "全覆盖",
                                        "key": "10",
                                        "isselected": "0"
                                    }
                                ]
                            }
                        ],
                        "getter": [
                            {
                                "name": "xxw_promotion_giveaways",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "sheetnames",
                                        "alias": "",
                                        "propertyname": "即将导入的excel的sheet页名",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "fileurl",
                                        "alias": "",
                                        "propertyname": "待导入的excel下载路径",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "_dupstrategy",
                                        "alias": "",
                                        "propertyname": "重复行处理策略",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "filename",
                                        "alias": "",
                                        "propertyname": "文件名",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "xxw_promotion_giveaways",
                                "datatype": "1",
                                "ctrlcode": "1730400843984932944",
                                "properties": [
                                    {
                                        "name": "serial_number",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932913",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "salearea_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932912",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customer_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932911",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932910",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "store_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932909",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "no_store_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932908",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "payment_method",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932906",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_range",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932905",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_product_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_product_code",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932904",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_rpoduct_id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_rpoduct_code",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932903",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_period",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932936",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "complimentary_rule",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932902",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "complimentary_type",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730455805045641303",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "achieve_target_terminate_complimentary",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932901",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_quantity",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932899",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_unit",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932898",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_quantity",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932929",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_unit",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932928",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "mutually_exclusive_with_contract_rebate",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932927",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "revenue_target",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932925",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "current_sales_target",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932922",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "onsuccess": ""
                    }
                ]
            },
            {
                "code": "1730455805045641292",
                "desc": "营销组织选项全局设置",
                "name": "营销组织选项全局设置",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730455805045641291",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "//营销组织投放时\nlet saleareas = Page.getArrayCtrl('TF-参与组织').getAllRows()\nvar saleareasData = []\nvar keys = []\nfor(let item of saleareas){\n    saleareasData.push({\n        \"key\":item.getCtrl('参与组织-组织id').value,\n        \"text\":item.getCtrl('参与组织-营销组织名称').value,\n        \"id\":item.getCtrl('参与组织-组织id').value\n    })\n    keys.push(item.getCtrl('参与组织-组织id').value)\n}\n\nPage.setValue('saleareasData',saleareasData)\n\nvar setter = PickerCtrlOptionSetter();\nsetter.append(\"key\", \"key\");\nsetter.append(\"text\", \"text\");\nsetter.append(\"id\", \"id\");\n\n//如果后续活动设置已根据营销组织选择，须更新原有的下拉选项\nvar tyallRows = Page.getArrayCtrl('GD-TY-表格').getAllRows()\nif (tyallRows != null) {\n    for(var i = 0; i < tyallRows.length; i++) {\n        var row = tyallRows[i]\n        //营销组织控件下拉选项更新\n        row.getPickerCtrl('GD-TY-表格营销组织').setOption(saleareasData, setter);\n        //已选营销组织，去除\n        var saleareaid = row.getCtrl('GD-TY-表格营销组织').getValue(CtrlValueGetter('key'))\n        if(keys.indexOf(saleareaid) == -1){\n            row.getCtrl('GD-TY-表格营销组织').value = ''\n        }\n    }\n}"
                    }
                ]
            },
            {
                "code": "1730455805045641290",
                "desc": "删除行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1730455805045641289",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "debugger\nvar result = Page.getArrayCtrl('GD-TY-表格').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
                    }
                ]
            },
            {
                "code": "1731474374386651230",
                "desc": "GD-TY-表格-客户选择",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731474374386651229",
                        "type": "popsubview",
                        "desc": "打开popview",
                        "condition": "",
                        "viewcode": "1731474374386651228",
                        "viewwidth": "1000",
                        "viewheight": "600",
                        "viewtitle": "选择客户"
                    },
                    {
                        "code": "1731545945360961626",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "Page.getCtrl('TCK-查询-加载类型').value = 'TY'"
                    }
                ]
            },
            {
                "code": "1731545945360961633",
                "desc": "TCK-客户列表-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731545945360961632",
                        "type": "datarequest",
                        "desc": "数据请求",
                        "condition": "",
                        "logiccode": "1731545945360961631",
                        "mode": "1",
                        "queue": "0",
                        "pagesize": "",
                        "pagesource": "",
                        "hasextraparams": "",
                        "sorter": "",
                        "lazyload": "",
                        "getter": [
                            {
                                "name": "xxw_customer",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "customercode",
                                        "propertyname": "客户编号",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731474374386651223",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "saleareaid",
                                        "propertyname": "所属营销组织",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731474374386651224",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel",
                                        "propertyname": "渠道",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731474374386651225",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "portraitname",
                                        "propertyname": "画像名称",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731513899985014870",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "manuallabelname",
                                        "propertyname": "标签名称",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731513899985014869",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "load_type",
                                        "propertyname": "加载类型",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "xxw_customer",
                                "datatype": "1",
                                "ctrlcode": "1731474374386651226",
                                "properties": [
                                    {
                                        "name": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731513899985014868",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customercode",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731513899985014865",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customername",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731513899985014863",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel_text",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731513899985014867",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "salearea_text",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731513899985014866",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "salearea_full",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "portraitname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731545945360961635",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "manuallabelname",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731545945360961634",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1731545945360961628",
                "desc": "TCK-客户列表-添加",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731545945360961627",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": ""
                    }
                ]
            },
            {
                "code": "1731568728241475664",
                "desc": "BD-DZ-新增行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731572161694535778",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "\n\nlet table = Page.getArrayCtrl(\"BD-DZ-表格\")\n\n\n\nlet maxSeq = 0\nlet all = table.getInScope('all', null, false)\nif (all.length > 0) {\n    maxSeq = all.sort((a, b) => {\n        return b['BD-DZ-B序号'] - a['BD-DZ-B序号']\n    })[0]['BD-DZ-B序号']\n}\n\n\ntable.append([{\n    \"BD-DZ-B序号\": parseInt(maxSeq) + 1\n}], \"tail\", null)"
                    }
                ]
            },
            {
                "code": "1731568728241475663",
                "desc": "BD-DZ-复制行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731837384707936355",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "\n\nlet table = Page.getArrayCtrl(\"BD-DZ-表格\")\n\n\ndebugger\nlet checkd = table.getInScope(\"checked\",null,false)\n\nif(checkd.length!=1){\n    Page.alert(\"error\",\"复制失败请重新选择\")\n    return\n}\n\n\ntable.append(checkd,\"tail\",null)\nPage.alert(\"info\",\"复制成功\")"
                    }
                ]
            },
            {
                "code": "1731572161694535779",
                "desc": "BD-DZ-删除行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731841014668333155",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "let table = Page.getArrayCtrl(\"BD-DZ-表格\")\n\n\ndebugger\nlet checkd = table.getInScope(\"checked\", null, false)\n\nif (checkd.length > 0) {\n    if (table.deleteInScope(\"checked\")) {\n        Page.alert(\"info\", \"删除成功\")\n    }\n\n    return\n}\n"
                    }
                ]
            },
            {
                "code": "1731585629294301241",
                "desc": "BD-TJ-新增行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301222",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "\n\nlet table = Page.getArrayCtrl(\"BD-TJ-表格\")\n\n\n\n\ntable.append([{}],\"tail\",null)"
                    }
                ]
            },
            {
                "code": "1731585629294301240",
                "desc": "BD-TJ-复制行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301239",
                "desc": "BD-TJ-删除行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301238",
                "desc": "BD-TJ-导入-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301237",
                "desc": "BD-MJ-新增行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301221",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "\n\nlet table = Page.getArrayCtrl(\"BD-MJ-表格\")\n\n\n\n\ntable.append([{}],\"tail\",null)"
                    }
                ]
            },
            {
                "code": "1731585629294301236",
                "desc": "BD-MJ-复制行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301235",
                "desc": "BD-MJ-删除行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301234",
                "desc": "BD-MJ-导入-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301233",
                "desc": "BD-TY-新增行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301220",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "\n\nlet table = Page.getArrayCtrl(\"BD-TY-表格\")\n\n\n\n\ntable.append([{}],\"tail\",null)"
                    }
                ]
            },
            {
                "code": "1731585629294301232",
                "desc": "BD-TY-复制行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301231",
                "desc": "BD-TY-删除行-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301230",
                "desc": "BD-TY-导入-触发事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": []
            },
            {
                "code": "1731585629294301229",
                "desc": "BD-DZ-表格-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301228",
                        "type": "datarequest",
                        "desc": "兑付方式-数据字典绑定",
                        "condition": "",
                        "binddic": "1730385840141635682",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1730385840141635682",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_pay_type",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1730400843984932906",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "1731585629294301227",
                        "type": "datarequest",
                        "desc": "产品范围-数据字典绑定",
                        "condition": "",
                        "binddic": "1729378892764024931",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1729378892764024931",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_product_range",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1730400843984932905",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "1731585629294301226",
                        "type": "datarequest",
                        "desc": "搭赠规则-数据字典绑定",
                        "condition": "",
                        "binddic": "1729700809094074467",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1729700809094074467",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_dynamic_category_promotion_bundle_rule",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1730400843984932902",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "1731585629294301225",
                        "type": "datarequest",
                        "desc": "产品单位-数据字典绑定",
                        "condition": "",
                        "binddic": "1727919589909729280",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1727919589909729280",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_product_unit",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1731568728241475668",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "1731585629294301224",
                        "type": "datarequest",
                        "desc": "赠品单位-数据字典绑定",
                        "condition": "",
                        "binddic": "1727919589909729280",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1727919589909729280",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_product_unit",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1730400843984932928",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1731585629294301223",
                "desc": "BD-TJ-表格-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301219",
                        "type": "datarequest",
                        "desc": "对付方式-数据字典绑定",
                        "condition": "",
                        "binddic": "1730385840141635682",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1730385840141635682",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_pay_type",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1731573689746591828",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "code": "1731585629294301218",
                        "type": "datarequest",
                        "desc": "产品范围-数据字典绑定",
                        "condition": "",
                        "binddic": "1729378892764024931",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1729378892764024931",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_product_range",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1731573689746591827",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1731585629294301215",
                "desc": "BD-MJ-表格-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301213",
                        "type": "datarequest",
                        "desc": "产品范围-数据字典绑定",
                        "condition": "",
                        "binddic": "1729378892764024931",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1729378892764024931",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_product_range",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1731573689746591767",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1731585629294301210",
                "desc": "BD-TY-表格-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301209",
                        "type": "datarequest",
                        "desc": "业务活动类型-数据字典绑定",
                        "condition": "",
                        "binddic": "1727962511191445602",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "0",
                                "ctrl": {
                                    "code": "",
                                    "scope": ""
                                },
                                "properties": [
                                    {
                                        "name": "dictionarycode",
                                        "value": "1727962511191445602",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "code",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "parentdickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "level",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "status",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "objectmark",
                                        "value": "xxw_business_activity_type",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "excludeids",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": [
                            {
                                "name": "pl_dictionary",
                                "datatype": "1",
                                "ctrlcode": "1731585629294301283",
                                "properties": [
                                    {
                                        "name": "dictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "id"
                                        }
                                    },
                                    {
                                        "name": "parentdictionaryid",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "parentid"
                                        }
                                    },
                                    {
                                        "name": "dickey",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "key"
                                        }
                                    },
                                    {
                                        "name": "dicvalue",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "text"
                                        }
                                    },
                                    {
                                        "name": "keypath",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": "keypath"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "code": "1731585629294301208",
                "desc": "BD-FL-表格-加载事件",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731585629294301207",
                        "type": "datarequest",
                        "desc": "数据字典绑定",
                        "condition": "",
                        "binddic": "",
                        "logiccode": "100000000001100001",
                        "mode": "1",
                        "queue": "0",
                        "_type_spe": "dictbind",
                        "bind": "",
                        "getter": [],
                        "setter": []
                    }
                ]
            },
            {
                "code": "1731841014668333152",
                "desc": "BD-DZ-B是否按达成目标终止搭赠-值改变时",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731841014668333151",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "\n\nlet getFocusRow =  Page.getArrayCtrl(\"BD-DZ-表格\")\n                .getFocusRow()\n\nlet tf = getFocusRow.getCtrl(\"BD-DZ-B是否按达成目标终止搭赠\").value\n\ndebugger\n\nif(tf==1){\n    // getFocusRow.getCtrl(\"BD-DZ-B指引赠送条件\").readonly = false\n    // getFocusRow.getCtrl(\"BD-DZ-B指引赠送条件\").required = true\n\n    getFocusRow.getCtrl(\"BD-DZ-B赠送条件x≥X件起送\").readonly = false\n    getFocusRow.getCtrl(\"BD-DZ-B赠送条件x≥X件起送\").required = true\n\n    BD-DZ-B赠送条件x≥X件起送\n}else{\n    // getFocusRow.getCtrl(\"BD-DZ-B指引赠送条件\").readonly = true\n    // getFocusRow.getCtrl(\"BD-DZ-B指引赠送条件\").required = false\n\n    getFocusRow.getCtrl(\"BD-DZ-B赠送条件x≥X件起送\").readonly = true\n    getFocusRow.getCtrl(\"BD-DZ-B赠送条件x≥X件起送\").required = false\n    \n}\n"
                    }
                ]
            },
            {
                "code": "1731841014668333140",
                "desc": "按钮-鼠标单击时",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731841014668333139",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "// let allRows = Page.getArrayCtrl(\"BD-DZ-表格\").getAllRows()\n\n// var setter = ArrayCtrlSetter()\n// setter.append('BD-DZ-B序号','BD-DZ-B序号')\n// let demo = allRows.map((item)=>{\n//     return {\n//         \"BD-DZ-B序号\":item.getCtrl(\"BD-DZ-B序号\").value\n//     }\n\n// })\n// Page.getArrayCtrl(\"BD-DZ-表格\").reload(demo,setter)\nlet getInScope = Page.getArrayCtrl(\"BD-DZ-表格\").getInScope('all', null, false)\n\n\nPage.getArrayCtrl(\"BD-DZ-表格\")\n                .reload(getInScope.sort((a, b)  => a[\"BD-DZ-B序号\"] - b[\"BD-DZ-B序号\"]))\ndebugger"
                    }
                ]
            },
            {
                "code": "1731841014668333137",
                "desc": "BD-DZ-B序号-失去焦点时",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731841014668333136",
                        "type": "flycode",
                        "desc": "flycode",
                        "condition": "",
                        "script": "// let allRows = Page.getArrayCtrl(\"BD-DZ-表格\").getAllRows()\n\n// var setter = ArrayCtrlSetter()\n// setter.append('BD-DZ-B序号','BD-DZ-B序号')\n// let demo = allRows.map((item)=>{\n//     return {\n//         \"BD-DZ-B序号\":item.getCtrl(\"BD-DZ-B序号\").value\n//     }\n\n// })\n// Page.getArrayCtrl(\"BD-DZ-表格\").reload(demo,setter)\n\n// let a = [1,1,4,5,5,7,8]\n// // console.log(a.length)\n// for (var i=0;i<a.length;i++){\n//   if(i>0&&a[i]!=a[i-1]&&a[i]!=a[i+1]){\n//     console.log(a[i])\n//     a[i]=a[i-1]+1\n//   }\n// }\n// console.log(a)\n\nlet getInScope = Page.getArrayCtrl(\"BD-DZ-表格\").getInScope('all', null, false)\n\nlet sort = getInScope.sort((a, b) => a[\"BD-DZ-B序号\"] - b[\"BD-DZ-B序号\"])\nPage.getArrayCtrl(\"BD-DZ-表格\").reload(sort)\ndebugger\nlet seq = 1\nfor (let i = 0; i < sort.length; i++) {\n\n    if (i > 0 && sort[i]['BD-DZ-B序号'] == sort[i - 1]['BD-DZ-B序号'] &&\n        sort[i]['BD-DZ-B序号'] == sort[i + 1]['BD-DZ-B序号']) {\n\n    } else {\n        sort[i]['BD-DZ-B序号'] = parseInt(sort[i - 1]['BD-DZ-B序号']) + 1\n    }\n}\n// sort.forEach((item) => {\n\n// })\n"
                    }
                ]
            },
            {
                "code": "1731867426980761698",
                "desc": "BD-DZ保存",
                "name": "",
                "successhint": "",
                "notice": "",
                "key": "",
                "condition": "",
                "remark": "",
                "_rel_export_info": "",
                "actions": [
                    {
                        "code": "1731867426980761697",
                        "type": "datasubmit",
                        "desc": "数据提交",
                        "condition": "",
                        "logiccode": "1731585629294301192",
                        "queue": "0",
                        "mode": "1",
                        "getter": [
                            {
                                "name": "xxw_promotion_giveaways",
                                "datatype": "1",
                                "ctrl": {
                                    "code": "1730400843984932944",
                                    "scope": "all"
                                },
                                "properties": [
                                    {
                                        "name": "id",
                                        "propertyname": "id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1731867426980761696",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "serial_number",
                                        "propertyname": "序号",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "1730400843984932913",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "salearea_id",
                                        "propertyname": "营销组织",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "customer_id",
                                        "propertyname": "TPM客户id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "channel_id",
                                        "propertyname": "售达方ID",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "store_id",
                                        "propertyname": "送达方id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "no_store_id",
                                        "propertyname": "剔除送达方id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "payment_method",
                                        "propertyname": "兑付方式",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_range",
                                        "propertyname": "产品范围",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_product_id",
                                        "propertyname": "活动产品id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_product_code",
                                        "propertyname": "活动产品物料编码",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_rpoduct_id",
                                        "propertyname": "赠品id",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_rpoduct_code",
                                        "propertyname": "赠品物料编码",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_period",
                                        "propertyname": "活动期间",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "start_date",
                                        "propertyname": "活动开始时间",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "end_date",
                                        "propertyname": "活动结束时间",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "complimentary_rule",
                                        "propertyname": "搭赠规则",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_group_id",
                                        "propertyname": "产品组ID（固定组合）",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_group_name",
                                        "propertyname": "产品组名称",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "complimentary_type",
                                        "propertyname": "搭赠方式",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "achieve_target_terminate_complimentary",
                                        "propertyname": "是否按达成目标终止搭赠",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "min_quantity_for_gift",
                                        "propertyname": "赠送条件≥X件起送（最小值）",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "max_quantity_for_gift",
                                        "propertyname": "赠送条件≥X件起送（最大值）",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_quantity",
                                        "propertyname": "本品数量",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "product_unit",
                                        "propertyname": "产品单位",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_quantity",
                                        "propertyname": "赠品数量",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gift_unit",
                                        "propertyname": "赠品单位",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "mutually_exclusive_with_contract_rebate",
                                        "propertyname": "是否与合同返利互斥",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "revenue_target",
                                        "propertyname": "本期收入目标折后（元）",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "achieve_same_period",
                                        "propertyname": "同期收入达成折后（元）",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "company_discount_rate",
                                        "propertyname": "公司折扣率",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "revenue_yoy_growth",
                                        "propertyname": "收入同比增长",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "current_sales_target",
                                        "propertyname": "本期销量目标",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "same_period_sales_achievement",
                                        "propertyname": "同期销量达成",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "sales_volume_yoy_growth",
                                        "propertyname": "销量同比增长",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "estimated_total_gifts",
                                        "propertyname": "预计赠品总数",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "current_discount_expense_in_cny",
                                        "propertyname": "本期折扣费用金额（元）",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "company_expense_ratio",
                                        "propertyname": "公司费用率",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "gross_margin_ratio",
                                        "propertyname": "毛利率",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_execution_cycle_start",
                                        "propertyname": "活动执行周期（变价周期）开始",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "activity_execution_cycle_end",
                                        "propertyname": "活动执行周期（变价周期）结束",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "terminal_execution_cycle_start",
                                        "propertyname": "终端执行周期（市场检核）开始2",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "terminal_execution_cycle_end",
                                        "propertyname": "终端执行周期（市场检核）结束",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "business_activity_type_description",
                                        "propertyname": "业务活动类型-C端活动说明",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "original_front_margin_of_store",
                                        "propertyname": "卖场原前台毛利",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "promotional_front_margin_of_store",
                                        "propertyname": "卖场活动前台毛利",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    },
                                    {
                                        "name": "current_pre_discount_revenue_in_cny",
                                        "propertyname": "本期折前收入（元）",
                                        "alias": "",
                                        "value": "",
                                        "ctrl": {
                                            "code": "",
                                            "component": ""
                                        }
                                    }
                                ]
                            }
                        ],
                        "setter": []
                    }
                ]
            }
        ]
    },
    "businessmodel": [
        {
            "actiontype": "1",
            "tenantdbtype": "",
            "modellogiccode": "100000000001100001",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-05-22 14:21\"}",
            "modellogicname": "字典应用查询",
            "output": [
                {
                    "objectcode": "829602839767532638",
                    "datatype": "1",
                    "name": "pl_dictionary",
                    "objectname": "业务字典",
                    "marktype": "1",
                    "properties": [
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "字典",
                            "propertytypecode": "6",
                            "name": "dictionaryid",
                            "marktype": "1",
                            "propertycode": "829609839767536111"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "父字典",
                            "propertytypecode": "1000000000",
                            "name": "parentdictionaryid",
                            "marktype": "1",
                            "propertycode": "829609839767536112"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "字典标识编码",
                            "propertytypecode": "6",
                            "name": "dictionarycode",
                            "marktype": "1",
                            "propertycode": "829609839767536113"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "字典key",
                            "propertytypecode": "1",
                            "name": "dickey",
                            "marktype": "1",
                            "propertycode": "829609839767536114"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "编码",
                            "propertytypecode": "3",
                            "name": "code",
                            "marktype": "1",
                            "propertycode": "819609111767531111"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "对接字典编码",
                            "propertytypecode": "3",
                            "name": "dickeycode",
                            "marktype": "1",
                            "propertycode": "829609839767536119"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "字典值",
                            "propertytypecode": "3",
                            "name": "dicvalue",
                            "marktype": "1",
                            "propertycode": "829609839767536115"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "字典值2",
                            "propertytypecode": "24",
                            "name": "dicvalue2",
                            "marktype": "1",
                            "propertycode": "829609839767536116"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "key路径值",
                            "propertytypecode": "4",
                            "name": "keypath",
                            "marktype": "1",
                            "propertycode": "829609839767536120"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "name路径值",
                            "propertytypecode": "4",
                            "name": "namepath",
                            "marktype": "1",
                            "propertycode": "829609839767536130"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "层级",
                            "propertytypecode": "5",
                            "name": "level",
                            "marktype": "1",
                            "propertycode": "829629839767537131"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "顺序",
                            "propertytypecode": "20",
                            "name": "seq",
                            "marktype": "1",
                            "propertycode": "829609839767536124"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "状态",
                            "propertytypecode": "18",
                            "name": "status",
                            "marktype": "1",
                            "propertycode": "829609839767536125"
                        }
                    ]
                }
            ],
            "input": [
                {
                    "objectcode": "829602839767532638",
                    "datatype": "0",
                    "name": "pl_dictionary",
                    "objectname": "业务字典",
                    "marktype": "1",
                    "properties": [
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "字典标识编码",
                            "propertytypecode": "6",
                            "name": "dictionarycode",
                            "marktype": "1",
                            "propertycode": "829609839767536113"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "编码",
                            "propertytypecode": "3",
                            "name": "code",
                            "marktype": "1",
                            "propertycode": "819609111767531111"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "关联父字典key",
                            "propertytypecode": "6",
                            "name": "parentdickey",
                            "marktype": "1",
                            "propertycode": "829609839767536230"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "层级",
                            "propertytypecode": "5",
                            "name": "level",
                            "marktype": "1",
                            "propertycode": "829629839767537131"
                        },
                        {
                            "objectcode": "829602839767532638",
                            "propertyname": "状态",
                            "propertytypecode": "18",
                            "name": "status",
                            "marktype": "1",
                            "propertycode": "829609839767536125"
                        },
                        {
                            "objectcode": "",
                            "propertyname": "对象英文名",
                            "propertytypecode": "3",
                            "name": "objectmark",
                            "marktype": "1",
                            "propertycode": ""
                        },
                        {
                            "objectcode": "",
                            "propertyname": "过滤字典id",
                            "propertytypecode": "4",
                            "name": "excludeids",
                            "marktype": "1",
                            "propertycode": ""
                        }
                    ]
                }
            ],
            "tenantdbname": "",
            "execmode": "1",
            "functionname": "",
            "actioncategory": "1",
            "tenantdbcode": "1552134600233455616",
            "modelcode": "100000000000000001",
            "marktype": "1",
            "usedatarule": "1",
            "status": 1
        },
        {
            "modellogicname": "促销活动申请-营销组织加载",
            "execmode": "1",
            "status": 1,
            "actiontype": "1",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1729704190114140239",
                    "modellogicstepcode": "1729704190114140238",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "/**\n * 促销活动申请-营销组织加载\n */\n\nvar pl_salearea = IN.pl_salearea;\nvar saleareaids = [];\nif(pl_salearea.length > 0){\n    //获取已选择的组织\n    for(var i = 0; i < pl_salearea.length; i ++){\n        if(!String.isBlank(pl_salearea[i].orgstructid)){\n            saleareaids.push(pl_salearea[i].orgstructid + '');\n        }\n    }\n}\n\nvar saleareas = \nselect ps.orgstructid \n,ps.orgname\n,po.orgaccountcode orgid__orgaccountcode\n,xsg.id groupid\n,xsg.customergroupcode\n,xsg.customergroupname\nfrom pl_salearea ps \ninner join pl_org po on po.orgid = ps.orgid\nleft join xxw_orgstruct_customer_group xcg on xcg.saleareaid = ps.orgstructid\nleft join xxw_sap_customer_group xsg on xsg.id = xcg.customergroupid\nwhere 1=1\n//已选中营销组织\n{#if saleareaids.length > 0}\n    and ps.orgstructid not in ({saleareaids})\n{#endif}\npaging\nnorule;\n\nOUT.pl_salearea = saleareas;"
                    }
                }
            ],
            "modellogiccode": "1729704190114140239",
            "marktype": "2",
            "input": [
                {
                    "name": "pl_salearea",
                    "objectcode": "800000000000000000",
                    "objectname": "营销组织",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "orgstructid",
                            "propertyname": "营销组织",
                            "propertytypecode": "1",
                            "objectcode": "800000000000000000",
                            "propertycode": "209609839761000001",
                            "marktype": "2"
                        }
                    ]
                },
                {
                    "name": "pl_org",
                    "objectcode": "800000000000000001",
                    "objectname": "组织",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "orgaccountcode",
                            "propertyname": "组织编码",
                            "propertytypecode": "3",
                            "objectcode": "800000000000000001",
                            "propertycode": "854658229836320828",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [
                {
                    "name": "pl_salearea",
                    "objectcode": "800000000000000000",
                    "objectname": "营销组织",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "orgstructid",
                            "propertyname": "营销组织",
                            "propertytypecode": "1",
                            "objectcode": "800000000000000000",
                            "propertycode": "209609839761000001",
                            "marktype": "2"
                        },
                        {
                            "name": "orgname",
                            "propertyname": "营销组织名称",
                            "propertytypecode": "2",
                            "objectcode": "800000000000000000",
                            "propertycode": "209609839761000003",
                            "marktype": "2"
                        },
                        {
                            "name": "orgid",
                            "propertyname": "组织",
                            "propertytypecode": "100000000000",
                            "objectcode": "800000000000000000",
                            "propertycode": "209609839761000011",
                            "marktype": "2"
                        },
                        {
                            "name": "orgid__orgaccountcode",
                            "propertyname": "组织编码",
                            "propertytypecode": "3",
                            "objectcode": "800000000000000001",
                            "propertycode": "854658229836320828",
                            "marktype": "2"
                        },
                        {
                            "name": "groupid",
                            "propertyname": "客户组id",
                            "propertytypecode": "6",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "customergroupcode",
                            "propertyname": "客户组编码",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "customergroupname",
                            "propertyname": "客户组名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-30 11:06\"}"
        },
        {
            "modellogicname": "促销活动申请-指引加载",
            "execmode": "1",
            "status": 1,
            "actiontype": "1",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1729757554390732863",
                    "modellogicstepcode": "1729757554390732862",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "/**\n * 促销活动申请-指引加载\n * \n * 已审批通过且未过期的促销指引\n * 1727931774765502464\t经销商渠道\n * 1727931807074226176\t现代渠道\n * 1727931853828132864\t专项指引\n */\n\nvar guide_type = IN.xxw_promotion_guide.guide_type;\nvar checkid = IN.xxw_promotion_guide.id;\n\nif(!String.isBlank(guide_type)){\n    if(guide_type == '1'){\n        //1727931774765502464\t经销商渠道\n        var promotion_guide_type = '1727931774765502464';\n    }else if(guide_type == '2'){\n        //1727931807074226176\t现代渠道\n        var promotion_guide_type = '1727931807074226176';\n    }else if(guide_type == '3'){\n        //1727931853828132864\t专项指引\n        var promotion_guide_type = '1727931853828132864';\n    }else{\n        throw new ERROR('促销指引类型有误！');\n    }\n\n    var guides = \n    select xpg.id \n    ,xpg.promotion_guide_name\n    ,xpg.guide_code\n    ,xpt.activity_type\n    from xxw_promotion_guide xpg\n    left join (\n        select '['||string_agg ('\"'||dc1.dictionaryid||'\"', ',')||']' as activity_type\n        ,b.xxw_promotion_guide_id\n        from xxw_promotion_guide_ref_business_activity_type b\n        join pl_dictionary dc1 on dc1.dickey = b.business_activity_type_id\n        group by b.xxw_promotion_guide_id\n    )xpt on xpt.xxw_promotion_guide_id = xpg.id\n    where 1=1\n    // and xpg.guide_status = 4\n    // and xpg.publication_status = 2\n    and xpg.promotion_guide_type = {promotion_guide_type}\n    //已选中的活动不加载\n    {#if !String.isBlank(checkid)}\n    and xpg.id <> {checkid}\n    {#endif}\n    paging\n    norule;\n\n    OUT.xxw_promotion_guide = guides;\n}\n\n\n\n"
                    }
                }
            ],
            "modellogiccode": "1729757554390732863",
            "marktype": "2",
            "input": [
                {
                    "name": "xxw_promotion_guide",
                    "objectcode": "1727127470760661091",
                    "objectname": "促销指引基础信息",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "id",
                            "propertytypecode": "1",
                            "objectcode": "1727127470760661091",
                            "propertycode": "1727127470760661090",
                            "marktype": "2"
                        },
                        {
                            "name": "promotion_guide_name",
                            "propertyname": "促销指引名称",
                            "propertytypecode": "3",
                            "objectcode": "1727127470760661091",
                            "propertycode": "1727127470760661191",
                            "marktype": "2"
                        },
                        {
                            "name": "guide_type",
                            "propertyname": "指引类型",
                            "propertytypecode": "18",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [
                {
                    "name": "xxw_promotion_guide",
                    "objectcode": "1727127470760661091",
                    "objectname": "促销指引基础信息",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "id",
                            "propertytypecode": "1",
                            "objectcode": "1727127470760661091",
                            "propertycode": "1727127470760661090",
                            "marktype": "2"
                        },
                        {
                            "name": "promotion_guide_name",
                            "propertyname": "促销指引名称",
                            "propertytypecode": "3",
                            "objectcode": "1727127470760661091",
                            "propertycode": "1727127470760661191",
                            "marktype": "2"
                        },
                        {
                            "name": "guide_code",
                            "propertyname": "指引编码",
                            "propertytypecode": "3",
                            "objectcode": "1727127470760661091",
                            "propertycode": "1727127470760661193",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_type",
                            "propertyname": "指引业务活动类型",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-30 11:02\"}"
        },
        {
            "modellogicname": "促销活动申请-经销商渠道详情",
            "execmode": "1",
            "status": 1,
            "actiontype": "2",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1729742655606362208",
                    "modellogicstepcode": "1729742655606362207",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "/**\n * 促销活动申请-经销商渠道详情\n */\n\nvar mainid = IN.xxw_main_promotion.id;\n\nvar promotion = \nselect xmp.id \n,xmp.relevance_type\n,xmp.guide_id\n,xmp.guide_name\n,xmp.guide_type\n,xmp.activity_name\n,xmp.channel\n,xmp.start_date\n,xmp.end_date\n,xmp.placement_scope\n,xmp.business_activity_type\n,xmp.apply_amount\n,xmp.make_amends\n,xmp.guide_exceed\n,xmp.budget_exceed\n,xmp.authorize\n,xmp.submitter\n,xmp.submitting_salearea\nfrom xxw_main_promotion xmp \nwhere xmp.id = {mainid}\nnorule;\n\nOUT.xxw_main_promotion = promotion[0];"
                    }
                }
            ],
            "modellogiccode": "1729742655606362208",
            "marktype": "2",
            "input": [
                {
                    "name": "xxw_main_promotion",
                    "objectcode": "1727995518044475490",
                    "objectname": "促销活动主表",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "1",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475489",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [
                {
                    "name": "xxw_main_promotion",
                    "objectcode": "1727995518044475490",
                    "objectname": "促销活动主表",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "1",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475489",
                            "marktype": "2"
                        },
                        {
                            "name": "relevance_type",
                            "propertyname": "关联促销指引",
                            "propertytypecode": "18",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475488",
                            "marktype": "2"
                        },
                        {
                            "name": "guide_id",
                            "propertyname": "促销指引id",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475487",
                            "marktype": "2"
                        },
                        {
                            "name": "guide_name",
                            "propertyname": "促销指引名称",
                            "propertytypecode": "3",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475486",
                            "marktype": "2"
                        },
                        {
                            "name": "guide_type",
                            "propertyname": "促销指引类型",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475485",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_name",
                            "propertyname": "促销活动名称",
                            "propertytypecode": "3",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475484",
                            "marktype": "2"
                        },
                        {
                            "name": "channel",
                            "propertyname": "渠道",
                            "propertytypecode": "4",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475483",
                            "marktype": "2"
                        },
                        {
                            "name": "start_date",
                            "propertyname": "开始日期",
                            "propertytypecode": "29",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475481",
                            "marktype": "2"
                        },
                        {
                            "name": "end_date",
                            "propertyname": "结束日期",
                            "propertytypecode": "29",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475480",
                            "marktype": "2"
                        },
                        {
                            "name": "placement_scope",
                            "propertyname": "投放范围",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475479",
                            "marktype": "2"
                        },
                        {
                            "name": "business_activity_type",
                            "propertyname": "业务活动类型",
                            "propertytypecode": "4",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475478",
                            "marktype": "2"
                        },
                        {
                            "name": "apply_amount",
                            "propertyname": "申请金额",
                            "propertytypecode": "10",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475477",
                            "marktype": "2"
                        },
                        {
                            "name": "make_amends",
                            "propertyname": "是否后补活动",
                            "propertytypecode": "18",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475476",
                            "marktype": "2"
                        },
                        {
                            "name": "guide_exceed",
                            "propertyname": "指引超标",
                            "propertytypecode": "18",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475475",
                            "marktype": "2"
                        },
                        {
                            "name": "budget_exceed",
                            "propertyname": "预算超标",
                            "propertytypecode": "18",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475474",
                            "marktype": "2"
                        },
                        {
                            "name": "authorize",
                            "propertyname": "是否授权费用",
                            "propertytypecode": "18",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475473",
                            "marktype": "2"
                        },
                        {
                            "name": "submitter",
                            "propertyname": "提交人",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475472",
                            "marktype": "2"
                        },
                        {
                            "name": "submitting_salearea",
                            "propertyname": "提交部门",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475471",
                            "marktype": "2"
                        },
                        {
                            "name": "submission_time",
                            "propertyname": "提交时间",
                            "propertytypecode": "7",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129251",
                            "marktype": "2"
                        },
                        {
                            "name": "attachment",
                            "propertyname": "附件",
                            "propertytypecode": "26",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129250",
                            "marktype": "2"
                        },
                        {
                            "name": "active_state",
                            "propertyname": "活动状态",
                            "propertytypecode": "18",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129249",
                            "marktype": "2"
                        },
                        {
                            "name": "confirm_state",
                            "propertyname": "确定状态",
                            "propertytypecode": "18",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129248",
                            "marktype": "2"
                        },
                        {
                            "name": "createtime",
                            "propertyname": "创建时间",
                            "propertytypecode": "7",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129247",
                            "marktype": "2"
                        },
                        {
                            "name": "createop",
                            "propertyname": "创建人",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129246",
                            "marktype": "2"
                        },
                        {
                            "name": "updatetime",
                            "propertyname": "更新时间",
                            "propertytypecode": "7",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129245",
                            "marktype": "2"
                        },
                        {
                            "name": "updateop",
                            "propertyname": "更新人",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129244",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_code",
                            "propertyname": "促销活动编码",
                            "propertytypecode": "3",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1728963850990129239",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-29 18:11\"}"
        },
        {
            "modellogicname": "促销活动申请-售达方加载",
            "execmode": "1",
            "status": 1,
            "actiontype": "1",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1730025035474800722",
                    "modellogicstepcode": "1730025035474800721",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "/**\n * 促销活动申请-售达方加载\n * \n * \n */\n\n//参与类型 placement_scope 1营销组织2售达方\nvar placement_scope = IN.xxw_main_promotion.placement_scope;\nvar pl_salearea = IN.pl_salearea;\nvar saleareaids = [];\nif(placement_scope == '1'){\n    //获取营销组织已选择的组织\n    for(var i = 0; i < pl_salearea.length; i ++){\n        if(!String.isBlank(pl_salearea[i].orgstructid)){\n            saleareaids.push(pl_salearea[i].orgstructid + '');\n        }\n    }\n}\n\nvar cy_channel = IN.cy_xxw_channelcustomers;\nvar bcy_channel = IN.bcy_xxw_channelcustomers;\n\nvar channelids = [];\nif(placement_scope == '1' && bcy_channel.length > 0){\n    //获取营销组织已选择的组织\n    for(var j = 0; j < bcy_channel.length; j ++){\n        if(!String.isBlank(bcy_channel[j].id)){\n            channelids.push(bcy_channel[j].id + '');\n        }\n    }\n}\nif(placement_scope == '2' && cy_channel.length > 0){\n    //获取营销组织已选择的组织\n    for(var l = 0; l < cy_channel.length; l ++){\n        if(!String.isBlank(cy_channel[l].id)){\n            channelids.push(cy_channel[l].id + '');\n        }\n    }\n}\n\n\n//售达方加载是否需要权限控制\n\nif((placement_scope == '1' && saleareaids.length > 0) || placement_scope == '2'){\n    var channelcustomers = \n    select xcs.id \n    ,xcs.channelcode\n    ,xcs.channelname\n    ,xcr.customercode\n    ,xcr.customername\n    ,xcr.channel\n    ,kce.dicvalue channel_text\n    ,xcs.saleareaid\n    ,ps.fullname as salearea_name\n    ,xcs.pricegroupname\n    from xxw_channelcustomers xcs \n    left join xxw_customer_sales_relationship xcp on xcp.channelid = xcs.id\n    left join xxw_customer xcr on xcr.id = xcp.customerid\n    left join kx_channeltype kce on kce.dickey = xcr.channel\n    left join pl_salearea ps on ps.orgstructid = xcs.saleareaid\n    where 1=1\n    //已选中售达方不加载\n    {#if channelids.length > 0}\n    and xcs.id not in ({channelids})\n    {#endif}\n    //营销组织\n    {#if saleareaids.length > 0}\n    and xcs.saleareaid in ({saleareaids})\n    {#endif}\n    //售达方名称/编码\n    {#if !String.isBlank(IN.xxw_main_promotion.channelcode)}\n    and (xcs.channelcode like {'%'+IN.xxw_main_promotion.channelcode+'%'} or xcs.channelname like {'%'+IN.xxw_main_promotion.channelcode+'%'})\n    {#endif}\n    paging\n    norule;\n\n    OUT.xxw_channelcustomers = channelcustomers;\n}\n"
                    }
                }
            ],
            "modellogiccode": "1730025035474800722",
            "marktype": "2",
            "input": [
                {
                    "name": "pl_salearea",
                    "objectcode": "800000000000000000",
                    "objectname": "营销组织",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "orgstructid",
                            "propertyname": "营销组织",
                            "propertytypecode": "1",
                            "objectcode": "800000000000000000",
                            "propertycode": "209609839761000001",
                            "marktype": "2"
                        }
                    ]
                },
                {
                    "name": "xxw_main_promotion",
                    "objectcode": "1727995518044475490",
                    "objectname": "促销活动主表",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "placement_scope",
                            "propertyname": "投放范围",
                            "propertytypecode": "6",
                            "objectcode": "1727995518044475490",
                            "propertycode": "1727995518044475479",
                            "marktype": "2"
                        },
                        {
                            "name": "channelcode",
                            "propertyname": "售达方编码",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                },
                {
                    "name": "cy_xxw_channelcustomers",
                    "objectname": "参与售达方列表",
                    "customcode": "917013140520439025",
                    "objectcode": "",
                    "marktype": "2",
                    "datatype": "1",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "6",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                },
                {
                    "name": "bcy_xxw_channelcustomers",
                    "objectname": "不参与售达方列表",
                    "customcode": "917013140733907821",
                    "objectcode": "",
                    "marktype": "2",
                    "datatype": "1",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "6",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [
                {
                    "name": "xxw_channelcustomers",
                    "objectcode": "1716626739553243221",
                    "objectname": "售达方",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "1",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243220",
                            "marktype": "2"
                        },
                        {
                            "name": "saleareaid",
                            "propertyname": "营销组织",
                            "propertytypecode": "6",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243219",
                            "marktype": "2"
                        },
                        {
                            "name": "channelcode",
                            "propertyname": "售达方编码",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243216",
                            "marktype": "2"
                        },
                        {
                            "name": "channelname",
                            "propertyname": "售达方名称",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243215",
                            "marktype": "2"
                        },
                        {
                            "name": "pricegroupname",
                            "propertyname": "价格组编码",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243205",
                            "marktype": "2"
                        },
                        {
                            "name": "customercode",
                            "propertyname": "客户编码",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "customername",
                            "propertyname": "客户名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "channel",
                            "propertyname": "渠道",
                            "propertytypecode": "6",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "channel_text",
                            "propertyname": "渠道名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "salearea_name",
                            "propertyname": "营销组织全称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-30 11:24\"}"
        },
        {
            "modellogicname": "促销活动申请-售达方前端导入",
            "execmode": "1",
            "status": 1,
            "actiontype": "5",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1730069977010147427",
                    "modellogicstepcode": "1730069977010147426",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "/**\n * 促销活动申请-不参与售达方前端导入\n */\n\nloadex(\"MapUtils\");\nload(\"importutils\");\n\n//标题列映射定义\nvar titleMappings = [\n    {\n        \"column\": \"售达方编码\",\n        \"field\": \"channelcode\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"售达方名称\",\n        \"field\": \"channelname\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"客户名称\",\n        \"field\": \"customername\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"客户编码\",\n        \"field\": \"customercode\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"渠道\",\n        \"field\": \"channel\",\n        \"type\": \"string\"\n    }\n];\n//设置标题映射\nEXCELIMP.setTitleMapping(titleMappings);\n//设置为前端导入模式\nEXCELIMP.setFrontImp(true);\n//批次号获取\nvar dynamicid = EXCELIMP.dynamicid;\n\n//结果数据\nvar outdata = [];\nfunction excelRowDataHandle (exceldata, customdata){\n    //读取exceldata转换为要输出的列表的数据集\n    //业务处理 把excel数据\n    outdata.push(exceldata)\n}\n\nEXCELIMP.setExcelRowDataHandle(excelRowDataHandle)\nEXCELIMP.execute();\n\n\n//开始导入数据处理\nvar errMsg = \"\";\nvar allErrMsg = '';\n\nif(outdata.length == 0){\n    throw new ERROR('导入模板错误或导入数据的数据类型错误，请按照填写说明和例子进行修改！')\n}\n\nvar placement_scope = IN.xxw_channelcustomers.placement_scope;\nvar pl_salearea = IN.cy_pl_salearea;\nvar saleareaids = [];\nif(placement_scope == '1'){\n    //获取营销组织已选择的组织\n    for(var i = 0; i < pl_salearea.length; i ++){\n        if(!String.isBlank(pl_salearea[i].orgstructid)){\n            saleareaids.push(pl_salearea[i].orgstructid + '');\n        }\n    }\n}\nvar check_channel = IN.check_xxw_channelcustomers;\nvar channelids = [];\nif(check_channel.length > 0){\n    //获取营销组织已选择的组织\n    for(var j = 0; j < check_channel.length; j ++){\n        if(!String.isBlank(check_channel[j].id)){\n            channelids.push(check_channel[j].id + '');\n        }\n    }\n}\n\nvar newChannelids = [];\nfor(var k = 0; k < outdata.length; k++){\n    var item = k + 2;\n    validation(outdata[k], item);\n    reverseQuery(outdata[k], item);\n\n    if(errMsg != ''){\n        allErrMsg += errMsg + '\\n';\n    }\n    errMsg = '';\n}\nOUT.newChannelids = newChannelids + ''\n\nnewChannelids.push.apply(newChannelids, channelids);\nvar outputResult = inputResults(newChannelids, placement_scope, saleareaids);\n\nif(outputResult != null){\n    OUT.xxw_channelcustomers = outputResult;\n    if(allErrMsg != \"\"){\n        FLY.info(allErrMsg);\n    }else{\n        FLY.info('导入成功！');\n    }\n}else{\n    throw new ERROR(allErrMsg);\n}\n\n\n/**\n * 统一校验函数\n * @param {Object} rowData - Excel行数据\n * @param {string} rowData.channelcode - 售达方编码\n * @param {string} rowData.channelname - 售达方名称\n * @param {string} rowData.customercode - 客户名称\n * @param {string} rowData.customername - 客户编码\n * @param item - 导入表格行数\n*/\nfunction validation(rowData, item) {\n    validationChannelcode(rowData.channelcode, item)\n    // validationCustomercode(rowData.customercode, item)\n}\n\n\n/**\n * 统一反查函数\n * @param {Object} rowData - Excel行数据\n * @param {string} rowData.channelcode - 售达方编码\n * @param {string} rowData.channelname - 售达方名称\n * @param {string} rowData.customername - 客户名称\n * @param {string} rowData.customercode - 客户编码\n*/\nfunction reverseQuery(rowData, item) {\n    var channelid = '';\n    //查询售达方信息\n    var channelcustomer = \n    select xcs.id \n    from xxw_channelcustomers xcs \n    left join xxw_customer_sales_relationship xcp on xcp.channelid = xcs.id\n    left join xxw_customer xcr on xcr.id = xcp.customerid\n    where xcs.channelcode = {rowData.channelcode}\n    // and xcr.customercode = {rowData.customercode}\n    norule;\n\n    if(channelcustomer.length == 0){\n        appendErrmsg(\"第（\"+ item + \"）行数据，售达方编码[\"+ rowData.channelcode +\"]有误；\")\n    }else{\n        if(channelids.length > 0){\n            if(channelids.includes(channelcustomer[0].id + '') == -1){\n                newChannelids.push(channelcustomer[0].id + '');\n            }\n        }else{\n            newChannelids.push(channelcustomer[0].id + '');\n        }\n    }\n}\n\n\n/**\n* 校验 Channelcode-售达方编码\n*/\nfunction validationChannelcode(data, item) {\n    if (String.isBlank(data)) {\n        appendErrmsg(\"第（\"+ item + \"）行数据，售达方编码[\" + data + \"]不能为空；\")\n    }\n}\n\n/**\n* 校验 Customercode-售达方编码\n*/\nfunction validationCustomercode(data, item) {\n    if (String.isBlank(data)) {\n        appendErrmsg(\"第（\"+ item + \"）行数据，客户编码[\" + data + \"]不能为空；\")\n    }\n}\n\n\n/**\n* 将错误信息添加到全局错误消息中。\n* @param {string} message - 要添加的错误消息。\n*/\nfunction appendErrmsg(message) {\n    errMsg += message\n}\n\n/**\n * 奖已选中数据处理成结果集合\n * @param {Object} IN.bcy_xxw_channelcustomers - 已选中不参与结果集\n */\nfunction inputResults(ids, scope, saleareas){\n    if(((scope == '1' && saleareas.length > 0) || scope == '2') && ids.length > 0){\n        //获取营销组织已选择的组织\n        var customers = \n        select xcs.id \n        ,xcs.channelcode\n        ,xcs.channelname\n        ,xcr.customercode\n        ,xcr.customername\n        ,xcr.channel\n        ,kce.dicvalue channel_text\n        ,xcs.saleareaid\n        ,ps.fullname as salearea_name\n        ,xcs.pricegroupname\n        from xxw_channelcustomers xcs \n        left join xxw_customer_sales_relationship xcp on xcp.channelid = xcs.id\n        left join xxw_customer xcr on xcr.id = xcp.customerid\n        left join kx_channeltype kce on kce.dickey = xcr.channel\n        left join pl_salearea ps on ps.orgstructid = xcs.saleareaid\n        where 1=1\n        and xcs.id in ({ids})\n        norule;\n\n        return customers;\n    }else{\n        return null;\n    }\n    \n}   "
                    }
                }
            ],
            "modellogiccode": "1730069977010147427",
            "marktype": "2",
            "input": [
                {
                    "name": "xxw_channelcustomers",
                    "objectcode": "1716626739553243221",
                    "objectname": "售达方",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "sheetnames",
                            "propertyname": "即将导入的excel的sheet页名",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "fileurl",
                            "propertyname": "待导入的excel下载路径",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "_dupstrategy",
                            "propertyname": "重复行处理策略",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "filename",
                            "propertyname": "文件名",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "placement_scope",
                            "propertyname": "投放范围",
                            "propertytypecode": "18",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                },
                {
                    "name": "check_xxw_channelcustomers",
                    "objectname": "已选中售达方列表",
                    "customcode": "917013228055426943",
                    "objectcode": "",
                    "marktype": "2",
                    "datatype": "1",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "6",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                },
                {
                    "name": "cy_pl_salearea",
                    "objectname": "参与营销组织",
                    "customcode": "917013293450523334",
                    "objectcode": "",
                    "marktype": "2",
                    "datatype": "1",
                    "properties": [
                        {
                            "name": "orgstructid",
                            "propertyname": "主键",
                            "propertytypecode": "6",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [
                {
                    "name": "xxw_channelcustomers",
                    "objectcode": "1716626739553243221",
                    "objectname": "售达方",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "1",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243220",
                            "marktype": "2"
                        },
                        {
                            "name": "saleareaid",
                            "propertyname": "营销组织",
                            "propertytypecode": "6",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243219",
                            "marktype": "2"
                        },
                        {
                            "name": "channelcode",
                            "propertyname": "售达方编码",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243216",
                            "marktype": "2"
                        },
                        {
                            "name": "channelname",
                            "propertyname": "售达方名称",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243215",
                            "marktype": "2"
                        },
                        {
                            "name": "pricegroupname",
                            "propertyname": "价格组编码",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243221",
                            "propertycode": "1716626739553243205",
                            "marktype": "2"
                        },
                        {
                            "name": "customercode",
                            "propertyname": "客户编码",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "customername",
                            "propertyname": "客户名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "channel",
                            "propertyname": "渠道",
                            "propertytypecode": "6",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "channel_text",
                            "propertyname": "渠道名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "salearea_name",
                            "propertyname": "营销组织全称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-30 17:23\"}"
        },
        {
            "modellogicname": "促销活动申请-变动类促销搭赠前端导入",
            "execmode": "1",
            "status": 1,
            "actiontype": "5",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1730400843984932885",
                    "modellogicstepcode": "1730400843984932884",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "/**\n * 促销活动申请-变动类促销搭赠前端导入\n */\n\nloadex(\"MapUtils\");\nload(\"importutils\");\n\n//标题列映射定义\nvar titleMappings = [\n    {\"column\": \"序号\",\"field\": \"serial_number\",\"type\": \"string\"},\n    {\"column\": \"营销组织编码\",\"field\": \"salearea_code\",\"type\": \"string\"},\n    {\"column\": \"营销组织名称\",\"field\": \"salearea_name\",\"type\": \"string\"},\n    {\"column\": \"客户编码\",\"field\": \"customer_code\",\"type\": \"string\"},\n    {\"column\": \"客户名称\",\"field\": \"customer_name\",\"type\": \"string\"},\n    {\"column\": \"售达方编码\",\"field\": \"channel_code\",\"type\": \"string\"},\n    {\"column\": \"售达方名称\",\"field\": \"channel_name\",\"type\": \"string\"},\n    {\"column\": \"送达方编码\",\"field\": \"store_code\",\"type\": \"string\"},\n    {\"column\": \"送达方名称\",\"field\": \"store_name\",\"type\": \"string\"},\n    {\"column\": \"剔除送达方编码\",\"field\": \"no_store_code\",\"type\": \"string\"},\n    {\"column\": \"剔除送达方名称\",\"field\": \"no_store_name\",\"type\": \"string\"},\n    {\"column\": \"兑付方式\",\"field\": \"payment_method\",\"type\": \"string\"},\n    {\"column\": \"产品范围\",\"field\": \"product_range\",\"type\": \"string\"},\n    {\"column\": \"活动产品编码\",\"field\": \"activity_product_code\",\"type\": \"string\"},\n    {\"column\": \"活动产品名称\",\"field\": \"activity_product_name\",\"type\": \"string\"},\n    {\"column\": \"赠品物料编码\",\"field\": \"gift_rpoduct_code\",\"type\": \"string\"},\n    {\"column\": \"赠品物料名称\",\"field\": \"gift_rpoduct_name\",\"type\": \"string\"},\n    {\"column\": \"活动期间\",\"field\": \"activity_period\",\"type\": \"string\"},\n    {\"column\": \"搭赠规则\",\"field\": \"complimentary_rule\",\"type\": \"string\"},\n    {\"column\": \"搭赠方式\",\"field\": \"complimentary_type\",\"type\": \"string\"},\n    {\"column\": \"是否按达成目标终止搭赠\",\"field\": \"achieve_target_terminate_complimentary\",\"type\": \"string\"},\n    {\"column\": \"赠送条件≥X件起送\",\"field\": \"quantity_for_gift\",\"type\": \"string\"},\n    {\"column\": \"本品数量\",\"field\": \"product_quantity\",\"type\": \"string\"},\n    {\"column\": \"产品单位\",\"field\": \"product_unit\",\"type\": \"string\"},\n    {\"column\": \"赠品数量\",\"field\": \"gift_quantity\",\"type\": \"string\"},\n    {\"column\": \"赠品单位\",\"field\": \"gift_unit\",\"type\": \"string\"},\n    {\"column\": \"是否与合同返利互斥\",\"field\": \"mutually_exclusive_with_contract_rebate\",\"type\": \"string\"},\n    {\"column\": \"本期收入目标折后（元）\",\"field\": \"revenue_target\",\"type\": \"string\"},\n    {\"column\": \"本期销量目标\",\"field\": \"current_sales_target\",\"type\": \"string\"}\n];\n\n//设置标题映射\nEXCELIMP.setTitleMapping(titleMappings);\n//设置为前端导入模式\nEXCELIMP.setFrontImp(true);\n//批次号获取\nvar dynamicid = EXCELIMP.dynamicid;\n\n//结果数据\nvar outdata = [];\nfunction excelRowDataHandle (exceldata, customdata){\n    //读取exceldata转换为要输出的列表的数据集\n    //业务处理 把excel数据\n    exceldata.salearea_id = exceldata.salearea_code;\n    exceldata.customer_id = exceldata.customer_code;\n    exceldata.channel_id = exceldata.channel_code;\n    exceldata.store_id = exceldata.store_code;\n    exceldata.no_store_id = exceldata.no_store_code;\n\n    outdata.push(exceldata)\n}\n\nEXCELIMP.setExcelRowDataHandle(excelRowDataHandle)\nEXCELIMP.execute();\n\n//开始导入数据处理\nvar errMsg = \"\";\nvar allErrMsg = '';\n\nif(outdata.length == 0){\n    throw new ERROR('导入模板错误或导入数据的数据类型错误，请按照填写说明和例子进行修改！')\n}\nvar listSerial = [];\nvar listSerialValue = [];\nOUT.xxw_promotion_giveaways = outdata;\n\n/**\n * 必填校验函数\n * @param {Object} rowData - Excel行数据\n */\nfunction required(rowData, item){\n    //序号\n    if(String.isBlank(rowData.serial_number)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.serial_number + \"]为空；\")\n        return;\n    }\n    //组织\n    if(String.isBlank(rowData.salearea_code)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.salearea_code + \"]为空；\")\n        return;\n    }\n    //客户\n    if(String.isBlank(rowData.customer_code)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.customer_code + \"]为空；\")\n        return;\n    }\n    //兑付方式\n    if(String.isBlank(rowData.payment_method)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.payment_method + \"]为空；\")\n        return;\n    }\n    //产品范围\n    if(String.isBlank(rowData.product_range)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.product_range + \"]为空；\")\n        return;\n    }\n    //活动期间\n    if(String.isBlank(rowData.activity_period)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.activity_period + \"]为空；\")\n        return;\n    }\n    //搭赠规则\n    if(String.isBlank(rowData.complimentary_rule)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.complimentary_rule + \"]为空；\")\n        return;\n    }\n    //搭赠方式\n    if(String.isBlank(rowData.complimentary_type)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.complimentary_type + \"]为空；\")\n        return;\n    }\n    //是否按达成目标终止搭赠\n    if(String.isBlank(rowData.achieve_target_terminate_complimentary)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.achieve_target_terminate_complimentary + \"]为空；\")\n        return;\n    }\n    //是否与合同返利互斥\n    if(String.isBlank(rowData.mutually_exclusive_with_contract_rebate)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.mutually_exclusive_with_contract_rebate + \"]为空；\")\n        return;\n    }\n    //本期收入目标折后（元）\n    if(String.isBlank(rowData.revenue_target)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.revenue_target + \"]为空；\")\n        return;\n    }\n    //本期销量目标\n    if(String.isBlank(rowData.current_sales_target)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.current_sales_target + \"]为空；\")\n        return;\n    }\n}\n\n/**\n * 序号校验\n * 仅搭赠规则伟组合类搭赠是才会出现重复序号\n * 1729703135435427840\t单品搭赠 1729703185804824576 固定组合 1729703237348626432\t任意组合\n */\nfunction checkSerial(data, item){\n    if(String.isBlank(data.serial_number)){\n        appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.serial_number + \"]为空；\")\n        return;\n    }\n    if(listSerial.indexOf(data.serial_number) != -1){\n        //重复序号、先判断搭赠规则\n        if(data.complimentary_rule != '1729703185804824576' && data.complimentary_rule != '1729703185804824576'){\n            appendErrmsg(\"第（\"+ item + \"）行数据，序号[\" + data.serial_number + \"]重复且规则不为组合类搭赠；\");\n            return;\n        }else{\n            \n        }\n    }\n}\n\n/**\n* 将错误信息添加到全局错误消息中。\n* @param {string} message - 要添加的错误消息。\n*/\nfunction appendErrmsg(message) {\n    errMsg += message\n}"
                    }
                }
            ],
            "modellogiccode": "1730400843984932885",
            "marktype": "2",
            "input": [
                {
                    "name": "xxw_promotion_giveaways",
                    "objectcode": "1730400843984932883",
                    "objectname": "促销活动变动类促销（搭赠）",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "sheetnames",
                            "propertyname": "即将导入的excel的sheet页名",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "fileurl",
                            "propertyname": "待导入的excel下载路径",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "_dupstrategy",
                            "propertyname": "重复行处理策略",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "filename",
                            "propertyname": "文件名",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [
                {
                    "name": "xxw_promotion_giveaways",
                    "objectcode": "1730400843984932883",
                    "objectname": "促销活动变动类促销（搭赠）",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "serial_number",
                            "propertyname": "序号",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932880",
                            "marktype": "2"
                        },
                        {
                            "name": "salearea_id",
                            "propertyname": "营销组织",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932878",
                            "marktype": "2"
                        },
                        {
                            "name": "customer_id",
                            "propertyname": "TPM客户id",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641315",
                            "marktype": "2"
                        },
                        {
                            "name": "channel_id",
                            "propertyname": "售达方ID",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932877",
                            "marktype": "2"
                        },
                        {
                            "name": "store_id",
                            "propertyname": "送达方id",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641314",
                            "marktype": "2"
                        },
                        {
                            "name": "no_store_id",
                            "propertyname": "剔除送达方id",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641313",
                            "marktype": "2"
                        },
                        {
                            "name": "payment_method",
                            "propertyname": "兑付方式",
                            "propertytypecode": "4",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641311",
                            "marktype": "2"
                        },
                        {
                            "name": "product_range",
                            "propertyname": "产品范围",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932876",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_product_id",
                            "propertyname": "活动产品id",
                            "propertytypecode": "6",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641310",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_product_code",
                            "propertyname": "活动产品物料编码",
                            "propertytypecode": "3",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932875",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_rpoduct_id",
                            "propertyname": "赠品id",
                            "propertytypecode": "6",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641309",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_rpoduct_code",
                            "propertyname": "赠品物料编码",
                            "propertytypecode": "2",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932874",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_period",
                            "propertyname": "活动期间",
                            "propertytypecode": "30",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932873",
                            "marktype": "2"
                        },
                        {
                            "name": "complimentary_rule",
                            "propertyname": "搭赠规则",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932872",
                            "marktype": "2"
                        },
                        {
                            "name": "complimentary_type",
                            "propertyname": "搭赠方式",
                            "propertytypecode": "18",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641305",
                            "marktype": "2"
                        },
                        {
                            "name": "achieve_target_terminate_complimentary",
                            "propertyname": "是否按达成目标终止搭赠",
                            "propertytypecode": "18",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932870",
                            "marktype": "2"
                        },
                        {
                            "name": "product_quantity",
                            "propertyname": "本品数量",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932867",
                            "marktype": "2"
                        },
                        {
                            "name": "product_unit",
                            "propertyname": "产品单位",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932866",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_quantity",
                            "propertyname": "赠品数量",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932865",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_unit",
                            "propertyname": "赠品单位",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932864",
                            "marktype": "2"
                        },
                        {
                            "name": "mutually_exclusive_with_contract_rebate",
                            "propertyname": "是否与合同返利互斥",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900238",
                            "marktype": "2"
                        },
                        {
                            "name": "revenue_target",
                            "propertyname": "本期收入目标折后（元）",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900237",
                            "marktype": "2"
                        },
                        {
                            "name": "current_sales_target",
                            "propertyname": "本期销量目标",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900233",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-01 15:47\"}"
        },
        {
            "modellogicname": "促销活动申请-客户加载",
            "execmode": "1",
            "status": 1,
            "actiontype": "1",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1731545945360961631",
                    "modellogicstepcode": "1731545945360961630",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "/**\n * 促销活动申请-客户加载\n * 加载类型 load_type （）\n */\n\nvar customers = \nselect xc.id \n,kc.dicvalue as channel_text\n,ps.orgname as salearea_text\n,ps.fullname as salearea_full\n,xc.customercode\n,xc.customername\n,xp.portraitname\n,pd.dicvalue as manuallabelname\nfrom xxw_customer xc\nleft join kx_channeltype kc on kc.dickey = xc.channel\nleft join pl_salearea ps on ps.orgstructid = xc.saleareaid\nleft join xxw_portrait_setting xp on xp.id = xc.portraitid\nleft join pl_dictionary pd on pd.dickey = xc.manuallabelid\nwhere 1=1\n//查询条件营销组织\n{#if !String.isBlank(IN.xxw_customer.saleareaid)}\nand ps.codepath like {'%' + IN.xxw_customer.saleareaid + '%'}\n{#endif}\n//查询条件渠道\n{#if !String.isBlank(IN.xxw_customer.channel)}\nand xc.channel = {IN.xxw_customer.channel}\n{#endif}\n//查询条件客户名称/编码\n{#if !String.isBlank(IN.xxw_customer.customercode)}\nand (xc.customercode like {'%' + IN.xxw_customer.customercode + '%'} or xc.customername like {'%' + IN.xxw_customer.customercode + '%'})\n{#endif}\n//查询条件客户画像\n{#if !String.isBlank(IN.xxw_customer.portraitname)}\nand xp.portraitname like {'%' + IN.xxw_customer.portraitname + '%'}\n{#endif}\n//查询条件客户标签\n{#if !String.isBlank(IN.xxw_customer.manuallabelname)}\nand pd.dicvaluelike {'%' + IN.xxw_customer.manuallabelname + '%'}\n{#endif}\npaging \nnorule;\n\nOUT.xxw_customer = customers;"
                    }
                }
            ],
            "modellogiccode": "1731545945360961631",
            "marktype": "2",
            "input": [
                {
                    "name": "xxw_customer",
                    "objectcode": "1716626739553243233",
                    "objectname": "TPM客户表",
                    "datatype": "0",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "customercode",
                            "propertyname": "客户编号",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243233",
                            "propertycode": "1716626739553243231",
                            "marktype": "2"
                        },
                        {
                            "name": "saleareaid",
                            "propertyname": "所属营销组织",
                            "propertytypecode": "6",
                            "objectcode": "1716626739553243233",
                            "propertycode": "1716626739553243229",
                            "marktype": "2"
                        },
                        {
                            "name": "channel",
                            "propertyname": "渠道",
                            "propertytypecode": "10000000000",
                            "objectcode": "1716626739553243233",
                            "propertycode": "1719537044746801212",
                            "marktype": "2"
                        },
                        {
                            "name": "portraitname",
                            "propertyname": "画像名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "manuallabelname",
                            "propertyname": "标签名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "load_type",
                            "propertyname": "加载类型",
                            "propertytypecode": "18",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [
                {
                    "name": "xxw_customer",
                    "objectcode": "1716626739553243233",
                    "objectname": "TPM客户表",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "主键",
                            "propertytypecode": "1",
                            "objectcode": "1716626739553243233",
                            "propertycode": "1716626739553243232",
                            "marktype": "2"
                        },
                        {
                            "name": "customercode",
                            "propertyname": "客户编号",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243233",
                            "propertycode": "1716626739553243231",
                            "marktype": "2"
                        },
                        {
                            "name": "customername",
                            "propertyname": "客户名称",
                            "propertytypecode": "3",
                            "objectcode": "1716626739553243233",
                            "propertycode": "1716626739553243230",
                            "marktype": "2"
                        },
                        {
                            "name": "channel_text",
                            "propertyname": "渠道名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "salearea_text",
                            "propertyname": "组织名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "salearea_full",
                            "propertyname": "组织全称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "portraitname",
                            "propertyname": "画像名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        },
                        {
                            "name": "manuallabelname",
                            "propertyname": "标签名称",
                            "propertytypecode": "3",
                            "objectcode": "",
                            "propertycode": "",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-04 14:18\"}"
        },
        {
            "modellogicname": "促销活动-变动类促销-搭赠买赠-保存",
            "execmode": "1",
            "status": 1,
            "actiontype": "3",
            "modelcode": "1728963850990129242",
            "actioncategory": "1",
            "usedatarule": "1",
            "functionname": "",
            "tenantdbtype": "2",
            "tenantdbcode": "1719611466480488448",
            "tenantdbname": "读写",
            "operations": [
                {
                    "templateref": "106",
                    "modellogicstepname": "",
                    "marktype": "2",
                    "modellogiccode": "1731585629294301192",
                    "modellogicstepcode": "1731585629294301191",
                    "seq": 1,
                    "status": "1",
                    "templateparams": {
                        "flycode": "var errMsg = \"\";\nvar validateFail = false;\n\n(function main() {\n    validation()\n\n    var isInsert = isInsertFunc()\n\n    if (isInsert) {\n        // insert()\n        FLY.log(IN)\n    } else {\n        // update()\n    }\n\n\n})()\n\n\n/**\n * 判断是否为插入操作\n * @returns {boolean}\n */\nfunction isInsertFunc() {\n    var isInsert = false\n    if (String.isBlank(IN.xxw_promotion_giveaways.id)) {\n        isInsert = true\n    }\n    return isInsert\n}\n/**\n* 插入函数\n*/\nfunction insert() {\n    var id = FLY.genId();\n    IN.xxw_promotion_giveaways.id = id;\n    \n    DB.insert(IN.xxw_promotion_giveaways);\n}\n\n/**\n* 更新验函数\n*/\nfunction update() {\n    var temp = select * from xxw_promotion_giveaways where id = { IN.xxw_promotion_giveaways.id } NORULE;\n    if (temp.length == 0){\n        throw new ERROR(\"待更新数据不存在\")\n    }\n    var xpg = IN.xxw_promotion_giveaways\n    var xxw_promotion_giveaways = temp[0]\n    // id\n    xxw_promotion_giveaways.id = xpg.id\n    // 序号\n    xxw_promotion_giveaways.serial_number = xpg.serial_number\n    // 营销组织\n    xxw_promotion_giveaways.salearea_id = xpg.salearea_id\n    // TPM客户id\n    xxw_promotion_giveaways.customer_id = xpg.customer_id\n    // 售达方ID\n    xxw_promotion_giveaways.channel_id = xpg.channel_id\n    // 送达方id\n    xxw_promotion_giveaways.store_id = xpg.store_id\n    // 剔除送达方id\n    xxw_promotion_giveaways.no_store_id = xpg.no_store_id\n    // 兑付方式\n    xxw_promotion_giveaways.payment_method = xpg.payment_method\n    // 产品范围\n    xxw_promotion_giveaways.product_range = xpg.product_range\n    // 活动产品id\n    xxw_promotion_giveaways.activity_product_id = xpg.activity_product_id\n    // 活动产品物料编码\n    xxw_promotion_giveaways.activity_product_code = xpg.activity_product_code\n    // 赠品id\n    xxw_promotion_giveaways.gift_rpoduct_id = xpg.gift_rpoduct_id\n    // 赠品物料编码\n    xxw_promotion_giveaways.gift_rpoduct_code = xpg.gift_rpoduct_code\n    // 活动期间\n    xxw_promotion_giveaways.activity_period = xpg.activity_period\n    // 活动开始时间\n    xxw_promotion_giveaways.start_date = xpg.start_date\n    // 活动结束时间\n    xxw_promotion_giveaways.end_date = xpg.end_date\n    // 搭赠规则\n    xxw_promotion_giveaways.complimentary_rule = xpg.complimentary_rule\n    // 产品组ID（固定组合）\n    xxw_promotion_giveaways.product_group_id = xpg.product_group_id\n    // 产品组名称\n    xxw_promotion_giveaways.product_group_name = xpg.product_group_name\n    // 搭赠方式\n    xxw_promotion_giveaways.complimentary_type = xpg.complimentary_type\n    // 是否按达成目标终止搭赠\n    xxw_promotion_giveaways.achieve_target_terminate_complimentary = xpg.achieve_target_terminate_complimentary\n    // 赠送条件≥X件起送（最小值）\n    xxw_promotion_giveaways.min_quantity_for_gift = xpg.min_quantity_for_gift\n    // 赠送条件≥X件起送（最大值）\n    xxw_promotion_giveaways.max_quantity_for_gift = xpg.max_quantity_for_gift\n    // 本品数量\n    xxw_promotion_giveaways.product_quantity = xpg.product_quantity\n    // 产品单位\n    xxw_promotion_giveaways.product_unit = xpg.product_unit\n    // 赠品数量\n    xxw_promotion_giveaways.gift_quantity = xpg.gift_quantity\n    // 赠品单位\n    xxw_promotion_giveaways.gift_unit = xpg.gift_unit\n    // 是否与合同返利互斥\n    xxw_promotion_giveaways.mutually_exclusive_with_contract_rebate = xpg.mutually_exclusive_with_contract_rebate\n    // 本期收入目标折后（元）\n    xxw_promotion_giveaways.revenue_target = xpg.revenue_target\n    // 同期收入达成折后（元）\n    xxw_promotion_giveaways.achieve_same_period = xpg.achieve_same_period\n    // 公司折扣率\n    xxw_promotion_giveaways.company_discount_rate = xpg.company_discount_rate\n    // 收入同比增长\n    xxw_promotion_giveaways.revenue_yoy_growth = xpg.revenue_yoy_growth\n    // 本期销量目标\n    xxw_promotion_giveaways.current_sales_target = xpg.current_sales_target\n    // 同期销量达成\n    xxw_promotion_giveaways.same_period_sales_achievement = xpg.same_period_sales_achievement\n    // 销量同比增长\n    xxw_promotion_giveaways.sales_volume_yoy_growth = xpg.sales_volume_yoy_growth\n    // 预计赠品总数\n    xxw_promotion_giveaways.estimated_total_gifts = xpg.estimated_total_gifts\n    // 本期折扣费用金额（元）\n    xxw_promotion_giveaways.current_discount_expense_in_cny = xpg.current_discount_expense_in_cny\n    // 公司费用率\n    xxw_promotion_giveaways.company_expense_ratio = xpg.company_expense_ratio\n    // 毛利率\n    xxw_promotion_giveaways.gross_margin_ratio = xpg.gross_margin_ratio\n    // 活动执行周期（变价周期）开始\n    xxw_promotion_giveaways.activity_execution_cycle_start = xpg.activity_execution_cycle_start\n    // 活动执行周期（变价周期）结束\n    xxw_promotion_giveaways.activity_execution_cycle_end = xpg.activity_execution_cycle_end\n    // 终端执行周期（市场检核）开始2\n    xxw_promotion_giveaways.terminal_execution_cycle_start = xpg.terminal_execution_cycle_start\n    // 终端执行周期（市场检核）结束\n    xxw_promotion_giveaways.terminal_execution_cycle_end = xpg.terminal_execution_cycle_end\n    // 业务活动类型-C端活动说明\n    xxw_promotion_giveaways.business_activity_type_description = xpg.business_activity_type_description\n    // 卖场原前台毛利\n    xxw_promotion_giveaways.original_front_margin_of_store = xpg.original_front_margin_of_store\n    // 卖场活动前台毛利\n    xxw_promotion_giveaways.promotional_front_margin_of_store = xpg.promotional_front_margin_of_store\n    // 本期折前收入（元）\n    xxw_promotion_giveaways.current_pre_discount_revenue_in_cny = xpg.current_pre_discount_revenue_in_cny\n    DB.update(xxw_promotion_giveaways);\n}\n\n/**\n* 统一校验函数\n*/\nfunction validation() {\n    var xpg = IN.xxw_promotion_giveaways\n    // 校验序号\n    validateSerialNumber(xpg.serial_number)\n    // 校验营销组织\n    validateSaleareaId(xpg.salearea_id)\n    // 校验TPM客户id\n    validateCustomerId(xpg.customer_id)\n    // 校验售达方ID\n    validateChannelId(xpg.channel_id)\n    // 校验送达方id\n    validateStoreId(xpg.store_id)\n    // 校验剔除送达方id\n    validateNoStoreId(xpg.no_store_id)\n    // 校验兑付方式\n    validatePaymentMethod(xpg.payment_method)\n    // 校验产品范围\n    validateProductRange(xpg.product_range)\n    // 校验活动产品id\n    validateActivityProductId(xpg.activity_product_id)\n    // 校验活动产品物料编码\n    validateActivityProductCode(xpg.activity_product_code)\n    // 校验赠品id\n    validateGiftRpoductId(xpg.gift_rpoduct_id)\n    // 校验赠品物料编码\n    validateGiftRpoductCode(xpg.gift_rpoduct_code)\n    // 校验活动期间\n    validateActivityPeriod(xpg.activity_period)\n    // 校验活动开始时间\n    validateStartDate(xpg.start_date)\n    // 校验活动结束时间\n    validateEndDate(xpg.end_date)\n    // 校验搭赠规则\n    validateComplimentaryRule(xpg.complimentary_rule)\n    // 校验产品组ID（固定组合）\n    validateProductGroupId(xpg.product_group_id)\n    // 校验产品组名称\n    validateProductGroupName(xpg.product_group_name)\n    // 校验搭赠方式\n    validateComplimentaryType(xpg.complimentary_type)\n    // 校验是否按达成目标终止搭赠\n    validateAchieveTargetTerminateComplimentary(xpg.achieve_target_terminate_complimentary)\n    // 校验赠送条件≥X件起送（最小值）\n    validateMinQuantityForGift(xpg.min_quantity_for_gift)\n    // 校验赠送条件≥X件起送（最大值）\n    validateMaxQuantityForGift(xpg.max_quantity_for_gift)\n    // 校验本品数量\n    validateProductQuantity(xpg.product_quantity)\n    // 校验产品单位\n    validateProductUnit(xpg.product_unit)\n    // 校验赠品数量\n    validateGiftQuantity(xpg.gift_quantity)\n    // 校验赠品单位\n    validateGiftUnit(xpg.gift_unit)\n    // 校验是否与合同返利互斥\n    validateMutuallyExclusiveWithContractRebate(xpg.mutually_exclusive_with_contract_rebate)\n    // 校验本期收入目标折后（元）\n    validateRevenueTarget(xpg.revenue_target)\n    // 校验同期收入达成折后（元）\n    validateAchieveSamePeriod(xpg.achieve_same_period)\n    // 校验公司折扣率\n    validateCompanyDiscountRate(xpg.company_discount_rate)\n    // 校验收入同比增长\n    validateRevenueYoyGrowth(xpg.revenue_yoy_growth)\n    // 校验本期销量目标\n    validateCurrentSalesTarget(xpg.current_sales_target)\n    // 校验同期销量达成\n    validateSamePeriodSalesAchievement(xpg.same_period_sales_achievement)\n    // 校验销量同比增长\n    validateSalesVolumeYoyGrowth(xpg.sales_volume_yoy_growth)\n    // 校验预计赠品总数\n    validateEstimatedTotalGifts(xpg.estimated_total_gifts)\n    // 校验本期折扣费用金额（元）\n    validateCurrentDiscountExpenseInCny(xpg.current_discount_expense_in_cny)\n    // 校验公司费用率\n    validateCompanyExpenseRatio(xpg.company_expense_ratio)\n    // 校验毛利率\n    validateGrossMarginRatio(xpg.gross_margin_ratio)\n    // 校验活动执行周期（变价周期）开始\n    validateActivityExecutionCycleStart(xpg.activity_execution_cycle_start)\n    // 校验活动执行周期（变价周期）结束\n    validateActivityExecutionCycleEnd(xpg.activity_execution_cycle_end)\n    // 校验终端执行周期（市场检核）开始2\n    validateTerminalExecutionCycleStart(xpg.terminal_execution_cycle_start)\n    // 校验终端执行周期（市场检核）结束\n    validateTerminalExecutionCycleEnd(xpg.terminal_execution_cycle_end)\n    // 校验卖场原前台毛利\n    validateOriginalFrontMarginOfStore(xpg.original_front_margin_of_store)\n    // 校验卖场活动前台毛利\n    validatePromotionalFrontMarginOfStore(xpg.promotional_front_margin_of_store)\n    // 校验本期折前收入（元）\n    validateCurrentPreDiscountRevenueInCny(xpg.current_pre_discount_revenue_in_cny)\n    if (validateFail) {\n        throw new ERROR(errMsg);\n    }\n}\n\n/**\n* 校验序号函数\n*/\nfunction validateSerialNumber(serial_number) {\n    var validationFailed = false\n    var validateErrMsg = \"校验序号失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验营销组织函数\n*/\nfunction validateSaleareaId(salearea_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验营销组织失败\"\n    if (String.isBlank(salearea_id)) {\n        appendErrmsg(\"营销组织不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验TPM客户id函数\n*/\nfunction validateCustomerId(customer_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验TPM客户id失败\"\n    if (String.isBlank(customer_id)) {\n        appendErrmsg(\"TPM客户id不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验售达方ID函数\n*/\nfunction validateChannelId(channel_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验售达方ID失败\"\n    if (String.isBlank(channel_id)) {\n        appendErrmsg(\"售达方ID不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验送达方id函数\n*/\nfunction validateStoreId(store_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验送达方id失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验剔除送达方id函数\n*/\nfunction validateNoStoreId(no_store_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验剔除送达方id失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验兑付方式函数\n*/\nfunction validatePaymentMethod(payment_method) {\n    var validationFailed = false\n    var validateErrMsg = \"校验兑付方式失败\"\n    if (String.isBlank(payment_method)) {\n        appendErrmsg(\"兑付方式不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验产品范围函数\n*/\nfunction validateProductRange(product_range) {\n    var validationFailed = false\n    var validateErrMsg = \"校验产品范围失败\"\n    if (String.isBlank(product_range)) {\n        appendErrmsg(\"产品范围不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验活动产品id函数\n*/\nfunction validateActivityProductId(activity_product_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验活动产品id失败\"\n    if (String.isBlank(activity_product_id)) {\n        appendErrmsg(\"活动产品id不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验活动产品物料编码函数\n*/\nfunction validateActivityProductCode(activity_product_code) {\n    var validationFailed = false\n    var validateErrMsg = \"校验活动产品物料编码失败\"\n    if (String.isBlank(activity_product_code)) {\n        appendErrmsg(\"活动产品物料编码不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验赠品id函数\n*/\nfunction validateGiftRpoductId(gift_rpoduct_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验赠品id失败\"\n    if (String.isBlank(gift_rpoduct_id)) {\n        appendErrmsg(\"赠品id不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验赠品物料编码函数\n*/\nfunction validateGiftRpoductCode(gift_rpoduct_code) {\n    var validationFailed = false\n    var validateErrMsg = \"校验赠品物料编码失败\"\n    if (String.isBlank(gift_rpoduct_code)) {\n        appendErrmsg(\"赠品物料编码不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验活动期间函数\n*/\nfunction validateActivityPeriod(activity_period) {\n    var validationFailed = false\n    var validateErrMsg = \"校验活动期间失败\"\n    if (String.isBlank(activity_period)) {\n        appendErrmsg(\"活动期间不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验活动开始时间函数\n*/\nfunction validateStartDate(start_date) {\n    var validationFailed = false\n    var validateErrMsg = \"校验活动开始时间失败\"\n    if (String.isBlank(start_date)) {\n        appendErrmsg(\"活动开始时间不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验活动结束时间函数\n*/\nfunction validateEndDate(end_date) {\n    var validationFailed = false\n    var validateErrMsg = \"校验活动结束时间失败\"\n    if (String.isBlank(end_date)) {\n        appendErrmsg(\"活动结束时间不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验搭赠规则函数\n*/\nfunction validateComplimentaryRule(complimentary_rule) {\n    var validationFailed = false\n    var validateErrMsg = \"校验搭赠规则失败\"\n    if (String.isBlank(complimentary_rule)) {\n        appendErrmsg(\"搭赠规则不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验产品组ID（固定组合）函数\n*/\nfunction validateProductGroupId(product_group_id) {\n    var validationFailed = false\n    var validateErrMsg = \"校验产品组ID（固定组合）失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验产品组名称函数\n*/\nfunction validateProductGroupName(product_group_name) {\n    var validationFailed = false\n    var validateErrMsg = \"校验产品组名称失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验搭赠方式函数\n*/\nfunction validateComplimentaryType(complimentary_type) {\n    var validationFailed = false\n    var validateErrMsg = \"校验搭赠方式失败\"\n    if (String.isBlank(complimentary_type)) {\n        appendErrmsg(\"搭赠方式不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验是否按达成目标终止搭赠函数\n*/\nfunction validateAchieveTargetTerminateComplimentary(achieve_target_terminate_complimentary) {\n    var validationFailed = false\n    var validateErrMsg = \"校验是否按达成目标终止搭赠失败\"\n    if (String.isBlank(achieve_target_terminate_complimentary)) {\n        appendErrmsg(\"是否按达成目标终止搭赠不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验赠送条件≥X件起送（最小值）函数\n*/\nfunction validateMinQuantityForGift(min_quantity_for_gift) {\n    var validationFailed = false\n    var validateErrMsg = \"校验赠送条件≥X件起送（最小值）失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验赠送条件≥X件起送（最大值）函数\n*/\nfunction validateMaxQuantityForGift(max_quantity_for_gift) {\n    var validationFailed = false\n    var validateErrMsg = \"校验赠送条件≥X件起送（最大值）失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验本品数量函数\n*/\nfunction validateProductQuantity(product_quantity) {\n    var validationFailed = false\n    var validateErrMsg = \"校验本品数量失败\"\n    if (String.isBlank(product_quantity)) {\n        appendErrmsg(\"本品数量不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验产品单位函数\n*/\nfunction validateProductUnit(product_unit) {\n    var validationFailed = false\n    var validateErrMsg = \"校验产品单位失败\"\n    if (String.isBlank(product_unit)) {\n        appendErrmsg(\"产品单位不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验赠品数量函数\n*/\nfunction validateGiftQuantity(gift_quantity) {\n    var validationFailed = false\n    var validateErrMsg = \"校验赠品数量失败\"\n    if (String.isBlank(gift_quantity)) {\n        appendErrmsg(\"赠品数量不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验赠品单位函数\n*/\nfunction validateGiftUnit(gift_unit) {\n    var validationFailed = false\n    var validateErrMsg = \"校验赠品单位失败\"\n    if (String.isBlank(gift_unit)) {\n        appendErrmsg(\"赠品单位不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验是否与合同返利互斥函数\n*/\nfunction validateMutuallyExclusiveWithContractRebate(mutually_exclusive_with_contract_rebate) {\n    var validationFailed = false\n    var validateErrMsg = \"校验是否与合同返利互斥失败\"\n    if (String.isBlank(mutually_exclusive_with_contract_rebate)) {\n        appendErrmsg(\"是否与合同返利互斥不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验本期收入目标折后（元）函数\n*/\nfunction validateRevenueTarget(revenue_target) {\n    var validationFailed = false\n    var validateErrMsg = \"校验本期收入目标折后（元）失败\"\n    if (String.isBlank(revenue_target)) {\n        appendErrmsg(\"本期收入目标折后（元）不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验同期收入达成折后（元）函数\n*/\nfunction validateAchieveSamePeriod(achieve_same_period) {\n    var validationFailed = false\n    var validateErrMsg = \"校验同期收入达成折后（元）失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验公司折扣率函数\n*/\nfunction validateCompanyDiscountRate(company_discount_rate) {\n    var validationFailed = false\n    var validateErrMsg = \"校验公司折扣率失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验收入同比增长函数\n*/\nfunction validateRevenueYoyGrowth(revenue_yoy_growth) {\n    var validationFailed = false\n    var validateErrMsg = \"校验收入同比增长失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验本期销量目标函数\n*/\nfunction validateCurrentSalesTarget(current_sales_target) {\n    var validationFailed = false\n    var validateErrMsg = \"校验本期销量目标失败\"\n    if (String.isBlank(current_sales_target)) {\n        appendErrmsg(\"本期销量目标不能为空；\")\n    }\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验同期销量达成函数\n*/\nfunction validateSamePeriodSalesAchievement(same_period_sales_achievement) {\n    var validationFailed = false\n    var validateErrMsg = \"校验同期销量达成失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验销量同比增长函数\n*/\nfunction validateSalesVolumeYoyGrowth(sales_volume_yoy_growth) {\n    var validationFailed = false\n    var validateErrMsg = \"校验销量同比增长失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验预计赠品总数函数\n*/\nfunction validateEstimatedTotalGifts(estimated_total_gifts) {\n    var validationFailed = false\n    var validateErrMsg = \"校验预计赠品总数失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验本期折扣费用金额（元）函数\n*/\nfunction validateCurrentDiscountExpenseInCny(current_discount_expense_in_cny) {\n    var validationFailed = false\n    var validateErrMsg = \"校验本期折扣费用金额（元）失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验公司费用率函数\n*/\nfunction validateCompanyExpenseRatio(company_expense_ratio) {\n    var validationFailed = false\n    var validateErrMsg = \"校验公司费用率失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验毛利率函数\n*/\nfunction validateGrossMarginRatio(gross_margin_ratio) {\n    var validationFailed = false\n    var validateErrMsg = \"校验毛利率失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验活动执行周期（变价周期）开始函数\n*/\nfunction validateActivityExecutionCycleStart(activity_execution_cycle_start) {\n    var validationFailed = false\n    var validateErrMsg = \"校验活动执行周期（变价周期）开始失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验活动执行周期（变价周期）结束函数\n*/\nfunction validateActivityExecutionCycleEnd(activity_execution_cycle_end) {\n    var validationFailed = false\n    var validateErrMsg = \"校验活动执行周期（变价周期）结束失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验终端执行周期（市场检核）开始2函数\n*/\nfunction validateTerminalExecutionCycleStart(terminal_execution_cycle_start) {\n    var validationFailed = false\n    var validateErrMsg = \"校验终端执行周期（市场检核）开始2失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验终端执行周期（市场检核）结束函数\n*/\nfunction validateTerminalExecutionCycleEnd(terminal_execution_cycle_end) {\n    var validationFailed = false\n    var validateErrMsg = \"校验终端执行周期（市场检核）结束失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验卖场原前台毛利函数\n*/\nfunction validateOriginalFrontMarginOfStore(original_front_margin_of_store) {\n    var validationFailed = false\n    var validateErrMsg = \"校验卖场原前台毛利失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验卖场活动前台毛利函数\n*/\nfunction validatePromotionalFrontMarginOfStore(promotional_front_margin_of_store) {\n    var validationFailed = false\n    var validateErrMsg = \"校验卖场活动前台毛利失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 校验本期折前收入（元）函数\n*/\nfunction validateCurrentPreDiscountRevenueInCny(current_pre_discount_revenue_in_cny) {\n    var validationFailed = false\n    var validateErrMsg = \"校验本期折前收入（元）失败\"\n    /* Write your ValidateLogicCode */\n\n    if (validationFailed) {\n        appendErrmsg(validateErrMsg);\n    }\n}\n\n/**\n* 将错误信息添加到全局错误消息中。\n* @param {string} message - 要添加的错误消息。\n*/\nfunction appendErrmsg(message) {\n    errMsg += message\n    validateFail = true\n}\n/**\n* 验证字典是否存在\n* @param {number} dictionaryid - 字典 ID\n* @param {string} dictName - 字典名称\n* @returns {void}\n*/\nfunction validateDictidExist(dictionaryid, dictName) {\n    var temp = select count(*) from pl_dictionary where dictionaryid = { dictionaryid } NORULE;\n    if (temp[0].count == 0) {\n        appendErrmsg(\"字典\" + dictName + \"不存在；\")\n    }\n}\n\n"
                    }
                }
            ],
            "modellogiccode": "1731585629294301192",
            "marktype": "2",
            "input": [
                {
                    "name": "xxw_promotion_giveaways",
                    "objectcode": "1730400843984932883",
                    "objectname": "促销活动变动类促销（搭赠/买赠）",
                    "datatype": "1",
                    "marktype": "2",
                    "properties": [
                        {
                            "name": "id",
                            "propertyname": "id",
                            "propertytypecode": "1",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932882",
                            "marktype": "2"
                        },
                        {
                            "name": "serial_number",
                            "propertyname": "序号",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932880",
                            "marktype": "2"
                        },
                        {
                            "name": "salearea_id",
                            "propertyname": "营销组织",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932878",
                            "marktype": "2"
                        },
                        {
                            "name": "customer_id",
                            "propertyname": "TPM客户id",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641315",
                            "marktype": "2"
                        },
                        {
                            "name": "channel_id",
                            "propertyname": "售达方ID",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932877",
                            "marktype": "2"
                        },
                        {
                            "name": "store_id",
                            "propertyname": "送达方id",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641314",
                            "marktype": "2"
                        },
                        {
                            "name": "no_store_id",
                            "propertyname": "剔除送达方id",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641313",
                            "marktype": "2"
                        },
                        {
                            "name": "payment_method",
                            "propertyname": "兑付方式",
                            "propertytypecode": "4",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641311",
                            "marktype": "2"
                        },
                        {
                            "name": "product_range",
                            "propertyname": "产品范围",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932876",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_product_id",
                            "propertyname": "活动产品id",
                            "propertytypecode": "6",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641310",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_product_code",
                            "propertyname": "活动产品物料编码",
                            "propertytypecode": "3",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932875",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_rpoduct_id",
                            "propertyname": "赠品id",
                            "propertytypecode": "6",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641309",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_rpoduct_code",
                            "propertyname": "赠品物料编码",
                            "propertytypecode": "2",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932874",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_period",
                            "propertyname": "活动期间",
                            "propertytypecode": "30",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932873",
                            "marktype": "2"
                        },
                        {
                            "name": "start_date",
                            "propertyname": "活动开始时间",
                            "propertytypecode": "29",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641308",
                            "marktype": "2"
                        },
                        {
                            "name": "end_date",
                            "propertyname": "活动结束时间",
                            "propertytypecode": "29",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641307",
                            "marktype": "2"
                        },
                        {
                            "name": "complimentary_rule",
                            "propertyname": "搭赠规则",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932872",
                            "marktype": "2"
                        },
                        {
                            "name": "product_group_id",
                            "propertyname": "产品组ID（固定组合）",
                            "propertytypecode": "100000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932871",
                            "marktype": "2"
                        },
                        {
                            "name": "product_group_name",
                            "propertyname": "产品组名称",
                            "propertytypecode": "3",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641306",
                            "marktype": "2"
                        },
                        {
                            "name": "complimentary_type",
                            "propertyname": "搭赠方式",
                            "propertytypecode": "18",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730455805045641305",
                            "marktype": "2"
                        },
                        {
                            "name": "achieve_target_terminate_complimentary",
                            "propertyname": "是否按达成目标终止搭赠",
                            "propertytypecode": "18",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932870",
                            "marktype": "2"
                        },
                        {
                            "name": "min_quantity_for_gift",
                            "propertyname": "赠送条件≥X件起送（最小值）",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932869",
                            "marktype": "2"
                        },
                        {
                            "name": "max_quantity_for_gift",
                            "propertyname": "赠送条件≥X件起送（最大值）",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932868",
                            "marktype": "2"
                        },
                        {
                            "name": "product_quantity",
                            "propertyname": "本品数量",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932867",
                            "marktype": "2"
                        },
                        {
                            "name": "product_unit",
                            "propertyname": "产品单位",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932866",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_quantity",
                            "propertyname": "赠品数量",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932865",
                            "marktype": "2"
                        },
                        {
                            "name": "gift_unit",
                            "propertyname": "赠品单位",
                            "propertytypecode": "10000000000",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730400843984932864",
                            "marktype": "2"
                        },
                        {
                            "name": "mutually_exclusive_with_contract_rebate",
                            "propertyname": "是否与合同返利互斥",
                            "propertytypecode": "5",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900238",
                            "marktype": "2"
                        },
                        {
                            "name": "revenue_target",
                            "propertyname": "本期收入目标折后（元）",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900237",
                            "marktype": "2"
                        },
                        {
                            "name": "achieve_same_period",
                            "propertyname": "同期收入达成折后（元）",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900236",
                            "marktype": "2"
                        },
                        {
                            "name": "company_discount_rate",
                            "propertyname": "公司折扣率",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900235",
                            "marktype": "2"
                        },
                        {
                            "name": "revenue_yoy_growth",
                            "propertyname": "收入同比增长",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900234",
                            "marktype": "2"
                        },
                        {
                            "name": "current_sales_target",
                            "propertyname": "本期销量目标",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900233",
                            "marktype": "2"
                        },
                        {
                            "name": "same_period_sales_achievement",
                            "propertyname": "同期销量达成",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900232",
                            "marktype": "2"
                        },
                        {
                            "name": "sales_volume_yoy_growth",
                            "propertyname": "销量同比增长",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900231",
                            "marktype": "2"
                        },
                        {
                            "name": "estimated_total_gifts",
                            "propertyname": "预计赠品总数",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900230",
                            "marktype": "2"
                        },
                        {
                            "name": "current_discount_expense_in_cny",
                            "propertyname": "本期折扣费用金额（元）",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900229",
                            "marktype": "2"
                        },
                        {
                            "name": "company_expense_ratio",
                            "propertyname": "公司费用率",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900228",
                            "marktype": "2"
                        },
                        {
                            "name": "gross_margin_ratio",
                            "propertyname": "毛利率",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1730155088279900227",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_execution_cycle_start",
                            "propertyname": "活动执行周期（变价周期）开始",
                            "propertytypecode": "29",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556963",
                            "marktype": "2"
                        },
                        {
                            "name": "activity_execution_cycle_end",
                            "propertyname": "活动执行周期（变价周期）结束",
                            "propertytypecode": "29",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556962",
                            "marktype": "2"
                        },
                        {
                            "name": "terminal_execution_cycle_start",
                            "propertyname": "终端执行周期（市场检核）开始2",
                            "propertytypecode": "29",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556961",
                            "marktype": "2"
                        },
                        {
                            "name": "terminal_execution_cycle_end",
                            "propertyname": "终端执行周期（市场检核）结束",
                            "propertytypecode": "29",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556960",
                            "marktype": "2"
                        },
                        {
                            "name": "business_activity_type_description",
                            "propertyname": "业务活动类型-C端活动说明",
                            "propertytypecode": "4",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556959",
                            "marktype": "2"
                        },
                        {
                            "name": "original_front_margin_of_store",
                            "propertyname": "卖场原前台毛利",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556958",
                            "marktype": "2"
                        },
                        {
                            "name": "promotional_front_margin_of_store",
                            "propertyname": "卖场活动前台毛利",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556957",
                            "marktype": "2"
                        },
                        {
                            "name": "current_pre_discount_revenue_in_cny",
                            "propertyname": "本期折前收入（元）",
                            "propertytypecode": "10",
                            "objectcode": "1730400843984932883",
                            "propertycode": "1731541837803556956",
                            "marktype": "2"
                        }
                    ]
                }
            ],
            "output": [],
            "logicscript": "",
            "uilogicscript": "",
            "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-05 11:19\"}"
        }
    ],
    "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-05 10:46\"}"
}