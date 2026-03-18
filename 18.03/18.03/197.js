const a = {};
const b = { a };
a.b = b;
console.log(JSON.stringify(a));