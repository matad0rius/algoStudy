// https://leetcode.com/problems/intersection-of-two-linked-lists/

// Write a program to find the node at which the intersection of two singly linked lists begins.

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Reference of the node with value = 8
// Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5].
// There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

// We need to get one of the pointers to point at null once it is done we reassign to the head of the other node
// If there is no intersection once when we advance then they will both reach to null without being the same so we will return null

var getIntersectionNode = function(headA, HeadB) {
  if (headA === null || headB === null) {
    return null
  }

  let pointerA = headA;
  let pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA.next;
    pointerB = pointerB.next;

    if (pointerA === pointerB) {
      return pointerA;
    }

    if (pointerA === null) {
      pointerA = headB;
    }

    if (pointerB === null) {
      pointerB = headA;
    }
  }

  return pointer1;
};
