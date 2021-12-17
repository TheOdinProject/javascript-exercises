const leapYears = function(...theArgs) {
    // > Leap years are years divisible by four (like 1984 and 2004). 
    // However, years divisible by 100 are not leap years (such as 1800 and 1900) 
    // unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 
    
    //Initialize result variable
    var result = null
    //Test to ensure input is valid year
    const valid = theArgs.every(e => Number.isInteger(e) && e > 0);
    //Initialize a year variable
    const year = Math.floor(theArgs[0]);
    // Check year/4 and fail if not eligible
    if (valid && (year % 4) == 0) {
        result =  true
        // check if century and not @ 400 interval
        if ((year % 100) == 0 && (year % 400) != 0) {
          result = false;
        }
    } else {
        result =  false
    }
return result
};

// Do not edit below this line
module.exports = leapYears;
