const cache = new WeakMap();
let obj = { id: 1 };
cache.set(obj, "data");
obj = null;