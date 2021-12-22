const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',  //将默认路径就是src/index.js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'lucy的界面',  //修改index.html的title
      template: 'src/assets/index.html' //用src/assets/index.html为模板生成dist/index.html
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,  //正则表达式  $以css结尾 \.是转译  如果你的文件名为.css结尾 使用css-loader
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};




