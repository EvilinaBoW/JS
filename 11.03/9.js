function showArgs() {
  console.log(arguments);
  for (let arg of arguments) {
    console.log(arg);
  }
}

showArgs(10, "строка", true);