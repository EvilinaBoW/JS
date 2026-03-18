const p = new Proxy({ a: 1 }, {
  has(t, k) { return k === "secret" ? false : k in t; }
});
console.log("a" in p);