function sumAll(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); 