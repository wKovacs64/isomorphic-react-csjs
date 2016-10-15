const baseConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$|\.html$/,
        loader: 'raw',
      },
    ],
  },
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: true,
    chunkModules: false,
  },
  plugins: [],
};

module.exports = baseConfig;
