const sumAll = function(number1,number2) {
    if (number1<0 || number2<0 ){
        return 'ERROR';
    }
    else if (typeof number1 != 'number' || typeof number2 != 'number'){ 
       return 'ERROR';
    }
    else {       
        if (number2>number1){
            let sum=0;
            for (let index = number1; index <= number2; index++) {
                sum=sum+index;
            }
            return sum;
        }
        else{
            let sum=0;
            for (let index = number2; index <= number1; index++) {
                sum=sum+index;
            }
            return sum;
        }   
    }    
}

module.exports = sumAll
