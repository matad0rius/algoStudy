// Write a program that console logs the numbers from 1 to n
// For multiples of three print 'fizz' and for the 5 'buzz'
// If they are both 3 and 5 'fizzbuzz'


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }   else if (i % 3 === 0) { 
            console.log('fizz');
        }   else if (i % 5 === 0) {
            console.log('buzz');
        }   else {
            console.log(i);
        }
    }
}

