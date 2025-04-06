console.log(PI);
console.log(VERSION);
console.log(DOMAIN);

const divEl = $("<div>");
divEl.css("color", "#70a1ff");
divEl.text("Hello world!");
divEl.appendTo("#app");
const arr = map([1, 2, 3], (n) => n * 2);
console.log("💬 ⋮ arr => ", arr);
const count = utils.add(1, 2);
console.log("💬 ⋮ count => ", count);
console.log(window.lodash.cloneDeep({ a: 1, b: 2 }));
