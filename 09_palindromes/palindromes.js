const palindromes = function (string) {
    let regex = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g
    string = string.replace(regex, '').toLowerCase()
    let array = string.split('')
    let length = array.length
    let isPalindrome = true
    for(let i = 0;i<length;i++)
    {
        console.log(`is ${array[i]} the same as ${array[(length-1)-i]}`)
        if(array[i] !==array[(length-1)-i])
        {
            isPalindrome = false
        }
    }
    return isPalindrome
};

// Do not edit below this line
module.exports = palindromes;
