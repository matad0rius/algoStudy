function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return mergeSort(mergeSort(left), mergeSort(right));
}

// N*log(n) --> linear O(n) + logarithmic log(n)

// Linearithmic time complexity it’s slightly slower than a linear algorithm
// it’s still much better than a quadratic algorithm

// The entire input must be iterated through, and this must occur O(log(n)) times
// n items iterated log(n) times gives O(n log(n)).

// No comparison sort can operate faster than this

// MergeSort
    // We are going to divide the array recursively until the elements are two or less.
    // We know how to sort two items, so we sort them iteratively (base case).
    // The final step is merging: we merge in taking one by one from each array such that they are in ascending order.

