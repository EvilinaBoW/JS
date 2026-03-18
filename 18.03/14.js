const values = [{}, [], null, new Date(), () => {}];
values.forEach(v => {
  console.log(typeof v, Object.prototype.toString.call(v), Array.isArray(v));
});