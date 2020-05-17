// Example
powerset('') // =>  ['']                    --> 1
powerset('a') // => ['', 'a']               --> 2
powerset('ab') // => ['', 'a', 'b', 'ab']   --> 4

// O(2^n) - Exponential time

function powerset(n = '') {
    const array = Array.from(n);
    const base = [''];
  
    const results = array.reduce((previous, element) => {
      const previousPlusElement = previous.map(el => {
        return `${el}${element}`;
      });
      return previous.concat(previousPlusElement);
    }, base);
  
    return results;
  }

  