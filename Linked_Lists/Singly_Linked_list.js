function SinglyLinkedList() {
  this.head = null;
  this.numberOfValues = 0;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

SinglyLinkedList.prototype.add = function(element) {
  var node = new Node(element);
  if (this.head === null) {
    this.head = node;
  } else {
    var currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  this.numberOfValues++;
  this.print();
};

SinglyLinkedList.prototype.print = function() {
  var current = this.head;
  var result = "";
  while (current) {
    result +=
      current.next !== null
        ? `[${current.data}] -->`
        : `[${current.data}] --> null`;
    current = current.next;
  }
  console.log(result);
};

SinglyLinkedList.prototype.remove = function(value) {
  if (!value) {
    throw "You need a value to remove the node";
  }

  var current = this.head;
  console.log(current);

  while (current.next !== null) {
    if (current.next.data === value) {
      console.log(`Removing ${current.next.data} from the list`);
      current.next = current.next.next;
    }
    current = current.next;
  }

  this.print();
};

SinglyLinkedList.prototype.reverse = function() {
  var current = this.head;
  if (current === null) {
    throw new Error("Cannot reverse an empty list");
  }

  var prev = null;
  var next = null;
  while (current !== null) {
    next = current.next;
    // console.log("next", next);
    current.next = prev;
    // console.log("current.next", current.next);
    prev = current;
    // console.log("prev", prev);
    current = next;
    // console.log("current", current);
  }
  console.log(prev);
  this.head = prev;

  this.print();
};

var nl = new SinglyLinkedList();
nl.add(20);
nl.add(30);
nl.add(40);
nl.reverse();
// nl.remove(20);

//   [h]                      [h]
//    |                        |
//    |                        |
//    -                        |
//   \ /                      \ /
//   [20] -> [30] --> null
//   [20] -> [30] -> [40] -> [50] -> null
//          [c]
// [20] -> [30] -> [40] -> [50] -> []

// c = 30;
// c.next = 40
// c.next.next = 50

// c.next.next.next =

// null -> [50] -> [40]

// null --> [50]

// head = tail
// tail.next = tail.prev;
// tail.prev = null;
