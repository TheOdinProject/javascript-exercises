function repeatString(string, num) {
    let result = '';
        if (num < 0) return 'ERROR';
       
        for (let i = 0; i < num; i++) {
           
            result += string;
        }
        return result;
}


module.exports = repeatString;
