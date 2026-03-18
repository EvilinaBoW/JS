function addMonths(date, months) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}
console.log(addMonths(new Date("2025-01-31"), 1));