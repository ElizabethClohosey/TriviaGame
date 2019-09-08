// alert("TESTING");

//                     global variables
// ------------------------------------------------------------

var triviaQuestions = [
    {
        question: "What type of galaxy is the Milky Way Galaxy?",
        choices: ["Ellipitical", " Spiral", " Spiral Barred", " Irregular "],
        answer: "Spiral"
    },
    
    {
        question: "What is the largest planet in our solar system?  (Fun fact - this is also my favorite planet",
        choices: ["Earth", " Mars", " Neptune", " Jupiter"],
        answer: "Jupiter"
    },

    {
        question: "What is the smallest planet on our solar system?",
        choices: ["Pluto", " Venus", " Sature", " Mercury"],
        answer: "Mercury"
    },

    {
        question: "What hads a gravitational pull so strong that even light cannot escape it?",
        choices: ["quasar", " nebula", "black hole", " red giants"],
        answer: "black hole"
    },

    {
        questions: "What is the Earth's Moon commonly referred to? Hint - It's Latin for Moon and the name of one of my pups",
        choices: ["Sol", " Terra", " Belatrix", " Luna"],
        answer: "Luna"
    },

    {
        question: "How much time does it take for the Sun's Rays to reach Earth?",
        choices: ["24 hours", " 365 days", " 8 minutes", " 60 minutes"],
        answer: "8 minutes"
    },

    {
        question: "Which planet has approximately the same landmass as Earth?",
        choices: ["Venus", " Uranus", " Mars", " Jupiter"],
        answer: "Mars"
    },

    {
        question: "When was Pluto reclassified from a planet to a dwarf planet? (You're still a planet to me little buddy)",
        choices: ["2006", " 1999", " 2009", " 2012"], 
        answer: "2006"
    },

    {
        question: "What are the most luminous objects in the known Universe?",
        choices: ["black holes", " stars", " quasars", " planets"],
        answer: "quasars"
    },

    {
        question: "What was the first planet discovered with the use of a telescope?",
        choices: ["Uranus", " Mars", " Neptune", "Pluto"],
        answer: "Uranus"
    }
]; 
console.log(triviaQuestions);
// console.log(triviaQuestions[1].choices[3]); output - Jupiter











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

// What are the most luminous objects in the known Universe?
//     Quasars

// What was the first planet discovered with the use of a telescope?
//     Uranus 



// click start to start Game
// 20 second timer for each question
// if answer is correct show photo with "correct"
// if answer is incorrect show photo with "incorrect" and 
//     correct answer
// if time runs out show "time is up" and correct answer
// at end of game show number of correct answers, incorrect answers
//     unanswered and Start Over button
// Start over DOES NOT reload page, it only restarts game