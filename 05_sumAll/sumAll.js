const sumAll = function(lowNum,highNum) {
    if(highNum<lowNum){
        let temp = lowNum;
        lowNum = highNum;
        highNum = temp;
    }

    if(lowNum < 0){
        return "ERROR";
    }

    let totalNum = 0;
    if(typeof lowNum === 'number' && 
        typeof highNum === 'number'
    ){
        console.log(totalNum);
        for(let x=lowNum;x<=highNum;x++){
            totalNum += x;
            
        }
        console.log(totalNum);
    } else {
        return  "ERROR";
    }
    
    return totalNum;
};


// Do not edit below this line
module.exports = sumAll;
