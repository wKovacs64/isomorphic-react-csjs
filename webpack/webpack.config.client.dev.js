const path = require('path');
const webpack = require('webpack');
const clientConfig = require('./webpack.config.client');

clientConfig.devtool = 'eval';

clientConfig.devServer = {
  contentBase: path.join(__dirname, '../src'),
  port: 3000,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: true,
    chunkModules: false,
  },
};

clientConfig.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
].concat(clientConfig.entry);

clientConfig.output.publicPath = '/';

clientConfig.module.loaders[0].loaders = [
  'react-hot',
].concat(clientConfig.module.loaders[0].loaders);

clientConfig.plugins = clientConfig.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
]);

module.exports = clientConfig;
