module.exports = {
      css: {
            loaderOptions: {
                  stylus: {
                        'resolve url': true,
                        import: []
                  }
            }
      },
      pluginOptions: {
            'cube-ui': {
                  postCompile: false,
                  theme: false
            }
      },
      devServer: {
            host: '192.168.2.110',
            port: 8080,
            proxy: {
                  '/api': {
                        target: 'http://192.168.2.110:8080/',
                        changeOrigin: true,
                        pathRewrite: {
                              '/api': ''
                        }
                  }
            }
      },
      chainWebpack: config => {
            config.plugins.delete('prefetch')
      }
}
