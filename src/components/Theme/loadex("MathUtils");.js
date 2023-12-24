loadex("MathUtils");

// var temp = SELECT
// xpg.id,  // id
//   xpg.promotion_main_id,  // 促销活动ID
//   xpg.serial_number,  // 序号
//   xpg.salearea_id,  // 营销组织
//   xpg.customer_id,  // TPM客户id
//   xpg.channel_id,  // 售达方ID
//   xpg.store_id,  // 送达方id
//   xpg.no_store_ids,  // 剔除送达方id
//   xpg.payment_method,  // 兑付方式
//   xpg.product_range,  // 产品范围
//   xpg.activity_product_id,  // 活动产品id
//   xpg.activity_product_code,  // 活动产品物料编码
//   xpg.gift_product_id,  // 赠品id
//   xpg.gift_product_code,  // 赠品物料编码
//   xpg.activity_period,  // 活动期间
//   xpg.start_date,  // 活动开始时间
//   xpg.end_date,  // 活动结束时间
//   xpg.complimentary_rule,  // 搭赠规则
//   xpg.product_group_id,  // 产品组ID（固定组合）
//   xpg.product_group_name,  // 产品组名称
//   xpg.complimentary_type,  // 搭赠方式
//   xpg.achieve_target_terminate_complimentary,  // 是否按达成目标终止搭赠
//   xpg.min_quantity_for_gift,  // 赠送条件≥X件起送（最小值）
//   xpg.max_quantity_for_gift,  // 赠送条件≥X件起送（最大值）
//   xpg.product_quantity,  // 本品数量
//   xpg.product_unit,  // 产品单位
//   xpg.gift_quantity,  // 赠品数量
//   xpg.gift_unit,  // 赠品单位
//   xpg.mutually_exclusive_with_contract_rebate,  // 是否与合同返利互斥
//   xpg.revenue_target,  // 本期收入目标折后（元）
//   xpg.achieve_same_period,  // 同期收入达成折后（元）
//   xpg.company_discount_rate,  // 公司折扣率
//   xpg.revenue_yoy_growth,  // 收入同比增长
//   xpg.current_sales_target,  // 本期销量目标
//   xpg.same_period_sales_achievement,  // 同期销量达成
//   xpg.sales_volume_yoy_growth,  // 销量同比增长
//   xpg.estimated_total_gifts,  // 预计赠品总数
//   xpg.current_discount_expense_in_cny,  // 本期折扣费用金额（元）
//   xpg.company_expense_ratio,  // 公司费用率
//   xpg.gross_margin_ratio,  // 毛利率
//   xpg.createtime,  // 创建时间
//   xpg.createop,  // 创建人
//   xpg.updatetime,  // 更新时间
//   xpg.updateop,  // 更新人
//   xpg.activity_execution_cycle_start,  // 活动执行周期（变价周期）开始
//   xpg.activity_execution_cycle_end,  // 活动执行周期（变价周期）结束
//   xpg.terminal_execution_cycle_start,  // 终端执行周期（市场检核）开始2
//   xpg.terminal_execution_cycle_end,  // 终端执行周期（市场检核）结束
//   xpg.business_activity_type_description,  // 业务活动类型-C端活动说明
//   xpg.original_front_margin_of_store,  // 卖场原前台毛利
//   xpg.promotional_front_margin_of_store,  // 卖场活动前台毛利
//   xpg.current_pre_discount_revenue_in_cny,  // 本期折前收入（元）
//   xpg.isdetail_data,  // 明细数据
//   xpg.code,  // 编码
//   xpg.group_code,  // 组号
//   xpg.no_store_fullvalue,  // 剔除送达方多选信息
//   xpg.activity_estimates_offer_price,  // 活动测算供价
//   xpg.promotion_activity_id  // 业务活动类型
// FROM xxw_promotion_giveaways xpg
// WHERE xpg.id = 2
// NORULE;

var xpg = BO.new("xxw_promotion_giveaways")
xpg.id = FLY.genId()
xpg.promotion_main_id = foo.promotion_main_id          //促销活动ID
xpg.serial_number = foo.serial_number                  //序号
xpg.salearea_id = foo.salearea_id                      //营销组织
xpg.customer_id = foo.customer_id                      //TPM客户id
xpg.channel_id = foo.channel_id                        //售达方ID
xpg.store_id = foo.store_id                            //送达方id
xpg.no_store_ids = foo.no_store_ids                    //剔除送达方id
xpg.payment_method = foo.payment_method                //兑付方式
xpg.product_range = foo.product_range                  //产品范围
xpg.activity_product_id = foo.activity_product_id      //活动产品id
xpg.activity_product_code = foo.activity_product_code  //活动产品物料编码
xpg.gift_product_id = foo.gift_product_id              //赠品id
xpg.gift_product_code = foo.gift_product_code          //赠品物料编码
xpg.activity_period = foo.activity_period              //活动期间
xpg.start_date = foo.start_date                        //活动开始时间
xpg.end_date = foo.end_date                            //活动结束时间
xpg.complimentary_rule = foo.complimentary_rule        //搭赠规则
xpg.product_group_id = foo.product_group_id            //产品组ID（固定组合）
xpg.product_group_name = foo.product_group_name        //产品组名称
xpg.complimentary_type = foo.complimentary_type        //搭赠方式
xpg.achieve_target_terminate_complimentary = foo.achieve_target_terminate_complimentary//是否按达成目标终止搭赠
xpg.min_quantity_for_gift = foo.min_quantity_for_gift  //赠送条件≥X件起送（最小值）
xpg.max_quantity_for_gift = foo.max_quantity_for_gift  //赠送条件≥X件起送（最大值）
xpg.product_quantity = foo.product_quantity            //本品数量
xpg.product_unit = foo.product_unit                    //产品单位
xpg.gift_quantity = foo.gift_quantity                  //赠品数量
xpg.gift_unit = foo.gift_unit                          //赠品单位
xpg.mutually_exclusive_with_contract_rebate = foo.mutually_exclusive_with_contract_rebate//是否与合同返利互斥
xpg.revenue_target = foo.revenue_target                //本期收入目标折后（元）
xpg.achieve_same_period = foo.achieve_same_period      //同期收入达成折后（元）
xpg.company_discount_rate = foo.company_discount_rate  //公司折扣率
xpg.revenue_yoy_growth = foo.revenue_yoy_growth        //收入同比增长
xpg.current_sales_target = foo.current_sales_target    //本期销量目标
xpg.same_period_sales_achievement = foo.same_period_sales_achievement//同期销量达成
xpg.sales_volume_yoy_growth = foo.sales_volume_yoy_growth//销量同比增长
xpg.estimated_total_gifts = foo.estimated_total_gifts  //预计赠品总数
xpg.current_discount_expense_in_cny = foo.current_discount_expense_in_cny//本期折扣费用金额（元）
xpg.company_expense_ratio = foo.company_expense_ratio  //公司费用率
xpg.gross_margin_ratio = foo.gross_margin_ratio        //毛利率
xpg.createtime = NOW.time()
xpg.createop = SESSION.mbcode
xpg.updatetime = NOW.time()
xpg.updateop = SESSION.mbcode
xpg.activity_execution_cycle_start = foo.activity_execution_cycle_start//活动执行周期（变价周期）开始
xpg.activity_execution_cycle_end = foo.activity_execution_cycle_end//活动执行周期（变价周期）结束
xpg.terminal_execution_cycle_start = foo.terminal_execution_cycle_start//终端执行周期（市场检核）开始2
xpg.terminal_execution_cycle_end = foo.terminal_execution_cycle_end//终端执行周期（市场检核）结束
xpg.business_activity_type_description = foo.business_activity_type_description//业务活动类型-C端活动说明
xpg.original_front_margin_of_store = foo.original_front_margin_of_store//卖场原前台毛利
xpg.promotional_front_margin_of_store = foo.promotional_front_margin_of_store//卖场活动前台毛利
xpg.current_pre_discount_revenue_in_cny = foo.current_pre_discount_revenue_in_cny//本期折前收入（元）
xpg.isdetail_data = foo.isdetail_data                  //明细数据
xpg.code = foo.code                                    //编码
xpg.group_code = foo.group_code                        //组号
xpg.no_store_fullvalue = foo.no_store_fullvalue        //剔除送达方多选信息
xpg.activity_estimates_offer_price = foo.activity_estimates_offer_price//活动测算供价
xpg.promotion_activity_id = foo.promotion_activity_id  //业务活动类型


var ghj = 10;
var ysj = 20
var ygj = 30

// 活动测算供价 yes
// =供货价*主品数量/（主品数量+赠品数量）
xpg.activity_estimates_offer_price = MathUtils.div(
  MathUtils.multimul(
    ghj,
    xpg.product_quantity
  ),
  MathUtils.add(xpg.product_quantity, xpg.gift_quantity)
)

// 本期折前收入 yes 
// =本期销量目标*供货价
xpg.current_pre_discount_revenue_in_cny = MathUtils.multimul(
  xpg.current_sales_target, ghj
)

// 本期折扣费用金额（元） yes
// =本期赠品数量*成本价
// 成本价：当有调整成本时，优先取调整成本，否则取预测成本
xpg.current_discount_expense_in_cny = MathUtils.multimul(
  xpg.gift_quantity,cbj
)


// 公司折扣率
// =本期折扣费用金额 /本期折前收入
xpg.company_discount_rate = MathUtils.div(
  xpg.current_discount_expense_in_cny,
  xpg.current_pre_discount_revenue_in_cny
)



// 卖场原前台毛利
// =（原售价-原供价）/原售价
xpg.original_front_margin_of_store = MathUtils.div(
  MathUtils.sub(
    ysj, ygj
  ),
  ysj
)

// 卖场活动前台毛利
// =（活动售价 -活动测算供价）/ 活动售价
xpg.promotional_front_margin_of_store = MathUtils.div(
  MathUtils.sub(hdsj, xpg.activity_estimates_offer_price),
  xpg.activity_estimates_offer_price
)

// 本期收入目标折后（元）
// 当本期销量目标填写后，该项自动计算=本期销量目标*活动测算供价
xpg.revenue_target = MathUtils.multimul(
  xpg.current_sales_target, xpg.activity_estimates_offer_price
)



// 同期收入达成折后（元）
// 列表对应维度以及产品，在活动期间内的实际出货金额
// 注意按“售达方/送达方”取对应的实际出货金额
xpg.achieve_same_period = 1

// 收入同比增长率
// =(本期收入目标-同期收入目标)/同期收入目标
xpg.revenue_yoy_growth = MathUtils.div(
  MathUtils.sub(
    xpg.revenue_target, xpg.achieve_same_period
  ),
  xpg.achieve_same_period
)


// 本期销量目标(件)用户填写


// 列表产品活动期间内SAP的实际出货数量
// -----------
// 同期销量达成(件)
// -----------


// 销量同比增长率
// =(本期销量目标-同期销量目标)/同期销量目标
xpg.sales_volume_yoy_growth = MathUtils.div(
  MathUtils.sub(
    xpg.current_sales_target, xpg.same_period_sales_achievement
  ),
  xpg.same_period_sales_achievement
)


// 预计赠品总数
// =本期收入目标/本品数量*赠品数量
xpg.estimated_total_gifts = Math.multimul(
  Math.div(
    xpg.revenue_target,xpg.product_quantity
  ),
  xpg.gift_quantity
)


// 公司费用率
// =本期折扣费用金额 / 本期收入目标折后
xpg.company_expense_ratio = MathUtils.div(
  xpg.current_discount_expense_in_cny,
  xpg.revenue_target
)


// 毛利率
// （本期收入目标折后-本期销量目标*成本价）/本期收入目标折后
// 成本价：当有调整成本时，优先取调整成本，否则取预测成本
xpg.gross_margin_ratio = MathUtils.div(
  MathUtils.sub(
    xpg.revenue_target,
    MathUtils.multimul(
      xpg,current_sales_target,xbj
    )
  ),
  xpg.revenue_target
)
