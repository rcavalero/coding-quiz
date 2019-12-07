// variables needed
// mainhdr
var timerText = document.querySelector("#time");
var mainHdrText = document.querySelector("#mainHdr");
var mainParaText = document.querySelector("#mainPara");
var choiceList = document.querySelector("#userChoices");
var startButton = document.querySelector("#mainBtn");
var inputForm = document.querySelector("#userInput")
var userInitials = document.querySelector("#user");
var userSubmitBtn = document.querySelector("#userButton");


var timerInterval;
var timeLeft = questions.length * 15;
var quizCount = 0;
// var stage = "main";
// var options = questions[quizCount].choices;


startPage();

// console.log(mainHdrText.textContent);
// console.log(questions);
// console.log(options);

// console.log("time "+timeLeft);
// console.log("para  = "+mainParaText);

// console.log("para text = "+mainParaText.textContent);
// console.log("choice list = "+choiceList);
// console.log("button = "+startButton.textContent);
// console.log("title = "+ questions.title);
// console.log("2nd title = "+questions[0].title);
// console.log("answer = "+questions[0].answer);
// console.log("1st choice = "+questions[0].choices);
console.log("count = "+quizCount);
// console.log("stage = "+stage);



// This populates the mainBody on open or when user clicks "Start Over"
function startPage(){
    timerText.textContent = "Time: "+ timeLeft;
    mainHdrText.textContent = "Coding Quiz Challenge";
    mainParaText.textContent = "Try to answer the following code related-questions within the time limit.  There is a 10 second penalty for incorrect answers!";
    startButton.textContent = "Start Quiz";
};

// This currently starts the screen from the start page
// will need to add functionality to determine what stage we are at?
startButton.addEventListener("click", function(event){
    // if (stage === "main") {
        mainParaText.textContent = "";
        startButton.style.display = "none";
        quizQuestions();
        startTimer();
    // }
});


function quizQuestions (){
 
    // stage = "quiz"    
    var options = questions[quizCount].choices;
    userChoices.innerHTML = "";
 
// This creates a button for each option
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
}

// this kicks in when a user selects on option for a question
choiceList.addEventListener("click", function(event) {
        var element = event.target;
        var index = element.parentElement.getAttribute("data-index");
        var myLine = document.getElementById("resultLine");
        var result = "Correct!" 
      
        if (element.matches(".choiceBtn") === true) {
            if (questions[quizCount].choices[index] !== questions[quizCount].answer) {
                result = "Wrong"
                timeLeft = timeLeft-5
            }
        }    
            document.getElementById("result").innerHTML = result; 
            setTimeout(function () {
                document.getElementById("result").innerHTML = "";
            }, 1000);
                document.getElementById("resultLine").style.display = "block"; 
            setTimeout(function () {
                document.getElementById("resultLine").style.display = "none";
            }, 1000);
            
             
        if (quizCount < questions.length-1) {
            quizCount++;
            quizQuestions();
        }  
        else {
            // setTimeout(function() {
            //     //your code to be executed after 1 second
            //   }, 2000);
            clearInterval(timerInterval)
            setTimeout(function() {
              }, 1000);
            timerText.textContent = "Time: "+ timeLeft;
            quizOver()
        }
      });
      

function quizOver() {
    // Quiz Complete (all questions answered or time runs out)
        // Enter initials and shows score (This then goes to High Score Display)
    //   Their final score and initials are then stored in `localStorage`.
    userChoices.innerHTML = "";
    mainHdrText.textContent = "All Done";
    mainParaText.textContent = "Your Final Score is "+timeLeft;
    document.getElementById("userInput").style.display = "block"; 
    user.textContent = "";
    user.focus();

    userSubmitBtn.addEventListener("click", function(event) {
        event.preventDefault();
      
        var user = userInitials.value;
        var score = timeLeft;
      
        // if (user !== "") {
        //   displayMessage("error", "Initials cannot be blank");
        // }
          localStorage.setItem("user", user);
          localStorage.setItem("score", score);
          highScore()

        });

       


}


function highScore() {
    // Display High Scores
        // shows high scores and has two buttons- "start over" "clear high scores"
        mainHdrText.textContent = "High Scores";
        mainParaText.textContent = "";
        document.getElementById("userInput").style.display = "none"; 

    // function renderScores()


}

    // When timer reaches 10 seconds change color to red
    function startTimer() {
         timerInterval = setInterval(function() {
          timeLeft--;
          timerText.textContent = "Time: "+timeLeft ;
      
          if(timeLeft === 0) {
            clearInterval(timerInterval);
            quizOverx();
          }
      
        }, 1000);
      }

 
// BONUS:
    // Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

    // Customize the application theme.

    // Create multiple quizzes and an option for users to choose between them.

    // Add the application to your portfolio.
