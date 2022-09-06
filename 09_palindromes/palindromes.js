const palindromes = function (val) {
  /*
  let separatedBy = [" ", "!", ".", ","];
  let separated;
  let reversed;
  let joined = val;
  let removed

  for (i = 0; i < separatedBy.length; i++) {
    let temp = joined.split(separatedBy[i]);
    joined = temp.join("");
  }
  removed = joined.split("");
  for (i = removed.length - 1; i >= 0; i--) {
    reversed.push(separated[i]);
  }
  if (separated === reversed) {
    return true;
  } else {
    return false;
  }
  */
  let separatedBy = [" ", "!", ".", ","];
  let separated = val.toLowerCase().split("");
  let reversed = [];

  for (i = 0; i < separatedBy.length; i++) {
    separated = separated.filter(function (d) {
      return d != separatedBy[i];
    });
  }
  for (i = separated.length - 1; i >= 0; i--) {
    reversed.push(separated[i]);
  }
  if (separated.join("") === reversed.join("")) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
