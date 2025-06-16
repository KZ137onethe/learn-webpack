import { gsap } from "gsap";
import "./stylesheets/index.css";
import { applyStyles } from "./utils/style.js";

const appEl = document.querySelector("#app");

const divEl = document.createElement("div");
divEl.className = "box-1";
applyStyles(divEl, {
  width: "100px",
  height: "100px",
  borderRadius: "5px",
  backgroundImage: "linear-gradient(to right bottom, #84a729 0%, #c3d94e 100%)",
});
appEl.appendChild(divEl);

const tl = gsap.timeline();
tl.to(".box-1", { rotate: 720, x: "50vw", xPercent: -50, duration: 6 });
