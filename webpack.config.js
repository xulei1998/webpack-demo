//开发模式
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.config.base.js')  //继承base.js

module.exports = {
  ...base,   //把base的属性抄过来
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [ 
    ...base.plugins, 
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,  //正则表达式  $以css结尾 \.是转译  如果你的文件名为.css结尾 使用css-loader
        use: ["style-loader", "css-loader"],  
      },
    ],
  },
};




