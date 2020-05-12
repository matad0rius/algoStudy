// Divide and Conquer

// First select an element which is to be called as pivot element.
// Next, compare all array elements with the selected pivot element and arrange them in such a way that
//, elements less than the pivot element are to it's left and greater than pivot is to it's right.
// Finally, perform the same operations on left and right side elements to the pivot element.

// Code to swap two numbers in
function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
// Code to perform the partition
function partition(items, left, right) {
        i       = left, //left pointer
        j       = right; //right pointer
    let pivot   = items[Math.floor((right + left) / 2)], //middle element

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

// Perform the recursive operation
// Quick sort is performed until all elements on the left array and right array are sorted.
// Quick sort is performed on the same array and no new arrays are created in the process.
function quickSort(items, left, right) {
    if (items.length > 1) {
        let index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
let result = quickSort(items, 0, items.length - 1);
