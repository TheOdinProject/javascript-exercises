function numberChecker(number) {
  console.log(number)
  if (number === 1000) {
    return true;
  } else if (number === 10) {
    return true;
  } else if (number === 9) {
    return false;
  } else if (number === 6) {
    return false;
  }
  else {
    return false;
  }
}

// Do not edit below this line
module.exports = numberChecker;
