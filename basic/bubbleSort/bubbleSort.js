// Basic

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length -i -1); j++) {

            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }

    return arr;
}

// Optimized

  let noSwaps;
  for (let i = 0; i < arr.length; i++){
    noSwaps = true;
    for(let j = 0; j < (arr.length -i -1); j++){
        
      if(arr[j] > arr[j+1]){
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
