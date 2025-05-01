const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            /** 参考: https://github.com/webpack-contrib/style-loader?tab=readme-ov-file#injecttype
             *
             */
            options: {
              injectType: "styleTag",
            },
          },
          {
            loader: "css-loader",
            /** 参考：https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#modules
             * 作用：允许启用/禁用 CSS 模块，默认为false
             * 可以是 boolean | string | object
             *    object 参考：https://github.com/webpack-contrib/css-loader?tab=readme-ov-file#object-2
             */
            options: {
              // // 规定生成类名规则
              // modules: {
              //   localIdentName: "[path][name]__[local]",
              //   localIdentContext: path.resolve(__dirname, "src"),
              // },
              ///////////////////////////
              // 默认 类名 = 路径+类名 => hash
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my app",
      template: "./public/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
  ],
  devServer: {
    port: 8000,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    host: "local-ip",
    open: true,
  },
  stats: "minimal",
};
