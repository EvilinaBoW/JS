function isWeekend(date) {
  const day = new Date(date).getDay();
  return day === 0 || day === 6;
}
console.log(isWeekend(new Date()));