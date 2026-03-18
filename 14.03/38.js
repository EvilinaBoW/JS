function deepMerge(target, source) {
  const result = { ...target };
  for (let k in source) {
    if (typeof source[k] === "object" && source[k] !== null && !Array.isArray(source[k])) {
      result[k] = deepMerge(result[k] || {}, source[k]);
    } else {
      result[k] = source[k];
    }
  }
  return result;
}