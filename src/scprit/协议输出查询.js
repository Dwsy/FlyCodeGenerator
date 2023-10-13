let p = {
  modellogicname: " CRM经销商变更开户销户-查询客户基础信息",
  execmode: "1",
  status: "1",
  actiontype: "2",
  modelcode: "1706557317752950880",
  actioncategory: "1",
  usedatarule: "1",
  functionname: "CRM经销商变更开户销户-查询客户基础信息",
  tenantdbtype: "2",
  tenantdbcode: "",
  tenantdbname: "",
  operations: [
    {
      templateref: "106",
      modellogicstepname: "",
      marktype: "2",
      modellogiccode: "1712270374902829100",
      modellogicstepcode: "1712270374902829099",
      seq: 1,
      status: "1",
      templateparams: {
        flycode:
          'var id = IN.kx_basic_customer_information.id\nif (String.isBlnak(id)) {\n    throw new Error("id不能为空")\n}\n\nvar temp = select * from kx_basic_customer_information where id = { id } norule;\n\nif (temp.length == 1) {\n    \n}',
      },
    },
  ],
  modellogiccode: "1712270374902829100",
  marktype: "2",
  input: [
    {
      name: "kx_basic_customer_information",
      objectcode: "1705047287740371043",
      objectname: "客户基本信息",
      datatype: "0",
      marktype: "2",
      properties: [
        {
          name: "id",
          propertyname: "id",
          propertytypecode: "1",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371303",
          marktype: "2",
        },
      ],
    },
  ],
  output: [
    {
      name: "kx_basic_customer_information",
      objectcode: "1705047287740371043",
      objectname: "客户基本信息",
      datatype: "0",
      marktype: "2",
      properties: [
        {
          name: "belong_to_main_customer",
          propertyname: "归属主客户(存储主客户的id)",
          propertytypecode: "6",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371307",
          marktype: "2",
        },
        {
          name: "customer_full_name",
          propertyname: "客户全称",
          propertytypecode: "4",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371308",
          marktype: "2",
        },
        {
          name: "customer_short_name",
          propertyname: "客户简称",
          propertytypecode: "3",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371309",
          marktype: "2",
        },
        {
          name: "replace_distributor",
          propertyname: "替换经销商",
          propertytypecode: "100000000000",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371310",
          marktype: "2",
        },
        {
          name: "customer_contact_person",
          propertyname: "客户联系人姓名",
          propertytypecode: "3",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371311",
          marktype: "2",
        },
        {
          name: "customer_contact_phone",
          propertyname: "客户联系电话",
          propertytypecode: "3",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371312",
          marktype: "2",
        },
        {
          name: "sales_region",
          propertyname: "经销区域",
          propertytypecode: "3",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371313",
          marktype: "2",
        },
        {
          name: "shared_main_account_funds",
          propertyname: "是否共用主户资金",
          propertytypecode: "5",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371315",
          marktype: "2",
        },
        {
          name: "joint_market_building",
          propertyname: "是否共建市场",
          propertytypecode: "5",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371316",
          marktype: "2",
        },
        {
          name: "contact_address",
          propertyname: "联系地址",
          propertytypecode: "17",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371317",
          marktype: "2",
        },
        {
          name: "market_order_deposit",
          propertyname: "市场秩序保证金（元）",
          propertytypecode: "10",
          objectcode: "1705047287740371043",
          propertycode: "1705047287740371318",
          marktype: "2",
        },
        {
          name: "price_type",
          propertyname: "价格类型",
          propertytypecode: "10000000000",
          objectcode: "1705047287740371043",
          propertycode: "1706125248463769698",
          marktype: "2",
        },
      ],
    },
  ],
  logicscript: "",
  uilogicscript: "",
  message: null,
};

let temp = p.output.map((m) => m.properties.map((p) => p.name)).flat();

console.log(temp.map((t) => `kbci.${t} as ${t},`).join("\n"));
// console.log(
//   temp
//     .map((t) => `productObj.${t} = product_distribution_info[i].${t}`)
//     .join("\n")
// );
