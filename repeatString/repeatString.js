const repeatString = function(str,times) {
    let addString = '';
    if(times>=0){
        for (let i = 0; i < times; i++) {
            addString += str;
        }
    }
    else{
        addString = 'ERROR';
    }
    return addString;
}

module.exports = repeatString
