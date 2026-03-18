const obj = { c: 3, a: 1, b: 2 };
const sorted = Object.fromEntries(Object.entries(obj).sort());
console.log(sorted);