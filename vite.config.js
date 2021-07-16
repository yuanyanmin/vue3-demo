const path = require('path')

module.export = {
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