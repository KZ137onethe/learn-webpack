const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DllReferencePlugin } = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval-cheap-source-map",
  entry: {
    index: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    filename: "[name].[contenthash:5].js",
    clean: {
      keep: (assets) => {
        return assets.includes("target/");
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["index", "other"],
    }),
    new DllReferencePlugin({
      manifest: require("./target/gsap.mainfest.json"),
    }),
  ],
};
