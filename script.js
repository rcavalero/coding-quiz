var timerText = document.querySelector("#time");
var mainHdrText = document.querySelector("#mainHdr");
var mainParaText = document.querySelector("#mainPara");
var choiceList = document.querySelector("#userChoices");
var inputForm = document.querySelector("#userInput")
var userInitials = document.querySelector("#user");
var userSubmitBtn = document.querySelector("#userButton");
var highScores = document.querySelector("#vhs");
var buttons = document.querySelector("#buttons");
var timerInterval;
var timeLeft = questions.length * 15;
var quizCount = 0;
console.log(userInitials.textContent);


startPage();


// This populates the mainBody on open or when user clicks "Start Over"
function startPage(){
    timerText.textContent = "Time: "+ timeLeft;
    mainHdrText.textContent = "Coding Quiz Challenge";
    mainParaText.textContent = "Try to answer the following code related-questions within the time limit.  There is a 10 second penalty for incorrect answers!";
    userChoices.innerHTML = "";
    buttons.innerHTML = ""
    quizCount = 0;
    var startBtn = document.createElement("button");
        
    buttons.appendChild(startBtn)
    startBtn.setAttribute("id","start")
    startBtn.textContent = "Start Quiz"

    var startQuiz = document.querySelector("#start");
    start.addEventListener("click", function(event){
        quizQuestions();
        startTimer();
    });
};

function quizQuestions (){
 
    var options = questions[quizCount].choices;
    mainParaText.textContent = "";
    userChoices.innerHTML = "";
    buttons.innerHTML = ""
 
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
};

// this kicks in when a user selects on option for a question
choiceList.addEventListener("click", function(event) {
        var element = event.target;
        var index = element.parentElement.getAttribute("data-index");
        var myLine = document.getElementById("resultLine");
        var result = "Correct!" 
      
        if (element.matches(".choiceBtn") === true) {
            if (questions[quizCount].choices[index] !== questions[quizCount].answer) {
                result = "Wrong"
                timeLeft = timeLeft-10
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
            clearInterval(timerInterval)
            setTimeout(function() {
              }, 1000);
            timerText.textContent = "Time: "+ timeLeft;
            quizOver()
        }
      });

      
    // Quiz Complete (all questions answered or time runs out)
function quizOver() {
    mainHdrText.textContent = "All Done";
    mainParaText.textContent = "Your Final Score is "+timeLeft;
    userChoices.innerHTML = "";
    buttons.innerHTML = ""

    document.getElementById("userInput").style.display = "block"; 
    
    userInitials.focus();
    console.log("initials3 "+userInitials.textContent.value);

};

// this records the score into local storage
    inputForm.addEventListener("submit", function(event) {
        event.preventDefault();
      
      if (userInitials.value.trim() === "") {
            return;
      }
        var quizScores = JSON.parse(localStorage.getItem("quizScores") || "[]");
        var score = {
            initials: userInitials.value.trim(),
            time: timeLeft
        };
        quizScores.push(score);
        localStorage.setItem("quizScores", JSON.stringify(quizScores));
        userInitials.value = ""
        highScore()

        });


    // This displays High Scores
function highScore() {
        mainHdrText.textContent = "High Scores";
        mainParaText.textContent = "";
        userChoices.innerHTML = "";
        buttons.innerHTML = ""
        document.getElementById("userInput").style.display = "none"; 

        var quizScores = JSON.parse(localStorage.getItem("quizScores") || "[]");
        var scores = document.querySelector("#userChoices");

        quizScores.forEach(function(score){
          var listEl = document.createElement("li");
          scores.appendChild(listEl);
          listEl.textContent = score.initials +" - "+ score.time;
        });

    
        var restartBtn = document.createElement("button");
        buttons.appendChild(restartBtn);
        restartBtn.setAttribute("id","restart");
        restartBtn.textContent = "Start Over";
        
            var clearScoreBtn = document.createElement("button");
        buttons.appendChild(clearScoreBtn);
        clearScoreBtn.setAttribute("id","clear");
        clearScoreBtn.textContent = "Clear High Scores";

        var clearScore = document.querySelector("#clear");
            clearScore.addEventListener("click", function(event){
            localStorage.removeItem("quizScores");
            scores.innerHTML = "";
        });
        
        var restart = document.querySelector("#restart");
        restart.addEventListener("click", function(event){
            timeLeft = questions.length * 15;
            startPage();
        });
};


    // When timer reaches 10 seconds change color to red
    function startTimer() {
         timerInterval = setInterval(function() {
          timeLeft--;
          timerText.textContent = "Time: "+timeLeft ;
      
          if(timeLeft === 0) {
            clearInterval(timerInterval);
            quizOver();
          }
      
        }, 1000);
      };

highScores.addEventListener("click", function(event){
    clearInterval(timerInterval);
    highScore()
    
});

 
// BONUS:
    // Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

    // Customize the application theme.

    // Create multiple quizzes and an option for users to choose between them.

    // Add the application to your portfolio.
