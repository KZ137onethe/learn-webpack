const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    app: "./src/views/index.ts",
  },
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/views/index.html",
      chunks: ["app"],
      filename: "index.html",
    }),
    // 加快 ts-loader 的编译速度
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      // 统一 配置 tsconfig.json 和 webpack 的 部分选项
      new TsconfigPathsPlugin({
        extensions: [".ts", ".tsx", ".js"],
      }),
    ],
  },
};
