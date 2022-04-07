//const { nums, words } = require("./data/data.js");

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
//create a Class node.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insertBeginning(value) {
    //create a new node
    const newNode = new Node(value);
    //set the next value of newNode to be equal to the head
    newNode.next = this.head;
    //reassign the head to point to the new node;
    this.head = newNode;
  }
  insertAt() {}
  insertAtEnd(value) {
    const newNode = new Node(value);
    let temp;
    if (this.head === null) {
      this.head = newNode;
    } else {
      temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  delete(key) {
    let temp = this.head;
    let prev = null;
    while (temp) {
      if (temp.data === key) {
        if (prev === null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return temp.data;
  }
  getFirst() {
    console.log(this.head);
    return this.head;
  }
  //"the", "quick", "brown", "fox", "jumps", "over", "the", "lazy","dog",
  getLast() {
    //console.log("hello");
    if(!this.head){
        return null;
    }
    let temp = this.head;
    //move through the list? How?
    //while loop
        //move the head pointer down all the way till the .next property is null
    //
    //return the node that has .next property of null (the tail)
    while(temp){
        console.log(temp);
        console.log(temp.next)
        if(!temp.next){
            return temp;
        }
        temp = temp.next;
        console.log("next",temp)
        if(temp.next === null) console.log(temp.data)
    }
  }
  search() {}
  getKth() {}
  getKthToLast() {}
  isEmpty() {}
  clear() {}
  toArray() {}
  containsDuplicates() {}
}

let list = new LinkedList();
for (let word of words) {
  list.insertBeginning(word);
}
list.size();
console.log(list.getLast());