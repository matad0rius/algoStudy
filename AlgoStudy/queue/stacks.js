// Similar to a queue, order list of records
// Add a method to stack = push 
// Remove a method from stack = pop
// Return the top method without popping it = peel

// FILO

class Stack {
    constructor() {
        this.data = []; // data is consensual
    }

    push(record) {
        this.data.push(recprd);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length -1];
    }
} 

module.exports = Stack;
