import { gsap } from "gsap";
const appEl = document.querySelector("#app");

const divEl = document.createElement("div");
divEl.className = "title";
divEl.textContent = "Hello World!";
Object.assign(divEl.style, {
  width: "fit-content",
});
appEl.appendChild(divEl);

const div2El = document.createElement("div");
div2El.className = "text";
div2El.textContent = "I'm is coder";
Object.assign(div2El.style, {
  width: "fit-content",
});
appEl.appendChild(div2El);

// 动画
const tl = gsap.timeline();
tl.fromTo(
  ".title",
  { x: 0, duration: 2, color: "black" },
  { x: 600, duration: 2, color: "#9ebc19" },
  0.5
).fromTo(
  ".text",
  { x: 0, duration: 2, color: "black" },
  { x: 600, duration: 2, color: "#c67915" },
  "-=1"
);
