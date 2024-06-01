const repeatString = function(string, num){
        let result = '';
        
            for(let i = 0; i < num; i++){
                result += string;    
            }   
            return result;  
        
};

//const repeatedString = repeatString(string, -1);
// const repeatedString1 =  repeatString('hey', 3);
// console.log(repeatedString1);
// const repeatedString2 =  repeatString('hello', 10);
// console.log(repeatedString2);
// const repeatedString3 =  repeatString('hi', 1);
// console.log(repeatedString3);
// const repeatedString4 =  repeatString('bye', 0);
// console.log(repeatedString4);

module.exports = repeatString;
