const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProduction = env.production;

  return {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : "source-map",
    entry: {
      home: "/home/index.js",
      about: "/about/index.js",
    },
    output: {
      filename: "js/[name].[contenthash:5].js",
      clean: true,
    },
    context: path.resolve(__dirname, "./src/pages"),
    module: {
      rules: [
        {
          test: /\.s[ac]ss/i,
          use: [
            {
              loader: isProduction
                ? MiniCssExtractPlugin.loader
                : "style-loader",
            },
            {
              loader: "css-loader",
            },
            // 参考：https://github.com/webpack-contrib/sass-loader
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  // 对生成的样式进行压缩
                  // style: "compressed",
                },
                // 默认会根据配置文件的devtool来是否开启源代码映射，也可手动指定
                sourceMap: false,
                /** 在实际的入口文件之前加入 sass/scss 代码
                 * 作用：注入公共样式 可以简写为 => additionalData: `@use "@/styles/index.scss";`
                 * @param {string | Buffer} content - 导入的样式
                 * @param {LoaderContext} loaderContext - loader的上下文
                 * @returns string - 给下一个loader的内容
                 */
                additionalData: function (content, loaderContext) {
                  // loaderContext => 这个是loader的内容
                  const { resourcePath } = loaderContext;
                  // 只在导入index.scss时注入全局样式，其他文件不注入
                  if (resourcePath.endsWith("index.scss")) {
                    return `
                      @use "@/styles/index.scss";
                      ${content}
                    `;
                  }
                  return `${content}`;
                },
                // 将sass中的@warn规则视为webpack警告。默认为true
                warnRuleAsWarning: true,
                // "legacy" | "modern" | "modern-compiler" 默认 "modern"
                api: "modern-compiler",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
        template: "./home/index.html",
        chunks: ["home"],
        filename: "home.html",
      }),
      new HtmlWebpackPlugin({
        template: "./about/index.html",
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
};
