class Timer {
  constructor() {
    this.seconds = 0;
    setInterval(() => this.seconds++, 1000);
  }
}