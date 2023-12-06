// 这里提供完整的TypeScript定义文件代码:


/**
 * 赋值规则接口
 */
interface ArrayCtrlSetter {

    /**
     * 赋值规则
     * @param fromKey 来源字段
     * @param toKey 目标字段
     */
    append(fromKey: string, toKey: string): void;

}

// 这个是完整的TypeScript定义文件内容,包含了类和接口定义以及方法参数和返回值的中文注释说明。


/**
 * 表示数组型控件，像 List、Table 之类的由数组型数据驱动显示的控件。
 */
declare class ArrayCtrl {

    /**
     * 重新设置全部数据
     * @param rowsData 将要刷新的数据
     * @param setter 赋值规则
     * @returns 刷新是否成功
     */
    reload(rowsData: any[], setter?: ArrayCtrlSetter): boolean;

    /**
     * 插入数据到指定索引
     * @param rowsData 将要插入的数据
     * @param index 插入位置索引
     * @param setter 赋值规则  
     * @returns 插入是否成功
     */
    insert(rowsData: any[], index: number, setter?: ArrayCtrlSetter): boolean;

    /**
     * 插入数据到头部或尾部
     * @param rowsData 将要插入的数据
     * @param pos 插入位置
     * @param setter 赋值规则
     * @returns 插入是否成功
     */
    append(rowsData: any[], pos: 'head' | 'tail', setter?: ArrayCtrlSetter): boolean;

    /**
     * 更新数据
     * @param rowsData 将要更新的数据
     * @param indexes 更新行索引
     * @param setter 赋值规则
     * @returns 更新是否成功
     */
    update(rowsData: any[], indexes: number[], setter?: ArrayCtrlSetter): boolean;

    /**
     * 删除指定位置的数据  
     * @param indexes 删除的行索引 
     * @returns 删除是否成功
     */
    delete(indexes: number[]): boolean;

    /**
     * 删除指定范围内的数据
     * @param scope 删除范围
     * @returns 删除是否成功
     */
    deleteInScope(scope: 'all' | 'checked' | 'modified' | 'focused'): boolean;

    /**
     * 删除指定范围外的数据
     * @param scope 删除范围
     * @returns 删除是否成功
     */
    deleteInScopeReverse(scope: 'all' | 'checked' | 'modified' | 'focused'): boolean;

    /**
     * 选择行数据
     * @param rowsData 选择的数据
     * @param setter 赋值规则
     */
    selectRows(rowsData: any[], setter?: ArrayCtrlSetter);
    /**
     * 获取数组型控件勾选的数量。
     */
    checkedNumber: number;

    /**
     * 获取数组型控件的当前分页索引。
     */
    pageIndex: number;

    /**
     * 获取数组型控件的数据总行数。
     */
    rowNumber: number;


    /**
     * 获取数组型控件的总分组数。注意，若分组型控件不支持分组，该属性永远返回1。
     */
    sectionNumber: number;

    /**
     * 控件编码
     */
    // 
    readonly code: string;

    /**
     *  控件值
     */
    value: string | Dictionary | Array;

    /**
     *  隐藏
     */
    hidden: boolean;

    /**
     *  只读
     */
    readonly: boolean;
    /**
     *  必填
     */
    required: boolean;

    /**
     *  前景色
     */
    color: Color;

    /**
     *  背景色
     */
    bgcolor: Color;

    /**
     * 重新设置全部数据。
     * @param {Array<any>} data - 新的数据数组。
     * @param {Function} setter - 数据设置函数。
     */
    reloadData(data: any[], setter: Function): void;

    /**
     * 插入多条数据到指定的 indexPath。
     * @param {Array<any>} data - 要插入的数据数组。
     * @param {Function} setter - 数据设置函数。
     * @param {number[]} indexPaths - 插入的位置的数组索引。
     */
    insertData(data: any[], setter: Function, indexPaths: number[]): void;

    /**
     * 更新多条数据到指定的 indexPath。
     * @param {Array<any>} data - 要更新的数据数组。
     * @param {Function} setter - 数据设置函数。
     * @param {number[]} indexPaths - 更新的位置的数组索引。
     */
    updateData(data: any[], setter: Function, indexPaths: number[]): void;

    /**
     * 删除指定位置的行。
     * @param {number[]} indexes - 要删除的行的索引数组。
     */
    delete(indexes: number[]): void;

    /**
     * 删除指定范围内的数据。
     * @param {string} scope - 删除的范围，可选值包括 'all', 'checked', 'focus', 'modified'.
     */
    deleteInScope(scope: 'all' | 'checked' | 'focus' | 'modified'): void;

    /**
     * 删除指定范围外的数据。
     * @param {string} scope - 保留的范围，可选值包括 'all', 'checked', 'focus', 'modified'.
     */
    deleteInScopeReverse(scope: 'all' | 'checked' | 'focus' | 'modified'): void;

    /**
     * 手动设置控件的加载状态。
     * @param {string} statusType - 加载状态的类型。
     */
    setLoadStatus(statusType: string): void;

    /**
     * 获取数组型控件中某一行的行控件。
     * @param {IndexPath} indexPath - 数组型控件行索引对象，类型参看 IndexPath 说明。
     * @returns {ArrayRowCtrl | null} - 返回数组型控件指定的行控件，若 indexPath 指定的行索引超出控件范围时，返回 null。
     */
    getRowAtIndexPath(indexPath: IndexPath): ArrayRowCtrl | null;

    /**
     * 获取数组型控件中所有的行控件。
     * @returns {Array<ArrayRowCtrl> | null} - 返回数组型控件中的所有行控件，若控件为空，返回 null。
     */
    getAllRows(): Array<ArrayRowCtrl> | null;

    /**
     * 获取数组型控件中所有被勾选的行控件。
     * @returns {Array<ArrayRowCtrl> | null} - 返回数组型控件中勾选的行控件，若没有勾选，返回 null。
     */
    getCheckedRows(): Array<ArrayRowCtrl> | null;

    /**
     * 获取列表型控件所有选中行的 indexPath。
     * @returns {Array<IndexPath> | null} - 返回数组型控件中勾选的行的 indexPath，若没有勾选，返回 null。
     */
    getCheckedRowsIndexPath(): Array<IndexPath> | null;

    /**
     * 获取数组型控件的焦点所在的行索引，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回 null.
     * @returns {IndexPath | null} - 返回数组型控件的行索引，当焦点不存在时，返回 null.
     */
    getFocusRowIndexPath(): IndexPath | null;

    /**
     * 获取数组型控件的焦点行控件，注意，当行处于选中状态，或行中子控件处于焦点状态，该方法都不应返回 null.
     * @returns {ArrayRowCtrl | null} - 返回数组型控件的行控件，当焦点不存在时，返回 null.
     */
    getFocusRow(): ArrayRowCtrl | null;

    /**
     * 获取数组型控件中所有分组的所有数据。
     * @param {ArrayCtrlGetter | null} arrayCtrlGetter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，该子控件不区分是在行控件还是分组头控件中，Dictionary 形如。
     * @returns {Array<Dictionary> | null} - 返回数组型控件中的所有数据，Array 形如 [Dictionary]，详见数组型控件数据格式。
     */
    getData(arrayCtrlGetter: ArrayCtrlGetter | null): Array<Dictionary> | null;

    /**
     * 获取指定多行的数据，indexes 是一个 int 数组，表示要获取的行。
     * @param {number[] | number} indexes - 要获取数据的行索引，为正整数数组或正整数，如 1 或 [0, 2, 3].
     * @param {ArrayCtrlGetter | null} getter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary 形如。
     * @param {boolean} isExhaustive - 当为 true 时，表示只取指定的数据；为 false 时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为 false.
     * @returns {Array<Dictionary> | null} - 返回数组型控件中的指定行数据，Array 形如 [Dictionary]，详见数组型控件数据格式.
     */
    getInIndexes(indexes: number[] | number, getter: ArrayCtrlGetter | null, isExhaustive: boolean): Array<Dictionary> | null;

    /**
     * 获取指定范围内的数据，getter 可以为空，此时 isExhaustive 也无效，必须为空。
     * @param {string} scope - scope 的取值有以下几种取值: 'all' 全部数据; 'checked' 勾选数据; 'modified' 已修改数据; 'focused' 已修改数据.
     * @param {ArrayCtrlGetter | null} getter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary 形如。
    * @param {boolean} isExhaustive - 当为 true 时，表示只取指定的数据；为 false 时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为 false.
    * @returns {Array<Dictionary> | null} - 返回数组型控件中的指定范围内的数据，Array 形如 [Dictionary]，详见数组型控件数据格式.
    */
    getInScope(scope: string, getter: ArrayCtrlGetter | null, isExhaustive: boolean): Array<Dictionary> | null;

    /**
     * 获取指定范围外的数据，与 getInScope 相反，getter 可以为空，此时 isExhaustive 也无效，必须为空。
     * @param {string} scope - scope 的取值有以下几种取值: 'all' 全部数据; 'checked' 勾选数据; 'modified' 已修改数据; 'focused' 已修改数据.
     * @param {ArrayCtrlGetter | null} getter - 默认情况下为 null，也可以指定在取值过程中，匹配的子控件取某属性值，Dictionary 形如。
     * @param {boolean} isExhaustive - 当为 true 时，表示只取指定的数据；为 false 时表示，除了指定的数据，其他数据也要根据默认规则进行获取。默认值为 false.
     * @returns {Array<Dictionary> | null} - 返回数组型控件中的指定范围外的数据，Array 形如 [Dictionary]，详见数组型控件数据格式.
     */
    getInScopeReverse(scope: string, getter: ArrayCtrlGetter | null, isExhaustive: boolean): Array<Dictionary> | null;

    /**
     * 获取指定位置的行控件 ArrayRowCtrl。indexes 支持 int 数组或者 int 值，当是数组时，返回数组；当是 int 时，返回单对象。
     * @param {number[] | number} indexes - 要获取数据的行索引，为正整数或正整数数组，如 1 或 [0, 2, 3].
     * @returns {ArrayRowCtrl | Array<ArrayRowCtrl>} - 返回数组型控件中的行控件，返回 Array 时形如 [ArrayRowCtrl]，返回单对象时为 ArrayRowCtrl.
     */
    getRowAtIndexes(indexes: number[] | number): ArrayRowCtrl | Array<ArrayRowCtrl>;

    /**
     * 获取指定名字的列对象 ArrayColCtrl。目前暂未实现 ArrayColCtrl。
     * @param {string} name - 要获取的列控件的名称.
     * @returns {ArrayColCtrl | null} - 返回单对象 ArrayColCtrl，若列对象不存在，返回 null.
     */
    getColByName(name: string): ArrayColCtrl | null;

    /**
     * 获取指定范围的行的 indexes。
     * @param {string} scope - scope 的取值有以下几种取值: 'all' 全部数据; 'checked' 勾选数据; 'modified' 已修改数据; 'focused' 已修改数据.
     * @returns {number[] | null} - 获取指定范围的行的 indexes，为正整数数组，形如 [0, 2, 3].
     */
    getIndexesInScope(scope: string): number[] | null;

    /**
     * 针对用户添加数据时可能会选中已有的数据，造成不必要的困惑，设计出以下方案，避免重复数据的选择。
     * 新增一个同步数据接口，用于进行数据相似性校验。
     * @param {Dictionary[]} checkData - 用于检测重复的数据，接收一个对象数组.
     * @param {string[]} keys - 用于校验的字段，和 rule 搭配使用，keys 为空但 rule 不为空时，keys 就取 checkData 中的所有字段.
     * @param {string} rule - 内置校验规则，取值有 and，or，custom，可以为空，空值表示 custom，即使用 checkFunction 校验.
     * @param {Function} checkFunction - 接受一个自定义函数，该函数返回一个 Bool 值，用来判断是否是重复数据，可以为空，参看下方说明.
     * @returns {Object} - 返回一个对象，该对象有三个属性：sameData，sameIndexes，otherData。
     */
    sameCheck(checkData: Dictionary[], keys: string[], rule: string, checkFunction: Function): {
        sameData: Dictionary[];
        sameIndexes: number[];
        otherData: Dictionary[];
    };

    /**
     * 获取所有头部栏按钮的 Ctrl。
     * @returns {Array<Ctrl> | null} - 返回数组型控件所有头部栏按钮的 Ctrl，若控件为空，返回 null.
     */
    getHeaderButtons(): Array<Ctrl> | null;

    /**
     * 获取该列的控
 
 件。
     * @returns {Ctrl} - 返回列的控件。
     */
    getColumnCtrl(): Ctrl;

    /**
     * 获取单选数据所在的行控件 ArrayRowCtrl，只返回单选的行，即单选为 true 的行。
     * @returns {ArrayRowCtrl | null} - 返回数组型控件中单选的行控件，若没有单选行，返回 null.
     */
    getCheckedRow(): ArrayRowCtrl | null;

    /**
     * 获取单选数据所在行的数据。
     * @returns {Dictionary | null} - 返回数组型控件中单选的行的数据，若没有单选行，返回 null.
     */
    getCheckedRowData(): Dictionary | null;

    /**
     * 获取某数据对应的行控件 ArrayRowCtrl，只返回一行，即数据中的数组只有一个值。
     * @param {Dictionary} data - 要获取的数据对象。
     * @returns {ArrayRowCtrl | null} - 返回数组型控件中数据对应的行控件，若数据不存在或有多条匹配行时，返回 null.
     */
    getRowByData(data: Dictionary): ArrayRowCtrl | null;

    /**
     * 获取某数据对应的行的行索引，只返回一行，即数据中的数组只有一个值。
     * @param {Dictionary} data - 要获取的数据对象。
     * @returns {IndexPath | null} - 返回数组型控件中数据对应的行的行索引，若数据不存在或有多条匹配行时，返回 null.
     */
    getRowIndexByData(data: Dictionary): IndexPath | null;

    /**
     * 获取数据对应的行控件，多选下一个焦点使用。
     * @param {Dictionary} data - 要获取的数据对象.
     * @returns {ArrayRowCtrl | null} - 返回数组型控件中数据对应的行控件，若数据不存在或有多条匹配行时，返回 null.
     */
    getRowForFocus(data: Dictionary): ArrayRowCtrl | null;

    /**
     * 设置数组型控件的行编辑状态，即当数组型控件进入行编辑状态，所有行都会进入行编辑状态，除非该行为只读状态。
     * @param {boolean} enable - 为 true 时表示开启行编辑状态，为 false 时表示关闭行编辑状态.
     */
    setRowEdit(enable: boolean): void;

    /**
     * 停止单元格编辑。
     * @returns {boolean} - 无返回值。
     */
    stopCellEdit(): void;

    /**
     * 启用行复制功能。
     * @param {number} count - 启用行复制功能，有两个参数，参数一为要复制的行数，参数二为对复制后行数据进行编辑的函数，必须要有。
     */
    copyRows(count: number, func: Function): void;
}

declare class ArrayRowCtrl {
    // 获取该列的控件
    getCtrl(): Ctrl;
    /**
     * 获取数组型控件行控件的数据。
     * @returns {Dictionary | null} - 返回数组型控件行控件的数据，当数据不存在时，返回 null.
     */
    getData(): Dictionary | null;

    /**
     * 获取数组型控件行控件的选中状态。
     * @returns {boolean} - 返回数组型控件行控件的选中状态，为 true 时表示选中，为 false 时表示未选中.
     */
    getChecked(): boolean;

    /**
     * 获取数组型控件行控件的已编辑状态。
     * @returns {boolean} - 返回数组型控件行控件的已编辑状态，为 true 时表示已编辑，为 false 时表示未编辑.
     */
    getModified(): boolean;

    /**
     * 获取数组型控件行控件的焦点状态。
     * @returns {boolean} - 返回数组型控件行控件的焦点状态，为 true 时表示有焦点，为 false 时表示无焦点.
     */
    getFocus(): boolean;

    /**
     * 获取数组型控件行控件的单选状态。
     * @returns {boolean} - 返回数组型控件行控件的单选状态，为 true 时表示单选，为 false 时表示非单选.
     */
    getSingleCheck(): boolean;

    /**
     * 设置数组型控件行控件的选中状态。
     * @param {boolean} checked - 为 true 时表示选中，为 false 时表示未选中.
     */
    setChecked(checked: boolean): void;

    /**
     * 设置数组型控件行控件的已编辑状态。
     * @param {boolean} modified - 为 true 时表示已编辑，为 false 时表示未编辑.
     */
    setModified(modified: boolean): void;

    /**
     * 设置数组型控件行控件的焦点状态。
     * @param {boolean} focus - 为 true 时表示有焦点，为 false 时表示无焦点.
     */
    setFocus(focus: boolean): void;

    /**
     * 设置数组型控件行控件的单选状态。
     * @param {boolean} singleCheck - 为 true 时表示单选，为 false 时表示非单选.
     */
    setSingleCheck(singleCheck: boolean): void;

    /**
     * 通过名称获取特定的选择器控件。
     * @param ctrlName - 选择器控件的名称。
     * @returns 选择器控件。
     */
    getPickerCtrl(ctrlName: string): PickerCtrl;
}

declare class ArrayColCtrl {

    /**
     *  隐藏
     */
    hidden: boolean;

    /**
     *  只读
     */
    readonly: boolean;
    /**
     *  必填
     */
    required: boolean;

    // 获取该列的控件
    getCtrl(): Ctrl;

    // 获取该列的选择控件
    getPickerCtrl(): PickerCtrl;


}

declare type ArrayCtrlGetter = {
    name: string;
    action: string;
};




