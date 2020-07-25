// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// Example 1:

// Input: 1->1->2
// Output: 1->2

// Every node has a val property and a next property the last node is the last until we reach null value

var deleteDuplicates = function(head) { 
    let current = head;
    
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};
