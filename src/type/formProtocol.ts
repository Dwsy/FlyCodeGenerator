export interface UiProtocol {
  pageinfo: Pageinfo
  view: View | any
  presenter: Presenter
  businessmodel: Businessmodel[]
  message: string
}

export interface Businessmodel {
  actiontype: string
  tenantdbtype?: string
  modellogiccode: string
  message?: string
  modellogicname: string
  output: Output[]
  input: Input[]
  tenantdbname?: string
  execmode: string
  functionname: string
  actioncategory: string
  tenantdbcode?: string
  modelcode: string
  marktype: string
  usedatarule: string
  status: number
  operations?: Operation[]
  logicscript?: string
  uilogicscript?: string
}

export interface Templateparams {
  flycode: string
}

export interface Input {
  objectcode: string
  datatype: string
  name: string
  objectname: string
  marktype: string
  properties: Property[]
  customcode?: string
}

export interface Output {
  objectcode: string
  datatype: string
  name: string
  objectname: string
  marktype: string
  properties: Property[]
}

export interface Presenter {
  initial: Initial[]
  interface: any[]
  handlers: Handler[]
}

export interface Handler {
  code: string
  desc: string
  name: string
  successhint: string
  notice: string
  key: string
  condition: string
  remark: string
  _rel_export_info: string
  actions: Action[]
}

export interface Extraparam {
  title: string
  paramkey: string
  requesturl: string
  options: Option[]
}

export interface Setter {
  name: string
  datatype: string
  ctrlcode: string
  properties: Property[]
}

export interface Getter {
  name: string
  datatype: string
  ctrl: Ctrl
  properties: Property[]
}

export interface Initial {
  code: string
  desc: string
  name: string
  successhint: string
  notice: string
  key: string
  condition: string
  remark: string
  _rel_export_info: string
  actions: Action[]
}

export interface Action {
  code: string
  type: string
  desc: string
  binddic: string
  mode: string
  queue: string
  _type_spe: string
  logiccode: string

  script: string
  viewcode: string
  condition: string
  param: Param
}

export interface Param {
  name: string
  datatype: string
  ctrlcode: string
  properties: Property[]
}

export interface Property {
  name: string
  paramtype: string
  value: string
  ctrl: Ctrl
}

export interface Ctrl {
  code: string
  component: string
}

export interface View {
  body: Body
  subviews: Subview[]
}

export interface Subview {
  type: string
  title: string
  flexdirection: string
  needconfirm: string
  confirmtitle: string
  resetwhenopen: string
  code: string
  content: Content[]
  eventlist: Eventlist[]
}

export interface Floatposition {
  bottom: string
}

export interface Sortcondition {
  advanced: any[]
  basic: any[]
}

export interface Searchcondition {
  basic: Basic[]
  advanced: any[]
}

export interface Basic {
  type: string
  code: string
  titlewidth: string
  titleflex: string
  title: string
  placeholder: string
  name: string
  hiddenclearbtn?: string
  searchable?: string
  options?: Option[]
  hidden?: string
  eventlist: any[]
  verificationrule?: string
  displaystyle?: string
  multiselectable?: string
  expandmodel?: string
  intermediateselectmode?: string
  value?: string
}

export interface Body {
  title: string
  type: string
  display: string
  flexdirection: string
  flex: string
  shape: string
  bordercolor: string
  bordersides: string
  overflowy: string
  code: string
  content: Content | any[]
  eventlist: any[]
}

export interface Card {
  title: string
  hidden: string
  flexdirection: string
  overflow: string
  content: Content[]
}

export interface Operation {
  templateref: string
  text: string
  icon: string
  disabled: string
  functioncode: string
  eventlist: Eventlist[]
}

export interface Appendrowbyobjs {
  objctrl: string
  objunique: string
}

export interface Content {
  type: string
  code: string
  titlewidth?: string
  title: string
  display: string
  hidden?: string
  flexdirection?: string
  parent?: any
  value?: string
  flex?: string
  name?: string
  height?: string
  eventlist: Eventlist[][] | Eventlist[]
  titleflex?: string
  placeholder?: string
  verificationrule?: string
  width?: string
  marginright?: string
  readonly?: string
  marginleft?: string
  hiddenclearbtn?: string
  searchable?: string
  multiselectable?: string
  unit?: string
  maxdiff?: string
  mindiff?: string
  defranges?: any[]
  format?: string
  options?: Option[]
  displaystyle?: string
  expandmodel?: string
  intermediateselectmode?: string
  minvisiblelinenumber?: string
  underline?: string
  textalign?: string
  linenumber?: string
  text?: string
  checkvalue?: string
  uncheckvalue?: string
  maxnumber?: string
  accept?: string
  maxsize?: string
  fontweight?: string
  fontsize?: string
  checkable?: string
  ispage?: string
  isradio?: string
  rowsize?: string
  hasheaderbar?: string
  datastructure?: Datastructure
  stripe?: string
  dynamiccols?: any[]
  guidecols?: Guidecols
  groupcols?: Groupcol[]
  operations?: any[]
  rowoperations?: any[]
  defpagesize?: string
  cols?: Col[]
}

export interface Col {
  type: string
  code: string
  title: string
  style: string
  watermarkstyle: string
  watermarkcomposite: string
  visiblesize: string
  options: any[]
  sort: string
  value: string
  iswrap: string
  name: string
  eventlist: any[]
}

export interface Groupcol {
  title: string
  cols: string[]
}

export interface Guidecols {
  frozen: string
  merged: string
  cols: any[]
}

export interface Datastructure {
  id: string
}

export interface Option {
  key: string
  text: string
  isselected: string
}

export interface Eventlist {
  trigger: string
  handler: string
}

export interface Parent {
  flexdirection: string
}

export interface Pageinfo {
  clientcategorycode: string
  pagetemplatecode: string
  type: string
  title: string
  pagedescr: string
  directorytypecode: string
  marktype: string
  versionnum: string
  status: string
  ref: string
  code: string
  reportdesclist: any[]
  ctrltitlewidth: string
  ctrllayout: string
  remark: string
}
