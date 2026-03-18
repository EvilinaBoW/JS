const scheduler = {
  events: [],
  add(date) { this.events.push(new Date(date)); },
  next() {
    const now = Date.now();
    return this.events.sort((a, b) => a - b).find(d => d > now);
  }
};
scheduler.add("2026-01-01");
console.log(scheduler.next());