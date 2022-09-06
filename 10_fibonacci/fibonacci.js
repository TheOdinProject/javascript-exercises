const fibonacci = function (d) {
  let order = +d;
  if (order <= 0) {
    return "OOPS";
  } else {
    if (order === 1) {
      return 1;
    } else {
      let prev = 0;
      let next = 1;
      let result;
      for (i = 2; i <= order; i++) {
        result = prev + next;
        prev = next;
        next = result;
      }
      return result
    }
  }
};

// Do not edit below this line
module.exports = fibonacci;
