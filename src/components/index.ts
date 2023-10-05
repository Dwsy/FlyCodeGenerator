import queryGenerator from './queryGenerator/index.vue'
import dataSubmitGenerator from './dataSubmitGenerator/index.vue'
import deletedGenerator from './deletedGenerator/index.vue'
import ExcelExport from './ExcelExport/index.vue'
import ExcelImport from './ExcelImport/index.vue'
import flycodeExport from './flycodeExport/index.vue'
import flycodeImport from './flycodeImport/index.vue'
export const Generator = {
    queryGenerator,
    dataSubmitGenerator,
    deletedGenerator,
    ExcelExport,
    ExcelImport,
    flycodeExport,
    flycodeImport
}

export const GeneratorName = {
    queryGenerator: "queryGenerator",
    dataSubmitGenerator: "dataSubmitGenerator",
    deletedGenerator: "deletedGenerator",
    ExcelExport: "ExcelExport",
    ExcelImport: "ExcelImport",
    flycodeExport: "flycodeExport",
    flycodeImport: "flycodeImport"
}