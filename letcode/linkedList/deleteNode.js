// https://leetcode.com/problems/delete-node-in-a-linked-list/

// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Given linked list -- head = [4,5,1,9], which looks like following:

// Example 1:

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5,
//  the linked list should become 4 -> 1 -> 9 after calling your function.

// We need to skip the node we want to delete but in this case we dont have acces to the node we want to delete
// We need to change de node to the next value and point it to the next next 
// 4-5-1-9
// 4-1-1-9
// 4-1-9


var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
