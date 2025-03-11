module.exports = class Test {
  /** 参考：
   * 1. 自定义插件 https://www.webpackjs.com/contribute/writing-a-plugin/
   * @param {*} compiler
   */
  apply(compiler) {
    // 参考：https://www.webpackjs.com/api/compiler-hooks/
    compiler.hooks.done.tap("test", (compilation) => {
      console.log("编译完成！");
      // 在里面可以调用compilation的钩子
      // 参考：https://www.webpackjs.com/api/compilation-hooks/
    });
  }
};
