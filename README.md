# Mixtape Quix
[The live website is here](https://siobhanlgorman.github.io/80s-Mixtape-Quiz/)
## Introduction
The Mixtape quiz is a fun interactive quiz for people who love the music of the eighties. Users answer multiple choice questions and are rated on their final score. The project goal is to provide entertainment through a fun interactive music quiz. I picked eighties music because it's an era that I like myself and also it has undergone a revival and so would be entertaining to different age groups.

## User Experience (UX)
### Target Audience
The quiz targets people of all ages who enjoy quizzes and are specifically interested in music of the eighties.

### User Stories
As the site owner I want to:
* create an entertaining interactive quiz on the topic of eighties music trivia
* want users to return to play the quiz again


As a general user I want to:
* play a fun quiz
* navigate easily around the application
* easily see what question number I am on
* answer challenging questions on the topic
* easily see if my answer is right or wrong
* view my final score
* easily restart the game after I finish
* be entertained and a little challenged
* be rated on my knowledge of the subject
* be able to use the application on different sized screens

As a new user I want to 
* easily see what the quiz topic is

### Strategy 
The purpose of this online quiz is to entertain people who like 80s music. The quiz should be easy for the user to navigate across the different pages and return to the homw page or restart the quiz. It should initially be a simple design to which features can be added as popularity grows.  

#### Goals
  * to provide an entertaining interactive application
  * questions can be easily updated

### Scope
The project scope follows the minimal viable features approach for the initial project. However the scope is such that interactive features to enhance the user experience will be added in future. The project is to be a simple functioning online quiz game with randomly generated multiple choice questions, where the score will accumulate up to a specified maximum which can be adjusted according to the number of questions available. Initially the question pool will be small but sufficient for the user to enjoy the experience.
The purpose of the site will be clear from the landing page and will be visually attractive to the user. The site will be easy to navigate and fully responsive to all sized screens. 

During this phase of the project design test repositories wer created to try out visuals and initial features before establishing the final respository.

### Structure
how is the information structured how user reaches content. 
header - title
Game play area with buttons to start/stop play
display question with three choices for answer. User can choose one
submit answer button?

display of correct/incorrect answers
Sections: welcome screen, start play/first question screen, completed game screen with total score and message. User flow welcome --> play game ---> repeat until 10 questions/end game --> congratulations/message
### Skeleton
how should the imfo be implemented and how will user navigate through infomration and features priority and positioning
wireframes
[Wireframes](https://github.com/siobhanlgorman/80s-Mixtape-Quiz/tree/master/wireframes)
### Surface
what will the product look like: colours, typography, images, design elements
Colours - 80s colours - purple, turquoise Used values from [Adobe Colour Wheel](https://color.adobe.com/create/color-wheel)
Font colour charcoal #36454F
Favicon
Background image of cassettes (see credits) to fit the title theme of an eighties mixtape.
Navigation buttons were styled with icons representing the buttons on a cassette player.
## Features
### Existing Features

Home page
Play button to navigate to quiz page

Quiz page
Score Counter
Question number indicator
Stop button - ends quiz by navigating back to home page
Answers turn either red for incorrect answer or green for correct

Modal
final score
Special message
Play again button - closes modal and restarts quiz
Stop button - navigates to home page


### Future Features

Save user name 
Save high scores
Indicate correct answer when answer incorrectly - only when sufficient questions
Audio
Pictures - varity of questions bradenened - for UX this is text based but add pictures




### Languages Used
HTML (Hypertext Markup Language) was used to design the basic website and CSS (Cascading Style Sheets) to style the website and make it look more appealing to the user.
Javascript


### Technologies Used

[Balsamiq](https://balsamiq.com/) was used to create the wireframes.

[Google Fonts](https://fonts.google.com) was used for the fonts: Poppins and Lora.

[Fontawesome](https://fontawesome.com) was used for the social media icons, map link and the arrow back to top.

[Google maps](https://www.google.com/maps) was used to provide a map link.

[Picresize](https://picresize.com) was used to resize photosthe photo used for the background


## Testing
### Validator Testing
* [HTML Validator](https://validator.w3.org/) was run at several points during the project and small syntax errors identified were fixed. At the final stage no errors or warnings were found
* [CSS Validator](https://validator.w3.org/) was run several times during the project and picked up small syntax errors which were corrected. At the time of submission the css code successfully passed the validator with no errors.
* [JS Hint](https://jshint.com/) was used to check the two javascript files. One unused variable refers to the variable questions which is declared in the quiz questions file.
* Lighthouse in Chrome Developer Tools was used to check performance and picked up some early contrast errors in colour choice so colours were adjusted accordingly. No other significant errors were found.

## Responsiveness
The website was tested on Chrome, Mozilla, Edge and Safari browsers with no problems found. The quiz was found not to be compatible with Internet Explorer

The website was tested on numerous sized screens including Iphones 8 and X, Moto G8 plus, 15" laptop, 24" screen and Ipad and was found to respond as expected to all sizes.
Chrome development tools was used throughout the design process to check responsiveness and breakpoints. Adjustments were made accordingly.

## User Stories Testing

Each user story was tested as follows:

## Manual Testing
The quiz was tested by users. Feedback was positive from those with knowledge of the genre. One user reported that the reposnse to user answer was too laggy so the timeout delay for the removal of colour change was reduced from 1.5seconds to 1 second.

The following links were tested
The play button on home page - links to quiz page
stop button on quiz page - returns user to home page Exit??
Play again button on the modal returns the user to the start of the quiz with a new question.
The Stop button on the modal returns the user to the home page.
the x to close the modal was removed as superflous after the stop/exit button and play again buttons were added and no link is available outside the modal to close the modal

All links on all pages were checked
### Bugs
delay in response to user click on answer -  add dom event listener to wait for dom to load?
splice not working to remove already asked question
modal diplaying automatically despite display: none, seemed to be overridden by section container - I changed section back to div to fix this.
have to click on actual text for click to be recognised need whole box to be recognised.

### Unfixed Bugs
## Deployment
The site was deployed to GitHub pages. The steps taken to deploy are as follows:
1. Log in to [Github](https://github.com/)
2. Navigate to [siobhanlgorman/sourdoughbakes](https://github.com/siobhanlgorman/Sourdough-Bakes) in the list of repositories
3. In the GitHub repository, navigate to the [Settings](https://github.com/siobhanlgorman/Sourdough-Bakes/settings) tab
4. In Settings scroll down to [GitHub pages](https://github.com/siobhanlgorman/Sourdough-Bakes/settings/pages) which opens in a new page.
5. From the source section drop-down menu, select the Master Branch
6. Once the master branch has been selected, the page is automatically refreshed and a display indicates the successful deployment and the link to the address.
The link to the live website is here:
[Sourdough Bakes](https://siobhanlgorman.github.io//)

## Cloning the repository
1. On Github navigate to the main page of the repository
2. Above the list of files click the dropdown code menu
3. To clone the repository using Github Cli, click use Github CLI, then click ???? save??? copy???
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory
6. Type Git clone and then paste the copied URL
7. Press enter to create the local clone


## Credits
### Content
Quiz questions adapted from: 
* [Zoo](https://www.zoo.com/quiz/can-you-guess-80s-songs-their-opening-lyrics-quiz) 
* [Cambridge News](https://www.cambridge-news.co.uk/news/uk-world-news/80s-music-quiz-questions-test-18213733)
* [The Express](https://www.express.co.uk/entertainment/music/1290366/80s-music-quiz-questions-and-answers)
* [Smooth Radio](https://www.smoothradio.com/quizzes/1980s-music-trivia-quiz/)


The following tutorials were useful as a guide
* [How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners Tutorial](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
* [James Q Quick - Build A Quiz App](https://www.youtube.com/watch?v=rFWbAj40JrQ)
On how to use datasets (https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
[Reference on forEach looping syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
timeout function https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout
Designing a modal: [How to make a modal](https://www.youtube.com/watch?v=6ophW7Ask_0); (https://www.w3schools.com/howto/howto_css_modals.asp)
### Media

From [Pixabay](https://pixabay.com/):
* [Cassettes image](cassette-5986249_1280.jpg) Image by <a href="https://pixabay.com/users/gdj-1086657/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5986249">Gordon Johnson</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5986249">Pixabay</a>
* [cassette icon](https://icons8.com/icons/set/cassette)