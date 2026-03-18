function camelToKebab(str) {
  return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}
console.log(camelToKebab("myVariableName"));