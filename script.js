// variables needed
// mainhdr
var timerText = document.querySelector("#time");
var mainHdrText = document.querySelector("#mainHdr");
var mainParaText = document.querySelector("#mainPara");
var choiceList = document.querySelector("#userChoices");
var startButton = document.querySelector("#mainBtn");
var timeLeft = questions.length * 15;
var quizCount = 0;
var stage = "main";
// var options = questions[quizCount].choices;


startPage();

console.log(mainHdrText.textContent);
console.log(questions);
// console.log(options);

console.log("time "+timeLeft);
console.log("para  = "+mainParaText);

console.log("para text = "+mainParaText.textContent);
console.log("choice list = "+choiceList);
console.log("button = "+startButton.textContent);
console.log("title = "+ questions.title);
console.log("2nd title = "+questions[0].title);
console.log("answer = "+questions[0].answer);
console.log("1st choice = "+questions[0].choices);
console.log("count = "+quizCount);
console.log("stage = "+stage);



// This populates the mainBody on open or when user clicks "Start Over"
// when user hits button it will start startQuiz function
function startPage(){
    timerText.textContent = "Time "+ timeLeft;
    mainHdrText.textContent = "Welcome to my Quiz";
    mainParaText.textContent = "Instructions for taking quiz";
    startButton.textContent = "Start Quiz";
};

// This currently starts the screen from the start page
// will need to add functionality to determine what stage we are at?
startButton.addEventListener("click", function(event){
    if (stage === "main") {
        mainParaText.textContent = "";
        startButton.style.display = "none";
           quizQuestions();
        startTimer();
    }
});


function quizQuestions (){
 
    stage = "quiz"    
    var options = questions[quizCount].choices;
    userChoices.innerHTML = "";
 

    mainHdrText.textContent = questions[quizCount].title;
     for (let i = 0; i < options.length; i++) {
      var choices = document.createElement("li");
        choices.setAttribute("data-index" ,i)
        
        var choice = document.createElement("button");
        choice.setAttribute("Class","choiceBtn")
        choice.textContent = options[i];

        choices.appendChild(choice);
        choiceList.appendChild(choices);
     }

        quizCount = quizCount +1

console.log("quizcount = "+quizCount);
console.log("new stage = "+stage);
console.log("options = "+options);

}


// eventlistener for the choices buttons that will to the following:
    // Display separator line and Wrong or Correct based on answer
//    reduce the time if wrong asnwer
// stop the timer if last question
// run the function to capture name and score
    // run the ?quiz quiz function that will update display the next question 
    choiceList.addEventListener("click", function(event) {
        var element = event.target;
      
        // If that element is a button...
        if (element.matches(".choiceBtn") === true) {
          // Get its data-index value and remove the todo element from the list
          var index = element.parentElement.getAttribute("data-index");
        //   todos.splice(index, 1);
      console.log(index);
      
          // Re-render the list
          quizQuestions();
        }
      });
      
// Display Options
    // Build a function for each section that populates the screen
    // Start Quiz - The first view of the application displays a button that starts the quiz.

    // Questions
    // Quiz Complete (all questions answered or time runs out)
        // Enter initials and shows score (This then goes to High Score Diplay)
    // Display High Scores
        // shows high scores and has two buttons- "start over" "clear high scores"


// Quiz functionality
    //  Clicking the "Start Quiz" button presents the user with a series of questions.
    //  The timer is initialized with a "totalTimer" and immediately begins countdown.
    // After the game ends, the user can save their initials and score to a highscores view using local storage.
    // should the timer stall after an answer to show the user right or wrong?

// Score functionality
    //   Score is calculated by time remaining. Answering quickly and correctly results in a higher score. 
    //   Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).
    //   When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials.
    //   Their final score and initials are then stored in `localStorage`.

// Timer functionality
    // Once the quiz begins, a timer starts.
    // totalTime = The length of the array in `questions.js` * Fifteen seconds per question
    // If a question is answered incorrectly, additional time is subtracted from the timer.
    // The timer stops when all questions have been answered or the timer reaches 0.
    // When timer reaches 10 seconds change color to red
    function startTimer() {
        var timerInterval = setInterval(function() {
          timeLeft--;
          timerText.textContent = "Time "+timeLeft ;
      
          if(timeLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
          }
      
        }, 1000);
      }

 
// BONUS:
    // Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

    // Customize the application theme.

    // Create multiple quizzes and an option for users to choose between them.

    // Add the application to your portfolio.
