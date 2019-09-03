function leapYears(year) {
  
  if (year % 4 === 0 && year % 100 > 0) {
    console.log("leap");
  } else {
    if (year % 400 === 0) {
      console.log("leap 2");
    } else {
      console.log("not leap");
    }
  }
  
}
leapYears(800);