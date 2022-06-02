 const add=(num1,num2)=>{
        return num1+num2;
    }

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function(num,power) {
	let rez=1;
for(let i=1;i<=power;i++){
	rez*=num;	
};
return rez
}


const factorial = (num) =>{
    let res=1;
  
        for(i=1;i<=num;i++){
               res*=i;
        }


    return res;
    }
    

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
