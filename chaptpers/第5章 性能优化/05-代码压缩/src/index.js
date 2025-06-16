/*
 * @Author: guanhai q2274799107@126.com
 * @Date: 2025-05-05 22:13:56
 * @LastEditors: guanhai q2274799107@126.com
 * @LastEditTime: 2025-05-10 00:29:22
 * @FilePath: \learn-webpack\第5章 性能优化\05-代码压缩\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./styles.css";

import BallImg from "./assets/imgs/basketball.png";
import { gsap } from "gsap";

const appEl = document.querySelector("#app");
const boxEl = document.createElement("div");
Object.assign(boxEl.style, {
  width: "300px",
  height: "300px",
  outline: "10px solid #4263eb",
  position: "relative",
  "border-radius": "8px",
});

const ballEl = document.createElement("img");
ballEl.src = BallImg;
ballEl.width = 40;
ballEl.height = 40;
Object.assign(ballEl.style, {
  "object-fit": "cover",
  position: "absolute",
  top: "30px",
  left: "100px",
});

appEl.appendChild(boxEl);
boxEl.appendChild(ballEl);

gsap.to(ballEl, {
  y: 270,
  rotate: 500,
  yPercent: -100,
  yoyo: true,
  duration: 2.5,
  repeat: -1,
  ease: "bounce.out",
});

gsap.fromTo(
  boxEl,
  { outlineColor: "#4263eb" },
  { outlineColor: "#2f9e44", duration: 1, repeat: -1, yoyo: true }
);
