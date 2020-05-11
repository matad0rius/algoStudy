// Quadratic time n^2 or Linear time n if the input arr is already sorted
// On average is Quadratic time n^2 

// Moving from left to right over an input list --> Like cards Ascending
// We can skid the index[0] since any array of size 1 is trivially sorted

// Iteration 0 (unsorted array): [5,3,1,4,6]
// Iteration 1, key is 3 (was at index 1): [5,3,1,4,6] →[3,5,1,4,6]
// Iteration 2, key is 1 (was at index 2): [3,5,1,4,6] →[1,3,5,4,6]
// Iteration 3, key is 4 (was at index 3, ): [1,3,5,4,6] → [1,3,4,5,6]
// Iteration 4, key is 6 (was at index 4): [1,3,4,5,6] → [1,3,4,5,6] 
// because 6 was already in the right place, no changes are made and insertion sort returns the sorted array.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let lesser = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > lesser) {
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = lesser;
    }
    return arr;
}

// We add the lesser to inputArr[j + 1] because inputArr[j] would correspond
// to the first item in the sub-array whose value is less than 
// (or equal to) the lesser value, so we want to place the key immediately to the right of that item
