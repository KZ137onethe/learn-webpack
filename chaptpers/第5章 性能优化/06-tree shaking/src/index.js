import "./styles/index.css";
import { add } from "./utils/index.js";
import {
  default as t,
  name as tName,
  version as tVersion,
} from "./utils/test.js";

/**
 * @description
 * 1. 在使用 lodash 和lodash-es 时，lodash-es 有 tree-shaking，而 lodash 没有 tree-shaking。
 * 2. ESM 模块按需导入比全量导入能更好的 tree-shaking。
 */

// import { cloneDeep } from "lodash";
// import _ from "lodash-es";
import { cloneDeep } from "lodash-es";

const appEl = document.querySelector("#app");
const currentTimeEl = document.createElement("span");
const startTimeEl = document.createElement("span");
appEl.append(startTimeEl, currentTimeEl);

const obj = {
  region: "北京",
  time: new Date().toLocaleString("zh-CN"),
  data: {
    name: "张三",
    age: 18,
    address: "北京市朝阳区",
    hobbies: ["打篮球", "游泳", "看电影"],
    education: {
      school: "清华大学",
      major: "计算机科学与技术",
      degree: "本科",
      graduationYear: 2020,
    },
  },
};
startTimeEl.textContent = "起始时间：" + obj.time;

let times = 0;

setInterval(() => {
  times = add(times, 1);
  const cloneObj = cloneDeep(obj);
  cloneObj.time = new Date().toLocaleString("zh-CN");
  currentTimeEl.textContent = "当前时间：" + cloneObj.time;
  console.log("已过去 =>", times);
}, 1000);

export default times;
export const name = "reckon by time";
