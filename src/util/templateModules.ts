export const getTemplateModules = (): TemplateModules[] => {
  const templateModulesStr = sessionStorage.getItem('templateModules')
  const templateModules: TemplateModules[] = JSON.parse(templateModulesStr)
  return templateModules
}

export interface TemplateModules {
  module: string
  open: boolean
  type: string
  url: string
  tabs: Tab[]
  tabValue: string
}
interface Tab {
  name: string
  title: string
  icon: string
  params: Params
  url: string
}
interface Params {
  name: string
  title: string
  modelCode?: string
  actionCategory?: string
  rawProtocol?: RawProtocol
  $$SD_modelName?: string
}
interface RawProtocol {
  modellogicname: string
  execmode: string
  status: number
  actiontype: string
  modelcode: string
  actioncategory: string
  usedatarule: string
  functionname: string
  tenantdbtype: string
  tenantdbcode: string
  tenantdbname: string
  operations: Operation[]
  modellogiccode: string
  marktype: string
  input: Input[]
  output: Output[]
  logicscript: string
  uilogicscript: string
  message: string
}
interface Output {
  name: string
  objectcode: string
  objectname: string
  datatype: string
  marktype: string
  properties: Property[]
}
interface Input {
  name: string
  objectcode: string
  objectname: string
  datatype: string
  marktype: string
  properties: Property[]
  customcode?: string
}
interface Property {
  name: string
  propertyname: string
  propertytypecode: string
  objectcode: string
  propertycode: string
  marktype: string
}
interface Operation {
  templateref: string
  modellogicstepname: string
  marktype: string
  modellogiccode: string
  modellogicstepcode: string
  seq: number
  status: string
  templateparams: Templateparams
}
interface Templateparams {
  flycode: string
}
