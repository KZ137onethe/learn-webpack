const path = require("path");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name]-[contenthash:5].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
