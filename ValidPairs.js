function isValidPairTypesofBraces(strJibberish) {
    var dictClosersOpen = {")":"(", "]":"[", "}":"{"};
    var arrLastOpen=[];
    var arrOpens=["{", "(", "["];
    var arrCloses=["}", ")", "]"];
    // console.log(strJibberish.length);
    for (var i = 0; i<strJibberish.length - 1; i++) {
        if (arrOpens.includes( strJibberish[i])) {
            arrLastOpen.push(strJibberish[i]);
            // console.log("count of opens: " + (arrLastOpen.length).toString);
        }
        //if the current character in strJibberish is in the arrCLoses array 
        //and it matches the type of last opening bracket then decrement array of last open
        else if (arrCloses.includes(strJibberish[i])) {
            if (dictClosersOpen[strJibberish[i]]=arrLastOpen[arrLastOpen.length-1]) {
                // console.log(dictClosersOpen[strJibberish[i]]);
                // console.log(dictClosersOpen[strJibberish[i] + " compared to: " + strJibberish[i]])
                arrLastOpen.pop();
                // console.log("count of opens after pop: " + (arrLastOpen.length).toString);

            }
        }
    //finally; if there is anthing left in the lastopen array then there was no corresponding close.
    }
return (arrLastOpen.length==0);
}
console.log(isValidPairTypesofBraces("W(h{a[t}s@u]p"));
console.log(isValidPairTypesofBraces("W(h{a[t]s@u}]p"));
