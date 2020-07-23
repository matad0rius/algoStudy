// https://leetcode.com/problems/odd-even-linked-list/

// Given a singly linked list, group all odd nodes together followed by the even nodes.
//  Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

// Example 1:

// Input: 1->2->3->4->5->NULL
// Output: 1->3->5->2->4->NULL

// Example 2:

// Input: 2->1->3->5->6->4->7->NULL
// Output: 2->3->6->7->1->5->4->NULL


// Split into 2 LS
// 1st LS will have the odds the 2nd the evens
// Reassign the odd nodes to only point odds nodes 
// Reassign the last node in the 1st LS to point the first node in the 2nd LS
// we need 4 variables oddhead (not change), evenhead (not change), odd (reasign), even (reasign)
// so we reassign even to point odds next property and we do the same with odds 


var oddEvenList = function(head) {
  // Check if there is a LS
  if (head === null) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;
  
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  // In order to connect the 2 LS
  odd.next = evenHead;
  return head;
};
