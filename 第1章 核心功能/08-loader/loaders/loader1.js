module.exports = function(sourceCode) {
  // 如果loader是以query的形式拼接在loader路径中，那么它返回一个以？开头的字符串，下面这个query是?a=1&b=2&c=3
  const query = this.query
  console.log("loader1")
  return sourceCode
}