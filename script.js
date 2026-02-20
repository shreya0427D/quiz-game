// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Paris", correct: true },
      { text: "Berlin", correct: false },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is called the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false },
    ],
  },
  {
    question: "Which is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Banana", correct: true },
    ],
  },
  {
    question: "Chemical symbol for Gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
    ],
  },
  {
    question: "Founder of Microsoft?",
    answers: [
      { text: "Steve Jobs", correct: false },
      { text: "Bill Gates", correct: true },
      { text: "Elon Musk", correct: false },
      { text: "Mark Zuckerberg", correct: false },
    ],
  },
  {
    question: "HTML stands for?",
    answers: [
      { text: "HighText Machine Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Which company developed Java?",
    answers: [
      { text: "Google", correct: false },
      { text: "Sun Microsystems", correct: true },
      { text: "Microsoft", correct: false },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "Fastest land animal?",
    answers: [
      { text: "Horse", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Lion", correct: false },
      { text: "Tiger", correct: false },
    ],
  },
  {
    question: "Which data structure follows FIFO?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false },
    ],
  },
  {
    question: "Binary number system base is?",
    answers: [
      { text: "2", correct: true },
      { text: "8", correct: false },
      { text: "10", correct: false },
      { text: "16", correct: false },
    ],
  },
  {
    question: "CPU full form?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Process Unit", correct: false },
      { text: "Control Processing Unit", correct: false },
      { text: "Computer Power Unit", correct: false },
    ],
  },
  {
    question: "Which is the brain of the computer?",
    answers: [
      { text: "RAM", correct: false },
      { text: "Hard Disk", correct: false },
      { text: "CPU", correct: true },
      { text: "Monitor", correct: false },
    ],
  },
  {
    question: "JavaScript is mainly used for?",
    answers: [
      { text: "Styling websites", correct: false },
      { text: "Making web pages interactive", correct: true },
      { text: "Database storage", correct: false },
      { text: "Server hardware", correct: false },
    ],
  },
  {
    question: "Which language is used for web design?",
    answers: [
      { text: "C++", correct: false },
      { text: "Python", correct: false },
      { text: "CSS", correct: true },
      { text: "Java", correct: false },
    ],
  },
{
  question: "Which gas do plants absorb for photosynthesis?",
  answers: [
    { text: "Oxygen", correct: false },
    { text: "Carbon Dioxide", correct: true },
    { text: "Nitrogen", correct: false },
    { text: "Hydrogen", correct: false },
  ],
},
{
  question: "Smallest prime number?",
  answers: [
    { text: "0", correct: false },
    { text: "1", correct: false },
    { text: "2", correct: true },
    { text: "3", correct: false },
  ],
},
{
  question: "Which device is used to measure temperature?",
  answers: [
    { text: "Barometer", correct: false },
    { text: "Thermometer", correct: true },
    { text: "Hygrometer", correct: false },
    { text: "Speedometer", correct: false },
  ],
},
{
  question: "How many continents are there?",
  answers: [
    { text: "5", correct: false },
    { text: "6", correct: false },
    { text: "7", correct: true },
    { text: "8", correct: false },
  ],
},
{
  question: "Which is the largest planet in our solar system?",
  answers: [
    { text: "Earth", correct: false },
    { text: "Mars", correct: false },
    { text: "Jupiter", correct: true },
    { text: "Saturn", correct: false },
  ],
},
{
  question: "Who invented the telephone?",
  answers: [
    { text: "Thomas Edison", correct: false },
    { text: "Alexander Graham Bell", correct: true },
    { text: "Nikola Tesla", correct: false },
    { text: "Albert Einstein", correct: false },
  ],
},
{
  question: "Which part of the plant conducts photosynthesis?",
  answers: [
    { text: "Root", correct: false },
    { text: "Stem", correct: false },
    { text: "Leaf", correct: true },
    { text: "Flower", correct: false },
  ],
},
{
  question: "Which language is used for Android development?",
  answers: [
    { text: "Swift", correct: false },
    { text: "Kotlin", correct: true },
    { text: "Ruby", correct: false },
    { text: "PHP", correct: false },
  ],
},
{
  question: "Which country is known as the Land of Rising Sun?",
  answers: [
    { text: "China", correct: false },
    { text: "Japan", correct: true },
    { text: "Thailand", correct: false },
    { text: "Korea", correct: false },
  ],
},
{
  question: "Which organ pumps blood in human body?",
  answers: [
    { text: "Brain", correct: false },
    { text: "Lungs", correct: false },
    { text: "Heart", correct: true },
    { text: "Kidney", correct: false },
  ],
},
{
  question: "What does RAM stand for?",
  answers: [
    { text: "Random Access Memory", correct: true },
    { text: "Rapid Access Memory", correct: false },
    { text: "Read Access Memory", correct: false },
    { text: "Run Access Memory", correct: false },
  ],
},
{
  question: "Which planet has rings?",
  answers: [
    { text: "Mars", correct: false },
    { text: "Earth", correct: false },
    { text: "Saturn", correct: true },
    { text: "Mercury", correct: false },
  ],
},
{
  question: "Which is the longest river in the world?",
  answers: [
    { text: "Amazon", correct: false },
    { text: "Nile", correct: true },
    { text: "Ganga", correct: false },
    { text: "Yangtze", correct: false },
  ],
},
{
  question: "Which symbol is used for comments in JavaScript?",
  answers: [
    { text: "//", correct: true },
    { text: "##", correct: false },
    { text: "<!-- -->", correct: false },
    { text: "**", correct: false },
  ],
},
{
  question: "Which metal is liquid at room temperature?",
  answers: [
    { text: "Iron", correct: false },
    { text: "Mercury", correct: true },
    { text: "Aluminum", correct: false },
    { text: "Copper", correct: false },
  ],
},

];

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}