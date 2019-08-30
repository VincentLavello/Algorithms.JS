function showDiff(date1, date2){

    var diff = (date2 - date1)/1000;
    diff = Math.abs(Math.floor(diff));

    var days = Math.floor(diff/(24*60*60));
    var leftSec = diff - days * 24*60*60;

    var hrs = Math.floor(leftSec/(60*60));
    var leftSec = leftSec - hrs * 60*60;

    var min = Math.floor(leftSec/(60));
    var leftSec = leftSec - min * 60;

    
setTimeout(showDiff,1000);
}
// var birthday = new Date("2006/07/20");
// var today = new Date();
// var birdayplus13 = new Date(birthday.getFullYear() + 13 , birthday.getMonth(), birthday.getDay());

// var diff = (today - birdayplus13)/1000;
// diff = Math.abs(Math.floor(diff));
// var years = Math.floor(diff/(24*60*60) / 365);
// var months = Math.floor(diff/(24*60*60));
// console.log("months" + months);
// console.log(years > 0 ? "Yes" : "No")
// console.log("difference: " + years);
// console.log("Today is: " + today);
// console.log(birdayplus13);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?source=post_page---------------------------