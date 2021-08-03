const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from "vite-plugin-mock";
import styleImport from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        ensureStyleFile: true,
        resolveStyle: (name) => {
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    }),
    viteMockServe({
      // default
      supportTs: false
    }),
  ],
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, './src')
    },
    hostname: '0.0.0.0', // 地址
    port: '3000', // 端口
    open: false, // 浏览器自动打开
    https: false, // 是否开启https
    ssr: false, // 服务端渲染
    base: './', // 生产环境下的公共路径
    outDir: 'dist', // 打包构建的输出路径
    proxy: { // 本地开发环境通过代理实现跨域
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})