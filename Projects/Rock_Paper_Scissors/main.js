const iconSelect = document.querySelectorAll('.selectDiv');
let btnGame = document.querySelector('#btnGame');
let textWinner = document.querySelector('h2');
const newGame = document.querySelector('#newGame');
let score = document.querySelector('.score');
let computerScore = 0;
let userScore = 0;


for (let i = 0; i < iconSelect.length; i++){
    iconSelect[i].setAttribute("style", "pointer-events: none;");
}

function computerPlay () {
    const number = Math.floor(Math.random() * 3) + 1;
    switch(number){
        case 1:
        return "rock";
        break;

        case 2:
        return "paper";
        break;

        case 3:
        return "scissors";
        break;
    }
  }

  function playRound () {
    const playerSelection = "rock";
    const computerSelection = computerPlay();

    if (playerSelection.toLowerCase() == computerSelection) {
        console.log("Draw!");
        return "draw";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        console.log("You Win! Rock beat Scissors");
        userScore++;
        return "user";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beat Rock");
        computerScore++;
        return "computer";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beat Rock");
        userScore++;
        return "user";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beat Paper");
        computerScore++;
        return "computer";
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beat Paper");
        userScore++;
        return "user";
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beat Scissors");
        computerScore++;
        return "computer";
    }
  }

  function whoWin (){
      let winner = playRound();
      score.textContent = "YOU " + userScore + " - " + computerScore + " COM";
      for (let i = 0; i < iconSelect.length; i++){
        iconSelect[i].setAttribute("style", "pointer-events: none;");
      }
      checkGame();
  }

  function checkGame(){
    if(userScore == 5) {
        newGame.style.display = "block";
        textWinner.textContent =  "You Win!";
    } else if (computerScore == 5){
        newGame.style.display = "block";
        textWinner.textContent =  "You Lose!";
    } else {
        btnGame.textContent = "Play Again";
        btnGame.disabled = false;
    }
  }

  function activeBtn(){
    for (let i = 0; i < iconSelect.length; i++){
        iconSelect[i].setAttribute("style", "pointer-events: auto;");
        iconSelect[i].addEventListener("click", whoWin);
    }
    textWinner.textContent = "Are you ready?";
    btnGame.textContent = "SELECT YOUR HAND";
    btnGame.disabled = true;
  }

  function restartGame(){
    newGame.style.display = "none";
    computerScore = 0;
    userScore = 0;
    score.textContent = "";
    textWinner.textContent = "Are you ready?";
    btnGame.textContent = "START";
    btnGame.disabled = false;
  }

  btnGame.addEventListener("click", activeBtn);
  newGame.addEventListener("click", restartGame);

