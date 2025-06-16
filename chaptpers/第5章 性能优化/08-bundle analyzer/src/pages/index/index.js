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
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const pageItemsEl = document.querySelector(".content .items");
const cartEl = document.querySelector(".cart");
const cartBtnWrapperEl = document.querySelector(".btn-cart-wrapper");
const cartBtnEl = document.querySelector(".btn-cart");
const countEl = document.querySelector(".cart .count");
const cartItemsEl = document.querySelector(".cart .items");
const cartEmptyTextEl = document.querySelector(".cart .empty-text");

const setInCartClass = (item, inCart) =>
  item.parentNode.classList.toggle("in-cart", inCart);
const setActiveItemClass = (item, isActive) =>
  item.parentNode.classList.toggle("active", isActive);

const updateCart = (item) => {
  const hasItems = cartItemsEl.children.length > 0;
  countEl.textContent = hasItems ? cartItemsEl.children.length : null;
  cartEmptyTextEl.hidden = hasItems;
  cartItemsEl.hidden = !hasItems;
};

const cartBtnAnimation = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    cartBtnEl,
    { yPercent: 0, ratation: 0 },
    {
      duration: 1,
      ease: "cartBtnWiggle",
      yPercent: 20,
      ratation: -5,
      clearProps: "all",
    }
  )
    .fromTo(
      countEl,
      { rotation: 0 },
      { duration: 1.3, ease: "power4.out", rotation: 360, y: -30 },
      "<"
    )
    .to(
      countEl,
      { duration: 0.8, ease: "elastic.out(1, 0.3)", y: 0, clearProps: "all" },
      "-=0.6"
    );
};

// 添加购物车的翻转动画
const addToCart = (item) => {
  const state = Flip.getState(item);

  setInCartClass(item, true);
  setActiveItemClass(item, true);
  cartBtnWrapperEl.appendChild(item);

  Flip.from(state, {
    duration: reducedMotion ? 0 : 0.5,
    ease: "back.in(0.8)",
    onComplete: () => {
      setActiveItemClass(item, false);
      cartItemsEl.appendChild(item);

      gsap.fromTo(
        item,
        { y: -12 },
        {
          y: 0,
          duration: reducedMotion ? 0 : 1,
          ease: "elastic.out(1, 0.3)",
        }
      );

      updateCart(item);
      !reducedMotion && cartBtnAnimation();
    },
  });
};

// 移除购物车的物品
const removeFromCart = (item) => {
  let state = Flip.getState(item);

  document
    .querySelector(`[data-product-id="${item.dataset.productId}"]`)
    .appendChild(item);
  updateCart(item);
  setActiveItemClass(item, true);

  Flip.from(state, {
    duration: reducedMotion ? 0 : 0.5,
    ease: "power4.out",
    onComplete: () => {
      setActiveItemClass(item, false);
      setInCartClass(item, false);
    },
  });
};

pageItemsEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-item")) {
    addToCart(e.target);
  }
});

cartItemsEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-item")) {
    removeFromCart(e.target);
  }
});

cartBtnEl.addEventListener("click", () => cartEl.classList.toggle("open"));
