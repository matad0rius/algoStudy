// 1 ==> Create a node class. The constructor
// Should accept an argument that gets assigned
// to the data property and initialize an empty arr
// for sorting children. The node class should have methods add and remove

// 2 ==> Creare a tree class. The three constructor 
// should initialize a 'root' property to null.

// 3 ==> Implement 'traverseBFS' and 'traverseDFS' on the three class



// Add ==> Given some data, create a new node and add it to the current
// node's 'children' array
// Remove ==> Given some data look at each child of the current node and
// remove any node with data === data
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
       this.children = this.children.filter(node => { // Filter does not modify the arr
            return node.data !== data // Return true for any ele is not !== to this ele
        });
    }
}
// Similar to linked list
class Tree {
    constructor(data) {
        this.root = null;
    }
// As long as the arr has dome ele take out the ele and put the children
    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift(); // take out 1st ele of the arr

            for (let child of node.children) { // arr.push(...node.children)
                arr.push(child); // Take all the ele of the arr and push it 
                fn(node);
            }
        }
    }
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            // We could use also a for loop
            arr.unshift(...node.children) // Take an ele and add it to the front of the arr
            fn(node);
        }
    }
}

module.export = { Tree, Node };
