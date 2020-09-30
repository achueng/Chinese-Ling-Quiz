// Declare global var: correct, wrong, container, highscore, timer, quiz, intro, startBtn

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

    // Loop through array --> for (var i=0; i<array.length; i++) {
        // Get the object number i and extract the data
            // Get each key's value to be appended to a place on html represented by an element
        // Use if/else conditional to track correct and wrong
            // If user's click === options.indexOf[answer], correct++
            // Else wrong++ ---> penalize user on time: timer -2sec
    // 
