const leapYears = function (year) {
    if(year % 4 === 0) {
        if (year % 100 === 0) {
            if(year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    }

    return false;
};

// Do not edit below this line

// Leap years are years divisible by four
// However, years divisible by 100 are not leap years 
// unless they are divisible by 400 

module.exports = leapYears;
