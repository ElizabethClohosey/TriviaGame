
// ------- global variables ---------

// Object for all questions, choices and answers
var triviaQuestions = [

    // question 1
    {
        question: "What type of galaxy is the Milky Way Galaxy?",
        choices: ["Ellipitical", "Spiral", "Spiral Barred", "Irregular "],
        answer: "Spiral",
    },
    // question 2
    {
        question: "What is the largest planet in our solar system? Fun fact - this is also my favorite planet",
        choices: ["Earth", "Mars", "Neptune", "Jupiter"],
        answer: "Jupiter",
    },
    // question 3
    {
        question: "What is the smallest planet in our solar system?",
        choices: ["Pluto", "Venus", "Saturn", "Mercury"],
        answer: "Mercury",
    },
    // // question 4
    {
        question: "What has a gravitational pull so strong that even light cannot escape it?",
        choices: ["Quasar", "Nebula", "Black Hole", "Red Giants"],
        answer: "Black Hole",
    },
    // question 5
    {
        question: "What is the Earth's Moon commonly referred to? Hint - It's Latin for Moon and the name of one of my pups",
        choices: ["Sol", " Terra", " Belatrix", " Luna"],
        answer: " Luna",
    },
    // question 6
    {
        question: "How much time does it take for the Sun's Rays to reach Earth?",
        choices: ["24 hours", " 365 days", " 8 minutes", " 60 minutes"],
        answer: " 8 minutes",
    },
    // question 7
    {
        question: "Which planet has approximately the same landmass as Earth?",
        choices: ["Venus", " Uranus", " Mars", " Jupiter"],
        answer: " Mars",
    },
    // question 8
    {
        question: "When was Pluto reclassified from a planet to a dwarf planet? (You're still a planet to me little buddy)",
        choices: ["2006", " 1999", " 2009", " 2012"], 
        answer: "2006",
    },
    // question 9
    {
        question: "Which planet is known as the Morning Star or the Evening Star?",
        choices: ["Mars", " Mercury", " Saturn", " Venus"],
        answer: " Venus",
    },
    // question 10
    {
        question: "What was the first planet discovered with the use of a telescope?",
        choices: ["Uranus", " Mars", " Neptune", "Pluto"],
        answer: "Uranus",
    },
]; 

// array of images  
var images = ["assets/images/Milky_Way_Galaxy.jpg", "assets/images/Jupiter.jpg", "assets/images/Mercury.jpg", "assets/images/black_hole2.jpg", "assets/images/Luna.jpg", "assets/images/sun.jpg", "assets/images/mars2.jpg", "assets/images/Pluto_mad.jpg", "assets/images/venus.jpg", "assets/images/Uranus.jpg"];

                        // ---------------- Global Variables ------------------------
var currentQuestion = 0;
var currentImage = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

var gameQuestion = triviaQuestions[currentQuestion].question;
var gameChoices = triviaQuestions[currentQuestion].choices;
var gameAnswer = triviaQuestions[currentQuestion].answer;
    
var timerNumber = 30;
var intervalID;

                    // ------------ functions ---------------

// functions for answers and choices

function displayQuestionAndChoices () {
    intervalID = setInterval(countDown, 1000);
    // clearQuestionAndChoices();
    gameQuestion = triviaQuestions[currentQuestion].question;
    gameChoices = triviaQuestions[currentQuestion].choices;
    $("#question").html(gameQuestion);

        for (var i = 0; i < gameChoices.length; i++) {
            // THANK YOU IAN!!!! 
            var result = $("<button>");
            result.addClass("question-choices");
            result.attr("data-choices", gameChoices[i]);
            result.text(gameChoices[i]);
        
            $("#choices").append(result);
        }
}

function clearQuestionAndChoices () {
    $("#question").empty();
    $("#choices").empty();
}

function clearGame () {
    $("#images").empty();
    $("#answer").empty();
    $("#alert-text").empty();
    $("#alert-text-correctAnswer").empty();
}

// function to loop through and display 

 function displayAnswer() {
    for (var i = 0; i < gameAnswer.length; i++) {
        $("#answer").html("<h3>" + gameAnswer + "<h3>");
    }
}

function gameEnd () {
    clearGame();
    $("#timer").empty();
    $("#reset").show();
    $("#correct-answers").html("Correct Answers:" + " " + correctAnswers);
    $("#wrong-answers").html("Wrong Answers:" + " " + wrongAnswers);
    $("#unanswered").html("Unanswered:" + " " + unanswered);
}

// function gameReset () {
//     $("#start-button").show();
// }

// ------------------------ Timer -------------------------

// timer countdown and timer === 0 function 

function countDown () {
    gameAnswer = triviaQuestions[currentQuestion].answer;
    timerNumber--;
    $("#timer").html(timerNumber);
    if (timerNumber === 0) {
        unanswered++;
        stop();
        $("#alert-text").html("Time Is Up");
        displayAnswer(); // show correct answer
        $("#images").html("<img src=" + images[currentImage] + " width='200px'>");
        clearQuestionAndChoices(); // clear Q/A
        currentQuestion++;
        currentImage++;
        setTimeout(timeOut, 3000);
    }
}

function stop () {
    clearInterval(intervalID);
}

function timeOut () {
    clearInterval(intervalID);
    timerNumber = 30;
    displayQuestionAndChoices();
    clearGame();
}

// ---------------------- Game Start ------------------------
function startGame() {

    // $("#start").show();
    $("#reset").hide();

    $(document).ready(function(){
        
        $("#start-button").click(function(){
            $("#timer").html(timerNumber);
            countDown();
            $("#start-button").remove();
            displayQuestionAndChoices();
        });

        $("#choices").click(function(event){
            gameAnswer = triviaQuestions[currentQuestion].answer;
            var userGuess = $(event.target).attr("data-choices");
            console.log(gameAnswer, "GAME ANSWER");
            console.log(userGuess, "USER GUESSED");

            if (userGuess === gameAnswer) {
                correctAnswers++;
                console.log("Correct answers total" + " " + correctAnswers);

                $("#alert-text").html("CORRECT");
                $("#images").html("<img src=" + images[currentImage] + " width='200px'>");
                $("#answer").empty();
                clearQuestionAndChoices();
                stop();
            } else {
                wrongAnswers++;
                console.log("Wrong answer total" + " " + wrongAnswers);
                $("#alert-text").html("WRONG");
                $("#alert-text-correctAnswer").html(gameAnswer);
                // displayAnswer();
                clearQuestionAndChoices();
                $("#images").html("<img src=" + images[currentImage] + " width='200px'>");
                stop();
            }
            
            

            currentQuestion++;
            currentImage++;
            setTimeout(timeOut, 3000);

            if (currentQuestion === 10) {
                // timeOut();
                $("#images").html("<img src=" + images[currentImage] + " width='200px'>");
                // setTimeout(timeOut, 3000);
                clearGame();
                gameEnd();
            }

        });
        
        $("#reset-button").click(function() {
            $("#correct-answers").empty();
            $("#wrong-answers").empty();
            $("#unanswered").empty();
            startGame();
            // gameReset();    
            // $("#start-button").show();
        });
    });
}
startGame();

// ********** Pseuocode for what is not complete **********

// need to add functional reset button to final display page 
//     -was able to get the button to show up on display page and work 
//      on click 
//     -instead of game restarting on reset click - it just disappears 
//      which leads me to believe it's working and I'm missing something 
//      more in my reset-button code.  Need to get back to start page
//     -correct onclick event for game to restart when reset button is clicked
//     -i'm also getting errors in console that I don't have enough time to fix

                                  
                            // to do 

// figure out reset button and start game issue 
// reset game without refreshing page - function
