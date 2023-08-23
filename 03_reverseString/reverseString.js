const reverseString = function(string) {
    return string.split("").reverse().join("");

    //solution 2 :
    // let array = string.split("");
    // let n = string.length;
    // for(let i = 0 ;i < n/2 ;i++){
    //     let temp = array[n - 1 - i];
    //     array[n - 1 - i] = array[i];
    //     array[i] = temp;
    // }
    // return array.join('');

    // solution 3 :
    // let array = string.split("");
    // let n = string.length;
    // let res = "";
    // for(let i = n - 1 ; i >= 0 ;i--){
    //     res += array[i];
    // }
    // return res;
};

// Do not edit below this line
module.exports = reverseString;
