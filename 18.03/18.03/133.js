const map = new Map();
const weak = new WeakMap();
const obj = {};
map.set(obj, "data");
weak.set(obj, "weakData");
console.log(map.size);