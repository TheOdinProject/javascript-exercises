const repeatString = function(string,num) {
    let temp = '';
    if (num<0) {
        return 'ERROR';
    }
    if (num==0||string.lenth==0) {
        return '';
    }
    do{
        temp+=string;
        num--;
    } while(num > 0)
    return temp;   
};

// Do not edit below this line
module.exports = repeatString;
