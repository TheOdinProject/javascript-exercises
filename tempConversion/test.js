function ftoc(fahrenheit) {
  
  // let celcius = ((fahrenheit-32)*5/9).toFixed(1);
  // let fixed = celcius.toFixed(1);
  //tofixed converts number to string - problem, UI is OK
  // let celcius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
  // let fixed = parseInt(celcius).toFixed(1);

  let celcius = ((fahrenheit - 32) * 5) / 9;
  let rounded1 = Math.round(celcius * 10) / 10;

  console.log(typeof rounded1);
  console.log(rounded1); 
  
} 

function ctof(celcius) {

  let fahrenheit = ((celcius * 9 / 5) + 32);
  let rounded2 = Math.round(fahrenheit * 10) / 10;

  console.log(typeof rounded2);
  console.log(rounded2);
  
}

ftoc(32);
ftoc(100);
ftoc(-100);
ctof(0);
ctof(73.2);
ctof(-10);