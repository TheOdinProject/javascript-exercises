const repeatString = function (repeatText, num) {
  if (num < 0) return 'ERROR';
  let text = '';
  for (let i = 0; i < num; i++) {
    text += repeatText;
  }
  return text;
};
const number = Math.floor(Math.random() * 1000);

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('hey', number);

// Do not edit below this line
module.exports = repeatString;
