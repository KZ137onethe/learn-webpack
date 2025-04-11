const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "js/[name].[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
        ],
      },
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name]-[contenthash:5].[ext]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
      chunkFilename: "stylesheets/chunks/[id].[contenthash:5].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"],
      filename: "index.html",
    }),
  ],
};
