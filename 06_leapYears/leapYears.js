const leapYears = function (year) {
  //   if (year % 4 === 0) {
  //     if (year % 100 === 0) {
  //       if (year % 400 === 0) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       return true;
  //     }
  //   } else {
  //     return false;
  //   }

  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
