const sumAll = function(num1, num2) {
        if(num1 <= 0 ){
            return "ERROR"; 
        } else if(num1 < num2 && typeof(num1) === 'number' && typeof(num2) === 'number' ) {
            //variable initialisation (int or string)
            let sum = 0;
            for ( let i= num1; i<= num2; i++){
            //operation on variable
            sum += i;
            }
            return sum;
        } else if (num2 < num1 && typeof(num1) === 'number' && typeof(num2) === 'number' ){
            let sumR = 0;
            for ( let i= num2; i<= num1; i++){
                sumR += i;
            }
            return sumR;
        } else {
            return "ERROR";
        }
};

sumAll(5, 7) 
sumAll(7, 5) 

module.exports = sumAll;
