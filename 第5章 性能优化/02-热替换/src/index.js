import { gsap } from "gsap";

const appEl = document.querySelector("#app");
// 创建DOM
const divEl = document.createElement("div");
divEl.className = "text";
divEl.textContent =
  "少年不识愁滋味，爱上层楼。爱上层楼，为赋新词强说愁。—— 丑奴儿·书博山道中壁";
Object.assign(divEl.style, {
  color: "#509296",
});
appEl.appendChild(divEl);

gsap.registerPlugin(SplitText);
let split = SplitText.create(".text", {
  type: "chars, words",
});

gsap.from(split.chars, {
  y: 100,
  autoAlpha: 0,
  stagger: {
    amount: 0.5,
    from: "random",
  },
});
