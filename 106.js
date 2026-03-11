const decorator = function(fn) {
  return function(...args) {
    console.log("before");
    const result = fn(...args);
    console.log("after");
    return result;
  };
};