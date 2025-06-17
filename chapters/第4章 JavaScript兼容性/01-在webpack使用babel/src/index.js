import dataSet from "@learn-webpack/resources/json/中国宜居城市_数据集.json" with { type: "json" }

import { AnalyticalUtils } from "./utils.js"

@log
class AnalyticalData {
  #data = ''
  #records = []

  static formatData(data) {
    try {
      if (!AnalyticalData.formatVerification(data)) return;
      const [exampleData] = data;
      const listMap = new Map();
      for (let key in exampleData) {
        listMap.set(key, AnalyticalUtils.generateKey(key));
      }
      return data.map((item) => {
        const obj = {};
        for (let key in item) {
          const _key = listMap.get(key);
          obj[_key] = item[key];
        }
        return obj;
      });
    } catch (e) {
      console.error(e);
    }
  }

  static formatVerification(data) {
    if (!Array.isArray(data)) {
      throw new Error("格式化数据的基本类型不正确");
    }
    const cache_keys = [];
    for (let item of data) {
      Object.keys(item).forEach((key) => {
        if (!cache_keys.includes(key)) {
          cache_keys.push(key);
        }
      });
    }
    if (data.every((item) => Object.keys(item).length !== cache_keys.length)) {
      throw new Error("数据项残次不齐");
    }
    return true;
  }

  constructor(data) {
    this.init(data);
  }

  init(data) {
    this.#data = AnalyticalData.formatData(data);
    this.#records = this.recordAttributeType()
  }

  // 记录属性的类型
  recordAttributeType() {
    const recordMap = new Map()
    for(let item of this.#data) {
      for(let [key, val] of Object.entries(item)) {
        if(!recordMap.has(key)) {
          const typeOfVal = AnalyticalUtils.judgeType(val)
          const obj = {
            [typeOfVal]: 1
          }
          recordMap.set(key, obj)
        } else {
          const obj = recordMap.get(key)
          const typeOfVal = AnalyticalUtils.judgeType(val)
          if(Object.prototype.hasOwnProperty.call(obj, typeOfVal)) {
            obj[typeOfVal] += 1
          } else {
            obj[typeOfVal] = 1
          }
        }
      }
    }
    return Array.from(recordMap)
  }
}

function log(Class) {
  return class extends Class {
    constructor(...args) {
      super(...args);
      // 通过Proxy拦截私有变量访问
      const handler = {
        get(target, prop) {
          if (prop === '#data' || prop === '#records') {
            console.log(`[LOG] 访问私有变量 ${prop}:`, target[prop]);
          }
          return target[prop];
        }
      };

      return new Proxy(this, handler);
    }
  };
}

const instance = new AnalyticalData(dataSet)
