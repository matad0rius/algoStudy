// Write a fcuntion that accepts an integer N and return NxN spiral matrix

// Examples

//  matrix(2)
//    [[1,2]]
//    [[4,3]]

// Create an empty array called results
// Create a counter variable starting at 1
// As long as start col <= end col and start row <= end row
    // Loop from start col to end col
        // At results start_row[i] assing counter variable
        // Increment counter
    // Increment start row
    // Loop from start to row to end now
        // At results [i][end_col] assing a counter variable
        // Increment counter
    // Decrement end row
    // Repeat for other 2 sides

function matrix(n) {
    const results = [];

    for let (i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startCol = 0;
    let endCol = n -1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        // Top row
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++
        }
        startRow++;

        // End col
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // Bot row
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start Col
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++
    }

    return results;
}

module.exports = matrix;