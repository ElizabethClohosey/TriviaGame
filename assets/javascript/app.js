
// ------- global variables ---------

// Object for all questions, choices and answers
var triviaQuestions = [

    // question 1 [0]
    {
        question: "What type of galaxy is the Milky Way Galaxy?",
        choices: ["Ellipitical", "Spiral", "Spiral Barred", "Irregular "],
        answer: "Spiral"
    },
    // question 2 [1]
    {
        question: "What is the largest planet in our solar system?  (Fun fact - this is also my favorite planet",
        choices: ["Earth", "Mars", "Neptune", "Jupiter"],
        answer: "Jupiter"
    },
    // question 3 [2]
    {
        question: "What is the smallest planet in our solar system?",
        choices: ["Pluto", "Venus", "Sature", "Mercury"],
        answer: "Mercury"
    },
    // question 4 [3]
    {
        question: "What has a gravitational pull so strong that even light cannot escape it?",
        choices: ["quasar", "nebula", "black hole", "red giants"],
        answer: "black hole"
    },
    // question 5 [4]
    {
        question: "What is the Earth's Moon commonly referred to? Hint - It's Latin for Moon and the name of one of my pups",
        choices: ["Sol", " Terra", " Belatrix", " Luna"],
        answer: "Luna"
    },
    // question 6 [5]
    {
        question: "How much time does it take for the Sun's Rays to reach Earth?",
        choices: ["24 hours", " 365 days", " 8 minutes", " 60 minutes"],
        answer: "8 minutes"
    },
    // question 7 [6]
    {
        question: "Which planet has approximately the same landmass as Earth?",
        choices: ["Venus", " Uranus", " Mars", " Jupiter"],
        answer: "Mars"
    },
    // question 8 [7]
    {
        question: "When was Pluto reclassified from a planet to a dwarf planet? (You're still a planet to me little buddy)",
        choices: ["2006", " 1999", " 2009", " 2012"], 
        answer: "2006"
    },
    // question 9 [8]
    {
        question: "Which planet is known as the Morning Star or the Evening Star?",
        choices: ["Mars", " Mercury", " Saturn", " Venus"],
        answer: "Venus"
    },
    // question 10 [9]
    {
        question: "What was the first planet discovered with the use of a telescope?",
        choices: ["Uranus", " Mars", " Neptune", "Pluto"],
        answer: "Uranus"
    }
]; 
// console.log(triviaQuestions);
// console.log(triviaQuestions[1].choices[3]); output - Jupiter

// array of images  
var images = ["assets/images/Milky_Way_Galaxy.jpg", "assets/images/Jupiter.jpg", "assets/images/Mercury.jpg", "assets/images/black_hole2.jpg", "assets/images/Luna.jpg", "assets/images/sun.jpg", "assets/images/mars2.jpg", "assets/images/pluto.jpg", "assets/images/venus.jpg", "assets/images/Uranus.jpg"];
// console.log(images);

                        // ---------------- Global Variables ------------------------
var currentQuestion = 0;
var currentImage = 0;
var correctAnswers = 0;
var wrongAnswers = 0;

var gameQuestion = triviaQuestions[currentQuestion].question;
var gameChoices = triviaQuestions[currentQuestion].choices;
var gameAnswer = triviaQuestions[currentQuestion].answer;
    console.log("DISPLAY ANSWER " + gameAnswer);
    // console.log("DISPLAY QUESTION " + gameQuestion);
    // console.log("DISPLAY CHOICES " + gameChoices);
    
var timerNumber = 65;
var intervalID;


                    // ------------ functions ---------------

// function to display current question  and choices
function displayQuestionAndChoices () {
    clearQuestionAndChoices();
    gameQuestion = triviaQuestions[currentQuestion].question;
    gameChoices = triviaQuestions[currentQuestion].choices;
    $("#question").html(gameQuestion);

    // $("#choices").html(result);

        for (var i = 0; i < gameChoices.length; i++) {
            console.log(gameChoices[i], 'game choice')
            // THANK YOU IAN!!!! 
            var result = $("<button>");
            result.addClass("question-choices");
            result.attr("data-choices", gameChoices[i]);
            result.text(gameChoices[i]);
        

            $("#choices").append(result);
            // console.log(result);
        }
}

function clearQuestionAndChoices () {
    $("#question").empty();
    $("#choices").empty();
}

// function to display answers to question 
 function displayAnswer() {
    for (var i = 0; i < gameAnswer.length; i++) {
        $("#answer").html("<h3>" + gameAnswer + "<h3>");
        console.log(displayAnswer);
    }
}

                        // only one line delete? ***

// function clearAnswer() {
//     $("#answer").remove();
// }

// function to display images 
// function displayImage() {
//     $("#images").html("<img src=" + images[currentImage] + " width='200px'>");
//   }

// function clearImages() {
//     probably will only be one line no function needed 
// }


// ------------------------ Timer -------------------------
function countDown () {
    clearInterval(intervalID);
    intervalID = setInterval(countDown, 1000);
    timerNumber--;
    $("#timer").html(timerNumber);
    if (timerNumber === 0) {
        stop();
        $("#alert-text").html("Time Is Up");
        displayAnswer(); // show correct answer
        // try below      ******************************
        $("#images").html("<img src=" + images[currentImage] + " width='200px'>");
        // $("#images").html("<img src=" + images[5] + " width='200px'>"); // showimage
        clearQuestionAndChoices(); // clear Q/A
    }
}

function stop () {
    clearInterval(intervalID);
}

function timeOut () {

}
// hold triviaQuestions
// delete images
// remove text


// ---------------------- Game Start ------------------------

$(document).ready(function(){
    // $("#timer").html(timerNumber);
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
        console.log(userGuess, "GAME GUESS");
        if (userGuess === gameAnswer) {
            correctAnswers++;
            console.log(correctAnswers);
            $("#alert-text").html("CORRECT");
            $("#images").html("<img src=" + images[currentImage] + " width='200px'>");
            // $("#images").html("<img src=" + images[5] + " width='200px'>");
            // hide time up 
            $("#answer").remove(); // hide answer
            clearQuestionAndChoices();
            // idkYet();
            stop();
            // timeOut();
        } 

        currentQuestion++;
        currentImage++;

        displayQuestionAndChoices();
    });
});

    
    











                    // possible future functions and stuff 
// ------------------------------------------------------------------
// else {
//     $("#alert-text").html("WRONG");
//     wrongAnswers++;
//     console.log(wrongAnswers);
//     stop();
//     clearQuestionAndChoices();
//     $("#images").html("<img src=" + images[0] + " width='200px'>");
//     displayAnswer();
// }
//  function nextQuestion () {
//     currentQuestion++;
//  }

// function timerReset () {

// }

// setTimeout(function(){ alert("Hello"); }, 3000);

// function timeOut () {
//     setTimeout('', 5000);
//     if (setTimeout === true) {
//     $("#alert-text").remove();
//     }
// }


                                   // to do 
// make correct answer click "correct" and incorrect answer click "wrong"
// make timeout between questions 
// remove correct, time up and answer (part of reset)
// switch to next question/answer and image group
// summary at the end 
// restart 

// curve heading  



                                // notes 

// time out between question and reuslts 
// at end of game show number of correct answers, incorrect answers
//     unanswered and Start Over button
// Start over DOES NOT reload page, it only restarts game


//                  Questions/Answers/Images
// --------------------------------------------------------------                        
// What type of galaxy is the Milky Way galaxy?
//     Spiral
// assets/images/Milky_Way_Galaxy.jpg

// What is the largest planet in our solar system? (FunFact - this planet also happens to be my favorite!)
//     Jupiter

// What is the smallest planet in our solar system? 
//     Mercury

// What has a gravitational pull so strong that even light cannot escape it?
//     Black Hole

// What is the Earth's Moon commonly referred to? Hint - It's Latin for Moon and the name of one of my pups.
//     Luna

// How much time does it take for the Sun's Rays to reach Earth?
//     8 minutes

// Which planet has approximately the same landmass as Earth?
//     Mars

// When was Pluto reclassified from a planet to a dwarf planet? (You're still a planet to me little buddy)
//     2006

//  Which planet is known as the Morning Star or the Evening Star?
//         VENUS

// What was the first planet discovered with the use of a telescope?
//     Uranus 