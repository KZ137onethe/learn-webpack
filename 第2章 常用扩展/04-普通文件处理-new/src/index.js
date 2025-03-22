const yiyan = require("./assets/info/yiyan.txt");
const housePng = require("./assets/images/house.png");
const likePng = require("./assets/images/like.png");

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

const spanEl = document.createElement("span");
spanEl.textContent = yiyan;
footerEl.appendChild(spanEl);

appEl.append(footerEl);
