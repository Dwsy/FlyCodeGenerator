// import { UiProtocol } from "./formProtocol";

// let demo: UiProtocol = {
//     "pageinfo": {
//         "clientcategorycode": "1",
//         "pagetemplatecode": "200",
//         "type": "200",
//         "title": "经销商渠道促销活动",
//         "pagedescr": "web-经销商渠道促销活动",
//         "directorytypecode": "1721338722475184210",
//         "marktype": "2",
//         "versionnum": "2.0",
//         "status": "1",
//         "ref": "",
//         "code": "1721355938146947132",
//         "reportdesclist": [],
//         "ctrltitlewidth": "",
//         "ctrllayout": "",
//         "remark": ""
//     },
//     "view": {
//         "body": {
//             "title": "布局",
//             "type": "layout",
//             "display": "flex",
//             "flexdirection": "vertical",
//             "flex": "1",
//             "shape": "rect",
//             "bordercolor": "lightgray",
//             "bordersides": "",
//             "overflowy": "",
//             "code": "1721355938146947131",
//             "content": [
//                 {
//                     "type": "tabboard",
//                     "code": "1721355938146947130",
//                     "name": "costrule",
//                     "title": "固定类促销",
//                     "hidden": "0",
//                     "flexdirection": "vertical",
//                     "parent": {
//                         "flexdirection": "vertical"
//                     },
//                     "overflow": "",
//                     "flex": "1",
//                     "cards": [
//                         {
//                             "title": "基本信息",
//                             "hidden": "0",
//                             "flexdirection": "vertical",
//                             "overflow": "",
//                             "content": [
//                                 {
//                                     "type": "layout",
//                                     "code": "1721355938146947129",
//                                     "title": "布局",
//                                     "display": "flex",
//                                     "flexdirection": "vertical",
//                                     "flex": "",
//                                     "shape": "rect",
//                                     "bordercolor": "lightgray",
//                                     "bordersides": "",
//                                     "overflowy": "",
//                                     "flexwrap": "wrap",
//                                     "content": [
//                                         {
//                                             "type": "layout",
//                                             "code": "1729411162908528735",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "vertical",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "switch",
//                                                     "code": "1729411162908528734",
//                                                     "titlewidth": "110",
//                                                     "title": "关联促销指引",
//                                                     "value": "1",
//                                                     "flex": "1",
//                                                     "name": "JB-关联促销指引",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "textinput",
//                                                     "code": "1729757554390732866",
//                                                     "titlewidth": "110",
//                                                     "titleflex": "",
//                                                     "title": "关联指引id",
//                                                     "placeholder": "",
//                                                     "name": "JB-关联指引id",
//                                                     "verificationrule": "",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "textinput",
//                                                     "code": "1729757554390732850",
//                                                     "titlewidth": "110",
//                                                     "titleflex": "",
//                                                     "title": "活动申请主键",
//                                                     "placeholder": "",
//                                                     "name": "JB-活动申请主键",
//                                                     "verificationrule": "",
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "layout",
//                                             "code": "1729411162908528733",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "horizontal",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "textbutton",
//                                                     "code": "1729411162908528731",
//                                                     "name": "JB-关联指引名称",
//                                                     "title": "关联指引名称",
//                                                     "placeholder": "关联指引名称",
//                                                     "flex": "",
//                                                     "width": "65%",
//                                                     "marginright": "5%",
//                                                     "eventlist": [
//                                                         {
//                                                             "trigger": "onclicked",
//                                                             "handler": "1729757554390732878"
//                                                         },
//                                                         {
//                                                             "trigger": "onvaluechange",
//                                                             "handler": "1729757554390732860"
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "type": "textinput",
//                                                     "code": "1729411162908528732",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "指引业务活动类型",
//                                                     "placeholder": "指引业务活动类型",
//                                                     "name": "JB-指引业务活动类型",
//                                                     "verificationrule": "",
//                                                     "flex": "",
//                                                     "width": "30%",
//                                                     "readonly": "1",
//                                                     "marginleft": "",
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "layout",
//                                             "code": "1729411162908528730",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "horizontal",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "textinput",
//                                                     "code": "1721355938146947126",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "促销活动名称",
//                                                     "placeholder": "促销活动名称",
//                                                     "name": "JB-促销活动名称",
//                                                     "verificationrule": "",
//                                                     "width": "65%",
//                                                     "flex": "",
//                                                     "marginright": "5%",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "dropdownbox",
//                                                     "code": "1729411162908528729",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "渠道",
//                                                     "placeholder": "渠道",
//                                                     "name": "JB-渠道",
//                                                     "hiddenclearbtn": "0",
//                                                     "searchable": "1",
//                                                     "multiselectable": "1",
//                                                     "flex": "",
//                                                     "width": "30%",
//                                                     "eventlist": [
//                                                         {
//                                                             "trigger": "onload",
//                                                             "handler": "1721373985633079365"
//                                                         }
//                                                     ]
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "layout",
//                                             "code": "1729411162908528728",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "horizontal",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "daterange",
//                                                     "code": "1729757554390732853",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "活动时间",
//                                                     "placeholder": "活动时间",
//                                                     "name": "JB-活动时间",
//                                                     "unit": "day",
//                                                     "value": "",
//                                                     "maxdiff": "",
//                                                     "mindiff": "",
//                                                     "hiddenclearbtn": "0",
//                                                     "defranges": [],
//                                                     "format": "yyyy-MM-dd",
//                                                     "width": "65%",
//                                                     "marginright": "5%",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "dropdownbox",
//                                                     "code": "1729411162908528727",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "投放范围",
//                                                     "placeholder": "投放范围",
//                                                     "name": "JB-投放范围",
//                                                     "hiddenclearbtn": "0",
//                                                     "searchable": "0",
//                                                     "width": "30%",
//                                                     "options": [
//                                                         {
//                                                             "key": "1",
//                                                             "text": "按营销组织投放",
//                                                             "isselected": "0"
//                                                         },
//                                                         {
//                                                             "key": "2",
//                                                             "text": "按售达方投放",
//                                                             "isselected": "0"
//                                                         }
//                                                     ],
//                                                     "flex": "",
//                                                     "eventlist": [
//                                                         {
//                                                             "trigger": "onvaluechange",
//                                                             "handler": "1729673766046404663"
//                                                         }
//                                                     ]
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "layout",
//                                             "code": "1729411162908528726",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "vertical",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "picktree",
//                                                     "code": "1729411162908528725",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "业务活动类型",
//                                                     "placeholder": "业务活动类型",
//                                                     "name": "JB-业务活动类型",
//                                                     "displaystyle": "input",
//                                                     "searchable": "1",
//                                                     "multiselectable": "1",
//                                                     "hiddenclearbtn": "0",
//                                                     "expandmodel": "allexpand",
//                                                     "intermediateselectmode": "disable",
//                                                     "flex": "",
//                                                     "eventlist": [
//                                                         {
//                                                             "trigger": "onload",
//                                                             "handler": "1729757554390732857"
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "type": "textinputarea",
//                                                     "code": "1729411162908528724",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "申请说明",
//                                                     "placeholder": "",
//                                                     "name": "JB-申请说明",
//                                                     "minvisiblelinenumber": "",
//                                                     "flex": "",
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "layout",
//                                             "code": "1729411162908528723",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "horizontal",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "dropdownbox",
//                                                     "code": "1729411162908528721",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "指引超标",
//                                                     "placeholder": "指引超标",
//                                                     "name": "JB-指引超标",
//                                                     "hiddenclearbtn": "0",
//                                                     "searchable": "1",
//                                                     "width": "30%",
//                                                     "flex": "",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "link",
//                                                     "code": "1729673766046404707",
//                                                     "value": "查看",
//                                                     "title": "指引超标-查看",
//                                                     "underline": "0",
//                                                     "textalign": "left",
//                                                     "width": "5%",
//                                                     "flex": "",
//                                                     "name": "JB-指引超标-查看",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "dropdownbox",
//                                                     "code": "1729411162908528722",
//                                                     "titlewidth": "",
//                                                     "titleflex": "",
//                                                     "title": "预算超标",
//                                                     "placeholder": "预算超标",
//                                                     "name": "JB-预算超标",
//                                                     "hiddenclearbtn": "0",
//                                                     "searchable": "1",
//                                                     "width": "30%",
//                                                     "flex": "",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "link",
//                                                     "code": "1729673766046404706",
//                                                     "value": "查看",
//                                                     "title": "预算超标-查看",
//                                                     "underline": "0",
//                                                     "textalign": "left",
//                                                     "width": "5%",
//                                                     "flex": "",
//                                                     "name": "JB-预算超标-查看",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "text",
//                                                     "code": "1729673766046404699",
//                                                     "title": "",
//                                                     "linenumber": "",
//                                                     "name": "",
//                                                     "value": "是否授权费用",
//                                                     "width": "100",
//                                                     "textalign": "right",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "checkbutton",
//                                                     "code": "1729411162908528719",
//                                                     "titlewidth": "",
//                                                     "title": "",
//                                                     "text": "",
//                                                     "textalign": "left",
//                                                     "checkvalue": "1",
//                                                     "width": "20",
//                                                     "uncheckvalue": "2",
//                                                     "flex": "",
//                                                     "name": "JB-是否授权费用",
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "layout",
//                                             "code": "1729673766046404704",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "horizontal",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "textinput",
//                                                     "code": "1721355938146947109",
//                                                     "titlewidth": "110",
//                                                     "titleflex": "",
//                                                     "title": "申请人",
//                                                     "placeholder": "申请人",
//                                                     "name": "JB-申请人",
//                                                     "verificationrule": "",
//                                                     "width": "30%",
//                                                     "marginright": "5%",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "textinput",
//                                                     "code": "1721355938146947108",
//                                                     "titlewidth": "110",
//                                                     "titleflex": "",
//                                                     "title": "申请人所属部门",
//                                                     "placeholder": "申请人所属部门",
//                                                     "name": "JB-申请人所属部门",
//                                                     "verificationrule": "",
//                                                     "width": "30%",
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "layout",
//                                             "code": "1729673766046404703",
//                                             "title": "布局",
//                                             "display": "flex",
//                                             "flexdirection": "vertical",
//                                             "flex": "",
//                                             "shape": "rect",
//                                             "bordercolor": "lightgray",
//                                             "bordersides": "",
//                                             "overflowy": "",
//                                             "content": [
//                                                 {
//                                                     "type": "attachment",
//                                                     "code": "1721355938146947107",
//                                                     "titlewidth": "110",
//                                                     "titleflex": "",
//                                                     "title": "附件上传",
//                                                     "placeholder": "",
//                                                     "name": "JB-附件上传",
//                                                     "maxnumber": "",
//                                                     "accept": "",
//                                                     "maxsize": "",
//                                                     "width": "100%",
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         }
//                                     ],
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "layout",
//                                     "code": "1729673766046404702",
//                                     "title": "布局",
//                                     "display": "flex",
//                                     "flexdirection": "horizontal",
//                                     "flex": "",
//                                     "shape": "roundrect",
//                                     "bordercolor": "lightgray",
//                                     "bordersides": "",
//                                     "overflowy": "",
//                                     "margintop": "",
//                                     "marginbottom": "",
//                                     "justifycontent": "spacebetween",
//                                     "content": [
//                                         {
//                                             "type": "button",
//                                             "code": "1729673766046404701",
//                                             "title": "按钮-生成测算信息",
//                                             "name": "JB-按钮-生成测算信息",
//                                             "text": "生成测算信息",
//                                             "displaytype": "default",
//                                             "bordervisible": "0",
//                                             "bgcolor": "orange",
//                                             "width": "30%",
//                                             "marginleft": "15",
//                                             "color": "white",
//                                             "fontweight": "bold",
//                                             "margintop": "10",
//                                             "marginbottom": "5",
//                                             "eventlist": []
//                                         }
//                                     ],
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "layout",
//                                     "code": "1721355938146947099",
//                                     "title": "布局",
//                                     "display": "flex",
//                                     "flexdirection": "vertical",
//                                     "flex": "",
//                                     "shape": "rect",
//                                     "bordercolor": "lightgray",
//                                     "bordersides": "",
//                                     "overflowy": "",
//                                     "content": [
//                                         {
//                                             "type": "panel",
//                                             "code": "1729673766046404698",
//                                             "name": "JB-表格-测算信息",
//                                             "title": "表格-测算信息",
//                                             "foldstatus": "",
//                                             "mode": "",
//                                             "flexdirection": "vertical",
//                                             "content": [
//                                                 {
//                                                     "type": "link",
//                                                     "code": "1729673766046404664",
//                                                     "value": "查看：售达方所有活动的毛利及贡献率报表",
//                                                     "title": "售达方毛利及贡献率报表",
//                                                     "underline": "1",
//                                                     "textalign": "right",
//                                                     "fontweight": "normal",
//                                                     "fontsize": "",
//                                                     "name": "JB-售达方毛利及贡献率报表",
//                                                     "eventlist": []
//                                                 },
//                                                 {
//                                                     "type": "infotable",
//                                                     "code": "1721355938146947096",
//                                                     "title": "",
//                                                     "checkable": "0",
//                                                     "ispage": "1",
//                                                     "isradio": "0",
//                                                     "rowsize": "small",
//                                                     "hasheaderbar": "0",
//                                                     "datastructure": {
//                                                         "id": "id"
//                                                     },
//                                                     "stripe": "0",
//                                                     "dynamiccols": [],
//                                                     "guidecols": {
//                                                         "frozen": "1",
//                                                         "merged": "0",
//                                                         "cols": []
//                                                     },
//                                                     "groupcols": [
//                                                         {
//                                                             "title": "费用",
//                                                             "cols": [
//                                                                 "1721355938146947081",
//                                                                 "1721355938146947082",
//                                                                 "1721355938146947083"
//                                                             ]
//                                                         },
//                                                         {
//                                                             "title": "收入",
//                                                             "cols": [
//                                                                 "1721355938146947084",
//                                                                 "1721355938146947085",
//                                                                 "1721355938146947086"
//                                                             ]
//                                                         },
//                                                         {
//                                                             "title": "费用率",
//                                                             "cols": [
//                                                                 "1721355938146947087",
//                                                                 "1721355938146947088",
//                                                                 "1721355938146947089"
//                                                             ]
//                                                         }
//                                                     ],
//                                                     "operations": [],
//                                                     "rowoperations": [],
//                                                     "defpagesize": "20",
//                                                     "cols": [
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947078",
//                                                             "title": "售达方名称",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-售达方名称",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947079",
//                                                             "title": "售达方编号",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-售达方编号",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947080",
//                                                             "title": "业务活动类型",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-业务活动类型",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947081",
//                                                             "title": "本期预估费用（元）",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-本期预估费用（元）",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947082",
//                                                             "title": "同期费用（元）",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-同期费用（元）",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947083",
//                                                             "title": "环比费用（元）",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-环比费用（元）",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947084",
//                                                             "title": "本期收入目标（元）",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-本期收入目标（元）",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947085",
//                                                             "title": "同期收入目标（元）",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-同期收入目标（元）",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947086",
//                                                             "title": "环比收入目标（元）",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-环比收入目标（元）",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947087",
//                                                             "title": "本期费用率",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-本期费用率",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947088",
//                                                             "title": "同期费用率",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-同期费用率",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1721355938146947089",
//                                                             "title": "环比费用率",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "JB-CSB-环比费用率",
//                                                             "eventlist": []
//                                                         }
//                                                     ],
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         }
//                                     ],
//                                     "eventlist": []
//                                 }
//                             ]
//                         },
//                         {
//                             "title": "投放范围",
//                             "hidden": "0",
//                             "flexdirection": "vertical",
//                             "overflow": "",
//                             "content": [
//                                 {
//                                     "type": "layout",
//                                     "code": "1729673766046404695",
//                                     "title": "布局",
//                                     "display": "flex",
//                                     "flexdirection": "vertical",
//                                     "flex": "1",
//                                     "shape": "rect",
//                                     "bordercolor": "lightgray",
//                                     "bordersides": "",
//                                     "overflowy": "",
//                                     "content": [
//                                         {
//                                             "type": "text",
//                                             "code": "1729673766046404661",
//                                             "title": "提示",
//                                             "linenumber": "",
//                                             "name": "TF-提示",
//                                             "value": "基本信息未选择投放范围！请回到基本信息页签进行维护！",
//                                             "textalign": "center",
//                                             "fontweight": "bold",
//                                             "hidden": "",
//                                             "color": "red",
//                                             "flex": "",
//                                             "height": "650",
//                                             "width": "",
//                                             "fontsize": "500XP",
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "panel",
//                                             "code": "1729673766046404696",
//                                             "name": "TF-组织投放",
//                                             "title": "按营销组织投放：",
//                                             "foldstatus": "",
//                                             "mode": "",
//                                             "flexdirection": "vertical",
//                                             "hidden": "1",
//                                             "height": "500",
//                                             "flex": "",
//                                             "content": [
//                                                 {
//                                                     "type": "infotable",
//                                                     "code": "1729673766046404692",
//                                                     "title": "",
//                                                     "checkable": "1",
//                                                     "ispage": "1",
//                                                     "isradio": "0",
//                                                     "rowsize": "small",
//                                                     "hasheaderbar": "1",
//                                                     "datastructure": {
//                                                         "id": ""
//                                                     },
//                                                     "stripe": "0",
//                                                     "dynamiccols": [],
//                                                     "guidecols": {
//                                                         "frozen": "1",
//                                                         "merged": "0",
//                                                         "cols": []
//                                                     },
//                                                     "groupcols": [],
//                                                     "operations": [
//                                                         {
//                                                             "text": "新增",
//                                                             "icon": "add-circle",
//                                                             "disabled": "",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404687"
//                                                                 }
//                                                             ]
//                                                         },
//                                                         {
//                                                             "text": "删除",
//                                                             "icon": "del",
//                                                             "disabled": "le:{checkednumber} == 0",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404686"
//                                                                 }
//                                                             ]
//                                                         }
//                                                     ],
//                                                     "rowoperations": [],
//                                                     "defpagesize": "20",
//                                                     "name": "TF-参与组织",
//                                                     "height": "",
//                                                     "flex": "1",
//                                                     "cols": [
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729704190114140246",
//                                                             "title": "组织id",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-组织id",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1731629731482308648",
//                                                             "title": "组织parentid",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-组织parentid",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1731629731482308645",
//                                                             "title": "codepath",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-codepath",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404691",
//                                                             "title": "营销组织编码",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-营销组织编码",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404690",
//                                                             "title": "营销组织名称",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-营销组织名称",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729704190114140243",
//                                                             "title": "客户组id",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-客户组id",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404689",
//                                                             "title": "客户组编码",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-客户组编码",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404688",
//                                                             "title": "客户组名称",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与组织-客户组名称",
//                                                             "eventlist": []
//                                                         }
//                                                     ],
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "panel",
//                                             "code": "1729673766046404694",
//                                             "name": "TF-不参与",
//                                             "title": "不参与投放的售达方名单：",
//                                             "foldstatus": "",
//                                             "mode": "",
//                                             "flexdirection": "vertical",
//                                             "hidden": "1",
//                                             "flex": "",
//                                             "height": "500",
//                                             "content": [
//                                                 {
//                                                     "type": "infotable",
//                                                     "code": "1729673766046404685",
//                                                     "title": "",
//                                                     "checkable": "1",
//                                                     "ispage": "1",
//                                                     "isradio": "0",
//                                                     "rowsize": "small",
//                                                     "hasheaderbar": "1",
//                                                     "datastructure": {
//                                                         "id": ""
//                                                     },
//                                                     "stripe": "0",
//                                                     "dynamiccols": [],
//                                                     "guidecols": {
//                                                         "frozen": "1",
//                                                         "merged": "0",
//                                                         "cols": []
//                                                     },
//                                                     "groupcols": [],
//                                                     "operations": [
//                                                         {
//                                                             "text": "新增",
//                                                             "icon": "add-circle",
//                                                             "disabled": "",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404677"
//                                                                 }
//                                                             ]
//                                                         },
//                                                         {
//                                                             "text": "删除",
//                                                             "icon": "del",
//                                                             "disabled": "le:{checkednumber} == 0",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404676"
//                                                                 }
//                                                             ]
//                                                         },
//                                                         {
//                                                             "text": "导入",
//                                                             "icon": "import",
//                                                             "disabled": "",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404675"
//                                                                 }
//                                                             ]
//                                                         }
//                                                     ],
//                                                     "rowoperations": [],
//                                                     "defpagesize": "20",
//                                                     "name": "TF-不参与售达方",
//                                                     "flex": "1",
//                                                     "cols": [
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404684",
//                                                             "title": "渠道",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-渠道",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404681",
//                                                             "title": "客户编码",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-客户编码",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404680",
//                                                             "title": "客户名称",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-客户名称",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1730025035474800735",
//                                                             "title": "售达方id",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-售达方id",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404683",
//                                                             "title": "售达方编码",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-售达方编码",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404679",
//                                                             "title": "售达方名称",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-售达方名称",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404682",
//                                                             "title": "所属营销组织",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-所属营销组织",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404678",
//                                                             "title": "价格组编码",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "不参与售达方-价格组编码",
//                                                             "eventlist": []
//                                                         }
//                                                     ],
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "panel",
//                                             "code": "1729673766046404693",
//                                             "name": "TF-参与",
//                                             "title": "按售达方投放：",
//                                             "foldstatus": "",
//                                             "mode": "",
//                                             "flexdirection": "vertical",
//                                             "hidden": "1",
//                                             "flex": "",
//                                             "height": "500",
//                                             "content": [
//                                                 {
//                                                     "type": "infotable",
//                                                     "code": "1729673766046404674",
//                                                     "title": "",
//                                                     "checkable": "1",
//                                                     "ispage": "1",
//                                                     "isradio": "0",
//                                                     "rowsize": "small",
//                                                     "hasheaderbar": "1",
//                                                     "datastructure": {
//                                                         "id": ""
//                                                     },
//                                                     "stripe": "0",
//                                                     "dynamiccols": [],
//                                                     "guidecols": {
//                                                         "frozen": "1",
//                                                         "merged": "0",
//                                                         "cols": []
//                                                     },
//                                                     "groupcols": [],
//                                                     "operations": [
//                                                         {
//                                                             "text": "新增",
//                                                             "icon": "add-circle",
//                                                             "disabled": "",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404667"
//                                                                 }
//                                                             ]
//                                                         },
//                                                         {
//                                                             "text": "删除",
//                                                             "icon": "del",
//                                                             "disabled": "le:{checkednumber} == 0",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404666"
//                                                                 }
//                                                             ]
//                                                         },
//                                                         {
//                                                             "text": "导入",
//                                                             "icon": "import",
//                                                             "disabled": "",
//                                                             "functioncode": "",
//                                                             "eventlist": [
//                                                                 {
//                                                                     "trigger": "onclicked",
//                                                                     "handler": "1729673766046404665"
//                                                                 }
//                                                             ]
//                                                         }
//                                                     ],
//                                                     "rowoperations": [],
//                                                     "defpagesize": "20",
//                                                     "name": "TF-参与售达方",
//                                                     "flex": "1",
//                                                     "cols": [
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404671",
//                                                             "title": "渠道",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与售达方-渠道",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404673",
//                                                             "title": "客户编码",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与售达方-客户编码",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404672",
//                                                             "title": "客户名称",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与售达方-客户名称",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1730052880691499105",
//                                                             "title": "售达方id",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与售达方-售达方id",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404670",
//                                                             "title": "售达方编码",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与售达方-售达方编码",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404669",
//                                                             "title": "售达方名称",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与售达方-售达方名称",
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "tablecell",
//                                                             "code": "1729673766046404668",
//                                                             "title": "所属营销组织",
//                                                             "style": "text",
//                                                             "watermarkstyle": "clear",
//                                                             "watermarkcomposite": "blended",
//                                                             "visiblesize": "",
//                                                             "options": [],
//                                                             "sort": "0",
//                                                             "value": "",
//                                                             "iswrap": "0",
//                                                             "name": "参与售达方-所属营销组织",
//                                                             "eventlist": []
//                                                         }
//                                                     ],
//                                                     "eventlist": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         }
//                                     ],
//                                     "eventlist": []
//                                 }
//                             ]
//                         },
//                         {
//                             "title": "固定类促销",
//                             "hidden": "0",
//                             "flexdirection": "vertical",
//                             "overflow": "",
//                             "content": [
//                                 {
//                                     "type": "layout",
//                                     "code": "1721373985633079377",
//                                     "title": "布局",
//                                     "display": "flex",
//                                     "flexdirection": "vertical",
//                                     "flex": "1",
//                                     "shape": "rect",
//                                     "bordercolor": "lightgray",
//                                     "bordersides": "",
//                                     "overflowy": "",
//                                     "content": [
//                                         {
//                                             "type": "textinput",
//                                             "code": "1732214712332062774",
//                                             "titlewidth": "110",
//                                             "titleflex": "",
//                                             "title": "加载类型",
//                                             "placeholder": "加载类型",
//                                             "name": "固定类促销-加载类型",
//                                             "verificationrule": "",
//                                             "value": "GDTY",
//                                             "hidden": "1",
//                                             "eventlist": []
//                                         },
//                                         {
//                                             "type": "tabboard",
//                                             "code": "1730155088279900256",
//                                             "name": "固定类促销-tabboard",
//                                             "title": "陈列",
//                                             "hidden": "0",
//                                             "flexdirection": "vertical",
//                                             "parent": {
//                                                 "flexdirection": "vertical"
//                                             },
//                                             "overflow": "",
//                                             "flex": "1",
//                                             "cards": [
//                                                 {
//                                                     "title": "通用",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": [
//                                                         {
//                                                             "type": "editortable",
//                                                             "code": "1730155088279900255",
//                                                             "title": "",
//                                                             "roweditable": "0",
//                                                             "readonly": "",
//                                                             "required": "",
//                                                             "dynamiccols": [],
//                                                             "guidecols": {
//                                                                 "frozen": "1",
//                                                                 "merged": "0",
//                                                                 "cols": []
//                                                             },
//                                                             "stripe": "0",
//                                                             "groupcols": [],
//                                                             "total": [],
//                                                             "hasheaderbar": "1",
//                                                             "checkable": "1",
//                                                             "appendrowbyobjs": {
//                                                                 "objctrl": "",
//                                                                 "objunique": ""
//                                                             },
//                                                             "operations": [
//                                                                 {
//                                                                     "text": "新增行",
//                                                                     "icon": "add-circle",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1730155088279900254"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "复制行",
//                                                                     "icon": "copy",
//                                                                     "disabled": "le:{checkednumber} != 1",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732214712332062815"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "删除行",
//                                                                     "icon": "del",
//                                                                     "disabled": "le:{checkednumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1730455805045641290"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "导入",
//                                                                     "icon": "import",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "生成测算信息",
//                                                                     "icon": "databoard",
//                                                                     "disabled": "le:{totalnumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             ],
//                                                             "name": "GD-TY-表格",
//                                                             "height": "550",
//                                                             "cols": [
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1730155088279900247",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "营销组织",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-TY-表格营销组织",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1731629731482308642",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "客户",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-TY-表格客户",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1731629731482308641"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1731629731482308639",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "售达方",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-TY-表格售达方",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         },
//                                                                         {
//                                                                             "key": "2",
//                                                                             "text": "所有售达方",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1731629731482308638"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1731629731482308636",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "送达方",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-TY-表格送达方",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         },
//                                                                         {
//                                                                             "key": "2",
//                                                                             "text": "所有送达方",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1731629731482308635"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1731629731482308686",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "兑付方式",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-TY-表格兑付方式",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932963",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "业务活动类型",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-TY-表格业务活动类型",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932961",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "产品范围",
//                                                                     "placeholder": "产品范围",
//                                                                     "name": "GD-TY-表格产品范围",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onload",
//                                                                             "handler": "1732214712332062819"
//                                                                         },
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1732214712332062817"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732297702370316378",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动产品",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-TY-表格活动产品",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "multiselectable": "1",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1731629731482308629"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932959",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "内部订单",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-TY-表格内部订单",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932958",
//                                                                     "title": "预估费用（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-TY-表格预估费用（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1730400843984932957",
//                                                                     "titlewidth": "110",
//                                                                     "title": "公司承担费用（元）",
//                                                                     "name": "GD-TY-表格公司承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1730400843984932956",
//                                                                     "titlewidth": "110",
//                                                                     "title": "经销商承担费用（元）",
//                                                                     "name": "GD-TY-表格经销商承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1730400843984932954",
//                                                                     "titlewidth": "110",
//                                                                     "title": "活动期间收入目标（元）",
//                                                                     "name": "GD-TY-表格活动期间收入目标（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinputarea",
//                                                                     "code": "1730400843984932953",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动形式说明",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-TY-表格活动形式说明",
//                                                                     "minvisiblelinenumber": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932952",
//                                                                     "title": "同期收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-TY-表格同期收入达成  （元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932951",
//                                                                     "title": "收入同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-TY-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932950",
//                                                                     "title": "环比收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-TY-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932949",
//                                                                     "title": "环比同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-TY-表格环比同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932948",
//                                                                     "title": "公司费用率（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-TY-表格公司费用率（%）",
//                                                                     "eventlist": []
//                                                                 }
//                                                             ],
//                                                             "eventlist": []
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "title": "陈列",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": [
//                                                         {
//                                                             "type": "editortable",
//                                                             "code": "1732214712332062812",
//                                                             "title": "",
//                                                             "roweditable": "0",
//                                                             "readonly": "",
//                                                             "required": "",
//                                                             "dynamiccols": [],
//                                                             "guidecols": {
//                                                                 "frozen": "1",
//                                                                 "merged": "0",
//                                                                 "cols": []
//                                                             },
//                                                             "stripe": "0",
//                                                             "groupcols": [],
//                                                             "total": [],
//                                                             "hasheaderbar": "1",
//                                                             "checkable": "1",
//                                                             "appendrowbyobjs": {
//                                                                 "objctrl": "",
//                                                                 "objunique": ""
//                                                             },
//                                                             "operations": [
//                                                                 {
//                                                                     "text": "新增行",
//                                                                     "icon": "add-circle",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732214712332062788"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "复制行",
//                                                                     "icon": "copy",
//                                                                     "disabled": "le:{checkednumber} != 1",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732214712332062786"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "删除行",
//                                                                     "icon": "del",
//                                                                     "disabled": "le:{checkednumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732214712332062784"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "导入",
//                                                                     "icon": "import",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "生成测算信息",
//                                                                     "icon": "databoard",
//                                                                     "disabled": "le:{totalnumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             ],
//                                                             "name": "GD-CL-表格",
//                                                             "height": "550",
//                                                             "cols": [
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1732214712332062811",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "营销组织",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CL-表格营销组织",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732214712332062810",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "客户",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-CL-表格客户",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1732214712332062778"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732214712332062809",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "售达方",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-CL-表格售达方",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         },
//                                                                         {
//                                                                             "key": "2",
//                                                                             "text": "所有售达方",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1732214712332062773"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732214712332062792",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "网点名称",
//                                                                     "placeholder": "网点名称",
//                                                                     "name": "GD-CL-表格网点名称",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "multiselectable": "1",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1732214712332062771"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1732214712332062807",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "兑付方式",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CL-表格兑付方式",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732214712332062791",
//                                                                     "titlewidth": "110",
//                                                                     "title": "终端数量（家）",
//                                                                     "name": "GD-CL-表格终端数量（家）",
//                                                                     "decimaldigits": "0",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "0",
//                                                                     "minus": "0",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinputarea",
//                                                                     "code": "1732214712332062798",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "陈列执行说明",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CL-表格陈列执行说明",
//                                                                     "minvisiblelinenumber": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732214712332062802",
//                                                                     "title": "预估费用（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CL-表格预估费用（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732214712332062801",
//                                                                     "titlewidth": "110",
//                                                                     "title": "公司承担费用（元）",
//                                                                     "name": "GD-CL-表格公司承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732214712332062800",
//                                                                     "titlewidth": "110",
//                                                                     "title": "经销商承担费用（元）",
//                                                                     "name": "GD-CL-表格经销商承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1732214712332062790",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动期间销量目标",
//                                                                     "placeholder": "活动期间销量目标",
//                                                                     "name": "GD-CL-表格活动期间销量目标",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732214712332062799",
//                                                                     "titlewidth": "110",
//                                                                     "title": "活动期间收入目标（元）",
//                                                                     "name": "GD-CL-表格活动期间收入目标（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinputarea",
//                                                                     "code": "1732214712332062789",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动形式说明",
//                                                                     "placeholder": "活动形式说明",
//                                                                     "name": "GD-CL-表格活动形式说明",
//                                                                     "minvisiblelinenumber": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732214712332062797",
//                                                                     "title": "同期收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CL-表格同期收入达成  （元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732214712332062796",
//                                                                     "title": "收入同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CL-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732214712332062795",
//                                                                     "title": "环比收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CL-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732214712332062794",
//                                                                     "title": "环比同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CL-表格环比同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732214712332062793",
//                                                                     "title": "公司费用率（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CL-表格公司费用率（%）",
//                                                                     "eventlist": []
//                                                                 }
//                                                             ],
//                                                             "eventlist": []
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "title": "促销员",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": [
//                                                         {
//                                                             "type": "editortable",
//                                                             "code": "1732297702370316377",
//                                                             "title": "",
//                                                             "roweditable": "0",
//                                                             "readonly": "",
//                                                             "required": "",
//                                                             "dynamiccols": [],
//                                                             "guidecols": {
//                                                                 "frozen": "1",
//                                                                 "merged": "0",
//                                                                 "cols": []
//                                                             },
//                                                             "stripe": "0",
//                                                             "groupcols": [],
//                                                             "total": [],
//                                                             "hasheaderbar": "1",
//                                                             "checkable": "1",
//                                                             "appendrowbyobjs": {
//                                                                 "objctrl": "",
//                                                                 "objunique": ""
//                                                             },
//                                                             "operations": [
//                                                                 {
//                                                                     "text": "新增行",
//                                                                     "icon": "add-circle",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732311468898127938"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "复制行",
//                                                                     "icon": "copy",
//                                                                     "disabled": "le:{checkednumber} != 1",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732311468898127936"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "删除行",
//                                                                     "icon": "del",
//                                                                     "disabled": "le:{checkednumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732311468898127934"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "导入",
//                                                                     "icon": "import",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "生成测算信息",
//                                                                     "icon": "databoard",
//                                                                     "disabled": "le:{totalnumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             ],
//                                                             "name": "GD-CX-表格",
//                                                             "height": "550",
//                                                             "cols": [
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1732297702370316376",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "营销组织",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CX-表格营销组织",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732297702370316375",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "客户",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-CX-表格客户",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1732311468898127932"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732297702370316374",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "售达方",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-CX-表格售达方",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         },
//                                                                         {
//                                                                             "key": "2",
//                                                                             "text": "所有售达方",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1732311468898127930"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732297702370316373",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "送达方",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-CX-表格送达方",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         },
//                                                                         {
//                                                                             "key": "2",
//                                                                             "text": "所有送达方",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1732311468898127928"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1732297702370316372",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "兑付方式",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CX-表格兑付方式",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732311468898127971",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "促销员类型",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-CX-表格促销员类型",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732311468898127970",
//                                                                     "titlewidth": "110",
//                                                                     "title": "人员总数（人）",
//                                                                     "decimaldigits": "0",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "0",
//                                                                     "minus": "0",
//                                                                     "name": "GD-CX-表格人员总数（人）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1732311468898127968",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "促销天数（天）",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CX-表格促销天数（天）",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1732311468898127967",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "每天工资（元）",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CX-表格每天工资（元）",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127966",
//                                                                     "title": "工资总数（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CX-表格工资总数（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732297702370316366",
//                                                                     "titlewidth": "110",
//                                                                     "title": "公司承担费用（元）",
//                                                                     "name": "GD-CX-表格公司承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732297702370316365",
//                                                                     "titlewidth": "110",
//                                                                     "title": "经销商承担费用（元）",
//                                                                     "name": "GD-CX-表格经销商承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1732311468898127965",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动期间销量目标",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CX-表格活动期间销量目标",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732297702370316364",
//                                                                     "titlewidth": "110",
//                                                                     "title": "活动期间收入目标（元）",
//                                                                     "name": "GD-CX-表格活动期间收入目标（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinputarea",
//                                                                     "code": "1732297702370316363",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动形式说明",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-CX-表格活动形式说明",
//                                                                     "minvisiblelinenumber": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732297702370316362",
//                                                                     "title": "同期收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CX-表格同期收入达成  （元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732297702370316361",
//                                                                     "title": "收入同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CX-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732297702370316360",
//                                                                     "title": "环比收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CX-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732297702370316359",
//                                                                     "title": "环比同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CX-表格环比同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732297702370316358",
//                                                                     "title": "公司费用率（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-CX-表格公司费用率（%）",
//                                                                     "eventlist": []
//                                                                 }
//                                                             ],
//                                                             "eventlist": []
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "title": "物料",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": [
//                                                         {
//                                                             "type": "editortable",
//                                                             "code": "1732311468898127964",
//                                                             "title": "",
//                                                             "roweditable": "0",
//                                                             "readonly": "",
//                                                             "required": "",
//                                                             "dynamiccols": [],
//                                                             "guidecols": {
//                                                                 "frozen": "1",
//                                                                 "merged": "0",
//                                                                 "cols": []
//                                                             },
//                                                             "stripe": "0",
//                                                             "groupcols": [],
//                                                             "total": [],
//                                                             "hasheaderbar": "1",
//                                                             "checkable": "1",
//                                                             "appendrowbyobjs": {
//                                                                 "objctrl": "",
//                                                                 "objunique": ""
//                                                             },
//                                                             "operations": [
//                                                                 {
//                                                                     "text": "新增行",
//                                                                     "icon": "add-circle",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732311468898127926"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "复制行",
//                                                                     "icon": "copy",
//                                                                     "disabled": "le:{checkednumber} != 1",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732311468898127924"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "删除行",
//                                                                     "icon": "del",
//                                                                     "disabled": "le:{checkednumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1732311468898127922"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "导入",
//                                                                     "icon": "import",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "生成测算信息",
//                                                                     "icon": "databoard",
//                                                                     "disabled": "le:{totalnumber} == 0",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             ],
//                                                             "name": "GD-WL-表格",
//                                                             "height": "550",
//                                                             "cols": [
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1732311468898127963",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "营销组织",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-WL-表格营销组织",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732311468898127962",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "客户",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-WL-表格客户",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1731629731482308641"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732311468898127961",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "售达方",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-WL-表格售达方",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         },
//                                                                         {
//                                                                             "key": "2",
//                                                                             "text": "所有售达方",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1731629731482308638"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732311468898127960",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "送达方",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-WL-表格送达方",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "0",
//                                                                     "options": [
//                                                                         {
//                                                                             "key": "1",
//                                                                             "text": "请选择",
//                                                                             "isselected": "0"
//                                                                         },
//                                                                         {
//                                                                             "key": "2",
//                                                                             "text": "所有送达方",
//                                                                             "isselected": "0"
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1731629731482308635"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1732311468898127959",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "兑付方式",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-WL-表格兑付方式",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732311468898127958",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "领用类型",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-WL-表格领用类型",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732311468898127944",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "物料名称",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-WL-表格物料名称",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732311468898127943",
//                                                                     "titlewidth": "110",
//                                                                     "title": "数量",
//                                                                     "name": "GD-WL-表格数量",
//                                                                     "decimaldigits": "0",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "0",
//                                                                     "minus": "0",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1732311468898127942",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "单位",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "GD-WL-表格单位",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127941",
//                                                                     "title": "成本价（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格成本价（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127940",
//                                                                     "title": "SAP供货价（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格SAP供货价（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127954",
//                                                                     "title": "预估费用（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格预估费用（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732311468898127953",
//                                                                     "titlewidth": "110",
//                                                                     "title": "公司承担费用（元）",
//                                                                     "name": "GD-WL-表格公司承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732311468898127952",
//                                                                     "titlewidth": "110",
//                                                                     "title": "经销商承担费用（元）",
//                                                                     "name": "GD-WL-表格经销商承担费用（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1732311468898127939",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动期间销量目标",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-WL-表格活动期间销量目标",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1732311468898127951",
//                                                                     "titlewidth": "110",
//                                                                     "title": "活动期间收入目标（元）",
//                                                                     "name": "GD-WL-表格活动期间收入目标（元）",
//                                                                     "decimaldigits": "2",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "1",
//                                                                     "minus": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinputarea",
//                                                                     "code": "1732311468898127950",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动形式说明",
//                                                                     "placeholder": "",
//                                                                     "name": "GD-WL-表格活动形式说明",
//                                                                     "minvisiblelinenumber": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127949",
//                                                                     "title": "同期收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格同期收入达成  （元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127948",
//                                                                     "title": "收入同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127947",
//                                                                     "title": "环比收入达成  （元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格收入同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127946",
//                                                                     "title": "环比同比增长（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格环比同比增长（%）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1732311468898127945",
//                                                                     "title": "公司费用率（%）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "GD-WL-表格公司费用率（%）",
//                                                                     "eventlist": []
//                                                                 }
//                                                             ],
//                                                             "eventlist": []
//                                                         }
//                                                     ]
//                                                 }
//                                             ],
//                                             "eventlist": [
//                                                 {
//                                                     "trigger": "onvaluechange",
//                                                     "handler": "1732214712332062776"
//                                                 }
//                                             ]
//                                         }
//                                     ],
//                                     "eventlist": []
//                                 }
//                             ]
//                         },
//                         {
//                             "title": "变动类促销",
//                             "hidden": "0",
//                             "flexdirection": "vertical",
//                             "overflow": "",
//                             "content": [
//                                 {
//                                     "type": "layout",
//                                     "code": "1730400843984932947",
//                                     "title": "布局",
//                                     "display": "flex",
//                                     "flexdirection": "vertical",
//                                     "flex": "1",
//                                     "shape": "rect",
//                                     "bordercolor": "lightgray",
//                                     "bordersides": "",
//                                     "overflowy": "",
//                                     "content": [
//                                         {
//                                             "type": "tabboard",
//                                             "code": "1730400843984932946",
//                                             "name": "变动类促销-tabboard",
//                                             "title": "返利",
//                                             "hidden": "0",
//                                             "flexdirection": "vertical",
//                                             "parent": {
//                                                 "flexdirection": "vertical"
//                                             },
//                                             "overflow": "",
//                                             "flex": "1",
//                                             "cards": [
//                                                 {
//                                                     "title": "搭赠",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": [
//                                                         {
//                                                             "type": "layout",
//                                                             "code": "1730455805045641302",
//                                                             "title": "布局",
//                                                             "display": "flex",
//                                                             "flexdirection": "horizontal",
//                                                             "flex": "",
//                                                             "shape": "rect",
//                                                             "bordercolor": "lightgray",
//                                                             "bordersides": "",
//                                                             "overflowy": "",
//                                                             "justifycontent": "flexend",
//                                                             "content": [
//                                                                 {
//                                                                     "type": "switch",
//                                                                     "code": "1730400843984932888",
//                                                                     "titlewidth": "",
//                                                                     "titleflex": "60%",
//                                                                     "title": "是否与合同返利互斥：",
//                                                                     "placeholder": "",
//                                                                     "name": "BD-DZ-是否与合同返利互斥",
//                                                                     "displaystyle": "",
//                                                                     "value": "1",
//                                                                     "ontext": "",
//                                                                     "offtext": "",
//                                                                     "flex": "",
//                                                                     "eventlist": []
//                                                                 }
//                                                             ],
//                                                             "eventlist": []
//                                                         },
//                                                         {
//                                                             "type": "editortable",
//                                                             "code": "1730400843984932944",
//                                                             "title": "",
//                                                             "roweditable": "0",
//                                                             "readonly": "",
//                                                             "required": "",
//                                                             "dynamiccols": [],
//                                                             "guidecols": {
//                                                                 "frozen": "1",
//                                                                 "merged": "1",
//                                                                 "cols": [
//                                                                     "1730400843984932913"
//                                                                 ]
//                                                             },
//                                                             "stripe": "0",
//                                                             "groupcols": [],
//                                                             "total": [],
//                                                             "hasheaderbar": "1",
//                                                             "checkable": "1",
//                                                             "appendrowbyobjs": {
//                                                                 "objctrl": "",
//                                                                 "objunique": ""
//                                                             },
//                                                             "operations": [
//                                                                 {
//                                                                     "text": "新增行",
//                                                                     "icon": "add-circle",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "复制行",
//                                                                     "icon": "copy",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "删除行",
//                                                                     "icon": "del",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": ""
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "text": "导入",
//                                                                     "icon": "import",
//                                                                     "disabled": "",
//                                                                     "functioncode": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onclicked",
//                                                                             "handler": "1730400843984932886"
//                                                                         }
//                                                                     ]
//                                                                 }
//                                                             ],
//                                                             "name": "BD-DZ-表格",
//                                                             "flex": "",
//                                                             "height": "550",
//                                                             "cols": [
//                                                                 {
//                                                                     "type": "number",
//                                                                     "code": "1730400843984932913",
//                                                                     "titlewidth": "110",
//                                                                     "title": "序号",
//                                                                     "decimaldigits": "0",
//                                                                     "addcount": "1",
//                                                                     "thousandsseparators": "0",
//                                                                     "minus": "0",
//                                                                     "name": "BD-DZ-B序号",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "picktree",
//                                                                     "code": "1730400843984932912",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "营销组织",
//                                                                     "placeholder": "",
//                                                                     "name": "BD-DZ-B营销组织",
//                                                                     "displaystyle": "input",
//                                                                     "searchable": "1",
//                                                                     "multiselectable": "0",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "expandmodel": "allexpand",
//                                                                     "intermediateselectmode": "disable",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932911",
//                                                                     "title": "客户",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B客户",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932910",
//                                                                     "title": "售达方",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B售达方",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932909",
//                                                                     "title": "送达方",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B送达方",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932908",
//                                                                     "title": "剔除送达方",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B剔除送达方",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932907",
//                                                                     "title": "送达方数量  (家)",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B送达方数量  (家)",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932906",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "兑付方式",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B兑付方式",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932905",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "产品范围",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B产品范围",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932904",
//                                                                     "title": "活动产品",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B活动产品",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932903",
//                                                                     "title": "赠品名称",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B赠品名称",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "daterange",
//                                                                     "code": "1730400843984932936",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "活动期间",
//                                                                     "placeholder": "",
//                                                                     "name": "BD-DZ-B活动期间",
//                                                                     "unit": "day",
//                                                                     "value": "day(-1,1)",
//                                                                     "maxdiff": "",
//                                                                     "mindiff": "",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "defranges": [],
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932902",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "搭赠规则",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B搭赠规则",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730455805045641303",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "搭赠方式",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B搭赠方式",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932901",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "是否按达成目标终止搭赠",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B是否按达成目标终止搭赠",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "numberinputrange",
//                                                                     "code": "1730400843984932900",
//                                                                     "titlewidth": "110",
//                                                                     "title": "赠送条件≥X件起送",
//                                                                     "thousandsseparators": "1",
//                                                                     "decimaldigits": "2",
//                                                                     "minus": "1",
//                                                                     "name": "BD-DZ-B赠送条件≥X件起送",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1730400843984932899",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "本品数量",
//                                                                     "placeholder": "",
//                                                                     "name": "BD-DZ-B本品数量",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932898",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "产品单位",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B产品单位",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1730400843984932929",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "赠品数量",
//                                                                     "placeholder": "",
//                                                                     "name": "BD-DZ-B赠品数量",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932928",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "赠品单位",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B赠品单位",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "dropdownbox",
//                                                                     "code": "1730400843984932927",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "是否与合同返利互斥",
//                                                                     "placeholder": "请选择",
//                                                                     "name": "BD-DZ-B是否与合同返利互斥",
//                                                                     "hiddenclearbtn": "0",
//                                                                     "searchable": "1",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932926",
//                                                                     "title": "公司折扣率",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B公司折扣率",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1730400843984932925",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "本期收入目标  折后（元）",
//                                                                     "placeholder": "",
//                                                                     "name": "BD-DZ-B本期收入目标  折后（元）",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": [
//                                                                         {
//                                                                             "trigger": "onvaluechange",
//                                                                             "handler": "1730123032493690971"
//                                                                         }
//                                                                     ]
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932897",
//                                                                     "title": "同期收入达成  折后（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B同期收入达成  折后（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932896",
//                                                                     "title": "收入同比增长",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B收入同比增长",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "textinput",
//                                                                     "code": "1730400843984932922",
//                                                                     "titlewidth": "110",
//                                                                     "titleflex": "",
//                                                                     "title": "本期销量目标",
//                                                                     "placeholder": "",
//                                                                     "name": "BD-DZ-B本期销量目标",
//                                                                     "verificationrule": "",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932895",
//                                                                     "title": "同期销量达成",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B同期销量达成",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932894",
//                                                                     "title": "销量同比增长",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B销量同比增长",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932893",
//                                                                     "title": "预计赠品总数",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B预计赠品总数",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932892",
//                                                                     "title": "本期折扣费用金额（元）",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B本期折扣费用金额（元）",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932891",
//                                                                     "title": "公司费用率",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B公司费用率",
//                                                                     "eventlist": []
//                                                                 },
//                                                                 {
//                                                                     "type": "tablecell",
//                                                                     "code": "1730400843984932890",
//                                                                     "title": "毛利率",
//                                                                     "style": "text",
//                                                                     "watermarkstyle": "clear",
//                                                                     "watermarkcomposite": "blended",
//                                                                     "visiblesize": "",
//                                                                     "options": [],
//                                                                     "sort": "0",
//                                                                     "value": "",
//                                                                     "iswrap": "0",
//                                                                     "name": "BD-DZ-B毛利率",
//                                                                     "eventlist": []
//                                                                 }
//                                                             ],
//                                                             "eventlist": []
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "title": "特价",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": [
//                                                         {
//                                                             "type": "switch",
//                                                             "code": "1730400843984932887",
//                                                             "titlewidth": "110",
//                                                             "titleflex": "",
//                                                             "title": "开关",
//                                                             "placeholder": "",
//                                                             "name": "",
//                                                             "displaystyle": "",
//                                                             "value": "",
//                                                             "ontext": "",
//                                                             "offtext": "",
//                                                             "eventlist": []
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "title": "返利",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": [
//                                                         {
//                                                             "type": "layout",
//                                                             "code": "1731629731482308644",
//                                                             "title": "布局",
//                                                             "display": "flex",
//                                                             "flexdirection": "vertical",
//                                                             "flex": "",
//                                                             "shape": "rect",
//                                                             "bordercolor": "lightgray",
//                                                             "bordersides": "",
//                                                             "overflowy": "",
//                                                             "content": [
//                                                                 {
//                                                                     "type": "tabboard",
//                                                                     "code": "1731629731482308643",
//                                                                     "name": "",
//                                                                     "title": "返利设置",
//                                                                     "hidden": "0",
//                                                                     "flexdirection": "vertical",
//                                                                     "parent": {
//                                                                         "flexdirection": "vertical"
//                                                                     },
//                                                                     "overflow": "",
//                                                                     "cards": [
//                                                                         {
//                                                                             "title": "目标设置",
//                                                                             "hidden": "0",
//                                                                             "flexdirection": "vertical",
//                                                                             "overflow": "",
//                                                                             "content": []
//                                                                         },
//                                                                         {
//                                                                             "title": "返利设置",
//                                                                             "hidden": "0",
//                                                                             "flexdirection": "vertical",
//                                                                             "overflow": "",
//                                                                             "content": []
//                                                                         }
//                                                                     ],
//                                                                     "eventlist": []
//                                                                 }
//                                                             ],
//                                                             "eventlist": []
//                                                         }
//                                                     ]
//                                                 },
//                                                 {
//                                                     "title": "通用",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": []
//                                                 },
//                                                 {
//                                                     "title": "叠加预警",
//                                                     "hidden": "0",
//                                                     "flexdirection": "vertical",
//                                                     "overflow": "",
//                                                     "content": []
//                                                 }
//                                             ],
//                                             "eventlist": []
//                                         }
//                                     ],
//                                     "eventlist": []
//                                 }
//                             ]
//                         },
//                         {
//                             "title": "费用分摊",
//                             "hidden": "0",
//                             "flexdirection": "vertical",
//                             "overflow": "",
//                             "content": []
//                         },
//                         {
//                             "title": "重合活动预警",
//                             "hidden": "0",
//                             "flexdirection": "vertical",
//                             "overflow": "",
//                             "content": []
//                         }
//                     ],
//                     "eventlist": []
//                 },
//                 {
//                     "type": "layout",
//                     "code": "1721373985633079358",
//                     "title": "布局",
//                     "display": "flex",
//                     "flexdirection": "horizontal",
//                     "flex": "",
//                     "shape": "rect",
//                     "bordercolor": "lightgray",
//                     "bordersides": "",
//                     "overflowy": "",
//                     "flexwrap": "wrap",
//                     "justifycontent": "flexend",
//                     "content": [
//                         {
//                             "type": "button",
//                             "code": "1721373985633079357",
//                             "title": "取消",
//                             "name": "",
//                             "text": "取消",
//                             "displaytype": "",
//                             "bordervisible": "1",
//                             "width": "10%",
//                             "bgcolor": "white",
//                             "eventlist": []
//                         },
//                         {
//                             "type": "button",
//                             "code": "1721373985633079356",
//                             "title": "保存草稿",
//                             "name": "",
//                             "text": "保存草稿",
//                             "displaytype": "",
//                             "bordervisible": "1",
//                             "width": "10%",
//                             "marginleft": "10",
//                             "color": "white",
//                             "bgcolor": "orange",
//                             "eventlist": []
//                         },
//                         {
//                             "type": "button",
//                             "code": "1721373985633079355",
//                             "title": "保存并提交",
//                             "name": "",
//                             "text": "保存并提交",
//                             "displaytype": "",
//                             "bordervisible": "1",
//                             "width": "10%",
//                             "marginright": "10",
//                             "marginleft": "10",
//                             "bgcolor": "orange",
//                             "color": "white",
//                             "eventlist": []
//                         }
//                     ],
//                     "eventlist": []
//                 }
//             ],
//             "eventlist": []
//         },
//         "subviews": [
//             {
//                 "type": "popview",
//                 "title": "基础信息-指引弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "code": "1729757554390732877",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1729757554390732876",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "0",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "basic": [
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1729757554390732874",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-指引类型",
//                                     "placeholder": "指引类型",
//                                     "name": "TCZY-查询-指引类型",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "options": [
//                                         {
//                                             "key": "1",
//                                             "text": "经销商渠道指引",
//                                             "isselected": "1"
//                                         },
//                                         {
//                                             "key": "2",
//                                             "text": "现代渠道指引",
//                                             "isselected": "0"
//                                         },
//                                         {
//                                             "key": "3",
//                                             "text": "专项活动指引",
//                                             "isselected": "0"
//                                         }
//                                     ],
//                                     "hidden": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1729757554390732873",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-指引名称/编码",
//                                     "placeholder": "指引名称/编码",
//                                     "name": "TCZY-查询-指引名称/编码",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 }
//                             ],
//                             "advanced": []
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "name": "",
//                         "eventlist": [
//                             {
//                                 "trigger": "onvaluechange",
//                                 "handler": "1729757554390732865"
//                             }
//                         ]
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1729757554390732875",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "0",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": ""
//                         },
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} != 1",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1729757554390732869"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "name": "TCZY-指引列表",
//                         "height": "500",
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729757554390732872",
//                                 "title": "指引id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZY指引id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729757554390732871",
//                                 "title": "指引编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZY指引编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729757554390732870",
//                                 "title": "指引名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZY指引名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729757554390732858",
//                                 "title": "业务活动类型",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZY业务活动类型",
//                                 "eventlist": []
//                             }
//                         ],
//                         "eventlist": [
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "1729757554390732865"
//                             },
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "1729757554390732865"
//                             }
//                         ]
//                     }
//                 ],
//                 "eventlist": [
//                     {
//                         "trigger": "onopen",
//                         "handler": "1729757554390732865"
//                     }
//                 ]
//             },
//             {
//                 "type": "popview",
//                 "title": "投放范围-组织弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "code": "1729704190114140258",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1729704190114140256",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "basic": [
//                                 {
//                                     "type": "picktree",
//                                     "code": "1729704190114140255",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-营销组织",
//                                     "placeholder": "营销组织",
//                                     "name": "TCZ-查询-营销组织",
//                                     "displaystyle": "input",
//                                     "searchable": "1",
//                                     "multiselectable": "0",
//                                     "hiddenclearbtn": "0",
//                                     "expandmodel": "allexpand",
//                                     "intermediateselectmode": "disable",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731591338824175710",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-客户组编码/名称",
//                                     "placeholder": "客户组编码/名称",
//                                     "name": "TCZ-查询-客户组编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 }
//                             ],
//                             "advanced": []
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "eventlist": [
//                             {
//                                 "trigger": "onvaluechange",
//                                 "handler": "1729704190114140241"
//                             }
//                         ]
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1729704190114140254",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "0",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": ""
//                         },
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} == 0",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1729704190114140249"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "name": "TCZ-组织列表",
//                         "flex": "",
//                         "height": "600",
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729704190114140245",
//                                 "title": "组织id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-组织id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308649",
//                                 "title": "组织parentid",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-组织parentid",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308646",
//                                 "title": "codepath",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-codepath",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729704190114140253",
//                                 "title": "营销组织编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-营销组织编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729704190114140252",
//                                 "title": "营销组织名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-营销组织名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729704190114140244",
//                                 "title": "客户组id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-客户组id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729704190114140251",
//                                 "title": "客户组编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-客户组编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1729704190114140250",
//                                 "title": "客户组名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCZ-客户组名称",
//                                 "eventlist": []
//                             }
//                         ],
//                         "eventlist": [
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "1729704190114140241"
//                             },
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "1729704190114140241"
//                             }
//                         ]
//                     }
//                 ],
//                 "eventlist": [
//                     {
//                         "trigger": "onopen",
//                         "handler": "1729704190114140241"
//                     }
//                 ]
//             },
//             {
//                 "type": "popview",
//                 "title": "投放范围-售达方弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "code": "1730025035474800738",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1730025035474800737",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "0",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "basic": [
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732297702370316384",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "营销组织父id",
//                                     "placeholder": "营销组织父id",
//                                     "name": "TCS-查询-营销组织父id",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731591338824175709",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-加载类型",
//                                     "placeholder": "加载类型",
//                                     "name": "TCS-查询-加载类型",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731591338824175714",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-渠道",
//                                     "placeholder": "渠道",
//                                     "name": "TCS-查询-渠道",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731591338824175713",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-客户名称/编码",
//                                     "placeholder": "客户名称/编码",
//                                     "name": "TCS-查询-客户名称/编码",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1730025035474800725",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-售达方编码/名称",
//                                     "placeholder": "售达方编码/名称",
//                                     "name": "TCS-查询-售达方编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "picktree",
//                                     "code": "1731591338824175712",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-所属营销组织",
//                                     "placeholder": "所属营销组织",
//                                     "name": "TCS-查询-所属营销组织",
//                                     "displaystyle": "input",
//                                     "searchable": "1",
//                                     "multiselectable": "0",
//                                     "hiddenclearbtn": "0",
//                                     "expandmodel": "allexpand",
//                                     "intermediateselectmode": "disable",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731591338824175711",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-价格组编码",
//                                     "placeholder": "价格组编码",
//                                     "name": "TCS-查询-价格组编码",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 }
//                             ],
//                             "advanced": []
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "eventlist": [
//                             {
//                                 "trigger": "onvaluechange",
//                                 "handler": "1730025035474800724"
//                             }
//                         ]
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1730025035474800736",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "0",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": ""
//                         },
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-square",
//                                 "disabled": "le:{checkednumber} == 0",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1730025035474800719"
//                                     }
//                                 ]
//                             },
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} != 1",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1730025035474800719"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "name": "TCS-售达方列表",
//                         "height": "500",
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800734",
//                                 "title": "售达方id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-售达方id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800733",
//                                 "title": "渠道",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-渠道",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800732",
//                                 "title": "客户名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-客户名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800731",
//                                 "title": "客户编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-客户编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800730",
//                                 "title": "售达方名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-售达方名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800729",
//                                 "title": "售达方编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-售达方编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800728",
//                                 "title": "所属营销组织",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-所属营销组织",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1730025035474800727",
//                                 "title": "价格组编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCS-价格组编码",
//                                 "eventlist": []
//                             }
//                         ],
//                         "eventlist": [
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "1731629731482308704"
//                             },
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "1731629731482308704"
//                             }
//                         ]
//                     }
//                 ],
//                 "eventlist": []
//             },
//             {
//                 "type": "popview",
//                 "title": "活动-选择客户弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "code": "1731474374386651228",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1731474374386651227",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "0",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "basic": [
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731545945360961623",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "营销组织父id",
//                                     "placeholder": "营销组织父id",
//                                     "name": "TCK-查询-营销组织父id",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731545945360961629",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-加载类型",
//                                     "placeholder": "加载类型",
//                                     "name": "TCK-查询-加载类型",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731474374386651225",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-渠道",
//                                     "placeholder": "渠道",
//                                     "name": "TCK-查询-渠道",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "picktree",
//                                     "code": "1731474374386651224",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-营销组织",
//                                     "placeholder": "营销组织",
//                                     "name": "TCK-查询-营销组织",
//                                     "displaystyle": "input",
//                                     "searchable": "1",
//                                     "multiselectable": "0",
//                                     "hiddenclearbtn": "0",
//                                     "expandmodel": "allexpand",
//                                     "intermediateselectmode": "disable",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731474374386651223",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-客户名称/编码",
//                                     "placeholder": "客户名称/编码",
//                                     "name": "TCK-查询-客户名称/编码",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731513899985014870",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-客户画像",
//                                     "placeholder": "客户画像",
//                                     "name": "TCK-查询-客户画像",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731513899985014869",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-客户标签",
//                                     "placeholder": "客户标签",
//                                     "name": "TCK-查询-客户标签",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 }
//                             ],
//                             "advanced": []
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "eventlist": [
//                             {
//                                 "trigger": "onvaluechange",
//                                 "handler": "1731545945360961633"
//                             }
//                         ]
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1731474374386651226",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "1",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": ""
//                         },
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} != 1",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1731545945360961628"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "name": "TCK-客户列表",
//                         "height": "500",
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731513899985014868",
//                                 "title": "id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCK-客户列表-id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731513899985014867",
//                                 "title": "渠道",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCK-客户列表-渠道",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731513899985014866",
//                                 "title": "所属营销组织",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCK-客户列表-所属营销组织",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731513899985014865",
//                                 "title": "客户编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCK-客户列表-客户编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731513899985014863",
//                                 "title": "客户名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCK-客户列表-客户名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731545945360961635",
//                                 "title": "客户画像",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCK-客户列表-客户画像",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731545945360961634",
//                                 "title": "客户标签",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCK-客户列表-客户标签",
//                                 "eventlist": []
//                             }
//                         ],
//                         "eventlist": [
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "1731545945360961633"
//                             },
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "1731545945360961633"
//                             }
//                         ]
//                     }
//                 ],
//                 "eventlist": []
//             },
//             {
//                 "type": "popview",
//                 "title": "活动-选择送达方弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "code": "1731629731482308701",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1731629731482308700",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "0",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "basic": [
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732297702370316386",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "营销组织父id",
//                                     "placeholder": "营销组织父id",
//                                     "name": "TCST-查询-营销组织父id",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731629731482308652",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-加载类型",
//                                     "placeholder": "加载类型",
//                                     "name": "TCST-查询-加载类型",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731629731482308697",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-渠道",
//                                     "placeholder": "渠道",
//                                     "name": "TCST-查询-渠道",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731629731482308696",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-售达方名称/编码",
//                                     "placeholder": "售达方编码/名称",
//                                     "name": "TCST-查询-售达方名称/编码",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731629731482308695",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-送达方编码/名称",
//                                     "placeholder": "送达方编码/名称",
//                                     "name": "TCST-查询-送达方编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "picktree",
//                                     "code": "1731629731482308694",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-所属营销组织",
//                                     "placeholder": "所属营销组织",
//                                     "name": "TCST-查询-所属营销组织",
//                                     "displaystyle": "input",
//                                     "searchable": "1",
//                                     "multiselectable": "0",
//                                     "hiddenclearbtn": "0",
//                                     "expandmodel": "allexpand",
//                                     "intermediateselectmode": "disable",
//                                     "eventlist": []
//                                 }
//                             ],
//                             "advanced": []
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "eventlist": []
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1731629731482308698",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "0",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": "id"
//                         },
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确定选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} != 1",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1731629731482308633"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "name": "TCST-送达方列表",
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308693",
//                                 "title": "送达方id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCST-送达方列表-送达方id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308692",
//                                 "title": "渠道",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCST-送达方列表-渠道",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308691",
//                                 "title": "售达方编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCST-送达方列表-售达方编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308690",
//                                 "title": "售达方名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCST-送达方列表-售达方名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308689",
//                                 "title": "送达方编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCST-送达方列表-送达方编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308688",
//                                 "title": "送达方名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCST-送达方列表-送达方名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308687",
//                                 "title": "所属营销组织",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCST-送达方列表-所属营销组织",
//                                 "eventlist": []
//                             }
//                         ],
//                         "height": "500",
//                         "eventlist": [
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "1731629731482308658"
//                             },
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "1731629731482308658"
//                             }
//                         ]
//                     }
//                 ],
//                 "eventlist": []
//             },
//             {
//                 "type": "popview",
//                 "title": "活动-选择产品弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "code": "1731629731482308685",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1731629731482308684",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "0",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "basic": [
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732198974447816800",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-加载类型",
//                                     "placeholder": "加载类型",
//                                     "name": "TCP-查询-加载类型",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731629731482308682",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-产品编码/名称",
//                                     "placeholder": "产品编码/名称",
//                                     "name": "TCP-查询-产品编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1731629731482308681",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-产品组名称",
//                                     "placeholder": "产品组名称",
//                                     "name": "TCP-查询-产品组名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731629731482308680",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-公司品牌",
//                                     "placeholder": "公司品牌",
//                                     "name": "TCP-查询-公司品牌",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731629731482308679",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-产品品牌",
//                                     "placeholder": "产品品牌",
//                                     "name": "TCP-查询-产品品牌",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731629731482308678",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-产品大类",
//                                     "placeholder": "产品大类",
//                                     "name": "TCP-查询-产品大类",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "value": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731629731482308677",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-产品中类",
//                                     "placeholder": "产品中类",
//                                     "name": "TCP-查询-产品中类",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731629731482308676",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-重点产品",
//                                     "placeholder": "重点产品",
//                                     "name": "TCP-查询-重点产品",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "dropdownbox",
//                                     "code": "1731629731482308675",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-是否新品",
//                                     "placeholder": "是否新品",
//                                     "name": "TCP-查询-是否新品",
//                                     "hiddenclearbtn": "0",
//                                     "searchable": "1",
//                                     "eventlist": []
//                                 }
//                             ],
//                             "advanced": []
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "eventlist": []
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1731629731482308683",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "0",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": ""
//                         },
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} != 1",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": ""
//                                     }
//                                 ]
//                             },
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-square",
//                                 "disabled": "le:{checkednumber} == 0",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1732198974447816803"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308670",
//                                 "title": "产品id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表产品id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308665",
//                                 "title": "产品编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表产品编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308666",
//                                 "title": "产品名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表产品名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308667",
//                                 "title": "产品组名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表产品组名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308668",
//                                 "title": "公司品牌",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表公司品牌",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308669",
//                                 "title": "产品品牌",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表产品品牌",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308674",
//                                 "title": "产品大类",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表产品大类",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308671",
//                                 "title": "产品中类",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表产品中类",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308673",
//                                 "title": "重点产品",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表重点产品",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1731629731482308672",
//                                 "title": "是否新品",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCP-产品列表是否新品",
//                                 "eventlist": []
//                             }
//                         ],
//                         "name": "TCP-产品列表",
//                         "height": "500",
//                         "eventlist": [
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "1731629731482308651"
//                             },
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "1731629731482308651"
//                             }
//                         ]
//                     }
//                 ],
//                 "eventlist": []
//             },
//             {
//                 "type": "popview",
//                 "title": "活动-选择产品组弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1732202391702474847",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "0",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "advanced": [],
//                             "basic": [
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732202391702474843",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-加载类型",
//                                     "placeholder": "加载类型",
//                                     "name": "TCPG-查询-加载类型",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732202391702474845",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-产品组编码/名称",
//                                     "placeholder": "产品组编码/名称",
//                                     "name": "TCPG-查询-产品组编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732202391702474844",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-成品物料编码/名称",
//                                     "placeholder": "成品物料编码/名称",
//                                     "name": "TCPG-查询-成品物料编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 }
//                             ]
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "eventlist": []
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1732202391702474846",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "0",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": ""
//                         },
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732202391702474842",
//                                 "title": "产品组id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCPG-产品组列表-产品组id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732202391702474841",
//                                 "title": "产品组编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCPG-产品组列表-产品组编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732202391702474840",
//                                 "title": "产品组名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCPG-产品组列表-产品组名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732202391702474839",
//                                 "title": "成品物料编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCPG-产品组列表-成品物料编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732202391702474838",
//                                 "title": "成品物料名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCPG-产品组列表-成品物料名称",
//                                 "eventlist": []
//                             }
//                         ],
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} != 1",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": "1732202391702474833"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "name": "TCPG-产品组列表",
//                         "height": "500",
//                         "eventlist": [
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "1732202391702474837"
//                             },
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "1732202391702474837"
//                             }
//                         ]
//                     }
//                 ],
//                 "code": "1732202391702474848",
//                 "eventlist": []
//             },
//             {
//                 "type": "popview",
//                 "title": "活动-选择网点弹窗",
//                 "flexdirection": "vertical",
//                 "needconfirm": "0",
//                 "confirmtitle": "确定",
//                 "resetwhenopen": "1",
//                 "content": [
//                     {
//                         "type": "filter",
//                         "code": "1732214712332062765",
//                         "title": "搜索栏",
//                         "display": "flex",
//                         "flexdirection": "",
//                         "flex": "0",
//                         "shape": "rect",
//                         "overflowy": "",
//                         "content": [],
//                         "searchcondition": {
//                             "advanced": [],
//                             "basic": [
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732297702370316379",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-加载类型",
//                                     "placeholder": "加载类型",
//                                     "name": "TCWD-查询-加载类型",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732297702370316385",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "营销组织父id",
//                                     "placeholder": "营销组织父id",
//                                     "name": "TCWD-查询-营销组织父id",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "picktree",
//                                     "code": "1732214712332062763",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-所属营销组织",
//                                     "placeholder": "所属营销组织",
//                                     "name": "TCWD-查询-所属营销组织",
//                                     "displaystyle": "input",
//                                     "searchable": "1",
//                                     "multiselectable": "0",
//                                     "hiddenclearbtn": "0",
//                                     "expandmodel": "allexpand",
//                                     "intermediateselectmode": "disable",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732214712332062762",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-网点编码/名称",
//                                     "placeholder": "网点编码/名称",
//                                     "name": "TCWD-查询-网点编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 },
//                                 {
//                                     "type": "filtertextinput",
//                                     "code": "1732214712332062761",
//                                     "titlewidth": "110",
//                                     "titleflex": "",
//                                     "title": "查询-售达方编码/名称",
//                                     "placeholder": "送达方编码/名称",
//                                     "name": "TCWD-查询-售达方编码/名称",
//                                     "verificationrule": "",
//                                     "eventlist": []
//                                 }
//                             ]
//                         },
//                         "sortcondition": {
//                             "advanced": [],
//                             "basic": []
//                         },
//                         "flexwrap": "wrap",
//                         "floatposition": {
//                             "bottom": "30"
//                         },
//                         "eventlist": []
//                     },
//                     {
//                         "type": "infotable",
//                         "code": "1732214712332062764",
//                         "title": "",
//                         "checkable": "1",
//                         "ispage": "1",
//                         "isradio": "0",
//                         "rowsize": "small",
//                         "hasheaderbar": "1",
//                         "datastructure": {
//                             "id": ""
//                         },
//                         "cols": [
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732214712332062760",
//                                 "title": "网点id",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCWD-网点列表网点id",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732214712332062756",
//                                 "title": "网点编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCWD-网点列表网点编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732214712332062757",
//                                 "title": "网点名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCWD-网点列表网点名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732214712332062759",
//                                 "title": "售达方编码",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCWD-网点列表售达方编码",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732214712332062758",
//                                 "title": "售达方名称",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCWD-网点列表售达方名称",
//                                 "eventlist": []
//                             },
//                             {
//                                 "type": "tablecell",
//                                 "code": "1732214712332062755",
//                                 "title": "所属营销组织",
//                                 "style": "text",
//                                 "watermarkstyle": "clear",
//                                 "watermarkcomposite": "blended",
//                                 "visiblesize": "",
//                                 "options": [],
//                                 "sort": "0",
//                                 "value": "",
//                                 "iswrap": "0",
//                                 "name": "TCWD-网点列表所属营销组织",
//                                 "eventlist": []
//                             }
//                         ],
//                         "stripe": "0",
//                         "dynamiccols": [],
//                         "guidecols": {
//                             "frozen": "1",
//                             "merged": "0",
//                             "cols": []
//                         },
//                         "groupcols": [],
//                         "operations": [
//                             {
//                                 "text": "确认选择",
//                                 "icon": "check-circle",
//                                 "disabled": "le:{checkednumber} == 0",
//                                 "functioncode": "",
//                                 "eventlist": [
//                                     {
//                                         "trigger": "onclicked",
//                                         "handler": ""
//                                     }
//                                 ]
//                             }
//                         ],
//                         "rowoperations": [],
//                         "defpagesize": "20",
//                         "name": "TCWD-网点列表",
//                         "height": "500",
//                         "eventlist": [
//                             {
//                                 "trigger": "onrefresh",
//                                 "handler": "917018469309843063"
//                             },
//                             {
//                                 "trigger": "onloadmore",
//                                 "handler": "917018469309843063"
//                             }
//                         ]
//                     }
//                 ],
//                 "code": "1732214712332062766",
//                 "eventlist": []
//             }
//         ]
//     },
//     "presenter": {
//         "initial": [
//             {
//                 "code": "1729757554390732849",
//                 "desc": "参数接受",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732848",
//                         "type": "receivelink",
//                         "desc": "接收参数",
//                         "condition": "",
//                         "param": {
//                             "name": "__linkparam",
//                             "datatype": "0",
//                             "ctrlcode": "",
//                             "properties": [
//                                 {
//                                     "name": "__pagestatus",
//                                     "paramtype": "1",
//                                     "value": "",
//                                     "ctrl": {
//                                         "code": "",
//                                         "component": ""
//                                     }
//                                 },
//                                 {
//                                     "name": "id",
//                                     "value": "",
//                                     "paramtype": "3",
//                                     "ctrl": {
//                                         "code": "1729757554390732850",
//                                         "component": ""
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 ]
//             }
//         ],
//         "interface": [],
//         "handlers": [
//             {
//                 "code": "1721373985633079365",
//                 "desc": "JB-渠道加载事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1721373985633079364",
//                         "type": "datarequest",
//                         "desc": "数据字典绑定",
//                         "condition": "",
//                         "binddic": "893269583996260404",
//                         "logiccode": "100000000001100001",
//                         "mode": "1",
//                         "queue": "0",
//                         "_type_spe": "dictbind",
//                         "bind": "",
//                         "getter": [
//                             {
//                                 "name": "pl_dictionary",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "dictionarycode",
//                                         "value": "893269583996260404",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "code",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentdickey",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "value": "1",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "objectmark",
//                                         "value": "kx_channeltype",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "excludeids",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_dictionary",
//                                 "datatype": "1",
//                                 "ctrlcode": "1729411162908528729",
//                                 "properties": [
//                                     {
//                                         "name": "dictionaryid",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "id"
//                                         }
//                                     },
//                                     {
//                                         "name": "parentdictionaryid",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "parentid"
//                                         }
//                                     },
//                                     {
//                                         "name": "dickey",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "dicvalue",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "text"
//                                         }
//                                     },
//                                     {
//                                         "name": "keypath",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "keypath"
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1721373985633079350",
//                 "desc": "是否授权费用-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1721373985633079349",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "var passcost = Page.getCtrl('passcost').value;\r\nconsole.log('passcost',passcost)\r\nvar costrule = Page.getCtrl('costrule');\r\nif(passcost == 1){\r\n    console.log('1')\r\n    costrule.setProperty('hidden', false, 2);\r\n}else{\r\n    console.log('0')\r\n    costrule.setProperty('hidden', true, 2);\r\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404687",
//                 "desc": "TF-参与组织新增",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729704190114140242",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1729704190114140258",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "组织选择"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404686",
//                 "desc": "TF-参与组织删除",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732881",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "var result = Page.getArrayCtrl('TF-参与组织').deleteInScope('checked')\nif(result == true) {\n    Page.runEvent('营销组织选项全局设置')\n    Page.alert('info','清除成功')\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404677",
//                 "desc": "TF-不参与售达方新增",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730025035474800739",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1730025035474800738",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "售达方选择"
//                     },
//                     {
//                         "code": "1731629731482308706",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "Page.runEvent('TCS-售达方列表-加载事件')\n\n\nlet ctrl = Page.getArrayCtrl('TCS-售达方列表')\n\n// 返回一个数组，包含信息表格所有按钮的Ctrl\nlet btnCtrls = ctrl.getHeaderButtons()\n\n// 修改第二个按钮的隐藏属性\nif (btnCtrls[1]) {\n    btnCtrls[1].hidden = true\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404676",
//                 "desc": "TF-不参与售达方删除",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732880",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "var result = Page.getArrayCtrl('TF-不参与售达方').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404675",
//                 "desc": "TF-不参与售达方导入",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730094572291362915",
//                         "type": "dataimport",
//                         "desc": "导入行为",
//                         "condition": "",
//                         "logiccode": "1730069977010147427",
//                         "mode": "1",
//                         "servicetype": "forground",
//                         "microclass": "",
//                         "template": "促销活动申请-投放范围售达方导入模版",
//                         "templatename": "售达方",
//                         "extraparam": [
//                             {
//                                 "title": "当数据重复时如何处理",
//                                 "paramkey": "_dataaddmode",
//                                 "requesturl": "",
//                                 "options": []
//                             }
//                         ],
//                         "getter": [
//                             {
//                                 "name": "xxw_channelcustomers",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "sheetnames",
//                                         "propertyname": "即将导入的excel的sheet页名",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "fileurl",
//                                         "propertyname": "待导入的excel下载路径",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "_dupstrategy",
//                                         "propertyname": "重复行处理策略",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "filename",
//                                         "propertyname": "文件名",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "placement_scope",
//                                         "propertyname": "投放范围",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729411162908528727",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "check_xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404685",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "propertyname": "主键",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800735",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "cy_pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404692",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "propertyname": "主键",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140246",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrlcode": "1729673766046404685",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800735",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404683",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404679",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "pricegroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404678",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customercode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404681",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customername",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404680",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404684",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404682",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "onsuccess": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404667",
//                 "desc": "TF-参与售达方新增",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730025035474800720",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1730025035474800738",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "售达方选择"
//                     },
//                     {
//                         "code": "1731629731482308702",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "Page.runEvent('TCS-售达方列表-加载事件')\nlet ctrl = Page.getArrayCtrl('TCS-售达方列表')\n\n// 返回一个数组，包含信息表格所有按钮的Ctrl\nlet btnCtrls = ctrl.getHeaderButtons()\n\n// 修改第二个按钮的隐藏属性\nif (btnCtrls[1]) {\n    btnCtrls[1].hidden = true\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404666",
//                 "desc": "TF-参与售达方删除",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732879",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "var result = Page.getArrayCtrl('TF-参与售达方').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404665",
//                 "desc": "TF-参与售达方导入",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730129571614953571",
//                         "type": "dataimport",
//                         "desc": "导入行为",
//                         "condition": "",
//                         "logiccode": "1730069977010147427",
//                         "mode": "1",
//                         "servicetype": "forground",
//                         "microclass": "",
//                         "template": "促销活动申请-投放范围售达方导入模版",
//                         "templatename": "售达方",
//                         "extraparam": [
//                             {
//                                 "title": "当数据重复时如何处理",
//                                 "paramkey": "_dataaddmode",
//                                 "requesturl": "",
//                                 "options": [
//                                     {
//                                         "text": "覆盖",
//                                         "key": "1",
//                                         "isselected": ""
//                                     },
//                                     {
//                                         "text": "追加",
//                                         "key": "2",
//                                         "isselected": ""
//                                     },
//                                     {
//                                         "text": "放弃",
//                                         "key": "3",
//                                         "isselected": ""
//                                     }
//                                 ]
//                             }
//                         ],
//                         "getter": [
//                             {
//                                 "name": "xxw_channelcustomers",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "sheetnames",
//                                         "alias": "",
//                                         "propertyname": "即将导入的excel的sheet页名",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "fileurl",
//                                         "alias": "",
//                                         "propertyname": "待导入的excel下载路径",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "_dupstrategy",
//                                         "alias": "",
//                                         "propertyname": "重复行处理策略",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "filename",
//                                         "alias": "",
//                                         "propertyname": "文件名",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "placement_scope",
//                                         "alias": "",
//                                         "propertyname": "投放范围",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729411162908528727",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "check_xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404674",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "propertyname": "主键",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730052880691499105",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "cy_pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "propertyname": "主键",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrlcode": "1729673766046404674",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730052880691499105",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404670",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404669",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "pricegroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customercode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404673",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customername",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404672",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404671",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729673766046404668",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "onsuccess": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1729673766046404663",
//                 "desc": "JB-投放范围-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729673766046404662",
//                         "type": "flycode",
//                         "desc": "控制投放范围页签内容",
//                         "condition": "",
//                         "script": "debugger\nvar launch = Page.getCtrl('JB-投放范围').value\n\n//如果投放范围已维护数据，投放范围变动时弹窗提示\n\nvar salearea = Page.getArrayCtrl('TF-参与组织').getAllRows()\nvar noJoin = Page.getArrayCtrl('TF-不参与售达方').getAllRows()\nvar join = Page.getArrayCtrl('TF-参与售达方').getAllRows()\n\nvar launch_zz = function(){\n    var actions = AlertChoice()\n    actions.append('确定',function(){\n        //清空参与售达方表格\n        var result = Page.getArrayCtrl('TF-参与售达方').deleteInScope('all')\n        if(result == true) {\n            Page.alert('info','清除成功')\n        }\n    })\n    \n    actions.append('取消',function(){\n        Page.getCtrl('JB-投放范围').value = '2'\n    })\n    var alert_message = '【按售达方投放】已维护了相关信息，是否清除数据？';\n\n    //弹出错误提示，用户按‘确定’后关闭提示框\n    // var actions = AlertChoice()\n    // actions.append('确定')\n    Page.alert(AlertType.warning, alert_message, actions)\n}\n\n\nvar launch_sdf = function(){\n    var actions = AlertChoice()\n    actions.append('确定',function(){\n        //清空组织和不参与售达方表格\n        var result1 = Page.getArrayCtrl('TF-参与组织').deleteInScope('all')\n        var result2 = Page.getArrayCtrl('TF-不参与售达方').deleteInScope('all')\n        if(result1 == true && result2) {\n            Page.alert('info','清除成功')\n        }\n    })\n        \n    actions.append('取消',function(){\n        Page.getCtrl('JB-投放范围').value = '1'\n    })\n    var alert_message = '【按营销组织投放】已维护了相关信息，是否清除？';\n\n    //弹出错误提示，用户按‘确定’后关闭提示框\n    // var actions = AlertChoice()\n    // actions.append('确定')\n    Page.alert(AlertType.warning, alert_message, actions)\n}\n\n//1营销组织投放2售达方投放\nif(launch == '1'){\n    Page.getCtrl('TF-组织投放').hidden = false\n    Page.getCtrl('TF-不参与').hidden = false\n    Page.getCtrl('TF-参与').hidden = true\n    Page.getCtrl('TF-提示').hidden = true\n    if(join.length != 0){\n        launch_zz()\n    }\n}else if(launch == '2'){\n    Page.getCtrl('TF-组织投放').hidden = true\n    Page.getCtrl('TF-不参与').hidden = true\n    Page.getCtrl('TF-参与').hidden = false\n    Page.getCtrl('TF-提示').hidden = true\n    if(salearea.length != 0 || noJoin.length != 0){\n        launch_sdf()\n    }\n}else{\n    Page.getCtrl('TF-组织投放').hidden = true\n    Page.getCtrl('TF-不参与').hidden = true\n    Page.getCtrl('TF-参与').hidden = true\n    Page.getCtrl('TF-提示').hidden = false\n    if(join.length != 0){\n        launch_zz()\n    }\n    if(salearea.length != 0 || noJoin.length != 0){\n        launch_sdf()\n    }\n}\n\n\n\n\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729704190114140249",
//                 "desc": "TCZ-组织列表确认选择",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729704190114140248",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//讲选择的数据进行拼接处理\ndebugger\n//客户列表\nvar temp = Page.getArrayCtrl('TF-参与组织').getAllRows();\n\nvar temp1 = Page.getArrayCtrl('TCZ-组织列表').getCheckedRows();\n\nvar customer_setter = ArrayCtrlSetter();\ncustomer_setter.append('参与组织-组织id','参与组织-组织id');\ncustomer_setter.append('参与组织-营销组织编码','参与组织-营销组织编码');\ncustomer_setter.append('参与组织-营销组织名称','参与组织-营销组织名称');\ncustomer_setter.append('参与组织-客户组编码','参与组织-客户组编码');\ncustomer_setter.append('参与组织-客户组名称','参与组织-客户组名称');\ncustomer_setter.append('参与组织-客户组id','参与组织-客户组id');\ncustomer_setter.append('参与组织-组织parentid','参与组织-组织parentid');\ncustomer_setter.append('参与组织-codepath','参与组织-codepath');\n\n\nvar tempAll = [];\nfor(var j = 0; j < temp.length; j ++){\n    tempAll.push(temp[j].getCtrl('参与组织-组织id').value);\n}\n\nvar customer_hasArray = [];\nvar tempLen = temp1.length;\n\nfor(var i = 0; i < tempLen; i++){\n    var data = {\n        '参与组织-组织id': temp1[i].getCtrl('TCZ-组织id').value,\n        '参与组织-营销组织编码': temp1[i].getCtrl('TCZ-营销组织编码').value,\n        '参与组织-营销组织名称': temp1[i].getCtrl('TCZ-营销组织名称').value,\n        '参与组织-客户组编码': temp1[i].getCtrl('TCZ-客户组编码').value,\n        '参与组织-客户组名称': temp1[i].getCtrl('TCZ-客户组名称').value,\n        '参与组织-客户组id': temp1[i].getCtrl('TCZ-客户组id').value,\n        '参与组织-组织parentid': temp1[i].getCtrl('TCZ-组织parentid').value,\n        '参与组织-codepath': temp1[i].getCtrl('TCZ-codepath').value\n    }\n    if(tempAll.indexOf(temp1[i].getCtrl('TCZ-组织id').value) == -1){\n        customer_hasArray.push(data);\n    }\n}\n\n//'head' 头部; 'tail' 尾部\nPage.getArrayCtrl('TF-参与组织').append(customer_hasArray, 'tail', customer_setter);\n\nPage.runEvent('营销组织选项全局设置')"
//                     },
//                     {
//                         "code": "1729704190114140247",
//                         "type": "closesubview",
//                         "desc": "关闭popview",
//                         "condition": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1729704190114140241",
//                 "desc": "TCZ-组织列表-加载事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729704190114140240",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1729704190114140239",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404692",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "propertyname": "营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140246",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "pl_org",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgaccountcode",
//                                         "propertyname": "组织编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140255",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "propertyname": "组织名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "propertyname": "状态",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "propertyname": "父级id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "propertyname": "客户组名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175710",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrlcode": "1729704190114140254",
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140245",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308649",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140252",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid__orgaccountcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140253",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "codepath",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308646",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "fullname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "seq",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "groupid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140244",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140251",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729704190114140250",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1729757554390732878",
//                 "desc": "JB-关联指引名称-鼠标单击时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732861",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1729757554390732877",
//                         "viewwidth": "1000",
//                         "viewheight": "600",
//                         "viewtitle": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1729757554390732869",
//                 "desc": "TCZY-指引列表确认选择",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732868",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\n//获取选中的数据\n\nvar temp = Page.getArrayCtrl('TCZY-指引列表').getCheckedRows()\n\nPage.getCtrl('JB-关联指引id').value = temp[0].getCtrl('TCZY指引id').value\nPage.getCtrl('JB-关联指引名称').value = temp[0].getCtrl('TCZY指引名称').value\nPage.getCtrl('JB-指引业务活动类型').value = temp[0].getCtrl('TCZY业务活动类型').value"
//                     },
//                     {
//                         "code": "1729757554390732867",
//                         "type": "closesubview",
//                         "desc": "关闭popview",
//                         "condition": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1729757554390732865",
//                 "desc": "TCZY-指引列表-加载事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732864",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1729757554390732863",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "xxw_promotion_guide",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "propertyname": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732866",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "promotion_guide_name",
//                                         "propertyname": "促销指引名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732873",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "guide_type",
//                                         "propertyname": "指引类型",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732874",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_promotion_guide",
//                                 "datatype": "1",
//                                 "ctrlcode": "1729757554390732875",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732872",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "promotion_guide_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732870",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "guide_code",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732871",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1729757554390732860",
//                 "desc": "JB-关联指引名称-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732859",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取控件值\nvar temp = Page.getCtrl('JB-关联指引名称').value;\n\nif(temp == ''){\n    //清空相关数据\n    Page.getCtrl('JB-关联指引id').value = '';\n    Page.getCtrl('JB-指引业务活动类型').value = '';\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1729757554390732857",
//                 "desc": "JB-业务活动类型-加载事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732856",
//                         "type": "datarequest",
//                         "desc": "数据字典绑定",
//                         "condition": "",
//                         "binddic": "1727962511191445602",
//                         "logiccode": "100000000001100001",
//                         "mode": "1",
//                         "queue": "0",
//                         "_type_spe": "dictbind",
//                         "bind": "",
//                         "getter": [
//                             {
//                                 "name": "pl_dictionary",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "dictionarycode",
//                                         "value": "1727962511191445602",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "code",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentdickey",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "value": "1",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "objectmark",
//                                         "value": "xxw_business_activity_type",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "excludeids",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_dictionary",
//                                 "datatype": "1",
//                                 "ctrlcode": "1729411162908528725",
//                                 "properties": [
//                                     {
//                                         "name": "dictionaryid",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "id"
//                                         }
//                                     },
//                                     {
//                                         "name": "parentdictionaryid",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "parentid"
//                                         }
//                                     },
//                                     {
//                                         "name": "dickey",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "dicvalue",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "text"
//                                         }
//                                     },
//                                     {
//                                         "name": "keypath",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "keypath"
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1729757554390732852",
//                 "desc": "经销商渠道活动详情加载",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1729757554390732851",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1729742655606362208",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "xxw_main_promotion",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "propertyname": "主键",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732850",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_main_promotion",
//                                 "datatype": "0",
//                                 "ctrlcode": "",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732850",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "relevance_type",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729411162908528734",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "guide_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729757554390732866",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "guide_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729411162908528731",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "guide_type",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "activity_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "start_date",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "end_date",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "placement_scope",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "business_activity_type",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "apply_amount",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "make_amends",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "guide_exceed",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "budget_exceed",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "authorize",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "submitter",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "submitting_salearea",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "submission_time",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "attachment",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "active_state",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "confirm_state",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "createtime",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "createop",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "updatetime",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "updateop",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "activity_code",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1730025035474800724",
//                 "desc": "TCS-售达方列表-加载事件",
//                 "name": "TCS-售达方列表-加载事件",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730025035474800723",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1730025035474800722",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404692",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "codepath",
//                                         "propertyname": "code路径",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308645",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "xxw_main_promotion",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "placement_scope",
//                                         "propertyname": "投放范围",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729411162908528727",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "propertyname": "营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "propertyname": "售达方编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800725",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "propertyname": "渠道",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175714",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customername",
//                                         "propertyname": "客户名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175713",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "pricegroupname",
//                                         "propertyname": "价格组编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175709",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "load_type",
//                                         "propertyname": "加载类型",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "cy_xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404674",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "propertyname": "主键",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730052880691499105",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "bcy_xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404685",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "propertyname": "主键",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800735",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrlcode": "1730025035474800736",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800734",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800729",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800730",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "pricegroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800727",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customercode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800731",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customername",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800732",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800733",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800728",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1730025035474800719",
//                 "desc": "TCS-售达方列表确认选择",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730052880691499107",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//讲选择的数据进行拼接处理\ndebugger\n//客户列表\n//获取投放范围\nvar range = Page.getCtrl('JB-投放范围').value;\nvar load_type = Page.getCtrl('TCS-查询-加载类型').value;\n\nvar customer = Page.getArrayCtrl('TCS-售达方列表').getCheckedRows();\nif(load_type == ''){\n    if(range == '1'){\n        //组织投放写入不参与客户列表\n        var customerIsCheck = Page.getArrayCtrl('TF-不参与售达方').getAllRows();\n        var customer_setter = ArrayCtrlSetter();\n        customer_setter.append('不参与售达方-渠道','不参与售达方-渠道');\n        customer_setter.append('不参与售达方-客户编码','不参与售达方-客户编码');\n        customer_setter.append('不参与售达方-客户名称','不参与售达方-客户名称');\n        customer_setter.append('不参与售达方-售达方id','不参与售达方-售达方id');\n        customer_setter.append('不参与售达方-售达方编码','不参与售达方-售达方编码');\n        customer_setter.append('不参与售达方-售达方名称','不参与售达方-售达方名称');\n        customer_setter.append('不参与售达方-所属营销组织','不参与售达方-所属营销组织');\n        customer_setter.append('不参与售达方-价格组编码','不参与售达方-价格组编码');\n\n        var customerAll = [];\n        for(var j = 0; j < customerIsCheck.length; j ++){\n            customerAll.push(customerIsCheck[j].getCtrl('不参与售达方-售达方id').value);\n        }\n\n        var customer_hasArray = [];\n        var customerLen = customer.length;\n\n        for(var i = 0; i < customerLen; i++){\n            var data1 = {\n                '不参与售达方-渠道': customer[i].getCtrl('TCS-渠道').value,\n                '不参与售达方-客户编码': customer[i].getCtrl('TCS-客户编码').value,\n                '不参与售达方-客户名称': customer[i].getCtrl('TCS-客户名称').value,\n                '不参与售达方-售达方id': customer[i].getCtrl('TCS-售达方id').value,\n                '不参与售达方-售达方编码': customer[i].getCtrl('TCS-售达方编码').value,\n                '不参与售达方-售达方名称': customer[i].getCtrl('TCS-售达方名称').value,\n                '不参与售达方-所属营销组织': customer[i].getCtrl('TCS-所属营销组织').value,\n                '不参与售达方-价格组编码': customer[i].getCtrl('TCS-价格组编码').value\n            }\n            if(customerAll.indexOf(customer[i].getCtrl('TCS-售达方id').value) == -1){\n                customer_hasArray.push(data1);\n            }\n        }\n        //'head' 头部; 'tail' 尾部\n        Page.getArrayCtrl('TF-不参与售达方').append(customer_hasArray, 'tail', customer_setter);\n    }\n    if(range == '2'){\n        //售达方投放写入参与客户列表\n        var customerIsCheck = Page.getArrayCtrl('TF-参与售达方').getAllRows();\n        var customer_setter = ArrayCtrlSetter();\n        customer_setter.append('参与售达方-渠道','参与售达方-渠道');\n        customer_setter.append('参与售达方-客户编码','参与售达方-客户编码');\n        customer_setter.append('参与售达方-客户名称','参与售达方-客户名称');\n        customer_setter.append('参与售达方-售达方id','参与售达方-售达方id');\n        customer_setter.append('参与售达方-售达方编码','参与售达方-售达方编码');\n        customer_setter.append('参与售达方-售达方名称','参与售达方-售达方名称');\n        customer_setter.append('参与售达方-所属营销组织','参与售达方-所属营销组织');\n\n        var customerAll = [];\n        for(var j = 0; j < customerIsCheck.length; j ++){\n            customerAll.push(customerIsCheck[j].getCtrl('参与售达方-售达方id').value);\n        }\n\n        var customer_hasArray = [];\n        var customerLen = customer.length;\n\n        for(var i = 0; i < customerLen; i++){\n            var data2 = {\n                '参与售达方-渠道': customer[i].getCtrl('TCS-渠道').value,\n                '参与售达方-客户编码': customer[i].getCtrl('TCS-客户编码').value,\n                '参与售达方-客户名称': customer[i].getCtrl('TCS-客户名称').value,\n                '参与售达方-售达方id': customer[i].getCtrl('TCS-售达方id').value,\n                '参与售达方-售达方编码': customer[i].getCtrl('TCS-售达方编码').value,\n                '参与售达方-售达方名称': customer[i].getCtrl('TCS-售达方名称').value,\n                '参与售达方-所属营销组织': customer[i].getCtrl('TCS-所属营销组织').value\n            }\n            if(customerAll.indexOf(customer[i].getCtrl('TCS-售达方id').value) == -1){\n                customer_hasArray.push(data2);\n            }\n        }\n        //'head' 头部; 'tail' 尾部\n        Page.getArrayCtrl('TF-参与售达方').append(customer_hasArray, 'tail', customer_setter);\n    }\n}\nif(load_type == 'GDTY'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    if (focusRow != null && customer.length == 1) {\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有售达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: customer[0].getCtrl('TCS-售达方id').value,\n            text: customer[0].getCtrl('TCS-售达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-TY-表格售达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-TY-表格售达方').value = customer[0].getCtrl('TCS-售达方id').value\n    }\n}\nif(load_type == 'GDCL'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n    if (focusRow != null && customer.length == 1) {\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有售达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: customer[0].getCtrl('TCS-售达方id').value,\n            text: customer[0].getCtrl('TCS-售达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-CL-表格售达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-CL-表格售达方').value = customer[0].getCtrl('TCS-售达方id').value\n    }\n}\nif(load_type == 'GDCX'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n    if (focusRow != null && customer.length == 1) {\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有售达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: customer[0].getCtrl('TCS-售达方id').value,\n            text: customer[0].getCtrl('TCS-售达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-CX-表格售达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-CX-表格售达方').value = customer[0].getCtrl('TCS-售达方id').value\n    }\n}\nif(load_type == 'GDWL'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n    if (focusRow != null && customer.length == 1) {\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有售达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: customer[0].getCtrl('TCS-售达方id').value,\n            text: customer[0].getCtrl('TCS-售达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-WL-表格售达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-WL-表格售达方').value = customer[0].getCtrl('TCS-售达方id').value\n    }\n}\n\n"
//                     },
//                     {
//                         "code": "1730052880691499106",
//                         "type": "closesubview",
//                         "desc": "关闭popview",
//                         "condition": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1730155088279900254",
//                 "desc": "GD-TY-表格新增行",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730155088279900253",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//在最后面插入数据\ndebugger\nvar salearea_range = Page.getCtrl('JB-投放范围').value\nvar saleareasData = Page.getValue(\"saleareasData\")\nvar array = Page.getArrayCtrl('GD-TY-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n \nif(salearea_range == '1'){\n    //构建setter\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"parentid\", \"parentid\");\n    //设置选项数据\n    if(saleareasData){\n        \n        // Page.getPickerCtrl('客户类型').setOption(data, setter);\n        var result = Page.getArrayCtrl('GD-TY-表格').append([{}], 'tail', null)\n        if(result == true) {\n            //插入成功\n            var indexes = [num];\n            var rows = Page.getArrayCtrl('GD-TY-表格').getRowAtIndexes([num]);\n            if (rows != null) {\n                for(var i = 0; i < rows.length; i++) {\n                    var row = rows[i];\n                    //做一些操作，如设置row的下拉选项\n                    row.getPickerCtrl('GD-TY-表格营销组织').setOption(saleareasData, setter);\n                }\n            }\n            Page.alert('info','插入成功')\n        }\n    }else{\n        Page.alert('info','【投放范围】投放区域未设置')\n    }\n\n}else if(salearea_range == '2'){\n    var textInput = Page.getArrayCtrl('GD-TY-表格').getColByName('GD-TY-表格营销组织')\n    if (textInput != null) {\n        textInput.readonly = true;\n    }\n    var result = Page.getArrayCtrl('GD-TY-表格').append([{}], 'tail', null)\n    if(result == true) {\n        //插入成功\n        // array[num].getCtrl('GD-TY-表格营销组织').readonly = true\n        \n        Page.alert('info','插入成功')\n    }\n}else{\n    Page.alert('info','【基本信息】投放区域未设置')\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1730400843984932886",
//                 "desc": "BD-DZ-表格导入",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730455805045641304",
//                         "type": "dataimport",
//                         "desc": "导入行为",
//                         "condition": "",
//                         "logiccode": "1730400843984932885",
//                         "mode": "1",
//                         "servicetype": "forground",
//                         "microclass": "",
//                         "template": "",
//                         "templatename": "",
//                         "extraparam": [
//                             {
//                                 "title": "当数据重复时如何处理",
//                                 "paramkey": "_dataaddmode",
//                                 "requesturl": "",
//                                 "options": [
//                                     {
//                                         "text": "全覆盖",
//                                         "key": "10",
//                                         "isselected": "0"
//                                     }
//                                 ]
//                             }
//                         ],
//                         "getter": [],
//                         "setter": [
//                             {
//                                 "name": "xxw_promotion_giveaways",
//                                 "datatype": "1",
//                                 "ctrlcode": "1730400843984932944",
//                                 "properties": [
//                                     {
//                                         "name": "serial_number",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932913",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932912",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customer_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932911",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932910",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "store_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932909",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "no_store_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932908",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "payment_method",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932906",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "product_range",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932905",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "activity_product_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "activity_product_code",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932904",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "gift_rpoduct_id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "gift_rpoduct_code",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932903",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "activity_period",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932936",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "complimentary_rule",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932902",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "complimentary_type",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730455805045641303",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "achieve_target_terminate_complimentary",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932901",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "product_quantity",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932899",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "product_unit",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932898",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "gift_quantity",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932929",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "gift_unit",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932928",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "mutually_exclusive_with_contract_rebate",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932927",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "revenue_target",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932925",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "current_sales_target",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730400843984932922",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "onsuccess": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1730455805045641292",
//                 "desc": "营销组织选项全局设置",
//                 "name": "营销组织选项全局设置",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730455805045641291",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//营销组织投放时\nlet saleareas = Page.getArrayCtrl('TF-参与组织').getAllRows()\nvar saleareasData = []\nvar keys = []\nfor(let item of saleareas){\n    saleareasData.push({\n        \"key\":item.getCtrl('参与组织-组织id').value,\n        \"text\":item.getCtrl('参与组织-营销组织名称').value,\n        \"id\":item.getCtrl('参与组织-组织id').value,\n        \"parentid\":item.getCtrl('参与组织-组织parentid').value\n    })\n    keys.push(item.getCtrl('参与组织-组织id').value)\n}\n\nPage.setValue('saleareasData',saleareasData)\n\nvar setter = PickerCtrlOptionSetter();\nsetter.append(\"key\", \"key\");\nsetter.append(\"text\", \"text\");\nsetter.append(\"id\", \"id\");\nsetter.append(\"parentid\", \"parentid\");\n\n//如果后续活动设置已根据营销组织选择，须更新原有的下拉选项\nvar tyallRows = Page.getArrayCtrl('GD-TY-表格').getAllRows()\nif (tyallRows != null) {\n    for(var i = 0; i < tyallRows.length; i++) {\n        var row = tyallRows[i]\n        //营销组织控件下拉选项更新\n        row.getPickerCtrl('GD-TY-表格营销组织').setOption(saleareasData, setter);\n        //已选营销组织，去除\n        var saleareaid = row.getCtrl('GD-TY-表格营销组织').getValue(CtrlValueGetter('key'))\n        if(keys.indexOf(saleareaid) == -1){\n            row.getCtrl('GD-TY-表格营销组织').value = ''\n        }\n    }\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1730455805045641290",
//                 "desc": "GD-TY-表格删除行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730455805045641289",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar result = Page.getArrayCtrl('GD-TY-表格').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731474374386651230",
//                 "desc": "TC-客户选择",
//                 "name": "TC-客户选择",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731474374386651229",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1731474374386651228",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "选择客户"
//                     },
//                     {
//                         "code": "1731545945360961626",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar load_type = Page.getCtrl('固定类促销-加载类型').value\n//定义焦点项\nvar focusRow,parentorgstructid\nif(load_type == 'GDTY'){\n    focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-TY-表格营销组织').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDCL'){\n    focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CL-表格营销组织').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDCX'){\n    focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CX-表格营销组织').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDWL'){\n    focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-WL-表格营销组织').getValue(CtrlValueGetter('key'))\n}\n\nPage.getCtrl('TCK-查询-加载类型').value = load_type\n//渠道加载\nvar qdData = Page.getPickerCtrl('JB-渠道').getOption()\nvar qdSetter = PickerCtrlOptionSetter();\nqdSetter.append(\"id\", \"id\");\nqdSetter.append(\"key\", \"key\");\nqdSetter.append(\"keypath\", \"keypath\");\nqdSetter.append(\"text\", \"text\");\nqdSetter.append(\"isselected\", \"isselected\");\nPage.getPickerCtrl('TCK-查询-渠道').setOption(qdData, qdSetter);\nPage.getCtrl('TCK-查询-营销组织父id').value = parentorgstructid\nPage.runEvent('TCK-查询-营销组织-加载')\nPage.runEvent('TCK-客户列表-加载事件')"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731545945360961633",
//                 "desc": "TCK-客户列表-加载事件",
//                 "name": "TCK-客户列表-加载事件",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731545945360961632",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1731545945360961631",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "xxw_customer",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "customercode",
//                                         "propertyname": "客户编号",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731474374386651223",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "propertyname": "所属营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731474374386651224",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "propertyname": "渠道",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731474374386651225",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "portraitname",
//                                         "propertyname": "画像名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731513899985014870",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "manuallabelname",
//                                         "propertyname": "标签名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731513899985014869",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "load_type",
//                                         "propertyname": "加载类型",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "propertyname": "父级营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731545945360961623",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_customer",
//                                 "datatype": "1",
//                                 "ctrlcode": "1731474374386651226",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731513899985014868",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customercode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731513899985014865",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customername",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731513899985014863",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731513899985014867",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731513899985014866",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_full",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "portraitname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731545945360961635",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "manuallabelname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731545945360961634",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1731545945360961628",
//                 "desc": "TCK-客户列表-添加",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731545945360961627",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取弹窗勾选项\ndebugger\nvar load_type = Page.getCtrl('TCK-查询-加载类型').value\nvar checkRows = Page.getArrayCtrl('TCK-客户列表').getCheckedRows()\n\nif(load_type == 'GDTY'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCK-客户列表-id').value,\n            text: checkRows[0].getCtrl('TCK-客户列表-客户名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-TY-表格客户').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-TY-表格客户').value = checkRows[0].getCtrl('TCK-客户列表-id').value\n    }\n}\nif(load_type == 'GDCL'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCK-客户列表-id').value,\n            text: checkRows[0].getCtrl('TCK-客户列表-客户名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-CL-表格客户').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-CL-表格客户').value = checkRows[0].getCtrl('TCK-客户列表-id').value\n    }\n}\nif(load_type == 'GDCX'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCK-客户列表-id').value,\n            text: checkRows[0].getCtrl('TCK-客户列表-客户名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-CX-表格客户').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-CX-表格客户').value = checkRows[0].getCtrl('TCK-客户列表-id').value\n    }\n}\nif(load_type == 'GDWL'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCK-客户列表-id').value,\n            text: checkRows[0].getCtrl('TCK-客户列表-客户名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-WL-表格客户').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-WL-表格客户').value = checkRows[0].getCtrl('TCK-客户列表-id').value\n    }\n}\n"
//                     },
//                     {
//                         "code": "1731545945360961622",
//                         "type": "closesubview",
//                         "desc": "关闭popview",
//                         "condition": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1731545945360961625",
//                 "desc": "TCK-查询-营销组织-加载",
//                 "name": "TCK-查询-营销组织-加载",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731545945360961624",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1729704190114140239",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "propertyname": "营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "pl_org",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgaccountcode",
//                                         "propertyname": "组织编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "propertyname": "组织名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "propertyname": "状态",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "propertyname": "父级id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731545945360961623",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrlcode": "1731474374386651224",
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "parentid"
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "text"
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid__orgaccountcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "codepath",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "fullname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "seq",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "groupid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "id"
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1731591338824175708",
//                 "desc": "TC-售达方选择",
//                 "name": "TC-售达方选择",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731591338824175707",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1730025035474800738",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "选择售达方"
//                     },
//                     {
//                         "code": "1731629731482308705",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar load_type = Page.getCtrl('固定类促销-加载类型').value\n//定义焦点项\nvar focusRow,parentorgstructid,customername,customerid\nif(load_type == 'GDTY'){\n    focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-TY-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-TY-表格客户').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-TY-表格客户').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDCL'){\n    focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CL-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-CL-表格客户').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-CL-表格客户').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDCX'){\n    focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CX-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-CX-表格客户').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-CX-表格客户').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDWL'){\n    focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-WL-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-WL-表格客户').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-WL-表格客户').getValue(CtrlValueGetter('key'))\n}\n\nPage.getCtrl('TCS-查询-加载类型').value = load_type\n//渠道加载\nvar qdData = Page.getPickerCtrl('JB-渠道').getOption()\n\nvar qdSetter = PickerCtrlOptionSetter();\nqdSetter.append(\"id\", \"id\");\nqdSetter.append(\"key\", \"key\");\nqdSetter.append(\"keypath\", \"keypath\");\nqdSetter.append(\"text\", \"text\");\nqdSetter.append(\"isselected\", \"isselected\");\nPage.getPickerCtrl('TCS-查询-渠道').setOption(qdData, qdSetter);\n\nif(customerid != null && customerid != ''){\n    Page.getCtrl('TCS-查询-客户名称/编码').value = customername\n    Page.getCtrl('TCS-查询-客户名称/编码').readonly = true\n}else{\n    Page.getCtrl('TCS-查询-客户名称/编码').value = ''\n    Page.getCtrl('TCS-查询-客户名称/编码').readonly = false\n}\nPage.getCtrl('TCS-查询-营销组织父id').value = parentorgstructid\nPage.runEvent('TCS-查询-营销组织-加载')\n\nlet ctrl = Page.getArrayCtrl('TCS-售达方列表')\n// 返回一个数组，包含信息表格所有按钮的Ctrl\nlet btnCtrls = ctrl.getHeaderButtons()\n// 修改第二个按钮的隐藏属性\nif (btnCtrls[0]) {\n    btnCtrls[0].hidden = true\n}\n\nPage.runEvent('HD-售达方-加载事件')\n\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308707",
//                 "desc": "HD-售达方-加载事件",
//                 "name": "HD-售达方-加载事件",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1730025035474800723",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1730025035474800722",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404692",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "codepath",
//                                         "propertyname": "code路径",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308645",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "xxw_main_promotion",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "placement_scope",
//                                         "propertyname": "投放范围",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1729411162908528727",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "propertyname": "营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175712",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "propertyname": "售达方编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800725",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "propertyname": "渠道",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175714",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customername",
//                                         "propertyname": "客户名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175713",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "pricegroupname",
//                                         "propertyname": "价格组编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800727",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "load_type",
//                                         "propertyname": "加载类型",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731591338824175709",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "cy_xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404674",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "propertyname": "主键",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730052880691499105",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "bcy_xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "1729673766046404685",
//                                     "scope": "all"
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "propertyname": "主键",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800735",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_channelcustomers",
//                                 "datatype": "1",
//                                 "ctrlcode": "1730025035474800736",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800734",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800729",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800730",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "pricegroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800727",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customercode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800731",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customername",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800732",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800733",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1730025035474800728",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308704",
//                 "desc": "TCS-售达方列表刷新事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308703",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "var load_type = Page.getCtrl('TCS-查询-加载类型').value\n\nif(load_type != '' && load_type != null){\n    Page.runEvent('HD-售达方-加载事件')\n}else{\n    Page.runEvent('TCS-售达方列表-加载事件')\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308664",
//                 "desc": "TC-送达方选择",
//                 "name": "TC-送达方选择",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308663",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1731629731482308701",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "选择送达方"
//                     },
//                     {
//                         "code": "1731629731482308662",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar load_type = Page.getCtrl('固定类促销-加载类型').value\n//定义焦点项\nvar focusRow,parentorgstructid,customername,customerid\nif(load_type == 'GDTY'){\n    focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-TY-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-TY-表格售达方').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-TY-表格售达方').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDCL'){\n    focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CL-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-CL-表格售达方').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-CL-表格售达方').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDCX'){\n    focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CL-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-CX-表格售达方').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-CX-表格售达方').getValue(CtrlValueGetter('key'))\n}\nif(load_type == 'GDWL'){\n    focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CL-表格营销组织').getValue(CtrlValueGetter('key'))\n    customername = focusRow.getCtrl('GD-WL-表格售达方').getValue(CtrlValueGetter('text'))\n    customerid = focusRow.getCtrl('GD-WL-表格售达方').getValue(CtrlValueGetter('key'))\n}\n\nPage.getCtrl('TCST-查询-加载类型').value = load_type\n//渠道加载\nvar qdData = Page.getPickerCtrl('JB-渠道').getOption()\nvar qdSetter = PickerCtrlOptionSetter();\nqdSetter.append(\"id\", \"id\");\nqdSetter.append(\"key\", \"key\");\nqdSetter.append(\"keypath\", \"keypath\");\nqdSetter.append(\"text\", \"text\");\nqdSetter.append(\"isselected\", \"isselected\");\n\nPage.getPickerCtrl('TCST-查询-渠道').setOption(qdData, qdSetter);\nif(customerid != null && customerid != ''){\n    Page.getCtrl('TCST-查询-售达方名称/编码').value = customername\n    Page.getCtrl('TCST-查询-售达方名称/编码').readonly = true\n}else{\n    Page.getCtrl('TCST-查询-售达方名称/编码').value = ''\n    Page.getCtrl('TCST-查询-售达方名称/编码').readonly = false\n}\n\nPage.getCtrl('TCST-查询-营销组织父id').value = parentorgstructid\nPage.runEvent('TCST-查询-营销组织-加载')\n\nPage.runEvent('TCST-送达方列表-加载事件')"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308658",
//                 "desc": "TCST-送达方列表-加载事件",
//                 "name": "TCST-送达方列表-加载事件",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308657",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1731629731482308656",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "xxw_store",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "storecode",
//                                         "propertyname": "送达方编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308695",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channeltype",
//                                         "propertyname": "渠道",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308697",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "saleareaid",
//                                         "propertyname": "组织id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308694",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "propertyname": "售达方编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308696",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "load_type",
//                                         "propertyname": "加载类型",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308652",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_store",
//                                 "datatype": "1",
//                                 "ctrlcode": "1731629731482308698",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308693",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "storecode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308689",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "storename",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308688",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308691",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channelname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308690",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_full",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308687",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "salearea_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "channel_text",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308692",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "load_type",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308651",
//                 "desc": "TCP-产品列表-加载事件",
//                 "name": "TCP-产品列表-加载事件",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308650",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1731629731482308654",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "xxw_finished_material",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "productcode",
//                                         "alias": "",
//                                         "propertyname": "产品编码",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308682",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "companybrand",
//                                         "alias": "",
//                                         "propertyname": "公司品牌",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308680",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productbrand",
//                                         "alias": "",
//                                         "propertyname": "产品品牌",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308680",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productcategory",
//                                         "alias": "",
//                                         "propertyname": "产品大类",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308678",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "keyproduct",
//                                         "alias": "",
//                                         "propertyname": "重点产品",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308676",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "newstatus",
//                                         "alias": "",
//                                         "propertyname": "是否新品",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308675",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productmiddle",
//                                         "alias": "",
//                                         "propertyname": "产品中类",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308677",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productgroupname",
//                                         "alias": "",
//                                         "propertyname": "产品组名称",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308681",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_finished_material",
//                                 "datatype": "1",
//                                 "ctrlcode": "1731629731482308683",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308670",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308665",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308666",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "companybrand",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308668",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productbrand",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308669",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productcategory",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308674",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "keyproduct",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308673",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "newstatus",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308672",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productmiddle",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308671",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productgroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1731629731482308667",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308641",
//                 "desc": "GD-TY-表格客户-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308640",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\nif(focusRow.getCtrl('GD-TY-表格客户').value === '1'){\n    Page.runEvent('TC-客户选择')\n    focusRow.getCtrl('GD-TY-表格客户').value = ''\n}\n\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308638",
//                 "desc": "GD-TY-表格售达方-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308637",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\nif(focusRow.getCtrl('GD-TY-表格售达方').value === '1'){\n    if(focusRow.getCtrl('GD-TY-表格客户').value == ''){\n        Page.alert('info','请先选择客户')\n    }else{\n        Page.runEvent('TC-售达方选择')     \n    }\n    focusRow.getCtrl('GD-TY-表格售达方').value = ''\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308635",
//                 "desc": "GD-TY-表格送达方-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308634",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\nif(focusRow.getCtrl('GD-TY-表格送达方').value === '1'){\n    if(focusRow.getCtrl('GD-TY-表格售达方').value == ''){\n        Page.alert('info','请先选择售达方')\n    }else{\n        Page.runEvent('TC-送达方选择') \n    }\n    focusRow.getCtrl('GD-TY-表格送达方').value = ''\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308633",
//                 "desc": "TCST-送达方列表确定选择",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308632",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取弹窗勾选项\ndebugger\nvar load_type = Page.getCtrl('TCST-查询-加载类型').value\nvar checkRows = Page.getArrayCtrl('TCST-送达方列表').getCheckedRows()\n\nif(load_type == 'GDTY'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有送达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCST-送达方列表-送达方id').value,\n            text: checkRows[0].getCtrl('TCST-送达方列表-送达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-TY-表格送达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-TY-表格送达方').value = checkRows[0].getCtrl('TCST-送达方列表-送达方id').value\n    }\n}\nif(load_type == 'GDCL'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有送达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCST-送达方列表-送达方id').value,\n            text: checkRows[0].getCtrl('TCST-送达方列表-送达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-CL-表格送达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-CL-表格送达方').value = checkRows[0].getCtrl('TCST-送达方列表-送达方id').value\n    }\n}\nif(load_type == 'GDCX'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有送达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCST-送达方列表-送达方id').value,\n            text: checkRows[0].getCtrl('TCST-送达方列表-送达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-CX-表格送达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-CX-表格送达方').value = checkRows[0].getCtrl('TCST-送达方列表-送达方id').value\n    }\n}\nif(load_type == 'GDWL'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'},\n            {key: 2,text: '所有送达方',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCST-送达方列表-送达方id').value,\n            text: checkRows[0].getCtrl('TCST-送达方列表-送达方名称').value,\n            isselected: '1'\n        }) \n        focusRow.getPickerCtrl('GD-WL-表格送达方').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-WL-表格送达方').value = checkRows[0].getCtrl('TCST-送达方列表-送达方id').value\n    }\n}\n"
//                     },
//                     {
//                         "code": "1731629731482308631",
//                         "type": "closesubview",
//                         "desc": "关闭popview",
//                         "condition": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308629",
//                 "desc": "GD-TY-表格活动产品-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308628",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\nvar products = focusRow.getCtrl('GD-TY-表格活动产品').value\nif(products != ''){\n    products = JSON.parse(products)\n}\n\n//1729384673274105856\t产品组\nvar range = focusRow.getCtrl('GD-TY-表格产品范围').getValue(CtrlValueGetter('text'))\n\nif(products.indexOf('1') != -1 || products.indexOf(1) != -1){\n    if(range == ''){\n        Page.alert('info','请先选择产品范围')\n    }else if(range != '产品组'){\n        Page.runEvent('TC-产品选择')\n    }\n\n    if(range == '产品组'){\n        Page.runEvent('TC-产品组选择')\n    }\n    focusRow.getCtrl('GD-TY-表格活动产品').value = ''\n}\n\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1731629731482308627",
//                 "desc": "TC-产品选择",
//                 "name": "TC-产品选择",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1731629731482308626",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1731629731482308685",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "选择产品"
//                     },
//                     {
//                         "code": "1731629731482308625",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar load_type = Page.getCtrl('固定类促销-加载类型').value\n//定义焦点项\nvar focusRow\nif(load_type == 'GDTY'){\n    focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n}\nif(load_type == 'GDCL'){\n    focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n}\nif(load_type == 'GDCX'){\n    focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n}\nif(load_type == 'GDWL'){\n    focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n}\n\nPage.getCtrl('TCP-查询-加载类型').value = load_type\n// var customername = focusRow.getCtrl('GD-TY-表格产品范围').getValue(CtrlValueGetter('text'))\n// var customerid = focusRow.getCtrl('GD-TY-表格产品范围').getValue(CtrlValueGetter('key'))\n// if(customerid != null && customerid != ''){\n//     Page.getCtrl('TCST-查询-售达方名称/编码').value = customername\n//     Page.getCtrl('TCST-查询-售达方名称/编码').readonly = true\n// }else{\n//     Page.getCtrl('TCST-查询-售达方名称/编码').value = ''\n//     Page.getCtrl('TCST-查询-售达方名称/编码').readonly = false\n// }\nlet ctrl = Page.getArrayCtrl('TCP-产品列表')\n\n// 返回一个数组，包含信息表格所有按钮的Ctrl\nlet btnCtrls = ctrl.getHeaderButtons()\n\n// 修改第二个按钮的隐藏属性\nif (btnCtrls[0]) {\n    btnCtrls[0].hidden = true\n}\n\nPage.runEvent('TCP-产品列表-加载事件')"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732198974447816803",
//                 "desc": "TCP-产品列表确认选择（多选）",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732198974447816802",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取弹窗勾选项\ndebugger\nvar load_type = Page.getCtrl('TCP-查询-加载类型').value\nvar checkRows = Page.getArrayCtrl('TCP-产品列表').getCheckedRows()\n\nif(load_type == 'GDTY'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    if (focusRow != null) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = []\n        var checkKeys = []\n        for(var item of checkRows){\n            oldOptions.push({\n                key: item.getCtrl('TCP-产品列表产品id').value,\n                text: item.getCtrl('TCP-产品列表产品名称').value,\n                isselected: '1'\n            }) \n            checkKeys.push(item.getCtrl('TCP-产品列表产品id').value)\n        }\n        oldOptions.push({key: 1, text: '请选择', isselected: '0'})\n\n        focusRow.getPickerCtrl('GD-TY-表格活动产品').setOption(oldOptions, setter);\n\n        focusRow.getCtrl('GD-TY-表格活动产品').value = checkKeys\n    }\n}\n"
//                     },
//                     {
//                         "code": "1732198974447816801",
//                         "type": "closesubview",
//                         "desc": "关闭popview",
//                         "condition": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1732202391702474851",
//                 "desc": "TC-产品组选择",
//                 "name": "TC-产品组选择",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732202391702474850",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1732202391702474848",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "产品组选择"
//                     },
//                     {
//                         "code": "1732202391702474849",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "\ndebugger\nvar load_type = Page.getCtrl('固定类促销-加载类型').value\n//定义焦点项\nvar focusRow\nif(load_type == 'GDTY'){\n    focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n}\nif(load_type == 'GDCL'){\n    focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n}\nif(load_type == 'GDCX'){\n    focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\n}\nif(load_type == 'GDWL'){\n    focusRow = Page.getArrayCtrl('GD-WL-表格').getFocusRow()\n}\n\nPage.getCtrl('TCPG-查询-加载类型').value = load_type\n\n//获取焦点项\n// var focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n// var customername = focusRow.getCtrl('GD-TY-表格产品范围').getValue(CtrlValueGetter('text'))\n// var customerid = focusRow.getCtrl('GD-TY-表格产品范围').getValue(CtrlValueGetter('key'))\n// if(customerid != null && customerid != ''){\n//     Page.getCtrl('TCST-查询-售达方名称/编码').value = customername\n//     Page.getCtrl('TCST-查询-售达方名称/编码').readonly = true\n// }else{\n//     Page.getCtrl('TCST-查询-售达方名称/编码').value = ''\n//     Page.getCtrl('TCST-查询-售达方名称/编码').readonly = false\n// }\nPage.runEvent('TCPG-产品组列表-加载事件')"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732202391702474837",
//                 "desc": "TCPG-产品组列表-加载事件",
//                 "name": "TCPG-产品组列表-加载事件",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732202391702474836",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1732202391702474835",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "xxw_product_group",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "group_code",
//                                         "alias": "",
//                                         "propertyname": "产品组编码",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732202391702474845",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "product_name",
//                                         "alias": "",
//                                         "propertyname": "成品物料名称",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732202391702474844",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "xxw_product_group",
//                                 "datatype": "1",
//                                 "ctrlcode": "1732202391702474846",
//                                 "properties": [
//                                     {
//                                         "name": "id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732202391702474842",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "group_code",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732202391702474841",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "group_name",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732202391702474840",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732202391702474839",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "productname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732202391702474838",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1732202391702474833",
//                 "desc": "TCPG-产品组列表确认选择",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732202391702474832",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取弹窗勾选项\ndebugger\nvar load_type = Page.getCtrl('TCPG-查询-加载类型').value\nvar checkRows = Page.getArrayCtrl('TCPG-产品组列表').getCheckedRows()\n\nif(load_type == 'GDTY'){\n    //通用页面选择\n    var focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\n    if (focusRow != null && checkRows.length == 1) {\n        //取得焦点所在行\n\n        var setter = PickerCtrlOptionSetter();\n        setter.append(\"key\", \"key\");\n        setter.append(\"text\", \"text\");\n        setter.append(\"isselected\", \"isselected\");\n\n        var oldOptions = [\n            {key: 1,text: '请选择',isselected: '0'}\n        ]\n\n        oldOptions.push({\n            key: checkRows[0].getCtrl('TCPG-产品组列表-产品组id').value,\n            text: checkRows[0].getCtrl('TCPG-产品组列表-产品组名称').value,\n            isselected: '1'\n        }) \n\n        focusRow.getPickerCtrl('GD-TY-表格活动产品').setOption(oldOptions, setter);\n\n        var checkKeys = []\n        checkKeys.push(checkRows[0].getCtrl('TCPG-产品组列表-产品组id').value)\n        focusRow.getCtrl('GD-TY-表格活动产品').value = checkKeys\n    }\n}\n"
//                     },
//                     {
//                         "code": "1732202391702474831",
//                         "type": "closesubview",
//                         "desc": "关闭popview",
//                         "condition": ""
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062819",
//                 "desc": "GD-TY-表格产品范围-加载事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062818",
//                         "type": "datarequest",
//                         "desc": "数据字典绑定",
//                         "condition": "",
//                         "binddic": "1729378892764024931",
//                         "logiccode": "100000000001100001",
//                         "mode": "1",
//                         "queue": "0",
//                         "_type_spe": "dictbind",
//                         "bind": "",
//                         "getter": [
//                             {
//                                 "name": "pl_dictionary",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "dictionarycode",
//                                         "value": "1729378892764024931",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "code",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentdickey",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "value": "1",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "objectmark",
//                                         "value": "xxw_product_range",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "excludeids",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_dictionary",
//                                 "datatype": "1",
//                                 "ctrlcode": "1730400843984932961",
//                                 "properties": [
//                                     {
//                                         "name": "dictionaryid",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "id"
//                                         }
//                                     },
//                                     {
//                                         "name": "parentdictionaryid",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "parentid"
//                                         }
//                                     },
//                                     {
//                                         "name": "dickey",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "dicvalue",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "text"
//                                         }
//                                     },
//                                     {
//                                         "name": "keypath",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "keypath"
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062817",
//                 "desc": "GD-TY-表格产品范围-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062816",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取弹窗勾选项\ndebugger\n\nvar focusRow = Page.getArrayCtrl('GD-TY-表格').getFocusRow()\nif (focusRow != null) {\n    //取得焦点所在行\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"isselected\", \"isselected\");\n\n    var oldOptions = [{key: 1, text: '请选择', isselected: '0'}]\n\n    focusRow.getPickerCtrl('GD-TY-表格活动产品').setOption(oldOptions, setter);\n\n    focusRow.getCtrl('GD-TY-表格活动产品').value = ''\n}\n\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062815",
//                 "desc": "GD-TY-表格复制行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062814",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取勾选项\ndebugger\nvar checked = Page.getArrayCtrl('GD-TY-表格').getInScope('checked')\nvar checkRows = Page.getArrayCtrl('GD-TY-表格').getCheckedRows()\nvar array = Page.getArrayCtrl('GD-TY-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n\nif (checkRows.length == 1) {\n    //获取下拉选项options\n    var saleareaSetter = PickerCtrlOptionSetter();\n    saleareaSetter.append(\"key\", \"key\");\n    saleareaSetter.append(\"text\", \"text\");\n    saleareaSetter.append(\"id\", \"id\");\n    saleareaSetter.append(\"parentid\", \"parentid\");\n    saleareaSetter.append(\"isselected\", \"isselected\");\n    \n\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"isselected\", \"isselected\");\n    \n\n    var saleareaOptions = checkRows[0].getPickerCtrl('GD-TY-表格营销组织').getOption()\n    var customerOptions = checkRows[0].getPickerCtrl('GD-TY-表格客户').getOption()\n    var channelOptions = checkRows[0].getPickerCtrl('GD-TY-表格售达方').getOption()\n    var storeOptions = checkRows[0].getPickerCtrl('GD-TY-表格送达方').getOption()\n    var proudctOptions = checkRows[0].getPickerCtrl('GD-TY-表格活动产品').getOption()\n    //取得焦点所在行\n    var result = Page.getArrayCtrl('GD-TY-表格').append(checked, 'tail', null)\n    if(result == true) {\n        //插入成功\n        var indexes = [num];\n        var rows = Page.getArrayCtrl('GD-TY-表格').getRowAtIndexes([num]);\n        if (rows != null) {\n            for(var i = 0; i < rows.length; i++) {\n                var row = rows[i];\n                //做一些操作，如设置row的下拉选项\n                row.getPickerCtrl('GD-TY-表格营销组织').setOption(saleareaOptions, saleareaSetter);\n                row.getPickerCtrl('GD-TY-表格客户').setOption(customerOptions, setter);\n                row.getPickerCtrl('GD-TY-表格售达方').setOption(channelOptions, setter);\n                row.getPickerCtrl('GD-TY-表格送达方').setOption(storeOptions, setter);\n                row.getPickerCtrl('GD-TY-表格活动产品').setOption(proudctOptions, setter);\n            }\n        }\n        Page.alert('info','复制成功')\n    }\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062788",
//                 "desc": "GD-CL-表格新增行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062787",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//在最后面插入数据\ndebugger\nvar salearea_range = Page.getCtrl('JB-投放范围').value\nvar saleareasData = Page.getValue(\"saleareasData\")\nvar array = Page.getArrayCtrl('GD-CL-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n \nif(salearea_range == '1'){\n    //构建setter\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"parentid\", \"parentid\");\n    //设置选项数据\n    if(saleareasData){\n        \n        // Page.getPickerCtrl('客户类型').setOption(data, setter);\n        var result = Page.getArrayCtrl('GD-CL-表格').append([{}], 'tail', null)\n        if(result == true) {\n            //插入成功\n            var indexes = [num];\n            var rows = Page.getArrayCtrl('GD-CL-表格').getRowAtIndexes([num]);\n            if (rows != null) {\n                for(var i = 0; i < rows.length; i++) {\n                    var row = rows[i];\n                    //做一些操作，如设置row的下拉选项\n                    row.getPickerCtrl('GD-CL-表格营销组织').setOption(saleareasData, setter);\n                }\n            }\n            Page.alert('info','插入成功')\n        }\n    }else{\n        Page.alert('info','【投放范围】投放区域未设置')\n    }\n\n}else if(salearea_range == '2'){\n    var textInput = Page.getArrayCtrl('GD-CL-表格').getColByName('GD-CL-表格营销组织')\n    if (textInput != null) {\n        textInput.readonly = true;\n    }\n    var result = Page.getArrayCtrl('GD-CL-表格').append([{}], 'tail', null)\n    if(result == true) {\n        //插入成功\n        // array[num].getCtrl('GD-CL-表格营销组织').readonly = true\n        \n        Page.alert('info','插入成功')\n    }\n}else{\n    Page.alert('info','【基本信息】投放区域未设置')\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062786",
//                 "desc": "GD-CL-表格复制行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062785",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取勾选项\ndebugger\nvar checked = Page.getArrayCtrl('GD-CL-表格').getInScope('checked')\nvar checkRows = Page.getArrayCtrl('GD-CL-表格').getCheckedRows()\nvar array = Page.getArrayCtrl('GD-CL-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n\nif (checkRows.length == 1) {\n    //获取下拉选项options\n    var saleareaSetter = PickerCtrlOptionSetter();\n    saleareaSetter.append(\"key\", \"key\");\n    saleareaSetter.append(\"text\", \"text\");\n    saleareaSetter.append(\"id\", \"id\");\n    saleareaSetter.append(\"parentid\", \"parentid\");\n    saleareaSetter.append(\"isselected\", \"isselected\");\n    \n\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"isselected\", \"isselected\");\n    \n\n    var saleareaOptions = checkRows[0].getPickerCtrl('GD-CL-表格营销组织').getOption()\n    var customerOptions = checkRows[0].getPickerCtrl('GD-CL-表格客户').getOption()\n    var channelOptions = checkRows[0].getPickerCtrl('GD-CL-表格售达方').getOption()\n    var wdOptions = checkRows[0].getPickerCtrl('GD-CL-表格网点名称').getOption()\n    //取得焦点所在行\n    var result = Page.getArrayCtrl('GD-CL-表格').append(checked, 'tail', null)\n    if(result == true) {\n        //插入成功\n        var indexes = [num];\n        var rows = Page.getArrayCtrl('GD-CL-表格').getRowAtIndexes([num]);\n        if (rows != null) {\n            for(var i = 0; i < rows.length; i++) {\n                var row = rows[i];\n                //做一些操作，如设置row的下拉选项\n                row.getPickerCtrl('GD-CL-表格营销组织').setOption(saleareaOptions, saleareaSetter);\n                row.getPickerCtrl('GD-CL-表格客户').setOption(customerOptions, setter);\n                row.getPickerCtrl('GD-CL-表格售达方').setOption(channelOptions, setter);\n                row.getPickerCtrl('GD-CL-表格网点名称').setOption(wdOptions, setter);\n            }\n        }\n        Page.alert('info','复制成功')\n    }\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062784",
//                 "desc": "GD-CL-表格删除行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062783",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar result = Page.getArrayCtrl('GD-CL-表格').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062778",
//                 "desc": "GD-CL-表格客户-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062777",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\nif(focusRow.getCtrl('GD-CL-表格客户').value === '1'){\n    Page.runEvent('TC-客户选择')\n    focusRow.getCtrl('GD-CL-表格客户').value = ''\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062776",
//                 "desc": "固定类促销-tabboard-tab切换事件(共用)",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062775",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取tab对象\nvar tabBoardGD = Page.getCtrl(\"固定类促销-tabboard\")\n// 获取当前显示的页签\nvar indexGD = tabBoardGD.getProperty('index')\n//0通用1陈列2促销员3物料\nif(indexGD == 0){\n    Page.getCtrl('固定类促销-加载类型').value = 'GDTY'\n}\nif(indexGD == 1){\n    Page.getCtrl('固定类促销-加载类型').value = 'GDCL'\n}\nif(indexGD == 2){\n    Page.getCtrl('固定类促销-加载类型').value = 'GDCX'\n}\nif(indexGD == 3){\n    Page.getCtrl('固定类促销-加载类型').value = 'GDWL'\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062773",
//                 "desc": "GD-CL-表格售达方-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062772",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\nif(focusRow.getCtrl('GD-CL-表格售达方').value === '1'){\n    if(focusRow.getCtrl('GD-CL-表格客户').value == ''){\n        Page.alert('info','请先选择客户')\n    }else{\n        Page.runEvent('TC-售达方选择')     \n    }\n    focusRow.getCtrl('GD-CL-表格售达方').value = ''\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062771",
//                 "desc": "GD-CL-表格网点名称-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062770",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\nvar wdname = focusRow.getCtrl('GD-CL-表格网点名称').value\nif(wdname != ''){\n    wdname = JSON.parse(wdname)\n}\nif(wdname.indexOf('1') != -1){\n    Page.runEvent('TC-网点选择')\n    focusRow.getCtrl('GD-CL-表格网点名称').value = ''\n}\n\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732214712332062769",
//                 "desc": "TC-网点选择",
//                 "name": "TC-网点选择",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732214712332062768",
//                         "type": "popsubview",
//                         "desc": "打开popview",
//                         "condition": "",
//                         "viewcode": "1732214712332062766",
//                         "viewwidth": "1000",
//                         "viewheight": "650",
//                         "viewtitle": "网点选择"
//                     },
//                     {
//                         "code": "1732214712332062767",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar load_type = Page.getCtrl('固定类促销-加载类型').value\n//定义焦点项\nvar focusRow,channelname,channelid,parentorgstructid\nif(load_type == 'GDCL'){\n    focusRow = Page.getArrayCtrl('GD-CL-表格').getFocusRow()\n    parentorgstructid = focusRow.getCtrl('GD-CL-表格营销组织').getValue(CtrlValueGetter('key'))\n    channelname = focusRow.getCtrl('GD-CL-表格售达方').getValue(CtrlValueGetter('text'))\n    channelid = focusRow.getCtrl('GD-CL-表格售达方').getValue(CtrlValueGetter('key'))\n}\n\nPage.getCtrl('TCWD-查询-加载类型').value = load_type\nPage.getCtrl('TCWD-查询-售达方编码/名称').value = channelname\nPage.getCtrl('TCWD-查询-售达方编码/名称').readonly = true\n\nPage.getCtrl('TCWD-查询-营销组织父id').value = parentorgstructid\nPage.runEvent('TCWD-查询-营销组织-加载')\nPage.runEvent('TCWD-网点列表-加载事件')"
//                     }
//                 ]
//             },
//             {
//                 "code": "917018469309843063",
//                 "desc": "TCWD-网点列表-加载事件",
//                 "name": "TCWD-网点列表-加载事件",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732297702370316387",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [],
//                         "setter": []
//                     }
//                 ]
//             },
//             {
//                 "code": "1732297702370316383",
//                 "desc": "TCS-查询-营销组织-加载",
//                 "name": "TCS-查询-营销组织-加载",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732297702370316382",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1729704190114140239",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "propertyname": "营销组织",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "pl_org",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgaccountcode",
//                                         "alias": "",
//                                         "propertyname": "组织编码",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "alias": "",
//                                         "propertyname": "组织名称",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "alias": "",
//                                         "propertyname": "状态",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "alias": "",
//                                         "propertyname": "父级id",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732297702370316384",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "alias": "",
//                                         "propertyname": "客户组名称",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrlcode": "1731591338824175712",
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "parentid"
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "text"
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid__orgaccountcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "codepath",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "fullname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "seq",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "groupid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "id"
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1732297702370316381",
//                 "desc": "TCST-查询-营销组织-加载",
//                 "name": "TCST-查询-营销组织-加载",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732297702370316382",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1729704190114140239",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "propertyname": "营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "pl_org",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgaccountcode",
//                                         "propertyname": "组织编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "propertyname": "组织名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "propertyname": "状态",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "propertyname": "父级id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732297702370316386",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "propertyname": "客户组名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrlcode": "1731629731482308694",
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "parentid"
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "text"
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid__orgaccountcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "codepath",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "fullname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "seq",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "groupid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "id"
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1732297702370316380",
//                 "desc": "TCWD-查询-营销组织-加载",
//                 "name": "TCWD-查询-营销组织-加载",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732297702370316382",
//                         "type": "datarequest",
//                         "desc": "数据请求",
//                         "condition": "",
//                         "logiccode": "1729704190114140239",
//                         "mode": "1",
//                         "queue": "0",
//                         "pagesize": "",
//                         "pagesource": "",
//                         "hasextraparams": "",
//                         "sorter": "",
//                         "lazyload": "",
//                         "getter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "propertyname": "营销组织",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             },
//                             {
//                                 "name": "pl_org",
//                                 "datatype": "0",
//                                 "ctrl": {
//                                     "code": "",
//                                     "scope": ""
//                                 },
//                                 "properties": [
//                                     {
//                                         "name": "orgaccountcode",
//                                         "propertyname": "组织编码",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "propertyname": "组织名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "propertyname": "状态",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "propertyname": "父级id",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "1732297702370316385",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "propertyname": "客户组名称",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     }
//                                 ]
//                             }
//                         ],
//                         "setter": [
//                             {
//                                 "name": "pl_salearea",
//                                 "datatype": "1",
//                                 "ctrlcode": "1732214712332062763",
//                                 "properties": [
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "key"
//                                         }
//                                     },
//                                     {
//                                         "name": "parentorgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "parentid"
//                                         }
//                                     },
//                                     {
//                                         "name": "orgname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "text"
//                                         }
//                                     },
//                                     {
//                                         "name": "status",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgid__orgaccountcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "codepath",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "fullname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "level",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "seq",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "groupid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupcode",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "customergroupname",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": ""
//                                         }
//                                     },
//                                     {
//                                         "name": "orgstructid",
//                                         "alias": "",
//                                         "value": "",
//                                         "ctrl": {
//                                             "code": "",
//                                             "component": "id"
//                                         }
//                                     }
//                                 ]
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127938",
//                 "desc": "GD-CX-表格新增行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127937",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//在最后面插入数据\ndebugger\nvar salearea_range = Page.getCtrl('JB-投放范围').value\nvar saleareasData = Page.getValue(\"saleareasData\")\nvar array = Page.getArrayCtrl('GD-CX-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n \nif(salearea_range == '1'){\n    //构建setter\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"parentid\", \"parentid\");\n    //设置选项数据\n    if(saleareasData){\n        \n        // Page.getPickerCtrl('客户类型').setOption(data, setter);\n        var result = Page.getArrayCtrl('GD-CX-表格').append([{}], 'tail', null)\n        if(result == true) {\n            //插入成功\n            var indexes = [num];\n            var rows = Page.getArrayCtrl('GD-CX-表格').getRowAtIndexes([num]);\n            if (rows != null) {\n                for(var i = 0; i < rows.length; i++) {\n                    var row = rows[i];\n                    //做一些操作，如设置row的下拉选项\n                    row.getPickerCtrl('GD-CX-表格营销组织').setOption(saleareasData, setter);\n                }\n            }\n            Page.alert('info','插入成功')\n        }\n    }else{\n        Page.alert('info','【投放范围】投放区域未设置')\n    }\n\n}else if(salearea_range == '2'){\n    var textInput = Page.getArrayCtrl('GD-CX-表格').getColByName('GD-CX-表格营销组织')\n    if (textInput != null) {\n        textInput.readonly = true;\n    }\n    var result = Page.getArrayCtrl('GD-CX-表格').append([{}], 'tail', null)\n    if(result == true) {\n        //插入成功\n        // array[num].getCtrl('GD-TY-表格营销组织').readonly = true\n        \n        Page.alert('info','插入成功')\n    }\n}else{\n    Page.alert('info','【基本信息】投放区域未设置')\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127936",
//                 "desc": "GD-CX-表格复制行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127935",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取勾选项\ndebugger\nvar checked = Page.getArrayCtrl('GD-CX-表格').getInScope('checked')\nvar checkRows = Page.getArrayCtrl('GD-CX-表格').getCheckedRows()\nvar array = Page.getArrayCtrl('GD-CX-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n\nif (checkRows.length == 1) {\n    //获取下拉选项options\n    var saleareaSetter = PickerCtrlOptionSetter();\n    saleareaSetter.append(\"key\", \"key\");\n    saleareaSetter.append(\"text\", \"text\");\n    saleareaSetter.append(\"id\", \"id\");\n    saleareaSetter.append(\"parentid\", \"parentid\");\n    saleareaSetter.append(\"isselected\", \"isselected\");\n    \n\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"isselected\", \"isselected\");\n    \n\n    var saleareaOptions = checkRows[0].getPickerCtrl('GD-CX-表格营销组织').getOption()\n    var customerOptions = checkRows[0].getPickerCtrl('GD-CX-表格客户').getOption()\n    var channelOptions = checkRows[0].getPickerCtrl('GD-CX-表格售达方').getOption()\n    var storeOptions = checkRows[0].getPickerCtrl('GD-CX-表格送达方').getOption()\n    //取得焦点所在行\n    var result = Page.getArrayCtrl('GD-CX-表格').append(checked, 'tail', null)\n    if(result == true) {\n        //插入成功\n        var indexes = [num];\n        var rows = Page.getArrayCtrl('GD-CX-表格').getRowAtIndexes([num]);\n        if (rows != null) {\n            for(var i = 0; i < rows.length; i++) {\n                var row = rows[i];\n                //做一些操作，如设置row的下拉选项\n                row.getPickerCtrl('GD-CX-表格营销组织').setOption(saleareaOptions, saleareaSetter);\n                row.getPickerCtrl('GD-CX-表格客户').setOption(customerOptions, setter);\n                row.getPickerCtrl('GD-CX-表格售达方').setOption(channelOptions, setter);\n                row.getPickerCtrl('GD-CX-表格送达方').setOption(storeOptions, setter);\n            }\n        }\n        Page.alert('info','复制成功')\n    }\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127934",
//                 "desc": "GD-CX-表格删除行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127933",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar result = Page.getArrayCtrl('GD-CX-表格').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127932",
//                 "desc": "GD-CX-表格客户-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127931",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\nif(focusRow.getCtrl('GD-CX-表格客户').value === '1'){\n    Page.runEvent('TC-客户选择')\n    focusRow.getCtrl('GD-CX-表格客户').value = ''\n}\n\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127930",
//                 "desc": "GD-CX-表格售达方-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127929",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\nif(focusRow.getCtrl('GD-CX-表格售达方').value === '1'){\n    if(focusRow.getCtrl('GD-CX-表格客户').value == ''){\n        Page.alert('info','请先选择客户')\n    }else{\n        Page.runEvent('TC-售达方选择')     \n    }\n    focusRow.getCtrl('GD-CX-表格售达方').value = ''\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127928",
//                 "desc": "GD-CX-表格送达方-值改变时",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127927",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取列表焦点项\n//获取弹窗勾选项\ndebugger\nvar focusRow = Page.getArrayCtrl('GD-CX-表格').getFocusRow()\nif(focusRow.getCtrl('GD-CX-表格送达方').value === '1'){\n    if(focusRow.getCtrl('GD-CX-表格售达方').value == ''){\n        Page.alert('info','请先选择售达方')\n    }else{\n        Page.runEvent('TC-送达方选择') \n    }\n    focusRow.getCtrl('GD-CX-表格送达方').value = ''\n}"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127926",
//                 "desc": "GD-WL-表格新增行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127925",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//在最后面插入数据\ndebugger\nvar salearea_range = Page.getCtrl('JB-投放范围').value\nvar saleareasData = Page.getValue(\"saleareasData\")\nvar array = Page.getArrayCtrl('GD-WL-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n \nif(salearea_range == '1'){\n    //构建setter\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"parentid\", \"parentid\");\n    //设置选项数据\n    if(saleareasData){\n        \n        // Page.getPickerCtrl('客户类型').setOption(data, setter);\n        var result = Page.getArrayCtrl('GD-WL-表格').append([{}], 'tail', null)\n        if(result == true) {\n            //插入成功\n            var indexes = [num];\n            var rows = Page.getArrayCtrl('GD-WL-表格').getRowAtIndexes([num]);\n            if (rows != null) {\n                for(var i = 0; i < rows.length; i++) {\n                    var row = rows[i];\n                    //做一些操作，如设置row的下拉选项\n                    row.getPickerCtrl('GD-WL-表格营销组织').setOption(saleareasData, setter);\n                }\n            }\n            Page.alert('info','插入成功')\n        }\n    }else{\n        Page.alert('info','【投放范围】投放区域未设置')\n    }\n\n}else if(salearea_range == '2'){\n    var textInput = Page.getArrayCtrl('GD-WL-表格').getColByName('GD-WL-表格营销组织')\n    if (textInput != null) {\n        textInput.readonly = true;\n    }\n    var result = Page.getArrayCtrl('GD-WL-表格').append([{}], 'tail', null)\n    if(result == true) {\n        //插入成功\n        // array[num].getCtrl('GD-WL-表格营销组织').readonly = true\n        \n        Page.alert('info','插入成功')\n    }\n}else{\n    Page.alert('info','【基本信息】投放区域未设置')\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127924",
//                 "desc": "GD-WL-表格复制行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127923",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "//获取勾选项\ndebugger\nvar checked = Page.getArrayCtrl('GD-WL-表格').getInScope('checked')\nvar checkRows = Page.getArrayCtrl('GD-WL-表格').getCheckedRows()\nvar array = Page.getArrayCtrl('GD-WL-表格').getAllRows()\nvar num = 0\nif(array.length != 0){\n    var num = array.length\n}\n\nif (checkRows.length == 1) {\n    //获取下拉选项options\n    var saleareaSetter = PickerCtrlOptionSetter();\n    saleareaSetter.append(\"key\", \"key\");\n    saleareaSetter.append(\"text\", \"text\");\n    saleareaSetter.append(\"id\", \"id\");\n    saleareaSetter.append(\"parentid\", \"parentid\");\n    saleareaSetter.append(\"isselected\", \"isselected\");\n    \n\n    var setter = PickerCtrlOptionSetter();\n    setter.append(\"key\", \"key\");\n    setter.append(\"text\", \"text\");\n    setter.append(\"id\", \"id\");\n    setter.append(\"isselected\", \"isselected\");\n    \n\n    var saleareaOptions = checkRows[0].getPickerCtrl('GD-WL-表格营销组织').getOption()\n    var customerOptions = checkRows[0].getPickerCtrl('GD-WL-表格客户').getOption()\n    var channelOptions = checkRows[0].getPickerCtrl('GD-WL-表格售达方').getOption()\n    var storeOptions = checkRows[0].getPickerCtrl('GD-WL-表格送达方').getOption()\n    //取得焦点所在行\n    var result = Page.getArrayCtrl('GD-WL-表格').append(checked, 'tail', null)\n    if(result == true) {\n        //插入成功\n        var indexes = [num];\n        var rows = Page.getArrayCtrl('GD-WL-表格').getRowAtIndexes([num]);\n        if (rows != null) {\n            for(var i = 0; i < rows.length; i++) {\n                var row = rows[i];\n                //做一些操作，如设置row的下拉选项\n                row.getPickerCtrl('GD-WL-表格营销组织').setOption(saleareaOptions, saleareaSetter);\n                row.getPickerCtrl('GD-WL-表格客户').setOption(customerOptions, setter);\n                row.getPickerCtrl('GD-WL-表格售达方').setOption(channelOptions, setter);\n                row.getPickerCtrl('GD-WL-表格送达方').setOption(storeOptions, setter);\n            }\n        }\n        Page.alert('info','复制成功')\n    }\n}\n"
//                     }
//                 ]
//             },
//             {
//                 "code": "1732311468898127922",
//                 "desc": "GD-WL-表格删除行-触发事件",
//                 "name": "",
//                 "successhint": "",
//                 "notice": "",
//                 "key": "",
//                 "condition": "",
//                 "remark": "",
//                 "_rel_export_info": "",
//                 "actions": [
//                     {
//                         "code": "1732311468898127921",
//                         "type": "flycode",
//                         "desc": "flycode",
//                         "condition": "",
//                         "script": "debugger\nvar result = Page.getArrayCtrl('GD-WL-表格').deleteInScope('checked')\nif(result == true) {\n    Page.alert('info','清除成功')\n}"
//                     }
//                 ]
//             }
//         ]
//     },
//     "businessmodel": [
//         {
//             "actiontype": "1",
//             "tenantdbtype": "",
//             "modellogiccode": "100000000001100001",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-05-22 14:21\"}",
//             "modellogicname": "字典应用查询",
//             "output": [
//                 {
//                     "objectcode": "829602839767532638",
//                     "datatype": "1",
//                     "name": "pl_dictionary",
//                     "objectname": "业务字典",
//                     "marktype": "1",
//                     "properties": [
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "字典",
//                             "propertytypecode": "6",
//                             "name": "dictionaryid",
//                             "marktype": "1",
//                             "propertycode": "829609839767536111"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "父字典",
//                             "propertytypecode": "1000000000",
//                             "name": "parentdictionaryid",
//                             "marktype": "1",
//                             "propertycode": "829609839767536112"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "字典标识编码",
//                             "propertytypecode": "6",
//                             "name": "dictionarycode",
//                             "marktype": "1",
//                             "propertycode": "829609839767536113"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "字典key",
//                             "propertytypecode": "1",
//                             "name": "dickey",
//                             "marktype": "1",
//                             "propertycode": "829609839767536114"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "编码",
//                             "propertytypecode": "3",
//                             "name": "code",
//                             "marktype": "1",
//                             "propertycode": "819609111767531111"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "对接字典编码",
//                             "propertytypecode": "3",
//                             "name": "dickeycode",
//                             "marktype": "1",
//                             "propertycode": "829609839767536119"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "字典值",
//                             "propertytypecode": "3",
//                             "name": "dicvalue",
//                             "marktype": "1",
//                             "propertycode": "829609839767536115"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "字典值2",
//                             "propertytypecode": "24",
//                             "name": "dicvalue2",
//                             "marktype": "1",
//                             "propertycode": "829609839767536116"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "key路径值",
//                             "propertytypecode": "4",
//                             "name": "keypath",
//                             "marktype": "1",
//                             "propertycode": "829609839767536120"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "name路径值",
//                             "propertytypecode": "4",
//                             "name": "namepath",
//                             "marktype": "1",
//                             "propertycode": "829609839767536130"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "层级",
//                             "propertytypecode": "5",
//                             "name": "level",
//                             "marktype": "1",
//                             "propertycode": "829629839767537131"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "顺序",
//                             "propertytypecode": "20",
//                             "name": "seq",
//                             "marktype": "1",
//                             "propertycode": "829609839767536124"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "状态",
//                             "propertytypecode": "18",
//                             "name": "status",
//                             "marktype": "1",
//                             "propertycode": "829609839767536125"
//                         }
//                     ]
//                 }
//             ],
//             "input": [
//                 {
//                     "objectcode": "829602839767532638",
//                     "datatype": "0",
//                     "name": "pl_dictionary",
//                     "objectname": "业务字典",
//                     "marktype": "1",
//                     "properties": [
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "字典标识编码",
//                             "propertytypecode": "6",
//                             "name": "dictionarycode",
//                             "marktype": "1",
//                             "propertycode": "829609839767536113"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "编码",
//                             "propertytypecode": "3",
//                             "name": "code",
//                             "marktype": "1",
//                             "propertycode": "819609111767531111"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "关联父字典key",
//                             "propertytypecode": "6",
//                             "name": "parentdickey",
//                             "marktype": "1",
//                             "propertycode": "829609839767536230"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "层级",
//                             "propertytypecode": "5",
//                             "name": "level",
//                             "marktype": "1",
//                             "propertycode": "829629839767537131"
//                         },
//                         {
//                             "objectcode": "829602839767532638",
//                             "propertyname": "状态",
//                             "propertytypecode": "18",
//                             "name": "status",
//                             "marktype": "1",
//                             "propertycode": "829609839767536125"
//                         },
//                         {
//                             "objectcode": "",
//                             "propertyname": "对象英文名",
//                             "propertytypecode": "3",
//                             "name": "objectmark",
//                             "marktype": "1",
//                             "propertycode": ""
//                         },
//                         {
//                             "objectcode": "",
//                             "propertyname": "过滤字典id",
//                             "propertytypecode": "4",
//                             "name": "excludeids",
//                             "marktype": "1",
//                             "propertycode": ""
//                         }
//                     ]
//                 }
//             ],
//             "tenantdbname": "",
//             "execmode": "1",
//             "functionname": "",
//             "actioncategory": "1",
//             "tenantdbcode": "1552134600233455616",
//             "modelcode": "100000000000000001",
//             "marktype": "1",
//             "usedatarule": "1",
//             "status": 1
//         },
//         {
//             "modellogicname": "促销活动申请-营销组织加载",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1729704190114140239",
//                     "modellogicstepcode": "1729704190114140238",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-营销组织加载\n */\n\nvar pl_salearea = IN.pl_salearea;\nvar saleareaids = [];\nif(pl_salearea.length > 0){\n    //获取已选择的组织\n    for(var i = 0; i < pl_salearea.length; i ++){\n        if(!String.isBlank(pl_salearea[i].orgstructid)){\n            saleareaids.push(pl_salearea[i].orgstructid + '');\n        }\n    }\n}\n\n\n//平台固定行为 营销组织查询\n\nvar onrule = [\"pl_salearea\"];\n\n//是否为懒加载\nvar lazymode = null;\nvar lazykey = \"\";\nvar lazykeypath = \"\";\nvar lazylevel = 1;\nif(IN.__lazy != null) {\n    lazymode = IN.__lazy.mode;\n    if(lazymode == \"2\" || lazymode == \"3\") {\n        lazykey = IN.__lazy.key!=null ?  IN.__lazy.key : \"\";\n        lazykeypath = IN.__lazy.keypath!=null ? IN.__lazy.keypath:\"\";\n        lazylevel = IN.__lazy.level !=null ? IN.__lazy.level: \"\";\n    }\n    if(lazymode == \"3\" && lazykey != null && (lazykeypath === null || lazykeypath == \"null\" || lazykeypath == \"\"  || lazylevel === null || lazylevel == \"null\" || lazylevel == \"\")) {\n        var lazytemp = select codepath, level from pl_orgstruct where orgstructid = {lazykey}  NORULE;\n        if(lazytemp != null && lazytemp.length > 0) {\n            lazykeypath = lazytemp[0].codepath;\n            lazylevel = lazytemp[0].level;\n        }\n    }\n}\n\nvar temp = SELECT pl_orgstruct.orgstructid AS orgstructid, pl_orgstruct.parentorgstructid AS parentorgstructid, \npl_orgstruct.orgname AS orgname, pl_orgstruct.status AS status, pl_orgstruct.orgstructtypeid AS orgstructtypeid, \npl_orgstruct.orgtypeid AS orgtypeid, pl_orgstruct.codepath AS codepath, pl_orgstruct.fullname AS fullname, \npl_orgstruct.level, \npl_orgstruct.seq AS seq \n,po.orgaccountcode orgid__orgaccountcode\n,xsg.id groupid\n,xsg.customergroupcode\n,xsg.customergroupname\nFROM pl_salearea pl_orgstruct \nLEFT JOIN pl_orgstructtype orgstructtypeid ON pl_orgstruct.orgstructtypeid = orgstructtypeid.orgstructtypeid\ninner join pl_org po on po.orgid = pl_orgstruct.orgid\nLEFT JOIN pl_orgtype orgtypeid ON pl_orgstruct.orgtypeid = orgtypeid.orgtypeid\nleft join xxw_orgstruct_customer_group xcg on xcg.saleareaid = pl_orgstruct.orgstructid\nleft join xxw_sap_customer_group xsg on xsg.id = xcg.customergroupid\n WHERE 1 =1 \n AND pl_orgstruct.orgstructtypeid = 1 \n AND orgtypeid.orgtypecategory = 1 \n AND pl_orgstruct.orgstructid != 1\n\n//已选中营销组织\n{#if saleareaids.length > 0}\n    and pl_orgstruct.orgstructid not in ({saleareaids})\n{#endif}\n//名称\n{#if (IN.pl_org.orgname != null && IN.pl_org.orgname != '' )}\nand pl_orgstruct.orgname like {'%'+IN.pl_org.orgname+'%'} \n{#endif}\n//客户组名称(customergroupname)\n{#if (IN.pl_org.orgname != null && IN.pl_org.customergroupname != '' )}\nand (xsg.customergroupcode like {'%'+IN.pl_org.customergroupname+'%'} or xsg.customergroupname like {'%'+IN.pl_org.customergroupname+'%'})\n{#endif}\n\n//状态\n{#if (IN.pl_org.status != null && IN.pl_org.status != '' )}\nand pl_orgstruct.status = {IN.pl_org.status} \n{#endif}\n\n//父营销组织\n{#if (IN.pl_org.parentorgstructid != null && IN.pl_org.parentorgstructid != '' )}\nand pl_orgstruct.codepath like {'%' + IN.pl_org.parentorgstructid + '%'} \n{#endif}\n\n//懒加载\n{#if (lazymode == \"2\")}\n    and pl_orgstruct.parentorgstructid = {lazykey}\n{#endif}\n\n{#if (lazymode == \"3\")}\n    and ( pl_orgstruct.parentorgstructid = {lazykey} or  pl_orgstruct.level <= {lazylevel} )\n{#endif}\n\n ORDER BY pl_orgstruct.level ASC, pl_orgstruct.seq ASC, pl_orgstruct.orgname ASC paging RULE(onrule);\n\n//lazymode=1时，需要获取根节点的level\n var rootlevel = null;\n if(lazymode == \"1\" && temp != null && temp.length > 0) {\n     rootlevel = temp[0].level;\n }\nvar removetemp = [];\n\n for(var j = 0 ; j < temp.length ; j++){\n  var neworgname = String.substringLastAt(temp[j].fullname,\"/\",3);\n  neworgname = neworgname.substring(0,neworgname.lastIndexOf('/'));\n  if(neworgname.length != 0){\n \t\ttemp[j].orgnamejoin = temp[j].orgname + \"(\" + neworgname + \")\";\n  }else{\n  \ttemp[j].orgnamejoin = temp[j].orgname;\n  }\n\n  //lazymode=1时，需要获取1、2级数据\n  if(rootlevel != null && (temp[j].level-1) > rootlevel) {\n      removetemp.push(temp[j]);\n  }\n }\n\nif(lazymode == \"1\" && removetemp != null && removetemp.length > 0) {\n  for(var i =0; i < removetemp.length; i++) {\n    temp.remove(removetemp[i]);\n  }\n}\n\nOUT.pl_salearea = temp;"
//                     }
//                 }
//             ],
//             "modellogiccode": "1729704190114140239",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "pl_salearea",
//                     "objectcode": "800000000000000000",
//                     "objectname": "营销组织",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "orgstructid",
//                             "propertyname": "营销组织",
//                             "propertytypecode": "1",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000001",
//                             "marktype": "2"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "pl_org",
//                     "objectcode": "800000000000000001",
//                     "objectname": "组织",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "orgaccountcode",
//                             "propertyname": "组织编码",
//                             "propertytypecode": "3",
//                             "objectcode": "800000000000000001",
//                             "propertycode": "854658229836320828",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "orgname",
//                             "propertyname": "组织名称",
//                             "propertytypecode": "2",
//                             "objectcode": "800000000000000001",
//                             "propertycode": "854658229836320827",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "status",
//                             "propertyname": "状态",
//                             "propertytypecode": "18",
//                             "objectcode": "800000000000000001",
//                             "propertycode": "854658229836320826",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "parentorgstructid",
//                             "propertyname": "父级id",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customergroupname",
//                             "propertyname": "客户组名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "pl_salearea",
//                     "objectcode": "800000000000000000",
//                     "objectname": "营销组织",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "orgstructid",
//                             "propertyname": "营销组织",
//                             "propertytypecode": "1",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000001",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "parentorgstructid",
//                             "propertyname": "父营销组织",
//                             "propertytypecode": "1000000000",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000002",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "orgname",
//                             "propertyname": "营销组织名称",
//                             "propertytypecode": "2",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000003",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "status",
//                             "propertyname": "状态",
//                             "propertytypecode": "18",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000004",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "orgid",
//                             "propertyname": "组织",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000011",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "orgid__orgaccountcode",
//                             "propertyname": "组织编码",
//                             "propertytypecode": "3",
//                             "objectcode": "800000000000000001",
//                             "propertycode": "854658229836320828",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "codepath",
//                             "propertyname": "code路径",
//                             "propertytypecode": "4",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000014",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "fullname",
//                             "propertyname": "name路径",
//                             "propertytypecode": "4",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000015",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "level",
//                             "propertyname": "层级",
//                             "propertytypecode": "5",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "829629839737532131",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "seq",
//                             "propertyname": "顺序",
//                             "propertytypecode": "20",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000016",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "groupid",
//                             "propertyname": "客户组id",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customergroupcode",
//                             "propertyname": "客户组编码",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customergroupname",
//                             "propertyname": "客户组名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-04 17:20\"}"
//         },
//         {
//             "modellogicname": "促销活动申请-指引加载",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1729757554390732863",
//                     "modellogicstepcode": "1729757554390732862",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-指引加载\n * \n * 已审批通过且未过期的促销指引\n * 1727931774765502464\t经销商渠道\n * 1727931807074226176\t现代渠道\n * 1727931853828132864\t专项指引\n */\n\nvar guide_type = IN.xxw_promotion_guide.guide_type;\nvar checkid = IN.xxw_promotion_guide.id;\n\nif(!String.isBlank(guide_type)){\n    if(guide_type == '1'){\n        //1727931774765502464\t经销商渠道\n        var promotion_guide_type = '1727931774765502464';\n    }else if(guide_type == '2'){\n        //1727931807074226176\t现代渠道\n        var promotion_guide_type = '1727931807074226176';\n    }else if(guide_type == '3'){\n        //1727931853828132864\t专项指引\n        var promotion_guide_type = '1727931853828132864';\n    }else{\n        throw new ERROR('促销指引类型有误！');\n    }\n\n    var guides = \n    select xpg.id \n    ,xpg.promotion_guide_name\n    ,xpg.guide_code\n    ,xpt.activity_type\n    from xxw_promotion_guide xpg\n    left join (\n        select '['||string_agg ('\"'||dc1.dictionaryid||'\"', ',')||']' as activity_type\n        ,b.xxw_promotion_guide_id\n        from xxw_promotion_guide_ref_business_activity_type b\n        join pl_dictionary dc1 on dc1.dickey = b.business_activity_type_id\n        group by b.xxw_promotion_guide_id\n    )xpt on xpt.xxw_promotion_guide_id = xpg.id\n    where 1=1\n    // and xpg.guide_status = 4\n    // and xpg.publication_status = 2\n    and xpg.promotion_guide_type = {promotion_guide_type}\n    //已选中的活动不加载\n    {#if !String.isBlank(checkid)}\n    and xpg.id <> {checkid}\n    {#endif}\n    paging\n    norule;\n\n    OUT.xxw_promotion_guide = guides;\n}\n\n\n\n"
//                     }
//                 }
//             ],
//             "modellogiccode": "1729757554390732863",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_promotion_guide",
//                     "objectcode": "1727127470760661091",
//                     "objectname": "促销指引基础信息",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "id",
//                             "propertytypecode": "1",
//                             "objectcode": "1727127470760661091",
//                             "propertycode": "1727127470760661090",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "promotion_guide_name",
//                             "propertyname": "促销指引名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1727127470760661091",
//                             "propertycode": "1727127470760661191",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "guide_type",
//                             "propertyname": "指引类型",
//                             "propertytypecode": "18",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_promotion_guide",
//                     "objectcode": "1727127470760661091",
//                     "objectname": "促销指引基础信息",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "id",
//                             "propertytypecode": "1",
//                             "objectcode": "1727127470760661091",
//                             "propertycode": "1727127470760661090",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "promotion_guide_name",
//                             "propertyname": "促销指引名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1727127470760661091",
//                             "propertycode": "1727127470760661191",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "guide_code",
//                             "propertyname": "指引编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1727127470760661091",
//                             "propertycode": "1727127470760661193",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "activity_type",
//                             "propertyname": "指引业务活动类型",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-30 11:02\"}"
//         },
//         {
//             "modellogicname": "促销活动申请-经销商渠道详情",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "2",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1729742655606362208",
//                     "modellogicstepcode": "1729742655606362207",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-经销商渠道详情\n */\n\nvar mainid = IN.xxw_main_promotion.id;\n\nvar promotion = \nselect xmp.id \n,xmp.relevance_type\n,xmp.guide_id\n,xmp.guide_name\n,xmp.guide_type\n,xmp.activity_name\n,xmp.channel\n,xmp.start_date\n,xmp.end_date\n,xmp.placement_scope\n,xmp.business_activity_type\n,xmp.apply_amount\n,xmp.make_amends\n,xmp.guide_exceed\n,xmp.budget_exceed\n,xmp.authorize\n,xmp.submitter\n,xmp.submitting_salearea\nfrom xxw_main_promotion xmp \nwhere xmp.id = {mainid}\nnorule;\n\nOUT.xxw_main_promotion = promotion[0];"
//                     }
//                 }
//             ],
//             "modellogiccode": "1729742655606362208",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_main_promotion",
//                     "objectcode": "1727995518044475490",
//                     "objectname": "促销活动主表",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475489",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_main_promotion",
//                     "objectcode": "1727995518044475490",
//                     "objectname": "促销活动主表",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475489",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "relevance_type",
//                             "propertyname": "关联促销指引",
//                             "propertytypecode": "18",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475488",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "guide_id",
//                             "propertyname": "促销指引id",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475487",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "guide_name",
//                             "propertyname": "促销指引名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475486",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "guide_type",
//                             "propertyname": "促销指引类型",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475485",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "activity_name",
//                             "propertyname": "促销活动名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475484",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel",
//                             "propertyname": "渠道",
//                             "propertytypecode": "4",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475483",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "start_date",
//                             "propertyname": "开始日期",
//                             "propertytypecode": "29",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475481",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "end_date",
//                             "propertyname": "结束日期",
//                             "propertytypecode": "29",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475480",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "placement_scope",
//                             "propertyname": "投放范围",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475479",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "business_activity_type",
//                             "propertyname": "业务活动类型",
//                             "propertytypecode": "4",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475478",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "apply_amount",
//                             "propertyname": "申请金额",
//                             "propertytypecode": "10",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475477",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "make_amends",
//                             "propertyname": "是否后补活动",
//                             "propertytypecode": "18",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475476",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "guide_exceed",
//                             "propertyname": "指引超标",
//                             "propertytypecode": "18",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475475",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "budget_exceed",
//                             "propertyname": "预算超标",
//                             "propertytypecode": "18",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475474",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "authorize",
//                             "propertyname": "是否授权费用",
//                             "propertytypecode": "18",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475473",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "submitter",
//                             "propertyname": "提交人",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475472",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "submitting_salearea",
//                             "propertyname": "提交部门",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475471",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "submission_time",
//                             "propertyname": "提交时间",
//                             "propertytypecode": "7",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129251",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "attachment",
//                             "propertyname": "附件",
//                             "propertytypecode": "26",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129250",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "active_state",
//                             "propertyname": "活动状态",
//                             "propertytypecode": "18",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129249",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "confirm_state",
//                             "propertyname": "确定状态",
//                             "propertytypecode": "18",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129248",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "createtime",
//                             "propertyname": "创建时间",
//                             "propertytypecode": "7",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129247",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "createop",
//                             "propertyname": "创建人",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129246",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "updatetime",
//                             "propertyname": "更新时间",
//                             "propertytypecode": "7",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129245",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "updateop",
//                             "propertyname": "更新人",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129244",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "activity_code",
//                             "propertyname": "促销活动编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1728963850990129239",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-29 18:11\"}"
//         },
//         {
//             "modellogicname": "促销活动申请-售达方加载",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1730025035474800722",
//                     "modellogicstepcode": "1730025035474800721",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-售达方加载\n * \n * \n */\n\n//参与类型 placement_scope 1营销组织2售达方\nvar placement_scope = IN.xxw_main_promotion.placement_scope;\nvar pl_salearea = IN.pl_salearea;\n\nvar orgstructids = [];\nif(placement_scope == '1'){\n    //获取营销组织已选择的组织\n    for(var i = 0; i < pl_salearea.length; i ++){\n        //根据营销组织查询营销组织下的人员\n        var members = \n        select member.orgstructid\n        from member member\n        inner join pl_orgstruct mposition on mposition.orgstructid = member.parentorgstructid \n        inner join pl_orgstruct morg on morg.orgstructid = mposition.parentorgstructid \n        where member.orgstructtypeid = 1 \n        and morg.codepath like {pl_salearea[i].codepath+'%'}\n        norule;\n\n        for(var j = 0; j < members.length; j ++){\n            orgstructids.push(members[j].orgstructid + '');\n        }\n    }\n}else if(placement_scope == '2'){\n    orgstructids.push(SESSION.mbcode + '');\n}\n\nvar cy_channel = IN.cy_xxw_channelcustomers;\nvar bcy_channel = IN.bcy_xxw_channelcustomers;\n\nvar channelids = [];\nvar bChannelids = [];\nif(placement_scope == '1' && bcy_channel.length > 0){\n    //获取营销组织已选择的不参与售达方\n    for(var j = 0; j < bcy_channel.length; j ++){\n        if(!String.isBlank(bcy_channel[j].id)){\n            bChannelids.push(bcy_channel[j].id + '');\n        }\n    }\n}\nif(placement_scope == '2' && cy_channel.length > 0){\n    //获取营销组织已选择的参与售达方\n    for(var l = 0; l < cy_channel.length; l ++){\n        if(!String.isBlank(cy_channel[l].id)){\n            channelids.push(cy_channel[l].id + '');\n        }\n    }\n}\n\nvar load_types = ['GDTY'];\nvar load_type = IN.xxw_main_promotion.load_type;\n\n//售达方加载是否需要权限控制\nif(orgstructids.length > 0 ){\n    if(String.isBlank(load_type)){\n        //营销组织售达方\n        var channelcustomers = \n        select xcs.id \n        ,xcs.channelcode\n        ,xcs.channelname\n        ,xcr.customercode\n        ,xcr.customername\n        ,xcr.channel\n        ,kce.dicvalue channel_text\n        ,m.orgid saleareaid\n        ,ps.fullname as salearea_name\n        ,xcs.pricegroupname\n        from xxw_channelcustomers xcs \n        left join xxw_channelmanager xcl on xcl.channelid = xcs.id\n        left join member m on m.orgstructid = xcl.managerid\n        left join xxw_customer_sales_relationship xcp on xcp.channelid = xcs.id\n        left join xxw_customer xcr on xcr.id = xcp.customerid\n        left join kx_channeltype kce on kce.dickey = xcr.channel\n        left join pl_salearea ps on ps.orgstructid = m.orgid\n        where 1=1\n        //负责人\n        and xcl.managerid in ({orgstructids})\n        //范围选择时，已选中的售达方不加载\n        {#if channelids.length > 0}\n        and xcs.id not in ({channelids})\n        {#endif}\n        {#if bChannelids.length > 0}\n        and xcs.id not in ({bChannelids})\n        {#endif}\n        //营销组织\n        {#if !String.isBlank(IN.xxw_main_promotion.saleareaid)}\n        and ps.codepath like {'%'+IN.xxw_main_promotion.saleareaid+'%'}\n        {#endif}\n        //渠道\n        {#if !String.isBlank(IN.xxw_main_promotion.channel)}\n        and xcr.channel = ({IN.xxw_main_promotion.channel})\n        {#endif}\n        //售达方名称/编码\n        {#if !String.isBlank(IN.xxw_main_promotion.channelcode)}\n        and (xcs.channelcode like {'%'+IN.xxw_main_promotion.channelcode+'%'} or xcs.channelname like {'%'+IN.xxw_main_promotion.channelcode+'%'})\n        {#endif}\n        //客户名称/编码\n        {#if !String.isBlank(IN.xxw_main_promotion.customername)}\n        and (xcr.customercode like {'%'+IN.xxw_main_promotion.customername+'%'} or xcr.customername like {'%'+IN.xxw_main_promotion.customername+'%'})\n        {#endif}\n        //价格组编码\n        {#if !String.isBlank(IN.xxw_main_promotion.pricegroupname)}\n        and (xcs.pricegroupname like {'%'+IN.xxw_main_promotion.pricegroupname+'%'})\n        {#endif}\n        paging\n        norule;\n\n\n    }else if(load_types.indexOf(load_type) != -1){\n        var channelcustomers = \n        select xcs.id \n        ,xcs.channelcode\n        ,xcs.channelname\n        ,xcr.customercode\n        ,xcr.customername\n        ,xcr.channel\n        ,kce.dicvalue channel_text\n        ,m.orgid saleareaid\n        ,ps.fullname as salearea_name\n        ,xcs.pricegroupname\n        from xxw_channelcustomers xcs \n        left join xxw_channelmanager xcl on xcl.channelid = xcs.id\n        left join member m on m.orgstructid = xcl.managerid\n        left join xxw_customer_sales_relationship xcp on xcp.channelid = xcs.id\n        left join xxw_customer xcr on xcr.id = xcp.customerid\n        left join kx_channeltype kce on kce.dickey = xcr.channel\n        left join pl_salearea ps on ps.orgstructid = m.orgid\n        where 1=1\n        //负责人\n        and xcl.managerid in ({orgstructids})\n        //参与客户\n        {#if channelids.length > 0}\n        and xcs.id in ({channelids})\n        {#endif}\n        //不参与客户\n        {#if bChannelids.length > 0}\n        and xcs.id not in ({bChannelids})\n        {#endif}\n        //营销组织\n        {#if !String.isBlank(IN.xxw_main_promotion.saleareaid)}\n        and ps.codepath like {'%'+IN.xxw_main_promotion.saleareaid+'%'}\n        {#endif}\n        //渠道\n        {#if !String.isBlank(IN.xxw_main_promotion.channel)}\n        and xcr.channel = ({IN.xxw_main_promotion.channel})\n        {#endif}\n        //售达方名称/编码\n        {#if !String.isBlank(IN.xxw_main_promotion.channelcode)}\n        and (xcs.channelcode like {'%'+IN.xxw_main_promotion.channelcode+'%'} or xcs.channelname like {'%'+IN.xxw_main_promotion.channelcode+'%'})\n        {#endif}\n        //客户名称/编码\n        {#if !String.isBlank(IN.xxw_main_promotion.customername)}\n        and (xcr.customercode like {'%'+IN.xxw_main_promotion.customername+'%'} or xcr.customername like {'%'+IN.xxw_main_promotion.customername+'%'})\n        {#endif}\n        //价格组编码\n        {#if !String.isBlank(IN.xxw_main_promotion.pricegroupname)}\n        and (xcs.pricegroupname like {'%'+IN.xxw_main_promotion.pricegroupname+'%'})\n        {#endif}\n        paging\n        norule;\n    }\n\n    OUT.xxw_channelcustomers = channelcustomers;\n}\n"
//                     }
//                 }
//             ],
//             "modellogiccode": "1730025035474800722",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "pl_salearea",
//                     "objectcode": "800000000000000000",
//                     "objectname": "营销组织",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "codepath",
//                             "propertyname": "code路径",
//                             "propertytypecode": "4",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000014",
//                             "marktype": "2"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "xxw_main_promotion",
//                     "objectcode": "1727995518044475490",
//                     "objectname": "促销活动主表",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "placement_scope",
//                             "propertyname": "投放范围",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1727995518044475479",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "saleareaid",
//                             "propertyname": "营销组织",
//                             "propertytypecode": "6",
//                             "objectcode": "1727995518044475490",
//                             "propertycode": "1731836209103245411",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelcode",
//                             "propertyname": "售达方编码",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel",
//                             "propertyname": "渠道",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customername",
//                             "propertyname": "客户名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "pricegroupname",
//                             "propertyname": "价格组编码",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "load_type",
//                             "propertyname": "加载类型",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "cy_xxw_channelcustomers",
//                     "objectname": "参与售达方列表",
//                     "customcode": "917013140520439025",
//                     "objectcode": "",
//                     "marktype": "2",
//                     "datatype": "1",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "bcy_xxw_channelcustomers",
//                     "objectname": "不参与售达方列表",
//                     "customcode": "917013140733907821",
//                     "objectcode": "",
//                     "marktype": "2",
//                     "datatype": "1",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_channelcustomers",
//                     "objectcode": "1716626739553243221",
//                     "objectname": "售达方",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243220",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "saleareaid",
//                             "propertyname": "营销组织",
//                             "propertytypecode": "6",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243219",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelcode",
//                             "propertyname": "售达方编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243216",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelname",
//                             "propertyname": "售达方名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243215",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "pricegroupname",
//                             "propertyname": "价格组编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243205",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customercode",
//                             "propertyname": "客户编码",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customername",
//                             "propertyname": "客户名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel",
//                             "propertyname": "渠道",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel_text",
//                             "propertyname": "渠道名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "salearea_name",
//                             "propertyname": "营销组织全称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-05 15:27\"}"
//         },
//         {
//             "modellogicname": "促销活动申请-售达方前端导入",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "5",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1730069977010147427",
//                     "modellogicstepcode": "1730069977010147426",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-不参与售达方前端导入\n */\n\nloadex(\"MapUtils\");\nload(\"importutils\");\n\n//标题列映射定义\nvar titleMappings = [\n    {\n        \"column\": \"售达方编码\",\n        \"field\": \"channelcode\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"售达方名称\",\n        \"field\": \"channelname\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"客户名称\",\n        \"field\": \"customername\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"客户编码\",\n        \"field\": \"customercode\",\n        \"type\": \"string\"\n    },\n    {\n        \"column\": \"渠道\",\n        \"field\": \"channel\",\n        \"type\": \"string\"\n    }\n];\n//设置标题映射\nEXCELIMP.setTitleMapping(titleMappings);\n//设置为前端导入模式\nEXCELIMP.setFrontImp(true);\n//批次号获取\nvar dynamicid = EXCELIMP.dynamicid;\n\n//结果数据\nvar outdata = [];\nfunction excelRowDataHandle (exceldata, customdata){\n    //读取exceldata转换为要输出的列表的数据集\n    //业务处理 把excel数据\n    outdata.push(exceldata)\n}\n\nEXCELIMP.setExcelRowDataHandle(excelRowDataHandle)\nEXCELIMP.execute();\n\n\n//开始导入数据处理\nvar errMsg = \"\";\nvar allErrMsg = '';\n\nif(outdata.length == 0){\n    throw new ERROR('导入模板错误或导入数据的数据类型错误，请按照填写说明和例子进行修改！')\n}\n\nvar placement_scope = IN.xxw_channelcustomers.placement_scope;\nvar pl_salearea = IN.cy_pl_salearea;\nvar saleareaids = [];\nif(placement_scope == '1'){\n    //获取营销组织已选择的组织\n    for(var i = 0; i < pl_salearea.length; i ++){\n        if(!String.isBlank(pl_salearea[i].orgstructid)){\n            saleareaids.push(pl_salearea[i].orgstructid + '');\n        }\n    }\n}\nvar check_channel = IN.check_xxw_channelcustomers;\nvar channelids = [];\nif(check_channel.length > 0){\n    //获取营销组织已选择的组织\n    for(var j = 0; j < check_channel.length; j ++){\n        if(!String.isBlank(check_channel[j].id)){\n            channelids.push(check_channel[j].id + '');\n        }\n    }\n}\n\nvar newChannelids = [];\nfor(var k = 0; k < outdata.length; k++){\n    var item = k + 2;\n    validation(outdata[k], item);\n    reverseQuery(outdata[k], item);\n\n    if(errMsg != ''){\n        allErrMsg += errMsg + '\\n';\n    }\n    errMsg = '';\n}\nOUT.newChannelids = newChannelids + ''\n\nnewChannelids.push.apply(newChannelids, channelids);\nvar outputResult = inputResults(newChannelids, placement_scope, saleareaids);\n\nif(outputResult != null){\n    OUT.xxw_channelcustomers = outputResult;\n    if(allErrMsg != \"\"){\n        FLY.info(allErrMsg);\n    }else{\n        FLY.info('导入成功！');\n    }\n}else{\n    throw new ERROR(allErrMsg);\n}\n\n\n/**\n * 统一校验函数\n * @param {Object} rowData - Excel行数据\n * @param {string} rowData.channelcode - 售达方编码\n * @param {string} rowData.channelname - 售达方名称\n * @param {string} rowData.customercode - 客户名称\n * @param {string} rowData.customername - 客户编码\n * @param item - 导入表格行数\n*/\nfunction validation(rowData, item) {\n    validationChannelcode(rowData.channelcode, item)\n    // validationCustomercode(rowData.customercode, item)\n}\n\n\n/**\n * 统一反查函数\n * @param {Object} rowData - Excel行数据\n * @param {string} rowData.channelcode - 售达方编码\n * @param {string} rowData.channelname - 售达方名称\n * @param {string} rowData.customername - 客户名称\n * @param {string} rowData.customercode - 客户编码\n*/\nfunction reverseQuery(rowData, item) {\n    var channelid = '';\n    //查询售达方信息\n    var channelcustomer = \n    select xcs.id \n    from xxw_channelcustomers xcs \n    left join xxw_customer_sales_relationship xcp on xcp.channelid = xcs.id\n    left join xxw_customer xcr on xcr.id = xcp.customerid\n    where xcs.channelcode = {rowData.channelcode}\n    // and xcr.customercode = {rowData.customercode}\n    norule;\n\n    if(channelcustomer.length == 0){\n        appendErrmsg(\"第（\"+ item + \"）行数据，售达方编码[\"+ rowData.channelcode +\"]有误；\")\n    }else{\n        if(channelids.length > 0){\n            if(channelids.includes(channelcustomer[0].id + '') == -1){\n                newChannelids.push(channelcustomer[0].id + '');\n            }\n        }else{\n            newChannelids.push(channelcustomer[0].id + '');\n        }\n    }\n}\n\n\n/**\n* 校验 Channelcode-售达方编码\n*/\nfunction validationChannelcode(data, item) {\n    if (String.isBlank(data)) {\n        appendErrmsg(\"第（\"+ item + \"）行数据，售达方编码[\" + data + \"]不能为空；\")\n    }\n}\n\n/**\n* 校验 Customercode-售达方编码\n*/\nfunction validationCustomercode(data, item) {\n    if (String.isBlank(data)) {\n        appendErrmsg(\"第（\"+ item + \"）行数据，客户编码[\" + data + \"]不能为空；\")\n    }\n}\n\n\n/**\n* 将错误信息添加到全局错误消息中。\n* @param {string} message - 要添加的错误消息。\n*/\nfunction appendErrmsg(message) {\n    errMsg += message\n}\n\n/**\n * 奖已选中数据处理成结果集合\n * @param {Object} IN.bcy_xxw_channelcustomers - 已选中不参与结果集\n */\nfunction inputResults(ids, scope, saleareas){\n    if(((scope == '1' && saleareas.length > 0) || scope == '2') && ids.length > 0){\n        //获取营销组织已选择的组织\n        var customers = \n        select xcs.id \n        ,xcs.channelcode\n        ,xcs.channelname\n        ,xcr.customercode\n        ,xcr.customername\n        ,xcr.channel\n        ,kce.dicvalue channel_text\n        ,xcs.saleareaid\n        ,ps.fullname as salearea_name\n        ,xcs.pricegroupname\n        from xxw_channelcustomers xcs \n        left join xxw_customer_sales_relationship xcp on xcp.channelid = xcs.id\n        left join xxw_customer xcr on xcr.id = xcp.customerid\n        left join kx_channeltype kce on kce.dickey = xcr.channel\n        left join pl_salearea ps on ps.orgstructid = xcs.saleareaid\n        where 1=1\n        and xcs.id in ({ids})\n        norule;\n\n        return customers;\n    }else{\n        return null;\n    }\n    \n}   "
//                     }
//                 }
//             ],
//             "modellogiccode": "1730069977010147427",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_channelcustomers",
//                     "objectcode": "1716626739553243221",
//                     "objectname": "售达方",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "sheetnames",
//                             "propertyname": "即将导入的excel的sheet页名",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "fileurl",
//                             "propertyname": "待导入的excel下载路径",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "_dupstrategy",
//                             "propertyname": "重复行处理策略",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "filename",
//                             "propertyname": "文件名",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "placement_scope",
//                             "propertyname": "投放范围",
//                             "propertytypecode": "18",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "check_xxw_channelcustomers",
//                     "objectname": "已选中售达方列表",
//                     "customcode": "917013228055426943",
//                     "objectcode": "",
//                     "marktype": "2",
//                     "datatype": "1",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 },
//                 {
//                     "name": "cy_pl_salearea",
//                     "objectname": "参与营销组织",
//                     "customcode": "917013293450523334",
//                     "objectcode": "",
//                     "marktype": "2",
//                     "datatype": "1",
//                     "properties": [
//                         {
//                             "name": "orgstructid",
//                             "propertyname": "主键",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_channelcustomers",
//                     "objectcode": "1716626739553243221",
//                     "objectname": "售达方",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243220",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "saleareaid",
//                             "propertyname": "营销组织",
//                             "propertytypecode": "6",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243219",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelcode",
//                             "propertyname": "售达方编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243216",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelname",
//                             "propertyname": "售达方名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243215",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "pricegroupname",
//                             "propertyname": "价格组编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243221",
//                             "propertycode": "1716626739553243205",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customercode",
//                             "propertyname": "客户编码",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customername",
//                             "propertyname": "客户名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel",
//                             "propertyname": "渠道",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel_text",
//                             "propertyname": "渠道名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "salearea_name",
//                             "propertyname": "营销组织全称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-11-30 17:23\"}"
//         },
//         {
//             "modellogicname": "促销活动申请-变动类促销搭赠前端导入",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "5",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1730400843984932885",
//                     "modellogicstepcode": "1730400843984932884",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-变动类促销搭赠前端导入\n */\n\nloadex(\"MapUtils\");\nload(\"importutils\");\n\n//标题列映射定义\nvar titleMappings = [\n    {\"column\": \"序号\",\"field\": \"serial_number\",\"type\": \"string\"},\n    {\"column\": \"营销组织编码\",\"field\": \"salearea_code\",\"type\": \"string\"},\n    {\"column\": \"营销组织名称\",\"field\": \"salearea_name\",\"type\": \"string\"},\n    {\"column\": \"客户编码\",\"field\": \"customer_code\",\"type\": \"string\"},\n    {\"column\": \"客户名称\",\"field\": \"customer_name\",\"type\": \"string\"},\n    {\"column\": \"售达方编码\",\"field\": \"channel_code\",\"type\": \"string\"},\n    {\"column\": \"售达方名称\",\"field\": \"channel_name\",\"type\": \"string\"},\n    {\"column\": \"送达方编码\",\"field\": \"store_code\",\"type\": \"string\"},\n    {\"column\": \"送达方名称\",\"field\": \"store_name\",\"type\": \"string\"},\n    {\"column\": \"剔除送达方编码\",\"field\": \"no_store_code\",\"type\": \"string\"},\n    {\"column\": \"剔除送达方名称\",\"field\": \"no_store_name\",\"type\": \"string\"},\n    {\"column\": \"兑付方式\",\"field\": \"payment_method\",\"type\": \"string\"},\n    {\"column\": \"产品范围\",\"field\": \"product_range\",\"type\": \"string\"},\n    {\"column\": \"活动产品编码\",\"field\": \"activity_product_code\",\"type\": \"string\"},\n    {\"column\": \"活动产品名称\",\"field\": \"activity_product_name\",\"type\": \"string\"},\n    {\"column\": \"赠品物料编码\",\"field\": \"gift_rpoduct_code\",\"type\": \"string\"},\n    {\"column\": \"赠品物料名称\",\"field\": \"gift_rpoduct_name\",\"type\": \"string\"},\n    {\"column\": \"活动期间\",\"field\": \"activity_period\",\"type\": \"string\"},\n    {\"column\": \"搭赠规则\",\"field\": \"complimentary_rule\",\"type\": \"string\"},\n    {\"column\": \"搭赠方式\",\"field\": \"complimentary_type\",\"type\": \"string\"},\n    {\"column\": \"是否按达成目标终止搭赠\",\"field\": \"achieve_target_terminate_complimentary\",\"type\": \"string\"},\n    {\"column\": \"赠送条件≥X件起送\",\"field\": \"quantity_for_gift\",\"type\": \"string\"},\n    {\"column\": \"本品数量\",\"field\": \"product_quantity\",\"type\": \"string\"},\n    {\"column\": \"产品单位\",\"field\": \"product_unit\",\"type\": \"string\"},\n    {\"column\": \"赠品数量\",\"field\": \"gift_quantity\",\"type\": \"string\"},\n    {\"column\": \"赠品单位\",\"field\": \"gift_unit\",\"type\": \"string\"},\n    {\"column\": \"是否与合同返利互斥\",\"field\": \"mutually_exclusive_with_contract_rebate\",\"type\": \"string\"},\n    {\"column\": \"本期收入目标折后（元）\",\"field\": \"revenue_target\",\"type\": \"string\"},\n    {\"column\": \"本期销量目标\",\"field\": \"current_sales_target\",\"type\": \"string\"}\n];\n\n//设置标题映射\nEXCELIMP.setTitleMapping(titleMappings);\n//设置为前端导入模式\nEXCELIMP.setFrontImp(true);\n//批次号获取\nvar dynamicid = EXCELIMP.dynamicid;\n\n//结果数据\nvar outdata = [];\nfunction excelRowDataHandle (exceldata, customdata){\n    //读取exceldata转换为要输出的列表的数据集\n    //业务处理 把excel数据\n    outdata.push(exceldata)\n}\n\nEXCELIMP.setExcelRowDataHandle(excelRowDataHandle)\nEXCELIMP.execute();\n\n//开始导入数据处理\nvar errMsg = \"\";\nvar allErrMsg = '';\n\nif(outdata.length == 0){\n    throw new ERROR('导入模板错误或导入数据的数据类型错误，请按照填写说明和例子进行修改！')\n}\n\nOUT.xxw_promotion_giveaways = outdata;"
//                     }
//                 }
//             ],
//             "modellogiccode": "1730400843984932885",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_promotion_giveaways",
//                     "objectcode": "1730400843984932883",
//                     "objectname": "促销活动变动类促销（搭赠）",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "sheetnames",
//                             "propertyname": "即将导入的excel的sheet页名",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "fileurl",
//                             "propertyname": "待导入的excel下载路径",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "_dupstrategy",
//                             "propertyname": "重复行处理策略",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "filename",
//                             "propertyname": "文件名",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_promotion_giveaways",
//                     "objectcode": "1730400843984932883",
//                     "objectname": "促销活动变动类促销（搭赠）",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "serial_number",
//                             "propertyname": "序号",
//                             "propertytypecode": "5",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932880",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "salearea_id",
//                             "propertyname": "营销组织",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932878",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customer_id",
//                             "propertyname": "TPM客户id",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730455805045641315",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel_id",
//                             "propertyname": "售达方ID",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932877",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "store_id",
//                             "propertyname": "送达方id",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730455805045641314",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "no_store_id",
//                             "propertyname": "剔除送达方id",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730455805045641313",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "payment_method",
//                             "propertyname": "兑付方式",
//                             "propertytypecode": "4",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730455805045641311",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "product_range",
//                             "propertyname": "产品范围",
//                             "propertytypecode": "10000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932876",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "activity_product_id",
//                             "propertyname": "活动产品id",
//                             "propertytypecode": "6",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730455805045641310",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "activity_product_code",
//                             "propertyname": "活动产品物料编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932875",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "gift_rpoduct_id",
//                             "propertyname": "赠品id",
//                             "propertytypecode": "6",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730455805045641309",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "gift_rpoduct_code",
//                             "propertyname": "赠品物料编码",
//                             "propertytypecode": "2",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932874",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "activity_period",
//                             "propertyname": "活动期间",
//                             "propertytypecode": "30",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932873",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "complimentary_rule",
//                             "propertyname": "搭赠规则",
//                             "propertytypecode": "10000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932872",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "complimentary_type",
//                             "propertyname": "搭赠方式",
//                             "propertytypecode": "18",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730455805045641305",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "achieve_target_terminate_complimentary",
//                             "propertyname": "是否按达成目标终止搭赠",
//                             "propertytypecode": "18",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932870",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "product_quantity",
//                             "propertyname": "本品数量",
//                             "propertytypecode": "5",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932867",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "product_unit",
//                             "propertyname": "产品单位",
//                             "propertytypecode": "10000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932866",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "gift_quantity",
//                             "propertyname": "赠品数量",
//                             "propertytypecode": "5",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932865",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "gift_unit",
//                             "propertyname": "赠品单位",
//                             "propertytypecode": "10000000000",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730400843984932864",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "mutually_exclusive_with_contract_rebate",
//                             "propertyname": "是否与合同返利互斥",
//                             "propertytypecode": "5",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730155088279900238",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "revenue_target",
//                             "propertyname": "本期收入目标折后（元）",
//                             "propertytypecode": "10",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730155088279900237",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "current_sales_target",
//                             "propertyname": "本期销量目标",
//                             "propertytypecode": "10",
//                             "objectcode": "1730400843984932883",
//                             "propertycode": "1730155088279900233",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-01 14:31\"}"
//         },
//         {
//             "modellogicname": "促销活动申请-客户加载",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1731545945360961631",
//                     "modellogicstepcode": "1731545945360961630",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-客户加载\n * 加载类型 load_type （）\n */\n\nvar customers = \nselect xc.id \n,kc.dicvalue as channel_text\n,ps.orgname as salearea_text\n,ps.fullname as salearea_full\n,xc.customercode\n,xc.customername\n,xp.portraitname\n,pd.dicvalue as manuallabelname\nfrom xxw_customer xc\nleft join kx_channeltype kc on kc.dickey = xc.channel\nleft join pl_salearea ps on ps.orgstructid = xc.saleareaid\nleft join xxw_portrait_setting xp on xp.id = xc.portraitid\nleft join pl_dictionary pd on pd.dickey = xc.manuallabelid\nwhere 1=1\n//查询条件营销组织\n{#if !String.isBlank(IN.xxw_customer.saleareaid)}\nand ps.codepath like {'%' + IN.xxw_customer.saleareaid + '%'}\n{#endif}\n//查询条件渠道\n{#if !String.isBlank(IN.xxw_customer.channel)}\nand xc.channel = {IN.xxw_customer.channel}\n{#endif}\n//查询条件客户名称/编码\n{#if !String.isBlank(IN.xxw_customer.customercode)}\nand (xc.customercode like {'%' + IN.xxw_customer.customercode + '%'} or xc.customername like {'%' + IN.xxw_customer.customercode + '%'})\n{#endif}\n//查询条件客户画像\n{#if !String.isBlank(IN.xxw_customer.portraitname)}\nand xp.portraitname like {'%' + IN.xxw_customer.portraitname + '%'}\n{#endif}\n//查询条件客户标签\n{#if !String.isBlank(IN.xxw_customer.manuallabelname)}\nand pd.dicvaluelike {'%' + IN.xxw_customer.manuallabelname + '%'}\n{#endif}\n//父级组织id\n{#if !String.isBlank(IN.xxw_customer.parentorgstructid)}\nand ps.codepath like {'%' + IN.xxw_customer.parentorgstructid + '%'}\n{#endif}\npaging \nnorule;\n\nOUT.xxw_customer = customers;"
//                     }
//                 }
//             ],
//             "modellogiccode": "1731545945360961631",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_customer",
//                     "objectcode": "1716626739553243233",
//                     "objectname": "TPM客户表",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "customercode",
//                             "propertyname": "客户编号",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243233",
//                             "propertycode": "1716626739553243231",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "saleareaid",
//                             "propertyname": "所属营销组织",
//                             "propertytypecode": "6",
//                             "objectcode": "1716626739553243233",
//                             "propertycode": "1716626739553243229",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel",
//                             "propertyname": "渠道",
//                             "propertytypecode": "10000000000",
//                             "objectcode": "1716626739553243233",
//                             "propertycode": "1719537044746801212",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "portraitname",
//                             "propertyname": "画像名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "manuallabelname",
//                             "propertyname": "标签名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "load_type",
//                             "propertyname": "加载类型",
//                             "propertytypecode": "18",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "parentorgstructid",
//                             "propertyname": "父级营销组织",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_customer",
//                     "objectcode": "1716626739553243233",
//                     "objectname": "TPM客户表",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1716626739553243233",
//                             "propertycode": "1716626739553243232",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customercode",
//                             "propertyname": "客户编号",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243233",
//                             "propertycode": "1716626739553243231",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "customername",
//                             "propertyname": "客户名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1716626739553243233",
//                             "propertycode": "1716626739553243230",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel_text",
//                             "propertyname": "渠道名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "salearea_text",
//                             "propertyname": "组织名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "salearea_full",
//                             "propertyname": "组织全称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "portraitname",
//                             "propertyname": "画像名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "manuallabelname",
//                             "propertyname": "标签名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-04 15:20\"}"
//         },
//         {
//             "modellogicname": "组织查询(共用)",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "100000000000000000",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "arealist",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "营销组织查询",
//                     "marktype": "1",
//                     "modellogiccode": "110000000000000000",
//                     "modellogicstepcode": "910742997082181731",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "//组织查询用一个入口，分开多个方法，去调用\n\nFLY.log(SESSION.appcode);\nif(SESSION.appcode == \"distribution\") {\n  OUT = FLY.call(\"orgmgr.dmsarealist\", IN);\n}\nelse if(SESSION.appcode == \"promotion\") {\n  OUT = FLY.call(\"orgmgr.pmmarealist\", IN);\n}\nelse {\n   OUT = FLY.call(\"orgmgr.sfaarealist\", IN);\n}"
//                     }
//                 }
//             ],
//             "modellogiccode": "110000000000000000",
//             "marktype": "1",
//             "input": [
//                 {
//                     "name": "pl_orgstruct",
//                     "objectcode": "800000000000000000",
//                     "objectname": "营销组织",
//                     "datatype": "0",
//                     "properties": [
//                         {
//                             "name": "parentorgstructid",
//                             "propertyname": "父营销组织",
//                             "propertytypecode": "1000000000",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000002",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "orgname",
//                             "propertyname": "营销组织名称",
//                             "propertytypecode": "2",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000003",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "status",
//                             "propertyname": "状态",
//                             "propertytypecode": "18",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000004",
//                             "marktype": "1"
//                         }
//                     ],
//                     "marktype": "1"
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "pl_orgstruct",
//                     "objectcode": "800000000000000000",
//                     "objectname": "营销组织",
//                     "datatype": "1",
//                     "properties": [
//                         {
//                             "name": "orgstructid",
//                             "propertyname": "营销组织",
//                             "propertytypecode": "1",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000001",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "parentorgstructid",
//                             "propertyname": "父营销组织",
//                             "propertytypecode": "1000000000",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000002",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "orgname",
//                             "propertyname": "营销组织名称",
//                             "propertytypecode": "2",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000003",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "status",
//                             "propertyname": "状态",
//                             "propertytypecode": "18",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000004",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "orgstructtypeid",
//                             "propertyname": "组织维度",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000007",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "orgtypeid",
//                             "propertyname": "组织分类",
//                             "propertytypecode": "100000000000",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000012",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "codepath",
//                             "propertyname": "code路径",
//                             "propertytypecode": "4",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000014",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "fullname",
//                             "propertyname": "name路径",
//                             "propertytypecode": "4",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000015",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "level",
//                             "propertyname": "层级",
//                             "propertytypecode": "5",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "829629839737532131",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "seq",
//                             "propertyname": "顺序",
//                             "propertytypecode": "20",
//                             "objectcode": "800000000000000000",
//                             "propertycode": "209609839761000016",
//                             "marktype": "1"
//                         },
//                         {
//                             "name": "orgnamejoin",
//                             "propertyname": "拼接的组织名",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "1"
//                         }
//                     ],
//                     "marktype": "1"
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "\n\nvar temp = [];var FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4 = {params:{}};if(IN.__paging != undefined) FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4.__paging = IN.__paging;FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4.params.NAMEDPARAM_0 = '%'+IN.pl_orgstruct.orgname+'%';FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4.params.NAMEDPARAM_1 = IN.pl_orgstruct.status;FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4.params.NAMEDPARAM_2 = IN.pl_orgstruct.parentorgstructid;QUERY.query(FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4, __FLYTL.parseExpif('SELECT pl_orgstruct.orgstructid AS orgstructid, pl_orgstruct.parentorgstructid AS parentorgstructid,  pl_orgstruct.orgname AS orgname, pl_orgstruct.status AS status, pl_orgstruct.orgstructtypeid AS orgstructtypeid,  pl_orgstruct.orgtypeid AS orgtypeid, pl_orgstruct.codepath AS codepath, pl_orgstruct.fullname AS fullname, pl_orgstruct.level AS level,  pl_orgstruct.seq AS seq  FROM pl_salearea pl_orgstruct  LEFT JOIN pl_orgstructtype orgstructtypeid ON pl_orgstruct.orgstructtypeid = orgstructtypeid.orgstructtypeid LEFT JOIN pl_orgtype orgtypeid ON pl_orgstruct.orgtypeid = orgtypeid.orgtypeid  WHERE 1 =1   AND pl_orgstruct.orgstructtypeid = 1   AND orgtypeid.orgtypecategory = 1     {#if (IN.pl_orgstruct.orgname != null && IN.pl_orgstruct.orgname != \\'\\' )} and pl_orgstruct.orgname like :NAMEDPARAM_0  {#endif}   {#if (IN.pl_orgstruct.status != null && IN.pl_orgstruct.status != \\'\\' )} and pl_orgstruct.status = :NAMEDPARAM_1  {#endif}   {#if (IN.pl_orgstruct.parentorgstructid != null && IN.pl_orgstruct.parentorgstructid != \\'\\' )} and pl_orgstruct.parentorgstructid = :NAMEDPARAM_2  {#endif}   ORDER BY pl_orgstruct.level ASC, pl_orgstruct.seq ASC '));temp = FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4.data;OUT.__paging = FLYQL_CONTEXT_DEDCA0778E0A479D9B5175F7323089E4.__paging;\n\n OUT.pl_orgstruct = temp;"
//         },
//         {
//             "modellogicname": "促销活动申请-送达方加载",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1731629731482308656",
//                     "modellogicstepcode": "1731629731482308655",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-送达方加载\n */\n\nvar stores = \nselect xs.id \n,xs.storecode\n,xs.storename\n,xc.channelcode\n,xc.channelname\n,ps.fullname as salearea_full\n,ps.orgname as salearea_text\n,xcr.channel\n,kce.dicvalue channel_text\nfrom xxw_store xs \nleft join xxw_seller_delivery_relationship xsr on xsr.storeid = xs.id\nleft join xxw_channelcustomers xc on xc.id = xsr.channelid\nleft join pl_salearea ps on ps.orgstructid = xs.saleareaid\nleft join xxw_customer_sales_relationship xcp on xcp.channelid = xc.id\nleft join xxw_customer xcr on xcr.id = xcp.customerid\nleft join kx_channeltype kce on kce.dickey = xcr.channel\nwhere 1=1\n//渠道\n{#if !String.isBlank(IN.xxw_store.channeltype)}\nand xcr.channel = ({IN.xxw_store.channeltype})\n{#endif}\n//售达方名称/编码\n{#if !String.isBlank(IN.xxw_store.channelcode)}\nand (xc.channelcode like {'%'+IN.xxw_store.channelcode+'%'} or xc.channelname like {'%'+IN.xxw_store.channelcode+'%'})\n{#endif}\n//送达方名称/编码\n{#if !String.isBlank(IN.xxw_store.storecode)}\nand (xs.storecode like {'%'+IN.xxw_store.storecode+'%'} or xs.storename like {'%'+IN.xxw_store.storecode+'%'})\n{#endif}\n//组织\n{#if !String.isBlank(IN.xxw_store.saleareaid)}\nand (ps.codepath like {'%'+IN.xxw_store.saleareaid+'%'})\n{#endif}\nnorule;\n\n\nOUT.xxw_store = stores;"
//                     }
//                 }
//             ],
//             "modellogiccode": "1731629731482308656",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_store",
//                     "objectcode": "1714587791171653687",
//                     "objectname": "送达方",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "storecode",
//                             "propertyname": "送达方编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1714587791171653685",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channeltype",
//                             "propertyname": "渠道",
//                             "propertytypecode": "6",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1714587791171653683",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "saleareaid",
//                             "propertyname": "组织id",
//                             "propertytypecode": "6",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1718818615542812710",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelcode",
//                             "propertyname": "售达方编码",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "load_type",
//                             "propertyname": "加载类型",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_store",
//                     "objectcode": "1714587791171653687",
//                     "objectname": "送达方",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1714587791171653686",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "storecode",
//                             "propertyname": "送达方编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1714587791171653685",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "storename",
//                             "propertyname": "送达方名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1714587791171653684",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelcode",
//                             "propertyname": "垫资且配送经销商编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1714587791171653675",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channelname",
//                             "propertyname": "垫资且配送经销商名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1714587791171653687",
//                             "propertycode": "1714587791171653674",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "salearea_full",
//                             "propertyname": "营销组织全称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "salearea_text",
//                             "propertyname": "营销组织名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel",
//                             "propertyname": "渠道",
//                             "propertytypecode": "6",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "channel_text",
//                             "propertyname": "渠道文本",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-05 09:56\"}"
//         },
//         {
//             "modellogicname": "促销活动申请-产品加载",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1731629731482308654",
//                     "modellogicstepcode": "1731629731482308653",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-产品加载\n */\n\nvar materials = \nselect xfm.id \n,xfm.productcode\n,xfm.productname\n,xfm.productgroupname\n,xfm.companybrand\n,xfm.productbrand\n,xfm.productcategory\n,xfm.productmiddle\n,xfm.keyproduct\n,xfm.newstatus\nfrom xxw_finished_material xfm\nwhere 1=1\n//产品编码/名称\n{#if !String.isBlank(IN.xxw_finished_material.productcode)}\nand (xfm.productcode like {'%'+IN.xxw_finished_material.productcode+'%'} or xfm.productname like {'%'+IN.xxw_finished_material.productcode+'%'})\n{#endif}\n//产品组名称\n{#if !String.isBlank(IN.xxw_finished_material.productgroupname)}\nand (xfm.productgroupname like {'%'+IN.xxw_finished_material.productgroupname+'%'})\n{#endif}\n//公司品牌\n{#if !String.isBlank(IN.xxw_finished_material.companybrand)}\nand (xfm.companybrand = {IN.xxw_finished_material.companybrand})\n{#endif}\n//产品品牌\n{#if !String.isBlank(IN.xxw_finished_material.productbrand)}\nand (xfm.productbrand = {IN.xxw_finished_material.productbrand})\n{#endif}\n//产品大类\n{#if !String.isBlank(IN.xxw_finished_material.productcategory)}\nand (xfm.productcategory = {IN.xxw_finished_material.productcategory})\n{#endif}\n//产品中类\n{#if !String.isBlank(IN.xxw_finished_material.productmiddle)}\nand (xfm.productmiddle = {IN.xxw_finished_material.productmiddle})\n{#endif}\n//重点产品\n{#if !String.isBlank(IN.xxw_finished_material.keyproduct)}\nand (xfm.keyproduct = {IN.xxw_finished_material.keyproduct})\n{#endif}\n//是否新品\n{#if !String.isBlank(IN.xxw_finished_material.newstatus)}\nand (xfm.newstatus = {IN.xxw_finished_material.newstatus})\n{#endif}\nnorule;\n\nOUT.xxw_finished_material = materials;"
//                     }
//                 }
//             ],
//             "modellogiccode": "1731629731482308654",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_finished_material",
//                     "objectcode": "1714906715264258144",
//                     "objectname": "成品物料",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "productcode",
//                             "propertyname": "产品编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258139",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "companybrand",
//                             "propertyname": "公司品牌",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258131",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productbrand",
//                             "propertyname": "产品品牌",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258130",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productcategory",
//                             "propertyname": "产品大类",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258129",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "keyproduct",
//                             "propertyname": "重点产品",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258127",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "newstatus",
//                             "propertyname": "是否新品",
//                             "propertytypecode": "5",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258126",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productmiddle",
//                             "propertyname": "产品中类",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1719513109221216340",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productgroupname",
//                             "propertyname": "产品组名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1721461567356276833",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_finished_material",
//                     "objectcode": "1714906715264258144",
//                     "objectname": "成品物料",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258143",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productcode",
//                             "propertyname": "产品编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258139",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productname",
//                             "propertyname": "产品名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258138",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "companybrand",
//                             "propertyname": "公司品牌",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258131",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productbrand",
//                             "propertyname": "产品品牌",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258130",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productcategory",
//                             "propertyname": "产品大类",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258129",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "keyproduct",
//                             "propertyname": "重点产品",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258127",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "newstatus",
//                             "propertyname": "是否新品",
//                             "propertytypecode": "5",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1714906715264258126",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productmiddle",
//                             "propertyname": "产品中类",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1719513109221216340",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productgroupname",
//                             "propertyname": "产品组名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1714906715264258144",
//                             "propertycode": "1721461567356276833",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-05 10:00\"}"
//         },
//         {
//             "modellogicname": "促销产品申请-产品组加载",
//             "execmode": "1",
//             "status": 1,
//             "actiontype": "1",
//             "modelcode": "1728963850990129242",
//             "actioncategory": "1",
//             "usedatarule": "1",
//             "functionname": "",
//             "tenantdbtype": "2",
//             "tenantdbcode": "1719611466480488448",
//             "tenantdbname": "读写",
//             "operations": [
//                 {
//                     "templateref": "106",
//                     "modellogicstepname": "",
//                     "marktype": "2",
//                     "modellogiccode": "1732202391702474835",
//                     "modellogicstepcode": "1732202391702474834",
//                     "seq": 1,
//                     "status": "1",
//                     "templateparams": {
//                         "flycode": "/**\n * 促销活动申请-产品组加载\n */\n\nvar groups = \nselect xpg.id \n,xpg.group_code\n,xpg.group_name\n,xpd.productcode\n,xpd.productname\nfrom xxw_product_group xpg\nleft join (\n    select xpd.group_id\n    ,string_agg(xfm.productcode, '；') as productcode//order by xfm.id\n    ,string_agg(xfm.productname, '；') as productname// order by xfm.id\n    from xxw_product_group_details xpd \n    left join xxw_finished_material xfm on xfm.id = xpd.product_id\n    group by xpd.group_id\n)xpd on xpd.group_id = xpg.id\nwhere 1=1\n//产品组名称/编码\n{#if !String.isBlank(IN.xxw_product_group.group_code)}\nand (xpg.group_code like {'%'+IN.xxw_product_group.group_code+'%'} or xpg.group_name like {'%'+IN.xxw_product_group.group_code+'%'})\n{#endif} \n//成品名称/编码\n{#if !String.isBlank(IN.xxw_product_group.product_name)}\nand (xpd.productcode like {'%'+IN.xxw_product_group.product_name+'%'} or xpd.productname like {'%'+IN.xxw_product_group.product_name+'%'})\n{#endif}\npaging \nnorule;\n\nOUT.xxw_product_group = groups;"
//                     }
//                 }
//             ],
//             "modellogiccode": "1732202391702474835",
//             "marktype": "2",
//             "input": [
//                 {
//                     "name": "xxw_product_group",
//                     "objectcode": "1729040315245006947",
//                     "objectname": "产品组主表",
//                     "datatype": "0",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "group_code",
//                             "propertyname": "产品组编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1729040315245006947",
//                             "propertycode": "1729040315245006945",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "product_name",
//                             "propertyname": "成品物料名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "output": [
//                 {
//                     "name": "xxw_product_group",
//                     "objectcode": "1729040315245006947",
//                     "objectname": "产品组主表",
//                     "datatype": "1",
//                     "marktype": "2",
//                     "properties": [
//                         {
//                             "name": "id",
//                             "propertyname": "主键",
//                             "propertytypecode": "1",
//                             "objectcode": "1729040315245006947",
//                             "propertycode": "1729040315245006946",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "group_code",
//                             "propertyname": "产品组编码",
//                             "propertytypecode": "3",
//                             "objectcode": "1729040315245006947",
//                             "propertycode": "1729040315245006945",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "group_name",
//                             "propertyname": "产品组名称",
//                             "propertytypecode": "3",
//                             "objectcode": "1729040315245006947",
//                             "propertycode": "1729040315245006944",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productcode",
//                             "propertyname": "产品编码",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         },
//                         {
//                             "name": "productname",
//                             "propertyname": "产品名称",
//                             "propertytypecode": "3",
//                             "objectcode": "",
//                             "propertycode": "",
//                             "marktype": "2"
//                         }
//                     ]
//                 }
//             ],
//             "logicscript": "",
//             "uilogicscript": "",
//             "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-06 09:21\"}"
//         }
//     ],
//     "message": "{\"committype\":\"saverecord\",\"committypetext\":\"保存记录\",\"msgbody\":\"2023-12-06 16:53\"}"
// }