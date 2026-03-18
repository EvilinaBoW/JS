function minutesPassed(date) {
  return Math.floor((Date.now() - new Date(date)) / 60000);
}
console.log(minutesPassed("2025-03-18T07:00:00"));