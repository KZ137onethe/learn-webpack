const path = require("path");

module.exports = (env) => {
  const way = env.way || false;
  const config = {};

  switch (way) {
    case "exclude":
      /**
       * 方式一：
       * 1. 跳过不需要通过loader解析的模块或者文件夹
       * 2. 设置loader的缓存配置（视loader的配置而定）
       */
      Object.assign(config, {
        module: {
          rules: [
            {
              test: /\.js$/i,
              // 或者 或者更粗暴点匹配 /node_modules/
              exclude: /lodash-es/,
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    cacheDirectory: true,
                  },
                },
              ],
            },
          ],
        },
      });
      break;
    case "cache":
      /**
       * 方式二：
       * 设置cache来缓存（模块解析结果（如文件路径、Loader 处理后的代码）、依赖关系图（模块间的依赖拓扑结构）、Chunk 生成信息（代码拆分后的 chunk 数据））
       * 参考：https://webpack.docschina.org/configuration/cache/#root
       */
      Object.assign(config, {
        cache: {
          type: "filesystem",
          cacheDirectory: path.resolve(__dirname, "cache"),
          buildDependencies: {
            config: [__filename],
          },
          name: "bundle-cache",
          profile: true,
          maxAge: 3 * 24 * 60 * 60 * 1000,
        },
        module: {
          rules: [
            {
              test: /\.js$/i,
              use: ["babel-loader"],
            },
          ],
        },
      });
      break;

    case "thread":
      /**
       * 方式三：
       * 通过web worker来开启一个线程来分担loader的工作（注意：开启和关闭线程都需要时间开销）
       */
      Object.assign(config, {
        module: {
          rules: [
            {
              test: /\.js$/i,
              use: ["thread-loader", "babel-loader"],
            },
          ],
        },
      });
      break;
    default:
  }

  return {
    ...config,
    mode: "development",
    devtool: "source-map",
    output: {
      filename: "[name].[contenthash:5].js",
      clean: true,
    },
    stats: {
      colors: true,
      modules: false,
    },
  };
};
