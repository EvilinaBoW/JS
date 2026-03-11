const lazy = function(fn) {
  let result;
  let computed = false;
  return function() {
    if (!computed) {
      result = fn();
      computed = true;
    }
    return result;
  };
};