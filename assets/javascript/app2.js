$(document).ready(function(){



// ------- global variables ---------

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

                        // ---------------- Global Variables ------------------------
var currentQuestion = 0;
var currentImage = 0;
var correctAnswers = 0;
var wrongAnswers = 0;

var gameQuestion = triviaQuestions[currentQuestion].question;
var gameChoices = triviaQuestions[currentQuestion].choices;
var gameAnswer = triviaQuestions[currentQuestion].answer;
    console.log("DISPLAY ANSWER " + gameAnswer);
    console.log("DISPLAY QUESTION " + gameQuestion);
    console.log("DISPLAY CHOICES " + gameChoices);

//console.log(answerValue);

var timerNumber = 5;
var intervalID;
var clockRunning = false;

var wins = 0;
var losses = 0;
var currentQuestion = 0;
var questionAmount = 9;
var answerValue = [];
console.log(answerValue);


                                    // timer 
function timeConverter(event) {
    var minutes = Math.floor(event / 60);
    var seconds = event - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + " : " + seconds;
}

function startTimer () {
    var timeConvert = timeConverter(timerNumber--);
    $("#timer").text(timeConvert);

    if (timerNumber === 0) {
        alert("Time is up bitch");
        clearInterval(intervalID);
    }

}

function stop () {
    clearInterval(intervalID);
}

function choicesLoop () {
    for (var i = 0; i < gameChoices.length; i++) {
        // THANK YOU IAN!!!! 
        var result = $("<button>");
        result.addClass("question-choices");
        result.attr("data-choices", gameChoices[i]);
        result.text(gameChoices[i]);

        $("#choices").prepend(result);
        console.log(result);

        answerValue = $(result).attr("data-choices");
        console.log(answerValue);
        
    }

    // if (gameAnswer === answerValue) {
    //     console.log('test' + answerValue);
    // }
    
}

$("#start-button").on("click", function() {
    if (!clockRunning) {
        clockRunning = true;
        intervalID = setInterval(startTimer, 1000); //come back when function is ready
        $("#start-button").hide();
        $("#question").html(gameQuestion);
        choicesLoop();
        // $("#choices").html(gameChoices);   
    }

});



$("button").click(function() {
    answerValue.push(answerValue);
    if (gameAnswer === answerValue) {
        console.log('test' + answerValue);
    }
});

    // var answerValue = $(result).attr("data-choices");
    // for (var i = 0; i < gameChoices.length; i++) {
    //     // THANK YOU IAN!!!! 
    //     var result = $("<button>");
    //     result.addClass("question-choices");
    //     result.attr("data-choices", gameChoices[i]);
    //     result.text(gameChoices[i]);

    //     $("#choices").prepend(result);
    //     console.log(result);
    // }
    // choicesLoop();
    
   
});





// add images to objects