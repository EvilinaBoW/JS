const partial = function(fn, ...fixed) {
  return function(...rest) {
    return fn(...fixed, ...rest);
  };
};