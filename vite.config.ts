import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import monkey, { cdn } from 'vite-plugin-monkey';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: "terser"
  },
  plugins: [
    jsx({}),
    AutoImport({
      imports: [],
    }),
    vue(),
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'http://flydoc.dwsy.link/xwlogoblue.png',
        namespace: 'dwsy/flycodegenerator',
        match: ['http://ide.wxchina.com:9000/*'],
        "run-at": 'document-start',
        updateURL: "https://github.com/Dwsy/FlyCodeGenerator/blob/main/flycodegenerator.user.js",
        downloadURL: "https://github.com/Dwsy/FlyCodeGenerator/blob/main/flycodegenerator.user.js",
        version: "1.0.0"
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },

    }),
  ],
});
