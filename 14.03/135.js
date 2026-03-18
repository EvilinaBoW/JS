function createReactive(obj, onChange) {
  return new Proxy(obj, {
    set(t, k, v) {
      t[k] = v;
      onChange(k, v);
      return true;
    }
  });
}