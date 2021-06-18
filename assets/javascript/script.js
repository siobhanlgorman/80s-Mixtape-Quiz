const question = document.getElementById("question");
console.log (question);

const choices = Array.from(document.getElementsByClassName('answer-text'));
console.log(choices)

// const choice1 = document.getElementById("A");
// const choice2 = document.getElementById("B");
// const choice3 = document.getElementById("C");
// const choice4 = document.getElementById("D");

// console.log(choice1)

// const questionCounter = document.getElementById('current-question');
// const score = document.getElementById('score-counter');
// console.log('hello')


let questionCounter = 0; // variable for question number user is on starts at 0 link to counter element
let score = 0 // variable for score starts at 0
let currentQuestion = {};

let acceptingAnswers = true; //delay before next question generated

 


let availableQuestions = [] // full array of questions

// const correct_bonus = 10;
const max_questions = 5;

    // let userAnswer = document.getElementsByClassName('answer-text')
    // console.log(userAnswer);
    // let correctAnswer = 


// starts the game -- function adapted from James Q Quick tutorial
function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    displayQuestion();
    console.log("available questions have been shown")
};


// displays new question  function adapted from James Q Quick tutorial
function displayQuestion() {
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    displayQuestion = availableQuestions[questionIndex];
    question.innerText = displayQuestion.question;
    
// displays answer choices
    // choice1.innerText = displayQuestion.choice1;
    // choice2.innerText = displayQuestion.choice2;
    // choice3.innerText = displayQuestion.choice3;
    // choice4.innerText = displayQuestion.choice4;


    // code adapted from James Q Quick tutorial
    // access answer text content via data attribute
    choices.forEach(function (choice) {
        const number = choice.dataset["number"];
        choice.innerText = displayQuestion["choice" + number];
        console.log("answer choices have been shown");
      });

        
    // remove already used question from array selection

    availableQuestions.splice(question.Index, 1);
    acceptingAnswers = true;
    
   
// until max 5

   
};

// forEach method to check what answer the user has chosen (adapted from James Q Quick tutorial)

choices.forEach(function (choice) {
    choice.addEventListener('click', function (event) {
      if (!acceptingAnswers) return; // function ends if not accepting answers
      acceptingAnswers = false; //
      const userAnswer = event.target; //variable for the user selection
      console.log(userAnswer);
      const correctAnswer = userAnswer.dataset.number; //variable for the correct answer
      console.log(correctAnswer);
      console.log(displayQuestion.answer);
      console.log(correctAnswer === displayQuestion.answer); //check user selection against correct answer

// apply class to user answer to turn background colour red or green
      let classToApply = 'incorrect';
      if (correctAnswer === displayQuestion.answer) {
      classToApply = 'correct';
      console.log(classToApply);
      userAnswer.parentElement.classList.add(classToApply);
        
      };


      // if answer is correct turn answerbox green and if incorrect turn redS
      // displayQuestion();
    });
  });




runGame();


// function checkAnswer() {
//     function myFunction (event) {
//     console.log('You clicked an answer');
    

    



// checks if user's answer matches correct answer
function matchCorrectAnswer() {

}


// changes colour of answerbox after user answer is checked onlick
function colourAnswerBox() {

}

// increments the correct answer score after each question
function incrementScore() {

}

// increments the question number when new question is generated

function incrementQuestionNumber() {

}


// displays message at end of game
function endGameMessage () {

}





