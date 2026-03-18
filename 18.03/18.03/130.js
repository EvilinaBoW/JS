const processed = new WeakSet();
const obj1 = {};
const obj2 = {};
processed.add(obj1);
console.log(processed.has(obj1));
console.log(processed.has(obj2));