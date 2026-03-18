function createObservable(obj, onChange) {
  return new Proxy(obj, {
    get(t, k) {
      if (typeof t[k] === "object" && t[k] !== null) {
        return createObservable(t[k], onChange);
      }
      return t[k];
    },
    set(t, k, v) {
      t[k] = v;
      onChange(k, v);
      return true;
    }
  });
}