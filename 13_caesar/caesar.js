const caesar = function (str, encode) {
  let arr = str.split("");
  let arrToCode = arr.map(function (c) {
    return c.charCodeAt();
  });

  encode = encode % 26;

  let encodedArr = arrToCode.map(function (num) {
    if (97 <= num && num <= 122) {
      if (num + encode > 122) {
        return 97 + (num + encode - 123);
      } else if (num + encode < 97) {
        return 122 + (num + encode - 96);
      } else {
        return num + encode;
      }
    } else if (65 <= num && num <= 90) {
      if (num + encode > 90) {
        return 65 + (num + encode - 91);
      } else if (num + encode < 65) {
        return 90 + (num + encode - 64);
      } else {
        return num + encode;
      }
    } else {
      return num;
    }
  });
  let encodedChar = encodedArr.map(function (d) {
    return String.fromCharCode(d);
  });

  return encodedChar.join("");
};

// Do not edit below this line
module.exports = caesar;
