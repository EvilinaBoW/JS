function Box(value) {
  return {
    map: fn => Box(fn(value)),
    get: () => value
  };
}