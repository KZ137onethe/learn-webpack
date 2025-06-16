module.exports = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js/i,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};
