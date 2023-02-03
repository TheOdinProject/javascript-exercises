const palindromes = function (input) {
   let validate =/[\W_]/g;
   let newInput = input.toLowerCase().replace(validate, "");
   let reversedInput = newInput.split("").reverse().join("");
   if (reversedInput == newInput) {
     return true;
   }else{  
     return false;
   }
   };



// Do not edit below this line
module.exports = palindromes;
