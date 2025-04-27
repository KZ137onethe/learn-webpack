const foo = () => "foo";

console.log(foo());

const nextLog = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("haha");
    }, 1000);
  });

nextLog().then((res) => {
  console.log(res);
});
