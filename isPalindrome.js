//version 1 does not deal with spaces or non text - next rev
function getLongestPalindrome(strSentence){
    for (var intLeftIDX = 0; intLeftIDX < strSentence.length - 1; intLeftIDX++) {
        intRightIDX = strSentence.length - (intLeftIDX +1);
         // substring does not include the rightindex itself so + 1 to include it
        if (strSentence[intLeftIDX] == strSentence[intRightIDX] ) {
            strCheck = strSentence.substring(intLeftIDX,intRightIDX + 1 );
            // console.log("checking palindrome: " + strCheck);
            if (isPalindrome(strCheck)){
                return strCheck
            }
        }
    }
return null;
}

function isPalindrome(strCheck) {
    for (var lidx = 0; lidx < strCheck.length -1; lidx++) {
        strSubstr = strCheck.substring(lidx, strCheck.length - lidx);
        // console.log("Palindrome check: " + strSubstr);
        if (strCheck[lidx] != strCheck[strCheck.length - (lidx + 1)]) {
            // console.log("left: " + strCheck[lidx] + " right: " + strCheck[strCheck.length -(lidx +1)] );
            return false
        }

    }
    return true
}
console.log(getLongestPalindrome("dad"));
console.log(getLongestPalindrome("amanaplanacanalpanama"));
console.log(getLongestPalindrome("xamanaplanacanalpanamay"));

