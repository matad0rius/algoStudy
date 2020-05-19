function wallisPi(num) {
    let productPi = 1;
    for (let i = 1; i <= num; i++) {
        productPi *= ((2 * i) / (2 * i - 1)) * ((2 * i) / (2 * i + 1));
    }
    return 2 * productPi;   
}

////////////// Recursive ////////////

function wallisPiRecurse(num, iterationNum) {
    if (num === 0) {
        return 2; // The terminal or tail case of the recursion, when the result from the whole multiplication formulae need to be multiplied by 2; i.e. when num hits zero
    }

    if (!iterationNum) {
        iterationNum = 1;
    }

    return (Math.pow(iterationNum, 2)) / (Math.pow(iterationNum, 2) - 0.25) * wallisPiRecurse(--num, ++iterationNum)
    
}