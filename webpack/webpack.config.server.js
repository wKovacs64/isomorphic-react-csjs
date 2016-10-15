const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config.base');

const serverConfig = Object.assign({}, baseConfig, {
  name: 'server',
  entry: [
    path.join(__dirname, '../src/server.js'),
  ],
  target: 'node',
  externals: [
    nodeExternals(),
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, '../src/index.html'),
      },
    ]),
  ],
});

module.exports = serverConfig;
