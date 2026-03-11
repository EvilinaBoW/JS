const createStateMachine = function(transitions) {
  let state = Object.keys(transitions)[0];
  return {
    getState: function() { return state; },
    transition: function(event) {
      state = transitions[state][event] || state;
    }
  };
};