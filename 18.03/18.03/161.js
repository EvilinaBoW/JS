const user = { profile: { info: { name: "ivan", age: 25 } } };
const { profile: { info: { name, age } } } = user;
console.log(name, age);