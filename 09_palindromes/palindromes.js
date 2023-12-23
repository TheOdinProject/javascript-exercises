const palindromes = function(str) {
    let strL = str.toString().toLowerCase().toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/[\W_]+/g, "");
     let newStr = '';
    for(i = strL.length; i >= 0; i--){
        newStr += strL.charAt(i);
        // console.log(newStr)
    }
    if (strL === newStr) {
        return true;
    } else {
        return false;
    }
};
palindromes('lid off a daffodil') // true
palindromes('tacos') // false
// Do not edit below this line
module.exports = palindromes;
