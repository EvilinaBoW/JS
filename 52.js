function juxt(...fns) {
  return function(value) {
    return fns.map(fn => fn(value));
  };
}