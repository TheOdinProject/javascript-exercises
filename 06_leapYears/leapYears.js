const leapYears = function(year) {
  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // If it is divisible by 100, check if it is also divisible by 400
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;

};
console.log(leapYears(2000)); // Output: true

// Do not edit below this line
module.exports = leapYears;
