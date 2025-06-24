const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  watch: true,
  output: {
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.p?css/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              /* postcss-loader options */
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
    }),
  ],
};
