function MinMaxAvg(arr)
{
    var ThisArrayMin=arr[0];
    var ThisArrayMax=arr[0];
    var ThisArraySum=0;
    for (var i = 0; i < arr.length; i++) 
        {
            ThisArrayMax= arr[i] > ThisArrayMax ? arr[i]  : ThisArrayMax;
            ThisArrayMin= arr[i] < ThisArrayMin ? arr[i]  : ThisArrayMin;
            ThisArraySum+=arr[i];
        }
        return "Max: " + ThisArrayMax.toString()+ " Min: " +  ThisArrayMin.toString() +  " Avg: " +  (ThisArraySum / arr.length).toString();
}
console.log(MinMaxAvg([0,2,3,4,10,20,34]));