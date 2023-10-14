/**
 * 表示用于表单操作和控制的 Page 对象。
 */
declare class Page {
    /**
     * 检查当前表单状态。
     * @param status - 要检查的状态（可能的值：“new”、“edit”、“view”）。
     * @returns 如果表单状态与提供的状态匹配，则为 true。
     */
    static statusIs(status: "new" | "edit" | "view"): boolean;

    /**
     * 设置表单标题。
     * @param title - 要设置的标题。
     */
    static setTitle(title: string): void;

    /**
     * 获取传递给表单的参数。
     * @param param - 要检索的参数的名称。
     * @returns 包含参数值的对象。
     */
    static getLinkParams(param: string): Record<string, any>;

    /**
     * 刷新表单布局。
     */
    static applyLayout(): void;

    /**
     * 获取单个表单内存字段的值。
     * @param key - 内存字段的名称。
     * @returns 内存字段的值。
     */
    static getValue(key: string): any;

    /**
     * 获取多个表单内存字段的值。
     * @param keys - 内存字段名称的数组。
     * @returns 包含内存字段值的对象。
     */
    static getValues(keys: string[]): Record<string, any>;

    /**
     * 设置单个表单内存字段的值。
     * @param key - 内存字段的名称。
     * @param value - 要设置的值。
     */
    static setValue(key: string, value: any): void;

    /**
     * 设置多个表单内存字段的值。
     * @param data - 包含字段名称和值的对象。
     */
    static setValues(data: Record<string, any>): void;

    /**
     * 通过名称获取特定的表单控件。
     * @param ctrlName - 控件的名称。
     * @returns 表单控件。
     */
    static getCtrl(ctrlName: string): Ctrl;

    /**
     * 通过名称获取特定的选择器控件。
     * @param ctrlName - 选择器控件的名称。
     * @returns 选择器控件。
     */
    static getPickerCtrl(ctrlName: string): PickerCtrl;

    /**
     * 通过名称获取特定的数组控件。
     * @param ctrlName - 数组控件的名称。
     * @returns 数组控件。
     */
    static getArrayCtrl(ctrlName: string): ArrayCtrl;

    /**
     * 调用广播事件。
     * @param eventName - 事件的名称。
     */
    static callEvent(eventName: string): void;

    /**
     * 调用表单事件。
     * @param eventLabel - 表单事件的标签。
     */
    static runEvent(eventLabel: string): void;

    /**
     * 检查表单合法性。
     * @param formName - 表单的名称。
     * @returns 如果表单合法则返回 true，否则返回 false。
     */
    static constraintCheck(formName: string): boolean;

    /**
     * 显示进度框。
     * @param message - 进度框中的消息。
     */
    static openProgress(message: string): void;

    /**
     * 关闭进度框。
     */
    static closeProgress(): void;

    /**
     * 弹出对话框。
     * @param type - 对话框类型（info 或 error）。
     * @param message - 对话框中的消息。
     */
    static alert(type: AlertType, message: string): void;

    /**
     * 链接到指定表单（名称）。
     * @param formName - 表单的名称。
     * @param params - 传递的参数对象。
     */
    static linkToPage(formName: string, params: Record<string, any>): void;

    /**
     * 链接到指定表单（code）。
     * @param formCode - 表单的 code。
     * @param params - 传递的参数对象。
     */
    static linkToPageCode(formCode: string, params: Record<string, any>): void;

    /**
     * 返回到指定层级的表单。
     * @param level - 表单的层级。
     */
    static returnToPageCount(level: string): void;

    /**
     * 链接到指定表单（code）。
     * @param formCode - 表单的 code。
     * @param params - 传递的参数对象。
     */
    static link(formCode: string, params: Record<string, any>): void;

    /**
     * 返回到上一级表单。
     */
    static return(): void;
}


/**
 * 表单事件操作的接口。
 * @interface
 */
declare class Page {
    /**
     * 调用广播事件。
     * @param eventName - 事件的名称。
     */
    static callEvent(eventName: string): void;

    /**
     * 调用表单事件。
     * @param eventLabel - 表单事件的标签。
     */
    static runEvent(eventLabel: string): void;

    /**
     * 检查表单合法性。
     * @param formName - 表单的名称。
     * @returns 如果表单合法则返回 true，否则返回 false。
     */
    static constraintCheck(formName: string): boolean;

    /**
     * 显示进度框。
     * @param message - 进度框中的消息。
     */
    static openProgress(message: string): void;

    /**
     * 关闭进度框。
     */
    static closeProgress(): void;

    /**
     * 弹出对话框。
     * @param type - 对话框类型（info 或 error）。
     * @param message - 对话框中的消息。
     */
    static alert(type: AlertType, message: string): void;

    /**
     * 链接到指定表单（名称）。
     * @param formName - 表单的名称。
     * @param params - 传递的参数对象。
     */
    static linkToPage(formName: string, params: Record<string, any>): void;

    /**
     * 链接到指定表单（code）。
     * @param formCode - 表单的 code。
     * @param params - 传递的参数对象。
     */
    static linkToPageCode(formCode: string, params: Record<string, any>): void;

    /**
     * 返回到指定层级的表单。
     * @param level - 表单的层级。
     */
    static returnToPageCount(level: string): void;

    /**
     * 链接到指定表单（code）。
     * @param formCode - 表单的 code。
     * @param params - 传递的参数对象。
     */
    static link(formCode: string, params: Record<string, any>): void;

    /**
     * 返回到上一级表单。
     */
    static return(): void;
}

/**
 * 表示对话框的类型。
 * @enum
 */
declare enum AlertType {
    /**
     * 信息对话框。
     */
    info,

    /**
     * 错误对话框。
     */
    error,
}


