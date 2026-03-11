const calc = function(value) {
  return {
    add: function(n) {
      value += n;
      return this;
    },
    get: function() { return value; }
  };
};