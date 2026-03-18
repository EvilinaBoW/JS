function factorial(n, acc = 1) {
  return n <= 1 ? acc : factorial(n - 1, acc * n);
}