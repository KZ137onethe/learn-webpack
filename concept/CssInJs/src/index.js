import { applyStyles, mergeStyles } from "./utils/css.js";

const boxLeftEl = document.querySelector(".box__left");
const boxMiddleEl = document.querySelector(".box__middle");
const boxRightEl = document.querySelector(".box__right");

// css-in-js
const style = {
  backgroundColor: "#f40",
  color: "#fff",
  width: "30%",
  height: "80%",
  margin: "0 auto",
};

applyStyles(boxLeftEl, style);
mergeStyles(boxMiddleEl, style, {
  backgroundColor: "skyblue",
  margin: "20px auto ",
});
