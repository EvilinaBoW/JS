const arr = [
  function() { console.log(1); },
  function() { console.log(2); },
  function() { console.log(3); }
];
arr.forEach(fn => fn());