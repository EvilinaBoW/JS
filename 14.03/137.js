const virtual = new Proxy({}, {
  get(t, k) {
    return () => console.log(`Вызван метод ${String(k)}`);
  }
});
virtual.anyMethod();