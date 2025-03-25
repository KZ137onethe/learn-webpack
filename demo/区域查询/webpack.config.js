const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = function (env) {
  const config = {};
  if (env && env.prod) {
    Object.assign(config, {
      mode: "production",
      devtool: false,
    });
  } else {
    Object.assign(config, {
      mode: "development",
      devtool: "source-map",
    });
  }

  return {
    ...config,
    entry: {
      list: "./src/list/index.js",
      detail: "./src/detail/index.js",
    },
    output: {
      filename: "scripts/[name]-[contenthash:5].js",
      clean: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
      }),
      new HtmlWebpackPlugin({
        template: "./public/detail.html",
        filename: "detail.html",
        chunks: ["detail"],
      }),
      new HtmlWebpackPlugin({
        template: "./public/list.html",
        filename: "list.html",
        chunks: ["list"],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./public/css",
            to: "./",
          },
          {
            from: "./public/img",
            to: "./",
          },
        ],
      }),
    ],
    devServer: {
      port: 8000,
      // host: "local-ip",
      open: "/list.html",
      proxy: [
        {
          context: ["/api"],
          target: "http://guolin.tech",
          changeOrigin: true,
        },
      ],
    },
    stats: "minimal",
  };
};
