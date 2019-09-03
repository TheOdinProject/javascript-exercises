const leapYears = function(year) {

  if (year % 4 === 0 && year % 100 > 0) {
    // console.log("leap");
    return true;
  } else {
    if (year % 400 === 0) {
      // console.log("leap 2");
      return true;
    } else {
      // console.log("not leap");
      return false;
    }
  }

}

module.exports = leapYears
