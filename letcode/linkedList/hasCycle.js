// https://leetcode.com/problems/linked-list-cycle/

// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed)
// in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.



// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.



// If we have an item moving 2x faster than other they will eventually meet does not matter where do we start
// if they ever meet is cuz there is a cycle

// We need 2 pointer 1 faster than other x2

var hasCycle = function(head) {
  // We need 2 pointer 1 faster than other x2
  let fastPointer = head;
  let slowPointer = head;

  // Continue until the fast pointer reach the end of the LS cuz if he reaches thats means there is no cycle 
  while (fastPointer !== null && fastPointer.next !== null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    
    if (fastPointer === slowPointer) {
      return true;
    }  
  }

  return false;
};
