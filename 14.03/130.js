const p = new Proxy({}, {
  set(t, k, v) {
    if (typeof v === "number" && v < 0) throw new Error("negative");
    t[k] = v;
    return true;
  }
});