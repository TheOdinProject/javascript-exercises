const caesar = function (clearStr, key) {
  let strArr = clearStr.split("");

  for (let i = 0; i < strArr.length; i++) {
    const charCode = strArr[i].charCodeAt();

    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      strArr[i] = String.fromCharCode(
        mod(charCode + key - codeSet(charCode), 26) + codeSet(charCode)
      );
    }
  }
  //  return matchArr
  return strArr.join("");
};

const codeSet = (code) => (code < 97 ? 65 : 97);
const mod = (n, m) => ((n % m) + m) % m;

module.exports = caesar;
