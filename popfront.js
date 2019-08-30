// Pop 1 to the front
var anarr = [2,3,4,5];
anarr.push(anarr[anarr.length-1]);
for (var i = anarr.length -1; i > 0; i--) {
  anarr[i] = anarr[i-1];
}
anarr[0] = 1;
console.log(anarr);

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