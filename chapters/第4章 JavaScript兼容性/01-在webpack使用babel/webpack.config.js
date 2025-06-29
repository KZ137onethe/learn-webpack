module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    clean: {
      keep: (asset) => {
        return String(asset).includes("index.html")
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/g,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};
