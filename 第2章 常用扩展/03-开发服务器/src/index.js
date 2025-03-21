console.log("module A");
console.log("module B");

// 网络请求如果不遵循同源策略会产生跨域问题
const url = "/api/ian/rand";
fetch(url, {
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((repsonse) => repsonse.json())
  .then((res) => {
    console.log(res);
  });
