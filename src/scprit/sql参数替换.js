function replaceInsertStatement(sql, params) {
  // 使用正则表达式查找参数名（以 : 开头的字符串）
  const paramNames = sql.match(/:\w+/g);

  if (paramNames) {
    // 遍历找到的参数名
    paramNames.forEach((paramName) => {
      // 提取参数名，去掉冒号
      const key = paramName.substring(1);
      // 替换参数名为参数值
      if (params[key] !== undefined) {
        sql = sql.replace(paramName, JSON.stringify(params[key]));
      }
    });
  }

  return sql;
}

// 要替换的 SQL 插入语句
const insertSQL = `INSERT INTO kx_basic_customer_information
  (id, effective_date, application_department, attachments, change_type, change_content, change_customer_ids, change_customer_names, application_code, application_status, application_type, createop, createtime, platcreatetime, platupdatetime, platcreateop, platupdateop, platstatus)
 VALUES (:id, :effective_date, :application_department, :attachments, :change_type, :change_content, :change_customer_ids, :change_customer_names, :application_code, :application_status, :application_type, :createop, :createtime, :platcreatetime, :platupdatetime, :platcreateop, :platupdateop, :platstatus);`;

// 参数对象
const params = {
  __metaname: "kx_basic_customer_information",
  id: "1711942778042322944",
  effective_date: "2023-10-11 11:11:00",
  application_department: 1,
  attachments: "[]",
  change_type: 1706850756302344192,
  change_content: "",
  change_customer_ids:
    "1527703396272967680,1478803503009894400,1696353172978798592,1696353172530008064,1696353073825452032,1543977847981477888,1184714808717611008,",
  change_customer_names:
    "佛山市本味寒造食品科技有限公司,海南源丰生贸易有限公司,坑梓新发贸易部,惠州升兴综合贸易部,阳春市润华贸易有限公司,哈哈哈哈,肇庆市懿成贸易有限公司,",
  application_code: "KHSZ202310110063",
  application_status: 1,
  application_type: "1706606391843753984",
  createop: 1245967295067590656,
  createtime: "2023-10-11 11:12:19",
  platcreatetime: 1696993939325,
  platupdatetime: 1696993939325,
  platcreateop: 1.24596729506759066e18,
  platupdateop: 1.24596729506759066e18,
  platstatus: 1,
};

// 调用替换函数
const replacedSQL = replaceInsertStatement(insertSQL, params);

console.log(replacedSQL);
