//NO ERROR CHECKING OR PARAMETER VALIDATION 
//ASSUMES WELL INTENDED PROGRAMMER
function reverse(arr) {
    intArrayIDX = arr.length-1; // zero based
    //swap vals from both sides of array; so dont loop entire array; just to middle
    //odd length: parseInt rounds down and modulus adds 1 from remainder; if even number; mod returns zero
    iLoopTo = parseInt(arr.length / 2) + (arr.length % 2) //so loop to middle
    for(var iFWD = 0; iFWD<iLoopTo; iFWD++) {
        frontval = arr[iFWD];                       //save left side of array
        arr[iFWD] = arr[intArrayIDX -iFWD];   //replace left side with right side
        arr[intArrayIDX -iFWD]=frontval;      //replace right side with saved left side
    }
    return arr;
}
console.log(reverse([6,5,4,3,2,1])); //even
console.log(reverse([5,4,3,2,1])); //odd