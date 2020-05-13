// Order collection of data. Contains different nodes
// Example: hi-->there--> howr-->u   4 diff nodes
// Each node contains some amount of data and a reference to the next node

// Head(first node) Tail(last node, it does not have a reference to any other node)
// Node = hi|-->
// Data = 'There'
// Next = -->

//Example
// 2 separate nodes and join together

// const nodeOne = {
//     data: 123
// };

// const nodeTwo = {
//     data: 456
// };

// nodeOne.next = nodeTwo;

// Node
    // 1) constructor

// Linked list
    // 1) constructor --> 
    // 2) insertFirst --> (Insert/Add) Create a new node and assing to the head DATA, THIS.HEAD
    // 3) size        --> Return the n of nodes in the linked list --> 'counter' & 'node'
    // 4) getFirst    --> Return the 1st node of the LS
    // 5) getLast     --> Return last node of the LS
    // 6) clear       --> Clear the LS of any nodes
    // 7) removeFirst --> Remove the 1st node. The 2nd should be the list head
    // 8) removeLast  --> Remove the last node of the LS --> Algo 'previous' & 'node'
    // 9) insertLast  --> DATA --> Insert a new node with provided data to the very end of the LS
    // T) getAt       --> INTEGER -->'Node, Counter' Return the node at the provided index --> We have to return the enery node at this particular index
    // 11 removeAt    --> INTEGER --> 'previous' Remove node at the provided index
    // 12 insertAt    --> INTEGER --> 'previous, node' Create an insert a new node at provided index. If index is out of bound add the node to the end of the list


class Node {
    constructor(data, next = null) { // next = null its convention 
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) { 
        this.head = new Node(data, this.head); // We have a 2nd argument in our constructor thats why
    }   
    size() {   
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if (!this.head) { // Is it define?
            return null;
        }
        let node = this.head
        while (node) {
            if (!node.next) { // Is that the last one?
                return node;
            }
            node = node.next // We found the tail
        }
    }
    clear() {
        this.head = null; // If there is no .head the LS thinks there is no nodes but there is still floating on memory
    }
    removeFirst() {
        if (!this.head) { // Is there a node if not?
            return;
        }
        this.head = this.head.next; // Move the 1st node --> This.head = null
    }
    removeLast() {
        if (!this.head) { // Check if there is any node
            return;
        }

        if (!this.head.next) { // Check if the size is 1 --> We can use size alo
            this.head = null;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) { // As long as node.next exist
            previous = node;
            node = node.next;
        }
        previous.next = null; // Since we found the last one
    }
    insertLast(data) { // Call getLast and create a node.next 
        const last = this.getLast();

        if (last) {
            last.next = new Node(data); // There r some existing nodes in our chain
        }   else {
            this.head = new Node(data); // Cuz the list was empty
        }
    }
    getAt(index) { // Similar to size
        if (!this.head) { // If there is any node // We dont really need that check in that case
            return null;
        }
        let counter = 0;
        let node = this.head;
        while (node) { // As los as there is a node presence we do!
            if (counter === index) {
                return node;
            }
            // If is not our index we keep loooking for it 
            counter++;
            node = node.next;
        }
        return null; // Cuz the index is > than our size
    }
    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next; // Removes the 1st ele // Cuz there is only one ele and we are moving from head 
            return;
        }

        const previous = this.getAt(index -1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast(); // if the 1st is false we do the 2nd
        const node = new Node(data, previous.next);
        previous.next = node;
    }
}

module.exports = { Node, LinkedList };