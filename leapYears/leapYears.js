const leapYears = function (checkLeapYear) {
  if (checkLeapYear % 100 === 0 && checkLeapYear % 400 === 0) {
    return true;
  } else if (checkLeapYear % 4 === 0 && checkLeapYear % 100 !== 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;
