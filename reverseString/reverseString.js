const reverseString = function(str) {
  let temp =  str.split("");
  let temp2 = temp.reverse();
  let ans = temp2.join("");
 
  return ans;
}

module.exports = reverseString
