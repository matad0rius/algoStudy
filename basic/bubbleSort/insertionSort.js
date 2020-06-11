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
