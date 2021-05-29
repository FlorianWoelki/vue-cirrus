// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue: path.resolve('./node_modules/vue'),
      },
    },
    output: {
      libraryExport: 'default',
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
    ],
  },
};
