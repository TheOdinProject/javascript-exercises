const findTheOldest = function (array) {
    let resultYearOfDeath

  let oldest = array.reduce(function (result, choice) {
    if (result.yearOfDeath === undefined) {
      let date = new Date();
      resultYearOfDeath = date.getUTCFullYear();
    } else {
        resultYearOfDeath = result.yearOfDeath
    }
    let resultAge = resultYearOfDeath - result.yearOfBirth;
    let choiceAge = choice.yearOfDeath - choice.yearOfBirth;

    choiceAge > resultAge ? result = choice : result = result

    return result;
  });
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
