const reverseString = function(str) {
    let rts='';
    for (let index = str.length-1; index>=0; index--) {
        rts=rts + str.substr(index,1);        
    }
    return rts;
}

module.exports = reverseString
