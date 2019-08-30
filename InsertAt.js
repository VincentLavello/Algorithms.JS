function InsertAt(arr, idx, val) {
    if (idx > arr.length) {
      return null;
    }
    arr.push(arr[arr.length -1]); // appends a duplicate end value
    for(var i = arr.length -2; i>=idx; i-- ) {
        if (i==idx) {
            arr[i]=val;
        }
       else {
            arr[i]=arr[i-1];
       }
    }
    return arr;
}
console.log((InsertAt([0,2,3,4],9,9)));
console.log((InsertAt([0,2,3,4],1,9)));