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
  module: {
    rules: [
      {
        test: /\.styl$/,    //文件以.styl结尾的
        loader: ["style-loader","css-loader","stylus-loader"],
      },
      {
        test: /\.less$/i,   //文件以.less结尾的
        use: ["style-loader","css-loader","less-loader"],
      },
      {
        test: /\.scss$/i,    //文件以.scss结尾的
        use: [
          "style-loader",   //js字符串转换成style标签
          "css-loader",     //把css代码转换成js字符串
          { 
            loader: "sass-loader", //sass代码转换成css代码
            options: {
              implementation: require("dart-sass")
            }
          },      
        ],
      },
    ],
  },
};




