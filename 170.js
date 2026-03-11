const asyncPipe = (...fns) => async x => {
  let result = x;
  for (const fn of fns) result = await fn(result);
  return result;
};