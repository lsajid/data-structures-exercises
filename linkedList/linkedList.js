//const { nums, words } = require("./data/data.js");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

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

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
//"the", "quick", "brown", "fox", "jumps", "over", "the", "lazy","dog",
  class LinkedList {
    constructor(head = null) {
      this.head = head;
    }
    insertBeginning() {}
    insertAt() {}
    insertAtEnd() {}
    size() {}
    delete() {}
    getFirst() {}
    getLast() {}
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

  //list.size();
  //console.log(list.getLast());

// https://www.codewars.com/kata/55be95786abade3c71000079/train/javascript