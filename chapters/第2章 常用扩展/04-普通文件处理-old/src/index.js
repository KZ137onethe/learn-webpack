const {
  default: housePng,
} = require("@learn-webpack/resources/imgs/house.png");
const { default: likePng } = require("@learn-webpack/resources/imgs/like.jpg");
const messageContent = require("@learn-webpack/resources/txt/message.txt");
const commentSvg = require("@learn-webpack/resources/imgs/comment.svg");

const appEl = document.querySelector("#app");
Object.assign(appEl.style, {
  display: "grid",
  "grid-template-columns": "200px 40px",
  "column-gap": "15px",
  "background-color": "#dfe0d9",
});

// 向id为app的盒子添加图片
const houseImgEl = document.createElement("img");
houseImgEl.src = housePng;
Object.assign(houseImgEl.style, {
  width: "200px",
  height: "200px",
});
appEl.append(houseImgEl);

const spanEl = document.createElement("span");
// 向spanEl盒子插入点赞图片
const likeImgEl = document.createElement("img");
likeImgEl.src = likePng;
Object.assign(likeImgEl.style, {
  width: "40px",
  height: "40px",
  cursor: "pointer",
  border: "2px dashed skyblue",
});
spanEl.appendChild(likeImgEl);

likeImgEl.addEventListener("click", () => {
  alert(messageContent);
});
// 向spanEl盒子插入评论svg
const parser = new DOMParser();
const svgDoc = parser.parseFromString(commentSvg, "image/svg+xml");
const commentSvgElement = svgDoc.documentElement;
Object.assign(commentSvgElement.style, {
  border: "2px dashed skyblue",
});
spanEl.appendChild(commentSvgElement);

// 向id为app的盒子添加spanEl盒子
appEl.append(spanEl);
