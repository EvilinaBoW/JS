const factorial = function f(n) {
  return n <= 1 ? 1 : n * f(n - 1);
};