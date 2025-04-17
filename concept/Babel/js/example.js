const arr = [1, 2, 3].map((n) => n + 1);

const nextLog = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.warn(arr);
        resolve();
      } catch (e) {
        reject(e);
      }
    }, 1000);
  });

async function log() {
  await nextLog();
}

log();

class Person {
  region = "杭州";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return `name: ${this.name}, age: ${this.age}`;
  }

  set info(data) {
    const [name, age] = data;
    this.name = name;
    this.age = age;
  }
}

const person_1 = new Person("tom", 33);
person_1.info = ["mary", 22];
console.warn(person_1.info);
