class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    if (this.head == null) {
      let newNode = new Node(value);
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      let newNode = new Node(value);
      current.next = newNode;
    }
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current !== null) {
      result += `{${current.value}} ->`;
      current = current.next;
    }
    return result + " NULL";
  }
}

let myList = new LinkedList();
myList.insert(100);
myList.insert(200);
myList.insert(300);

console.log(myList.includes(300));
console.log(myList.includes(200));
console.log(myList.includes(100));
console.log(myList.includes(400));

console.log(myList.toString());

module.exports = { Node, LinkedList };
