import { type } from "@learn-webpack/utils/index.js";

class AnalyticalUtils {
  static patternRegExp = /\([^)]*\)/g;

  static generateKey(name) {
    let str = name.trim().toLowerCase();
    if (!type.isString(name)) {
      throw new Error("name必须为string");
    }
    if (AnalyticalUtils.patternRegExp.test(str)) {
      str = str.replace(AnalyticalUtils.patternRegExp, "").trim();
    }
    return str.split(" ").join("_");
  }

  static judgeType(data) {
    let methodName = "";
    for (let attr in type) {
      if (
        Object.prototype.hasOwnProperty.call(type, attr) &&
        type.isFunction(type[attr]) &&
        type[attr](data)
      ) {
        methodName = type[attr].name;
        break;
      }
    }
    return String(methodName).slice(2).toLowerCase();
  }
}

export { AnalyticalUtils };
