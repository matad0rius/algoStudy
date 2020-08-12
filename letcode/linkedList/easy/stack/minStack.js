// https://leetcode.com/problems/min-stack/

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

//     push(x) -- Push element x onto stack.
//     pop() -- Removes the element on top of the stack.
//     top() -- Get the top element.
//     getMin() -- Retrieve the minimum element in the stack.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2

var minStack = function() {
    this.stack = new Stack();
    this.minStack = new Stack();
};

MinStack.prototype.push = function(x) {
    this.stack.push(x);

    if (this.minStack.size === 0) {
        this.minStack.push(x);
    } else if (x <= this.minStack.peek()) {
        this.minStack.push(x);
    }
};

MinStack.prototype.pop = function(x) {
    let removeEle = this.stack.pop();

    if (removedElement === this.minStack.peek) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack.peek();
};  

MinStack.prototype.getMin = function() {
    return this.minStack.peek();
};

class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(val) {
        this.storage[this.size] = val;
        this.size++;
    }

    pop() {
        let top = this.storage[this.size - 1];
        this.size--;
        delete this.storage[this.size];
        return top;
    }

    peek() {
        return this.storage[this.size - 1] 
    }

    empty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}
