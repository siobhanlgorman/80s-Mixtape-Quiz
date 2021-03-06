/*jshint esversion: 8 */

const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName('answer-text'));
const qnCounterContent = document.getElementById('current-question');
const scoreContent = document.getElementById('current-score');
const modal = document.getElementById('modal');
const finalScore = document.getElementById('f-score');
const endMessage = document.getElementById('final-message');
const playAgain = document.querySelectorAll('#play-again, #start-again');
const max_questions = 6;
let qnCounter = 0;
let score = 0;
let displayedQuestion = {};
let answersAllowed = true;
let questionArray = [];

// starts the game -- functions to start game and generate questions adapted from James Q Quick tutorial see Readme for full credit
function runGame() {
	qnCounter = 0;
	score = 0;
	scoreContent.innerText = '0 /' + max_questions;
	questionArray = [...questions];
	displayQuestion();
}

// displays new random question from array with corresponding answer options, increments question counter and removes question asked from array
function displayQuestion() {
	if (qnCounter < max_questions) {
		qnCounter++;
		qnCounterContent.innerText = qnCounter + "/" + max_questions;
		const questionIndex = Math.floor(Math.random() * questionArray.length);
		displayedQuestion = questionArray[questionIndex];
		question.innerText = displayedQuestion.question;
		options.forEach(function(option) {
			const number = option.dataset.number;
			option.innerText = displayedQuestion["option" + number];
		});
		questionArray.splice(questionIndex, 1);
		answersAllowed = true;
	}
}

// checks whether user answer correct/incorrect, apply red/green background and delay colour removal
options.forEach(function(option) {
	option.addEventListener('click', function(event) {
		if (!answersAllowed) return;
		answersAllowed = false; //
		const userAnswer = event.target;
		const correctAnswer = userAnswer.dataset.number;
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
		setTimeout(function() {
				userAnswer.parentElement.classList.remove(classToApply);
				displayQuestion();
			},
			1000);

		// if question counter has reached max questions modal displays
		if (qnCounter == max_questions) {
			endGameMessage();
		}
	});
});

//increments the correct answer score after each question
function incrementScore(num) {
	score += num;
	scoreContent.innerText = score + '/' + max_questions;
}

// displays modal at end of game
function endGameMessage() {
	finalScore.innerText = "Score: " + scoreContent.innerText;
	if (score <= 2) {
		endMessage.innerText = "Hmmm...80s might not be your music era...";
	} else if (score <= 4) {
		endMessage.innerText = "You might want to broaden your eighties playlists!";
	} else {
		endMessage.innerText = "Wow! Eighties music really is your thing my friend!";
	}
	modal.style.display = "block";
}

// restarts game if user clicks play button in modal
playAgain.forEach(function(playLink) {
	playLink.addEventListener('click', function(event) {
		modal.style.display = "none";
		runGame();
	});
});

// start the quiz
runGame();
