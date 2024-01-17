<script setup lang="ts">
onMounted(() => {
  const style = document.createElement('style')
  style.innerHTML = `

  #app > div > div.content > div.router-container > div > div > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line.ant-tabs-no-animation > div.ant-tabs-content.ant-tabs-content-no-animated.ant-tabs-top-content > div.ant-tabs-tabpane.ant-tabs-tabpane-active > div.ui-designer-container.cl > div.center-content > div.ui-canvas-parent > div.center-content-inner{
    filter :invert(1) hue-rotate(180deg)
  }

.logic-edit-container > .left-side {
  background-color: #ffffff00 !important;
}
/* todo switch */
.logic-edit-container > .right-side {
  background-color: #ffffff00 !important;
}
#beSetting
  > div.main-content
  > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line
  > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content
  > div.ant-tabs-tabpane.ant-tabs-tabpane-active {
  padding: 0px !important;
}

.monaco-editor {
  background-color: #ffffff00 !important;
}
.monaco-editor-background {
  background-color: #ffffff00 !important;
}

.monaco-editor .margin {
  background-color: #ffffff00 !important;
}
.ant-drawer-content{
    background-color:black !important;
}
body {
  opacity: 0.92;
  --theme-bg-nav: #ffffff00 !important;
  --theme-bg-card: #ffffff00 !important;
  --theme-bg-page: #ffffff00 !important;
  --theme-bg-header: #ffffff00 !important;
  --theme-bg-list-striped: #2f2f31;
  --theme-table-background: #ffffff00 !important;
  --theme-bg-list-header: #3e3e3e;
  --theme-bg-list-activated: #393939;
  --theme-bg-content: #ffffff00 !important;

  --theme-icon-color: #818181;
  --theme-primary-divider-color: #3f4042;
  --theme-grand-menu-bgcolor: #2d2d2d;
  --theme-pagination-total-color: #bcbcbc;
  --theme-other-tool-bgcolor: #282828;
  --theme-tag-border-color: #64676b;
  --theme-tag-background-color: #333333;
  --theme-tag-color: #969799;
  --theme-check-border-color: #969799;
  --theme-check-background-color: #333;
  --theme-check-disabled-background: #64676b;
  --theme-login-background-color: #2e2f30;
  --theme-login-return-btn-color: #969799;
  --theme-login-search-background-color: #454545;
  --theme-login-search-border-color: #64676b;
  --theme-login-search-color: #ffffff;
  --theme-login-user-color: #ffffff;
  --theme-login-tenant-background-color: #3a3a3a;
  --theme-login-tenant-icon-color: #ffffff;
  --theme-login-tenant-version-color: #969799;
  --theme-login-tenant-background-color--hover: #464a4f;
  --theme-login-tenant-box-shadow--hover: 0px 4px 10px 2px rgba(22, 22, 22, 0.5);
  --theme-login-user-background-color--hover: #242525;
  --theme-background-color-base: #0d0d0e;
  --theme-divider-border-color: #3f4042;
  --theme-content-background-color: #3f4042;
  --theme-content-background-color--hover: #242525;
  --theme-card-item-background-color: #202020;
  --theme-card-item-border-color: #202020;
  --theme-card-item-header-color: #8c8c8c;
  --theme-card-tab-header-color: #2d2d2d;
  --theme-card-text-color: #d1d0d0;
  --theme-card-text-background-color--hover: #454545;
  --theme-card-header-text-color: #8c8c8c;
  --theme-envi-hover-bg: #2d2d2d;
  --theme-drawer-background-color: #1e1e1e;
  --theme-drawer-color: #8c8c8c;
  --theme-drawer-color-high: #d1d0d0;
  --theme-drawer-border-color: #6d6d70;
  --theme-primary-linear-color: linear-gradient(to right, #419cff, #76cbff);
  --theme-primary-linear-hover-color: linear-gradient(to right, #4583f8, #70c0fe);
  --theme-primary-radial-color: linear-gradient(to right, #419cff, #76cbff);
  --theme-primary-login-background: #202124;
  --theme-primary-login-main-background: #323233;
  --theme-item-background-color: #454545;
  --theme-primary-color-btn-hover: #288eff;
  --theme-primary-color-selected-hover: #fff;
  --theme-font-color-version: rgba(255, 255, 255, 0.64);
  --theme-font-color-high: rgba(255, 255, 255, 1);
  --theme-font-color-middle: #d1d0d0;
  --theme-font-color-low: rgba(255, 255, 255, 0.24);
  --theme-font-color-light: #808080;
  --theme-font-color-active: #429cff;
  --theme-font-color-subtitle: #8c8c8c;
  --theme-icon-color-active: rgba(255, 255, 255, 1);
  --theme-primary-background-weight: #131415;
  --theme-primary-background-middle: #202124;
  --theme-primary-background-ligth: #2e2f30;
  --theme-primary-background-base: rgba(0, 0, 0, 0.6);
  --theme-shell-menu-background: #1e1e1e;
  --theme-shell-menu-font-color: rgba(255, 255, 255, 0.87);
  --theme-shell-menu-font-color-active: #288eff;
  --theme-primary-font-color-reverse: #dcdcdc;
  --theme-form-item-border: #6d6d70;
  --theme-form-input-background: rgba(255, 255, 255, 0.05);
  --theme-form-input-border: #2e2f30;
  --theme-form-item-border-error: #ff4d4f;
  --theme-form-item-disabled-border: rgba(109, 109, 109, 0.36);
  --theme-form-item-background: #454545;
  --theme-form-item-disabled-background: rgba(69, 69, 69, 0.36);
  --theme-card-item-background: #323233;
  --theme-list-item-background: #454545;
  --theme-list-item-child-background: #5aa4f4;
  --theme-list-item-child-background-hover: #7dabdc;
  --theme-table-thead-background: #454545;
  --theme-table-background-even-row: rgba(0, 0, 0, 0.1);
  --theme-table-row-hover: rgba(255, 255, 255, 0.05);
  --theme-table-row-active: rgba(255, 255, 255, 0.05);
  --theme-item-hover: rgba(255, 255, 255, 0.05);
  --theme-shell-funcmenu-background: #202124;
  --theme-shell-funcmenu-background-active: rgba(255, 255, 255, 0.2);
  --theme-select-menu-background: #454545;
  --theme-select-menu-background-disabled: #131415;
  --theme-tools-button-color: #ffffff;
  --theme-tools-button-background-color: #454545;
  --theme-tools-button-border-color: #64676b;
  --theme-tools-button-color--disabled: #64676b;
  --theme-tools-button-background-color--disabled: #333333;
  --theme-tools-button-border-color--disabled: #515255;
  ----theme-scrollbar-thumb: #333333;
  ----theme-scrollbar-track: #6a6a6a;
  --theme-status-unpublished: #666666;
  --theme-btn-default-border-hover: #588cf1;
  --theme-btn-primary-border-hover: #588cf1;
  --theme-btn-primary-bg-hover: #588cf1;
  --theme-btn-text-color-hover: #588cf1;
  --theme-btn-text-bg-hover: #242525;
  --theme-nav-bg-hover: #242525;
  --theme-primary-background-layer: rgba(33, 33, 33, 0.5);
  --theme-font-size-max: 28px;
  --theme-font-size-mid: 14px;
  --theme-font-size-min: 13px;
  --theme-table-tr-background: #2e333c;
  --theme-table-tr-even-background: #323943;
  --theme-table-tr-hover-background: #595e65;
  --theme-table-placeholder-background: #1a1a1a;
  --theme-table-placeholder-color: #666666;
  --theme-shell-menu-font-background-active: #212428;
  --theme-right-menu-background-active: #595e65;
  --theme-modal-alert-background: #333;
  --theme-modal-alert-color: rgba(255, 255, 255, 0.65);
  --theme-tooltip-background: #c0c2c7;
  --theme-tooltip-color: #333;
  --button-space: 10px;
  --auxiliary-text-color: #969799;
}
`
  document.head.appendChild(style)
})
</script>

<template></template>
<style scoped>
.logic-edit-container > .left-side {
  background-color: #ffffff00 !important;
}
/* todo switch */
.logic-edit-container > .right-side {
  background-color: #ffffff00 !important;
}
#beSetting
  > div.main-content
  > div.tab-content.ant-tabs.ant-tabs-top.ant-tabs-line
  > div.ant-tabs-content.ant-tabs-content-animated.ant-tabs-top-content
  > div.ant-tabs-tabpane.ant-tabs-tabpane-active {
  padding: 0px !important;
}

.monaco-editor {
  background-color: #ffffff00 !important;
}
.monaco-editor-background {
  background-color: #ffffff00 !important;
}

.monaco-editor .margin {
  background-color: #ffffff00 !important;
}

body {
  opacity: 0.92;
  --theme-bg-nav: #ffffff00 !important;
  --theme-bg-card: #ffffff00 !important;
  --theme-bg-page: #ffffff00 !important;
  --theme-bg-header: #ffffff00 !important;
  --theme-bg-list-striped: #2f2f31;
  --theme-table-background: #ffffff00 !important;
  --theme-bg-list-header: #3e3e3e;
  --theme-bg-list-activated: #393939;
  --theme-bg-content: #ffffff00 !important;

  --theme-icon-color: #818181;
  --theme-primary-divider-color: #3f4042;
  --theme-grand-menu-bgcolor: #2d2d2d;
  --theme-pagination-total-color: #bcbcbc;
  --theme-other-tool-bgcolor: #282828;
  --theme-tag-border-color: #64676b;
  --theme-tag-background-color: #333333;
  --theme-tag-color: #969799;
  --theme-check-border-color: #969799;
  --theme-check-background-color: #333;
  --theme-check-disabled-background: #64676b;
  --theme-login-background-color: #2e2f30;
  --theme-login-return-btn-color: #969799;
  --theme-login-search-background-color: #454545;
  --theme-login-search-border-color: #64676b;
  --theme-login-search-color: #ffffff;
  --theme-login-user-color: #ffffff;
  --theme-login-tenant-background-color: #3a3a3a;
  --theme-login-tenant-icon-color: #ffffff;
  --theme-login-tenant-version-color: #969799;
  --theme-login-tenant-background-color--hover: #464a4f;
  --theme-login-tenant-box-shadow--hover: 0px 4px 10px 2px rgba(22, 22, 22, 0.5);
  --theme-login-user-background-color--hover: #242525;
  --theme-background-color-base: #0d0d0e;
  --theme-divider-border-color: #3f4042;
  --theme-content-background-color: #3f4042;
  --theme-content-background-color--hover: #242525;
  --theme-card-item-background-color: #202020;
  --theme-card-item-border-color: #202020;
  --theme-card-item-header-color: #8c8c8c;
  --theme-card-tab-header-color: #2d2d2d;
  --theme-card-text-color: #d1d0d0;
  --theme-card-text-background-color--hover: #454545;
  --theme-card-header-text-color: #8c8c8c;
  --theme-envi-hover-bg: #2d2d2d;
  --theme-drawer-background-color: #1e1e1e;
  --theme-drawer-color: #8c8c8c;
  --theme-drawer-color-high: #d1d0d0;
  --theme-drawer-border-color: #6d6d70;
  --theme-primary-linear-color: linear-gradient(to right, #419cff, #76cbff);
  --theme-primary-linear-hover-color: linear-gradient(to right, #4583f8, #70c0fe);
  --theme-primary-radial-color: linear-gradient(to right, #419cff, #76cbff);
  --theme-primary-login-background: #202124;
  --theme-primary-login-main-background: #323233;
  --theme-item-background-color: #454545;
  --theme-primary-color-btn-hover: #288eff;
  --theme-primary-color-selected-hover: #fff;
  --theme-font-color-version: rgba(255, 255, 255, 0.64);
  --theme-font-color-high: rgba(255, 255, 255, 1);
  --theme-font-color-middle: #d1d0d0;
  --theme-font-color-low: rgba(255, 255, 255, 0.24);
  --theme-font-color-light: #808080;
  --theme-font-color-active: #429cff;
  --theme-font-color-subtitle: #8c8c8c;
  --theme-icon-color-active: rgba(255, 255, 255, 1);
  --theme-primary-background-weight: #131415;
  --theme-primary-background-middle: #202124;
  --theme-primary-background-ligth: #2e2f30;
  --theme-primary-background-base: rgba(0, 0, 0, 0.6);
  --theme-shell-menu-background: #1e1e1e;
  --theme-shell-menu-font-color: rgba(255, 255, 255, 0.87);
  --theme-shell-menu-font-color-active: #288eff;
  --theme-primary-font-color-reverse: #dcdcdc;
  --theme-form-item-border: #6d6d70;
  --theme-form-input-background: rgba(255, 255, 255, 0.05);
  --theme-form-input-border: #2e2f30;
  --theme-form-item-border-error: #ff4d4f;
  --theme-form-item-disabled-border: rgba(109, 109, 109, 0.36);
  --theme-form-item-background: #454545;
  --theme-form-item-disabled-background: rgba(69, 69, 69, 0.36);
  --theme-card-item-background: #323233;
  --theme-list-item-background: #454545;
  --theme-list-item-child-background: #5aa4f4;
  --theme-list-item-child-background-hover: #7dabdc;
  --theme-table-thead-background: #454545;
  --theme-table-background-even-row: rgba(0, 0, 0, 0.1);
  --theme-table-row-hover: rgba(255, 255, 255, 0.05);
  --theme-table-row-active: rgba(255, 255, 255, 0.05);
  --theme-item-hover: rgba(255, 255, 255, 0.05);
  --theme-shell-funcmenu-background: #202124;
  --theme-shell-funcmenu-background-active: rgba(255, 255, 255, 0.2);
  --theme-select-menu-background: #454545;
  --theme-select-menu-background-disabled: #131415;
  --theme-tools-button-color: #ffffff;
  --theme-tools-button-background-color: #454545;
  --theme-tools-button-border-color: #64676b;
  --theme-tools-button-color--disabled: #64676b;
  --theme-tools-button-background-color--disabled: #333333;
  --theme-tools-button-border-color--disabled: #515255;
  ----theme-scrollbar-thumb: #333333;
  ----theme-scrollbar-track: #6a6a6a;
  --theme-status-unpublished: #666666;
  --theme-btn-default-border-hover: #588cf1;
  --theme-btn-primary-border-hover: #588cf1;
  --theme-btn-primary-bg-hover: #588cf1;
  --theme-btn-text-color-hover: #588cf1;
  --theme-btn-text-bg-hover: #242525;
  --theme-nav-bg-hover: #242525;
  --theme-primary-background-layer: rgba(33, 33, 33, 0.5);
  --theme-font-size-max: 28px;
  --theme-font-size-mid: 14px;
  --theme-font-size-min: 13px;
  --theme-table-tr-background: #2e333c;
  --theme-table-tr-even-background: #323943;
  --theme-table-tr-hover-background: #595e65;
  --theme-table-placeholder-background: #1a1a1a;
  --theme-table-placeholder-color: #666666;
  --theme-shell-menu-font-background-active: #212428;
  --theme-right-menu-background-active: #595e65;
  --theme-modal-alert-background: #333;
  --theme-modal-alert-color: rgba(255, 255, 255, 0.65);
  --theme-tooltip-background: #c0c2c7;
  --theme-tooltip-color: #333;
  --button-space: 10px;
  --auxiliary-text-color: #969799;
}
</style>
