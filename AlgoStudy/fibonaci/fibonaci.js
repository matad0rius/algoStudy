// Iterative solution // 

function fibonaci(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1]; // result.length -1
        const b = result[i - 2]; // result.length -2

        result.push(a + b);
    }

    return result[n]; // result.length -1
}

// Recursive solution // Exponential time 

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n -1) + fib(n - 2);
}

module.exports = { fibonaci, fib};

// Constant time    --> 1        -->  
// Log time         --> log(n)   --> Searching operation
// Linear time      --> n        --> For Loop from 0 to arr.length
// Quasilinear time --> n*log(n) --> Sort
// Quadratic time   --> n^2      --> Handshake problem
// Exponential time --> 2^n      --> Recursive solution
// Exponential time --> should not be used under any circunstances


// Memoization //

// Store the arguments of each function call with the result.
// If the function is called again with the same arguments return the,
// precomputed result rather than running it again

function memoize(fn) {
    const cache = {}; //Store all the prev call to this function
    return function(...args) { //Take all the args and assing to an arry of this var call args
        if (cache[args]) {
            return cache[args]; 
        }

        const result = fn.apply(this, args); //Apply accepts an arr of arguments
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n -1) + fib(n - 2);
}

const fibB = memoize(slowFib);

module.export = fibB;

