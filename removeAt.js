function removeAt(arr, idx) {
    arrzerolen = arr.length -1;
    if (idx > arrzerolen) {
        return null;
    }
    for(var i = idx; i < arrzerolen; i++) {
        if(i < arrzerolen) {
        arr[i]=arr[i+1];
        }
    }
    arr.pop();
    return arr;
}
console.log(removeAt([1,2,2,3,4],1));
