const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  //将默认路径就是src/index.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'lucy的界面',  //修改index.html的title
      template: 'src/assets/index.html' //用src/assets/index.html为模板生成dist/index.html
    }),
  ],
};




