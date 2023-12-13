declare function CtrlValueSetter(params: string)
declare class Ctrl {
    /**
     * 控件编码，只读。
     */
    code: string;

    /**
     * 控件值，可以是基础数据类型、字典或数组，具体类型取决于控件的种类。
     */
    value: string | Dictionary | any[];

    /**
     * 获取数值型控件的数字值，便于直接用于计算或比较。
     */
    floatValue: number;

    /**
     * 控件的显示或隐藏状态
     */
    hidden: boolean;

    /**
     * 控件的只读状态，设置后，控件会自动更新显示状态。
     */
    readonly: boolean;

    /**
     * 控件的必填状态，设置后，控件会自动更新显示状态。
     */
    required: boolean;

    /**
     * 控件的前景色，用于设置或获取控件的前景颜色。
     */
    color: string;

    /**
     * 控件的背景色，用于设置或获取控件的背景颜色。
     */
    bgcolor: string;

    /**
     * 设置控件中某一属性的值。
     *
     * @param propertyName - 控件属性的名字
     * @param newValue - 属性对应的值
     * @param groupIndex - 指定属性所在分组的序号（仅适用于分组型控件）
     * @example
     *  设置文本控件前景色为内置颜色 red
     * textCtrl.setProperty('color', Color.red);
     *
     *  设置文本控件文字的排版属性
     * textCtrl.setProperty('textAlign', 'center');
     */
    setProperty(propertyName: string, newValue: any, groupIndex?: number): void;

    /**
     * 获取控件中某一属性的值。
     *
     * @param propertyName - 控件属性的名字
     * @param groupIndex - 属性所在分组的序号
     * @returns 属性的值
     * @example
     *  获取文本控件的前景色
     * var color = textCtrl.getProperty('color');
     */
    getProperty(propertyName: string, groupIndex?: number): any;

    /**
     * 设置控件的值。
     *
     * @param value - 控件的值
     * @param setter - 控件值设置规则
     * @example
     *  设置定位控件 address 属性的值
     * var address = '广州天河';
     * var location1Ctrl = Page.getCtrl('定位控件1');
     * var setter = CtrlValueSetter('address');
     * location1Ctrl.setValue(address, setter);
     *
     *  直接把 value 赋给控件，由控件自行处理
     * var position = {'lat': 23.242342, 'lng': 133.556.433231, 'address': '中国'};
     * var location2Ctrl = Page.getCtrl('定位控件2');
     * location2Ctrl.setValue(position);
     */
    setValue(value: any, setter?: CtrlValueSetter): void;

    /**
     * 获取控件的值。
     *
     * @param getter - 控件值获取规则
     * @returns 控件的值
     * @example
     *  获取定位控件 address 属性的值
     * var location1Ctrl = Page.getCtrl('定位控件1');
     * var getter = CtrlValueGetter('address');
     * var address = location1Ctrl.getValue(getter);
     *
     *  不指定取值规则，返回值由控件决定
     * var location2Ctrl = Page.getCtrl('定位控件2');
     * var position = location2Ctrl.getValue();
     */
    getValue(getter?: Getter): any;

    /**
     * 用于校验规则很复杂时，将错误提示信息提供给控件显示。
     *
     * @param msg - 控件上展现的校验结果提示语
     * @example
     * var ctrl = Page.getCtrl('控件');
     *  复杂校验
     * var result = ComplexValidateValue(ctrl.value);
     *  反馈校验结果
     * if (!result.isLegal) {
     *     ctrl.setErrorMsg(result.errMsg);
     * }
     */
    setErrorMsg(msg: string): void;

    /**
     * 清除控件的错误信息。
     * @example
     * var ctrl = Page.getCtrl('控件');
     *  复杂校验
     * var result = ComplexValidateValue(ctrl.value);
     *  反馈校验结果
     * if (result.isLegal) {
     *     ctrl.clearErrorMsg();
     * }
     */
    clearErrorMsg(): void;

    /**
     * 控件校验，返回控件校验结果。
     *
     * @returns 控件校验结果
     * @example
     * var ctrl = Page.getCtrl('控件');
     *  触发控件的校验
     * var isLegal = ctrl.validate();
     */
    validate(): boolean;

    /**
     * 触发控件EventTrigger所绑定的事件。
     *
     * @param triggerName - 控件的EventTrigger
     * @example
     *  触发列表配置协议中的 onload 事件
     * Page.getCtrl('列表').triggerEvent('onload');
     */
    triggerEvent(triggerName: string): void;

    /**
     * 修改控件标题字体颜色。
     *
     * @param color - 控件标题字体颜色
     * @example
     *  改变文本控件标题字体颜色（编辑状态/查看状态/只读状态）
     * var color = Page.getCtrl('文本控件').setTitleColor('#FFFFFF');
     */
    setTitleColor(color: string): void;
}
