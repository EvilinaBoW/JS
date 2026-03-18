const target = { name: "Иван" };
const p = new Proxy(target, {
  get(t, k) { console.log("get", k); return t[k]; }
});
console.log(p.name);