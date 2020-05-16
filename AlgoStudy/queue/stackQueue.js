// IMPORTANT

// Stack + Stack = Queque --> FIFO

// From stackA --> Peek --> Remove --> Push to stackB
// If the SatckA its empty then the method we want in stackB is the next record than come out from stackB
// --> Pop from stackB 
// --> Move everyting from B to A


// Move everyting from A to B and pop in B once


class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() { // We want to pop every method in A and push to B
        while (this.first.peek()) // Iterate from all methods 1st stack As long as there is somehitng in 
        const recordA = this.first.pop(); // We pop the method
        this.second.push(recordA); // We push to the 2nd stack
    }

    const recordB = this.second.pop();

    while (this.second.peek) {
        this.first.push(this.second.pop());
    }

    return record;
}

module.export = Queue;
