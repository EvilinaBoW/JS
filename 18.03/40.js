function sumDigits(n) {
  return String(Math.abs(n)).split("").reduce((a, b) => a + +b, 0);
}
console.log(sumDigits(123));
console.log(sumDigits(-456));