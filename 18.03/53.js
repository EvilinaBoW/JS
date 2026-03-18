function countLetter(str, letter) {
  return str.split(letter).length - 1;
}
console.log(countLetter("javascript", "a"));