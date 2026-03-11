function createObserver() {
  const listeners = [];
  return {
    subscribe: fn => listeners.push(fn),
    notify: data => listeners.forEach(fn => fn(data))
  };
}