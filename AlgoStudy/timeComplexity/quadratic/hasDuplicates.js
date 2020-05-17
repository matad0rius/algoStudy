function hasDuplicates(n) {
    const duplicates = [];
    let counter = 0; // debug
  
    for (let outter = 0; outter < n.length; outter++) {
      for (let inner = 0; inner < n.length; inner++) {
        counter++; // debug
  
        if (outter === inner) continue;
  
        if (n[outter] === n[inner]) {
          return true;
        }
      }
    }

    return false;
}

// O(n^2) - Quadratic time

// A function with a quadratic time complexity has a growth rate of n^2

// Quadratic algorithms
    // Check if a collection has duplicated values.
    // Sorting items in a collection using bubble sort, insertion sort, or selection sort.
    // Find all possible ordered pairs in an array.


// Time complexity analysis:
    // Line 2-3: 2 operations
    // Line 5-6: double-loop of size n, so n^2.
    // Line 7-13: has ~3 operations inside the double-loop
// We get 3n^2 + 2.