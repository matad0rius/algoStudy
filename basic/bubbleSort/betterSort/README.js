Merge Sort O(n log n )
  It's a combination of two things - merging and sorting!
  Exploits the fact that arrays of 0 or 1 element are always sorted
  Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
  
  In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
  Given two arrays which are sorted, this helper function should create a new array which is also sorted,
    and consists of all of the elements in the two input arrays
  This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it
  
  Merging Arrays Pseudocode
    Create an empty array, take a look at the smallest values in each input array
    While there are still values we haven't looked at...
    If the value in the first array is smaller than the value in the second array, push the value in the 
      first array into our results and move on to the next value in the first array
    If the value in the first array is larger than the value in the second array, push the value in the 
      second array into our results and move on to the next value in the second array
    Once we exhaust one array, push in all remaining values from the other array
    
    
Quicksort O(log(n))
  Is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays
    : the low elements and the high elements. Quicksort can then recursively sort the sub-arrays

The steps are:
  Pick an element, called a pivot, from the array.
  Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements 
    with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
  Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of 
    elements with greater values.
