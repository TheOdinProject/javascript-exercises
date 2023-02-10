function checkIfLetter(s)
{
    return s.toLowerCase() != s.toUpperCase();
}
const palindromes = function (str) {
    let s=0,e=str.length-1;
    str=str.toLowerCase()
    while(s<=e)
    {
        while(!checkIfLetter(str[s]))
        {
            s++;
        }
        while(!checkIfLetter(str[e]))
        e--;
        if(str[s]!=str[e])
        return false;
        s++;
        e--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
