function mapObject(obj, fn) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, fn(v)]));
}
console.log(mapObject({ a: 1, b: 2 }, x => x * 10));