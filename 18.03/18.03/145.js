function deepFilter(obj, fn) {
  const res = {};
  for (let [k, v] of Object.entries(obj)) {
    if (typeof v === "object" && v !== null) {
      const filtered = deepFilter(v, fn);
      if (Object.keys(filtered).length) res[k] = filtered;
    } else if (fn(v)) res[k] = v;
  }
  return res;
}
console.log(deepFilter({ a: 1, b: { c: 2, d: 0 } }, x => x > 0));