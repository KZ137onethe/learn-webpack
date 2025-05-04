import { gsap } from "gsap";
import { applyStyles } from "./utils/style.js";

const appEl = document.querySelector("#app");

const divEl = document.createElement("div");
divEl.className = "title";
divEl.textContent = "这是一个正方形滚动动画";
applyStyles(divEl, {
  textAlign: "center",
  color: "#343a40",
});
appEl.appendChild(divEl);

const tl = gsap.timeline();
tl.from(".title", { opacity: 0, y: -40, duration: 2 });
