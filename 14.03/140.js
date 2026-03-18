function memoProxy(obj) {
  const cache = new Map();
  return new Proxy(obj, {
    get(t, k) {
      if (typeof t[k] === "function") {
        if (!cache.has(k)) {
          cache.set(k, (...args) => {
            const key = JSON.stringify(args);
            if (!cache.has(key)) cache.set(key, t[k].apply(t, args));
            return cache.get(key);
          });
        }
        return cache.get(k);
      }
      return t[k];
    }
  });
}