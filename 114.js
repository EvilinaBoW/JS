const createMiddleware = function() {
  const stack = [];
  const use = function(fn) { stack.push(fn); };
  const run = function(ctx) {
    let i = 0;
    const next = () => stack[i++] ? stack[i - 1](ctx, next) : null;
    next();
  };
  return { use, run };
};