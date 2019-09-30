function palindrome(word) {
  let array = [];
  let readThis = word.toLowerCase();

  for (i = 0; i < readThis.length; i++) {
    if (word.charAt(i) === "!" || word.charAt(i) === " " || word.charAt(i) === "," || word.charAt(i) === '.') {
      continue;
    }
    array.push(readThis.charAt(i));
  } // array should not have the ! character now e.g. from kecak! to [k,e,c,a,k]

  let copyArray = [...array]; //ES6 style copy
  let newArray = [];

  while (copyArray.length != 0) {
    newArray.push(copyArray.pop());
  } // should be [k,a,c,e,k]

  console.log("array: " + array);
  console.log("newArray: " + newArray);

  let word1 = array.toString();
  let word2 = newArray.toString();

  if (word1 == word2) {
    console.log("it's a palindrome!");
  } else {
    console.log("it's NOT a palindrome!");
  }
}

palindrome("ZZZZ car, a man, a maraca.");