module.exports = {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/g,
        use: ['./loaders/style-loader.js']
      }
    ]
  }
}