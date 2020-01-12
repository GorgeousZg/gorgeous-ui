// vue.config.js
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('@api', resolve('src/api'))
            .set('@assets', resolve('src/assets'))
            .set('@comp', resolve('src/components'))
            .set('@views', resolve('src/views'))
            .set('@layout', resolve('src/layout'))
            .set('@static', resolve('src/static'))
            .set('@mobile', resolve('src/modules/mobile'))
    },
    devServer: {
        port: 3000,
        proxy: {
            '/gorgeous': {
                target: 'http://localhost:6666/gorgeous',
                ws: false,
                changeOrigin: true
            },
        }
    },
    lintOnSave: undefined
}
