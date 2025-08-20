/*
let checkBtn = document.getElementById("check-btn");
console.log(checkBtn)

let btns = document.getElementsByClassName('btn');
let btnsArr = new Array(btns)
console.log(btns)


let paragraphElements = document.getElementsByTagName('p')
console.log(paragraphElements)

let btnFrmQuery = document.querySelector(".btn")
console.log(btnFrmQuery)

let btnsFromQuery = document.querySelectorAll(".btn")
console.log(btnsFromQuery)


let newStyle = new Array()
console.log(newStyle)

newStyle.push("Andi", "Uzo", "Amira");
console.log(newStyle)

console.log(btnsArr)
*/

let randomNumber = Math.floor(Math.random() * 20 + 1);
let gameScore = 20;
let highscore = 0;
// console.log(randomNumber);

const userInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const numDisplayBox = document.querySelector(".number");
const body = document.querySelector("body");
const messageEl = document.querySelector(".message");
const userScore = document.querySelector(".score");
const userHighScore = document.querySelector(".highscore");

checkBtn.addEventListener("click", function () {
  // Input validation
  if (userInput.value === "") alert("Please Input a number from 1 to 20");

  //   converting the userInput value to number from string
  let guess = Number(userInput.value);

  if (guess === randomNumber) {
    numDisplayBox.textContent = randomNumber;
    body.classList.add("victory");
    messageEl.textContent = "Correct ✅";

    if(gameScore > highscore){
        highscore = gameScore
        userHighScore.textContent = highscore
    }

  } else {
    // if(guess > randomNumber) messageEl.textContent = "Too High 📈"
    // if(guess < randomNumber) messageEl.textContent = "Too Low 📉"

    // using the ternary operator
    // check ? action : fallback
    guess > randomNumber
      ? (messageEl.textContent = "Too High 📈")
      : (messageEl.textContent = "Too Low 📉");

    if (gameScore > 0) {
      gameScore = --gameScore;
      userScore.textContent = gameScore;
    }else{
        messageEl.textContent = "Game Over 😔. Click the Again Button to Play Again"
        checkBtn.style.display = "none"
    }
  }
});


againBtn.addEventListener("click", function(){
    body.classList.remove("victory");
    messageEl.textContent = "Start Guessing ...";
    userScore.textContent = "20";
    userInput.value = "";
    numDisplayBox.textContent = "?";
    gameScore = 20;
})