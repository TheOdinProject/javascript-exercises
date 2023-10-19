//This File Contains the Challenges Answers for this Course 

//Challeng - 1

let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.93;

let BMIMark = (78/(1.69*1.69));
let BMIJohn = (92/(1.93*1.93));

console.log(BMIMark);
console.log(BMIJohn);

//bonus 
let markHigherBMI =(BMIMark>BMIJohn);
console.log(markHigherBMI);


//Challenge 2 

if(BMIJohn>BMIMark)
{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

else{
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
}

//Challemge 3 

/* Write your code below. Good luck! 🙂 */
const scoreDolphins =(96+108+89)/3;
const scoreKoalas =(88+91+110)/3;
console.log(scoreDolphins,scoreKoalas);

if(scoreDolphins>scoreKoalas)
{
    console.log("Dolphins win the trophy");
}
else if(scoreKoalas>scoreDolphins)
{
    console.log("Koalas win the trophy");
}
else if(scoreDolphins===scoreKoalas)
{
    console.log("Both win the trophy");
}


//Challenge 3 

// in if and else statements 

const bill = 430;
let total;
if(bill>=50 && bill<=300)
{
    tip=0.15*bill;
    total=tip+bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total} . `);
}
else{
    tip=0.20*bill;
    total=tip+bill;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total} . `);
}



// in ternary Operator 
// const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);