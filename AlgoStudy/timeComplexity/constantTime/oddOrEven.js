// Constant runtime O(1)

function isEvenOrOdd(n) {
    return n % 2 ? 'Odd' : 'Even';
  }


  // O(1)

  // It doesn’t matter if n is 10 or 10,001, it will execute line 2 one time.
  // If you have a method like Array.sort() or any other array or object methods, you have to look into the implementation to determine its running time.
  // Primitive operations like sum, multiplication, subtraction, division, modulo, bit shift, etc. have a constant runtime. 
  // Cuz max value