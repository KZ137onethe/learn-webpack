module.exports = {
  /* 编译模式，支持两种环境：development和production */
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "bundle.js",
  },
};
