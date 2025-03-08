module.exports = {
  mode: 'development',
  module: {
    // 标识模块的匹配规则，每个数组的对象都是一个规则
    rules: [
      // loader的匹配是从上往上的，但是执行是从下往上的
      {
        // 正则表达式，匹配模块的路径
        test: /index\.js$/,
        // 匹配到了之后，使用哪些加载器
        use: [
          /** 每个加载器的使用,可以是下面的方式
           * 是一个loader路径的字符串，如 ["./loaders/test-loader"]
           * 是一个对象，如 下面的演示
           */
          {
            /**加载器的路径
             * 可以是query的方式，如：./loaders/test-loader.js?changeVar=变量
             * 也可以是下面options对象的方式
             */
            loader: './loaders/test-loader',
            // 配置对象
            options: {
              changeVar: "变量"
            }
          },
          "./loaders/loader1.js?a=1&b=2&c=3"
        ],
      },
      {
        test: /\.js$/g,
        use: ["./loaders/loader2.js", "./loaders/loader3.js"]
      }
    ],
    // 是否不要解析某个模块
    // noParse
  }
}