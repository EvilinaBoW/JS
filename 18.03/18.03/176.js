function weekOfMonth(date) {
  const d = new Date(date);
  return Math.ceil(d.getDate() / 7);
}
console.log(weekOfMonth(new Date()));