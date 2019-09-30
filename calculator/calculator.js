function add (num1, num2) {
	let value1 = num1;
	let value2 = num2;
	let total = num1 + num2;
	return total;
}

function subtract (num1, num2) {
	let value1 = num1;
	let value2 = num2;
	let total = num1 - num2;
	return total;
}

function sum (numbersArray) {
	let testValue = numbersArray[0];
  if (testValue === undefined) {
    return 0;
  } else {
    let arrayLength = numbersArray.length;
    let totalSum = 0;
    for (i = 0; i < arrayLength; i++) {
      totalSum = totalSum + numbersArray[i];
    }
    return totalSum;
  }
}

function multiply (numbersArray) {
	let testValue = numbersArray[0];
  if (testValue === undefined) {
    return 0;
  } else {
    let arrayLength = numbersArray.length;
    console.log("array length : " + arrayLength);
    let totalMultiply = 1;
    console.log("early total sum : " + totalMultiply);
    for (i = 0; i < arrayLength; i++) {
      totalMultiply = totalMultiply * numbersArray[i];
      console.log("loop " + i + " current " + totalMultiply);
    }
    return totalMultiply;
  }
}

function power(number, power) { // (2,4)
  const number1 = number; //2
  let power1 = power; //4
  let total = number; //2

  for (i = 0; i < power - 1; i++) {
    //power-1 = 3
    total = total * number1;
    console.log(
      "loop : " + i + " / number1 : " + number1 + " / total : " + total
    );
    // i=0, number1=2, total=4
    // i=1, number1=2, total=8
    // i=2, number1=2, total=8*2=16
    // i=3, endloop total=16
  }
  return total;
}

function factorial(factorialNo) {
  let total = factorialNo;
  let minusTotal = factorialNo - 1;
  if (total === 0 || total === 1) {
    return 1;
  } else {
    for (i = total; i != 1; i--) {
      total = total * minusTotal;
      minusTotal--;
      console.log(
        "loop : " + i + "/ total : " + total + "/ minustotal : " + minusTotal
      );
      // i=3, total=3, total*minustotal=3*2, minustotal=1
      // i=2, total=6, total*minustotal-6*1, minustotal=0
      // i=1
    }
  }
  return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}