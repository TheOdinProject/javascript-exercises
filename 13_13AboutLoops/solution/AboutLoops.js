const AboutLoops = function () {
  // 1. for loop
  for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
  }

  //2. while loop
  let i = 0;
  while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
  }

  //3. do...while loop
  let j = 0;
  do {
    console.log(j); // Output: 0, 1, 2, 3, 4
    j++;
  } while (j < 5);

  // 4. for...in
  const person = { name: "Alice", age: 25, job: "Engineer" };
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  // Output:
  // name: Alice
  // age: 25
  // job: Engineer

    //5. for...of 
    const numbers = [10, 20, 30, 40, 50];
    for (let number of numbers) {
        console.log(number); // Output: 10, 20, 30, 40, 50
    }

};

// Do not edit below this line
export default AboutLoops;
