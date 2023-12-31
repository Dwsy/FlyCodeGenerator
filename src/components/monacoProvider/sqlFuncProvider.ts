export interface FunctionDefinition {
  name: string
  args: [argName: string, argType: string][]
  returnType: string
  description: string
  example: string
}
//NOTE: 效果一般
export const getSqlFuncCompletionItem: () => monaco.languages.CompletionItem[] = () => {
  const items: monaco.languages.CompletionItem[] = []
  pgsqlFuncs.forEach((fun) => {
    const callFuncArgsDesc = `${fun.name}(${fun.args
      .map((arg) => {
        return `${arg[0]}: ${arg[1]}`
      })
      .join()})\n${fun.description}\n${fun.example}`
    // documentation
    items.push({
      label: fun.name,
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: fun.name,
      detail: fun.description,
      documentation: callFuncArgsDesc,
      preselect: true,
      range: null
    })
  })
  return items
}

const aggregateFunctions: FunctionDefinition[] = [
  {
    name: 'avg',
    args: [['column', 'numeric']],
    returnType: 'numeric',
    description: '计算某列的平均值',
    example: 'SELECT avg(column) FROM table;'
  },
  {
    name: 'count',
    args: [['column', 'Any']],
    returnType: 'integer',
    description: '计算某列的行数',
    example: 'SELECT count(column) FROM table;'
  },
  {
    name: 'max',
    args: [['column', 'Any']],
    returnType: 'Any',
    description: '返回某列的最大值',
    example: 'SELECT max(column) FROM table;'
  },
  {
    name: 'min',
    args: [['column', 'Any']],
    returnType: 'Any',
    description: '返回某列的最小值',
    example: 'SELECT min(column) FROM table;'
  },
  {
    name: 'sum',
    args: [['column', 'numeric']],
    returnType: 'numeric',
    description: '返回某列值的总和',
    example: 'SELECT sum(column) FROM table;'
  }
]

const mathFunctions: FunctionDefinition[] = [
  {
    name: 'abs',
    args: [['number', 'numeric']],
    returnType: 'numeric',
    description: '返回数字的绝对值',
    example: 'SELECT abs(-10);  // 返回 10'
  },
  {
    name: 'ceil',
    args: [['number', 'numeric']],
    returnType: 'integer',
    description: '四舍五入为最接近的大于或等于该数字的整数',
    example: 'SELECT ceil(7.2);  // 返回 8'
  },
  {
    name: 'floor',
    args: [['number', 'numeric']],
    returnType: 'integer',
    description: '四舍五入为最接近的小于或等于该数字的整数',
    example: 'SELECT floor(7.8);  // 返回 7'
  },
  {
    name: 'round',
    args: [
      ['number', 'numeric'],
      ['precision', 'integer']
    ],
    returnType: 'numeric',
    description: '四舍五入到指定的精度，例如小数位数',
    example: 'SELECT round(7.535, 2);  // 返回 7.54'
  },
  {
    name: 'sqrt',
    args: [['number', 'numeric']],
    returnType: 'numeric',
    description: '返回数字的平方根',
    example: 'SELECT sqrt(16);  // 返回 4'
  }
]

const stringFunctions: FunctionDefinition[] = [
  {
    name: 'char_length',
    args: [['text', 'string']],
    returnType: 'integer',
    description: '返回字符串长度',
    example: "SELECT char_length('example');  // 返回 7"
  },
  {
    name: 'concat',
    args: [
      ['text1', 'string'],
      ['text2', 'string']
    ],
    returnType: 'string',
    description: '将两个字符串连接起来',
    example: "SELECT concat('Hello', ' World');  // 返回 \"Hello World\""
  },
  {
    name: 'lower',
    args: [['text', 'string']],
    returnType: 'string',
    description: '将字符串转换为小写',
    example: 'SELECT lower(\'EXAMPLE\');  // 返回 "example"'
  },
  {
    name: 'upper',
    args: [['text', 'string']],
    returnType: 'string',
    description: '将字符串转换为大写',
    example: 'SELECT upper(\'example\');  // 返回 "EXAMPLE"'
  },
  {
    name: 'substring',
    args: [
      ['text', 'string'],
      ['from', 'integer'],
      ['count', 'integer']
    ],
    returnType: 'string',
    description: '从输入字符串中提取一部分',
    example: 'SELECT substring(\'Hello World\', 1, 5);  // 返回 "Hello"'
  },
  {
    name: 'trim',
    args: [['text', 'string']],
    returnType: 'string',
    description: '删除字符串两侧的空白字符',
    example: 'SELECT trim(\' Hello World \');  // 返回 "Hello World"'
  }
]

const dateAndTimeFunctions: FunctionDefinition[] = [
  {
    name: 'now',
    args: [],
    returnType: 'timestamp',
    description: '获取当前日期和时间',
    example: 'SELECT now();  // 返回当前日期和时间'
  },
  {
    name: 'age',
    args: [['timestamp', 'timestamp']],
    returnType: 'interval',
    description: '计算从指定的时间到现在的间隔',
    example: "SELECT age('2020-01-01 00:00:00'::timestamp);  // 返回时间间隔"
  },
  {
    name: 'date_part',
    args: [
      ['field', 'string'],
      ['timestamp', 'timestamp']
    ],
    returnType: 'double precision',
    description: '从日期/时间中提取指定的字段，比如年、月、日等',
    example: "SELECT date_part('year', now());  // 返回当前年份"
  },
  {
    name: 'to_char',
    args: [
      ['timestamp', 'timestamp'],
      ['format', 'string']
    ],
    returnType: 'string',
    description: '将日期/时间转化为指定格式的字符串',
    example: "SELECT to_char(now(), 'YYYY-MM-DD');  // 返回当前日期的年-月-日格式"
  },
  {
    name: 'interval',
    args: [['time', 'string']],
    returnType: 'interval',
    description: '创建一个时间间隔图象',
    example: "SELECT interval '1 day';  // 创建一个持续一天的时间间隔"
  }
]

const castFunctions: FunctionDefinition[] = [
  {
    name: 'CAST',
    args: [
      ['expression', 'any'],
      ['type', 'string']
    ],
    returnType: "varies depending on the 'type' parameter",
    description: '将一个表达式从一种数据类型转换为另一种数据类型。',
    example: "CAST('100' AS INTEGER);  // 返回整数100"
  },
  {
    name: 'CONVERT',
    args: [
      ['type', 'string'],
      ['expression', 'any']
    ],
    returnType: "varies depending on the 'type' parameter",
    description: '与CAST函数相似，将一个表达式从一种数据类型转换为另一种数据类型，但语法不同。',
    example: "CONVERT(INTEGER, '100');  // 返回整数100"
  },
  {
    name: 'TO_CHAR',
    args: [
      ['value', 'number or date'],
      ['format', 'string']
    ],
    returnType: 'string',
    description: '将日期、时间或数值转换成字符串。你可以自定义转换的结果格式。',
    example: "TO_CHAR(123, '999');  // 返回 '123'"
  }
  // 在此处添加额外的函数
]

const conditionFunctions: FunctionDefinition[] = [
  {
    name: 'IF',
    args: [
      ['condition', 'boolean'],
      ['value_if_true', 'any'],
      ['value_if_false', 'any']
    ],
    returnType: "varies, depending on 'value_if_true' and 'value_if_false'",
    description:
      "PL/pgSQL中的一个控制结构。基于一个条件的真伪返回其中一个值。如果条件为真，返回'value_if_true'。如果条件为假，返回'value_if_false'。",
    example:
      "IF score > 60 THEN RETURN 'Pass'; ELSE RETURN 'Fail'; END IF;  // 如果 score 大于 60，则返回 'Pass'，否则返回 'Fail'"
  },
  {
    name: 'COALESCE',
    args: [
      ['arg1', 'any'],
      ['arg2', 'any']
      // ..., you can have any number of arguments
    ],
    returnType: 'varies, the type of the first non-NULL argument',
    description: '返回函数参数中的第一个非NULL值，如果都是NULL，则返回NULL。',
    example: "COALESCE(NULL, NULL, 'third', 'fourth');  // 返回'third'"
  },
  {
    name: 'NULLIF',
    args: [
      ['value1', 'any'],
      ['value2', 'any']
    ],
    returnType: "varies, the same type as 'value1' and 'value2'",
    description: '如果value1等于value2，则返回NULL，否则返回value1。',
    example: 'NULLIF(1, 1);  // 返回NULL'
  }
]

const pgsqlFunctions: FunctionDefinition[] = [
  {
    name: 'version',
    args: [],
    returnType: 'text',
    description: '返回PostgreSQL服务器的版本和系统信息。',
    example: "SELECT version();  // 返回例如 'PostgreSQL 13.1, compiled by Visual C++ build 1914, 64-bit'"
  },
  {
    name: 'current_date',
    args: [],
    returnType: 'date',
    description: '返回当前日期。',
    example: "SELECT current_date;  // 返回例如 '2022-02-15'"
  },
  {
    name: 'current_time',
    args: [],
    returnType: 'time with time zone',
    description: '返回当前时间。',
    example: "SELECT current_time;  // 返回例如 '04:05:06.789012-08'"
  },
  {
    name: 'current_user',
    args: [],
    returnType: 'name',
    description: '返回当前会话的用户的名字。',
    example: "SELECT current_user;  // 返回例如 'postgres'"
  },
  {
    name: 'current_database',
    args: [],
    returnType: 'name',
    description: '返回当前连接到的数据库名。',
    example: "SELECT current_database();  // 返回例如 'mydatabase'"
  }
]

const pgsqlFuncs = aggregateFunctions
  .concat(mathFunctions)
  .concat(stringFunctions)
  .concat(dateAndTimeFunctions)
  .concat(castFunctions)
  .concat(conditionFunctions)
  .concat(pgsqlFunctions)
