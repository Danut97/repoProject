
function getRandomChoice() {
  let choice = ["rock", "paper", "scissor"];
  let indexRandom = Math.floor(Math.random() * 3);
  let computerChoice = choice[indexRandom];
  return computerChoice;
}

console.log(getRandomChoice());

function playGame(userChoice) {
  let computerChoice = getRandomChoice();

  console.log("computerChoice =", computerChoice);
  console.log("userChoice =", userChoice);

  let result = getWinner(userChoice, computerChoice);
  return result;
}



function createUserUi() {
  let resultDiv = document.createElement("div");
  document.body.append(resultDiv);

  let buttonRock = document.createElement("button");
  buttonRock.innerText = "Rock";
  document.body.append(buttonRock);
  buttonRock.addEventListener("click", function () {
    console.log("User a dat click Rock");
    const result = playGame("rock");
    resultDiv.innerText = result;
  });

  let buttonPaper = document.createElement("button");
  buttonPaper.innerText = "Paper";
  document.body.append(buttonPaper);
  buttonPaper.addEventListener("click", function () {
    console.log("User a dat click Paper");
    const result = playGame("paper");
    resultDiv.innerText = result;
  });

  let buttonScissor = document.createElement("button");
  buttonScissor.innerText = "Scissor";
  document.body.append(buttonScissor);
  buttonScissor.addEventListener("click", function () {
    console.log("User a dat click Scissor");
    const result = playGame("scissor");
    resultDiv.innerText = result;
  });
}

createUserUi();


function getWinner(userChoice, computerChoice) {
  switch (userChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          return "Egal";
        case "paper":
          return "PC Win";
        case "scissor":
          return "User Win";
        default:
          console.log("Valori incomparabile");
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "rock":
          return "User Win";
        case "paper":
          return "Egal";
        case "scissor":
          return "PC Win";
        default:
          console.log("Valori incomparabile");
      }
      break;
    case "scissor":
      switch (computerChoice) {
        case "rock":
          return "PC Win";
        case "paper":
          return "User Win";
        case "scissor":
          return "Egal";
        default:
          console.log("Valori incomparabile");
      }
      break;
    default:
      console.log("Valori incomparabile");
  }
}