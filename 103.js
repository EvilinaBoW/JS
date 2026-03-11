const pipeline = function(...fns) {
  return function(value) {
    return fns.reduce((acc, fn) => fn(acc), value);
  };
};