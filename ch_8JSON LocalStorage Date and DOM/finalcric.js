document.querySelector(
  ".firstMessage"
).innerText = `Choice:0 for Bat, 1 for Ball, 2 for Stump`;
document.querySelector(
  ".secondMessage"
).innerText = `Hope you would like the game.`;
// alert("Choice:0 for Bat, 1 for Ball, 2 for Stump");
// alert("Hope you would like the game.");

let bat = 0,
  ball = 1,
  stump = 2;

let score = {
  win: 0,
  loss: 0,
  draw: 0,
  displayScore: function () {
    return `No of Wins:${score.win},

      No of Losses:${score.loss},

      No of Draws:${score.draw}`;
  },
};

// let computer_choice; global variable
function computerChoice() {
  //local variable
  let computer_choice = Math.floor(Math.random() * 3);
  return computer_choice;
}

function getResult(userMove, computerMove) {
  if (userMove == bat) {
    //Nested IF ELSE
    if (computerMove == bat) {
      score.draw++;
      return "draw";
    } else if (computerMove == ball) {
      score.win++;
      return "User wins";
    } else if (computerMove == stump) {
      score.loss++;
      return "Computer wins";
    }
  } else if (userMove == ball) {
    if (computerMove == ball) {
      score.draw++;

      return "Draw";
    } else if (computerMove == bat) {
      score.loss++;

      return "Computer Wins";
    } else if (computerMove == stump) {
      score.win++;
      return "User Wins";
    }
  } else {
    if (computerMove == stump) {
      score.draw++;

      return "Draw";
    } else if (computerMove == bat) {
      score.win++;

      return "User Wins";
    } else if (computerMove == ball) {
      score.loss++;

      return "Computer Wins";
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem("Score", JSON.stringify(score));

  document.querySelector(".userMove").innerText = `User choice is: ${userMove}`;

  document.querySelector(
    ".computerMove"
  ).innerText = `Computer choice is: ${computerMove}`;

  document.querySelector(".result").innerText = `Result is: ${result}`;

  document.querySelector(".score").innerText = `Score is:

  ${score.displayScore()}`;

  console.log(score);
}
