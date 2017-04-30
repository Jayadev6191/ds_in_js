function Stack(){
  this.store = {};
  this.size = 0;
  this.limit = 3;
}


Stack.prototype.push = function(item) {
  if(this.size >= this.limit) {
    return "Max capacity already reached. Pop items before you push.";
  }
  this.store[++this.size] = item;
  return Object.values(this.store);
}

Stack.prototype.pop = function() {
  if(this.size <= 0) {
    return "Nothing to pop. The stack is empty";
  }
  var value = this.store[this.size];
  delete this.store[this.size];
  this.size--;
  return Object.values(this.store)
}
