const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
  },
};
