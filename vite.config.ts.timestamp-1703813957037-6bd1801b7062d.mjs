// vite.config.ts
import { defineConfig } from "file:///Users/dengwenyu/Dev/code/company/xw/FlyCodeGenerator/node_modules/.pnpm/vite@4.5.0_terser@5.24.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/dengwenyu/Dev/code/company/xw/FlyCodeGenerator/node_modules/.pnpm/@vitejs+plugin-vue@4.5.2_vite@4.5.0_vue@3.3.8/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import jsx from "file:///Users/dengwenyu/Dev/code/company/xw/FlyCodeGenerator/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@4.5.0_vue@3.3.8/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import monkey from "file:///Users/dengwenyu/Dev/code/company/xw/FlyCodeGenerator/node_modules/.pnpm/vite-plugin-monkey@3.5.1_vite@4.5.0/node_modules/vite-plugin-monkey/dist/node/index.mjs";
import AutoImport from "file:///Users/dengwenyu/Dev/code/company/xw/FlyCodeGenerator/node_modules/.pnpm/unplugin-auto-import@0.16.7_@vueuse+core@10.7.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/dengwenyu/Dev/code/company/xw/FlyCodeGenerator/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.3.8/node_modules/unplugin-vue-components/dist/vite.js";
var vite_config_default = defineConfig({
  build: {
    // minify: "esbuild"
    minify: false
  },
  plugins: [
    jsx({}),
    AutoImport({
      imports: ["vue", "pinia", "@vueuse/core"],
      //这里是自动引入api的项目
      dts: "./src/auto-imports.d.ts"
      //在这创建.d.ts文件
    }),
    vue(),
    monkey({
      server: { open: false },
      entry: "src/main.ts",
      userscript: {
        icon: "http://flydoc.dwsy.link/xwlogoblue.png",
        namespace: "dwsy/flycodegenerator",
        match: ["http://xwide.dwsy.link/*"],
        "run-at": "document-start",
        updateURL: "https://ghproxy.com/?q=https%3A%2F%2Fraw.githubusercontent.com%2FDwsy%2FFlyCodeGenerator%2Fmain%2Fflycodegenerator.user.js",
        downloadURL: "https://ghproxy.com/?q=https%3A%2F%2Fraw.githubusercontent.com%2FDwsy%2FFlyCodeGenerator%2Fmain%2Fflycodegenerator.user.js",
        version: "2.0.0",
        author: "Dwsy",
        description: "FlyCodeGenerator",
        grant: ["GM_registerMenuCommand"]
      },
      build: {
        externalGlobals: {
          // vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        }
      }
    }),
    Components({
      dts: "./src/components.d.ts",
      //创建ts文件
      extensions: ["vue"],
      //指定文件的后缀
      dirs: ["src/components"]
      //指定路径，自动导入自定义组件
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGVuZ3dlbnl1L0Rldi9jb2RlL2NvbXBhbnkveHcvRmx5Q29kZUdlbmVyYXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Rlbmd3ZW55dS9EZXYvY29kZS9jb21wYW55L3h3L0ZseUNvZGVHZW5lcmF0b3Ivdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Rlbmd3ZW55dS9EZXYvY29kZS9jb21wYW55L3h3L0ZseUNvZGVHZW5lcmF0b3Ivdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBqc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCc7XG5pbXBvcnQgbW9ua2V5LCB7IGNkbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLW1vbmtleSc7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJztcblxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGVcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJ1aWxkOiB7XG4gICAgLy8gbWluaWZ5OiBcImVzYnVpbGRcIlxuICAgIG1pbmlmeTogZmFsc2VcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGpzeCh7fSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJwaW5pYVwiLCBcIkB2dWV1c2UvY29yZVwiXSwvL1x1OEZEOVx1OTFDQ1x1NjYyRlx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NWFwaVx1NzY4NFx1OTg3OVx1NzZFRVxuICAgICAgZHRzOiBcIi4vc3JjL2F1dG8taW1wb3J0cy5kLnRzXCIsLy9cdTU3MjhcdThGRDlcdTUyMUJcdTVFRkEuZC50c1x1NjU4N1x1NEVGNlxuICAgIH0pLFxuICAgIHZ1ZSgpLFxuICAgIG1vbmtleSh7XG4gICAgICBzZXJ2ZXI6IHsgb3BlbjogZmFsc2UgfSxcbiAgICAgIGVudHJ5OiAnc3JjL21haW4udHMnLFxuICAgICAgdXNlcnNjcmlwdDoge1xuICAgICAgICBpY29uOiAnaHR0cDovL2ZseWRvYy5kd3N5LmxpbmsveHdsb2dvYmx1ZS5wbmcnLFxuICAgICAgICBuYW1lc3BhY2U6ICdkd3N5L2ZseWNvZGVnZW5lcmF0b3InLFxuICAgICAgICBtYXRjaDogWydodHRwOi8veHdpZGUuZHdzeS5saW5rLyonXSxcbiAgICAgICAgXCJydW4tYXRcIjogJ2RvY3VtZW50LXN0YXJ0JyxcbiAgICAgICAgdXBkYXRlVVJMOiBcImh0dHBzOi8vZ2hwcm94eS5jb20vP3E9aHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGRHdzeSUyRkZseUNvZGVHZW5lcmF0b3IlMkZtYWluJTJGZmx5Y29kZWdlbmVyYXRvci51c2VyLmpzXCIsXG4gICAgICAgIGRvd25sb2FkVVJMOiBcImh0dHBzOi8vZ2hwcm94eS5jb20vP3E9aHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGRHdzeSUyRkZseUNvZGVHZW5lcmF0b3IlMkZtYWluJTJGZmx5Y29kZWdlbmVyYXRvci51c2VyLmpzXCIsXG4gICAgICAgIHZlcnNpb246IFwiMi4wLjBcIixcbiAgICAgICAgYXV0aG9yOiBcIkR3c3lcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRmx5Q29kZUdlbmVyYXRvclwiLFxuICAgICAgICBncmFudDogWydHTV9yZWdpc3Rlck1lbnVDb21tYW5kJ11cbiAgICAgIH0sXG4gICAgICBidWlsZDoge1xuICAgICAgICBleHRlcm5hbEdsb2JhbHM6IHtcbiAgICAgICAgICAvLyB2dWU6IGNkbi5qc2RlbGl2cignVnVlJywgJ2Rpc3QvdnVlLmdsb2JhbC5wcm9kLmpzJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgfSksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkdHM6IFwiLi9zcmMvY29tcG9uZW50cy5kLnRzXCIsLy9cdTUyMUJcdTVFRkF0c1x1NjU4N1x1NEVGNlxuICAgICAgZXh0ZW5zaW9uczogWyd2dWUnXSwvL1x1NjMwN1x1NUI5QVx1NjU4N1x1NEVGNlx1NzY4NFx1NTQwRVx1N0YwMFxuICAgICAgZGlyczogW1wic3JjL2NvbXBvbmVudHNcIl0sLy9cdTYzMDdcdTVCOUFcdThERUZcdTVGODRcdUZGMENcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTgxRUFcdTVCOUFcdTRFNDlcdTdFQzRcdTRFRjZcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBcUI7QUFDNUIsT0FBTyxnQkFBZ0I7QUFFdkIsT0FBTyxnQkFBZ0I7QUFHdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBO0FBQUEsSUFFTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSSxDQUFDLENBQUM7QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULFNBQVMsQ0FBQyxPQUFPLFNBQVMsY0FBYztBQUFBO0FBQUEsTUFDeEMsS0FBSztBQUFBO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsTUFDTCxRQUFRLEVBQUUsTUFBTSxNQUFNO0FBQUEsTUFDdEIsT0FBTztBQUFBLE1BQ1AsWUFBWTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTyxDQUFDLDBCQUEwQjtBQUFBLFFBQ2xDLFVBQVU7QUFBQSxRQUNWLFdBQVc7QUFBQSxRQUNYLGFBQWE7QUFBQSxRQUNiLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLGFBQWE7QUFBQSxRQUNiLE9BQU8sQ0FBQyx3QkFBd0I7QUFBQSxNQUNsQztBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsaUJBQWlCO0FBQUE7QUFBQSxRQUVqQjtBQUFBLE1BQ0Y7QUFBQSxJQUVGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQTtBQUFBLE1BQ0wsWUFBWSxDQUFDLEtBQUs7QUFBQTtBQUFBLE1BQ2xCLE1BQU0sQ0FBQyxnQkFBZ0I7QUFBQTtBQUFBLElBQ3pCLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
