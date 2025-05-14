import "./script/insertElement.js";
import "./styles/index.scss";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { CustomWiggle } from "gsap/CustomWiggle";
import { Flip } from "gsap/Flip";

// 注册插件
gsap.registerPlugin(CustomEase, CustomWiggle, Flip);

// 定制摇摆
CustomWiggle.create("cartBtnWiggle", { wiggles: 8, type: "easeOut" });

// 检测动画减弱功能
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const pageItemsEl = document.querySelectorAll(".content .items");
const cartEl = document.querySelector(".cart");
const cartBtnWrapperEl = document.querySelector(".cart-btn-wrapper");
const cartBtnEl = document.querySelector(".cart-btn");
const countEl = document.querySelector(".cart .count");
const cartItemsEl = document.querySelector(".cart .items");
const cartEmptyTextEl = document.querySelector(".cart .empty-text")
