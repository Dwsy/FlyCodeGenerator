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
        match: ['http://xwide.dwsy.link/*'],
        "run-at": 'document-start',
        updateURL: "https://ghproxy.com/?q=https%3A%2F%2Fraw.githubusercontent.com%2FDwsy%2FFlyCodeGenerator%2Fmain%2Fflycodegenerator.user.js",
        downloadURL: "https://ghproxy.com/?q=https%3A%2F%2Fraw.githubusercontent.com%2FDwsy%2FFlyCodeGenerator%2Fmain%2Fflycodegenerator.user.js",
        version: "1.2.0",
        author: "Dwsy"
      },
      build: {
        externalGlobals: {
          vue: cdn.jsdelivr('Vue', 'dist/vue.global.prod.js'),
        },
      },

    }),
  ],
});
