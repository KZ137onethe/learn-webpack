String.prototype.add = function (...args) {
  return (
    this +
    args.reduce((pre, cur) => {
      return pre + cur;
    }, "")
  );
};

const info = {
  name: "tom",
  age: 18,
  toString: function () {
    return this.name.add(" ", this.age);
  },
};

console.log(info.toString());
