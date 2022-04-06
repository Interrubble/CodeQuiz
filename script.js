// Make variables
var highscores = []
var leaderboard = []
var quizView = []
var highBtn = document.querySelector(".highscores")
var startBtn = document.querySelector(".start")
var timerEl = document.querySelector("#timertext")
var quizPrompts = document.querySelector("#quizBox")
// Make some questions and answers
var questions = [{
    question: "What is Seto Kaiba's signature monster?",
    options: ["Dark Magician", "Blue-eyes White Dragon", "Red-eyes Black Dragon", "Harpie Lady"],
    correct: "Blue-eyes White Dragon"
}, {
    question: "What is one of the ways to win a game instantly?",
    options: ["Having all 5 pieces of Exodia in hand", "Standing up and walking away from the game", "Screaming profanities until the opponent leaves the table", "Summon every monster in your hand", "Catch the touchdown throw"],
    correct: "Having all 5 pieces of Exodia in hand"
}, {
    question: "What type of monsters does Maximillion Pegasus use?",
    options: ["Birds", "Toons", "Fish", "Dragons"],
    correct: "Toons"
}, {
    question: "Who owned Red-eyes Black Dragon before Joey Wheeler?",
    options: ["Weevil Underwood", "Rex Raptor", "Bandit Keith", "Yugi Muto"],
    correct: "Rex Raptor"
}, {
    question: "Who is the King of Games?",
    options: ["Mai Valentine", "Yugi Muto", "Tea Gardner", "Tristan Taylor"],
    correct: "Yugi Muto"
}]
// Brings up start of quiz and consecutive questions
// quizPrompts = if (options != correct) {
        //     timeLeft=timeLeft - 10
            
        // } else 
// Make a timer
var timeLeft = "";
function countdown() {
    startBtn.setAttribute('style','display:none;')
    var timeLeft = setInterval(function () {
        for (let timeLeft = 120; timeLeft > 0; timeLeft--) {
            if (timeLeft===0){
                alert("Nice try! Maybe next time!")
                startBtn.setAttribute('style','display:flex')
                timeLeft=""
            }
            console.log(timeLeft)
        }
        // if (timeLeft === 0) {
        //     alert("Nice try! Maybe next time!")
        // } else {
        //     localStorage.setItem(timeLeft)
        // }
    }, 1000);
}
// Make quiz start click event
startBtn.addEventListener("click",countdown);
// Make answer click events


// Store local high scores
highBtn.addEventListener("click", function(){
    console.log("I've been clicked")
})