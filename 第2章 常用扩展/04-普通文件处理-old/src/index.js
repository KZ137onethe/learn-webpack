const { default: housePng } = require("./assets/house.png");
const { default: likePng } = require("./assets/like.png");

const appEl = document.querySelector("#app");

const likeImgEl = document.createElement("img");
const houseImgEl = document.createElement("img");
likeImgEl.src = likePng;
houseImgEl.src = housePng;

appEl.append(houseImgEl);

const footerEl = document.createElement("footer");
Object.assign(likeImgEl.style, {
  width: "40px",
  height: "40px",
});
footerEl.appendChild(likeImgEl);

appEl.append(footerEl);
