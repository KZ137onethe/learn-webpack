const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash:5].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["index"],
    }),
  ],
  devServer: {
    // 热替换 HMR，默认是开启的
    hot: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    host: "local-ip",
  },
  stats: "minimal",
};
