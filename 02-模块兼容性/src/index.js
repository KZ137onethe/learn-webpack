// commonjs 导入
const objA = require("./es6-a.js")
// ES Module 导入
import * as ObjB from './commonjs-b.js'

console.log(objA.a, objA.b, objA.default)
console.log(ObjB.b1, ObjB.b2, ObjB.b3)