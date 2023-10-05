const xlscolBind = new Array<Bind>()

export interface Bind {
    propertycode?: string,
    field: string;
    column: string;
}



export const excelExportTemplet = {
    xlscolBind
}