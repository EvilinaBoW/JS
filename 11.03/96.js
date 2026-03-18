function createValidator(rules) {
  return function(obj) {
    for (let key in rules) {
      if (!rules[key](obj[key])) return false;
    }
    return true;
  };
}