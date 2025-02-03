const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2
  },
  {
    question: "Who wrote 'Hamlet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
    correctAnswer: 1
  },
  {
    question: "What is the smallest planet in our solar system?",
    choices: ["Earth", "Mars", "Mercury", "Venus"],
    correctAnswer: 2
  },
  {
    question: "What is the chemical symbol for water?",
    choices: ["O2", "H2O", "CO2", "NaCl"],
    correctAnswer: 1
  },
  {
    question: "How many continents are there on Earth?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: 2
  },
  {
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: 2
  },
  {
    question: "How many elements are there in the periodic table?",
    choices: ["112", "118", "120", "126"],
    correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  console.log(`\n${currentQuestion.question}`);
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    console.log(`${i + 1}. ${currentQuestion.choices[i]}`);
  }
  rl.question('Please select an answer (1-4): ', checkAnswer);
}

function checkAnswer(answer) {
  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = parseInt(answer) - 1;

  if (userAnswer === currentQuestion.correctAnswer) {
    score++;
    console.log("Correct!");
  } else {
    console.log(`Wrong! The correct answer was ${currentQuestion.choices[currentQuestion.correctAnswer]}.`);
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    console.log(`\nQuiz over! You scored ${score} out of ${questions.length}.`);
    rl.close();
  }
}

// Start the quiz
console.log("Welcome to the Quiz App!");
displayQuestion();
