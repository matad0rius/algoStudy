function factorial(num) {
    return (num !== 1) ? num * factorial(num - 1) : 1;  
}

////////////

function factorial(num) {
    // If the number is less than 0, reject it.
    if (num < 0) 
          return -1;
      
    // If the number is 0, its factorial is 1.
    else if (num === 0) 
        return 1;
      
    // Otherwise, call the recursive procedure again
      else {
          return (num * factorial(num - 1));
      }
}

//////////////

function factorial(num) {
    let result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  

  ///////////////

  function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }