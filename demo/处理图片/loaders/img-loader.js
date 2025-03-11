const path = require("path");
const loaderUtils = require("loader-utils");

function loader(buffer) {
  // 图片的内容是二进制的内容，也就是buffer的格式
  // console.log("文件数据大小：（字节）", buffer.byteLength)
  let content, options;
  const ext = path.extname(this.resourcePath);
  if (typeof this.query === "object") {
    options = this.query;
  } else {
    this.query
      .slice(1)
      .split("&")
      .forEach((item) => {
        const [key, val] = item.split("=");
        options[key] = val;
      });
  }
  if (buffer.length > options.limit) {
    content = getFilePath.call(this, buffer, options.filename);
  } else {
    content = getBase64(buffer, ext);
  }
  return `module.exports=\`${content}\``;
}

/**
 * 获取buffer的base64格式数据
 * @param {Buffer} buffer
 * @returns Base64URLString
 */
function getBase64(buffer, ext) {
  return `data:image/${ext.slice(1)};base64,` + buffer.toString("base64");
}

/**
 * 获取buffer的文件路径，并导出该文件至最终产物
 * @param {Buffer} buffer
 * @returns string
 */
function getFilePath(buffer, fileformat) {
  const filename = loaderUtils.interpolateName(this, fileformat, {
    content: buffer,
  });
  this.emitFile(filename, buffer);
  return filename;
}

loader.raw = true;

module.exports = loader;
