const leapYears = function (year) {
    let isYearDevisibleByFour = year % 4 === 0;
    let isCentury = year % 100 === 0;
    let isYearDevisibleByFourHundred = year % 400 === 0;
    if (isYearDevisibleByFourHundred || !isCentury && isYearDevisibleByFour) {
        return true;
    }
    else {
        return false;
    }
};

module.exports = leapYears;
