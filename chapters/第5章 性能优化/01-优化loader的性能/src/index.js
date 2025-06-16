import _ from "lodash-es";

const arr = [1, 2, 3, 4, 5].map((li) => {
  return Math.pow(li, 3);
});

console.log(arr);

const data = {
  a: 1,
  b: 2,
  c: {
    c1: 31,
    c2: 32,
    c3: /\.[js|ts|jsx|tsx]$/i,
    c4: new Date(),
    c5: "hehe",
  },
};

const copyData = _.cloneDeep(data);

console.log(data === copyData);


