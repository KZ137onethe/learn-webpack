// TODO: 有关tree shaking的更多信息，可以参考这篇文章：https://juejin.cn/post/7487150104059920436?searchId=202505101958513F22F9BA4E5E0E2F6DC0#heading-24
const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

module.exports = {
  // 查看标记清除的注释 => /* unused harmony export ??? */
  mode: "development",
  devtool: "source-map",
  // // tree shaking后的结果
  // mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash:5].js",
    clean: true,
  },
  optimization: {
    // 用于标记清除的注释
    usedExports: true,
    // 去辨识 package.json 中的 sideEffects 标记或规则，而 package.json 中的 sideEffects 标记的文件是有副作用的，会被tree shaking掉
    sideEffects: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    /**
     * 对css样式进行处理
     * 1. 该插件会将css样式提取到单独的文件中
     * 2. 该插件会将css样式进行tree shaking
     */
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
    }),
    // * 更多相关与purgecss-webpack-plugin插件请参考文档：https://purgecss.com/plugins/webpack.html
    new PurgeCSSPlugin({
      // 获取该路径下src目录下的所有文件的路径数组（不包含文件夹）
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
    }),
  ],
};
