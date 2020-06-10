How do we search?
  Given an array, the simplest way to search for an value is to look at every element 
  in the array and check if it's the value we want
  
JavaScript has search!
  indexOf
  includes
  find
  findIndex
  
Linear Search Pseudocode O(n)
  This function accepts an array and a value
  Loop through the array and check if the current array element is equal to the value
  If it is, return the index at which the element is found
  If the value is never found, return -1
  
  
Binary Search O(log n)
  Binary search is a much faster form of search
  Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
  Binary search only works on sorted arrays!
  
Binary Search Pseudocode
  This function accepts a sorted array and a value
  Create a left pointer at the start of the array, and a right pointer at the end of the array
  While the left pointer comes before the right pointer:
    Create a pointer in the middle
    If you find the value you want, return the index
    If the value is too small, move the left pointer up
    If the value is too large, move the right pointer down
  If you never find the value, return -1
  
  
Recap
  Searching is a very common task that we often take for granted
  When searching through an unsorted collection, linear search is the best we can do
  When searching through a sorted collection, we can find things very quickly with binary search
  KMP provides a linear time algorithm for searches in strings
