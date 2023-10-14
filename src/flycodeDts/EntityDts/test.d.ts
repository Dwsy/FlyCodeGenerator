/**
* 输出参数
*/
declare namespace OUT {


    /**
    * lk_cost_item(费用项目)
    */
    interface lk_cost_item {
        /**
         * 门店名称(store_name)(📝)
        */
        store_name: string;
        /**
         * 门店地址(store_address)(📝)
        */
        store_address: string;
        /**
         * 堆头数量(head_number)(💰)
        */
        head_number: string;
        /**
         * 堆头金额(head_amount)(💰)
        */
        head_amount: string;
        /**
         * 端架/专架数量(rack_number)(💰)
        */
        rack_number: string;
        /**
         * 端架/专架金额(rack_amount)(💰)
        */
        rack_amount: string;
        /**
         * 斜口蓝数量(diagonal_number)(💰)
        */
        diagonal_number: string;
        /**
         * 斜口蓝金额(diagonal_amount)(💰)
        */
        diagonal_amount: string;
        /**
         * 挂网数量(net_number)(💰)
        */
        net_number: string;
        /**
         * 挂网金额(net_amount)(💰)
        */
        net_amount: string;
        /**
         * 挂条数量(strip_number)(💰)
        */
        strip_number: string;
        /**
         * 挂条金额(strip_amount)(💰)
        */
        strip_amount: string;
        /**
         * 费用合计(total_expenses)(💰)
        */
        total_expenses: string;
        /**
         * 预计销量(expected_sales)(💰)
        */
        expected_sales: string;
        /**
         * 总费用合计(all_total_expenses)(💰)
        */
        all_total_expenses: string;
        /**
         * 唯一标识(id)(🔑)
        */
        id: string;
        /**
         * 门店id(store_id)(🔗)
        */
        store_id: string;
        /**
         * 门店编码(store_code)(📝)
        */
        store_code: string;
        /**
         * 方案id(plan_id)(🔗)
        */
        plan_id: string;
    }



    /**
    * $lk_cost_item 数组
    */
    const test: lk_cost_item[]


}