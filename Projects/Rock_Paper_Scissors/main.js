/* Before we start, we deactivate the buttons. */

const iconSelect = document.querySelectorAll('.selectDiv');
const btnGame = document.querySelector('#btnGame');
const textWinner = document.querySelector('h2');
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
        return "user";
    }
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beat Rock");
        return "computer";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beat Rock");
        return "user";
    }
    if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        console.log("You Lose! Scissors beat Paper"); (playerScore == computerScore) 
        return "computer";
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log("You Win! Scissors beat Paper");
        return "user";
    }
    if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        console.log("You Lose! Rock beat Scissors");
        return "computer";
    }
  }

  function whoWin (){
      let winner = playRound();
      if(winner == "user") textWinner.textContent = "YOU WIN!";
      else if (winner == "computer") textWinner.textContent = "YOU LOSE!";
      else textWinner.textContent = "THIS IS A DRAW!";
      for (let i = 0; i < iconSelect.length; i++){
        iconSelect[i].setAttribute("style", "pointer-events: none;");
      }
      btnGame.textContent = "Play Again";
      btnGame.disabled = false;
      
  }

  function activeBtn(){
    for (let i = 0; i < iconSelect.length; i++){
        iconSelect[i].setAttribute("style", "pointer-events: auto;");
        iconSelect[i].addEventListener("click", whoWin);
    }
    textWinner.textContent = "Are you ready?";
    btnGame.textContent = "Select Your Hand";
    btnGame.disabled = true;
  }

  btnGame.addEventListener("click", activeBtn);
