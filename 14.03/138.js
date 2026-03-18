function createObserver(onChange) {
  return new Proxy({}, {
    set(t, k, v) {
      t[k] = v;
      onChange(k, v);
      return true;
    }
  });
}