const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash:5].js",
    clean: true,
  },
  optimization: {
    /**
     * 告诉webpack是否在该环境下使用 minimizer 配置的插件压缩代码
     * 生成环境默认为 true
     */
    minimize: true,
    // 定制压缩工具，webpack默认使用的是 terser-webpack-plugin
    minimizer: [
      /**
       * js 压缩插件
       * 参考：https://github.com/webpack-contrib/terser-webpack-plugin/blob/master/README.md
       */
      new TerserPlugin(),
      /**
       * css 压缩插件
       * 参考：https://github.com/webpack-contrib/css-minimizer-webpack-plugin/blob/master/README.md
       */
      new CssMinimizerPlugin({
        // 是否采用多进程并行运行提高构建速度， 默认为true。
        parallel: false,
        // 最小化选项，默认是 { preset: 'default' }
        minimizerOptions: {
          preset: [
            "default",
            // 移除css中所有的注释
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      /**
       * 图片 压缩插件
       * 参考：https://github.com/webpack-contrib/image-minimizer-webpack-plugin/blob/master/README.md
       */
      new ImageMinimizerPlugin({
        // 这里使用了 sharp 进行了无损压缩
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            // 这里对 gif|jpe?g|png 进行了图片无损压缩
            encodeOptions: {
              // 参考：https://sharp.pixelplumbing.com/api-output/#gif
              gif: {
                colours: 100,
                effort: 4,
              },
              // 参考：https://sharp.pixelplumbing.com/api-output/#jpeg
              jpeg: {
                quality: 100,
                trellisQuantisation: true,
              },
              // 参考：https://sharp.pixelplumbing.com/api-output#png
              png: {
                compressionLevel: 9,
                quality: 100,
              },
            },
          },
        },
      }),
      /**
       * 还有对html和json进行压缩的插件，但大部分情况下用不上，需要用时可以查看：
       * html-minimizer-webpack-plugin：https://github.com/webpack-contrib/html-minimizer-webpack-plugin
       * json-minimizer-webpack-plugin：https://github.com/webpack-contrib/json-minimizer-webpack-plugin
       */
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "imgs/[name]-[contenthash:5][ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
  ],
  stats: {
    colors: true,
    chunks: false,
    modules: false,
  },
};
