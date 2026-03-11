const createStore = function(reducer, initialState) {
  let state = initialState;
  const listeners = [];
  return {
    getState: function() { return state; },
    dispatch: function(action) {
      state = reducer(state, action);
      listeners.forEach(l => l());
    },
    subscribe: function(listener) { listeners.push(listener); }
  };
};