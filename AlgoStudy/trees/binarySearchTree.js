// Every node have at most 2 children

//        10
//    0       12
// -1   5   11  20
//         17    99

// Left & Right 
// value > left.value value < right.value

// 1) Implement the Node class to create a binary search tree
// The constructor should initialize values 'data, 'left, 'right

// 2) Implement the 'insert' method for the Node class. 
// Inser should accept an arhument 'data' then create an insert new node
// at the appropiate location in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.left = null; // This ndoe does not hace children
        this.right = null;
    }
    insert(data) { // recursive solution
        if (data < this.data && this.left) {
            this.left.insert(data);
        }   else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        if (this.data === data) {
            return this; // Return the entery node
        }

        if (data > this.data && this.right) { // Move to the right side of the three
            return this.right.contains(data); // With recursion we have to return a function call
        } else if (data < this.data && this.left) {
            return this.left.contains(data);
        }
        
        return null; // If there is no data argument inside the tree
    }
}

// 3) Implements the 'contains' methpd for the Node class. Contains should
// accept a 'data' argument and return the Node in the tree with the same
// value If the value isnt in the tree return null

module.exports = Node;
