const curry = fn => {
  return function curried(...args) {
    return args.length >= fn.length ? fn(...args) : (...next) => curried(...args, ...next);
  };
};