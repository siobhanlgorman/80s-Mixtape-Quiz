

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

// variable for question number
let questionCounter = 0;
// variable for score
let score = 0
// let currentQuestion = {};
//delay before next question generated
let delayAcceptingAnswers = true;
// let score = 0; start at 0 link to counter element
// let questionCounter = 0; question number user is on starts at 0 link to counter element
// let availableQuestions = [] full copy of question array --> questionarray

// const correct_bonus = 10;
// const max_questions = 5;

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
      });

        
    // remove already used question from array selection

    availableQuestions.splice(question.Index, 1);

    delayAcceptingAnswers = true;
    
   
// until max 6

   
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {console.log(e.target)})
})






runGame();

// checks what answer the user has chosen
function checkAnswer() {
    function myFunction (event) {
    console.log('You clicked an answer');
    // console.log(this.id);

    let userAnswer = document.getElementsByClassName('answer-text'); userAnswer.addEventListener('click', myFunction);
    // console.log(userAnswer)
    }

    


}

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





