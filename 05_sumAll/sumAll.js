const sumAll = function(int1, int2) {
    let intsToAdd = [int1, int2]
    let smallNum = int1; 
    let bigNum = int2;
    let sum = 0;


    for (let i = 0; i < intsToAdd.length; i++){
        if(typeof(int1) === 'number' && typeof(int2) === 'number' && intsToAdd[i] > 0){
            if(intsToAdd[i] >= bigNum && intsToAdd[i] >= smallNum){
                bigNum = intsToAdd[i]
            } else{
                smallNum = intsToAdd[i]
            }
        }else {
            return 'ERROR'
        }
    }

    
    for(let range = smallNum; range <= bigNum; range++){
        sum = range + sum
    }
    if (sum > 0){
        return sum
    } else {
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
