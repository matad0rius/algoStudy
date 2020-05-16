// From 0 to n iterate throw rows
    // Create an empty string stair
    // From 0 to n iterate throw col
        // If the current col is <= current row
            // Add a # to a stair
        // Else
            // Add a space ' ' to stair
    // Console log stair


// 1st

function steps(n) {
    for (let row = 0; row < n; row++) {
        stair = '';

        for (let col = 0; col < n; col++) {
            if (col <= row) {
                stair += '#';
            }   else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}


// If row = n then we have hit the end of our problem
// If stair.length = n then we are at the end of the row 
// IF stair.length <= row we add '#' or ' ' 


// 2nd

function steps(n, row = 0, stair = '') { // we add thos arguments row = 0 start at the 1st row of the project
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    }   else {
        stair += ' ';
    }
    steps(n, row, stair);
}

module.exports = steps;