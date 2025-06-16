const { Compilation, sources } = require("webpack");

module.exports = class FileList {
  apply(compiler) {
    // compilation 创建之后执行 - 参考：https://www.webpackjs.com/api/compiler-hooks/#compilation
    compiler.hooks.compilation.tap("FileListPlugin", (compilation) => {
      const fileList = {};
      // 对静态资源进行处理 - 参考：https://www.webpackjs.com/api/compilation-hooks/#processassets
      compilation.hooks.processAssets.tap(
        {
          name: "abc",
          stage: Compilation.PROCESS_ASSETS_STAGE_REPORT,
        },
        () => {
          Object.entries(compilation.assets).forEach(
            ([filename, filecontent]) => {
              fileList[filename] = {
                size: filecontent.size(),
              };
            }
          );
          const content = JSON.stringify(fileList, null, 2);
          compilation.emitAsset("record.json", new sources.RawSource(content));
        }
      );
    });
  }
};
