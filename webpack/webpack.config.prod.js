const webpack = require('webpack');
const clientConfig = require('./webpack.config.client');
const serverConfig = require('./webpack.config.server');

const configs = [serverConfig, clientConfig];

configs.forEach((config) => {
  config.devtool = 'source-map';

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]);
});

module.exports = configs;
