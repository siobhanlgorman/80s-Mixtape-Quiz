/*jshint esversion: 8 */
// constant variables
const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName('answer-text'));
const questionCounterContent = document.getElementById('current-question');
const scoreContent = document.getElementById('current-score');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');
const finalScore = document.getElementById('f-score');
const endMessage = document.getElementById('final-message');
const playAgain = document.getElementById('play-again');
const max_questions = 6;

let questionCounter = 0; // variable for question number user is on starts at 0 link to counter element
let score = 0; // variable for score starts at 0
let displayedQuestion = {};
let answersAllowed = true; //delay before next question generated
let questionArray = []; // full array of questions

// starts the game -- function adapted from James Q Quick tutorial see Readme for full credit
function runGame() {

  questionCounter = 0;
  score = 0;
  scoreContent.innerText = '0 /' + max_questions;
  questionArray = [...questions];
  displayQuestion();
}

// displays new question  function adapted from James Q Quick tutorial
function displayQuestion() {
  if (questionCounter < max_questions) {

    // question counter increments by one after each time code runs
    console.log(questionCounter)
    questionCounter++;
    questionCounterContent.innerText = questionCounter + "/" + max_questions;
    console.log(questionCounter)

    //random question generated from available questions array
    const questionIndex = Math.floor(Math.random() * questionArray.length);
    displayedQuestion = questionArray[questionIndex];
    question.innerText = displayedQuestion.question;
    console.log(displayedQuestion)

    // access answer text content via data attribute
    options.forEach(function (option) {
      const number = option.dataset["number"];
      option.innerText = displayedQuestion["option" + number];

    })

    // remove already used question from array selection
    questionArray.splice(questionIndex, 1);
    answersAllowed = true;

  }
}

// check what answer the user has chosen by click (adapted from James Q Quick tutorial)
options.forEach(function (option) {
  option.addEventListener('click', function (event) {
    if (!answersAllowed) return; // function ends if not accepting answers
    answersAllowed = false; //
    const userAnswer = event.target; //variable for the user selection
    const correctAnswer = userAnswer.dataset.number; //variable for the correct answer

    //check user selection against correct answer
    // apply class to user answer to turn answerbox background colour red or green
    let classToApply = 'incorrect';
    if (correctAnswer === displayedQuestion.answer) {
      classToApply = 'correct';
      userAnswer.parentElement.classList.add(classToApply);

    } else {

      let classToApply = 'incorrect';
      userAnswer.parentElement.classList.add(classToApply);
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

    console.log(questionCounter);

    // if question counter has reached max questions modal displays
    if (questionCounter == max_questions) {
      endGameMessage();
      console.log('end game');
    }

    console.log(questionCounter);

    // if question counter has reached max questions no new question should generate

  });

});

//increments the correct answer score after each question
function incrementScore(num) {
  console.log(scoreContent);
  score += num;
  scoreContent.innerText = score + '/' + max_questions;
}

// Close the modal by clicking on x
closeButton.onclick = function () {
  modal.style.display = "none";
};

console.log(questionCounter)
// displays modal at end of game
function endGameMessage() {
  finalScore.innerText = "You scored " + scoreContent.innerText;
  if (score <= 2) {
    endMessage.innerText = "Hmmm...80s might not be your music era...";

  } else if (score <= 4) {
    endMessage.innerText = "You might want to broaden your eighties playlists!";

  } else {
    endMessage.innerText = "Wow! Eighties music really is your thing my friend!";

  }
  console.log(questionCounter)
  modal.style.display = "block";

}
console.log(questionCounter)
playAgain.onclick = function () {
  modal.style.display = "none";
  console.log("modal is closed");
  runGame();
  console.log("new question is displayed");
  // why does counter start at 2 after modal is closed? but console.log says it's 1??
  console.log(questionCounter)
}
console.log(questionCounter)
// start the quiz
runGame();



//wait for elements to load before game starts??? where??? which elements?? should be in display question
// document.addEventListener("DOMContentLoaded", function()) {

// }