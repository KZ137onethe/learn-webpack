const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
    // // 自定义输出文件名，参考：https://webpack.docschina.org/guides/asset-modules/#custom-output-filename
    // assetModuleFilename: "images/[name]-[contenthash:5].[ext]",
  },
  module: {
    rules: [
      // /** 发送一个单独的文件并导出 URL
      //  * 类似与 file-loader
      //  * generator.filename - 自定义输出文件名，但仅适用于 asset 和 asset/resource 模块类型
      //  */
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "images/[name]-[contenthash:5].[ext]",
      //   },
      // },
      //////////////////////////////////////////////////////////////////////////////////////////////////
      // /** 导出一个资源的 data URI
      //  * 类似于 url-loader
      //  */
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   type: "asset/inline",
      // },
      /////////////////////////////////////////////////////////////////////////////////////////////////
      /** 导出资源的源代码
       * 类似与 raw-loader
       * 比如：导出.txt文件的源代码在JavaScript中使用；但不合适直接导出图片等源代码
       */
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      /////////////////////////////////////////////////////////////////////////////////////////////////
      /**  在导出一个 data URI 和发送一个单独的文件之间自动选择。
       * 也就是通用类型资源
       * Rule.parser.dataUrlCondition.maxSize 选项来修改 这个导出一个 data URI 和发送一个单独的文件的临界值
       * 小于这个临界值将 导出一个 data URI
       * 大于这个临界值将 发送一个单独的文件
       */
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        generator: {
          filename: "img/[name]-[contenthash:5].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
  ],
};
