const leapYears = function(year) {
    return year % 4 == 0 && (year % 400 == 0 || year % 100 !== 0);
};



// Do not edit below this line
module.exports = leapYears;

/*

const divOneHundred = year / 100;
    const divFourHundred = year / 400;
    if (year % 100 == 0 && year % 400 == 0) {
        return false;
    } else if (year % 4 == 0 || Math.round(divFourHundred) == divFourHundred) {
        return true;
    } else {
        return false;
    }




console.log(1600 % 400);

1800 % 400 = 200 (remainder)
1600 % 400 = 0

1600 / 400 = 4 = num//true
1900 / 400 = 4.75 = num//false
Math.round(num) == num
*/