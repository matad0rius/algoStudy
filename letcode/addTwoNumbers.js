// Add Two Numbers

// https://leetcode.com/problems/add-two-numbers/

// You are given two non-empty linked lists representing two non-negative integers.
//  The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


var addTwoNumbers = function(l1, l2) {
  // create a new linked list could be any value
  let dummyHead = new ListNode(0);
  // 2 nodes with the head of each ls
  let p1 = l1;
  let p2 = l2;
  // 3th pointer so we can iterate over our results ls
  let current = dummyHead;
  // track of what our carry is 
  let carry = 0;

  while (p1 !== null || p2 !== null) { // if any of our ls does not have a null we keep iterating
    let x = (p1 !== null) ? p1.val : 0; // check if our 1st pointer is on a node if not just make it 0 
    let y = (p2 !== null) ? p2.val : 0;
    let sum = x + y + carry;

    carry = Math.floor(sum / 10); // Reset our carry for our next iteration
    current.next = new ListNode(sum % 10); // Add a new node to our result ls 
    current = current.next // reasign for the next lopp

    if (p1 !== null) {
      p1 = p1.next;
    }

    if (p2 !== null) {
      p2 = p2.next;
    }
  }

  if (carry > 0) {
    current.next = new ListNode(1);
  }

  return dummyHead.next;
};
