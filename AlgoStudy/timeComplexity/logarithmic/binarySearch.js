function indexOf(array, element, offset = 0) {
    // split array in half
    const half = parseInt(array.length / 2);
    const current = array[half];
  
    if (current === element) {
      return offset + half;
    } else if (element > current) {
      const right = array.slice(half);
      return indexOf(right, element, offset + half);
    } else {
      const left = array.slice(0, half)
      return indexOf(left, element, offset);
    }
}

// O(log n) - Logarithmic time
// Reccursive function --> ELSE

// Logarithmic time complexities usually apply to algorithms that divide problems in half every time.


// When analyzing recursive algorithms, we care about these three things:
    // The runtime of the work done outside the recursion (line 3-4): O(1)
    // How many recursive calls the problem is divided (line 11 or 14): 1 recursive call. 
    // Notice only one or the other will happen, never both.
    // How much n is reduced on each recursive call (line 10 or 13): 1/2. Every recursive call cuts n in half.

// The binary search algorithm split n on half until a solution is found or array is exhausted. So, using the Master Method:

