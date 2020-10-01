// Declare global var: correct, wrong, container, highscore, timer, quiz, intro, startBtn
// Header
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
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

// High Scores Page
var highScoresList = document.querySelector(".highscores-list");
var backBtn = document.querySelector(".back-btn");

var timeEl;
// var userChoice;

// When webpage loads, want to see view highscores, timer, score, and intro page
// Declare toggle function to change intro to quiz display & trigger timer via start button
    // click event listener on start button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    // toggle classList.add/remove("hide")
    intro.classList.add("hide");
    quiz.classList.remove("hide");
    highScoresList.classList.add("hide");
    highScoreBtn.classList.add("hide");

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

highScoreBtn.addEventListener("click", showHighScores);

function showHighScores() {
    // toggle classList.add/remove("hide")
    intro.classList.add("hide");
    quiz.classList.add("hide");
    highScoresList.classList.remove("hide");
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
    // Get the object number i and extract the options
    var optA = quizContent[i].options[0];
        // Overwrite whatever was in optionA
        optionA.textContent = optA;    
    var optB = quizContent[i].options[1];
        optionB.textContent = optB;
    var optC = quizContent[i].options[2];
        optionC.textContent = optC;
    var optD = quizContent[i].options[3];
        optionD.textContent = optD;
    // Get the object number i and extract the answer
    var correctAnswer = quizContent[i].answer;
}

console.log(correctAnswer);
// Use if/else conditional to track correct and wrong
// Listen for user's click on each option button
// optionA.parentElement.addEventListener("click", clickBtn);
// optionB.parentElement.addEventListener("click", clickBtn);
// optionC.parentElement.addEventListener("click", clickBtn);
// optionD.parentElement.addEventListener("click", clickBtn);

// console.log(optionA.parentElement.getAttribute("data-option"));
// console.log(optionB.parentElement.getAttribute("data-option"));
// console.log(optionC.parentElement.getAttribute("data-option"));
// console.log(optionD.parentElement.getAttribute("data-option"));

// function clickBtn(event) {
//     var userChoice = event.target.getAttribute("data-option");
//     console.log(userChoice);
// }

// If userChoice (gets value of data-option == options[_]) === correctAnswer, show 'correct' in answer span (HTML) and increment correct score
    // if (userChoice == correctAnswer) {
    //     result.textContent = "Correct!"
    //     var numsC = parsrInt(correct.textContent);
    //     correct.textContent = numC++
    // }
    // else {
    //     result.textContent = "Wrong!"
    //     var numsW = parsrInt(wrong.textContent);
    //     wrong.textContent = numW++




        

                // penalize user on time: timer -2sec


