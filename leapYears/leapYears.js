const leapYears = function(date) {
  if (date % 4 === 0) {
    if (date % 100 === 0 && date % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

module.exports = leapYears
