const leapYears = function(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0) {
        if (year % 100 === 0) {
            return false;
        } else {
            return true;
        }
    } return false;
}

testPrint = leapYears(400);
console.log(testPrint);

// Do not edit below this line
module.exports = leapYears;
