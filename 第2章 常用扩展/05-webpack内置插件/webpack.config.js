const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [
    // 定义全局变量，值只能是字符串
    new webpack.DefinePlugin({
      PI: `Math.PI`, // const PI = Math.PI
      VERSION: `"1.0.0"`, // const VERSION = "1.0.0"
      DOMAIN: JSON.stringify("duyi.com"), // const DOMAIN = "douyi.com"
    }),
    // 为每个chunk文件的头部添加一行注释，一般用来添加作者、公司、版权等信息
    new webpack.BannerPlugin({
      banner: `
      author: guanhai
      name: test
      hash: [hash]
      `,
    }),
    // 自动加载模块，而不必到处import或者require
    new webpack.ProvidePlugin({
      utils: path.resolve(__dirname, "src/utils/index.js"),
      $: "jquery",
      map: ["lodash-es", "map"],
      "window.lodash": "lodash-es",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
      filename: "index.html",
    }),
  ],
};
