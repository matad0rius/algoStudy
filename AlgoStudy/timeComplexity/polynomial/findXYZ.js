function findXYZ(n) {
    const solutions = [];
  
    for(let x = 0; x < n; x++) {
      for(let y = 0; y < n; y++) {
        for(let z = 0; z < n; z++) {
          if( 3*x + 9*y + 8*z === 79 ) {
            solutions.push({x, y, z});
          }
        }
      }
    }
  
    return solutions;
  }


//  O(n^c) - Polynomial time --> 3 for loops 

//  Are three nested loops cubic? If each one visit all elements, then yes!
  
