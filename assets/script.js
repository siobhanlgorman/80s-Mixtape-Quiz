console.log("hello");


let questions = [{
    question: "Survivor had a hit with Eye of the Tiger. Which film did it feature in",
    choice1: "Ghostbusters",
    choice2: "Rocky III",
    choice3: "Back to the Future II",
    choice4: "Top Gun",
    answer: "2",
    },
    {
    question: "'When I look back on my life, it's always been with a sense of shame, I've always been the one to blame' is the opening lyric to which song?",
    choice1: "'Bad' by Michael Jackson",
    choice2: "'Buffalo Stance' by Neneh Cherry",
    choice3: "'People are People' by Depeche Mode",
    choice4: "'It's A Sin' by Pet Shop Boys",
    answer: "4",
    },
    
    {
    question: "Which of these is Not a Cyndi Lauper song?",
    choice1: "True Colours",
    choice2: "Girls Just Wanna Have Fun",
    choice3: "Time After Time",
    choice4: "Like a Prayer",
    answer: "4",
    },
    {
    question: "'I know when to go out, I know when to stay in, get things done' is the opening lyric to which song?",
    choice1: "'She Blinded Me By Science' by Thomas Dolby",
    choice2: "'Who Can It Be Now' by Men At Work",
    choice3: "'Modern Love' by David Bowie",
    choice4: "'Our House' by Madness",
    answer: "3"
    },
    
    {
    question: "Who sings 'Sunshine on Leith?",
    choice1: "Queen",
    choice2: "The Silencers",
    choice3: "The Proclaimers",
    choice4: "Big Country",
    answer: "3"
    },
    {
    question: "'I Believe the Children Are Our Future' is the opening lyric to which Whitney Houston song?",
    choice1: "All At Once",
    choice2: "One Moment in Time",
    choice3: "The Greatest Love Of All",
    choice4: "How Will I Know",
    answer: "3"
    },
    
    {
    question: "Which all-girl group had a Manic Monday?",
    choice1: "Bananarama",
    choice2: "The Bangles",
    choice3: "En Vogue",
    choice4: "Salt-N-Pepa",
    answer: "2"
    },
    {
    question: "'Desert loving in your eyes all the way' is the opening lyric to which song?",
    choice1: "'Walk Like An Egyptian' by The Bangles",
    choice2: "'Let's Dance' by David Bowie",
    choice3: "'Karma Chameleon' by Culture Club",
    choice4: "'Obsession' by Animotion",
    answer: "3"
    },
    
    {
    question: "How old were the George Michael and Andrew Ridgley when they wrote 'Careless Whisper'? ",
    choice1: "17",
    choice2: "18",
    choice3: "19",
    choice4: "20",
    answer: "1"
    },
    {
    question: "What year was Live Aid?",
    choice1: "1984",
    choice2: "1985",
    choice3: "1986",
    choice4: "1987",
    answer: "2",
    },
    {
    question: "'I must've dreamed a thousand dreams, been haunted by a million screams' is the opening lyric to which song?",
    choice1: "'The Reflex' by Duran Duran",
    choice2: "'Missing You' by John Waite",
    choice3: "Land of Confusion' by Genesis",
    choice4: "I Just Died in Your Arms Tonight' by Cutting Crew",
    answer: "3"
    },
    
    {
    question: "How many members were there in the Thompson Twins (1982 -1986)?",
    choice1: "2",
    choice2: "3",
    choice3: "4",
    choice4: "5",
    answer: "2"
    },
    {
    question: "What is Boy George's real name?",
    choice1: "George Boyle",
    choice2: "George Boysen",
    choice3: "George O'Casey",
    choice4: "George O'Dowd",
    answer: "4"
    },
    {
    question: "'I bought a toothbrush, some toothpaste, a flannel for my face, pajamas, a hairbrush, new shoes and a case' are the opening lyrics to which song?",
    choice1: "'Got My Mind Set On You' by George Harrison",
    choice2: "'Need You Tonight' by INXS",
    choice3: "'Here I Go Again' by Whitesnake",
    choice4: "'Labelled With Love' by Squeeze",
    answer: "4"
    },
    
    {
    question: "What was the name of Band Aid's charity single?",
    choice1: "Feed the World",
    choice2: "We are the World",
    choice3: "Do They Know It's Christmas",
    choice4: "It's Christmas Time",
    answer: "3"
    },
    {
    question: "What type of dance did Men Without Hats take to the charts in 1983?",
    choice1: "safety",
    choice2: "sack",
    choice3: "jive",
    choice4: "rumba",
    answer: "1"
    },
    {
    question: "What was the name of the Pixies first EP? ",
    choice1: "Bossanova",
    choice2: "Surfer Rosa",
    choice3: "Come On Pilgrim",
    choice4: "Doolittle",
    answer: "3"
    },
    
    {
    question: "Which Scandinavian Country do the band Aha come from?",
    choice1: "Sweden",
    choice2: "Norway",
    choice3: "Finland",
    choice4: "Denmark",
    answer: "2"
    },
    
    {
    question: "Kim Deal was known by what name when she joined the Pixies?",
    choice1: "Mrs Peter Murphy",
    choice2: "Mrs John Murphy",
    choice3: "Mrs Jonathan Williams",
    choice4: "Mrs Black Francis",
    answer: "2"
    },
    
    {
    question: "What was the first single released from Michael Jackson's 'Thriller' album?",
    choice1: "Wanna Be Startin' Somethin'",
    choice2: "Beat It",
    choice3: "The Girl is Mine",
    choice4: "Human Nature",
    answer: "3",
    },
    {
    question: "Which Pixies song appeared in the movie Fight Club?",
    choice1: "Wave of Mutilation",
    choice2: "Levitate Me",
    choice3: "I Bleed",
    choice4: "Where is my Mind",
    answer: "4"
    },
    
    {
    question: "Which Prince album featured the 1983 hit Little Red Corvette?",
    choice1: "1999",
    choice2: "Controversy",
    choice3: "Dirty Mind",
    choice4: "Purple Rain",
    answer: "1"
    },
    {
    question: "Which song features the line 'Some people call it a one night stand but we can call it paradise'?",
    choice1: "The Human League 'Don't you want me Baby'",
    choice2: "Spandau Ballet 'Gold'",
    choice3: "Duran Duran 'Save A Prayer'",
    choice4: "Madonna 'True Blue'",
    answer: "3"
    },
    {
    question: "'Hey little sister what have you done?' is the opening line to which song?",
    choice1: "'One Thing Leads to Another' by the Fixx",
    choice2: "'Cold Hearted Snake' by Paula Abdul",
    choice3: "'Modern Love' by David Bowie",
    choice4: "Billy Idol 'White Wedding'",
    answer: "4"
    },
    {
    question: "What was the biggest selling single of the 1980s in the UK?",
    choice1: "'Do they know it's Christmas'",
    choice2: "'Let's Dance' ",
    choice3: "'Relax' ",
    choice4: "'Come on Eileen'",
    answer: "1"
    },
    {
    question: "Madness had 15 top ten hits in the 1980s but only one number one. What was it?",
    choice1: "Wings of a Dove",
    choice2: "Baggy Trousers",
    choice3: "It Must Be Love",
    choice4: "House of Fun",
    answer: "House of Fun",
    },
    {
    question: "Which Duran Duran song opens with laughter from the keyboardist's girlfriend?",
    choice1: "Girls on Film",
    choice2: "The Reflex",
    choice3: "Hungry Like The Wolf",
    choice4: "Save A Prayer",
    answer: "3"
    },
    {
    question: "Which song gave Whitney Houston her first number one?",
    choice1: "I Wanna Dance With Somebody",
    choice2: "How Will I Know",
    choice3: "Saving All My Love For You",
    choice4: "Greatest Love Of All",
    answer: "3"
    },
    {
    question: "Three members of Duran Duran share the same surname - what is it? ",
    choice1: "Smith",
    choice2: "Taylor",
    choice3: "Williams",
    choice4: "Johnson",
    answer: "2"
    },
    {
    question: "Who said 'If Morissey says not to eat meat, then I'm going to eat meat: that's how much I hate Morissey'?",
    choice1: "Robert Smith of The Cure",
    choice2: "Julian Cope of the Teardrop Explodes",
    choice3: "Michael Stipe of REM",
    choice4: "Bono of U2",
    answer: "1"
    },
    {
    question: "'Tainted Love' was a hit for Soft Cell in 1981 but who recorded the original?",
    choice1: "Martha and the Vandellas",
    choice2: "The Supremes",
    choice3: "Alison Moyet",
    choice4: "Gloria Jones",
    answer: "4"
    },
    {
    question: "How many studio albums did REM release in the 80s?",
    choice1: "4",
    choice2: "5",
    choice3: "6",
    choice4: "7",
    answer: "3",
    },
    {
    question: "Which of the following movies did NOT feature David Bowie?",
    choice1: "Jazzin' for Blue Jean",
    choice2: "The Hunger",
    choice3: "Velvet Goldmine",
    choice4: "The Last Temptation of Christ",
    answer: "3"
    },
    {
    question: "'Give me time to realise my crime' is the opening line to which song?",
    choice1: "'Time' by the Alan Parsons Project",
    choice2: "'Time After Time' by Cindi Lauper",
    choice3: "'Do You Really Want to Hurt Me' by Culture Club",
    choice4: "'Video Killed the Radio Star' by the Buggles",
    answer: "3"
    },
    {
    question: "'That's great! It starts with an earthquake, birds and snakes an aeroplane, Lenny Bruce is not afraid' are the opening lyrics to which song?",
    choice1: "'We Didn't Start the Fire' by Billy Joel",
    choice2: "'Everybody Wants to Rule the World' by Tears for Fears",
    choice3: "'You Dropped a Bomb On Me' by The Gap Band",
    choice4: "'It's the End of the World As We Know It (And I feel Fine)' by REM",
    answer: "4"
    },
    {
    question: "'Show me show me show me how you do that trick, the one that makes me scream she said', are the opening lines of which song?",
    choice1: "'Hungry like the Wolf' by Duran Duran?",
    choice2: "'Just Like Heaven' by the Cure",
    choice3: "'Sign Of the Times' by Prince ",
    choice4: "'See you' by Depeche Mode",
    answer: "2"
    },
    {
    question: "Which singer died in 1997?",
    choice1: "John Lennon",
    choice2: "Billy Mackenzie",
    choice3: "Kurt Cobain",
    choice4: "Ian Curtis",
    answer: "2"
    },
   
]


const question = document.getElementById("question");

const choice1 = document.getElementById("A");
const choice2 = document.getElementById("B");
const choice3 = document.getElementById("C");
const choice4 = document.getElementById("D");

// console.log(choice1)
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []

const correct_bonus = 10;
const max_questions = 5;

    


// starts the game
function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    displayQuestion();

}

runGame();

// displays new question 
function displayQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    displayQuestion = availableQuestions[questionIndex];
    question.innerText = displayQuestion.question;
    
// displays answer choices
    choice1.innerText = displayQuestion.choice1;
    choice2.innerText = displayQuestion.choice2;
    choice3.innerText = displayQuestion.choice3;
    choice4.innerText = displayQuestion.choice4;
   
// until max 5

   
    
};


// checks what answer the user has chosen
function checkAnswer() {

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





