const WebpackBar = require("webpackbar");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new WebpackBar({
      name: "📦",
      // 是否启用 进度条
      fancy: true,
      // 编译进度条颜色
      color: "#f955a4",
      // 是否启用 分析器
      profile: false,
      // 是否启用 日志报告器
      basic: false,
    }),
  ],
  stats: {
    modules: false,
  },
};
