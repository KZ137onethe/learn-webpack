async function delay(fn, interval, ...params) {
  return new Promise(resolve => {
    setTimeout(() => resolve(fn(...params)), interval)
  })
}

(async () => {
  await delay((a, b, c) => console.log('Delayed execution', a, b, c), 1000, 1, 2, 3);
})();