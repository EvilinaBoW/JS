function immutableSet(obj, path, value) {
  const keys = path.split(".");
  const result = { ...obj };
  let current = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    current[k] = { ... (current[k] || {}) };
    current = current[k];
  }
  current[keys[keys.length - 1]] = value;
  return result;
}