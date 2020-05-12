// n^2 //


// From i = 0 to < arr.length
    // Assume the ele at 'i' is the least in the arr, assign i to 'indexOfMin'
        // For j from i+1 to end of arr
            // See if there is an ele with lower value
                // If there is record its index
    // If the index of the current ele and the index of the lowest ele isnt the same swap them

    
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i+1; j < arr.length; j++)
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

module.exports = { selectionSort }; 
                 
