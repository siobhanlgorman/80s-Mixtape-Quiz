# Mixtape Quix
## Introduction
The Mixtape quiz is a fun interactive quiz for people who love the music of the eighties and nineties. Users answer mulitple choice questions and are rated on their score out of ten.
The project goal is to provide a fun interactive music quiz

## User Experience Design
### Target Audience
The quiz targets people of all ages who enjoy quizzes and are interested in music of the eighties and nineties
### User Stories
As a user I would like to play a fun quiz
want to easily see what the quiz topic is
answer questions
answer different questions each time I play
improve my score each time I play
be entertained and a little challenged
As a user I would like to see how knowledgeable I am on the topic of music in the eighties and nineties
As a user I want to be able to navigate easily around the application

As creator??
want to create fun quiz, have enough questions to be interesting, for user to enjoy, easy to add questions

### Strategy 
The purpose of this online quiz is to entertain people who like 80s and 90s music. 
business goals what are we aiiming to achieve and for whom
#### Goals
  * to provide an entertaining interactive application
  * 

### Scope
minimal viable features which can be added to in the future. Simple clear Javascipt functions with the single responsibility approach ie one function one job. A simple online quiz with randomly generated multiple choice questions, accumulating score up to 10. A message for the final score.
what features based on strategy do you want to include 
  * functioning quiz with sufficient questions for initial release
  * responsive design
  * clear and easy to navigate
  * visually attractive
Future features
Tried out some ideas for the structure on two test repositories while watching some tutorials and then used parts of these for the project repository
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
### Surface
what will the product look like: colours, typography, images, design elements
Colours - 80s colours - purple, turquoise Used values from [Adobe Colour Wheel](https://color.adobe.com/create/color-wheel)
Font colour charcoal #36454F
Background image of cassettes (see credits) to fit the title theme of an eighties mixtape.
## Features
### Existing Features

Home page
Play button to navigate to quiz page

### Future Features
### Languages Used
HTML (Hypertext Markup Language) was used to design the basic website and CSS (Cascading Style Sheets) to style the website and make it look more appealing to the user.
Javascript


### Technologies Used

[Balsamiq](https://balsamiq.com/) was used to create the wireframes.

[Google Fonts](https://fonts.google.com) was used for the fonts: Poppins and Lora.

[Fontawesome](https://fontawesome.com) was used for the social media icons, map link and the arrow back to top.

[Google maps](https://www.google.com/maps) was used to provide a map link.

[Picresize](https://picresize.com) was used to resize photos


## Testing
### Validator Testing
* [HTML Validator](https://validator.w3.org/) was run at several points during the project and small syntax errors identified were fixed. At the final stage no errors or warnings were found
* [CSS Validator](https://validator.w3.org/) was run several times during the project and picked up small syntax errors which were corrected. At the time of submission the css code successfully passed the validator with no errors.
* Lighthouse in Chrome Developer Tools was used to check performance and picked up some early contrast errors in colour choice so colours were adjusted accordingly. No other significant errors were found.

## Responsiveness
The website was tested on Chrome, Mozilla, Edge and Safari browsers with no problems found.

The website was tested on numerous sized screens including Iphones 8 and X, Moto G8 plus, 15" laptop, 24" screen and Ipad and was found to respond as expected to all sizes.
Chrome development tools was used throughout the design process to check responsiveness and breakpoints. Adjustments were made accordingly.

## User Stories Testing

Each user story was tested as follows:

## Manual Testing

All links on all pages were checked
### Bugs
delay in response to user click on answer -  add dom event listener to wait for dom to load?
splice not working to remove already asked question

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