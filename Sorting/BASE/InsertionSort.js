function insertionSort(arr){
    for(let i = 1 ; i < arr.length ; i++){
        let temp = arr[i];
        let j = i - 1;
        for(j; j >= 0; j--){
            if(arr[j] > temp){
                arr[j+1] = arr[j];
            }
        }
        arr[j+1] = temp;
    }
    return arr;
}


const arr = [5, 3, 8, 4, 2, 1];
console.log("Unsorted array:", arr);
const sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);