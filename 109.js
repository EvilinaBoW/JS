const createEmitter = function() {
  const events = {};
  return {
    on: function(name, fn) {
      events[name] = events[name] || [];
      events[name].push(fn);
    },
    off: function(name, fn) {
      events[name] = events[name].filter(f => f !== fn);
    },
    emit: function(name, ...args) {
      (events[name] || []).forEach(fn => fn(...args));
    }
  };
};