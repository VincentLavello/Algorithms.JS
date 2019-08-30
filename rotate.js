function rotate (arr, shift) {
    if((arr.length % shift)==0) {         // any multiple of shift completly reorders the array so quit early
        return arr;
    }
    iArrLen = arr.length -1;            //zero based array 0 to iArrLen
    for (var i = 1; i <=shift; i++ ) {  //loop through shift amount of times. 
        newFirstVal = arr.pop();        //save the last value of the array  to be placed in front. (arr.length-1 is returned by pop)
        newLastVal =arr[iArrLen-1]      //will be shifting all values to the left. so arr[arr.length-1] = arr[arr.length-2]  
        arr.push(newLastVal);           //push that value adds the dimensino that was removed by pop() with the new val
        for(innerloop = iArrLen-1; innerloop >0; innerloop--){      //count backwards from 1 less than last to arr(1)
          arr[innerloop]=arr[innerloop-1];
        //   console.log(arr[innerloop] + "-" + arr[innerloop-1]);
        }
        arr[0]=newFirstVal;             //finally assign the new first value from the orignal last value. 
        // console.log(arr);
     }
     return arr;
}
console.log("result = " + rotate([1,2,3,4,5], 3));
console.log("result = " + rotate([1,2,3,4,5], 5));
console.log("result = " + rotate([1,2,3,4,5], 14));
console.log("result = " + rotate([1,2,3,4,5], 15));
