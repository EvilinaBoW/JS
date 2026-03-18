const asyncObj = {
  async *[Symbol.asyncIterator]() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
  }
};
(async () => {
  for await (let v of asyncObj) console.log(v);
})();