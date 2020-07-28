// https://leetcode.com/problems/symmetric-tree/

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

 

// Follow up: Solve it both recursively and iteratively.


// We can split in half and we get 2 triangles
// We check 2nd and check uf they r equal and keep looping

var isSymmetric = function(root) {
    if (root === null) {
      return true;
    }

    return isMirror(root.left, root.right)
};

var isMirror = function(tree1, tree2) {
    if (tree1 === null || tree2 === null) {
      return tree1 === tree2
    }

    if (tree1.val !== tree2.val) {
      return false;
    }

    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
};
