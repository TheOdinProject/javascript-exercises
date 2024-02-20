const reverseString = function(str) {
    let strArray = Array.from(str);
    let strLen = str.length;
    let reversedString = '';

    if(str != ""){
        for(let x=strLen-1; x>=0;x--){
            reversedString+= strArray[x];
        }
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
