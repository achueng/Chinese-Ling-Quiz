// Declare global var: correct, wrong, container, highscore, timer, quiz, intro, startBtn
// Header
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
// Either one? 
var highScores = document.querySelector(".high-scores");
var highScoreBtn = document.querySelector("#high-score-btn");
var timer = document.querySelector(".timer");
var time = document.querySelector("#time");

// Container/Box
var box = document.querySelector(".custom-box");
var intro = document.querySelector(".intro");
var startBtn = document.querySelector("#start-btn");
var quiz = document.querySelector(".quiz");
var questionEl = document.querySelector(".question");
var optionA = document.querySelector(".optA");
var optionB = document.querySelector(".optB");
var optionC = document.querySelector(".optC");
var optionD = document.querySelector(".optD");
var result = document.querySelector(".answer");

// When webpage loads, want to see view highscores, timer, score, and intro page
// Declare toggle function to change intro to quiz display & trigger timer via start button
    // toggle .add("hide")/.remove("hide")

// Timer starts --> setInterval(someFunction, 1000)
    // Declare var time = starting time (seconds)
    // Time --
    // Changing timer number is added to the span#timer --> timerEL.textContent = time
    
    // If/else conditional to indicate when to stop quiz --> use clearInterval();
        // If (time === 0) {clearInterval{};}

// Declare someFunction
    // Declare DOM elements: question, options, optA, optB, optC, optD, answer
    // Declare array of objects (rep questions) consisting of options & boolean
        // var array = [
        // {
        // question: "1. Here is a question.",
        // options: ["a", "b", "c", "d"],
        // answer: index # of correct answer in options array,
        // },
        // {
        // question: "2. Here is a question.",
        // options: ["a", "b", "c", "d"],
        // answer: index # of correct answer in options array,
        // },
        // ];

    // Loop through array --> for (var i=0; i<array.length; i++)
        // Get the object number i and extract the data
            // Get each object's question key - using set textContent
                // .question.textContent = array[i].question
            // Get each object's option key
                // .optA.textContent = array[i].option[0]
                // .optB.textContent = array[i].option[1]
                // .optC.textContent = array[i].option[2]
                // .optD.textContent = array[i].option[3]
            // Get each object's answer key
                // array[i].answer
        // Use if/else conditional to track correct and wrong
            // If user clicks on correct answer -- use addEventListener ("click", ???) --> array[i].answer
                // set element with class .answer to "Correct!"
                // correct++
            // Else
                // set element with class .answer to "Wrong!"
                // wrong++
                // penalize user on time: timer -2sec
    // 
