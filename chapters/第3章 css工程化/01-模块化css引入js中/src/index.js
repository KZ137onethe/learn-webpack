const { default: Css2 } = require("./css/banner.css");

// console.log("💬 ⋮ Css2 => ", Css2[0][1]);
// Css2.forEach((item, idx) => {
//   console.log(`${idx} => ${item[1]}`);
// });

// ? css-loader 不会将css加入html的样式表中，你想怎么处理完全看你怎么做
// const styleSheet = document.createElement("style");
// styleSheet.innerHTML = Css2;
// document.head.appendChild(styleSheet);

// ? style-loader 将css数据加入到html样式表中
