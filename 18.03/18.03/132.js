const meta = new WeakMap();
const el = {};
meta.set(el, { clicked: 5 });
console.log(meta.get(el));