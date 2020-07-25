// https://leetcode.com/problems/merge-two-sorted-lists/

// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input:  1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// JS does not have any native linked list we have to create a class listnode ot use

// Another example

// Input:  1-2-4-null -> 3-8-9-10-null
// Output: 1-2-3-4-8-9-10-null

// We have to create a brand new head and we can give it any value 
// Then we look for the smaller items of the linked lists then we reference to the next small char and we keep going
// Return head.next

var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  let head = dummy; // Cuz the reference to dummy is going to be changing

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next; // we need to update de dummy in orde to keep looping
    }

      if (l1 !== null) {
          dummy.next = l1;
      } else {
          dummy.next = l2;
      }

    return head.next
};

class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}
