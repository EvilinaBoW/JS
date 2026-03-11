function createEnum(...keys) {
  const obj = {};
  keys.forEach((key, i) => obj[key] = i);
  return Object.freeze(obj);
}