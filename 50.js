function factorial(n, cont) {
  return n <= 1 ? cont(1) : factorial(n - 1, res => cont(n * res));
}