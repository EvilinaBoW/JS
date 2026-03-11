const module = (function() {
  let privateVar = 42;
  return {
    get: function() { return privateVar; }
  };
})();