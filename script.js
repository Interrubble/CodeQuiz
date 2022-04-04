// Make variables
// Make some questions and answers
var Questions = [{
    question: "What is Seto Kaiba's signature monster?",
    options: ["Dark Magician","Blue-eyes White Dragon","Red-eyes Black Dragon","Harpie Lady"],
    correct: "Blue-eyes White Dragon"
},{
    question: "What is one of the ways to win a game instantly?",
    options: ["Having all 5 pieces of Exodia in hand","Standing up and walking away from the game","Screaming profanities until the opponent leaves the table","Summon every monster in your hand","Catch the touchdown throw"],
    correct: "Having all 5 pieces of Exodia in hand"
},{
    question: "What type of monsters does Maximillion Pegasus use?",
    options: ["Birds","Toons","Fish","Dragons"],
    correct: "Toons"
},{
    question: "Who owned Red-eyes Black Dragon before Joey Wheeler?",
    options: ["Weevil Underwood","Rex Raptor","Bandit Keith","Yugi Muto"],
    correct: "Rex Raptor"
},{
    question: "Who is the King of Games?",
    options: ["Mai Valentine","Yugi Muto","Tea Gardner","Tristan Taylor"],
    correct: "Yugi Muto"
},

// Make a timer
function countdown() {
    var timeLeft = 30;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds remaining"
  
      if (timeLeft===0){
        clearInterval(timeInterval);
        timerEl.setAttribute("style","display:none;")
        
        displayMessage();
      }
    }, 1000);
  }
// Make buttons


// Store local high scores
