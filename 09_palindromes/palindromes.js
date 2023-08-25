const palindromes = function (string) {
    // replace(str1 , str2) replaces all str1 with str2.
    let processedString = string.toLowerCase().replace(/[^a-z0-9]/g,"");
    return processedString == processedString.split('').reverse().join('');

    // Solution 2 : 

    // let str = string.toLowerCase();
    // let myArray = str.split('');
    // let temp = "";
    // let n = myArray.length;
    // for(let i = 0 ;i < n ;i++){
    //     if(myArray[i]>= 'a' && myArray[i] <= 'z' || myArray[i] <= '9' && myArray[i] >= '0'){
    //         temp += myArray[i];
    //     }
    // }
    // return temp == temp.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
