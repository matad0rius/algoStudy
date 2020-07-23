// https://leetcode.com/problems/palindrome-linked-list/

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false

// Example 2:

// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?


// Spliting into half
// Go left to right and right to left to check if they are 

// We can split into half and reverse the 2nd half and check if there is the same 
// We need 2 pointers fast and slow 2x - 1x so when the faster reachs the end the slow is halfway
// We reverse the 2nd half of the LS
// We move the slow pointer to the head of the 2nd half --> null goes away cuz nothing is pointing to it 
// We move the fast to the head of the 1st half

var isPalindrome = function(head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  slow = reverse(slow);

  while (slow !== null) {
    if (slow.val !== fast.val) {
      return false;
    }

    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

function reverse(head) {
  let prevNode = null;

  while (head !== null) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }

  return prevNode;
}
