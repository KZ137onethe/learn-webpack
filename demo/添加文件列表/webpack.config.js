const FileList = require("./plugins/fileList.js");

module.exports = {
  mode: "development",
  devtool: "source-map",
  plugins: [new FileList()],
};
