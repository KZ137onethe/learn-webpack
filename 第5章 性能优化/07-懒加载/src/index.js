const btnEl = document.querySelector("#btn");

btnEl.addEventListener("click", async () => {
  const { map } = await import(
    /* webpackChunkName: "lodash-es" */ "./utils/exportLodash.js"
  );
  const testResult = map([1, 2, 3], (n) => n * 3);
  console.log(testResult);
});
