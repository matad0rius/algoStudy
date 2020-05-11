// N*log(n) //

// Recursion Fib //

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return mergeSort(mergeSort(left), mergeSort(right));
}

// Create 'results' arr
// While there are ele in both arr
    // If the 1st ele the left half is < right half
        // Shift the ele from left into 'results' arr
    // else
        // Shift the ele from right into 'results' arr
    // Take everything from the arr thats has something on it and put in results

function mergeSort(left, right) {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}