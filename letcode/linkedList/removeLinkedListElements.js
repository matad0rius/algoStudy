// Remove linked list Element

// Remove all ele from a ls of integers that have a value val

// Example
// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

// https://leetcode.com/problems/remove-linked-list-elements/

// Example
// 1-1-6-2-3-6-6-nul

// 1st 
// We need to move until we find 6 once we find we need to remove the node 
// we are currently on but we do not have acces to de nodes behind us 

// 2nd
// We need to check the next node so if we check if the next node is = 6
// we can reasign the next pointer after 6 

// 3th 
// We need to be carefoul if the 1st node = 6 cuz we r only checking the next 
// value 
// We need to create a dummy node at the begining of the linked list 
// 6-1-1-6
// x-6-1-1-6
// Doing this we check every node in the linked list 

// 4th
// We check if the next node is = 6 once we do that if it is not we reasign the head/ current node
// and keep checking until we do 
// When we find it reassign the property to be the next current.next so we skip the 6 and keep looking for 6

// 5th 
// The problem if we can't check the next next we only can do it if the .next property is not = 6 
// once we find the null value we break the loop and return the linked list 

// 6th
// If we return head this is pointing to the node we add at the beginning and we do not want that
// We want to return head.next and we get the final linked list withot the 6s

var removeElements = function(head, val) {
  // Check if head is null and if it is return it
  if (head === null ) {
    return null;
  }
  // Create a new head at the begining of the linked list 
  let currentNode = new ListNode(-1);
  // Connect to our current linked list
  currentNode.next = head;
  // Reset the head 
  head = currentNode; 
  // While loop to iterate over every node except if it is null
  while (currentNode.next !== null) {
    // Check if the next node is = to the value of the node we want to remove
    if (currentNode.next.val === val) {
      // Check if our next property to be next.next so we skip over that node
      currentNode.next = currentNode.next.next;
    } else {
      // reasign current node to be currentnode.next
      currentNode = currentNode.next;
    }
  }
  // return the 1st node of the real linked list 
  return head.next
};
