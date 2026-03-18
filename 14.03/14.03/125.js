const proto = { a: 1 };
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj));