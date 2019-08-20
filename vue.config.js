module.exports = {
    devServer: {
        disableHostCheck: true,
        open: true, // 是否打开页面
        host: "0.0.0.0",
        port: 80,
        https: false,
        hotOnly: true,
        proxy: {
            '/api': {
                target: 'https://bangumi.bilibili.com',
                changeOrigin: true
            } 
        }
    }
}
