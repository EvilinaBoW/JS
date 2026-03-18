function omit(obj, keys) {
  const res = {};
  for (let k in obj) if (!keys.includes(k)) res[k] = obj[k];
  return res;
}