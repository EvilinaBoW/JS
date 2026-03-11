const once = function(fn) {
  let done = false;
  return function(...args) {
    if (done) return;
    done = true;
    return fn(...args);
  };
};