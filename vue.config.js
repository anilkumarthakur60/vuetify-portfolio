module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        proxy: {
            '^/': {
                target: 'http://api-vuetify.herokuapp.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
}