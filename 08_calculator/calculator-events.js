const display = document.getElementById('display');
let currentInput = '';

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.innerText));
});

function handleButtonClick(value) {
  switch (value) {
    case 'C':
      currentInput = '';
      break;
    case '←':
      currentInput = currentInput.slice(0, -1);
      break;
    case '=':
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = 'Error';
      }
      break;
    default:
      currentInput += value;
      break;
  }

  display.innerText = currentInput;
}
