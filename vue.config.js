const path = require('path');

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.module
      .rule('js')
      .test(/\.js$/)
      .exclude
      .add(filepath => /node_modules/.test(filepath) && !/node_modules[\\/]vuetify/.test(filepath))
      .end()
      .use('cache-loader')
      .loader('cache-loader')
      .options({
        cacheDirectory: path.resolve(__dirname, 'node_modules/.cache/babel-loader'),
        cacheIdentifier: 'a6d0e15c'
      })
      .end()
      .use('babel-loader')
      .loader('babel-loader')
      .end();
  }
};
