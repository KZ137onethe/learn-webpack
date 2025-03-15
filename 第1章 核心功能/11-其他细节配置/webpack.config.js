const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: "./index.js",
  },
  // 基础目录，绝对路径，用于从配置中解析入口点(entry point)和 加载器(loader)。 参考： https://www.webpackjs.com/configuration/entry-context/#context
  context: path.resolve(__dirname, "./src"),
  output: {
    filename: "[name]-[contenthash:5].js",
    // 输出一个库，为你的入口做导出。参考：https://www.webpackjs.com/configuration/output/#outputlibrary
    library: {
      // 指定库的名称。参考：https://www.webpackjs.com/configuration/output/#outputlibraryname
      name: "add",
      // 配置将库暴露的方式。参考：https://www.webpackjs.com/configuration/output/#outputlibrarytype
      type: "window",
    },
    // 在生成文件之前清空 output 目录
    clean: true,
  },
  // 部署环境，比如：浏览器它不认识fs模块，那么引入fs模块在浏览器环境下打包就会报错。参考：https://www.webpackjs.com/configuration/target/
  target: "web",
  // 如何处理项目中的不同类型的模块。参考：https://www.webpackjs.com/configuration/module/
  module: {
    // 防止 webpack 解析那些任何与给定正则表达式相匹配的文件。通常用它来忽略那些大型的单模块库，以提高构建性能，比如说: jquery。参考：https://www.webpackjs.com/configuration/module/#modulenoparse
    noParse: /jquery/,
  },
  // 设置模块如何被解析。参考：https://www.webpackjs.com/configuration/resolve/#root
  resolve: {
    // 告诉 webpack 解析模块时应该搜索的目录。参考：https://www.webpackjs.com/configuration/resolve/#resolvemodules
    modules: ["node_modules"],
    // 尝试按顺序解析这些后缀名。参考：https://www.webpackjs.com/configuration/resolve/#resolveextensions
    extensions: [".js", ".json"],
    // 路径别名。参考：https://www.webpackjs.com/configuration/resolve/#resolveextensions
    alias: {
      "@": path.resolve(__dirname, "src"),
      _: __dirname,
    },
  },
  // 配置选项提供了「从输出的 bundle 中排除依赖」的方法。参考：https://www.webpackjs.com/configuration/externals/
  /** 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
   * 比如：
   * 在index.html中引入lodash的CDN（也就是从外部获取lodash的依赖）
   * 但是我们编写的代码可以包含lodash，以及使用它的api，尽管并没有通过npm的依赖去下载它
   * 构建出的打包代码也不包含lodash的源代码，而是以一个"_"导出lodash
   */
  externals: {
    lodash: "_",
  },
  // 精确地控制 bundle（构建） 信息该怎么显示。参考：https://www.webpackjs.com/configuration/stats/#root
  stats: {
    // 告知 stats 是否输出不同的颜色。
    colors: true,
    // 告知 stats 是否展示 --env 信息.
    env: true,
    // 告知 stats 是否添加关于构建模块的信息。
    modules: true,
    // 告知 stats 是否添加关于编译哈希值的信息。
    hash: false,
  },
};
