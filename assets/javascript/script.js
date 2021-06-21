const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('answer-text'));
const questionCounterContent = document.getElementById('current-question');
const scoreContent = document.getElementById('current-score');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button')
const finalScore = document.getElementById('f-score')
const endMessage = document.getElementById('final-message')

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
  scoreContent.innerText = 0 + '/' + max_questions;
  availableQuestions = [...questions];
  displayQuestion();
};

// displays new question  function adapted from James Q Quick tutorial
function displayQuestion() {
  if (questionCounter < max_questions) {
   
  // question counter increments by one after each time code runs
  questionCounter++;
  questionCounterContent.innerText = questionCounter + "/" + max_questions;

  //random question generated from available questions array
  const questionIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // access answer text content via data attribute
  choices.forEach(function (choice) {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];

  });

  // remove already used question from array selection
  availableQuestions.splice(question.Index, 1);
  acceptingAnswers = true;
  }
};


// check what answer the user has chosen by click (adapted from James Q Quick tutorial)
choices.forEach(function (choice) {
  choice.addEventListener('click', function (event) {
    if (!acceptingAnswers) return; // function ends if not accepting answers
    acceptingAnswers = false; //
    const userAnswer = event.target; //variable for the user selection
    const correctAnswer = userAnswer.dataset.number; //variable for the correct answer

    //check user selection against correct answer
    // apply class to user answer to turn answerbox background colour red or green
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

    // if question counter has reached max questions modal displays
    if (questionCounter == max_questions) {
      endGameMessage()
      console.log('end game');
    };

    // if question counter has reached max questions no new question should generate



  });


});

//increments the correct answer score after each question
function incrementScore(num) {
  console.log(scoreContent)
  score += num;
  scoreContent.innerText = score + '/' + max_questions;

};



// Close the modal by clicking on x
closeButton.onclick = function () {
  modal.style.display = "none";
}


// displays modal at end of game
function endGameMessage() {
  finalScore.innerText = "You scored " + scoreContent.innerText;
  modal.style.display = "block";

}



// start the quiz
runGame();





//wait for elements to load before game starts??? where??? which elements?? should be in display question
// document.addEventListener("DOMContentLoaded", function()) {

// }




