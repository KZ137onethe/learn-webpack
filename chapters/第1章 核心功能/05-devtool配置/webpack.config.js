/**
 * devtool参考：https://www.webpackjs.com/configuration/devtool/#devtool
 * 默认情况下
 * 开发环境（mode：development）的devtool为eval，勉强算是一个简单的source map，参考：https://www.webpackjs.com/configuration/devtool/#development
 * 生成环境（mode: production）的devtool为none，即忽略devtool配置，不生成 source map，实际配置为devtool：false，参考：https://www.webpackjs.com/configuration/devtool/#production
 */
module.exports = {
  mode: "development",
  // 开发环境推荐source-map
  devtool: "source-map",
};
