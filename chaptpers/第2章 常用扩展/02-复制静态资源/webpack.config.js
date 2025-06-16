const HtmlWebpackPlugin = require("html-webpack-plugin");
// 这个插件的作用是：将已存在的单个文件或整个目录复制到构建目录。
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
      filename: "index.html",
    }),
    // 参考：https://github.com/webpack-contrib/copy-webpack-plugin/blob/master/README.md
    new CopyPlugin({
      // 模式
      patterns: [
        {
          // 从何处复制文件的全局或路径。
          from: "public/assets",
          // 输出路径，这个输出路径是相对于打包路径的
          to: "assets",
        },
      ],
      // 选项
    }),
  ],
};
