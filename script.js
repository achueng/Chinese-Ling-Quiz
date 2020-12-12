// Declare global var: correct, wrong, container, highscore, timer, quiz, intro, startBtn
// Header
var correct = document.querySelector("#correctCount");
var wrong = document.querySelector("#wrongCount");
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
var optBtn = document.querySelectorAll(".option-btn");
var optionA = document.querySelector(".optA");
var optionB = document.querySelector(".optB");
var optionC = document.querySelector(".optC");
var optionD = document.querySelector(".optD");
var result = document.querySelector(".answer");
var subScore = document.querySelector(".submit-score");
var submitBtn = document.querySelector("#submit-btn");

// High Scores Page
var highScoresList = document.querySelector(".highscores-list");
var listEl = document.querySelector("ul");
var backBtn = document.querySelector(".back-btn");

var timeElapsed;
var timeEl;
var currentQuestion = {};
var questionCounter;
var correctAnswer;
var userAnswer;
var correctCount =  0;
var wrongCount = 0;
var finalUserScore;

// When webpage loads, want to see view highscores, timer, score, and intro page
// Declare toggle function to change intro to quiz display & trigger timer via start button
    // click event listener on start button
startBtn.addEventListener("click", startQuiz);
highScoreBtn.addEventListener("click", showHighScores);
backBtn.addEventListener("click", homePage);
submitBtn.addEventListener("click", submitScore);

function startQuiz() {
    // toggle classList.add/remove("hide")
    intro.classList.add("hide");
    quiz.classList.remove("hide");
    highScoresList.classList.add("hide");
    highScoreBtn.classList.add("hide");
    subScore.classList.add("hide");

    // Timer starts
    timeEl = setInterval(quizTime, 1000)

    questionCounter = -1;
    nextQuestion();
}

function quizTime() {
    timeElapsed = parseInt(time.textContent);
    timeElapsed--
    // Changed timeElapsed number is added to the span #time
    time.textContent = timeElapsed;
    // If/else conditional to indicate when to stop quiz --> use clearInterval();
    if (timeElapsed === 0) {
        submitPage();
        clearInterval(timeEl);
    }
}

function showHighScores() {
    // toggle classList.add/remove("hide")
    intro.classList.add("hide");
    quiz.classList.add("hide");
    highScoresList.classList.remove("hide");
    subScore.classList.add("hide");

    var storedScores = localStorage.getItem("scores")
    var ss = JSON.parse(storedScores);
    if (ss !== null) {
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.textContent = ss;
        listEl.prepend(li);
    }
}

function homePage() {
    location.reload();
    // toggle classList.add/remove("hide")
    intro.classList.remove("hide");
    quiz.classList.add("hide");
    highScoresList.classList.add("hide");
    subScore.classList.add("hide");
}

// Declare array of objects consisting of questions & options & answers
// The value of the key answer is a number that corresponds to the index of the correct answer in the array of the key options.
var quizContent = [
    {question: "1. Compared to western alphabetic letters, Chinese characters usually",
        options: [
        "a. are more visually dense", 
        "b. are more phonetically transparent", 
        "c. more directly reflect pronunciation", 
        "d. have a more uniform stroke count"],
        answer: 0
    },
    {question: "2. In linguistics, the word 'diachronic' means",
        options: [
        "a. to mispronounce a word twice", 
        "b. heterophobic", 
        "c. having two roots", 
        "d. over the passage of time"],
        answer: 3
    },
    {question: "3. Which of the following can make an acceptable Mandarin 2-syllable noun?",
        options: [
        "a. N+N", 
        "b. N+V", 
        "c. V+V", 
        "d. all of the above"],
        answer: 3
    },
    {question: "4. When language changes, which of the following changes least quickly?",
        options: [
        "a. pronunciation", 
        "b. syntax", 
        "c. lexicon", 
        "d. meaning"],
        answer: 1
    },
    {question: "5. When writing songs in Chinese, the tones",
        options: [
        "a. are taken into account when writing songs in Mandarin", 
        "b. turn into glottal stops", 
        "c. are taken into account when writing songs in Cantonese", 
        "d. are used to punctuate the significance"],
        answer: 2
    },
    {question: "6. All of the following are related to dialect variation except",
        options: [
        "a. gender", 
        "b. hair color", 
        "c. geography", 
        "d. economic class"],
        answer: 1
    },
    {question: "7. Shanghainese, Cantonese, Min and Hakka are called 'dialects' because",
        options: [
        "a. they belong to the same political entity", 
        "b. they are geographically close", 
        "c. they are mutually intelligible", 
        "d. they are mutually unintelligible"],
        answer: 0
    },
    {question: "8. Words in different dialects or languages that have the same origin are called",
        options: [
        "a. homorigins", 
        "b. synonyms", 
        "c. cognates", 
        "d. antonyms"],
        answer: 2
    },
    {question: "9. In linguistics, another word for 'contemporary' is",
        options: [
        "a. allomorphic", 
        "b. synchronic", 
        "c. homographic", 
        "d. fragilistic"],
        answer: 1
    },
    {question: "10. Chinese characters are hard to learn to write because",
        options: [
        "a. there are few clues where one character ends and another begins", 
        "b. writing them from left to right is difficult", 
        "c. the number of strokes that must fit in a given space is relatively high", 
        "d. the learner gets no help from the phonetic element"],
        answer: 2
    },
    {question: "11. Chinese characters were first used to",
        options: [
        "a. predict future events", 
        "b. intimidate neighboring tribes", 
        "c. indicate pronunciation of Tibetan words", 
        "d. communicate with traders from the west"],
        answer: 0
    },
    {question: "12. The most common way to create a new Chinese character is which method?",
        options: [
        "a. the phonetic borrowing method ", 
        "b. the pictographic method", 
        "c. the compound indicative method", 
        "d. the phonetic compound method "],
        answer: 3
    },
    {question: "13. Which of the following can make an acceptable Mandarin word?",
        options: [
        "a. bound root + bound root", 
        "b. bound root + Root word", 
        "c. Root word + bound root", 
        "d. all of the above"],
        answer: 3
    },
    {question: "14. The same phonetic radical in different characters",
        options: [
        "a. is always pronounced differently", 
        "b. is always pronounced the same", 
        "c. is often pronounced differently", 
        "d. is always completely predictable"],
        answer: 2
    },
    {question: "15. The most frequent characters are, on average,",
        options: [
        "a. the least regular", 
        "b. the most regular", 
        "c. the least common", 
        "d. the rarest"],
        answer: 0
    }
];

function nextQuestion() {
    if (questionCounter === quizContent.length -1 ) {
        submitPage();
        clearInterval(timeEl);
    }
    else {
    questionCounter++;
    currentQuestion = quizContent[questionCounter];
    questionEl.textContent = currentQuestion.question;
    optionA.textContent = currentQuestion.options[0];
    optionB.textContent = currentQuestion.options[1];
    optionC.textContent = currentQuestion.options[2];
    optionD.textContent = currentQuestion.options[3];
    correctAnswer = currentQuestion.answer
    }
}

// Listen for user's click on each option button
for (var i=0; i<optBtn.length; i++){
    optBtn[i].addEventListener("click", clickBtn);
}

function clickBtn(event) {
    var userChoice = event.target;
    userAnswer = userChoice.getAttribute("data-option");

    // If userChoice is the same as correctAnswer, show 'correct' in answer span (HTML) and increment correct score; else show "wrong" and increment wrong score;
    if(userAnswer == correctAnswer) {
        result.textContent = "Correct!";
        correctCount++
        correct.textContent = correctCount;
    }
    else {
        result.textContent = "Wrong!";
        wrongCount++
        wrong.textContent = wrongCount;
    }

    nextQuestion();
}

function submitPage() {
    intro.classList.add("hide");
    quiz.classList.add("hide");
    highScoresList.classList.add("hide");
    highScoreBtn.classList.add("hide");
    subScore.classList.remove("hide");
}

function submitScore(event) {
    event.preventDefault();
    // Calculate finalScore
    var finalScore = correctCount - wrongCount + timeElapsed;
    // Grab user's name from input element
    var userName = document.querySelector("#user-name").value;
    // Create list item element
    var li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    // Add user's final score into list item, and add it to the high scores list
    finalUserScore = userName + " " + finalScore;
    li.textContent = finalUserScore;
    listEl.appendChild(li);

    showHighScores();

    // Store finalUserScore in local storage
    localStorage.setItem("scores", JSON.stringify(finalUserScore));
}