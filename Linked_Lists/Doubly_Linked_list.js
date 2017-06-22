function DoublyLinkedList(){
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
  this.map = {};
};

function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
};


DoublyLinkedList.prototype.add = function(element){
  var node = new Node(element);
  this.map[element] = node;

  if(this.head === null){
    this.head = node;
    this.tail = node;
  }else{
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.numberOfValues++;
}

DoublyLinkedList.prototype.remove = function(element){
  if(this.map.hasOwnProperty(element)){
    var currentNode = this.map[element];
    if(currentNode === this.tail) {
      currentNode = currentNode.prev;
      this.tail = currentNode;
      this.tail.next = null;
    }else if(currentNode === this.head) {
      currentNode = currentNode.next;
      this.head = currentNode;
      this.head.prev = null;
    }else {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }

    this.numberOfValues--;
  }else{
    alert(`node with data ${element} not found`);
    throw "node not found";
  }
}

DoublyLinkedList.prototype.print = function(){
  var current = this.head;
  var result = '';
  while(current) {
    result+= (
              current.next !== null ?
              `[${current.data}] <--> ` :
              `[${current.data}] <--> null`
             );
    current = current.next;
  }
  console.log(result);
}


var dl = new DoublyLinkedList();
dl.add(20);
dl.add(30);
dl.add(40);
dl.add(50);
dl.print();
