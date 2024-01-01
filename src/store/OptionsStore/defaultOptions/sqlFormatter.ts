import {FormatOptionsWithLanguage} from 'sql-formatter'

export const sqlFormatterDefaultOptions: FormatOptionsWithLanguage = {
    language: 'plsql',
    tabWidth: 2,
    keywordCase: 'upper',
    linesBetweenQueries: 2,
    tabulateAlias: false,
    commaPosition: 'before', //TODO可配置项目
    /*
        a.replace(/(SELECT[\s\S]*?FROM)/g, function(match){
      return match.replace(/\n\s*\n/g, '\n');
      });
        */
    paramTypes: {
        custom: [{regex: String.raw`\{[\s\S]*?\}`}]
    }
}

export const useSqlFormatterOptions = () => {
    return useLocalStorage('sqlFormatterOptions', sqlFormatterDefaultOptions)
}