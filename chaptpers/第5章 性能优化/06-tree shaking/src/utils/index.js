
function add(...args) {
  return args.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}

export { add };

