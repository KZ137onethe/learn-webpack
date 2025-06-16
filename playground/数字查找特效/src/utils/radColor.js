/**
 * 产生一个min~max的随机整数
 * @param {number} min 最小边缘值
 * @param {number} max 最大边缘值
 * @returns number
 */
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 产生一个rgb随机颜色
 * @returns string
 * @example rgb(234, 12, 78)
 */
export default function () {
  return `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )})`;
}
