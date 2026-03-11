const useReducer = (reducer, init) => {
  let state = init;
  const listeners = [];
  return [
    () => state,
    action => {
      state = reducer(state, action);
      listeners.forEach(l => l());
    },
    listener => listeners.push(listener)
  ];
};