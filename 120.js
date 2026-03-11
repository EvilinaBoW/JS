const createDI = function() {
  const services = {};
  return {
    register: function(name, fn) { services[name] = fn; },
    get: function(name) { return services[name](); }
  };
};