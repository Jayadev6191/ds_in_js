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

DoublyLinkedList.prototype.store = function(element){
  console.log(this.map);
}

DoublyLinkedList.prototype.add = function(element){
  var node = new Node(element);
  this.map[element] = node;

  if(this.head === null){
    this.head = node;
    this.tail = node;
  }else{
    var currentNode = this.head;
    while(currentNode.next!==null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    node.prev=currentNode;
  }

  this.print();
  this.numberOfValues++;
}

DoublyLinkedList.prototype.remove = function(element){
  if(this.map.hasOwnProperty(element)){
    var currentNode = this.map[element];
    currentNode.prev.next = currentNode.next;
    currentNode.next.prev = currentNode.prev;
    this.numberOfValues--;
  }else{
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
dl.remove(30);
dl.print();
