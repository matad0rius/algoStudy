// Given an arr and chunk size divide the arr into many sub arr
// Where each sub arr is of length size

// Examples
    // chunk([1,2,3,4], 2) --> [[1,2]. [3,4]]
    // chunk ([1,2,3,4,5], 2) --> [[1,2], [3,4], [5]]
    // chunk ([1,2,3,4,5], 4) --> [[1,2,3,4] [5]]


// 1st

function chunk(arr, size) {
    const chunked = []

    for (let ele of arr) {
        const last = chunked[chunked.length -1];

        if (!last || last.length === size) {
            chunked.push([ele]);
        }   else {
            last.push(ele)
        }
    }

    return chunked;
}

//2nd

funcion chunk(arr, size) {
    const chunked = [];
    let index = 0;

    while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
    }

    return chunked;
}

module.exports = chunk;