function Stack() { this.items = []; }
Stack.prototype.push = function(v) { this.items.push(v); };
Stack.prototype.pop = function() { return this.items.pop(); };
Stack.prototype.peek = function() { return this.items[this.items.length - 1]; };
Stack.prototype.isEmpty = function() { return this.items.length === 0; };