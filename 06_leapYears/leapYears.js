const leapYears = function (number) {
  if (number % 400 === 0) {
    return true;
  } else if (number % 100 === 0) {
    return false;
  } else if (number % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
