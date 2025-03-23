const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // html 模板
      template: "./src/index.html",
      // 输出文件
      filename: "index.html",
      // 指定引入的chunks文件，而默认的chunk文件是main
      chunks: ["main"],
    }),
  ],
};
