const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  // 参考：https://www.webpackjs.com/configuration/dev-server/
  devServer: {
    port: 8000,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    host: "local-ip",
    // 参考：https://www.webpackjs.com/configuration/dev-server/#devserverproxy
    proxy: [
      {
        context: ["/api"],
        target: "https://api.vvhan.com",
        changeOrigin: true,
      },
    ],
  },
  stats: "minimal",
};
