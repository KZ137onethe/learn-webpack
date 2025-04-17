const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name]-[contenthash:5].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // ! 如果匹配到同一规则 file-loader 和 url-loader 将不能混用
      {
        test: /\.png$/i,
        use: [
          /** file-loader
           * 使用 import/require 解析成url，并将文件发送给输出目录中
           * 参考：https://github.com/webpack-contrib/url-loader/blob/master/README.md
           */
          {
            loader: "file-loader",
            options: {
              // 为匹配到的文件生成自定义模板
              name: "[name]-[contenthash:5].[ext]",
              // 指定放置目标文件的文件系统路径
              // outputPath: "/images",
            },
          },
        ],
      },
      {
        test: /\.jpe?g$/i,
        use: [
          /** url-loader
           * 将文件作为 data URI 内联到 bundle 文件中
           * 参考：https://github.com/webpack-contrib/file-loader/blob/master/README.md
           */
          {
            loader: "url-loader",
            options: {
              // 限制处理文件最大大小，如果超过 limit 字节大小将不会处理
              // why? 为什么限制呢？因为他会将文件的内容内联到 打包文件 中，导致打包的JavaScript非常大
              limit: 30 * 1024,
              name: "[name]-[contenthash:5].[ext]",
            },
          },
        ],
      },
      {
        /** raw-loader
         * 直接获取文件的原始内容，不经过webpack的解析
         * 参考：https://github.com/webpack-contrib/raw-loader/blob/master/README.md
         */
        test: /\.(txt|svg)$/i,
        use: [
          {
            loader: "raw-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
};
