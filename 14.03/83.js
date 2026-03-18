function LinkedList() {
  this.head = null;
}
LinkedList.prototype.append = function(value) {
  const node = { value, next: null };
  if (!this.head) this.head = node;
  else {
    let cur = this.head;
    while (cur.next) cur = cur.next;
    cur.next = node;
  }
};
LinkedList.prototype.prepend = function(value) { /* аналогично */ };
LinkedList.prototype.delete = function(value) { /* реализация */ };
LinkedList.prototype.find = function(value) { /* реализация */ };