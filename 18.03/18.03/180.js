function parseDate(str) {
  const [date, time] = str.split(" ");
  const [d, m, y] = date.split(".").map(Number);
  const [h, min] = time.split(":").map(Number);
  return new Date(y, m - 1, d, h, min);
}
console.log(parseDate("15.03.2026 20:30"));