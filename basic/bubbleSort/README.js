What is sorting? O(n^2)
  Sorting is the process of rearranging the items in a collection (e.g. an array) 
  so that the items are in some kind of order.

Telling JavaScript how to sort
  The built-in sort method accepts an optional comparator function
  You can use this comparator function to tell JavaScript how you want it to sort
  The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    If it returns a negative number, a should come before b
    If it returns a positive number, a should come after b,
    If it returns 0, a and b are the same as far as the sort is concerned

BubbleSort
  A sorting algorithm where the largest values bubble up to the top!
    Start looping from with a variable called i the end of the array towards the beginning
    Start an inner loop with a variable called j from the beginning until i - 1
    If arr[j] is greater than arr[j+1], swap those two values!
    Return the sorted array

Selection Sort
  Similar to bubble sort, but instead of first placing large values into sorted position,
  it places small values into sorted position
    Store the first element as the smallest value you've seen so far.
    Compare this item to the next item in the array until you find a smaller number.
    If a smaller number is found, designate that smaller number to be the new "minimum" and continue 
      until the end of the array.
    If the "minimum" is not the value (index) you initially began with, swap the two values.
    Repeat this with the next element until the array is sorted.

Insertion Sort
  Builds up the sort by gradually creating a larger left half which is always sorted
    Start by picking the second element in the array
    Now compare the second element with the one before it and swap if necessary.
    Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
      (i.e. the left side) to place the element in the correct place.
    Repeat until the array is sorted.
