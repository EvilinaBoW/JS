const flow = (...fns) => async (...args) => {
  let result = args;
  for (const fn of fns) {
    try {
      result = await fn(...(Array.isArray(result) ? result : [result]));
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  return result;
};