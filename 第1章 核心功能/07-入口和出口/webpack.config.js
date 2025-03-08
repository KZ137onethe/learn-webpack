const path = require('path')

module.exports = {
  mode: 'development',
  /** 入口配置的是 chunk，可以配置多个chunk
   * 属性名代表 chunk 的名称
   * 属性值是 chunk 的路径，可以是相对路径，且路径可以用一个数组来包含多个路径，当然该chunk最终只会打包成一个文件
   * ! 配置多个chunk作为入口文件时，出口文件不能仅是一个静态的写法
   */
  entry: {
    main: './src/index.js',
    a: ['./src/a.js', './src/a-1.js']
  },
  output: {
    // 配置的是该仓库对于操作系统的绝对路径，通常需要path模块拼接路径
    path: path.resolve(__dirname, "target"),
    /**
     * 配置的是合并JavaScript文件的规则
     *  比如说静态的写法 bundle.js | 包含文件夹的写法：scripts/bundle.js | 动态写法 [xxx]... xxx可以是 name/id/hash/contenthash/chunkhash等等
     *  参考：https://www.webpackjs.com/configuration/output/#outputfilename
     * 这里为什么用到hash呢？
     *  相同内容生成的hash值是唯一的，如果内容不变，那么文件名不变，浏览器请求该资源时会优先去拿浏览器的磁盘缓存
     *  如果内容变了，hash值也会改变，文件名改变，浏览器向服务器请求最新的资源
     *  所以这里文件用hash值能帮助html页面减少网络传输的资源
     */
    filename: '[name]-[chunkhash].js'
  },
  // devtool: 'source-map'
}