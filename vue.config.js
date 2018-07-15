const express = require('express')
const app = express()
var appData = require('./src/data/goodlist.json')
var seller = appData
var apiRoutes = express.Router();
app.use('/api',apiRoutes)
module.exports = {
    // ����·��
    baseUrl: '/',
    // ����ļ�Ŀ¼
    outputDir: 'dist',
    // eslint-loader �Ƿ��ڱ����ʱ����
    lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: true,
    // webpack����
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
// vue-loader ������
// https://vue-loader.vuejs.org/en/options.html
//vueLoader: {},
// ���������Ƿ����� sourceMap �ļ�
productionSourceMap: true,
    // css�������
    css: {
    // �Ƿ�ʹ��css������ ExtractTextPlugin
    extract: true,
        // ���� CSS source maps?
        sourceMap: false,
        // cssԤ����������
        loaderOptions: {},
    // ���� CSS modules for all css / pre-processor files.
    modules: false
},
// use thread-loader for babel & TS in production build
// enabled by default if the machine has more than 1 cores
parallel: require('os').cpus().length > 1,
    // �Ƿ�����dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode

    // PWA ����������
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
// webpack-dev-server �������
devServer: {
    before(app) {
        app.get('/api/seller', (req, res) => {
            res.json({
                // ���������json����
                errno: 0,
                data: seller
            })
        })
    },
    open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null// ���ô���

},
// �������������
pluginOptions: {
    // ...
}
}
