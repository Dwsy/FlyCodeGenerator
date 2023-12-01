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
const insertSQL = `

UPDATE xxw_promotion_guide
SET id = :id, promotion_guide_name = :promotion_guide_name, promotion_guide_type = :promotion_guide_type, guide_code = :guide_code, start_date = :start_date, end_date = :end_date, placement_scope = :placement_scope, guide_status = :guide_status, publication_status = :publication_status, audit_record = :audit_record, associated_promotions = :associated_promotions, view_viewed = :view_viewed, view_received = :view_received, budgeted_revenue_target = :budgeted_revenue_target, comprehensive_budgeted_forecasted_revenue_target = :comprehensive_budgeted_forecasted_revenue_target, current_period_revenue_target = :current_period_revenue_target, same_period_revenue_achievement = :same_period_revenue_achievement, revenue_compared_same_growth = :revenue_compared_same_growth, attachment = :attachment, submitter = :submitter, submitting_salearea = :submitting_salearea, submission_time = :submission_time, createtime = :createtime, createop = :createop, updatetime = :updatetime, updateop = :updateop, application_instructions = :application_instructions, platupdatetime  = :platupdatetime, platupdateop = :platupdateop
WHERE (id = :id AND platstatus = :platstatus);
 `;
// 参数对象
const params = {
  id: 1728956845755863040,
  promotion_guide_name: "123",
  promotion_guide_type: 1727931853828132864,
  guide_code: "ZY20230912000001",
  start_date: "2023-11-26",
  end_date: "2023-11-28",
  placement_scope: "2",
  guide_status: "",
  publication_status: "",
  audit_record: "",
  associated_promotions: "",
  view_viewed: "",
  view_received: "",
  budgeted_revenue_target: null,
  comprehensive_budgeted_forecasted_revenue_target: null,
  current_period_revenue_target: null,
  same_period_revenue_achievement: null,
  revenue_compared_same_growth: null,
  attachment: "",
  submitter: "1722102640017543168",
  submitting_salearea: "1722102262656012288",
  submission_time: "1701050409000",
  createtime: "1701050409000",
  createop: "1722102640017543168",
  updatetime: "2023-12-01 14:57:47",
  updateop: 1722102640017543168,
  application_instructions: "",
  __metaname: "xxw_promotion_guide",
  channel: null,
  placement_scope__dictionaryid: null,
  business_activity_type: null,
  platupdatetime: 1701413867399,
  platupdateop: 1722102640017543168,
  platstatus: 1,
};

// 调用替换函数
const replacedSQL = replaceInsertStatement(insertSQL, params);

console.log(replacedSQL);
