module.exports = function(sourceCode) {
  // 如果在loader中传递的是options，那么this.query返回的是options属性对应的对象
  const options = this.query
  const reg = new RegExp(options.changeVar, "g")
  console.log('test-loader')
  return sourceCode.replace(reg, 'var');
}