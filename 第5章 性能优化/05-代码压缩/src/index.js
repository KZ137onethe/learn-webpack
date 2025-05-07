import "./styles.css";

import CloudImg from "./assets/imgs/cloud.png";
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

const cloudEl = document.createElement("img");
cloudEl.src = CloudImg;
cloudEl.width = 40;
cloudEl.height = 40;
Object.assign(cloudEl.style, {
  "object-fit": "cover",
  position: "absolute",
  top: "30px",
  left: 0,
});

appEl.appendChild(boxEl);
boxEl.appendChild(cloudEl);

gsap.to(cloudEl, {
  x: 300,
  xPercent: -100,
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
