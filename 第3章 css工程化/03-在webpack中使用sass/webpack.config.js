const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    home: "./src/pages/home/index.js",
    about: "./src/pages/about/index.js",
  },
  output: {
    filename: "[name]-[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                // 对生成的样式进行压缩
                // style: "compressed",
              },
              // 默认会根据配置文件的devtool来是否开启源代码映射，也可手动指定
              sourceMap: false,
              /**
               * 注入公共样式
               * 可以简写为 => additionalData: `@use "@/styles/index.scss";`
               */
              additionalData: (content, loaderContext) => {
                // loaderContext => 这个是loader的内容
                const { resourcePath, rootContext } = loaderContext;
                console.log("💬 ⋮ resourcePath => ", resourcePath);
                console.log("💬 ⋮ rootContext => ", rootContext);
                return `
                  @use "@/styles/index.scss";
                  ${content}
                `;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/home/index.html",
      chunks: ["home"],
      filename: "home.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/about/index.html",
      chunks: ["about"],
      filename: "about.html",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  stats: "minial",
};
