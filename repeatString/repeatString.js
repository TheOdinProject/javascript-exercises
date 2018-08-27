const repeatString = function(phrase, repetitions) {
  let greeting = '';
  if (repetitions < 0) greeting = 'ERROR';
  if (repetitions == 0) greeting = '';
  for (let i = 1; i <= repetitions; i++) {
    greeting += phrase;
  }
return greeting;
}

module.exports = repeatString
