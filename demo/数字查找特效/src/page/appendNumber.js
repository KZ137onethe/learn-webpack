import radColor, { getRandom } from "../utils/radColor.js";

const divContainer = document.getElementById("divContainer");
const divCenter = document.getElementById("divCenter");

/**
 * 在divCenter后面产生一个素数，通过一个动画来删减它
 * @param {*} n
 * @param {*} color
 */
function createCenterPrimeNumber(n, color) {
  const divEl = document.createElement("div");
  divEl.textContent = n;
  Object.assign(divEl.style, {
    position: "fixed",
    left: "50%",
    top: "50%",
    fontSize: "8em",
    color: color,
  });
  // 将该元素插入到divCenter同级元素后面
  divCenter.insertAdjacentElement("afterend", divEl);

  const keyframes = new KeyframeEffect(
    divEl,
    [
      {
        transform: "translate(-50%, -50%)",
        opacity: 1,
      },
      {
        transform: `translate(${getRandom(-200, 200)}px, ${getRandom(
          -200,
          200
        )}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 1000,
      easing: "ease-in",
    }
  );
  const animation = new Animation(keyframes, document.timeline);
  animation.play();
  animation.addEventListener("finish", () => divEl.remove());
}

function createCenterNumber(n) {
  divCenter.textContent = n;
}

export default function (n, isPrime) {
  const spanEl = document.createElement("span");
  spanEl.textContent = n;
  if (isPrime) {
    const color = radColor();
    spanEl.style.color = color;
    createCenterPrimeNumber(n, color);
  }
  divContainer.appendChild(spanEl);
  // 产生中间的数字
  createCenterNumber(n);
}
