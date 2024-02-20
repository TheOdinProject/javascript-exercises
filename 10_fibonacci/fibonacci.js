const fibonacci = function (sequenceValue) {
  const sequenceNum = parseInt(sequenceValue);

  if (sequenceNum < 0) {
    return "OOPS";
  } else if (sequenceNum === 0) {
    return 0;
  } else {
    let firstNum = 0;
    let nextNum = 1;
    let sum = 0;
    //fibonacci algo
    for (let x = 1; x < sequenceNum; x++) {
      sum = nextNum + firstNum;
      console.log(firstNum + "\t" + nextNum + "\t" + sum);
      firstNum = nextNum;
      nextNum = sum;
    }

    return nextNum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
