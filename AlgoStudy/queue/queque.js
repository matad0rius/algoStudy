// Weave revices 2 queues as arguments and combines the contents of each into a new 3rd queue
// The function should handle queues of diff length without inserting undefines into the new one
// Do not acces the array inside any queue only use add, remove, peek functions

// Example

// 'Hi' 'To' 'You'
//                 --> 1 'Hi' 2 'To' 3 'You'
//  1     2    3

// If you try to remove and empty ele from a queque you will get undefines

// FIFO

function Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        this.data.pop();
    }

    peek() { // Acess last ele of the arr
        return this.data[this.data.length -1];
    }
}

module.exports = Queue;


//// Linked list better performance /////

const LinkedList = require(

class Queue {
    constructor() {
      this.input = new LinkedList();
    }
  
    add(element) {
      this.input.addFirst(element);
    }
  
    remove() {
      return this.input.removeLast();
    }
  
    get size() {
      return this.input.size;
    }
  }