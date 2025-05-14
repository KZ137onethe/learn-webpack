const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  const config = {};
  const enviroment = env.mode || "development";

  switch (enviroment) {
    case "development":
      Object.assign(config, {
        mode: "development",
        devtool: "source-map",
      });
      break;
    case "production":
      Object.assign(config, {
        mode: "production",
        devtool: false,
      });
      break;
    case "staging":
      Object.assign(config, {
        mode: "development",
        devtool: "eval-source-map",
      });
  }

  return {
    ...config,
    entry: {
      index: "./src/index.js",
    },
    output: {
      filename: "[name].[contenthash:5].js",
      clean: true,
    },
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, `./env/.env.${enviroment}`),
        safe: true,
        systemvars: true,
        // TODO: 把这个 prefix 这个配置使用写在 docs 中
        prefix: "import.meta.env.",
      }),
    ],
  };
};
