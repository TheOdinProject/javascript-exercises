const leapYears = function(year) {
    let isLeapYear = false; 
    if (year%400 == 0) {
        return isLeapYear= true;
    }
    if (year%100 == 0) {
        return isLeapYear= false;
    }
    if (year%4 == 0) {
        return isLeapYear= true;
    } 
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;



// Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 1800 and 1900) 
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years) 

// leapYears(2000) // is a leap year: returns true
// leapYears(1985) // is not a leap year: returns false