const repeatString = function(word , times) {
    let str = '';
    if ( times < 0) return 'ERROR';

    for( let i = 0 ; i < times ; i++){
        str += word;
    }
    return str;

}

module.exports = repeatString
