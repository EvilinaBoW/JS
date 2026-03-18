const createCounter = function() {
  let count = 0;
  return function() {
    return ++count;
  };
};