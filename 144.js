const obj = {
  name: "Алекс",
  sayLater: function() {
    setTimeout(() => console.log(this.name), 1000);
  }
};