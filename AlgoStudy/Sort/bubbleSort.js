// BubbleSort n^2 Quadratic time // Every pair of adjacent values is compared

// From i = 0 to < arr.length
    // From j = 0 to (arr.length -i -1)
        // If the ele at j is > j+1
            // Swap ele at j and j+1

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length -i -1); j++) {

            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

module.exports = { bubbleSort };
