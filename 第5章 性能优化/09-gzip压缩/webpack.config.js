const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
    }),
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
    }),
    // 可以有多个 CompressionPlugin 来匹配不同的文件
    new CompressionPlugin({
      test: /\.(js|css)$/i,
      exclude: /\.(html|map)$/i,
      // 超过该值bytes才会压缩
      threshold: 1024,
      // 压缩比少于该值时压缩
      minRatio: 0.6,
      // 压缩算法
      algorithm: "gzip",
      /** 压缩选项
       * 文档请参考：https://github.com/webpack-contrib/compression-webpack-plugin?tab=readme-ov-file#compressionoptions
       * 选项快速参考：https://nodejs.org/api/zlib.html#zlib_class_options
       */
      compressionOptions: {
        level: 5,
      },
    }),
  ],
};
