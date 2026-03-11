const memoizeWithTTL = function(fn, ttl) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    const now = Date.now();
    if (cache[key] && now - cache[key].time < ttl) return cache[key].value;
    const value = fn(...args);
    cache[key] = { value, time: now };
    return value;
  };
};