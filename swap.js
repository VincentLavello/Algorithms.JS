function swapArrValues(arr, idx1, idx2) {
    if ((idx1 > arr.length -1) || (idx2 > arr.length -1)) {
        return null;
    }
    temp = arr[idx1];
    // console.log(temp);
    arr[idx1]=arr[idx2];
    arr[idx2]=temp;
    return arr;
}
console.log(swapArrValues([0,2,1,3], 1, 2));