// Make variables
var highscores = []
var leaderboard = []
var correctAnswer = []
var highBtn = document.querySelector(".highscores")
var scoreList = document.querySelector("#scoreList")
var startBtn = document.querySelector(".start")
var timerEl = document.querySelector("#timertext")
var quizPrompts = document.querySelector("#quizBox")
var quizQuestion = document.querySelector('#question')
var option1 = document.createElement('li')
var option2 = document.createElement('li')
var option3 = document.createElement('li')
var option4 = document.createElement('li')
var choices = document.querySelector('#choices')
// Make some questions and answers
var questions = [{
    question: "What is Seto Kaiba's signature monster?",
    options: ["Dark Magician", "Blue-eyes White Dragon", "Red-eyes Black Dragon", "Harpie Lady"],
}, {
    question: "What is one of the ways to win a game instantly?",
    options: ["Having all 5 pieces of Exodia in hand", "Standing up and walking away from the game", "Screaming profanities until the opponent leaves the table", "Summon every monster in your hand", "Catch the touchdown throw"],
}, {
    question: "What type of monsters does Maximillion Pegasus use?",
    options: ["Birds", "Toons", "Fish", "Dragons"],
}, {
    question: "Who owned Red-eyes Black Dragon before Joey Wheeler?",
    options: ["Weevil Underwood", "Rex Raptor", "Bandit Keith", "Yugi Muto"],
}, {
    question: "Who is the King of Games?",
    options: ["Mai Valentine", "Yugi Muto", "Tea Gardner", "Tristan Taylor"],
}]
var answers = ["Blue-eyes White Dragon", "Having all 5 pieces of Exodia in hand", "Toons", "Rex Raptor", "Yugi Muto"]
// Brings up start of quiz and consecutive questions

// Make a timer
var timeLeft = "";
let i = 0
var currentScore = ""


function next() {
    if (i < 4) {
        quizQuestion.textContent = questions[i].question;
        quizPrompts.setAttribute('style', 'display:flex');
        quizQuestion.setAttribute('style', 'display:block');
        quizQuestion.textContent = questions[i].question;
        // console.log(quizQuestion.textContent);
        option1.textContent = questions[i].options[0];
        option2.textContent = questions[i].options[1];
        option3.textContent = questions[i].options[2];
        option4.textContent = questions[i].options[3];
        // console.log(option1.textContent, option2.textContent, option3.textContent, option4.textContent);
        choices.append(option1)
        choices.append(option2)
        choices.append(option3)
        choices.append(option4)
        choices.setAttribute('style', 'display:flex');

    } else {
        var userScore = prompt("Please input your initials!")
        if (userScore.length!=2) {
            alert("Please enter your first & last initial only!")
            next();
        } else {
            localStorage.setItem("Initials",userScore)
        }
        currentScore = timeLeft + 1
        localStorage.setItem("Top Scores",currentScore)
        console.log(currentScore)
        clearInterval(timeInterval)
        quizPrompts.setAttribute('style', 'display:none');
        quizQuestion.setAttribute('style', 'display:none');
        choices.setAttribute('style', 'display:none');
        startBtn.setAttribute('style', 'display:flex');
        timerEl.setAttribute('style','display:none;')
    }
}
var timeInterval = ''
function tickTock() {
    timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Reduce `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else if (timeLeft === 0) {
            // When `timeLeft` is equal to , rename back to 'seconds'
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            startBtn.setAttribute('style', 'display:flex')
            confirm("Nice try! Wanna play again?")
        }
    }, 1000);
}
function countdown() {
    tickTock();
    timeLeft = 120;
    startBtn.setAttribute('style', 'display:none');
    next();

}

// Make quiz start click event
startBtn.addEventListener("click", countdown);
// Make answer click events
choices.addEventListener("click", function (event) {
    var userInput = event.target.innerHTML
    console.log(userInput, " this is the user input")
    console.log(answers[i], " this is current answer")
    if (userInput === answers[i]) {
        i++
        console.log("correct", " this is the text content")
        next()
    } else if (userInput !== answers[i]) {
        timeLeft = timeLeft - 10
        console.log("Oof!")
    }
})


// Store local high scores
highBtn.addEventListener("click", function () {
    console.log("I've been clicked")
    var leaderboard = [localStorage.getItem("Top Score")]
    leaderboard = document.createElement('<li>')
})

