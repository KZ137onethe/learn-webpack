export const isString = (value) => {
  return Object.prototype.toString.call(value) === "[object String]";
};

export const isNumber = (value) => {
  return Object.prototype.toString.call(value) === "[object Number]";
};

export const isBoolean = (value) => {
  return Object.prototype.toString.call(value) === "[object Boolean]";
};

export const isFunction = (value) => {
  return Object.prototype.toString.call(value) === "[object Function]";
};

export const isObject = (value) => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

export const isArray = (value) => {
  return Object.prototype.toString.call(value) === "[object Array]";
};

export const isNull = (value) => {
  return Object.prototype.toString.call(value) === "[object Null]";
};

export const isUndefined = (value) => {
  return Object.prototype.toString.call(value) === "[object Undefined]";
};

export const isSymbol = (value) => {
  return Object.prototype.toString.call(value) === "[object Symbol]";
};

export const isDate = (value) => {
  return Object.prototype.toString.call(value) === "[object Date]";
};
