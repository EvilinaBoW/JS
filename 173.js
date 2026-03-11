const Option = value => ({
  map: fn => value == null ? Option(null) : Option(fn(value)),
  getOrElse: def => value == null ? def : value
});