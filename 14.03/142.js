function immutableProxy(obj) {
  return new Proxy(obj, {
    set() { throw new Error("readonly"); },
    deleteProperty() { throw new Error("readonly"); },
    get(t, k) {
      if (typeof t[k] === "object" && t[k] !== null) return immutableProxy(t[k]);
      return t[k];
    }
  });
}