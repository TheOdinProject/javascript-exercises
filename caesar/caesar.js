const caesar = function (str, num) {
    num = num%25;
    return str.split('').map(x => {
        if(x == ','
            || x == '!'
            || x == ' '){return x}
        let asciNum = wrap(Number(x.charCodeAt()) + num);
        return String.fromCharCode(asciNum)
    }).join('');
}

function wrap(num){
    if (num < 97 && num > 90){
        return num = num%90 + 64;
    }else if(num > 122){
        return num = num % 122 + 96;
    } else { 
        return num;
    }
}

module.exports = caesar
