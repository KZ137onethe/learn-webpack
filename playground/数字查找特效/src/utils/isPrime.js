
/**
 * 判断n是否是素数
 * @param {number} n 一个正整数
 * @returns boolean
 */
export default function(n) {
  if(n < 2) return false
  for(let i = 2; i <= n - 1; i++) {
    if(n % i === 0) {
      return false
    }
  }
  return true
}