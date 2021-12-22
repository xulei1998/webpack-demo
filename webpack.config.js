const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',  //将默认路径就是src/index.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
};