import "./styles/index.scss";

setProgress([7, 20]);

/**
 * 设置进度条的格子数
 * @param {[number, number]} param
 * @returns void
 */
function setProgress(param) {
  const [progress, total] = param;
  if (
    param.some((i) => Object.prototype.toString.call(i) !== "[object Number]")
  )
    return console.error("rate or total is not a number");
  if (param.some((i) => i <= 0))
    return console.error("rate or total is not a positive number");
  const progressEl = document.querySelector("#app .progress");
  progressEl.style.setProperty("--progress", progress);
  progressEl.style.setProperty("--total", total);
}
