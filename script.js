var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("answer-text"));
var scoreText = document.getElementById("score");
var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
  {
    question: "What is 6 + 0?",
    choice1: "3",
    choice2: "6",
    choice3: "2",
    choice4: "4",
    answer: 2,
  },
  {
    question: "What is 1 + 4?",
    choice1: "5",
    choice2: "1",
    choice3: "2",
    choice4: "4",
    answer: 1,
  },
  {
    question: "What is 1 + 7?",
    choice1: "0",
    choice2: "8",
    choice3: "3",
    choice4: "4",
    answer: 2,
  },
  {
    question: "What is 0 + 0?",
    choice1: "0",
    choice2: "NaN",
    choice3: "2",
    choice4: "4",
    answer: 1,
  },
  {
    question: "What is 1 + 0?",
    choice1: "0",
    choice2: "1",
    choice3: "2",
    choice4: "NaN",
    answer: 2,
  },
  {
    question: "What is 2 + 2?",
    choice1: "0",
    choice2: "1",
    choice3: "2",
    choice4: "4",
    answer: 4,
  },
  {
    question: "What is 1 + 1?",
    choice1: "0",
    choice2: "0.2",
    choice3: "2",
    choice4: "4",
    answer: 3,
  },
  {
    question: "What is 1 + 0?",
    choice1: "11",
    choice2: "1",
    choice3: "2",
    choice4: "4",
    answer: 2,
  },
  {
    question: "What is 1 + 3?",
    choice1: "3",
    choice2: "1",
    choice3: "8",
    choice4: "4",
    answer: 4,
  },
  {
    question: "What is 1 + 2?",
    choice1: "3",
    choice2: "8",
    choice3: "2",
    choice4: "6",
    answer: 1,
  },
  {
    question: "What is 1 + 3?",
    choice1: "0",
    choice2: "1",
    choice3: "2",
    choice4: "4",
    answer: 4,
  },
];

var CORRECT_BONUS = 10;
var MAX_QUESTIONS = 11;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./finish.html");
  }
  questionCounter++;
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach((choice) => {
    var number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    var selectedChoice = e.target;
    var selectedAnswer = selectedChoice.dataset["number"];
    var classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";

      incrementScore(CORRECT_BONUS);
    }
    getNewQuestion();
  });
});

function incrementScore(num) {
  score = score + num;
  scoreText.innerText = score;
}

startGame();
