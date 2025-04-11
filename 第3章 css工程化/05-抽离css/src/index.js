// 每个chunk文件，mini-css-extract-plugin 都会将其合并
import "./styles/var.css";
import "./styles/index.css";

// 动态导入的css除外，通过其plugin中的chunkFilename来配置动态导入的导出路径
import("./styles/other.css").then(() => {
  console.log("index");
});
