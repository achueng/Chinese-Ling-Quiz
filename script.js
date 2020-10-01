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
var timeEl;

// When webpage loads, want to see view highscores, timer, score, and intro page
// Declare toggle function to change intro to quiz display & trigger timer via start button
    // click event listener on start button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    // toggle classList.add/remove("hide")
    intro.classList.add("hide");
    quiz.classList.remove("hide");

    // Timer starts
    timeEl = setInterval(quizTime, 1000)
}

function quizTime() {
    var timeElapsed = parseInt(time.textContent);
    timeElapsed--
    // Changed timeElapsed number is added to the span #time
    time.textContent = timeElapsed;
    // If/else conditional to indicate when to stop quiz --> use clearInterval();
    if (timeElapsed === 0) {
        clearInterval(timeEl);
    }
}

// Declare array of objects consisting of questions & options & answers
// The value of the key answer is a number that corresponds to the index of the correct answer in the array of the key options.
var quizContent = [
    {
        question: "1. Here is a random question.",
        options: ["option a", "option b", "option c", "option d"],
        answer: 2
    },
    // {
    //     question: "2. Here is another random question.",
    //     options: ["a", "b", "c", "d"],
    //     answer: 4
    // }
];

// Click event on a button will trigger for loop
// Loop through quizContent array
for (var i=0; i<quizContent.length; i++) {
    // Get the object number i (index of array) and extract the question
    var questions = quizContent[i].question;
        // Overwrite the qustionEl
        questionEl.textContent = questions;
    // Get the object number i (index of array) and extract the options
    var optA = quizContent[i].options[0];
        // Overwrite whatever was in optionA
        optionA.textContent = optA;    
    var optB = quizContent[i].options[1];
        optionB.textContent = optB;
    var optC = quizContent[i].options[2];
        optionC.textContent = optC;
    var optD = quizContent[i].options[3];
        optionD.textContent = optD;
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
    console.log(optA, optB, optC, optD);
}
