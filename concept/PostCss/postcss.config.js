/** postcss 中文网：https://postcss.nodejs.cn/
 * postcss 中文网几乎所有常用的插件：https://postcss.nodejs.cn/docs/postcss-plugins
 */
const postcssPresetEnv = require("postcss-preset-env");
const postcssColorMod = require("postcss-color-mod-function");
const atImport = require("postcss-import");

module.exports = {
  // 关闭source-map
  map: false,
  plugins: [
    // 请参阅 https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#readme 查看
    postcssPresetEnv({
      // stage依据于cssdb，默认为stage：2，stage选项根据CSS特性在成为实现的web标准过程中的稳定性来确定要填充哪些CSS特性。
      stage: 3,
      // features选项按ID 手动启用或禁用特定的polyfill,参考：https://github.com/csstools/postcss-plugins/blob/main/plugin-packs/postcss-preset-env/FEATURES.md
      features: {
        // 该语法在草案阶段(stage: 1)
        "custom-selectors": true,
        // 支持嵌套(stage: 2)
        "nesting-rules": true,
        // 重置元素所有属性的属性"all"(stage: 4)
        "all-property": false,
      },
      // 可以是插件接受该值，默认为配置（如果置为false，那么只会编译成旧语法）
      preserve: false,
      // ... 还有很多选项，需要自己查阅
    }),
    // 支持转换颜色的函数，参阅：https://github.com/csstools/postcss-color-mod-function
    postcssColorMod(),
    // 通过内联内容来转换@import规则
    atImport({}),
  ],
};
