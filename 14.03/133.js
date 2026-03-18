const arr = [10, 20, 30];
const p = new Proxy(arr, {
  get(t, k) { return k === "-1" ? t[t.length - 1] : t[k]; }
});
console.log(p[-1]);