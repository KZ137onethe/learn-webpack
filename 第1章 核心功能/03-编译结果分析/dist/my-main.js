// 合并两个模块
// 1. ./src/a.js
// 2. ./src/index.js

(function (modules) {
  // 用于缓存模块的导出结果
  var moduleExports = {};
  // 运行一个模块，然后得到一个导出的结果
  // moduleId就是模块的路径
  function __webpack_require(moduleId) {
    if (moduleExports[moduleId]) {
      // 检查是否有缓存
      return moduleExports[moduleId];
    }

    var func = modules[moduleId];
    var module = {
      exports: {},
    };
    func(module, module.exports, __webpack_require);
    var result = module.exports;
    return result;
  }
  return __webpack_require("./src/index.js");
})(
  // 该对象保存所有模块，以及模块对应的代码
  {
    "./src/a.js": function (module, exports) {
      eval(
        'console.log("module a")\nmodule.exports = "a";\n //# sourceURL=webpack:///./src/a.js'
      );
    },
    "./src/index.js": function (module, exports, require) {
      eval(
        "console.log('index module');var a = require('./src/a.js');console.log(a)\n //# sourceURL=webpack:///./src/index.js"
      );
    },
  }
);
