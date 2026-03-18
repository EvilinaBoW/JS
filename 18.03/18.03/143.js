function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
}
console.log(invert({ a: 1, b: 2 }));