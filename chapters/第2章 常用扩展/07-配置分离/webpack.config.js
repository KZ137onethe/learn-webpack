const config = require("./config")
const path = require("path")
const { merge } = require("webpack-merge")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env) => {
  return merge([
    config(env),
    {
      entry: {
        main: "./src/index.js",
      },
      output: {
        path: path.resolve(__dirname, "dist"),
      },
      devServer: {
        static: {
          directory: path.resolve(__dirname, "dist"),
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
          chunks: ["main"],
        }),
      ],
    },
  ])
}
