const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    home: "./views/home/index.js",
    other: "./views/other/index.js",
  },
  output: {
    filename: "js/[name].[contenthash:5].js",
    clean: true,
  },
  context: path.resolve(__dirname, "./src/multi-page__common"),
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              preprocessor: (content, loaderContext) => {
                const includeRegex =
                  /\{\{\s*include\(\s*['"](.*?)['"]\s*\)\s*\}\}/g;
                return content.replace(includeRegex, (_, partialPath) => {
                  const fullPath = path.resolve(
                    loaderContext.context,
                    partialPath
                  );
                  return fs.readFileSync(fullPath, "utf8");
                });
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // 配置参考：https://github.com/jantimon/html-webpack-plugin?tab=readme-ov-file#options
    new HtmlWebpackPlugin({
      // 模板
      template: "./views/home/index.html",
      // 输出文件
      filename: "home.html",
      // 指定引入的chunks文件
      chunks: ["home"],
      templateParameters: {
        pageTitle: "首页",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./views/other/index.html",
      filename: "other.html",
      chunks: ["other"],
      templateParameters: {
        pageTitle: "其他页",
      },
    }),
  ],
};
