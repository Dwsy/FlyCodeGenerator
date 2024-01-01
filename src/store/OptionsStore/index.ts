import { FormatOptionsWithLanguage } from 'sql-formatter'
import { monacoInitializedUtil } from '../../util/monacoUtil'
import { sqlFormatterDefaultOptions } from './defaultOptions/sqlFormatter'

export const useOptionsStore = defineStore(
  'optionsStore',
  () => {
    const sqlFormatterOptions = useLocalStorage('sqlFormatterOptions', sqlFormatterDefaultOptions)

    if (!sqlFormatterOptions.value) {
      sqlFormatterOptions.value = sqlFormatterDefaultOptions
    }

    return {
      sqlFormatterOptions
    }
  },
  {
    // persist: {
    //   enabled: true
    // }
  }
)

monacoInitializedUtil.onInitialized(() => {})

// const sqlFormatterOptions = ref<FormatOptionsWithLanguage>()
// sqlFormatterOptions.value =
//   (JSON.stringify(localStorage.getItem('sqlFormatterOptions')) as FormatOptionsWithLanguage) ||
//   sqlFormatterDefaultOptions
