const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'production',
  plugins: [
    ...base.plugins,  //把之前的plugins抄过来
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash].css',
      chunkFilename:'[id].[contenthash].css',
      ignoreOrder:false,
    })
],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,  //正则表达式  $以css结尾 \.是转译  如果你的文件名为.css结尾 使用css-loader
        use: [
          {
            loader:MiniCssExtractPlugin.loader,
            options:{
              publicPath:'../',
            },
           },
            "css-loader",
          ],
      },
    ],
  },
};




