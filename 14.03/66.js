Function.prototype.myBind = function(ctx, ...boundArgs) {
  const fn = this;
  return function(...args) {
    return fn.apply(ctx, [...boundArgs, ...args]);
  };
};