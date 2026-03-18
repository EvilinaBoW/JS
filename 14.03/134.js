const obj = { a: 1 };
const desc = Object.getOwnPropertyDescriptors(obj);
const copy = Object.create(Object.getPrototypeOf(obj), desc);
console.log(copy);