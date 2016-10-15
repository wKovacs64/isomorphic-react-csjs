const path = require('path');
const baseConfig = require('./webpack.config.base');

const clientConfig = Object.assign({}, baseConfig, {
  name: 'client',
  entry: [
    path.join(__dirname, '../src/client.js'),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client.js',
  },
});

module.exports = clientConfig;
