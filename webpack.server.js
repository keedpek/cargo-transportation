const path = require('path');

module.exports = {
  target: 'node', 
  entry: './server.js', 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.bundle.js', 
    libraryTarget: 'commonjs2', 
  },
  externals: [require('webpack-node-externals')()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
