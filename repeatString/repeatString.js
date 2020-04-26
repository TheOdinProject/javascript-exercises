const repeatString = function(str, num) {
    let repeatString = ""
    for (let i = 1; i <= num; i++) {
        repeatString += str 
    } if ( num < 0){
        repeatString = 'ERROR'; }
return repeatString 
}

module.exports = repeatString
