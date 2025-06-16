const path = require("path");

module.exports = (env) => {
  let config = {
    entry: {
      app: "./src/index.js",
    },
    output: {
      filename: "[name]-[contenthash:5].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
  };
  if (env.production) {
    config = { ...config, mode: "production", devtool: false };
  } else {
    config = { ...config, mode: "development", devtool: "source-map" };
  }
  console.log(env);

  return config;
};
