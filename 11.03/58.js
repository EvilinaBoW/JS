function createPrivate(init) {
  let state = init;
  return {
    get: () => state,
    set: value => { state = value; }
  };
}