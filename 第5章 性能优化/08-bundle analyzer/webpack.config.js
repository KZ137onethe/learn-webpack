const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  const isAnalyse = env?.analyse;

  return {
    mode: isAnalyse ? "production" : "development",
    context: path.resolve(__dirname, "./src/pages"),
    entry: {
      index: "./index/index.js",
    },
    output: {
      filename: "js/[name]-[contenthash:5].js",
      chunkFilename: "js/async/[name]-[contenthash:5].js",
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
              options: {
                url: true,
              },
            },
            {
              loader: "sass-loader",
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
          generator: {
            filename: "imgs/[name]-[contenthash:5][ext]",
          },
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
            statsOptions: {
              assets: true,
              chunks: true,
              modules: true,
            },
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
    optimization: {
      splitChunks: {
        chunks: "all", // 处理所有类型的 chunks（包括异步）
      },
    },
    stats: "minimal",
  };
};
