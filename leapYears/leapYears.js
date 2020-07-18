const leapYears = function(yearToCheck) {

    let isALeapYear = true;

    if (yearToCheck % 4 === 0 && yearToCheck % 400 === 0) {
        return true;
    }

    if (yearToCheck % 4 === 0 && yearToCheck % 100 != 0) {
        return true;
    }



    return false;

}

module.exports = leapYears