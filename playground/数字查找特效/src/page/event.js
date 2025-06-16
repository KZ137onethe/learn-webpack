import NumberTimer from "../utils/number";
import appendNumber from "./appendNumber";

var n = new NumberTimer(200);
n.onNumberCreated = function (n, isPrime) {
  appendNumber(n, isPrime);
};

let isStart = false;

// 该模块用于注册事件
addEventListener("click", () => {
  if (isStart) {
    n.stop();
    isStart = false;
  } else {
    n.start();
    isStart = true;
  }
});
