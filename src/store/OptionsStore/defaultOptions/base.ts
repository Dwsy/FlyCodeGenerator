export interface BaseOptions {
    enableWallpaper: boolean
    enableMacVideo: boolean
    enableCodeGenerator: boolean
    enableAddDts: boolean
    enablePrettierFormatAndSqlFormatter: boolean
    enableMonacoEnhance: boolean
    enableTheme: boolean
    lightTheme: boolean
    darkTheme: boolean
}

const baseDefaultOptions: BaseOptions = {
    enableWallpaper: false,
    enableMacVideo: false,
    enableCodeGenerator: false,
    enableAddDts: false,
    enablePrettierFormatAndSqlFormatter: false,
    enableMonacoEnhance: false,
    enableTheme: false,
    lightTheme: false,
    darkTheme: false,
}
export const useBaseOptionsStore = () => {
    return useLocalStorage('baseOptions', baseDefaultOptions)
}