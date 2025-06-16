console.log("module A");
console.log("module B");

const lastEl = document.querySelector("#app > p");
const spanEl = document.createElement("span");

// 网络请求如果不遵循同源策略会产生跨域问题
const url = "/api/ian/rand";
fetch(url, {
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((repsonse) => repsonse.text())
  .then((res) => {
    spanEl.textContent = res;
    lastEl.insertAdjacentElement("afterend", spanEl);
  });
