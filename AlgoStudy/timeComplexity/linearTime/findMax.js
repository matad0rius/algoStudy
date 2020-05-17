function findMax(n) {
    let max;
    let counter = 0;
  
    for (let i = 0; i < n.length; i++) {
      counter++;
      if(max === undefined || max < n[i]) {
        max = n[i];
      }
    }
  
    console.log(`n: ${n.length}, counter: ${counter}`);
    return max;
  }

// O(n) - Linear time --> 1 foor loop
// The program visits every element from the input.
// Linear time complexity O(n) means that as the input grows, the algorithms take proportionally longer to complete.

// Examples of linear time algorithms:
  // Get the max/min value in an array.
  // Find a given element in a collection.
  // Print all the values in a list.



// Problem

// You want to find the maximum value from an unsorted array.
// It checks every element from n. If the current item is more significant than max it will do an assignment.
// Time complexity
  // Line 2-3: 2 operations
  // Line 4: a loop of size n
  // Line 6-8: 3 operations inside the for-loop.
// So, this gets us 3(n) + 2
// We only need the biggest order term, thus O(n).