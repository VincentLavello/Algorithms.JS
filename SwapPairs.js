arr = [1,2,3,4,5];
swapPairs(arr) {
var temp = 0;

for (var i = 0; i < arr.length -1; i+=2) {
  temp = arr[i];
  arr[i]=arr[i +1];
  arr[i +1]=temp;
}
console.log(arr);
}