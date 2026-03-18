function calc(str) {
  const [a, op, b] = str.split(" ");
  const x = Number(a);
  const y = Number(b);
  if (isNaN(x) || isNaN(y)) return "Ошибка";
  if (op === "+") return x + y;
  if (op === "-") return x - y;
  return "Неизвестная операция";
}
console.log(calc("10 + 5"));
console.log(calc("abc + 5"));