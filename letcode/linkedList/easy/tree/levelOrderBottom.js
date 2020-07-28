// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//   3
//  / \
// 9   20
//    /  \
//   15   7

// return its bottom-up level order traversal as:

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// We need to create a quee cuz js does not have any built in methods


var levelOrderBottom = function(root) {
    let result = [];

    if (root === null) {
        return result;
    }
    
    let queue = []; // FIFO
    queue.push(root);

    while (queue.length !== 0) {
        let nodeCount = queue.length;
        let rowResult = []; // we need an array for every row

        while (nodeCount > 0) {
            let currentNode = queue.shift(); // take from the front of an array

            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }

            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }

            rowResult.push(currentNode.val);
            nodeCount--;
        }

        result.unshift(rowResult);
    }
};
