function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);
    while (typeof result === "function") result = result();
    return result;
  };
}