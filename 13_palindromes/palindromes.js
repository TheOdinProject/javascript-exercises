const palindromes = function (str) {
    let l = 0;
    let r = str.length-1;

    const newStr = str.toLowerCase();

    while (l < r){
        while("!¡?¿.,-´ '".includes(newStr[l])){
            l+=1;
        }

        while("!¡?¿.,-´ '".includes(newStr[r])){
            r-=1;
        }
        if(newStr[l] !== newStr[r]){
            return false;
        }
        l+=1;
        r-=1;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
