import { ActionType } from './actionType'

export interface Templateparams {
  flycode: string
}

export interface Operations {
  templateref: string
  modellogicstepname: string
  marktype: string
  modellogiccode: string
  modellogicstepcode: string
  seq: number
  status: string
  templateparams: Templateparams
}

export interface Property {
  name?: string
  propertyname?: string
  propertytypecode?: string
  objectcode?: string
  propertycode?: string
  marktype?: string
  validation?: boolean
  required?: boolean

  level?: number
  joinField?: string
  key?: string
}

export interface Input {
  customcode?: string
  name?: string
  propertytypecode?: string
  objectcode?: string
  objectname?: string
  datatype?: string
  marktype: string
  properties: Property[]
}

export interface Output {
  customcode?: string
  name: string
  objectcode: string
  objectname: string
  datatype: string
  marktype: string
  properties: Property[]
}

export interface Protocol {
  modellogicname: string
  execmode: string
  status: string
  actiontype: string | ActionType
  modelcode: string
  actioncategory: string
  usedatarule: string
  functionname: string
  tenantdbtype: string
  tenantdbcode: string
  tenantdbname: string
  operations: Operations
  modellogiccode: string
  marktype: string
  input: Input[]
  output: Output[]
  logicscript: string
  uilogicscript: string
  message: any
}
