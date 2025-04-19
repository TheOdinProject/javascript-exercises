const leapYears = (a) => {
    return ((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0);
};

// Do not edit below this line
module.exports = leapYears;
