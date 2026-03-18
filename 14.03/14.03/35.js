function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (let k in obj) clone[k] = deepClone(obj[k]);
  return clone;
}