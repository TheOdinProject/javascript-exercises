const reverseString = function(string) {
    arr = new Array();
    char = new Array();
    arr = string.split('');
    len = string.length;
    //this doesn't work, use a while loop
    for(let i = 0; i<(string.length)/2; i++){
        let cur = arr[i];
        let tail = arr[string.length-1 - i];
        let temp = cur;
        arr[i] = tail;
        arr[string.length-1 - i] = temp;
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
