// O(n!) - Factorial time

// Write a function that computes all the different words that can be formed given a string.

// Ex

getPermutations('a') // => [ 'a']
getPermutations('ab') // =>  [ 'ab', 'ba']
getPermutations('abc') // => [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]

// // O(n!) - Factorial time

function getPermutations(string, prefix = '') {
    if(string.length <= 1) {
      return [prefix + string];
    }
  
    return Array.from(string).reduce((result, char, index) => {
      const reminder = string.slice(0, index) + string.slice(index+1);
      result = result.concat(getPermutations(reminder, prefix + char));
      return result;
    }, []);
  }

