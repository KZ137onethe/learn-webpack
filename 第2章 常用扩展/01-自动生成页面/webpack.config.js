const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    home: "./home/index.js",
    about: "./about/index.js",
  },
  context: path.resolve(__dirname, "./src/pages"),
  output: {
    filename: "[name]/index.[contenthash:5].js",
    clean: true,
  },
  plugins: [
    // 配置参考：https://github.com/jantimon/html-webpack-plugin?tab=readme-ov-file#options
    new HtmlWebpackPlugin({
      // 模板
      template: "./home/index.html",
      // 输出文件
      filename: "[name]/index.html",
      // 指定引入的chunks文件
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./about/index.html",
      filename: "[name]/index.html",
      chunks: ["about"],
    }),
  ],
};
