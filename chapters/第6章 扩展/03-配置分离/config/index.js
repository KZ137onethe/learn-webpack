const { _ } = require("lodash")
const { merge, mergeWithCustomize } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const commonConfig = {
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
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
  plugins: [],
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
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              api: "modern-compiler",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
      chunkFilename: "stylesheets/chunks/[id].[contenthash:5].css",
    }),
  ],
}

const production = {
  mode: "production",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                style: "compressed",
              },
              sourceMap: false,
              api: "modern-compiler",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "stylesheets/[name].css",
      chunkFilename: "stylesheets/chunks/[id].[contenthash:5].css",
    }),
  ],
}

module.exports = (env) => {
  const mergeFn = mergeWithCustomize({
    customizeObject(arg1, arg2, key) {
      if (key === "module") {
        return _.merge({}, arg1, arg2)
      }
    },
    customizeArray(arg1, arg2, key) {
      if (key === "plugins") {
        return _.uniq([...arg1, ...arg2])
      }
    },
  })

  if (env === "production") {
    return mergeFn(commonConfig, production)
  }
  return mergeFn(commonConfig, develop)
}
