const createSignal = value => {
  let listeners = [];
  return [
    () => value,
    newValue => {
      value = newValue;
      listeners.forEach(l => l());
    },
    listener => listeners.push(listener)
  ];
};