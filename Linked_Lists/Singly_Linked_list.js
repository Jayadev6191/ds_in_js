function SinglyLinkedList() {
  this.head = null;
  this.numberOfValues = 0;
};

function Node(data){
  this.data = data;
  this.next = null;
};

SinglyLinkedList.prototype.add = function(element){
  var node = new Node(element);
  if(this.head === null) {
    this.head = node;
  }else{
    var currentNode = this.head;

    while(currentNode.next!==null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  this.numberOfValues++;
  this.print();
};

SinglyLinkedList.prototype.print = function(){
  var current = this.head;
  var result = '';
  while(current){
    result+= (
              current.next !== null ?
              `[${current.data}] -->` :
              `[${current.data}] --> null`
             );
    current = current.next;
  }
  console.log(result);
};

SinglyLinkedList.prototype.remove = function(value){
  if(!value) {
    throw 'You need a value to remove the node';
  }

  var current = this.head;
  console.log(current);

  while(current.next!==null){
    if(current.next.data === value) {
      console.log(`Removing ${current.next.data} from the list`);
      current.next = current.next.next;
    }
    current = current.next;
  }

  this.print();
};


var nl = new SinglyLinkedList();
nl.add(20);
nl.add(30);
nl.add(40);
nl.remove(20);


// var current = nl.head;
// var result = '';
// console.log(current);
// while(nl.head) {
//      result += `[${current.data}] -->`;
//      current = current.next;
//      current === null ? result += ' null': '';
//      console.log(result);
// }
