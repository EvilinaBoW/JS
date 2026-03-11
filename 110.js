const memoizeAsync = function(fn) {
  const cache = {};
  return async function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    const result = await fn(...args);
    cache[key] = result;
    return result;
  };
};