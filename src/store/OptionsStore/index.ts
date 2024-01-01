import {FormatOptionsWithLanguage} from 'sql-formatter'
import {useSqlFormatterOptions} from './defaultOptions/sqlFormatter'
import {RemovableRef} from "@vueuse/core";
import {BaseOptions, useBaseOptionsStore} from "./defaultOptions/base";
import {useWallpaperOptionsStore} from "./defaultOptions/wallpaperOptions";


interface MonacoThemeOptions {
    lightTheme: string
    darkTheme: string
}

interface SqlFormatterOptions extends FormatOptionsWithLanguage {
}

export const useOptionsStore = defineStore(
    'optionsStore',
    () => {
        const sqlFormatterOptions: RemovableRef<SqlFormatterOptions> = useSqlFormatterOptions()
        const baseOptions: RemovableRef<BaseOptions> = useBaseOptionsStore()
        const monacoThemeOptions: RemovableRef<MonacoThemeOptions> = useLocalStorage(
            'monacoThemeOptions',
            {
                lightTheme: 'vs',
                darkTheme: 'vs-dark'
            }
        )
        const wallpaperOptionsStore = useWallpaperOptionsStore();

        return {
            sqlFormatterOptions,
            baseOptions,
            wallpaperOptionsStore
        }
    },
    {
        // persist: {
        //   enabled: true
        // }
    }
)
