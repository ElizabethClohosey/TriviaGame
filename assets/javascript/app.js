// alert("TESTING");

// ------- global variables for images and questions ---------

// Object for all questions, choices and answers
var triviaQuestions = [

    // question 1 [0]
    {
        question: "What type of galaxy is the Milky Way Galaxy?",
        choices: ["Ellipitical", " Spiral", " Spiral Barred", " Irregular "],
        answer: "Spiral"
    },
    // question 2 [1]
    {
        question: "What is the largest planet in our solar system?  (Fun fact - this is also my favorite planet",
        choices: ["Earth", " Mars", " Neptune", " Jupiter"],
        answer: "Jupiter"
    },
    // question 3 [2]
    {
        question: "What is the smallest planet in our solar system?",
        choices: ["Pluto", " Venus", " Sature", " Mercury"],
        answer: "Mercury"
    },
    // question 4 [3]
    {
        question: "What has a gravitational pull so strong that even light cannot escape it?",
        choices: ["quasar", " nebula", "black hole", " red giants"],
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

// variables for game stats, timer and current game question 
var currentQuestion = 0;
var timer = 5;
var correctAnswers = 0;
var wrongAnswers = 0;

// ------------- end global variables for images and questions -----------

// ------------functions for images and questions ---------------
        

// function to display current question  and choices
function displayQuestion () {
    var gameQuestion = triviaQuestions[currentQuestion].question;
    var gameChoices = triviaQuestions[currentQuestion].choices;
    var gameAnswer = triviaQuestions[currentQuestion].answer;
    console.log("DISPLAY ANSWER " + gameAnswer);
    console.log("DISPLAY QUESTION " + gameQuestion);
    console.log("DISPLAY CHOICES " + gameChoices);

    $("#question").html(gameQuestion);
    // $("#choices").html("<h3>" + gameChoices + "</h3>");

    $("#choices").html(result);
        for (var i = 0; i < gameChoices.length; i++) {
            
            // var correctAnswer = questionsAnswers[initialQuestion].answer;

            var result = $("<button>");
            result.addClass("question-choices");
            result.attr("data-choices", gameChoices[i]);
            result.text(gameChoices[i]);
        
            $("#choices").prepend(result);
            console.log(result);
        }

    

    // for (var i = 0; i < gameChoices.length; i++) {
    //     $(gameChoices).html("<p>" + gameChoices + "<p>");
    //     console.log("GAME CHOICES " + gameChoices);
    // }
    
}
 displayQuestion ();

// function to display question answers 
//  function displayAnswer() {
//      var gameAnswer = triviaQuestions[currentQuestion].answer;
//      console.log("DISPLAY ANSWER " + gameAnswer);

//      $("#answer").html("<h3>" + gameAnswer + "<h3>");
//      $("#timer").html(timer);
//  }
//  displayAnswer();


// function to display images 
function displayImage() {
    $("#images").html("<img src=" + images[1] + " width='200px'>");
  }
  displayImage();

// ----------- end functions for images and questions -------------- 

// ------------------------ Timer -------------------------
var timerNumber = 5;
var intervalID;
                                    
// function run() {
    
// } 
// run();

function countDown () {
    clearInterval(intervalID);
    intervalID = setInterval(countDown, 1000);
    timerNumber--;
    $("#timer").html(timerNumber);
    if (timerNumber === 0) {
        stop();
        $("#alert-text").html("Time Is UP");
    }
}

function stop () {
    clearInterval(intervalID);
}

// ---------------------- Game Start ------------------------
// function removeStartButton () {
//     $("#start-button").remove();
// }

$(document).ready(function(){

    $("#start-button").click(function(){
        countDown();
        $("#start-button").remove();
        displayQuestion();
    });

 

  });

// $("#start-button").on("click", countDown, remove);
    // removeStartButton();
    
    











                    // future functions and stuff 
// ------------------------------------------------------------------

//  function nextQuestion () {
//     currentQuestion++;
//  }

// function timerReset () {

// }


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



// click start to start Game (#start).on("click", run)
// 20 second timer for each question
// if answer is correct show photo with "correct"
// if answer is incorrect show photo with "incorrect" and 
//     correct answer
// if time runs out show "time is up" and correct answer
// at end of game show number of correct answers, incorrect answers
//     unanswered and Start Over button
// Start over DOES NOT reload page, it only restarts game