function optChain(obj, ...keys) {
  let res = obj;
  for (let k of keys) {
    if (res === null || res === undefined) return undefined;
    res = res[k];
  }
  return res;
}