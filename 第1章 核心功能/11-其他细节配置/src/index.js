require("./a");
const fn = require("_/utils/index");

console.log("module index");

setTimeout(() => {
  import("./b.js").then((fn) => {
    fn();
  });
}, 5000);

module.exports = fn;
