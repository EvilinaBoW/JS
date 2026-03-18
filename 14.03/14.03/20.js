function pick(obj, keys) {
  const res = {};
  keys.forEach(k => { if (k in obj) res[k] = obj[k]; });
  return res;
}