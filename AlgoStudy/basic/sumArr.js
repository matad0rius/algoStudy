// Sum an array using iteration
function sumArrIteration(array) {
    return array.reduce((x, y) => x + y);
}

// Sum an array using recursion
function sumArrRecurse(array) {
    return (array.length === 0) ? 0 : array[0] + sumArrRecurse(array.slice(1));
}