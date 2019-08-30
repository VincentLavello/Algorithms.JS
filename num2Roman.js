function num2RomanLessThan500(num) {
    strRoman = "";
    var intDecrement = 0;
    var arrDelimiters = {"M":1000, "CM": 900, 
    "D":500, "CD":400, "CCC":300, "CC":200, "C":100, 
    "XC":90, "L":50, "XL":40, "XXX":30, "XX":20, "X":10, 
    "IX":9, "V":5, "IV":4, "I":1
};
    var arrOrder = ["M", "CM", "D", "CD", "CCC", "CC", "C", "XC", "L", "XL", "XXX", "XX", "X", "IX", "V", "IV", "I"];

    for (var i = 0; i <= arrOrder.length-1; i++) {
        intDecrement = arrDelimiters[arrOrder[i]];
        console.log(intDecrement);
        while (num>=intDecrement) {
            strRoman+=arrOrder[i];
            num-=intDecrement;
            console.log("num= " + num.toString());
        }
    }
    return strRoman;
}
console.log(num2RomanLessThan500(2349));
