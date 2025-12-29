const { merge } = require("webpack-merge")
const path = require("path")

const commonConfig = {
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  stats: "minimal",
}

const develop = {
  mode: "development",
  devtool: "cheap-source-map",
  devServer: {
    port: "auto",
    host: "0.0.0.0",
    hot: true,
    open: true,
  },
}

const production = {
  mode: "production",
  devtool: false,
}

module.exports = (env) => {
  if (env === "production") {
    return merge(commonConfig, production)
  }
  return merge(commonConfig, develop)
}
