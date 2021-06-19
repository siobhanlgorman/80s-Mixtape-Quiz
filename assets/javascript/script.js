const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('answer-text'));
const questionCounterContent = document.getElementById('current-question');
const scoreContent = document.getElementById('current-score');

let questionCounter = 0; // variable for question number user is on starts at 0 link to counter element
let score = 0 // variable for score starts at 0
let currentQuestion = {};

let acceptingAnswers = true; //delay before next question generated

let availableQuestions = [] // full array of questions

const max_questions = 6;


// starts the game -- function adapted from James Q Quick tutorial see Readme for full credit
function runGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  displayQuestion();
};

// displays new question  function adapted from James Q Quick tutorial
function displayQuestion() {

  // if question counter has reached max questions function should not run
  // if (questionCounter == maxQuestions) {
    
  // }

  // question counter increments by one after each time code runs
  questionCounter++;
  questionCounterContent.innerText = questionCounter + "/" + max_questions;

  //random question generated from available questions array
  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;


  // code adapted from James Q Quick tutorial
  // access answer text content via data attribute
  choices.forEach(function (choice) {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];

  });

  // remove already used question from array selection
  availableQuestions.splice(question.Index, 1);
  acceptingAnswers = true;

};

// forEach method to check what answer the user has chosen by click (adapted from James Q Quick tutorial)

choices.forEach(function (choice) {
  choice.addEventListener('click', function (event) {
    if (!acceptingAnswers) return; // function ends if not accepting answers
    acceptingAnswers = false; //
    const userAnswer = event.target; //variable for the user selection
    const correctAnswer = userAnswer.dataset.number; //variable for the correct answer

    //check user selection against correct answer
    // apply class to user answer to turn answerbox background colour red or green display tick or cross?
    let classToApply = 'incorrect';
    if (correctAnswer === currentQuestion.answer) {
      classToApply = 'correct';
      userAnswer.parentElement.classList.add(classToApply);

    } else {

      let classToApply = 'incorrect';
      userAnswer.parentElement.classList.add(classToApply)
    }

    if (classToApply === "correct") {
        incrementScore(+1);
    }
      
    

    // set delay of 1.5 seconds before colour removed and new question displays
    setTimeout(function () {
        userAnswer.parentElement.classList.remove(classToApply);
        displayQuestion();
      },
      1500);

   
  });
});

//increments the correct answer score after each question
function incrementScore(num) {
   score += num;
   scoreContent.innerText = score;

};




// start the quiz
runGame();







// increments the question number when new question is generated

function incrementQuestionNumber() {

}


// displays message at end of game
function endGameMessage() {

}