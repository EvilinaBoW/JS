const memoize = fn => {
  const cache = new WeakMap();
  return (...args) => {
    if (cache.has(args[0])) return cache.get(args[0]);
    const result = fn(...args);
    cache.set(args[0], result);
    return result;
  };
};