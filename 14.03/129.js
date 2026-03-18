const p = new Proxy({ a: 1 }, {
  get(t, k) {
    return (Number.isInteger(+k) && !(k in t)) ? 0 : t[k];
  }
});
console.log(p[99]);