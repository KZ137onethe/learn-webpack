const config = require("./config")
const path = require("path")
const { merge } = require("webpack-merge")

const HtmlWebpackPlugin = require("html-webpack-plugin")

// 文档参考：https://github.com/survivejs/webpack-merge/blob/develop/README.md

// 文章参考：https://juejin.cn/post/7304531203745972264#heading-4
// merge函数
// 如果 merge 的两个对象中的键值对：
//	1. 数据类型不一样，后面完全覆盖前面；
//	2. 如果两者都是基础数据类型，后面覆盖前面；
//	3. 如果两者都是数组，就会把两个数组进行合并
//	4. 如果两者都是对象，那么里面的对象会递归合并成一个对象

// 如果想修改里面的默认行为，可以使用自定义合并 (示例可以参考：./config/index.js)
// 场景一：后面配置项的plugins完全替代前面配置的plugins
// 场景二：面配置项的plugins完全替代前面配置的plugins
// ...

module.exports = (env) => {
  return merge([
    config(env),
    {
      entry: {
        main: "./src/index.js",
      },
      output: {
        path: path.resolve(__dirname, "dist"),
      },
      devServer: {
        static: {
          directory: path.resolve(__dirname, "dist"),
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html",
          chunks: ["main"],
        }),
      ],
    },
  ])
}
