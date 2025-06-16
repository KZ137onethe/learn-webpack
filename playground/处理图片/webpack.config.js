module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/g,
        use: [
          {
            loader: "./loaders/img-loader.js",
            options: {
              limit: 20000,
              filename: 'img-[contenthash].[ext]'
            }
          }
        ]
      }
    ]
  }
}