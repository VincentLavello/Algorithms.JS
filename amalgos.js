arr = [1,2,3,4,5];``
swapPairs(arr) {
var temp = 0;

for (var i = 0; i < arr.length -1; i+=2) {
  temp = arr[i];
  arr[i]=arr[i +1];
  arr[i +1]=temp;
}
console.log(arr);
}
//popfront
var points = [40, 100, 1, 5, 25, 10];
var nextarray = [];

nextarray[0]=7;
points.push(points.length-1)
for (var i = 1; i < points.length; i++) {
    nextarray[i]=points[i-1];
}
console.log(nextarray);
//another popfront:
//popfront using unshift
arr = [2,3,4,5];
var x = arr.unshift(1)
console.log(arr);
console.log(x);

var booleanValue = true; 
var numericalValue = 354;
var stringValue = "This is a String";
var stringObject = new String( "This is a String Object" );
alert(typeof booleanValue) // displays "boolean"
alert(typeof numericalValue) // displays "number"
alert(typeof stringValue) // displays "string"
alert(typeof stringObject) // displays "object"