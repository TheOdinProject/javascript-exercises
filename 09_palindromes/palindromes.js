const palindromes = function (string) {
    let strng = string.replace(/[^\w\']|_/g,'').toLowerCase()
    let reverse = strng.split('').reverse().join('');
    return (reverse === strng)
};

palindromes('ASDsdfsdf!!')
// Do not edit below this line
module.exports = palindromes;
