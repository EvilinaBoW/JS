function overload(...implementations) {
  const map = new Map();
  implementations.forEach(fn => map.set(fn.length, fn));
  return function(...args) {
    const fn = map.get(args.length);
    return fn ? fn(...args) : undefined;
  };
}