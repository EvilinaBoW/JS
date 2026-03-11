[1, 2, 3, 4]
  .map(n => n * 2)
  .filter(n => n > 4)
  .reduce((a, b) => a + b, 0);