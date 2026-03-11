const sequence = function(...fns) {
  return function(initial) {
    return fns.reduce((acc, fn) => fn(acc), initial);
  };
};