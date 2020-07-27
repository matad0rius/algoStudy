// https://leetcode.com/problems/minimum-depth-of-binary-tree/

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its minimum depth = 2.

// BFS Start at the top and check each child from left to right
// We need a Queue FIFO

// You add the 1st number in the queue
// Check if it has any children and add the children to the queue
// Remove the number 
// We change number of nodes to the depth every time we move the row
// Keep looping until we find one that does not have any children we can stop and return the depth

var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    let queue = [];
    queue.push(root);
    let depth = 0;
    
    while (queue.length !== 0) {
        let numberOfNodes = queue.length

        while (numberOfNodes > 0) {
            let currentNode = queue.shift; // return the 1st item of the arr

            if (currentNode.left === null && currentNode.right === null) { // Does the have any children?
                depth++;
                return depth;
            }

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }

            numberOfNodes--;
        
        }

        depth++;
    }
};
