function softBind(fn, ctx) {
  return function(...args) {
    return fn.apply(this !== window ? this : ctx, args);
  };
}