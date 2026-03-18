const cache = new Map();
function cachedFn(n) {
  if (cache.has(n)) return cache.get(n);
  const res = n * n;
  cache.set(n, res);
  return res;
}
console.log(cachedFn(5));
console.log(cachedFn(5));