// Given the root node of a tree return an arr where each ele is 
// the width of a tree at each lvl

//    0         --> 1
// 1  2   3     --> 3
// 4      5     --> 2

// Answer [1,3,2] --> Width of the tree


// 2 diff arr --> counter & arr --> iter similar to BF while

function levelWidth(root) {
    const arr = [root, 's'];
    const counters = [0] // width of the tree // lvl [0,1,2]

    while (arr.length > 1) { // cuz ther is an s always
        const node = arr.shift();

        if (node === 's') {
            counters.push(0); // starts proceessing a new row/fila
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length -1]++; // Define the last ele +1 --> current lvl of the tree
        }
    }

    return counters;
}
