// 插入购物车DOM部分
const ulEl = document.querySelector("ul.items");
ulEl.className = "items";
const createLiEL = (id) => {
  const liEl = document.createElement("li");
  liEl.dataset.productId = id;
  liEl.className = "item";
  return new Promise((resolve) => {
    resolve(liEl);
  });
};
const createBtnEl = (value, bindClickFn = (e) => {}) => {
  const btnEl = document.createElement("button");
  btnEl.className = `btn-item goods-${value}`;
  btnEl.textContent = value;
  btnEl.dataset.productId = value;
  btnEl.addEventListener("click", bindClickFn);
  return btnEl;
};

for (let i = 1; i <= 24; i++) {
  createLiEL(i)
    .then((el) => {
      ulEl.appendChild(el);
      return Promise.resolve(el);
    })
    .then(async (el) => {
      const btnEl = createBtnEl(i);
      el.appendChild(btnEl);
    });
}
