const palindromes = function (isPalindrome) {
    let isPalindromeCleaned = isPalindrome.toLowerCase().replace(/[^a-z]/g, '')
    let args = Array.isArray(isPalindromeCleaned[0]) ? isPalindromeCleaned[0] : Array.from(arguments)
    let argsInverted=[]
    for (let i=args.length-1;i>=0;i--){
        argsInverted.push(args[i])
        }
        
    return true ? args.join('')===argsInverted.join('') : false

};

// Do not edit below this line
module.exports = palindromes;
