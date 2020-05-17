function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n -1) + fib(n - 2);
}

// O(2^n) - Exponential time
