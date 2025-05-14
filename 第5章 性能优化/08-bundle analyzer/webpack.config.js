const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  const isAnalyse = env?.analyse;

  return {
    mode: "development",
    context: path.resolve(__dirname, "./src/pages"),
    entry: {
      index: "./index/index.js",
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
        template: "./index/index.html",
        filename: "index.html",
        chunks: ["index"],
      }),
      new MiniCssExtractPlugin({
        filename: "stylesheets/[name].css",
      }),
      isAnalyse
        ? new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: true,
            reportFilename: "report.html",
          })
        : null,
    ],
    devServer: {
      port: 8000,
      static: {
        directory: "./dist",
      },
      hot: true,
      host: "local-ip",
    },
    stats: "minimal",
  };
};
