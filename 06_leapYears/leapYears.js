const leapYears = function(year) {
    if (!Number.isInteger(year)){
        return 'not int'
    } else {
        return (year % 4 == 0 && year % 100 !=0 || year % 400 == 0)?true:false
    }
};
console.log(leapYears(1996))
// Do not edit below this line
module.exports = leapYears;
