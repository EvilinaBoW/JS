const prices = { apple: 100, banana: 50 };
const arr = Object.entries(prices).map(([k, v]) => `${k}: ${v}`);
console.log(arr);